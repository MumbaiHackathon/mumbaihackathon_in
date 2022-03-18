import frappe

def get_context(context):
	context.details = frappe.get_single("Hackathon Settings")