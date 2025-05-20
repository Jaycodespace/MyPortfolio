const Navbar = () => (
  <nav className="mb-20 flex items-center justify-between py-6 px-8">
    <div className="text-white text-3xl font-bold mx-2 ml-5">Rjay</div>
    <div className="flex items-center gap-4 text-white">
      <a
        href="https://www.linkedin.com/in/ryanjayanthony-timagos-a62031354/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <ion-icon name="logo-linkedin" class="text-3xl"></ion-icon>
      </a>
      <a
        href="https://github.com/Jaycodespace"
        target="_blank"
        rel="noopener noreferrer"
      >
        <ion-icon name="logo-github" class="text-3xl"></ion-icon>
      </a>
      <a
        href="https://www.instagram.com/ryanjayanthony/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <ion-icon name="logo-instagram" class="text-3xl"></ion-icon>
      </a>
      <a
        href="https://www.facebook.com/lostsheepofheaven"
        target="_blank"
        rel="noopener noreferrer"
      >
        <ion-icon name="logo-facebook" class="text-3xl"></ion-icon>
      </a>
    </div>
  </nav>
);

export default Navbar;