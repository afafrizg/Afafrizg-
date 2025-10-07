function startExam() {
  let exam = document.getElementById('examType').value;
  let name = document.getElementById('studentName').value;
  if(!name) { alert('أدخلي اسم الطالبة'); return; }
  localStorage.setItem('studentName', name);
  window.location.href = exam;
}

document.addEventListener('DOMContentLoaded', () => {
  const quizForm = document.getElementById('quizForm');
  if(quizForm) {
    quizForm.addEventListener('submit', function(e){
      e.preventDefault();
      let score = 0;
      const answers = {
        q1:'96', q2:'لامع', q3:'7', q4:'متشائم',
        t_q1:'9', t_q2:'7', t_q3:'نيوتن', t_q4:'H2O', t_q5:'الخلية'
      };
      const formData = new FormData(quizForm);
      for(let [q, ans] of formData.entries()){
        if(answers[q]===ans) score++;
      }
      localStorage.setItem('studentScore', score);
      window.location.href='result.html';
    });
  }
});