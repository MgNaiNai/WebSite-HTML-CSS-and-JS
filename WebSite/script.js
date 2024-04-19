document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      
      // Simulate form submission
      const formData = new FormData(this);
      const formDataObject = {};
      formData.forEach(function(value, key) {
        formDataObject[key] = value;
      });
      console.log('Form data:', formDataObject);
  
      // Clear form fields
      this.reset();
      
      // Display success message
      const successMessage = document.createElement('p');
      successMessage.textContent = 'Message sent successfully!';
      successMessage.style.color = '#2a9d8f';
      form.appendChild(successMessage);
      setTimeout(function() {
        form.removeChild(successMessage);
      }, 3000);
    });
  });
  