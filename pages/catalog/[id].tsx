import Head from 'next/head';
import ProductCards from '@/components/common/Products/ProductCards';
import Breadcrumbs from '@/components/common/UI/Breadcrumbs';
import Discounts from '@/components/common/Subscribe/Discounts';
import ProductSLider from '@/components/Catalog/ProductSLider';
import ProductPrice from '@/components/Catalog/ProductPrice';
import { IProductInfo, setUserInfo } from '@/store/slicers/userSlice';
import Star from '@/assets/images/icons/star.svg';
import Reviews from '@/components/Catalog/Reviews';
import About from '@/components/Catalog/About';
import Button from '@/components/common/UI/Button';
import $api from '@/services/api';
import EndpointNames from '@/config/api';
import { useEffect, useState } from 'react';
import { Router, useRouter } from 'next/router';
import Loader from '@/components/common/Loader';
import { useAppDispatch, useAppSelector } from '@/hooks/store';
import { ICategorie, setCurrentCategory } from '@/store/slicers/categoriesSlice';
import { IReviewInfo } from '.';

export default function Product() {
  const dispatch = useAppDispatch();

  const { categories } = useAppSelector((state) => state.categories);

  const [productInfo, setProductInfo] = useState<IProductInfo>({});
  const [reviews, setReviews] = useState<IReviewInfo[]>([]);
  const [reviwsCount, setReviewsCount] = useState<number>(0);
  const [list, setList] = useState(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const router = useRouter();
  const { id } = router.query;

  const getProductInfo = async () => {
    if (id) {
      setIsLoading(true);
      await $api.get(
        EndpointNames.PRODUCT_GET(id),
      )
        .then((response) => {
          // eslint-disable-next-line no-param-reassign
          response.data.result[0].categories = categories
            .find((item) => item.subcategories.includes(response.data.result[0].subcategory))?.name;

          setProductInfo(response.data.result[0]);
          const crumbs = [
            {
              id: 1,
              title: response.data.result[0]?.categories ?? '',
              link: '/catalog',
              onClick: () => {
                dispatch(setCurrentCategory({
                  category: {
                    name: response.data.result[0].categories,
                    subcategories: [],
                  },
                  subcategory: '',
                }));
              },
            },
            {
              id: 2,
              title: response.data.result[0]?.subcategory ?? '',
              link: '/catalog',
              onClick: () => {
                dispatch(setCurrentCategory({
                  category: {
                    name: response.data.result[0].categories,
                    subcategories: [],
                  },
                  subcategory: response.data.result[0].subcategory,
                }));
              },
            },
            {
              id: 3,
              title: response.data.result[0].name,
              link: `/catalog/${response.data.result[0].internal_id}`,
            },
          ];
          setList(crumbs);
        })
        .finally(() => setIsLoading(false));
    }
  };

  const getReviews = async (limit = 4) => {
    if (id) {
      await $api.get(EndpointNames.FEEDBACKS_GET(id, limit, 0, false))
        .then((res) => {
          setReviews(res.data.result.feedback);
          setReviewsCount(res.data.result.count);
        });
    }
  };

  const getRecentlyProducts = async () => {
    await $api.get<{ result: ICategorie[] }>(EndpointNames.PRODUCT_RECENTLY_VIEWED(8))
      .then((response) => {
        dispatch(setUserInfo({ viewedProducts: response.data.result }));
      });
  };

  useEffect(() => {
    getProductInfo();
    getReviews();
    getRecentlyProducts();
  }, [id]);

  const clickHeart = async () => {
    if (productInfo.liked) {
      await $api.put(EndpointNames.PRODUCT_UNLIKE(productInfo.internal_id));
      setProductInfo((prev: IProductInfo) => ({ ...prev, liked: false }));
    } else {
      await $api.put(EndpointNames.PRODUCT_LIKE(productInfo.internal_id));
      setProductInfo((prev: IProductInfo) => ({ ...prev, liked: true }));
    }
  };

  const clickCart = async () => {
    if (productInfo.in_basket) {
      await $api.put(EndpointNames.BASKET_DEC_COUNT, {
        product_id: productInfo.internal_id,
        count: 1,
      });
      const newProduct = { ...productInfo, in_basket: false };
      setProductInfo(newProduct);
    } else {
      await $api.post(EndpointNames.BASKET_ADD_PRODUCT, {
        product_id: productInfo.internal_id,
        count: 1,
      });
      const newProduct = { ...productInfo, in_basket: true };
      setProductInfo(newProduct);
    }
  };

  return (
    <>
      <Head>
        <title>Весёлый апельсин | Карточка товара</title>
        <meta
          name="description"
          content="Весёлый апельсин Карточка товара"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>
      <div className="pt-[200px] md:pt-[230px] pb-[60px] md:pb-[72px] border-b border-text-100 mb-[60px] md:mb-[32px]">
        {(isLoading || !(list?.length > 0)) ? (
          <div className="container !max-w-[1331px] md:px-[24px] text-center">
            <Loader />
          </div>
        ) : (
          <div className="container !max-w-[1331px] md:px-[24px]">
            <Breadcrumbs list={list} />
            <div className="text-[32px] text-text-900 mb-[18px] ubuntu">
              {productInfo.name}
            </div>
            <div className="flex items-center mb-[38px]">
              {Array.from({ length: 5 }).map((_, idx) => (
                <Star
                  key={idx}
                  className={`${idx + 1 <= productInfo.stars ? 'stroke-stars fill-stars' : 'stroke-text-700'} ${idx > 0 && 'ml-[6px]'}`}
                />
              ))}
              <span className="text-sm text-text-600 ml-[12px] pt-[4px]">
                {productInfo.feedbacks_count}
                {' '}
                отзывов
              </span>
            </div>
            <div className="flex items-start md:block">
              <div className="max-w-[780px] basis-[780px] mr-[46px] md:mr-0">
                <ProductSLider images={productInfo.pictures} />
                <div className="hidden md:block mt-[24px]">
                  <ProductPrice
                    myProduct={productInfo}
                    clickHeart={clickHeart}
                    clickCart={clickCart}
                  />
                </div>
                <About text={productInfo.description} />
                <Reviews
                  productInfo={productInfo}
                  reviews={reviews}
                  reviwsCount={reviwsCount}
                  setReviews={setReviews}
                  getReviews={getReviews}
                />
              </div>
              <div className="md:hidden">
                <ProductPrice
                  myProduct={productInfo}
                  clickHeart={clickHeart}
                  clickCart={clickCart}
                />
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="mb-[57px]">
        <div className="container">
          <div className="md:px-[24px]">
            {/* <div className="flex justify-between items-center mb-[38px]">
              <div className="text-2xl text-text-900 ubuntu">
                С этим товаром покупают
              </div>
              <Button
                type="black"
                text="Посмотреть ещё"
                customStyles="md:hidden"
              />
            </div>
            <ProductCards id="third" />
            <Button
              type="black"
              text="Посмотреть ещё"
              customStyles="!hidden md:!flex !w-full mt-[20px]"
            /> */}
            <div className="flex justify-between items-center mt-[64px] mb-[38px]">
              <div className="text-2xl text-text-900 ubuntu">
                Вы недавно смотрели
              </div>
              <Button
                type="black"
                text="Посмотреть ещё"
                customStyles="md:hidden"
                onClick={() => router.push('/catalog')}
              />
            </div>
            <ProductCards id="fourth" />
            <Button
              type="black"
              text="Посмотреть ещё"
              customStyles="!hidden md:!flex !w-full mt-[20px]"
              onClick={() => router.push('/catalog')}
            />
          </div>
          <div className="mt-[90px] md:mt-[40px]">
            <Discounts />
          </div>
        </div>
      </div>
    </>
  );
}
