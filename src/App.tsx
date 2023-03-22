import Card from '@/components/Card';
import ImageQrCode from '@/assets/image-qr-code.png';

function App() {
  return (
    <div className="h-full bg-hawkes-blue flex justify-center items-center">
      <Card>
        <div className="mb-[24px] rounded-[10px] overflow-hidden">
          <img src={ImageQrCode} alt="QR Code" />
        </div>

        <h1 className="mb-[16px] font-bold text-center text-heading text-cloud-burst tracking-heading">
          Improve your front-end skills by building projects
        </h1>

        <p className="text-center text-body text-bluish-grey tracking-body max-w-[256px] mx-auto">
          Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
        </p>
      </Card>
    </div>
  );
}

export default App;
