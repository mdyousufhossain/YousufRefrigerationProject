import { CopyClipboard, NumberCopyClipboard } from '../Avatar';

function Form() {
  return (
    <div>

      <form className="p-6 md:mx-auto  my-4 rounded-lg bg-primary/70 dark:bg-secondary/70 border-2 border-primary2 dark:border-secondary2">
        <label htmlFor="text">
          <h3 className="consText py-4 text-Title-light text-center  dark:text-Title_Dark">Get in touch</h3>
        </label>
        <div className="mb-4">
          <label className="block font-bold mb-2 text-Para_Light dark:text-Para_Dark" htmlFor="name">
            Name
          </label>
          <input
            className="inputField"
            id="name"
            type="text"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-4">
          <label className="block font-bold mb-2 text-Para_Light dark:text-Para_Dark" htmlFor="email">
            Email
          </label>
          <input
            className="inputField"
            id="email"
            type="email"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <label className="block font-bold  text-Para_Light dark:text-Para_Dark" htmlFor="message">
            Message
          </label>
          <textarea
            className="inputField"
            id="message"
            rows="5"
            placeholder="Enter your message"
          />
        </div>
        <button className="btn">
          Submit
        </button>
        <div className="mb-4 flex bg-primary/[0.5] dark:bg-secondary/[0.5] relative">

          <NumberCopyClipboard num="01712968177" />

          <h2 className="p-2 block font-bold  text-Para_Light dark:text-Para_Dark">01712968177</h2>
        </div>
        <div className="mb-2 flex justify-evenly relative">
          <a href="https://www.facebook.com/">
            <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 24 24" className="fill-secondary dark:fill-primary"><path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h8.615v-6.96h-2.338v-2.725h2.338v-2c0-2.325 1.42-3.592 3.5-3.592.699-.002 1.399.034 2.095.107v2.42h-1.435c-1.128 0-1.348.538-1.348 1.325v1.735h2.697l-.35 2.725h-2.348V21H20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1z" /></svg>
          </a>

          <CopyClipboard num="01534332090" />
          <label className="block  text-Para_Light dark:text-Para_Dark" htmlFor="Text">
            <a href="https://www.google.com/maps/dir//Yousuf+refrigeration/@23.7560704,90.3206788,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3755b91f8ed8b3e7:0x7079cd9970515d2c!2m2!1d90.3907192!2d23.7560862"><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" className="fill-secondary dark:fill-primary"><path d="M12 14c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-6c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2z" /><path d="M11.42 21.814a.998.998 0 0 0 1.16 0C12.884 21.599 20.029 16.44 20 10c0-4.411-3.589-8-8-8S4 5.589 4 9.995c-.029 6.445 7.116 11.604 7.42 11.819zM12 4c3.309 0 6 2.691 6 6.005.021 4.438-4.388 8.423-6 9.73-1.611-1.308-6.021-5.294-6-9.735 0-3.309 2.691-6 6-6z" /></svg></a>
          </label>
        </div>

      </form>
    </div>
  );
}

export default Form;
