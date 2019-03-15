// Copyright (c) 2019, Neil Lasrado and contributors
// For license information, please see license.txt

frappe.ui.form.on('Evaluation', {
	evaluation_round: function(frm) {
		frappe.db.get_doc("Evaluation Round", frm.doc.evaluation_round).then(data => {
			let criteria = data.criteria.map((c) => {
				return {criteria: c.criteria}
			})
			criteria.forEach((c) => {
				frm.add_child("evaluation", c)
			})
			frm.refresh()
		})
	},
});


frappe.ui.form.on("Project Evaluation", {
	score: function(frm, cdt, cdn) {
		console.log("Hello")
		let row = locals[cdt][cdn];
		console.log(row)
	}
});
