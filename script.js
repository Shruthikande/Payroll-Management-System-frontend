
// JavaScript Functionality

// Initialize the application when DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    initApp();
});

// Main function to setup all event listeners and functionality
function initApp() {
    setupAdminLogin();        // Setup admin login validation
    setupEmployeeLogin();     // Setup employee login validation
    setupDashboardActions();  // Setup dashboard button interactions
}
// Safely gets input value and trims whitespace
// Returns empty string if element doesn't exist
function getInputValue(id) {
    var el = document.getElementById(id);
    if (!el) return '';
    return el.value ? el.value.trim() : '';
}


// Validates admin credentials and redirects to admin dashboard
// Demo credentials: username = 'admin', password = 'admin123'
function setupAdminLogin() {
    var form = document.getElementById('adminLoginForm');
    if (!form) return;  // Exit if form doesn't exist on page

    form.addEventListener('submit', function (e) {
        e.preventDefault();  // Prevent default form submission

        // Get username and password from input fields
        var username = getInputValue('adminUsername');
        var password = getInputValue('adminPassword');

        // Check if credentials match demo credentials
        if (username === 'admin' && password === 'admin123') {
            showToast('Admin login successful');
            // Redirect to admin dashboard after 1 second
            setTimeout(function () {
                window.location.href = 'admin-dashboard.html';
            }, 1000);
        } else {
            // Show error message if credentials are incorrect
            showToast('Invalid admin credentials');
        }
    });
}


// Validates employee credentials and redirects to employee dashboard
// Demo credentials: empId = 'EMP001', password = 'emp123'
function setupEmployeeLogin() {
    var form = document.getElementById('employeeLoginForm');
    if (!form) return;  // Exit if form doesn't exist on page

    form.addEventListener('submit', function (e) {
        e.preventDefault();  // Prevent default form submission

        // Get employee ID and password from input fields
        var empId = getInputValue('employeeId');
        var password = getInputValue('employeePassword');

        // Check if credentials match demo credentials
        if (empId === 'EMP001' && password === 'emp123') {
            showToast('Employee login successful');
            // Redirect to employee dashboard after 1 second
            setTimeout(function () {
                window.location.href = 'employee-dashboard.html';
            }, 1000);
        } else {
            // Show error message if credentials are incorrect
            showToast('Invalid employee credentials');
        }
    });
}

// Setup click handlers for dashboard action buttons and quick links
function setupDashboardActions() {
    // Handle action buttons (Add Employee, Process Payroll, etc.)
    var actionButtons = document.querySelectorAll('.action-btn');
    actionButtons.forEach(function (btn) {
        btn.addEventListener('click', function () {
            var text = btn.querySelector('span');
            showToast((text ? text.textContent : 'Feature') + ' coming soon');
        });
    });

    // Handle quick link buttons
    var quickLinks = document.querySelectorAll('.quick-link');
    quickLinks.forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();  // Prevent default link behavior
            var text = link.querySelector('span');
            showToast((text ? text.textContent : 'Feature') + ' coming soon');
        });
    });

    // Handle payslip download button
    var downloadBtn = document.querySelector('.download-btn');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function (e) {
            e.preventDefault();
            showToast('Payslip download will be available soon');
        });
    }
}

// Calculates gross salary, deductions, and net salary
// Parameters: basic salary, allowances, total deductions
// Returns: object with gross, deductions, and net amounts
function calculateNetSalary(basic, allowances, deductions) {
    basic = basic || 0;
    allowances = allowances || 0;
    deductions = deductions || 0;

    var gross = basic + allowances;     // Total earnings
    var net = gross - deductions;       // Final take-home salary

    return {
        gross: gross,
        deductions: deductions,
        net: net
    };
}
// Displays a temporary notification message at bottom-right of screen
// Message disappears after 2.5 seconds
function showToast(message) {
    // Create a new div element for the toast
    var toast = document.createElement('div');
    toast.innerText = message;

    // Style the toast notification
    toast.style.position = 'fixed';
    toast.style.bottom = '20px';
    toast.style.right = '20px';
    toast.style.background = '#2c3e50';
    toast.style.color = '#fff';
    toast.style.padding = '12px 18px';
    toast.style.borderRadius = '6px';
    toast.style.fontSize = '14px';
    toast.style.zIndex = '9999';
    toast.style.boxShadow = '0 4px 10px rgba(0,0,0,0.2)';

    // Add toast to page
    document.body.appendChild(toast);

    // Remove toast after 2.5 seconds
    setTimeout(function () {
        toast.remove();
    }, 2500);
}
