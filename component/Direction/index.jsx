import Form from './Form';
import Background from '@/public/contractBG.webp';

function Direction() {
  return (
    <section
      className="bg-primary dark:bg-secondary   py-4 "
      style={{
        backgroundImage: `url(${Background.src})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="container">
        <div className="md:w-2/5 mx-auto">
          <Form />
        </div>

      </div>
    </section>
  );
}

export default Direction;
