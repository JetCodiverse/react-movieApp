const BrandLogo = () => {
  const handleLogoClick = () => {
    window.location.reload(); // Reload the page
  };

  return (
    <ul className="brand-ul">
      <li>
        <a href="#" onClick={handleLogoClick}>
          <img className="logo" src="/green_logo.png" alt="Brand Logo" />
        </a>
      </li>
    </ul>
  );
};

export default BrandLogo;
