from flask import Blueprint

from .books import register_book_routes
from .profile import register_profile_routes
from .borrows import register_borrow_routes

user_bp = Blueprint('user', __name__)

register_book_routes(user_bp)
register_profile_routes(user_bp)
register_borrow_routes(user_bp)
