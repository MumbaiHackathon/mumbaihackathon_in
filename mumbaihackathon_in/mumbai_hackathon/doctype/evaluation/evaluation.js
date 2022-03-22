// Copyright (c) 2019, Frappe Technologies and contributors
// For license information, please see license.txt

frappe.ui.form.on('Evaluation', {
	// evaluation_round: function(frm) {
	// 	frappe.db.get_doc("Evaluation Round", frm.doc.evaluation_round).then(data => {
	// 		let criteria = data.criteria.map((c) => {
	// 			return {criteria: c.criteria}
	// 		})
	// 		criteria.forEach((c) => {
	// 			frm.add_child("evaluation", c)
	// 		})
	// 		frm.refresh()
	// 	})
	// },

	onload: function(frm) {
		frm.doc.evaluator = frappe.session.user
	}
});
