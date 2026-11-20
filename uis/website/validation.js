/**
 * Nexova Talent Registration Form Validation
 * Handles client-side validation, error display, and form submission
 */

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('talentForm');
    const commentsField = document.getElementById('comments');
    const charCounter = document.getElementById('charCounter');
    const successMessage = document.getElementById('successMessage');

    // Show form on page load
    form.classList.remove('hidden');

    // Field validation rules
    const validationRules = {
        fullName: {
            validate: function(value) {
                const words = value.trim().split(/\s+/);
                return words.length >= 2;
            },
            error: "Name must contain at least first and last name"
        },
        email: {
            validate: function(value) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return emailRegex.test(value);
            },
            error: "Enter a valid email (example: name@company.com)"
        },
        phone: {
            validate: function(value) {
                const phone = value.trim();
                if (!/^\+\d{1,3}[ -]?[0-9][0-9 -]*$/.test(phone)) return false;
                const digitCount = phone.replace(/\D/g, '').length;
                return digitCount >= 7 && digitCount <= 15;
            },
            error: "Phone must include country code (example: +34 612 345 678)"
        },
        country: {
            validate: function(value) {
                return value !== '';
            },
            error: "Select your country of residence"
        },
        experience: {
            validate: function(value) {
                const num = Number(value);
                return !isNaN(num) && num >= 0 && num <= 50;
            },
            error: "Years of experience must be between 0 and 50"
        },
        sector: {
            validate: function(value) {
                return value !== '';
            },
            error: "Select your sector of interest"
        },
        englishLevel: {
            validate: function(value) {
                return value !== '';
            },
            error: "Indicate your English level"
        },
        availability: {
            validate: function() {
                return document.querySelector('input[name="availability"]:checked') !== null;
            },
            error: "Select your availability"
        },
        linkedin: {
            validate: function(value) {
                if (value === '') return true; // Optional field
                try {
                    const url = new URL(value);
                    return (url.protocol === 'http:' || url.protocol === 'https:')
                        && url.hostname.includes('.');
                } catch (error) {
                    return false;
                }
            },
            error: "If you include LinkedIn, it must be a valid URL"
        },
        comments: {
            validate: function(value) {
                return value.length <= 500;
            },
            error: function() {
                const remaining = 500 - document.getElementById('comments').value.length;
                return `Comments cannot exceed 500 characters (${remaining} remaining)`;
            }
        },
        dataPolicy: {
            validate: function() {
                return document.getElementById('dataPolicy').checked;
            },
            error: "You must accept the data processing policy to continue"
        }
    };

    /**
     * Display error message for a field
     */
    function showError(fieldName, errorMessage) {
        const errorElement = document.getElementById(fieldName + 'Error');
        const inputElement = document.getElementById(fieldName) || document.querySelector(`input[name="${fieldName}"]`);
        
        if (errorElement && inputElement) {
            errorElement.textContent = errorMessage;
            errorElement.classList.remove('hidden');
            inputElement.classList.add('border-red-500', 'focus:ring-red-500');
        }
    }

    /**
     * Clear error message for a field
     */
    function clearError(fieldName) {
        const errorElement = document.getElementById(fieldName + 'Error');
        const inputElement = document.getElementById(fieldName) || document.querySelector(`input[name="${fieldName}"]`);
        
        if (errorElement && inputElement) {
            errorElement.classList.add('hidden');
            errorElement.textContent = '';
            inputElement.classList.remove('border-red-500', 'focus:ring-red-500');
        }
    }

    /**
     * Validate a single field
     */
    function validateField(fieldName) {
        const rule = validationRules[fieldName];
        if (!rule) return true;

        let isValid = false;
        const field = document.getElementById(fieldName);

        if (fieldName === 'availability') {
            isValid = rule.validate();
        } else if (fieldName === 'dataPolicy') {
            isValid = rule.validate();
        } else if (field) {
            isValid = rule.validate(field.value);
        }

        if (!isValid) {
            const errorMsg = typeof rule.error === 'function' ? rule.error() : rule.error;
            showError(fieldName, errorMsg);
            return false;
        } else {
            clearError(fieldName);
            return true;
        }
    }

    /**
     * Validate all form fields
     */
    function validateForm() {
        const fields = [
            'fullName', 'email', 'phone', 'country', 'experience',
            'sector', 'englishLevel', 'availability', 'linkedin', 'comments', 'dataPolicy'
        ];
        
        let isFormValid = true;
        for (const field of fields) {
            if (!validateField(field)) {
                isFormValid = false;
            }
        }
        
        return isFormValid;
    }

    // Add blur event listeners for real-time validation
    const fieldsToValidate = [
        'fullName', 'email', 'phone', 'country', 'experience',
        'sector', 'englishLevel', 'linkedin'
    ];

    fieldsToValidate.forEach(fieldName => {
        const field = document.getElementById(fieldName);
        if (field) {
            field.addEventListener('blur', function() {
                validateField(fieldName);
            });
            field.addEventListener('input', function() {
                clearError(fieldName);
            });
        }
    });

    // Validate radio buttons on change
    const radioButtons = document.querySelectorAll('input[name="availability"]');
    radioButtons.forEach(radio => {
        radio.addEventListener('change', function() {
            clearError('availability');
        });
    });

    // Validate checkbox on change
    const dataCheckbox = document.getElementById('dataPolicy');
    if (dataCheckbox) {
        dataCheckbox.addEventListener('change', function() {
            clearError('dataPolicy');
        });
    }

    // Update character counter for comments
    if (commentsField) {
        commentsField.addEventListener('input', function() {
            const remaining = 500 - this.value.length;
            charCounter.textContent = `${remaining} characters remaining`;
            clearError('comments');
        });

        commentsField.addEventListener('blur', function() {
            validateField('comments');
        });
    }

    // Form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Validate all fields
        if (!validateForm()) {
            return; // Form is invalid, do not submit
        }

        // Simulate successful submission
        const formData = {
            fullName: document.getElementById('fullName').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            country: document.getElementById('country').value,
            experience: document.getElementById('experience').value,
            sector: document.getElementById('sector').value,
            englishLevel: document.getElementById('englishLevel').value,
            availability: document.querySelector('input[name="availability"]:checked').value,
            linkedin: document.getElementById('linkedin').value || 'Not provided',
            comments: document.getElementById('comments').value || 'Not provided',
            dataPolicy: document.getElementById('dataPolicy').checked
        };

        // Log form data to console (for debugging/simulation)
        console.log('Form submitted with data:', formData);

        // Hide form and show success message
        form.classList.add('hidden');
        successMessage.classList.remove('hidden');

        // Scroll to top of success message
        successMessage.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    // Clear form button (native reset)
    const resetButton = form.querySelector('button[type="reset"]');
    if (resetButton) {
        resetButton.addEventListener('click', function() {
            // Clear all error messages
            const errorElements = document.querySelectorAll('[id$="Error"]');
            errorElements.forEach(el => {
                el.classList.add('hidden');
                el.textContent = '';
            });

            // Reset character counter
            if (charCounter) {
                charCounter.textContent = '500 characters remaining';
            }

            // Clear error styling from fields
            const fields = document.querySelectorAll('input, select, textarea');
            fields.forEach(field => {
                field.classList.remove('border-red-500', 'focus:ring-red-500');
            });

            // Reset form data
            form.reset();
        });
    }
});
