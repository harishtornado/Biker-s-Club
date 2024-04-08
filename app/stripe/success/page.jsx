import Link from "next/link";

const SuccessPage = () => {
  return (
    <section className="py-64">
      <div className="container mx-auto">
        <h3 className="text-center mb-4">Your Payment was Successful!</h3>
        <Link href="/">
          <button className="btn btn-primary mx-auto">Back Home</button>
        </Link>
      </div>
    </section>
  );
};

export default SuccessPage;
