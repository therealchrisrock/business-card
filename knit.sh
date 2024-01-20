#!/bin/zsh
rpub_dir="./rpub"
#rpub_dir="/Users/groot/programs/business-card/rpub"
out_dir="./public/r"
if [ $1 = "__RUN_ALL" ]; then
  echo "Compiling All files in ./rpub to HTML..."
  # Loop through files in the target directory
  for file in $(find $rpub_dir -type f -print)
  do
      Rscript -e "rmarkdown::render('$file', 'html_document', output_dir='$out_dir')"
  done

#  Rscript -e "rmarkdown::render('$rpub_dir/$1', 'html_document', output_dir='$out_dir')"
elif [ $# -eq 0 ];
  then
    echo "No arguments supplied"
    exit 1
else
  Rscript -e "rmarkdown::render('$rpub_dir/$1.Rmd', 'html_document', output_dir='$out_dir')"
fi
