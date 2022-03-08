var svg = d3.select('#main-svg')
var body = d3.select('body')


// globals 
var padding = {t: 40, r: 40, b: 40, l: 40};
var canvas = {width: +svg.attr('width'), height: +svg.attr('height')}
var handles = {
    admissionsScatter: null,
    barGraphRace: null,
    donutChart: null,
    salaryChart: null
}
var sets = {
    data: null,
}
var otherGlobals = {
    gSatAvg: null, 
    gActMedian: null,
    halfGraphWidth: 450
}
var colors = {
    public: '#3F7D20',
    private: '#00546f',
    selected: ''
}
//axis generators 
var halfGraphAxisGen = (extent) => d3.scaleLinear().domain(extent).range([0, otherGlobals.halfGraphWidth]);
var quarterAxisGen = (extent) => d3.scaleLinear().domain(extent).range([0, otherGlobals.halfGraphWidth / 2]);

var raceArray = ["American Indian", "Asian", "Biracial", "Black", "Hispanic", "Nonresident Aliens", "Pacific Islander", "White"];
var raceBandScale = d3.scaleBand().domain(raceArray).range([0, otherGlobals.halfGraphWidth / 2])
var barGraphWidth = canvas.width / 2 - padding.r * 4
var raceRectScale = extent => d3.scaleLinear().domain(extent).range([0, barGraphWidth])

var selectedCollege = null 

function dataPreproc(r) {
    //Name                                                              ,Predominant Degree ,Highest Degree ,Control ,Region          ,Locale          ,Admission Rate ,ACT Median ,SAT Average ,Undergrad Population ,% White ,% Black ,% Hispanic ,% Asian ,% American Indian ,% Pacific Islander ,% Biracial ,% Nonresident Aliens ,% Part-time Undergrads ,Average Cost ,Expenditure Per Student ,Average Faculty Salary ,% Full-time Faculty ,% Undergrads with Pell Grant ,Completion Rate 150% time ,Retention Rate (First Time Students) ,% Undergrads 25+ y.o. ,3 Year Default Rate ,Median Debt ,Median Debt on Graduation ,Median Debt on Withdrawal ,% Federal Loans ,% Pell Grant Recipients ,Average Age of Entry ,Average Family Income ,Median Family Income ,Poverty Rate ,Number of Unemployed 8 years after entry ,Number of Employed 8 years after entry ,Mean Earnings 8 years After Entry ,Median Earnings 8 years After Entry
    // console.log(r['Region']);
    var obj = {
        name: r['Name'],
        control: r['Control'], //
        highestDegree: +r['Highest Degree'],
        region: r['Region'],
        locale: r['Locale'],
        admissionRate: +r['Admission Rate'], //
        actMedian: +r['ACT Median'], //
        satAvg: +r['SAT Average'], //
        undergradPopulation: +r['Undergrad Population'], //
        pctWhite: +r['% White'],//
        pctBlack: +r['% Black'],//
        pctHispanic: +r['% Hispanic'],//
        pctAsian: +r['% Asian'],//
        pctAmericanIndian: +r['% American Indian'],//
        pctBiracial: +r['% Biracial'],//
        pctPacificIslander: +r['% Pacific Islander'],//
        pctNonresAliens: +r['% Nonresident Aliens'],//
        pctPartTimeUndergrads: +r['% Part-time Undergrads'], /** */
        pctFullTimeFaculty: +r['% Full-time Faculty'],/** */
        completion150: +r['Completion Rate 150% time'],
        retentionRate: +r['Retention Rate (First Time Students)'],//
        avgCost: +r['Average Cost'],
        medianDebtOnGrad: +r['Median Debt on Graduation'],
        medianDebt: +r['Median Debt'],
        threeYrDefaultRate: +r['3 Year Default Rate'],
        pctFederalLoans: +r['% Federal Loans'],
        avgFamilyIncome: +r['Average Family Income'],
        medianFamilyIncome: +r['Median Family Income'],
        eightYrMedianSalary: +r['Median Earnings 8 years After Entry']

    }
    return obj;

}
d3.csv('./data/colleges.csv', dataPreproc).then((dataset) => {
    sets.data = dataset;
    findInterestingGlobals();
    //Georgia tech = 340
    selectedCollege = sets.data[340]
    console.log(selectedCollege)
    body.select('.website-h1').text(`Admissions Information: ${selectedCollege.name}`)

    handles.admissionsScatter = svg.append('g').attr('class', 'scatter-admissions');
    initAdmissionsData();

    handles.donutChart = svg.append("g").attr('class', 'donut-cont')
        .attr('transform', `translate(${canvas.width / 2}, ${canvas.height * 0.6 })`)
        
    initDonutData();

    handles.salaryChart = svg.append('g').attr('class', 'salary-chart')
    .attr('transform', `translate(${0},${canvas.height * .67})`)
    initSalaryChart();

    ref = svg.append('g').attr('class', 'final0text')
    .attr('transform', `translate(${canvas.width / 2}, ${canvas.height - otherGlobals.halfGraphWidth / 2 + padding.t})`)
    createRatioText(ref);
    // .append('rect')
    //     .attr('y', 0)
    //     .attr('x', 0)
    //     .attr('width', canvas.width  * .5 - padding.l)
    //     .attr('height', canvas.height * .33)

    
    // svg.append('text')
    //     .attr('class', 'section-title')
    //     .attr('transform', `translate(${canvas.width / 2}, ${padding.t * 1.5})`)
    //     .text(`Admissions Information: ${selectedCollege.name}`)
        

});

