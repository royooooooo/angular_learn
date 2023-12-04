#!/bin/bash

echo 'Create component or page'
select choice in "component" "page"; do
  case "$choice" in
  "component")
    type="components"
    ;;
  "page")
    type="pages"
    ;;
  *)
    echo "Invalid choice. Exiting."
    exit 1
    ;;
  esac
  break
done

read -rp "Enter name of $type: " name

ng generate component "./$type/$name"
