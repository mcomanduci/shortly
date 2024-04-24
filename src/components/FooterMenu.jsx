function FooterMenu({ header, link1, link2, link3, link4 }) {
  return (
    <div className="flex flex-col items-center w-full md:items-start">
      <div className="mb-5 font-bold text-white capitalize">{header}</div>
      <div className="flex flex-col items-center space-y-3 md:items-start">
        <a href="#" className="capitalize text-grayishViolet hover:text-cyan">
          {link1}
        </a>
        <a href="#" className="capitalize text-grayishViolet hover:text-cyan">
          {link2}
        </a>
        <a href="#" className="capitalize text-grayishViolet hover:text-cyan">
          {link3}
        </a>
        {link4 && (
          <a href="#" className="capitalize text-grayishViolet hover:text-cyan">
            {link4}
          </a>
        )}
      </div>
    </div>
  );
}

export default FooterMenu;
