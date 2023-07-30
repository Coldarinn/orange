import Head from 'next/head';
import ProductCards from '@/components/common/Products/ProductCards';
import Breadcrumbs from '@/components/common/UI/Breadcrumbs';
import Discounts from '@/components/common/Subscribe/Discounts';
import ProductSLider from '@/components/Catalog/ProductSLider';
import ProductPrice from '@/components/Catalog/ProductPrice';
import Star from '@/assets/images/icons/star.svg';
import Reviews from '@/components/Catalog/Reviews';
import About from '@/components/Catalog/About';
import Button from '@/components/common/UI/Button';
import $api from '@/services/api';
import EndpointNames from '@/config/api';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Loader from '@/components/common/Loader';
import { useAppDispatch, useAppSelector } from '@/hooks/store';
import { setCurrentCategory } from '@/store/slicers/categoriesSlice';

export interface IProductInfo {
  internal_id: string,
  name: string,
  price: number,
  old_price: number | null,
  count: number,
  manufacturer: string,
  categories: null,
  description: string,
  pictures: string[],
  buy_count: number,
  show: boolean,
  stars: number,
  liked: boolean,
  in_basket: boolean,
  feedbacks_count: number,
  sex: string,
  country: string,
  subcategory: string
}

export default function Product() {
  const dispatch = useAppDispatch();

  const { categories } = useAppSelector((state) => state.categories);

  const [productInfo, setProductInfo] = useState<IProductInfo>({});
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
              title: response.data.result[0].categories,
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
              title: response.data.result[0].subcategory,
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

  useEffect(() => {
    getProductInfo();
  }, [id]);

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
        {isLoading ? (
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
                <ProductSLider />
                <div className="hidden md:block mt-[24px]">
                  <ProductPrice />
                </div>
                <About />
                <Reviews />
              </div>
              <div className="md:hidden">
                <ProductPrice />
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="mb-[57px]">
        <div className="container">
          <div className="md:px-[24px]">
            <div className="flex justify-between items-center mb-[38px]">
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
            />
            <div className="flex justify-between items-center mt-[64px] mb-[38px]">
              <div className="text-2xl text-text-900 ubuntu">
                Вы недавно смотрели
              </div>
              <Button
                type="black"
                text="Посмотреть ещё"
                customStyles="md:hidden"
              />
            </div>
            <ProductCards id="fourth" />
            <Button
              type="black"
              text="Посмотреть ещё"
              customStyles="!hidden md:!flex !w-full mt-[20px]"
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
