const controlers = document.querySelectorAll('.controls input');

function handleUpdate() {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    console.log(this.value);
}

controlers.forEach(input => input.addEventListener('touchmove', handleUpdate));
controlers.forEach(input => input.addEventListener('mousemove', handleUpdate));
controlers.forEach(input => input.addEventListener('change', handleUpdate));