function findInterestingGlobals() {
    var actScores = []
    var avgSAT = 0
    sets.data.forEach(e => {
        actScores.push(e.actMedian);
        avgSAT += e.satAvg;
    });
    actScores.sort();
    const middle = Math.floor(actScores.length / 2);
    otherGlobals.gActMedian = actScores.length % 2 == 0 ? ((actScores[middle - 1] + actScores[middle] / 2)) : actScores[middle]
    otherGlobals.gSatAvg = Math.floor(avgSAT / actScores.length);

}
// ["American Indian", "Asian", "Biracial", "Black", "Hispanic", "Nonresident Aliens", "Pacific Islander", "White"];

var racePortion = [0, 0, 0, 0, 0, 0, 0, 0];
function updateRacePortionNums() {
    racePortion[0] = selectedCollege.pctAmericanIndian;
    racePortion[1] = selectedCollege.pctAsian;
    racePortion[2] = selectedCollege.pctBiracial;
    racePortion[3] = selectedCollege.pctBlack;
    racePortion[4] = selectedCollege.pctHispanic;
    racePortion[5] = selectedCollege.pctNonresAliens;
    racePortion[6] = selectedCollege.pctPacificIslander;
    racePortion[7] = selectedCollege.pctWhite;
}
function initAdmissionsData() {
    handles.admissionsScatter.attr('transform', 'translate('+[2 * padding.l, padding.t]+')');


    //create the axes
    handles.admissionsScatter.append('g')
        .attr('class', 'scatter-x-axis')
        .call(d3.axisBottom(halfGraphAxisGen([0,1])
            ).tickFormat(a => `${a * 100}%`)    )
        .attr('transform', `translate(0,${otherGlobals.halfGraphWidth})`)
        .append('text')
            .text('Admission Rate')
            .attr('class', 'axis-label')
            .attr('text-anchor', 'middle')
            .attr('transform', `translate(${otherGlobals.halfGraphWidth / 2}, ${padding.t})`)
    handles.admissionsScatter.append('g')
        .attr('class', 'scatter-y-axis')
        .call(d3.axisLeft(halfGraphAxisGen([1,0]))
        .tickFormat(a => `${a * 100}%`))
        .append('text')
            .text('Retention Rate')
            .attr('class', 'axis-label')
            .attr('text-anchor', 'middle')
            .attr('transform', 'translate('+[-padding.r, otherGlobals.halfGraphWidth/2]+') rotate(-90) ');;

    
    //add the circles
    handles.admissionsScatter.selectAll('circle')
        .data(sets.data)
        .enter()
        .append('circle')
            .attr('r', 4)
            .attr('cx', d => {return halfGraphAxisGen([0,1])(d.admissionRate)})
            .attr('cy', d => {return halfGraphAxisGen([1,0])(d.retentionRate)})
            .attr('stroke-width', 1.2)
            .attr('stroke-opacity', 0.3)
            .attr('fill-opacity', d => {
                if (Object.is(d, selectedCollege)) {
                    return 1;
                } else {
                    return 0;
                }
            })
            .attr('fill', '#CA3C25')
            // .attr('fill-opacity', d => {Object.is(d, selectedCollege) ? 0: 1})
            .attr('stroke', '#414535')
            .attr('d-which', d => d.name)

    //Separator
    handles.admissionsScatter.append('line')
        .attr('stroke-width', 3)
        .attr('stroke', '#000')
        .attr('x1', canvas.width / 2 - (2.5 * padding.l))
        .attr('y1', 0)
        .attr('x2', canvas.width / 2 - (2.5 * padding.l))
        .attr('y2', canvas.height)
    
    //Dynamic Text Generation 
    var textCont = handles.admissionsScatter.append('g')
        .attr('class', 'dynamic-text-cont-admissions')
        .attr('transform', `translate(${canvas.width / 2}, ${0})`)
    // textCont.append('rect')
    //     .attr('width', canvas.width / 2 - padding.l * 4)
    //     .attr('height', otherGlobals.halfGraphWidth / 2)
    //     .attr('fill-opacity', 0)
    //     .attr('stroke', 'black')
    var sat = textCont.append('text')
        .attr('id', 'avg-sat-header')
        .attr('transform', `translate(0, ${padding.t})`)
    sat.append('tspan')
        .text("Average")
        .attr("x", "0")
    sat.append('tspan')
        .text("SAT")
        .attr("dy", "28px")
        .attr("x", "0px")

    var w = (canvas.width / 2 - 4 * padding.l)
    var act = textCont.append('text')
        .attr('id', 'avg-act-header')
        .attr('transform', `translate(${w / 2}, ${padding.t})`)
    act.append('tspan')
        .text("Median")
        .attr("x", "0")
    act.append('tspan')
        .text("ACT")
        .attr("dy", "28px")
        .attr("x", "0px")

    textCont.append('text')
        .attr('class', 'score-text')
        .attr('transform', `translate(${w/4}, ${otherGlobals.halfGraphWidth / 4 + padding.t})`)
        .text(selectedCollege.satAvg)
        
    
    textCont.append('text')
        .attr('class', 'score-text')
        .attr('transform', `translate(${w / 2 + w / 4}, ${otherGlobals.halfGraphWidth / 4 + padding.t})`)
        .text(selectedCollege.actMedian)

    var bigSentenceOne = textCont.append('text')
        .attr('transform', `translate(0, ${otherGlobals.halfGraphWidth / 2})`)
    bigSentenceOne.append('tspan')
        .attr("x", "0px")
        .text(`The national average SAT score is ${otherGlobals.gSatAvg}, and the median ACT score is `)
    bigSentenceOne.append('tspan')
        .attr("x", "0px")
        .attr("y", "24px")
        .text(`${otherGlobals.gActMedian} across all colleges.`)
    bigSentenceOne.append('tspan')
        .attr("x", "0px")
        .attr("y", "48px")
        .text(d => {
            return `This means that ${selectedCollege.name}`
        })
    bigSentenceOne.append('tspan')
        .attr("x", "0px")
        .attr("y", "72px")
        .text(d => {
            var sent = ''
            var ct = 0
            if (selectedCollege.actMedian >= otherGlobals.gActMedian) {
                ct += 1
            }
            if (selectedCollege.satAvg >= otherGlobals.gSatAvg) {
                ct += 1
            }

            if (ct == 2) {
                return "is a school that could be quite difficult to get into based on scores alone"
            } else if (ct == 1)  {
                return "is a school that could or could not be easy to get into"
            } else {
                return "is a school that may be reasonably easy to qualify for"
            }
        })
    

    handles.barGraphRace = handles.admissionsScatter.append('g')
        .attr('class', 'cont-race-bar')
        .attr('transform', `translate(${canvas.width / 2 }, ${otherGlobals.halfGraphWidth /2 + 4 * padding.t})`)
    
    // var box = handles.barGraphRace.append('rect')
    //     .attr('x', 0)
    //     .attr('y', 0)
    //     .attr('width', barGraphWidth)
    //     .attr('height', otherGlobals.halfGraphWidth / 2)
    //     .attr('fill-opacity', 0.05)
    handles.barGraphRace.append('text')
        .text("Racial Makeup of Undergraduate Population")
        .attr('text-anchor', 'middle')
        .attr('transform', `translate(${barGraphWidth / 2}, ${-padding.t / 4})`)

    handles.barGraphRace.append('g')
        .attr('class', 'bar-y-axis')
        .call(d3.axisLeft(raceBandScale));
    handles.barGraphRace.append('g')
        .attr('class', 'bar-x-axis')
        .call(d3.axisBottom(raceRectScale([0, 1])) .tickFormat(a => `${a * 100}%`))
        .attr('transform', `translate(0, ${otherGlobals.halfGraphWidth / 2})`);
    updateRacePortionNums();
    raceArray.forEach((e, i) => {
        console.log(e, racePortion[i])
    })
    var barGraphRaceSelect = handles.barGraphRace.selectAll('.race-bar').data(racePortion);
    barGraphRaceSelect.enter()
        .append('rect')
        .attr('class', 'raceBarCylinder')
        .attr('height', raceBandScale.bandwidth() * 0.7)
        .attr('percent', d => {return d})
        .attr('width', (d) => {
            return raceRectScale([0, 1])(d);
        })
        .attr('y', (_, i) => {
            return (i + .15) * raceBandScale.bandwidth()
        })
        .attr('x', 1)
        .attr('fill', '#414535');
    handles.barGraphRace.append('text').attr('class','.race-bar-caption')
        .attr('text-anchor', 'middle')
        .attr('transform', `translate(${barGraphWidth / 2}, ${otherGlobals.halfGraphWidth / 2 + padding.t})`)
        .text(`Data taken from ${selectedCollege.undergradPopulation} undergrads`)

    
    var admissionText = handles.admissionsScatter.append("g").attr("class", "admissions-text-section")
    admissionText.attr("transform", `translate(${-padding.t * 2}, ${1.2 * otherGlobals.halfGraphWidth })`);
    admissionText.append('rect')
        .attr('x', 0)
        .attr('y', 0)
        .attr('width', canvas.width / 2 - padding.l)
        .attr('height', otherGlobals.halfGraphWidth / 2)
        .attr('fill', '#cccccc')
        .attr('fill-opacity', 0)
    admissionText.append('rect')
        .attr('x', 0)
        .attr('y', padding.t * 1.5  )
        .attr('width', canvas.width / 2 - padding.l)
        .attr('height', otherGlobals.halfGraphWidth / 2 - padding.t * 2 )
        .attr('class', 'text-wrap-1')
        .attr('fill-opacity', 0)
    admissionText.append("text")
        .text("Important Factors")
        .attr('x', (canvas.width / 2 - padding.l)/2)
        .attr('y', padding.t * 1.5)
        .attr('class', 'subheading')
        /////////////////
    admissionText.append("text")
        .attr('x', padding.l/2)
        .attr('y', padding.t * 2.5)
        .text( "When students are choosing a college, they consider a variety of factors")
    admissionText.append("text")
        .attr('x', padding.l/2)
        .attr('y', padding.t * 3)
        .text("After checking if his/her program is offered, a student can quickly determine")
    admissionText.append("text")
        .attr('x', padding.l/2)
        .attr('y', padding.t * 3.5)
        .text("if a college is the right fit for them based on admission statistics, demographics,")
    admissionText.append("text")
        .attr('x', padding.l/2)
        .attr('y', padding.t * 4)
        .text("and retention rate.  After that, usually a campus visit can answer more questions")
    admissionText.append("text")
        .attr('x', padding.l/2)
        .attr('y', padding.t * 4.5)
        .text("and give an idea of the environment.  Finally, the financials are an important ")
    admissionText.append("text")
        .attr('x', padding.l/2)
        .attr('y', padding.t * 5)
        .text("deciding factor in choosing the best fit college.")
}
var pie = d3.pie().sort(null);
var pieColorScale = d3.scaleOrdinal(['#414535', '#ccc'])
function  initDonutData(){
    // generate two radial donut charts 
    
    var fullTimeFacultyCont = handles.donutChart.append('g');
    var sizingWidth = canvas.width / 2 - padding.l
    var sizingHeight = canvas.height / 4
    handles.donutChart.append("text")
        .attr('text-anchor', 'middle')
        .attr('transform', `translate(${sizingWidth / 2}, 0)`)
        .attr('class', 'subheading')
        .text("Student vs Faculty Full-Time Ratios")
    // var sizingRect = handles.donutChart.append('rect')
    //     .attr('fill-opacity', 0)
    //     .attr('stroke-width', 2)
    //     .attr('stroke', 'rgb(0,0,0)')
    //     .attr('width', sizingWidth)
    //     .attr('height', sizingHeight)

    // fullTimeFacultyCont.append('rect').attr('width', (sizingWidth /2)).attr('height', sizingHeight - (padding.l / 2))
    //     .attr('stroke-width', 2)
    //     .attr('stroke', 'rgb(255,0,0)')
    //     .attr('fill-opacity', 0)
    //     .attr('x', sizingWidth / 2)

    var ftfOptions = [selectedCollege.pctFullTimeFaculty, 1 - selectedCollege.pctFullTimeFaculty]
    var arcs = fullTimeFacultyCont.selectAll(".arc")
        .data(pie(ftfOptions))
        .enter()
        .append("g")
        .attr("class", "arc")
        .attr('pct', d => {return d.pctFullTimeFaculty})
        .attr('transform', `translate(${sizingWidth/4}, ${sizingWidth / 4})`)
    fullTimeFacultyCont.append('text')
        .text(`${d3.format(".2f")(selectedCollege.pctFullTimeFaculty * 100)}%`)
        .attr('text-anchor', 'middle')
        .attr('transform', `translate(${sizingWidth / 4}, ${sizingWidth / 4})`)
        .attr('font-size', 32)
    fullTimeFacultyCont.append('text')
        .text(`Full-Time Faculty`)
        .attr('text-anchor', 'middle')
        .attr('transform', `translate(${sizingWidth / 4}, ${sizingWidth / 4 + padding.t / 2})`)
    var arc = d3.arc().innerRadius(sizingWidth / 4 - padding.t * 1.5).outerRadius(sizingWidth / 4 - padding.t / 2);
    arcs.append('path')
        .attr('d', arc)
        .attr('fill', (_, i) => pieColorScale(i))
        .attr('fill-opacity', (_, i) => {return i == 1 ? 0: 1})

    var partTimeStuCont = handles.donutChart.append('g').attr('transform', `translate(${sizingWidth / 2}, 0)`);
    var partTimeSOptions = [1 - selectedCollege.pctPartTimeUndergrads, selectedCollege.pctPartTimeUndergrads]
    var arcs2 = partTimeStuCont.selectAll(".arc")
        .data(pie(partTimeSOptions))
        .enter()
        .append('g')
        .attr('class', 'arc')
        .attr('pct', d => {return d.pctPartTimeUndergrads})
        .attr('transform', `translate(${sizingWidth/4}, ${sizingWidth / 4})`)
    arcs2.append('path')
        .attr('d', arc)
        .attr('fill', (_, i) => pieColorScale(i))
        .attr('fill-opacity', (_, i) => {return i == 1 ? 0: 1})

    partTimeStuCont.append('text')
        .text(`${d3.format(".2f")(partTimeSOptions[0] * 100)}%`)
        .attr('text-anchor', 'middle')
        .attr('transform', `translate(${sizingWidth / 4}, ${sizingWidth / 4})`)
        .attr('font-size', 32)
    partTimeStuCont.append('text')
        .text(`Full-Time Students`)
        .attr('text-anchor', 'middle')
        .attr('transform', `translate(${sizingWidth / 4}, ${sizingWidth / 4 + padding.t / 2})`)

}
var salaryScale = d3.scaleLinear().domain([120000, 0]).range([0, canvas.height * 0.33 - padding.t * 2])
var scaleBand = d3.scaleBand().domain(['Average Cost',  'Median Debt on Grad', 'Median Debt', 'Median Earnings']).range([0, canvas.width / 2.5])
function initSalaryChart() {
    console.log(selectedCollege)
    var chartHeight = canvas.height * 0.33 - padding.t 
    // handles.salaryChart.append('rect')
    //     .attr('x', 0)
    //     .attr('y', padding.t)
    //     .attr('width', canvas.width / 2)
    //     .attr('height', chartHeight)
    //     .attr('fill-opacity', 0.3)
    //     .attr('fill', 'rgb(128, 128, 128')
    /*
        avgCost: +r['Average Cost'],
        medianDebtOnGrad: +r['Median Debt on Graduation'],
        medianDebt: +r['Median Debt'],
        pctFederalLoans: +r['% Federal Loans'],
        eightYrMedianSalary: +r['Median Earnings 8 years After Entry']
    */
    handles.salaryChart.append('g').call(d3.axisLeft(salaryScale)
        .tickFormat(d => (`$${d/1000}k`)))
        .attr('transform', `translate(${padding.l * 1.2}, ${padding.t})`)
    handles.salaryChart.append('g').call(d3.axisBottom(scaleBand))
        .attr('transform', `translate(${padding.l * 1.2}, ${canvas.height * .33 - padding.t})`)

    var dataArr = [
        selectedCollege.avgCost,
        selectedCollege.medianDebtOnGrad,
        selectedCollege.medianDebt,
        selectedCollege.eightYrMedianSalary
    ]

    handles.salaryChart.selectAll('moneyBar').data(dataArr)
        .enter()
        .append('rect')
        .attr('class', 'moneyBar')
        .attr('money', (d) => {return d;})
        .attr('x', (_, i) => {
            return (i + 0.25) * scaleBand.bandwidth() + (padding.l * 1.2)
        })
        .attr('y', (d, i) => {
            return (canvas.height * 0.33 - padding.t) - salaryScale(120000 - d)
        })
        .attr('height', (d) => {
            return salaryScale(120000 - d)
        })
        .attr('width', scaleBand.bandwidth() * 0.5)
        .attr('fill', '#414535')
    
    handles.salaryChart.append('text')
        .attr('class', 'subheading')
        .attr('transform', `translate(${canvas.width / 4 - .5 * padding.l}, ${padding.t * 1.5})`)
        .text('Costs and Earnings')

}

