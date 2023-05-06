import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { removeQuotes } from '@/pages/product';
import placeHolder from '@/public/placeholder.webp'

function Product({ data }) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleClick = async (link) => {
    setIsLoading(true);
    await router.push(link);
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && (
        <div className="fixed top-0 left-0 w-full h-1">
          <div className="h-full bg-blue-600 animate-pulse" style={{ width: '100%' }} />
        </div>
      )}
      <div className="md:flex md:flex-wrap md:justify-around">
        {data
          && data.map((card) => (
            <div
              key={card.id}
              className="flex  cursor-pointer flex-col md:w-[20%] md:mx-4 my-4  rounded-md
              bg-[#E9F8F9] hover:bg-[#D2DAFF]
              "
            >
              {card.src ? (
                <Link
                  href={`/product/${card.id}`}
                  onClick={() => handleClick(card.id)}
                >
                  <div className="relative mx-auto my-4  w-[255px] h-[200px]">
                    <Image
                      src={card.src}
                      alt={card.title}
                      fill

                      quality={75}

                    />
                  </div>
                </Link>
              ) : (
                <Link
                  href={`/product/${card.id}`}
                  onClick={() => handleClick(card.id)}
                >
                  <div className="relative mx-auto my-4 w-[275px] h-[185px]">
                    <Image
                      src={placeHolder}
                      alt={card.title}
                      fill

                      quality={75}

                    />
                  </div>
                </Link>
              )}

              <div>
                <Link
                  href={`/product/${card.id}`}
                  onClick={() => handleClick(card.id)}
                >
                  <h2 className="text-lg my-4 px-2 font-medium mb-2">{removeQuotes(card.title)}</h2>
                </Link>

                <h2 className="text-md my-2 px-2 mb-2 cursor-pointer"> <span className="font-medium"> Category </span> : {removeQuotes(card.category)}</h2>

              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default Product;
