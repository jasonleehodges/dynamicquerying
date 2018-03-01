import pandas as pd

salesData = pd.read_csv("sales_data.csv")
costData = pd.read_csv("cost_data.csv")
repNames = pd.read_csv("rep_names.csv")

groupSet = pd.concat([salesData[['Month','Sales']],costData[['Month','Cost']]], axis=0, ignore_index=True)
final = groupSet.groupby(['Month']).sum()
print(final)

#group by will be the x-axis that is brought in.
#other 2 (like cost and sales) will have to be brought in dynamically
#perhaps an argument list looks something like this: (sales.Month,sum=[sales.Sales, cost.Cost])