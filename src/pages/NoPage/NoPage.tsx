const NoPage = () => {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 flex-col p-5">
        <img style={{ filter: 'hue-rotate(150deg)', marginTop: '-2rem' }}
          src="/wechat-logo.webp" alt="Wechat logo" className="hidden w-36 lg:block md:block" />
        <h1 className="text-2xl font-semibold text-gray-600 my-3">Error</h1>
        <h2 className="text-xl font-bold text-gray-500 my-5">404 PAGE NOT FOUND.</h2>
        <br />
      </div>
    </>
  );
};

export default NoPage;
