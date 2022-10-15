const Footer = () => {
  return (
    <footer className="container flex flex-col justify-center py-5 m-auto overflow-hidden text-xs text-center border-t border-gray-400 whitespace-nowrap ">
      <div className="flex gap-2 m-auto">
        <a href="">Termeni si conditii</a>
        <a href="">Politica de confidentialitate</a>
      </div>
      <div>
        <p>Copyright &copy; 2022 PawTrain. Toate drepturile rezervate.</p>
      </div>
    </footer>
  );
};

export default Footer;
