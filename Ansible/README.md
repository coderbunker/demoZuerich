Description
===========
Ansible can be used to automate Server Installation and Configuration.

This can be achieved with Playbooks.
A more detailed description can be seen at: https://ansible.com/

Installation (Ubuntu 16.04)
===========================
sudo apt install ansible

A general installation guide can be found here: https://docs.ansible.com/ansible/intro_installation.html

First Playbook
===============
just create a file with a .yml ending an start writing...
this can look like this:

---
#Every playbook starts with 3 lines at the beginning, that is for ansible to realize,
that this is the beginning of the file

 - hosts:
#after that you can start by defining the hosts that should be affected/connected to.
   become: #this is just an additional option (to execute the command as sudo), there are many other to be found on: http://docs.ansible.com/#
   tasks:
#then you can start with your first tasks, which will have to be under tasks:
     - name: First Tasks
       other options


Conclusion
==========
Ansible is capable of many things, therefor might require some research.
Therefor, find out for yourself (cause I'm not getting paid to right this readme... ^_^)

Author
=======
Ansible was created by Michael DeHaan (michael.dehaan/gmail/com) and has contributions from over 1000 users (and growing). Thanks everyone!

Ansible is sponsored by Ansible, Inc

License
========
GNU General Public License v3.0

See COPYING to see the full text.

https://raw.githubusercontent.com/ansible/ansible/devel/README.md
