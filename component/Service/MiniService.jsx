import { Services } from '../constant';

function SVGBox({ Svg, title, discription }) {
  return (
    <div className="mx-2 py-8 my-4 md:my-0 px-4 md:py-0 border-2 border-primary2 dark:border-secondary2 rounded-lg">
      <div className='py-2'>
        {Svg}
      </div>
      <div>
        <h3 className="consText text-left p-0 text-Title_light dark:text-primary2 py-4 md:py-6">
          {title}
        </h3>
        <p className="text-sm text-Title_light dark:text-Title_Dark ">{discription}</p>
      </div>
    </div>
  );
}

export function ServicesMini() {
  return (

    <div className="md:flex py-8 md:py-4">

      {
        Services && Services.map((s) => (
          <SVGBox key={s.id} Svg={s.SVG} title={s.title} discription={s.description} />
        ))
      }

    </div>
  );
}
