const changeTheme = () => {
  const themeBtn = document.querySelector('.theme-btn');

  themeBtn.addEventListener('click', () => {
    const background = document.body;
    const buttons = document.querySelectorAll('.btn');

    if (background.classList.contains('day-theme-gray')) {
      background.classList.remove('day-theme-gray');
      background.classList.add('night-theme-gray');

      buttons.forEach(button => {
        if (button.classList.contains('day-theme-gray')) {
          button.classList.remove('day-theme-gray');
          button.classList.add('night-theme-gray');
        } else {
          button.classList.remove('day-theme-orange');
          button.classList.add('night-theme-blue');
        }
      });
    } else {
      background.classList.remove('night-theme-gray');
      background.classList.add('day-theme-gray');

      buttons.forEach(button => {
        if (button.classList.contains('night-theme-gray')) {
          button.classList.remove('night-theme-gray');
          button.classList.add('day-theme-gray');
        } else {
          button.classList.remove('night-theme-blue');
          button.classList.add('day-theme-orange');
        }
      });
    }
  });
};
export default changeTheme;
