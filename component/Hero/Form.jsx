function Form() {
    return (
      <div>
  
        <form className="p-6 my-4 rounded-lg bg-primary dark:bg-secondary border-2 border-primary2 dark:border-secondary2">
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
            <label className="block font-bold mb-2 text-Para_Light dark:text-Para_Dark" htmlFor="message">
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
          <label className="block font-bold mb-2 text-Para_Light dark:text-Para_Dark" htmlFor="Text">
            Call : 01XXXXXX
          </label>
        </form>
      </div>
    );
  }
  
  export default Form;