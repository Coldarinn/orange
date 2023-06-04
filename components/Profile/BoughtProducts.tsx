import Pagination from '../common/Pagination';
import BoughtProduct from './BoughtProduct';

const arr = [
  { id: '1' },
  { id: '2' },
  { id: '3' },
  { id: '4' },
  { id: '5' },
  { id: '6' },
  { id: '7' },
  { id: '8' },
  { id: '9' },
  { id: '10' },
  { id: '11' },
  { id: '12' },
  { id: '13' },
  { id: '14' },
];

interface IBoughtProducts {
  count: number;
}

function BoughtProducts({ count }: IBoughtProducts) {
  return (
    <div className="flex-auto pt-[10px] relative md:px-[24px]">
      <div className="flex items-start flex-wrap gap-[28px] md:gap-[20px]">
        {arr.slice(0, count).map((item) => (
          <div
            key={item.id.toString()}
            className="catalog-product w-[224px] md:w-[206px] p-[16px] bg-white border border-stroke-dark rounded-[24px]"
          >
            <BoughtProduct />
          </div>
        ))}
      </div>
      <Pagination />
    </div>
  );
}

export default BoughtProducts;
