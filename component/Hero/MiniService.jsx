import { Top, Time, Satisfaction } from '../Avatar'

export function ServicesMini() {
    return (
      <div className="flex flex-col  md:flex md:flex-row justify-center md:justify-around md:px-16">
        <div className="mx-2">
          <h3 className="consText text-center py-2 text-black-900 dark:text-Title_Dark">
            <span>
              <Time style="fill-secondary dark:fill-primary mx-auto" />
            </span>
            Long term Service
          </h3>
        </div>
        <div className="mx-2">
          <h3 className="consText text-center py-2 text-black-900 dark:text-Title_Dark">
            <span>
              <Top style="fill-secondary dark:fill-primary mx-auto mb-2" />
            </span>
            Top Quality
          </h3>
        </div>
        <div className="mx-2 flex flex-col items-center  justify-center ">
          <h3 className="consText text-center py-2 text-black-900 dark:text-Title_Dark">
            <span>
              <Satisfaction style="fill-secondary dark:fill-primary mx-auto py-1 my-3" />
            </span>
            Satisfaction Guerantee
          </h3>
        </div>
  
      </div>
    );
  }