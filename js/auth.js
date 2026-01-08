const signType = document.querySelectorAll("h2");
const loginButt = document.getElementById("login-txt");
const signInButt = document.getElementById("sign-in-txt");
const loginForm = document.getElementById("login-form");
const signInForm = document.getElementById("sign-in-form");

let loginIsTrue = null;
let signInIsTrue = null;

signType.forEach((sign) => {
  sign.addEventListener("click", () => {
    if (sign.innerText === "ثبت نام") {
      signInIsTrue = true;
      loginIsTrue = false;
      console.log({ signInIsTrue, loginIsTrue });
    } else if (sign.innerText === "ورود") {
      signInIsTrue = false;
      loginIsTrue = true;
      console.log({ signInIsTrue, loginIsTrue });
    }
    if (!signInIsTrue && loginIsTrue) {
      loginForm.style.display = "flex";
      signInForm.style.display = "none";
      signInButt.style.color = "rgb(121,121,121)";
      loginButt.style.color = "var(--color-primary)";
      loginButt.style.borderColor = "var(--color-primary)";
      signInButt.style.borderColor = "transparent";
    } else if (signInForm && !loginIsTrue) {
      loginForm.style.display = "none";
      signInForm.style.display = "flex";
      loginButt.style.color = "rgb(121,121,121)";
      loginButt.style.borderColor = "transparent";
      signInButt.style.borderColor = "var(--color-primary)";
      signInButt.style.color = "var(--color-primary)";
    }
    console.log(sign.style.color);
  });
});
