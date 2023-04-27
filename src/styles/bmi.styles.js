const css = `
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: #111;
  background-color: #111;
}

.box {
  width: 500px;
  background: #fafafa;
  border-radius: 12px;
  text-align: center;
  box-shadow: 2px 2px 20px 5px rgba(0, 0, 0, 0.5);
}

h1 {
  color: rgb(0, 0, 0, 0.7);
  font-weight: bold;
  font-size: 36px;
  padding: 30px 0;
}

.content {
  padding: 0 30px;
}

.input {
  background: #fff;
  box-shadow: 0px 0px 95px -30px rgba(0, 0, 0, 0.15);
  border-radius: 12px;
  padding: 20px 0;
  margin-bottom: 20px;
}

.input label {
  display: block;
  font-size: 18px;
  font-weight: 600;
  color: #000;
  margin-bottom: 20px;
}
.input input {
  outline: none;
  border: none;
  border-bottom: 1px solid #fe9b09;
  width: 50%;
  text-align: center;
  font-size: 28px;
  font-family: "Nunito", sans-serif;
}

.inputW {
  background: #fe9b09;
  box-shadow: 0px 0px 95px -30px rgba(0, 0, 0, 0.15);
  border-radius: 12px;
  padding: 10px 0;
  margin-bottom: 20px;
}

.inputW label {
  display: block;
  font-size: 18px;
  font-weight: 600;
  color: #000;
  margin-bottom: 20px;
}
.inputW input {
  outline: none;
  border: none;
  border-bottom: 1px solid #fe9b09;
  width: 50%;
  text-align: center;
  font-size: 28px;
  font-family: "Nunito", sans-serif;
}

.inputH {
  background: #fe9b09;
  box-shadow: 0px 0px 95px -30px rgba(0, 0, 0, 0.15);
  border-radius: 12px;
  padding: 10px 0;
  margin-bottom: 20px;
  margin-right: 20px;
}

.inputH label {
  display: block;
  font-size: 18px;
  font-weight: 600;
  color: #000;
  margin-bottom: 20px;
}
.inputH input {
  outline: none;
  border: none;
  border-bottom: 1px solid #fe9b09;
  width: 50%;
  text-align: center;
  font-size: 28px;
  font-family: "Nunito", sans-serif;
}

button.calculate {
  cursor: pointer;
  font-family: "Nunito", sans-serif;
  color: #fff;
  background: #cf711f;
  font-size: 16px;
  border-radius: 7px;
  padding: 12px 0;
  width: 100%;
  outline: none;
  border: none;
  transition: all 0.5s;
}
button.calculate:hover {
  background: #fe9b09;
}

.result {
  padding: 10px 20px;
}
.result p {
  font-weight: 600;
  font-size: 22px;
  color: #000;
  margin-bottom: 15px;
}
.result #result {
  font-size: 36px;
  font-weight: 900;
  color: #cf711f;
  background-color: #eaeaea;
  display: inline-block;
  padding: 7px 20px;
  border-radius: 55px;
  margin-bottom: 25px;
}
#comment {
  color: #d12a05;
  font-weight: 800;
}

.comment {
  display: none;
  border: dashed 1px;
  border-radius: 7px;
  padding: 5px;
}

.footer {
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 10px 15px;
}

.footer-text {
  text-decoration: none;
  color: rgba(40, 40, 40, 0.8);
  font-family: "Poppins", sans-serif;
  font-weight: 200;
  font-size: 14px;
  transition: all 0.5;
}

.footer-text:hover {
  color: rgba(40, 40, 40, 1);
}

.gender {
  display: flex;
  justify-content: space-around;
  align-items: center;
  align-content: center;
  background: #fff;
  box-shadow: 0px 0px 95px -30px rgba(0, 0, 0, 0.15);
  border-radius: 12px;
  padding: 20px 0;
  margin-bottom: 20px;
}

.gender .container {
  display: block;
  position: relative;
  padding-left: 35px;

  margin-top: 7px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.gender .container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;
  border-radius: 50%;
}

.gender .container:hover input ~ .checkmark {
  background-color: #ccc;
}

.gender .container input:checked ~ .checkmark {
  background-color: #cf711f;
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.gender .container input:checked ~ .checkmark:after {
  display: block;
}

.gender .container .checkmark:after {
  top: 9px;
  left: 9px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: white;
}

.containerHW {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.modal {
  display: none;
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
  padding-top: 300px;
}

.modal-content {
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 600px;
  border-radius: 10px;
  box-shadow: #393c76 -1px 2px 2px 1px;
}

#modalText {
  padding-top: 8px;
  padding-right: 5px;
  font-size: 18px;
  font-family: "Poppins", sans-serif;
  color: rgb(24, 23, 23);
}

.modal-wrong {
  border: 2px solid red;
}

.modal-correct {
  border: 2px solid green;
}

.close {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s;
}

.close:hover {
  color: #d41111;
}

.linkDownload {
  position: fixed;
  background-color: #d12322;
  margin: 20px;
  padding: 10px 10px;
  left: -0px;
  border-radius: 5px;
  bottom: -0px;
  font-size: 16px;
  font-weight: 400;
  color: #fff;
  text-decoration: none;
  text-transform: capitalize;
  transition: all 0.43s ease-in-out;
}

.linkDownload i {
  padding-left: 7px;
}

.linkDownload:hover {
  text-decoration: none;
  background-color: black;
}

@media (max-width: 700px) {
  .box {
    width: 380px;
  }

  .input label {
    font-size: 18px;
  }

  .inputH label,
  .inputW label {
    font-size: 14px;
  }

  .input input,
  .inputH input,
  .inputW input {
    font-size: 24px;
  }

  .modal-content {
    width: 380px;
  }
}
`;

export default css;
