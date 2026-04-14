// Form submission handling
document.addEventListener('DOMContentLoaded', function() {
    // Check for success parameter in URL
    const urlParams = new URLSearchParams(window.location.search);
    const isSuccess = urlParams.get('success');
    
    if (isSuccess === '1') {
        // Show success message
        const successMessage = document.createElement('div');
        successMessage.className = 'alert alert-success';
        successMessage.style.cssText = `
            background-color: #10b981;
            color: white;
            padding: 1rem;
            border-radius: 0.5rem;
            margin-bottom: 1rem;
            text-align: center;
            font-weight: 500;
        `;
        successMessage.textContent = 'Thank you for your message! We will contact you soon.';
        
        // Insert success message at the top of the contact section
        const contactSection = document.querySelector('#contact');
        if (contactSection) {
            const container = contactSection.querySelector('.container');
            if (container) {
                container.insertBefore(successMessage, container.firstChild);
            }
        }
        
        // Remove success parameter from URL
        window.history.replaceState({}, document.title, window.location.pathname);
        
        // Scroll to top of contact section
        contactSection.scrollIntoView({ behavior: 'smooth' });
    }
    
    // Enhanced form validation
    const forms = document.querySelectorAll('form[action="contact-form.php"]');
    forms.forEach(function(form) {
        form.addEventListener('submit', function(e) {
            const name = form.querySelector('#name');
            const email = form.querySelector('#email');
            const message = form.querySelector('#message');
            
            // Basic client-side validation
            let isValid = true;
            
            if (!name || name.value.trim() === '') {
                isValid = false;
                showFieldError(name, 'Please enter your name');
            }
            
            if (!email || email.value.trim() === '') {
                isValid = false;
                showFieldError(email, 'Please enter your email');
            } else if (!isValidEmail(email.value)) {
                isValid = false;
                showFieldError(email, 'Please enter a valid email');
            }
            
            if (!message || message.value.trim() === '') {
                isValid = false;
                showFieldError(message, 'Please enter your message');
            }
            
            if (!isValid) {
                e.preventDefault();
                return false;
            }
            
            // Show loading state
            const submitButton = form.querySelector('button[type="submit"]');
            if (submitButton) {
                submitButton.disabled = true;
                submitButton.textContent = 'Sending...';
            }
        });
        
        // Clear field errors on input
        const inputs = form.querySelectorAll('input, textarea, select');
        inputs.forEach(function(input) {
            input.addEventListener('input', function() {
                clearFieldError(this);
            });
        });
    });
});

function showFieldError(field, message) {
    clearFieldError(field);
    
    field.style.borderColor = '#ef4444';
    
    const errorDiv = document.createElement('div');
    errorDiv.className = 'field-error';
    errorDiv.style.cssText = `
        color: #ef4444;
        font-size: 0.875rem;
        margin-top: 0.25rem;
    `;
    errorDiv.textContent = message;
    
    field.parentNode.insertBefore(errorDiv, field.nextSibling);
}

function clearFieldError(field) {
    field.style.borderColor = '';
    
    const errorDiv = field.parentNode.querySelector('.field-error');
    if (errorDiv) {
        errorDiv.remove();
    }
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
