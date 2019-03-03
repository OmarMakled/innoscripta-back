require('../scss/app.scss')
window.App = function() {
	const Swal = require('sweetalert2')

    return {
        alert: function(messages) {
        	messages.forEach((msg) => {
			    Swal.fire(msg)
			})
        },
        confirmSubmit: function(btn){
        	Swal.fire({
			  title: 'Are you sure?',
			  type: 'warning',
			  showCancelButton: true,
			  confirmButtonColor: '#3085d6',
			  cancelButtonColor: '#d33',
			  confirmButtonText: 'Yes, delete it!'
			}).then((result) => {
			  if (result.value) {
			  	btn.parentNode.submit()
			  }
			})
        }
    }
}();