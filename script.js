function changeColor() {
  const currentColor = document.body.style.backgroundColor;

  if (currentColor === 'lightyellow') {
    document.body.style.backgroundColor = '#f4f4f4';
  } else {
    document.body.style.backgroundColor = 'lightyellow';
  }
}
