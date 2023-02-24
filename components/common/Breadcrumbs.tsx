import { Key } from 'react';
import Link from 'next/link';
import Arrow from '@/assets/images/icons/arrow.svg';
import { useRouter } from 'next/router';

function Breadcrumbs({ list }: { list: Array< { id: Key, title: String, link: String } > }) {
  const router = useRouter();

  return (
    <div className="flex items-center mb-[24px]">
      <button
        className="flex justify-center items-center gap-[11px] w-[98px] h-[39px] bg-white border border-solid border-stroke-dark
          rounded-[20px] mr-[16px] transition duration-300 hover:border-brand-700"
        type="button"
        onClick={() => router.back()}
      >
        <Arrow className="stroke-brand-700 rotate-90" />
        <span className="text-text-700">
          Назад
        </span>
      </button>
      <ul className="flex">
        {list.map((item) => (
          <li
            key={item.id}
          >
            {item.id === list.at(-1)?.id ? (
              <span
                className="text-text-700"
              >
                {item.title}
              </span>
            ) : (
              <Link
                href={`${item.link}`}
                className="flex items-center text-text-700 stroke-text-700 mr-[12px] transition duration-300 hover:text-brand-700"
              >
                {item.title}
                <Arrow className="-rotate-90 ml-[12px] stroke-inherit" />
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Breadcrumbs;
