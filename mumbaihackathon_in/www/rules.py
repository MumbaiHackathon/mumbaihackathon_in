import frappe

def get_context(context):
	context.rules = frappe.db.get_single_value("Hackathon Settings", "rules")