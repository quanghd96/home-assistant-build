from setuptools import setup, find_packages

setup(
    name="home-assistant-frontend",
    version="20190822.0",
    description="The JAVIS Home frontend",
    url="https://github.com/home-assistant/home-assistant-polymer",
    author="The JAVIS Home Authors",
    author_email="hello@home-assistant.io",
    license="Apache License 2.0",
    packages=find_packages(include=["hass_frontend", "hass_frontend.*"]),
    include_package_data=True,
    zip_safe=False,
)