function createRatioText(reference) {
    // reference.append('rect')
    //     .attr('x', 0)
    //     .attr('y', 0)
    //     .attr('width', canvas.width / 2 - padding.l)
    //     .attr('height', otherGlobals.halfGraphWidth / 2)
    //     .attr('class', 'text-wrap-1')
    //     .attr('fill-opacity', 0.5 )
    reference.append("text")
        .text("The Importance of Faculty")
        .attr('x', (canvas.width / 2 - padding.l)/2)
        .attr('y', padding.t / 2)
        .attr('class', 'subheading')
        /////////////////
    reference.append("text")
        .attr('x', padding.l/2)
        .attr('y', padding.t * 1.5)
        .text( "Having a clear understanding of how many faculty are at a school can greatly")
    reference.append("text")
        .attr('x', padding.l/2)
        .attr('y', padding.t * 2)
        .text("impact a student's experience in college.  Many students are highly motivated ")
    reference.append("text")
        .attr('x', padding.l/2)
        .attr('y', padding.t * 2.5)
        .text("to do things like undergraduate research or to make strong connections,")
    reference.append("text")
        .attr('x', padding.l/2)
        .attr('y', padding.t * 3)
        .text("and having more full-time faculty means more opportunities.  However, even for")
    reference.append("text")
        .attr('x', padding.l/2)
        .attr('y', padding.t * 3.5)
        .text("the average student, knowing that more professors are full-time gives more")
    reference.append("text")
        .attr('x', padding.l/2)
        .attr('y', padding.t * 4)
        .text("confidence in that school's educational program.")
}