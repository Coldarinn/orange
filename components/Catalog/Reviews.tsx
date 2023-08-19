import Star from '@/assets/images/icons/star.svg';
import Like from '@/assets/images/icons/like.svg';
import { IReviewInfo } from '@/pages/catalog';
import $api from '@/services/api';
import EndpointNames from '@/config/api';
import { cloneDeep } from 'lodash';
import { IProductInfo } from '@/store/slicers/userSlice';
import { useState } from 'react';
import { addAlert } from '@/store/slicers/alertsSlice';
import { useAppDispatch } from '@/hooks/store';
import Image from 'next/image';
import AddReviewsModal from './AddReviewsModal';
import ReviewImageModal from './ReviewImageModal';

interface IReviews {
  productInfo: IProductInfo,
  reviews: IReviewInfo[],
  reviwsCount: number,
  setReviews: (limit: IReviewInfo[]) => void;
  getReviews: (limit: number) => void;
}

function Reviews({
  productInfo, reviews, reviwsCount, setReviews, getReviews,
}: IReviews) {
  const dispatch = useAppDispatch();

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string>('');

  const likeHandler = async (index: number) => {
    const copy = cloneDeep(reviews);
    await $api.put(EndpointNames.FEEDBACK_LIKE(copy[index].internalId))
      .then(() => {
        copy[index].likes += 1;
        setReviews(copy);
      })
      .catch(() => {
        dispatch(addAlert({ id: Date.now(), type: 'error', text: 'Это Ваш отзыв' }));
      });
  };
  return (
    <>
      <div className="bg-white py-[32px] md:py-[24px] rounded-[20px] border border-stroke-dark mb-[20px] md:mb-[12px]">
        <div className="mb-[25px] ubuntu text-2xl px-[32px]">
          Отзывы
        </div>
        <div className="flex items-center px-[32px] md:px-[24px] pb-[32px] border-b border-stroke-dark">
          <div className="basis-[182px] mr-[40px]">
            <div className="flex items-center mb-[14px] text-text-700">
              <span className="text-[40px] font-bold  mr-[16px]">
                {productInfo.stars}
              </span>
              <span className="text-sm">
                {productInfo.feedbacks_count}
              </span>
            </div>
            <button
              type="button"
              className="w-full h-[52px] flex items-center justify-center text-white font-bold gap-[10px] bg-brand-700 border border-stroke-dark rounded-[30px]"
              onClick={() => setIsOpen(true)}
            >
              Оставить отзыв
            </button>
          </div>
          <div className="flex-auto">
            <div className="flex items-center gap-[8px] mb-[15px]">
              <span className="text-text-700">
                5
              </span>
              <div className="flex-auto max-w-[451px] h-[10px] bg-brand-200 rounded-[5px] relative">
                <div className="absolute w-[75%] h-full bg-brand-700 rounded-[5px]" />
              </div>
              <span className="text-text-700">
                40
              </span>
            </div>
            <div className="flex items-center gap-[8px] mb-[15px]">
              <span className="text-text-700">
                4
              </span>
              <div className="flex-auto max-w-[451px] h-[10px] bg-brand-200 rounded-[5px] relative">
                <div className="absolute w-[10%] h-full bg-brand-700 rounded-[5px]" />
              </div>
              <span className="text-text-700">
                4
              </span>
            </div>
            <div className="flex items-center gap-[8px] mb-[15px]">
              <span className="text-text-700">
                3
              </span>
              <div className="flex-auto max-w-[451px] h-[10px] bg-brand-200 rounded-[5px] relative">
                <div className="absolute w-[3%] h-full bg-brand-700 rounded-[5px]" />
              </div>
              <span className="text-text-700">
                1
              </span>
            </div>
            <div className="flex items-center gap-[8px] mb-[15px]">
              <span className="text-text-700">
                2
              </span>
              <div className="flex-auto max-w-[451px] h-[10px] bg-brand-200 rounded-[5px] relative">
                <div className="absolute w-[0%] h-full bg-brand-700 rounded-[5px]" />
              </div>
              <span className="text-text-700">
                0
              </span>
            </div>
            <div className="flex items-center gap-[8px] mb-[15px]">
              <span className="text-text-700">
                1
              </span>
              <div className="flex-auto max-w-[451px] h-[10px] bg-brand-200 rounded-[5px] relative">
                <div className="absolute w-[3%] h-full bg-brand-700 rounded-[5px]" />
              </div>
              <span className="text-text-700">
                1
              </span>
            </div>
          </div>
        </div>
        {reviews?.length > 0 ? (
          <>
            {reviews.map((item, index) => (
              <div
                key={item.internalId}
                className="px-[32px] md:px-[24px] py-[28px] border-b border-stroke-dark"
              >
                <div className="flex items-center mb-[20px]">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star
                      key={idx}
                      className={`${idx + 1 <= item.stars ? 'stroke-stars fill-stars' : 'stroke-text-700'} ${idx > 0 && 'ml-[6px]'}`}
                    />
                  ))}
                </div>
                <p className="text-text-600 leading-[19px] mb-[15px]">
                  {item.message}
                </p>
                {item.pictures.length > 0 && (
                  <div className="flex flex-wrap gap-[10px] mb-[15px]">
                    {item.pictures.map((pic) => (
                      <div
                        key={pic}
                        className="flex items-center justify-center w-[80px] h-[80px] p-[4px] rounded-lg cursor-pointer duration-200 border border-white hover:border-stroke-dark"
                        onClick={() => setSelectedImage(pic)}
                      >
                        <Image
                          unoptimized
                          src={pic}
                          alt="Изображение товара"
                          width={0}
                          height={0}
                          className="w-full object-contain"
                        />
                      </div>
                    ))}
                  </div>
                )}
                <div className="flex items-center justify-between">
                  <span className="font-bold">
                    {item.user_name}
                  </span>
                  <div className="flex items-center">
                    <button
                      type="button"
                      className="flex items-center px-[12px] py-[8px] rounded-[24px] bg-[#35CC00] mr-[8px]"
                      onClick={() => likeHandler(index)}
                    >
                      <Like className="fill-white" />
                      <span className="font-bold text-white ml-[8px]">
                        {item.likes}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </>
        ) : (
          <div className="text-[24px] text-center mt-[20px]">
            Пока что не оставляли отзывы
          </div>
        )}
      </div>
      {reviwsCount > reviews?.length && (
        <button
          type="button"
          className="w-full h-[52px] flex items-center justify-center text-text-900 bg-white rounded-[62px] border border-stroke-dark cursor-pointer"
          onClick={() => getReviews(reviwsCount)}
        >
          Смотреть все отзывы (
          {productInfo.feedbacks_count}
          )
        </button>
      )}
      <AddReviewsModal
        isVisible={isOpen}
        productId={productInfo.internal_id}
        productName={productInfo.name}
        onClose={() => setIsOpen(false)}
        getReviews={() => getReviews(4)}
      />
      <ReviewImageModal
        isVisible={!!selectedImage}
        picture={selectedImage}
        onClose={() => setSelectedImage('')}
      />
    </>
  );
}

export default Reviews;
