// Copyright (c) 2019, Shivam Mishra and contributors
// For license information, please see license.txt

frappe.ui.form.on('Team', {
	setup: function(frm) {
		frappe.model.get_value('Hackathon Settings', {'name': 'Hackathon Settings'}, 'year', (d) => {
			frm.set_value('year', d.year)
		})
	},

	assigned_room: function (frm) {
		frappe.call("mumbaihackathon_in.mumbai_hackathon.doctype.room.room.get_count", {
			room_name: frm.doc.assigned_room
		}).then((data) => {
			let message = "Capacity: " + data.message + " People"
			frm.set_df_property('assigned_room', 'description', message)
		})
	},
});