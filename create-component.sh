#!/bin/bash

echo 'Create component or page'
select choice in "component" "page" "service"; do
  case "$choice" in
  "component")
    type="components"
    ;;
  "page")
    type="pages"
    ;;
  "service")
    type="services"
    ;;
  *)
    echo "Invalid choice. Exiting."
    exit 1
    ;;
  esac
  break
done

read -rp "Enter name of $type: " name

if [ $type == "services" ]; then
  ng generate service "./$type/$name"
else
  ng generate component "./$type/$name"
fi
