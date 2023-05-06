
function BusinessHours() {
  return (
    <div className="p-4 cursor-pointer">
      <h2 className="text-Title_light dark:text-Title_Dark text-2xl font-medium md:text-3xl my-8">Business Hours</h2>
      <div className="grid grid-cols-1 gap-4 mx-4 text-xl">
        <div>
          <p className="text-Title_light dark:text-primary2 mb-2 font-semibold">Mon - Thu:</p>
          <p className="text-Para_Light dark:text-primary2 text-lg">9:00 AM - 8:30 PM</p>
        </div>
        <div>
          <p className="text-Title_light dark:text-primary2 mb-2 font-semibold">Fri:</p>
          <p className="text-Para_Light dark:text-primary2 text-lg">10:00 AM - 12:30 AM</p>
        </div>
        <div>
          <p className="text-Title_light dark:text-primary2 mb-2 font-semibold">Sat - Sun:</p>
          <p className="text-Para_Light dark:text-primary2 text-lg">9:00 AM - 8:30 PM</p>
        </div>
        <div>
          <button className="btn">Book an Appointment</button>

        </div>
      </div>
    </div>
  );
}

{/* <div data-glide-el="controls" className="flex py-4  justify-between items-end">
<button data-glide-dir="<" className="btn "><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-secondary dark:fill-secondary my-2 cursor-pointer"><path d="M12.707 17.293 8.414 13H18v-2H8.414l4.293-4.293-1.414-1.414L4.586 12l6.707 6.707z"></path></svg></button>
<button data-glide-dir=">" className="btn">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-secondary dark:fill-secondary my-2 cursor-pointer"><path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z" /></svg>
</button>
</div> */}

export default BusinessHours;
