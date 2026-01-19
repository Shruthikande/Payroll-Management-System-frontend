// @ts-nocheck

document.addEventListener('DOMContentLoaded', function () {
    initApp();
});

/* =========================
   App Init
========================= */
function initApp() {
    setupAdminLogin();
    setupEmployeeLogin();
    setupDashboardActions();
}

/* =========================
   Helper: Safe Input Value
========================= */
function getInputValue(id) {
    var el = document.getElementById(id);
    if (!el) return '';
    return el.value ? el.value.trim() : '';
}

/* =========================
   Admin Login
========================= */
function setupAdminLogin() {
    var form = document.getElementById('adminLoginForm');
    if (!form) return;

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        var username = getInputValue('adminUsername');
        var password = getInputValue('adminPassword');

        if (username === 'admin' && password === 'admin123') {
            showToast('Admin login successful');
            setTimeout(function () {
                window.location.href = 'admin-dashboard.html';
            }, 1000);
        } else {
            showToast('Invalid admin credentials');
        }
    });
}

/* =========================
   Employee Login
========================= */
function setupEmployeeLogin() {
    var form = document.getElementById('employeeLoginForm');
    if (!form) return;

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        var empId = getInputValue('employeeId');
        var password = getInputValue('employeePassword');

        if (empId === 'EMP001' && password === 'emp123') {
            showToast('Employee login successful');
            setTimeout(function () {
                window.location.href = 'employee-dashboard.html';
            }, 1000);
        } else {
            showToast('Invalid employee credentials');
        }
    });
}

/* =========================
   Dashboard Actions
========================= */
function setupDashboardActions() {
    var actionButtons = document.querySelectorAll('.action-btn');
    actionButtons.forEach(function (btn) {
        btn.addEventListener('click', function () {
            var text = btn.querySelector('span');
            showToast((text ? text.textContent : 'Feature') + ' coming soon');
        });
    });

    var quickLinks = document.querySelectorAll('.quick-link');
    quickLinks.forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            var text = link.querySelector('span');
            showToast((text ? text.textContent : 'Feature') + ' coming soon');
        });
    });

    var downloadBtn = document.querySelector('.download-btn');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function (e) {
            e.preventDefault();
            showToast('Payslip download will be available soon');
        });
    }
}

/* =========================
   Salary Utility
========================= */
function calculateNetSalary(basic, allowances, deductions) {
    basic = basic || 0;
    allowances = allowances || 0;
    deductions = deductions || 0;

    var gross = basic + allowances;
    var net = gross - deductions;

    return {
        gross: gross,
        deductions: deductions,
        net: net
    };
}

/* =========================
   Toast Message
========================= */
function showToast(message) {
    var toast = document.createElement('div');
    toast.innerText = message;

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

    document.body.appendChild(toast);

    setTimeout(function () {
        toast.remove();
    }, 2500);
}
