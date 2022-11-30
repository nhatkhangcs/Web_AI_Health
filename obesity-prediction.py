print('Note: This model only applicable for adults from age 18 to age 65')

age = int(input('Please input your age: '))

if(age < 18 or age > 65):
    print('My prediction maybe not correct with your current age.')
else:
    weight = float(input('Please input your weight: '))
    height = float(input('Please input your height: '))
    final = weight*1.0/(height*height)

    # BMI source can be found here: https://www.cdc.gov/healthyweight/assessing/bmi/adult_bmi/index.html
    if final < 18.5:
        print('You are underweight!')
    elif final < 24.9:
        print('You are at healthy weight stage!')
    elif final < 29.9:
        print('You are overweight!')
    else:
        print('You are at obesity stage!')