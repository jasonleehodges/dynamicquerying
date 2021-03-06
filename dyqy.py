import pandas as pd
from flask import Flask, render_template, make_response, request, jsonify

#QUERY THE BASE FILES IN A PRE-FILTERED MANNER
#iter_csv = pandas.read_csv('file.csv', iterator=True, chunksize=1000)
#df = pd.concat([chunk[chunk['field'] > constant] for chunk in iter_csv])

#filter to certain columns using the usecols attribute

salesData = pd.read_csv("sales_data.csv")
costData = pd.read_csv("cost_data.csv")
repNames = pd.read_csv("rep_names.csv")

groupSet = pd.concat([salesData[['Month','Sales']],costData[['Month','Cost']]], axis=0, ignore_index=True)
final = groupSet.groupby(['Month']).sum()
print(final)




#group by will be the x-axis that is brought in.
#other 2 (like cost and sales) will have to be brought in dynamically
#perhaps an argument list looks something like this: (sales.Month,sum=[sales.Sales, cost.Cost])

query = {
    "groupby": [],
    "aggs": [{"type": '', "column": ''}],
}


app = Flask(__name__)

@app.route("/")
def hello():
    return render_template('index.html', data=final.to_json())

@app.route("/api/v1/get")
def get():
    table = request.args.get('table')
    groupby = request.args.get('groupby')
    filters = request.args.get('filters')
    return make_response(jsonify({
        "tableName": table,
        "groupBy": groupby,
        "filters": filters,
    }), 200)

if __name__ == "__main__":
    app.jinja_env.auto_reload = True
    app.config['TEMPLATES_AUTO_RELOAD'] = True
    app.run(debug=True)