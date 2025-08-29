import os, json
from playwright.sync_api import sync_playwright

# Improved Apply button detection function
def find_apply_button(page):
    """Try multiple strategies to find the Apply button"""
    print("🔍 Looking for Apply button...")
    strategies = [
        ("button:has-text(\"Apply\")", "Strategy 1: Button with Apply text"),
