document.getElementById('guide-form').addEventListener('submit', checkForm);



   function checkForm(e) {
      e.preventDefault();
      var el = document.getElementById('guide-form');
      var name = el.name.value;
      var mail = el.mail.value;
      var recTime = new Date();
      alert('Данные в консоле')
      class Person {
         constructor(nname, mmail) {
            this.nname = name;
            this.mmail = mail;
         }
         timeInfo() {
               console.log(recTime.getHours() + ':' + recTime.getMinutes() + ':' + recTime.getSeconds() + '     Имя: ' + this.nname + '    Почта: ' + this.mmail);
            return
            }
      }
      var persons = new Person(name, mail);
      persons.timeInfo();
   }
      

