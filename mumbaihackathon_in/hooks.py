# -*- coding: utf-8 -*-
from __future__ import unicode_literals

app_name = "mumbaihackathon_in"
app_title = "Mumbai Hackathon"
app_publisher = "Frappe Technologies"
app_description = "Website for Mumbai Hackathon"
app_icon = "octicon octicon-file-directory"
app_color = "grey"
app_email = "team@frappe.io"
app_version = "0.0.1"
app_license = "MIT"

# Includes in <head>
# ------------------

# include js, css files in header of desk.html
app_include_css = "/assets/mumbaihackathon_in/css/mumbaihackathon_in.css"
app_include_js = "/assets/mumbaihackathon_in/js/mumbaihackathon_in.js"

# include js, css files in header of web template
web_include_css = "/assets/mumbaihackathon_in/css/mumbaihackathon_in.css"
web_include_js = "/assets/mumbaihackathon_in/js/mumbaihackathon_in.js"

# Home Pages
# ----------

# application home page (will override Website Settings)
home_page = "login"

# website user home page (by Role)
role_home_page = {
	"Guest": "index"
}

# Website user home page (by function)
# get_website_user_home_page = "mumbaihackathon_in.utils.get_home_page"

# Generators
# ----------

# automatically create page for each record of this doctype
# website_generators = ["Web Page"]

# Installation
# ------------

# before_install = "mumbaihackathon_in.install.before_install"
# after_install = "mumbaihackathon_in.install.after_install"

# Desk Notifications
# ------------------
# See frappe.core.notifications.get_notification_config

# notification_config = "mumbaihackathon_in.notifications.get_notification_config"

# Permissions
# -----------
# Permissions evaluated in scripted ways

# permission_query_conditions = {
# 	"Event": "frappe.desk.doctype.event.event.get_permission_query_conditions",
# }
#
# has_permission = {
# 	"Event": "frappe.desk.doctype.event.event.has_permission",
# }

# Document Events
# ---------------
# Hook on document methods and events

# doc_events = {
# 	"*": {
# 		"on_update": "method",
# 		"on_cancel": "method",
# 		"on_trash": "method"
#	}
# }

# Scheduled Tasks
# ---------------

# scheduler_events = {
# 	"all": [
# 		"mumbaihackathon_in.tasks.all"
# 	],
# 	"daily": [
# 		"mumbaihackathon_in.tasks.daily"
# 	],
# 	"hourly": [
# 		"mumbaihackathon_in.tasks.hourly"
# 	],
# 	"weekly": [
# 		"mumbaihackathon_in.tasks.weekly"
# 	]
# 	"monthly": [
# 		"mumbaihackathon_in.tasks.monthly"
# 	]
# }

# Testing
# -------

# before_tests = "mumbaihackathon_in.install.before_tests"

# Overriding Whitelisted Methods
# ------------------------------
#
# override_whitelisted_methods = {
# 	"frappe.desk.doctype.event.event.get_events": "mumbaihackathon_in.event.get_events"
# }

