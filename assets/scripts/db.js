var DESTINATIONS = [
	{
		code: 'ewr',
		name: 'Newark Liberty International Airport (EWR)',
		city: 'Newark, New Jersey (NJ), USA 🇺🇸',
		pos: [40.70340156126785, -74.17330276840164],
		hubs: ['sfo', 'iah', 'mia', 'hnl'],
		isHub: true,
		tz: 'US/Eastern'
	},
	{
		code: 'sfo',
		name: 'San Francisco International Airport (SFO)',
		city: 'San Francisco, California (CA), USA 🇺🇸',
		pos: [37.62141455145011, -122.37878377625846],
		hubs: ['ewr', 'iah', 'mia', 'hnl'],
		isHub: true,
		tz: 'US/Pacific'
	},
	{
		code: 'iah',
		name: 'George Bush Intercontinental Airport (IAH)',
		city: 'Houston, Texas (TX), USA 🇺🇸',
		pos: [29.99029394928301, -95.33691148715191],
		hubs: ['ewr', 'sfo', 'mia', 'hnl'],
		isHub: true,
		tz: 'US/Central'
	},
	{
		code: 'mia',
		name: 'Miami International Airport (MIA)',
		city: 'Miami, Florida (FL), USA 🇺🇸',
		pos: [25.796412980391715, -80.28700802739922],
		hubs: ['ewr', 'sfo', 'iah', 'hnl'],
		isHub: true,
		tz: 'US/Eastern'
	},
	{
		code: 'hnl',
		name: 'Daniel K. Inouye International Airport (HNL)',
		city: 'Honolulu, Hawaii (HI), USA 🇺🇸',
		pos: [21.319087239318254, -157.9254318902438],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		isHub: true,
		tz: 'US/Hawaii'
	},
	{
		name: 'Albuquerque International Airport (ABQ)',
		city: 'Albuquerque, New Mexico (NM), USA 🇺🇸',
		pos: [35.04446359549329, -106.61291166771365],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Mountain'
	},
	{
		name: 'Kotoka International Airport (ACC)',
		city: 'Accra, Ghana 🇬🇭',
		pos: [5.606084818402552, -0.1681342315152777],
		hubs: ['mia'],
		tz: 'Africa/Accra'
	},
	{
		name: 'Auckland Airport (AKL)',
		city: 'Auckland, New Zealand 🇳🇿',
		pos: [-37.008565657401164, 174.7847156217281],
		hubs: ['hnl'],
		tz: 'Pacific/Auckland'
	},
	{
		name: 'Albany International Airport (ALB)',
		city: 'Albany, New York (NY), USA 🇺🇸',
		pos: [42.74795631522345, -73.80264653273483],
		hubs: ['sfo', 'iah', 'mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'Houari Boumediene Airport (ALG)',
		city: 'Algiers, Algeria 🇩🇿',
		pos: [36.69712417026543, 3.20821173847129],
		hubs: ['mia'],
		tz: 'Africa/Algiers'
	},
	{
		name: 'Amsterdam Schiphol Airport (AMS)',
		city: 'Amsterdam, The Netherlands 🇳🇱',
		pos: [52.310623851948954, 4.768263669222851],
		hubs: ['ewr'],
		tz: 'Europe/Amsterdam'
	},
	{
		name: 'Ted Stevens International Airport (ANC)',
		city: 'Anchorage, Alaska (AK), USA 🇺🇸',
		pos: [61.171332648, -149.991162702],
		hubs: ['ewr', 'sfo', 'iah'],
		tz: 'US/Alaska'
	},
	{
		name: 'V.C. Bird International Airport (ANU)',
		city: 'Antigua and Barbuda 🇦🇬',
		pos: [17.141264458109006, -61.79075921641097],
		hubs: ['mia'],
		tz: 'America/Puerto_Rico'
	},
	{
		name: 'Athens International Airport (ATH)',
		city: 'Athens, Greece 🇬🇷',
		pos: [37.93572283626069, 23.948437055281335],
		hubs: ['ewr'],
		tz: 'Europe/Athens'
	},
	{
		name: 'Hartsfield-Jackson Atlanta International Airport (ATL)',
		city: 'Atlanta, Georgia (GA), USA 🇺🇸',
		pos: [33.64083507608079, -84.42787180090849],
		hubs: ['ewr', 'sfo', 'iah', 'mia', 'hnl'],
		tz: 'US/Eastern'
	},
	{
		name: 'Queen Beatrix International Airport (AUA)',
		city: 'Oranjestad, Aruba 🇦🇼',
		pos: [12.502909500135036, -70.00820204601975],
		hubs: ['mia'],
		tz: 'America/Puerto_Rico'
	},
	{
		name: 'Austin-Bergstrom International Airport (AUS)',
		city: 'Austin, Texas (TX), USA 🇺🇸',
		pos: [30.19868847903938, -97.66571921787173],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Central'
	},
	{
		name: 'El Dorado International Airport (BOG)',
		city: 'Bogota, Colombia 🇨🇴',
		pos: [4.701527767834316, -74.14601141660555],
		hubs: ['iah'],
		tz: 'America/Bogota'
	},
	{
		name: 'Boise Airport (BOI)',
		city: 'Boise, Idaho (ID), USA 🇺🇸',
		pos: [43.56613372250894, -116.22244467737012],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Mountain'
	},
	{
		name: 'Boston Logan International Airport (BOS)',
		city: 'Boston, Massachusetts (MA), USA 🇺🇸',
		pos: [42.365961658704904, -71.00960315045923],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'Barcelona-El Prat Airport (BCN)',
		city: 'Barcelona, Spain 🇪🇸',
		pos: [41.29799278042036, 2.0833798949812197],
		hubs: ['ewr'],
		tz: 'Europe/Madrid'
	},
	{
		name: 'L.F. Wade International Airport (BDA)',
		city: 'Bermuda 🇧🇲',
		pos: [32.359855537423016, -64.70471205965694],
		hubs: ['mia'],
		tz: 'Atlantic/Bermuda'
	},
	{
		name: 'Nashville International Airport (BNA)',
		city: 'Nashville, Tennessee (TN), USA 🇺🇸',
		pos: [36.126169659792566, -86.67743567520559],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Central'
	},
	{
		name: 'Bradley International Airport (BDL)',
		city: 'Hartford, Connecticut (CT), USA 🇺🇸',
		pos: [41.938985209387795, -72.68590265544461],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'Western Nebraska-Scottsbluff Regional Airport (BFF)',
		city: 'Scottsbluff, Nebraska (NE), USA 🇺🇸',
		pos: [41.87180880453483, -103.5942995049976],
		hubs: ['sfo', 'iah'],
		tz: 'US/Mountain'
	},
	{
		name: 'Grantley Adams International Airport (BGI)',
		city: 'Barbados 🇧🇧',
		pos: [13.080035627493604, -59.48774184440369],
		hubs: ['mia'],
		tz: 'America/Puerto_Rico'
	},
	{
		name: 'Brisbane Airport (BNE)',
		city: 'Brisbane, Australia 🇦🇺',
		pos: [-27.39418580574182, 153.1218517553009],
		hubs: ['hnl'],
		tz: 'Australia/Brisbane'
	},
	{
		name: 'Brasilia International Airport (BSB)',
		city: 'Brasilia, Brazil 🇧🇷',
		pos: [-15.869654340657481, -47.91706316214675],
		hubs: ['iah'],
		tz: 'Brazil/East'
	},
	{
		name: 'Burlington International Airport (BTV)',
		city: 'Burlington, Vermont (VT), USA 🇺🇸',
		pos: [44.470755128608445, -73.1516788038435],
		hubs: ['sfo', 'iah', 'mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'Buffalo Niagara International Airport (BUF)',
		city: 'Buffalo, New York (NY), USA 🇺🇸',
		pos: [42.93973729622188, -78.72948524437224],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'Hollywood Burbank Airport (BUR)',
		city: 'Burbank, California (CA), USA 🇺🇸',
		pos: [34.19832105435531, -118.35736068695542],
		hubs: ['sfo', 'mia'],
		tz: 'US/Pacific'
	},
	{
		name: 'Baltimore/Washington International Airport (BWI)',
		city: 'Baltimore, Maryland (MD), USA 🇺🇸',
		pos: [39.177536943139835, -76.66830640614698],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'Akron-Canton Airport (CAK)',
		city: 'Akron, Ohio (OH), USA 🇺🇸',
		pos: [40.91539520193488, -81.4415358425859],
		hubs: ['sfo'],
		tz: 'US/Eastern'
	},
	{
		name: 'Paris Charles de Gaulle Airport (CDG)',
		city: 'Paris, France 🇫🇷',
		pos: [49.01088754570143, 2.5481856293293754],
		hubs: ['ewr'],
		tz: 'Europe/Paris'
	},
	{
		name: 'Charleston International Airport (CHS)',
		city: 'Charleston, South Carolina (SC), USA 🇺🇸',
		pos: [32.89249643, -80.037666516],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'Cleveland Hopkins International Airport (CLE)',
		city: 'Cleveland, Ohio (OH), USA 🇺🇸',
		pos: [41.405886997309366, -81.85371669778253],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'Charlotte Douglas International Airport (CLT)',
		city: 'Charlotte, North Carolina (NC), USA 🇺🇸',
		pos: [35.214358753004724, -80.94714294071665],
		hubs: ['ewr', 'sfo', 'iah', 'mia', 'hnl'],
		tz: 'US/Eastern'
	},
	{
		name: 'John Glenn Columbus International Airport (CMH)',
		city: 'Columbus, Ohio (OH), USA 🇺🇸',
		pos: [39.99990700422163, -82.88685483700165],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'Mohammed V International Airport (CMN)',
		city: 'Casablanca, Morocco 🇲🇦',
		pos: [33.370015580895306, -7.5857562888435845],
		hubs: ['mia'],
		tz: 'Africa/Casablanca'
	},
	{
		name: 'Colorado Springs Airport (COS)',
		city: 'Colorado Springs, Colorado (CO), USA 🇺🇸',
		pos: [38.80179559142115, -104.70258244384314],
		hubs: ['ewr', 'iah', 'mia'],
		tz: 'US/Mountain'
	},
	{
		name: 'Cape Town International Airport (CPT)',
		city: 'Cape Town, South Africa 🇿🇦',
		pos: [-33.971498570998, 18.60206364117647],
		hubs: ['mia'],
		tz: 'Africa/Johannesburg'
	},
	{
		name: 'Cancun International Airport (CUN)',
		city: 'Cancun, Mexico 🇲🇽',
		pos: [21.04198345163572, -86.87396332895656],
		hubs: ['ewr', 'iah'],
		tz: 'America/Cancun'
	},
	{
		name: 'Curacao International Airport (CUR)',
		city: 'Curacao 🇨🇼',
		pos: [12.189339619252113, -68.96166422979832],
		hubs: ['mia'],
		tz: 'America/Puerto_Rico'
	},
	{
		name: 'Cincinnati/Northern Kentucky International Airport (CVG)',
		city: 'Hebron, Kentucky (KY), USA 🇺🇸',
		pos: [39.05091119818685, -84.66749507901761],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'Cassidy International Airport (CXI)',
		city: 'Kiritimati, Kiribati 🇰🇮',
		pos: [1.9867631645901074, -157.35021966168168],
		hubs: ['hnl'],
		tz: 'Pacific/Kiritimati'
	},
	{
		name: 'Indira Gandhi International Airport (DEL)',
		city: 'New Delhi, India 🇮🇳',
		pos: [28.556463675916227, 77.10008650432476],
		hubs: ['sfo'],
		tz: 'Asia/Kolkata'
	},
	{
		name: 'Denver International Airport (DEN)',
		city: 'Denver, Colorado (CO), USA 🇺🇸',
		pos: [39.856787796502296, -104.67360889044873],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Mountain'
	},
	{
		name: 'Dallas/Fort Worth International Airport (DFW)',
		city: 'Dallas, Texas (TX), USA 🇺🇸',
		pos: [32.90175623187377, -97.04011304308536],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Central'
	},
	{
		name: 'Des Moines International Airport (DSM)',
		city: 'Des Moines, Iowa (IA), USA 🇺🇸',
		pos: [41.53421361181389, -93.65911766543995],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Central'
	},
	{
		name: 'Blaise Diagne International Airport (DSS)',
		city: 'Ndiass, Senegal 🇸🇳',
		pos: [14.671072249456303, -17.06737968914397],
		hubs: ['mia'],
		tz: 'GMT'
	},
	{
		name: 'Detroit Metropolitan Wayne County Airport (DTW)',
		city: 'Detroit, Michigan (MI), USA 🇺🇸',
		pos: [42.21640799753565, -83.35532128673535],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'Dublin Airport (DUB)',
		city: 'Dublin, Ireland 🇮🇪',
		pos: [53.42641611587296, -6.249684496130292],
		hubs: ['ewr'],
		tz: 'Europe/Dublin'
	},
	{
		name: 'Dubai International Airport (DXB)',
		city: 'Dubai, United Arab Emirates (UAE) 🇦🇪',
		pos: [25.25309661391826, 55.36567275706557],
		hubs: ['sfo'],
		tz: 'Asia/Dubai'
	},
	{
		name: 'Edinburgh Airport (EDI)',
		city: 'Edinburgh, Scotland, United Kingdom (UK) 🇬🇧',
		pos: [55.95077897347942, -3.3614102862399537],
		hubs: ['ewr'],
		tz: 'Europe/London'
	},
	{
		name: 'El Paso International Airport (ELP)',
		city: 'El Paso, Texas (TX), USA 🇺🇸',
		pos: [31.80542655947106, -106.38241304461272],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Mountain'
	},
	{
		name: 'Ezeiza International Airport (EZE)',
		city: 'Buenos Aires, Argentina 🇦🇷',
		pos: [-34.81472221811849, -58.5349142696793],
		hubs: ['iah'],
		tz: 'America/Argentina/Buenos_Aires'
	},
	{
		name: 'Hector International Airport (FAR)',
		city: 'Fargo, North Dakota (ND), USA 🇺🇸',
		pos: [46.92181462122193, -96.81670671316597],
		hubs: ['ewr', 'iah', 'mia'],
		tz: 'US/Central'
	},
	{
		name: 'Fresno Yosemite International Airport (FAT)',
		city: 'Fresno, California (CA), USA 🇺🇸',
		pos: [36.77582349137883, -119.7182263207816],
		hubs: ['sfo', 'iah', 'mia'],
		tz: 'US/Pacific'
	},
	{
		name: 'Leonardo da Vinci International Airport (FCO)',
		city: 'Rome, Italy 🇮🇹',
		pos: [41.80413085802929, 12.251849849230378],
		hubs: ['ewr'],
		tz: 'Europe/Rome'
	},
	{
		name: 'Fort Lauderdale-Hollywood International Airport (FLL)',
		city: 'Fort Lauderdale, Florida (FL), USA 🇺🇸',
		pos: [26.074330752581144, -80.1506451175699],
		hubs: ['ewr', 'sfo', 'iah'],
		tz: 'US/Eastern'
	},
	{
		name: 'Grand Bahama Airport (FPO)',
		city: 'Freeport, Bahamas 🇧🇸',
		pos: [26.54776858081397, -78.70253123123514],
		hubs: ['mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'Frankfurt Airport (FRA)',
		city: 'Frankfurt, Germany 🇩🇪',
		pos: [50.038235470253035, 8.562452176837837],
		hubs: ['ewr'],
		tz: 'Europe/Berlin'
	},
	{
		name: 'Sioux Falls Regional Airport (FSD)',
		city: 'Sioux Falls, South Dakota (SD), USA 🇺🇸',
		pos: [43.58285310955137, -96.74018491546143],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Central'
	},
	{
		name: 'Miguel Hidalgo y Costilla International Airport (GDL)',
		city: 'Guadalajara, Mexico 🇲🇽',
		pos: [20.52589580006699, -103.30765718888681],
		hubs: ['iah'],
		tz: 'America/Mexico_City'
	},
	{
		name: 'Rio de Janeiro/Galeao International Airport (GIG)',
		city: 'Rio di Janeiro, Brazil 🇧🇷',
		pos: [-22.804592230082836, -43.25675808978346],
		hubs: ['iah'],
		tz: 'Brazil/East'
	},
	{
		name: 'Sao Paulo/Guarulhos International Airport (GRU)',
		city: 'Sao Paulo, Brazil 🇧🇷',
		pos: [-23.4301397120531, -46.47291429752642],
		hubs: ['iah'],
		tz: 'Brazil/East'
	},
	{
		name: 'Antonio B. Won Pat International Airport (GUM)',
		city: 'Guam, USA 🇬🇺',
		pos: [13.4863791493778, 144.80040397596647],
		hubs: ['hnl'],
		tz: 'Pacific/Guam'
	},
	{
		name: 'Jose Marti International Airport (HAV)',
		city: 'Havana, Cuba 🇨🇺',
		pos: [22.98666272, -82.405331712],
		hubs: ['mia'],
		tz: 'Cuba'
	},
	{
		name: 'Hong Kong International Airport (HKG)',
		city: 'Hong Kong 🇭🇰',
		pos: [22.308602611679753, 113.91835201005935],
		hubs: ['sfo'],
		tz: 'Asia/Hong_Kong'
	},
	{
		name: 'Dulles International Airport (IAD)',
		city: 'Washington, DC, USA 🇺🇸',
		pos: [38.95327013665701, -77.4565514890331],
		hubs: ['sfo', 'iah', 'mia', 'hnl'],
		tz: 'US/Eastern'
	},
	{
		name: 'Incheon International Airport (ICN)',
		city: 'Seoul, South Korea 🇰🇷',
		pos: [37.460632804087396, 126.44057390291141],
		hubs: ['sfo'],
		tz: 'Asia/Seoul'
	},
	{
		name: 'Dwight D. Eisenhower Airport (ICT)',
		city: 'Wichita, Kansas (KS), USA 🇺🇸',
		pos: [37.65083588295067, -97.42868807453723],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Central'
	},
	{
		name: 'Hilo International Airport (ITO)',
		city: 'Hilo, Hawaii (HI), USA 🇺🇸',
		pos: [19.71828308321948, -155.04165378827003],
		hubs: ['hnl'],
		tz: 'US/Hawaii'
	},
	{
		name: 'Indianapolis International Airport (IND)',
		city: 'Indianapolis, Indiana (IN), USA 🇺🇸',
		pos: [39.716991323244, -86.29558447337403],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'Jackson-Medgar Wiley Evers International Airport (JAN)',
		city: 'Jackson, Mississippi (MS), USA 🇺🇸',
		pos: [32.31234643525699, -90.07632339635566],
		hubs: ['ewr', 'sfo', 'iah'],
		tz: 'US/Central'
	},
	{
		name: 'Jacksonville International Airport (JAX)',
		city: 'Jacksonville, Florida (FL), USA 🇺🇸',
		pos: [30.4940250575088, -81.68793680243796],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'John F. Kennedy International Airport (JFK)',
		city: 'New York, New York (NY), USA 🇺🇸',
		pos: [40.64189712324801, -73.7779237593459],
		hubs: ['sfo', 'iah', 'mia', 'hnl'],
		tz: 'US/Eastern'
	},
	{
		name: 'O.R. Tambo International Airport (JNB)',
		city: 'Johannesburg, South Africa 🇿🇦',
		pos: [-26.136691994110528, 28.241156617041295],
		hubs: ['mia'],
		tz: 'Africa/Johannesburg'
	},
	{
		name: 'Keflavik International Airport (KEF)',
		city: 'Reykjavik, Iceland 🇮🇸',
		pos: [63.98070701155434, -22.627620001362224],
		hubs: ['ewr'],
		tz: 'Iceland'
	},
	{
		name: 'Kona International Airport (KOA)',
		city: 'Kailua-Kona, Hawaii (HI), USA 🇺🇸',
		pos: [19.737769862987626, -156.0428956900814],
		hubs: ['sfo', 'hnl'],
		tz: 'US/Hawaii'
	},
	{
		name: 'Harry Reid International Airport (LAS)',
		city: 'Las Vegas, Nevada (NV), USA 🇺🇸',
		pos: [36.08590149456017, -115.15072229119573],
		hubs: ['ewr', 'sfo', 'iah', 'mia', 'hnl'],
		tz: 'US/Pacific'
	},
	{
		name: 'Los Angeles International Airport (LAX)',
		city: 'Los Angeles, California (CA), USA 🇺🇸',
		pos: [33.9412952817257, -118.40872312135349],
		hubs: ['ewr', 'sfo', 'iah', 'mia', 'hnl'],
		tz: 'US/Pacific'
	},
	{
		name: 'Blue Grass Airport (LEX)',
		city: 'Lexington, Kentucky (KY), USA 🇺🇸',
		pos: [38.03779528003609, -84.60259757335659],
		hubs: ['sfo', 'iah'],
		tz: 'US/Eastern'
	},
	{
		name: 'Heathrow Airport (LHR)',
		city: 'London, United Kingdom (UK) 🇬🇧',
		pos: [51.47058336357465, -0.4544242756733526],
		hubs: ['ewr'],
		tz: 'Europe/London'
	},
	{
		name: 'Lihue Airport (LIH)',
		city: 'Lihue, Hawaii (HI), USA 🇺🇸',
		pos: [21.978913933768247, -159.34382035743394],
		hubs: ['hnl'],
		tz: 'US/Hawaii'
	},
	{
		name: 'Jorge Chavez International Airport (LIM)',
		city: 'Lima, Peru 🇵🇪',
		pos: [-12.023590851622739, -77.11199313107029],
		hubs: ['iah'],
		tz: 'America/Lima'
	},
	{
		name: 'Humberto Delgado Airport (LIS)',
		city: 'Lisbon, Portugal 🇵🇹',
		pos: [38.77616204030518, -9.135280903021002],
		hubs: ['ewr'],
		tz: 'Europe/Lisbon'
	},
	{
		name: 'Clinton National Airport (LIT)',
		city: 'Little Rock, Arkansas (AR), USA 🇺🇸',
		pos: [34.73014934857, -92.219905134052],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Central'
	},
	{
		name: 'Lanai Airport (LNY)',
		city: 'Lanai City, Hawaii (HI), USA 🇺🇸',
		pos: [20.79129049571412, -156.95037799977516],
		hubs: ['hnl'],
		tz: 'US/Hawaii'
	},
	{
		name: 'Murtala Muhammed International Airport (LOS)',
		city: 'Lagos, Nigeria 🇳🇬',
		pos: [6.582042315799838, 3.3210704254376475],
		hubs: ['mia'],
		tz: 'Africa/Lagos'
	},
	{
		name: 'Adolfo Suarez Madrid-Barajas Airport (MAD)',
		city: 'Madrid, Spain 🇪🇸',
		pos: [40.49847903162269, -3.5676089311550063],
		hubs: ['ewr'],
		tz: 'Europe/Madrid'
	},
	{
		name: 'Sangster International Airport (MBJ)',
		city: 'Montego Bay, Jamaica 🇯🇲',
		pos: [18.502391775768107, -77.91451690151644],
		hubs: ['mia'],
		tz: 'America/Jamaica'
	},
	{
		name: 'Kansas City International Airport (MCI)',
		city: 'Kansas City, Missouri (MO), USA 🇺🇸',
		pos: [39.30346588697873, -94.70907396438118],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Central'
	},
	{
		name: 'Orlando International Airport (MCO)',
		city: 'Orlando, Florida (FL), USA 🇺🇸',
		pos: [28.418822273035058, -81.30431680312665],
		hubs: ['ewr', 'sfo', 'iah', 'mia', 'hnl'],
		tz: 'US/Eastern'
	},
	{
		name: 'Melbourne Airport (MEL)',
		city: 'Melbourne, Australia 🇦🇺',
		pos: [-37.670866092849224, 144.84387908076323],
		hubs: ['hnl'],
		tz: 'Australia/Melbourne'
	},
	{
		name: 'Memphis International Airport (MEM)',
		city: 'Memphis, Tennessee (TN), USA 🇺🇸',
		pos: [35.041980059680945, -89.97921581534257],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Central'
	},
	{
		name: 'Mexico City International Airport (MEX)',
		city: 'Mexico City, Mexico 🇲🇽',
		pos: [19.43624818319543, -99.07194048906919],
		hubs: ['ewr', 'sfo', 'iah'],
		tz: 'America/Mexico_City'
	},
	{
		name: 'Manchester-Boston Regional Airport (MHT)',
		city: 'Manchester, New Hampshire (NH), USA 🇺🇸',
		pos: [42.9297832621787, -71.43505763213719],
		hubs: ['sfo', 'iah'],
		tz: 'US/Eastern'
	},
	{
		name: 'General Mitchell International Airport (MKE)',
		city: 'Milwaukee, Wisconsin (WI), USA 🇺🇸',
		pos: [42.94783578343849, -87.89664603166004],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Central'
	},
	{
		name: 'Ninoy Aquino International Airport (MNL)',
		city: 'Manila, Philippines 🇵🇭',
		pos: [14.505164646, 121.01833326],
		hubs: ['hnl'],
		tz: 'Asia/Manila'
	},
	{
		name: 'Missoula Montana Airport (MSO)',
		city: 'Missoula, Montana (MT), USA 🇺🇸',
		pos: [46.91876701016805, -114.08363087487372],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Mountain'
	},
	{
		name: 'Minneapolis-Saint Paul International Airport (MSP)',
		city: 'Minneapolis, Minnesota (MN), USA 🇺🇸',
		pos: [44.88624650092833, -93.22250729555996],
		hubs: ['ewr', 'sfo', 'iah', 'mia', 'hnl'],
		tz: 'US/Central'
	},
	{
		name: 'Louis Armstrong New Orleans International Airport (MSY)',
		city: 'New Orleans, Louisiana (LA), USA 🇺🇸',
		pos: [29.991146272960744, -90.25862783681688],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Central'
	},
	{
		name: 'Monterrey International (MTY)',
		city: 'Monterrey, Mexico 🇲🇽',
		pos: [25.777322304453758, -100.11456996208241],
		hubs: ['iah'],
		tz: 'America/Mexico_City'
	},
	{
		name: 'Munich International Airport (MUC)',
		city: 'Munich, Germany 🇩🇪',
		pos: [48.35101828934641, 11.776488342315458],
		hubs: ['ewr'],
		tz: 'Europe/Berlin'
	},
	{
		name: 'Nadi Airport (NAN)',
		city: 'Nadi, Fiji 🇫🇯',
		pos: [-17.75183452525651, 177.45078438213463],
		hubs: ['hnl'],
		tz: 'Pacific/Fiji'
	},
	{
		name: 'Lynden Pindling International Airport (NAS)',
		city: 'Nassau, Bahamas 🇧🇸',
		pos: [25.04400654513227, -77.46580015121297],
		hubs: ['ewr', 'mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'Narita International Airport (NRT)',
		city: 'Tokyo, Japan 🇯🇵',
		pos: [35.77226493717075, 140.39293589386335],
		hubs: ['ewr', 'sfo'],
		tz: 'Asia/Tokyo'
	},
	{
		name: 'Oakland International Airport (OAK)',
		city: 'Oakland, California (CA), USA 🇺🇸',
		pos: [37.71148324911222, -122.2193824513291],
		hubs: ['ewr', 'iah', 'mia'],
		tz: 'US/Pacific'
	},
	{
		name: 'Kahului Airport (OGG)',
		city: 'Kahului, Hawaii (HI), USA 🇺🇸',
		pos: [20.894645227300344, -156.43600538629138],
		hubs: ['sfo', 'hnl'],
		tz: 'US/Hawaii'
	},
	{
		name: 'Will Rogers Airport (OKC)',
		city: 'Oklahoma City, Oklahoma (OK), USA 🇺🇸',
		pos: [35.39319572984369, -97.60050445075717],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Central'
	},
	{
		name: 'Eppley Airfield (OMA)',
		city: 'Omaha, Nebraska (NE), USA 🇺🇸',
		pos: [41.30224308640403, -95.89469287800654],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Central'
	},
	{
		name: 'Ontario International Airport (ONT)',
		city: 'Ontario, California (CA), USA 🇺🇸',
		pos: [34.05596214250547, -117.59904106790037],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Pacific'
	},
	{
		name: 'O\'Hare International Airport (ORD)',
		city: 'Chicago, Illinois (IL), USA 🇺🇸',
		pos: [41.980694394637, -87.90899793532991],
		hubs: ['ewr', 'sfo', 'iah', 'mia', 'hnl'],
		tz: 'US/Central'
	},
	{
		name: 'Norfolk International Airport (ORF)',
		city: 'Norfolk, Virginia (VA), USA 🇺🇸',
		pos: [36.89570942043663, -76.20000537338909],
		hubs: ['ewr', 'sfo', 'iah'],
		tz: 'US/Eastern'
	},
	{
		name: 'Palm Beach International Airport (PBI)',
		city: 'West Palm Beach, Florida (FL), USA 🇺🇸',
		pos: [26.685785827360075, -80.09283796017972],
		hubs: ['ewr', 'sfo', 'iah'],
		tz: 'US/Eastern'
	},
	{
		name: 'Portland International Airport (PDX)',
		city: 'Portland, Oregon (OR), USA 🇺🇸',
		pos: [45.59024957185743, -122.59483674121826],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Pacific'
	},
	{
		name: 'Beijing Capital International Airport (PEK)',
		city: 'Beijing, China 🇨🇳',
		pos: [40.0801853355692, 116.60315498033326],
		hubs: ['sfo'],
		tz: 'Asia/Shanghai'
	},
	{
		name: 'Philadelphia International Airport (PHL)',
		city: 'Philadelphia, Pennsylvania (PA), USA 🇺🇸',
		pos: [39.87312718764114, -75.24362441975858],
		hubs: ['sfo', 'iah', 'mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'Phoenix Sky Harbor International Airport (PHX)',
		city: 'Phoenix, Arizona (AZ), USA 🇺🇸',
		pos: [33.43582170243552, -112.0101240396323],
		hubs: ['ewr', 'sfo', 'iah', 'mia', 'hnl'],
		tz: 'US/Mountain'
	},
	{
		name: 'Pittsburgh International Airport (PIT)',
		city: 'Pittsburgh, Pennsylvania (PA), USA 🇺🇸',
		pos: [40.49183102751426, -80.23501945402671],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'Providenciales International Airport (PLS)',
		city: 'Providenciales, Turks and Caicos Islands 🇹🇨',
		pos: [21.776326359168177, -72.27128035731569],
		hubs: ['mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'Piarco International Airport (POS)',
		city: 'Piarco, Trinidad and Tobago 🇹🇹',
		pos: [10.597664754910571, -61.33951627377069],
		hubs: ['mia'],
		tz: 'America/Puerto_Rico'
	},
	{
		name: 'Pago Pago International Airport (PPG)',
		city: 'Pago Pago, American Samoa, USA 🇦🇸',
		pos: [-14.328529463205866, -170.71318872964144],
		hubs: ['hnl'],
		tz: 'Pacific/Pago_Pago'
	},
	{
		name: 'Fa\'a\'a International Airport (PPT)',
		city: 'Tahiti, French Polynesia 🇵🇫',
		pos: [-17.55960524555043, -149.61021228790472],
		hubs: ['hnl'],
		tz: 'Pacific/Tahiti'
	},
	// {
	// 	name: 'Vaclav Havel Airport (PRG)',
	// 	city: 'Prague, Czechia 🇨🇿',
	// 	pos: [50.101859796884526, 14.263234742416973],
	// 	hubs: ['ewr'],
	// },
	{
		name: 'Palm Springs International Airport (PSP)',
		city: 'Palm Springs, California (CA), USA 🇺🇸',
		pos: [33.830568637238926, -116.50696100322521],
		hubs: ['sfo'],
		tz: 'US/Pacific'
	},
	{
		name: 'Punta Cana International Airport (PUJ)',
		city: 'Punta Cana, Dominican Republic 🇩🇴',
		pos: [18.563260946101263, -68.36852528802461],
		hubs: ['mia'],
		tz: 'America/Puerto_Rico'
	},
	{
		name: 'T.F. Green International Airport (PVD)',
		city: 'Providence, Rhode Island (RI), USA 🇺🇸',
		pos: [41.723507528600045, -71.42691301444177],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'Licenciado Gustavo Diaz Ordaz International (PVR)',
		city: 'Puerto Vallarta, Mexico 🇲🇽',
		pos: [20.68049831115806, -105.2524298465564],
		hubs: ['iah'],
		tz: 'America/Mexico_City'
	},
	{
		name: 'Portland International Jetport (PWM)',
		city: 'Portland, Maine (ME), USA 🇺🇸',
		pos: [43.64570214332969, -70.31004072274055],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'San Diego International Airport (SAN)',
		city: 'San Diego, California (CA), USA 🇺🇸',
		pos: [32.733728095648374, -117.19304634789322],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Pacific'
	},
	{
		name: 'Savannah/Hilton Head International Airport (SAV)',
		city: 'Savannah, Georgia (GA), USA 🇺🇸',
		pos: [32.12939158823519, -81.20176254594122],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'Louisville Muhammad Ali International Airport (SDF)',
		city: 'Louisville, Kentucky (KY), USA 🇺🇸',
		pos: [38.183129274399, -85.741038508206],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'Norman Y. Mineta San Jose International Airport (SJC)',
		city: 'San Jose, California (CA), USA 🇺🇸',
		pos: [37.363665715803144, -121.92895897613796],
		hubs: ['ewr', 'iah', 'mia'],
		tz: 'US/Pacific'
	},
	{
		name: 'Robert L. Bradshaw International Airport (SKB)',
		city: 'St. Kitts & Nevis 🇰🇳',
		pos: [17.3108341120326, -62.71916974592183],
		hubs: ['mia'],
		tz: 'America/Puerto_Rico'
	},
	{
		name: 'Shannon Airport (SNN)',
		city: 'Shannon, Ireland 🇮🇪',
		pos: [52.69897449709459, -8.914894175822724],
		hubs: ['ewr'],
		tz: 'Europe/Dublin'
	},
	{
		name: 'Princess Juliana International Airport (SXM)',
		city: 'St. Maarten 🇸🇽',
		pos: [18.04192078940854, -63.113028459403225],
		hubs: ['mia'],
		tz: 'America/Puerto_Rico'
	},
	{
		name: 'Raleigh-Durham International Airport (RDU)',
		city: 'Raleigh, North Carolina (NC), USA 🇺🇸',
		pos: [35.88007898015302, -78.78797484463837],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'Richmond International Airport (RIC)',
		city: 'Richmond, Virginia (VA), USA 🇺🇸',
		pos: [37.50677505510212, -77.32084242371478],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'Reno-Tahoe International Airport (RNO)',
		city: 'Reno, Nevada (NV), USA 🇺🇸',
		pos: [39.49964863013703, -119.76805218683198],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Pacific'
	},
	{
		name: 'Southwest Florida International Airport (RSW)',
		city: 'Fort Myers, Florida (FL), USA 🇺🇸',
		pos: [26.533753077135888, -81.75534048896644],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'San Antonio International Airport (SAT)',
		city: 'San Antonio, Texas (TX), USA 🇺🇸',
		pos: [29.531290632199877, -98.46845569088684],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Central'
	},
	{
		name: 'Seattle-Tacoma International Airport (SEA)',
		city: 'Seattle, Washington (WA), USA 🇺🇸',
		pos: [47.45358306768111, -122.30824812930476],
		hubs: ['ewr', 'sfo', 'iah', 'mia', 'hnl'],
		tz: 'US/Pacific'
	},
	{
		name: 'Arturo Merino Benitez Airport (SCL)',
		city: 'Santiago, Chile 🇨🇱',
		pos: [-33.38938543980737, -70.79442733965293],
		hubs: ['iah'],
		tz: 'America/Santiago'
	},
	{
		name: 'Shanghai Hongqiao International Airport (SHA)',
		city: 'Shanghai, China 🇨🇳',
		pos: [31.193096387538194, 121.33369906532243],
		hubs: ['sfo'],
		tz: 'Asia/Shanghai'
	},
	{
		name: 'Singapore Changi Airport (SIN)',
		city: 'Singapore 🇸🇬',
		pos: [1.3655760814659688, 103.99134627431354],
		hubs: ['hnl'],
		tz: 'Asia/Singapore'
	},
	{
		name: 'Los Cabos International Airport (SJD)',
		city: 'San Jose del Cabo, Mexico 🇲🇽',
		pos: [23.1456048417308, -109.71832014651572],
		hubs: ['iah'],
		tz: 'Mexico/BajaSur'
	},
	{
		name: 'Luis Munoz Marin International Airport (SJU)',
		city: 'San Juan, Puerto Rico, USA 🇵🇷',
		pos: [18.439669035343876, -65.99915740046777],
		hubs: ['ewr', 'mia'],
		tz: 'America/Puerto_Rico'
	},
	{
		name: 'Salt Lake City International Airport (SLC)',
		city: 'Salt Lake City, Utah (UT), USA 🇺🇸',
		pos: [40.79051939628816, -111.97902094610347],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Mountain'
	},
	{
		name: 'Sacramento International Airport (SMF)',
		city: 'Sacramento, California (CA), USA 🇺🇸',
		pos: [38.69506863213448, -121.59003261580382],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Pacific'
	},
	{
		name: 'St. Louis Lambert International Airport (STL)',
		city: 'St. Louis, Missouri (MO), USA 🇺🇸',
		pos: [38.74996298137237, -90.37484608851419],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Central'
	},
	{
		name: 'Sydney Airport (SYD)',
		city: 'Sydney, Australia 🇦🇺',
		pos: [-33.94985609315001, 151.1818694507839],
		hubs: ['hnl'],
		tz: 'Australia/Sydney'
	},
	{
		name: 'Chengdu Shuangliu International Airport (TFU)',
		city: 'Chengdu, China 🇨🇳',
		pos: [30.271849965598296, 104.44447857901999],
		hubs: ['sfo'],
		tz: 'Asia/Shanghai'
	},
	{
		name: 'Ben Gurion Airport (TLV)',
		city: 'Tel Aviv, Israel 🇮🇱',
		pos: [32.0060775789537, 34.885625736443],
		hubs: ['ewr'],
		tz: 'Asia/Tel_Aviv'
	},
	{
		name: 'Tampa International Airport (TPA)',
		city: 'Tampa, Florida (FL), USA 🇺🇸',
		pos: [27.977171332699836, -82.53112747358927],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'Taiwan Taoyuan International Airport (TPE)',
		city: 'Taipei 🇹🇼',
		pos: [25.078385372504524, 121.23404549362135],
		hubs: ['sfo'],
		tz: 'Asia/Taipei'
	},
	{
		name: 'Bonriki International Airport (TRW)',
		city: 'Tarawa, Kiribati 🇰🇮',
		pos: [1.3816943367896826, 173.14677443116932],
		hubs: ['hnl'],
		tz: 'Pacific/Tarawa'
	},
	{
		name: 'Tulsa International Airport (TUL)',
		city: 'Tulsa, Oklahoma (OK), USA 🇺🇸',
		pos: [36.198655852278264, -95.8837988854985],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Central'
	},
    {
		name: 'Tucson International Airport (TUS)',
		city: 'Tucson, Arizona (AZ), USA 🇺🇸',
		pos: [32.109666228, -110.937996248],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Mountain'
	},
	{
		name: 'Mariscal Sucre Quito International Airport (UIO)',
		city: 'Quito, Ecuador 🇪🇨',
		pos: [-0.1234546241729393, -78.3604826167644],
		hubs: ['iah'],
		tz: 'America/Lima'
	},
	{
		name: 'Ottawa International Airport (YOW)',
		city: 'Ottawa, Ontario, Canada 🇨🇦',
		pos: [45.31923461124119, -75.66914374429483],
		hubs: ['ewr', 'iah'],
		tz: 'Canada/Eastern'
	},
	{
		name: 'Montreal-Pierre Elliott Trudeau International Airport (YUL)',
		city: 'Montreal, Quebec, Canada 🇨🇦',
		pos: [45.461698664876224, -73.7478869554127],
		hubs: ['ewr', 'iah', 'mia'],
		tz: 'Canada/Eastern'
	},
	{
		name: 'Calgary International Airport (YYC)',
		city: 'Calgary, Alberta, Canada 🇨🇦',
		pos: [51.12150310000004, -114.00819495762246],
		hubs: ['ewr', 'iah', 'mia'],
		tz: 'Canada/Mountain'
	},
	{
		name: 'Vancouver International Airport (YVR)',
		city: 'Vancouver, British Columbia, Canada 🇨🇦',
		pos: [49.19675521104217, -123.18147272578588],
		hubs: ['ewr', 'sfo', 'iah', 'mia', 'hnl'],
		tz: 'Canada/Pacific'
	},
	{
		name: 'Toronto Pearson International Airport (YYZ)',
		city: 'Toronto, Ontario, Canada 🇨🇦',
		pos: [43.67779523959123, -79.6247972173393],
		hubs: ['ewr', 'iah', 'mia'],
		tz: 'Canada/Eastern'
	},
	{
		name: 'Zurich Airport (ZRH)',
		city: 'Zurich, Switzerland 🇨🇭',
		pos: [47.461358490923374, 8.553454682550841],
		hubs: ['ewr'],
		tz: 'Europe/Zurich'
	},
];

var FLIGHT_SCHEDULE = `Route,Flight,Aircraft,Type,Route Link,Flight Link,Aircraft Link,Departure,Arrival,Pax,Turnover,Result
EWR - ABQ,51043595435,EWR-ABQ-AUS 2,A321-200,https://www.airlines-manager.com/network/showline/43845061,https://www.airlines-manager.com/network/showflight/51043595435,https://www.airlines-manager.com/aircraft/show/90717078,0:45,9:59,310,"$572,422.00","$526,446.00"
EWR - ABQ,51043595436,EWR-ABQ-AUS 5,A321-200,https://www.airlines-manager.com/network/showline/43845061,https://www.airlines-manager.com/network/showflight/51043595436,https://www.airlines-manager.com/aircraft/show/95950199,2:45,11:59,310,"$572,422.00","$526,446.00"
EWR - ABQ,51054795083,EWR-ABQ-AUS 1,A321-200,https://www.airlines-manager.com/network/showline/43845061,https://www.airlines-manager.com/network/showflight/51054795083,https://www.airlines-manager.com/aircraft/show/90717079,10:00,19:14,310,"$572,422.00","$526,446.00"
EWR - ABQ,51071689657,EWR-ABQ-AUS 3,A321-200,https://www.airlines-manager.com/network/showline/43845061,https://www.airlines-manager.com/network/showflight/51071689657,https://www.airlines-manager.com/aircraft/show/90717077,16:45,1:59,310,"$572,422.00","$526,446.00"
EWR - ABQ,51077491382,EWR-ABQ-AUS 4,A321-200,https://www.airlines-manager.com/network/showline/43845061,https://www.airlines-manager.com/network/showflight/51077491382,https://www.airlines-manager.com/aircraft/show/90717076,17:45,2:59,310,"$572,422.00","$526,446.00"
EWR - AMS,51060918956,EWR 56B-3 B1,777-300,https://www.airlines-manager.com/network/showline/42008197,https://www.airlines-manager.com/network/showflight/51060918956,https://www.airlines-manager.com/aircraft/show/90656555,11:30,2:44,748,"$2,314,855.00","$2,070,029.00"
EWR - AMS,51066574460,EWR 56B-1 B1,777-300,https://www.airlines-manager.com/network/showline/42008197,https://www.airlines-manager.com/network/showflight/51066574460,https://www.airlines-manager.com/aircraft/show/94521251,13:15,4:29,748,"$2,314,855.00","$2,070,029.00"
EWR - AMS,51071689500,EWR 56B-6 B1,777-300,https://www.airlines-manager.com/network/showline/42008197,https://www.airlines-manager.com/network/showflight/51071689500,https://www.airlines-manager.com/aircraft/show/94521248,15:00,6:14,748,"$2,073,637.00","$1,890,446.00"
EWR - ANC,51043595738,EWR CARGO 1,A321neo-LR,https://www.airlines-manager.com/network/showline/44793460,https://www.airlines-manager.com/network/showflight/51043595738,https://www.airlines-manager.com/aircraft/show/103406580,4:00,18:59,0,"$313,356.00","$249,502.00"
EWR - ANC,51054795093,EWR-STL-PIT 3,737-900ER,https://www.airlines-manager.com/network/showline/44793460,https://www.airlines-manager.com/network/showflight/51054795093,https://www.airlines-manager.com/aircraft/show/98936169,10:00,0:59,320,"$926,056.00","$853,165.00"
EWR - ANC,51066574461,EWR-STL-PIT 2,737-900ER,https://www.airlines-manager.com/network/showline/44793460,https://www.airlines-manager.com/network/showflight/51066574461,https://www.airlines-manager.com/aircraft/show/98936170,13:15,4:14,320,"$926,056.00","$853,165.00"
EWR - ANC,51077491483,EWR-STL-PIT 1,737-900ER,https://www.airlines-manager.com/network/showline/44793460,https://www.airlines-manager.com/network/showflight/51077491483,https://www.airlines-manager.com/aircraft/show/98936171,18:45,9:44,320,"$926,056.00","$853,165.00"
EWR - ANC,51082169904,EWR-STL-PIT 4,737-900ER,https://www.airlines-manager.com/network/showline/44793460,https://www.airlines-manager.com/network/showflight/51082169904,https://www.airlines-manager.com/aircraft/show/98936168,21:45,12:44,320,"$837,183.00","$773,340.00"
EWR - ATH,51043595322,EWR 84A-6 B2,777-300,https://www.airlines-manager.com/network/showline/39747655,https://www.airlines-manager.com/network/showflight/51043595322,https://www.airlines-manager.com/aircraft/show/90656552,0:00,19:59,852,"$3,228,020.00","$2,935,727.00"
EWR - ATH,51077491553,EWR 84A-3 B2,777-300,https://www.airlines-manager.com/network/showline/39747655,https://www.airlines-manager.com/network/showflight/51077491553,https://www.airlines-manager.com/aircraft/show/90656553,19:45,15:44,852,"$3,228,020.00","$2,935,727.00"
EWR - ATL,51054795114,EWR-DFW-ATL 1,737-900ER,https://www.airlines-manager.com/network/showline/39256202,https://www.airlines-manager.com/network/showflight/51054795114,https://www.airlines-manager.com/aircraft/show/90489724,10:00,14:59,320,"$315,832.00","$254,515.00"
EWR - ATL,51066574624,EWR-DFW-ATL 3,737-900ER,https://www.airlines-manager.com/network/showline/39256202,https://www.airlines-manager.com/network/showflight/51066574624,https://www.airlines-manager.com/aircraft/show/90489726,14:15,19:14,320,"$315,832.00","$254,515.00"
EWR - ATL,51077491359,EWR-DFW-ATL 2,737-900ER,https://www.airlines-manager.com/network/showline/39256202,https://www.airlines-manager.com/network/showflight/51077491359,https://www.airlines-manager.com/aircraft/show/90489725,17:30,22:29,320,"$315,832.00","$254,515.00"
EWR - ATL,51077491360,EWR-DFW-ATL 6 B,A319-100,https://www.airlines-manager.com/network/showline/39256202,https://www.airlines-manager.com/network/showflight/51077491360,https://www.airlines-manager.com/aircraft/show/105222360,18:30,23:29,198,"$240,625.00","$198,555.00"
EWR - ATL,51077491361,EWR-DFW-ATL 5,737-900ER,https://www.airlines-manager.com/network/showline/39256202,https://www.airlines-manager.com/network/showflight/51077491361,https://www.airlines-manager.com/aircraft/show/86238752,19:45,0:44,320,"$315,832.00","$254,515.00"
EWR - ATL,51082169945,EWR-DFW-ATL 4,737-900ER,https://www.airlines-manager.com/network/showline/39256202,https://www.airlines-manager.com/network/showflight/51082169945,https://www.airlines-manager.com/aircraft/show/86238753,22:15,3:14,320,"$315,832.00","$254,515.00"
EWR - AUS,51043595587,EWR-ABQ-AUS 3,A321-200,https://www.airlines-manager.com/network/showline/43845077,https://www.airlines-manager.com/network/showflight/51043595587,https://www.airlines-manager.com/aircraft/show/90717077,2:00,9:59,310,"$498,452.00","$457,208.00"
EWR - AUS,51043595588,EWR-ABQ-AUS 4,A321-200,https://www.airlines-manager.com/network/showline/43845077,https://www.airlines-manager.com/network/showflight/51043595588,https://www.airlines-manager.com/aircraft/show/90717076,3:00,10:59,310,"$498,452.00","$457,208.00"
EWR - AUS,51054795082,EWR-ABQ-AUS 2,A321-200,https://www.airlines-manager.com/network/showline/43845077,https://www.airlines-manager.com/network/showflight/51054795082,https://www.airlines-manager.com/aircraft/show/90717078,10:00,17:59,310,"$498,452.00","$457,208.00"
EWR - AUS,51060919003,EWR-ABQ-AUS 5,A321-200,https://www.airlines-manager.com/network/showline/43845077,https://www.airlines-manager.com/network/showflight/51060919003,https://www.airlines-manager.com/aircraft/show/95950199,12:00,19:59,310,"$498,452.00","$457,208.00"
EWR - AUS,51077491523,EWR-ABQ-AUS 1,A321-200,https://www.airlines-manager.com/network/showline/43845077,https://www.airlines-manager.com/network/showflight/51077491523,https://www.airlines-manager.com/aircraft/show/90717079,19:15,3:14,310,"$498,452.00","$457,208.00"
EWR - BCN,51071689575,EWR 84A-4 B2,777-300,https://www.airlines-manager.com/network/showline/39983692,https://www.airlines-manager.com/network/showflight/51071689575,https://www.airlines-manager.com/aircraft/show/90656551,15:45,7:44,852,"$2,610,020.00","$2,367,723.00"
EWR - BCN,51077491581,EWR 84A-1 B2,777-300,https://www.airlines-manager.com/network/showline/39983692,https://www.airlines-manager.com/network/showflight/51077491581,https://www.airlines-manager.com/aircraft/show/90656554,20:00,11:59,852,"$2,610,020.00","$2,367,723.00"
EWR - BDL,51043595444,EWR-COS-ICT 4,A321-200,https://www.airlines-manager.com/network/showline/47218149,https://www.airlines-manager.com/network/showflight/51043595444,https://www.airlines-manager.com/aircraft/show/108834811,1:00,3:29,310,"$89,172.00","$70,844.00"
EWR - BDL,51054795054,EWR-COS-ICT 5,ERJ-175,https://www.airlines-manager.com/network/showline/47218149,https://www.airlines-manager.com/network/showflight/51054795054,https://www.airlines-manager.com/aircraft/show/108466265,9:30,11:59,112,"$38,296.00","$27,098.00"
EWR - BDL,51066574492,EWR-COS-ICT 3,A321-200,https://www.airlines-manager.com/network/showline/47218149,https://www.airlines-manager.com/network/showflight/51066574492,https://www.airlines-manager.com/aircraft/show/108834810,14:00,16:29,310,"$89,172.00","$70,844.00"
EWR - BDL,51071689631,EWR-COS-ICT 2,A321-200,https://www.airlines-manager.com/network/showline/47218149,https://www.airlines-manager.com/network/showflight/51071689631,https://www.airlines-manager.com/aircraft/show/108834809,16:00,18:29,310,"$89,172.00","$70,844.00"
EWR - BDL,51086541020,EWR-COS-ICT 1,A321-200,https://www.airlines-manager.com/network/showline/47218149,https://www.airlines-manager.com/network/showflight/51086541020,https://www.airlines-manager.com/aircraft/show/108834808,23:00,1:29,310,"$89,172.00","$70,844.00"
EWR - BNA,51043595686,EWR-BNA-JAX 3,A321-200,https://www.airlines-manager.com/network/showline/45849233,https://www.airlines-manager.com/network/showflight/51043595686,https://www.airlines-manager.com/aircraft/show/104610408,3:15,8:14,310,"$321,328.00","$291,988.00"
EWR - BNA,51054795004,EWR-BNA-JAX 2,A321-200,https://www.airlines-manager.com/network/showline/45849233,https://www.airlines-manager.com/network/showflight/51054795004,https://www.airlines-manager.com/aircraft/show/104610409,8:30,13:29,310,"$321,328.00","$291,988.00"
EWR - BNA,51066574326,EWR-BNA-JAX 1,A321-200,https://www.airlines-manager.com/network/showline/45849233,https://www.airlines-manager.com/network/showflight/51066574326,https://www.airlines-manager.com/aircraft/show/104610410,13:00,17:59,310,"$321,328.00","$291,988.00"
EWR - BNA,51071689691,EWR-BNA-JAX 5,ERJ-175,https://www.airlines-manager.com/network/showline/45849233,https://www.airlines-manager.com/network/showflight/51071689691,https://www.airlines-manager.com/aircraft/show/96421247,17:00,21:59,112,"$152,562.00","$133,656.00"
EWR - BNA,51082169885,EWR-BNA-JAX 4,A321-200,https://www.airlines-manager.com/network/showline/45849233,https://www.airlines-manager.com/network/showflight/51082169885,https://www.airlines-manager.com/aircraft/show/104610407,21:15,2:14,310,"$321,328.00","$291,988.00"
EWR - BOI,51043595540,EWR-BOI-PBI 5 B,A319-100,https://www.airlines-manager.com/network/showline/45805680,https://www.airlines-manager.com/network/showflight/51043595540,https://www.airlines-manager.com/aircraft/show/110582846,1:30,11:59,198,"$489,770.00","$451,528.00"
EWR - BOI,51054795092,EWR-BOI-PBI 1,A321-200,https://www.airlines-manager.com/network/showline/45805680,https://www.airlines-manager.com/network/showflight/51054795092,https://www.airlines-manager.com/aircraft/show/104418460,10:00,20:29,310,"$652,062.00","$604,375.00"
EWR - BOI,51071689522,EWR-BOI-PBI 4,A321-200,https://www.airlines-manager.com/network/showline/45805680,https://www.airlines-manager.com/network/showflight/51071689522,https://www.airlines-manager.com/aircraft/show/104418463,15:00,1:29,310,"$652,062.00","$604,375.00"
EWR - BOI,51071689523,EWR-BOI-PBI 3,A321-200,https://www.airlines-manager.com/network/showline/45805680,https://www.airlines-manager.com/network/showflight/51071689523,https://www.airlines-manager.com/aircraft/show/104418462,16:30,2:59,310,"$652,062.00","$604,375.00"
EWR - BOI,51086541050,EWR-BOI-PBI 2,A321-200,https://www.airlines-manager.com/network/showline/45805680,https://www.airlines-manager.com/network/showflight/51086541050,https://www.airlines-manager.com/aircraft/show/104418461,23:30,9:59,310,"$652,062.00","$604,375.00"
EWR - BOS,51043595678,EWR-BWI-BOS 3 E,A319-100,https://www.airlines-manager.com/network/showline/42865564,https://www.airlines-manager.com/network/showflight/51043595678,https://www.airlines-manager.com/aircraft/show/104034464,3:00,5:59,216,"$93,673.00","$73,887.00"
EWR - BOS,51054795075,EWR-BWI-BOS 2 E,A319-100,https://www.airlines-manager.com/network/showline/42865564,https://www.airlines-manager.com/network/showflight/51054795075,https://www.airlines-manager.com/aircraft/show/104034463,10:00,12:59,216,"$93,673.00","$73,887.00"
EWR - BOS,51066574281,EWR-BWI-BOS 1 E,A319-100,https://www.airlines-manager.com/network/showline/42865564,https://www.airlines-manager.com/network/showflight/51066574281,https://www.airlines-manager.com/aircraft/show/104034462,12:45,15:44,216,"$93,673.00","$73,887.00"
EWR - BOS,51066574282,EWR-BWI-BOS 4 E,A319-100,https://www.airlines-manager.com/network/showline/42865564,https://www.airlines-manager.com/network/showflight/51066574282,https://www.airlines-manager.com/aircraft/show/99316501,13:45,16:44,216,"$93,673.00","$73,887.00"
EWR - BOS,51071689677,EWR-BWI-BOS 3 E,A319-100,https://www.airlines-manager.com/network/showline/42865564,https://www.airlines-manager.com/network/showflight/51071689677,https://www.airlines-manager.com/aircraft/show/104034464,17:00,19:59,216,"$93,673.00","$73,887.00"
EWR - BOS,51077491563,EWR-BWI-BOS 2 E,A319-100,https://www.airlines-manager.com/network/showline/42865564,https://www.airlines-manager.com/network/showflight/51077491563,https://www.airlines-manager.com/aircraft/show/104034463,20:00,22:59,216,"$93,673.00","$73,887.00"
EWR - BOS,51086540982,EWR-BWI-BOS 1 E,A319-100,https://www.airlines-manager.com/network/showline/42865564,https://www.airlines-manager.com/network/showflight/51086540982,https://www.airlines-manager.com/aircraft/show/104034462,22:45,1:44,216,"$93,673.00","$73,887.00"
EWR - BOS,51086540983,EWR-BWI-BOS 4 E,A319-100,https://www.airlines-manager.com/network/showline/42865564,https://www.airlines-manager.com/network/showflight/51086540983,https://www.airlines-manager.com/aircraft/show/99316501,23:45,2:44,216,"$93,673.00","$73,887.00"
EWR - BUF,51043595806,EWR-IND-RDU 5,ERJ-175,https://www.airlines-manager.com/network/showline/46242100,https://www.airlines-manager.com/network/showflight/51043595806,https://www.airlines-manager.com/aircraft/show/106104450,5:30,8:44,112,"$70,402.00","$57,598.00"
EWR - BUF,51060918909,EWR-IND-RDU 4,737-900ER,https://www.airlines-manager.com/network/showline/46242100,https://www.airlines-manager.com/network/showflight/51060918909,https://www.airlines-manager.com/aircraft/show/105731236,11:00,14:14,320,"$153,680.00","$129,710.00"
EWR - BUF,51066574635,EWR-IND-RDU 3,737-900ER,https://www.airlines-manager.com/network/showline/46242100,https://www.airlines-manager.com/network/showflight/51066574635,https://www.airlines-manager.com/aircraft/show/88494376,14:45,17:59,320,"$153,680.00","$129,710.00"
EWR - BUF,51077491466,EWR-IND-RDU 2,737-900ER,https://www.airlines-manager.com/network/showline/46242100,https://www.airlines-manager.com/network/showflight/51077491466,https://www.airlines-manager.com/aircraft/show/88494377,18:30,21:44,320,"$153,680.00","$129,710.00"
EWR - BUF,51086541017,EWR-IND-RDU 1,737-900ER,https://www.airlines-manager.com/network/showline/46242100,https://www.airlines-manager.com/network/showflight/51086541017,https://www.airlines-manager.com/aircraft/show/88494375,23:00,2:14,320,"$153,680.00","$129,710.00"
EWR - BWI,51043595332,EWR-BWI-BOS 3 E,A319-100,https://www.airlines-manager.com/network/showline/40109052,https://www.airlines-manager.com/network/showflight/51043595332,https://www.airlines-manager.com/aircraft/show/104034464,0:15,2:59,216,"$74,422.00","$55,852.00"
EWR - BWI,51043595333,EWR-BWI-BOS 2 E,A319-100,https://www.airlines-manager.com/network/showline/40109052,https://www.airlines-manager.com/network/showflight/51043595333,https://www.airlines-manager.com/aircraft/show/104034463,3:15,5:59,216,"$74,422.00","$55,852.00"
EWR - BWI,51054795076,EWR-BWI-BOS 1 E,A319-100,https://www.airlines-manager.com/network/showline/40109052,https://www.airlines-manager.com/network/showflight/51054795076,https://www.airlines-manager.com/aircraft/show/104034462,10:00,12:44,216,"$74,422.00","$55,852.00"
EWR - BWI,51060918930,EWR-BWI-BOS 4 E,A319-100,https://www.airlines-manager.com/network/showline/40109052,https://www.airlines-manager.com/network/showflight/51060918930,https://www.airlines-manager.com/aircraft/show/99316501,11:00,13:44,216,"$74,422.00","$55,852.00"
EWR - BWI,51066574627,EWR-BWI-BOS 3 E,A319-100,https://www.airlines-manager.com/network/showline/40109052,https://www.airlines-manager.com/network/showflight/51066574627,https://www.airlines-manager.com/aircraft/show/104034464,14:15,16:59,216,"$74,422.00","$55,852.00"
EWR - BWI,51077491291,EWR-BWI-BOS 2 E,A319-100,https://www.airlines-manager.com/network/showline/40109052,https://www.airlines-manager.com/network/showflight/51077491291,https://www.airlines-manager.com/aircraft/show/104034463,17:15,19:59,216,"$74,422.00","$55,852.00"
EWR - BWI,51077491293,EWR-BWI-BOS 1 E,A319-100,https://www.airlines-manager.com/network/showline/40109052,https://www.airlines-manager.com/network/showflight/51077491293,https://www.airlines-manager.com/aircraft/show/104034462,20:00,22:44,216,"$74,422.00","$55,852.00"
EWR - BWI,51082169841,EWR-BWI-BOS 4 E,A319-100,https://www.airlines-manager.com/network/showline/40109052,https://www.airlines-manager.com/network/showflight/51082169841,https://www.airlines-manager.com/aircraft/show/99316501,21:00,23:44,216,"$74,422.00","$55,852.00"
EWR - CDG,51043595666,EWR 56A-4 B1,777-300,https://www.airlines-manager.com/network/showline/40043578,https://www.airlines-manager.com/network/showflight/51043595666,https://www.airlines-manager.com/aircraft/show/106813010,3:00,18:14,748,"$2,326,318.00","$2,065,887.00"
EWR - CDG,51054795026,EWR 56A-5 B1,777-300,https://www.airlines-manager.com/network/showline/40043578,https://www.airlines-manager.com/network/showflight/51054795026,https://www.airlines-manager.com/aircraft/show/106813011,8:45,23:59,748,"$2,326,318.00","$2,065,887.00"
EWR - CDG,51077491515,EWR 56A-1 B1,777-300,https://www.airlines-manager.com/network/showline/40043578,https://www.airlines-manager.com/network/showflight/51077491515,https://www.airlines-manager.com/aircraft/show/106813007,19:00,10:14,561,"$1,744,888.00","$1,567,754.00"
EWR - CHS,51054795019,EWR-TUL-DSM 1,A321-200,https://www.airlines-manager.com/network/showline/47540556,https://www.airlines-manager.com/network/showflight/51054795019,https://www.airlines-manager.com/aircraft/show/110044463,8:30,12:59,310,"$288,364.00","$263,420.00"
EWR - CHS,51060918998,EWR-TUL-DSM 5,ERJ-175,https://www.airlines-manager.com/network/showline/47540556,https://www.airlines-manager.com/network/showflight/51060918998,https://www.airlines-manager.com/aircraft/show/110113039,12:00,16:29,112,"$137,652.00","$121,589.00"
EWR - CHS,51066574625,EWR-TUL-DSM 4,A321-200,https://www.airlines-manager.com/network/showline/47540556,https://www.airlines-manager.com/network/showflight/51066574625,https://www.airlines-manager.com/aircraft/show/110044466,14:15,18:44,310,"$288,364.00","$263,420.00"
EWR - CHS,51082169881,EWR-TUL-DSM 3,A321-200,https://www.airlines-manager.com/network/showline/47540556,https://www.airlines-manager.com/network/showflight/51082169881,https://www.airlines-manager.com/aircraft/show/110044465,21:15,1:44,310,"$288,364.00","$263,420.00"
EWR - CHS,51086541013,EWR-TUL-DSM 2,A321-200,https://www.airlines-manager.com/network/showline/47540556,https://www.airlines-manager.com/network/showflight/51086541013,https://www.airlines-manager.com/aircraft/show/110044464,23:00,3:29,281,"$272,608.00","$248,163.00"
EWR - CLE,51043595553,EWR-IND-RDU 5,ERJ-175,https://www.airlines-manager.com/network/showline/46250227,https://www.airlines-manager.com/network/showflight/51043595553,https://www.airlines-manager.com/aircraft/show/106104450,1:45,5:29,112,"$91,694.00","$77,115.00"
EWR - CLE,51043595554,EWR-IND-RDU 4,737-900ER,https://www.airlines-manager.com/network/showline/46250227,https://www.airlines-manager.com/network/showflight/51043595554,https://www.airlines-manager.com/aircraft/show/105731236,5:00,8:44,320,"$197,548.00","$170,734.00"
EWR - CLE,51060918911,EWR-IND-RDU 3,737-900ER,https://www.airlines-manager.com/network/showline/46250227,https://www.airlines-manager.com/network/showflight/51060918911,https://www.airlines-manager.com/aircraft/show/88494376,11:00,14:44,320,"$197,548.00","$170,734.00"
EWR - CLE,51066574633,EWR-IND-RDU 2,737-900ER,https://www.airlines-manager.com/network/showline/46250227,https://www.airlines-manager.com/network/showflight/51066574633,https://www.airlines-manager.com/aircraft/show/88494377,14:45,18:29,320,"$197,548.00","$170,734.00"
EWR - CLE,51077491538,EWR-IND-RDU 1,737-900ER,https://www.airlines-manager.com/network/showline/46250227,https://www.airlines-manager.com/network/showflight/51077491538,https://www.airlines-manager.com/aircraft/show/88494375,19:15,22:59,320,"$197,548.00","$170,734.00"
EWR - CLT,51043595565,EWR-BWI-BOS 1 E,A319-100,https://www.airlines-manager.com/network/showline/39273490,https://www.airlines-manager.com/network/showflight/51043595565,https://www.airlines-manager.com/aircraft/show/104034462,1:45,5:59,216,"$189,113.00","$162,602.00"
EWR - CLT,51043595566,EWR-BWI-BOS 4 E,A319-100,https://www.airlines-manager.com/network/showline/39273490,https://www.airlines-manager.com/network/showflight/51043595566,https://www.airlines-manager.com/aircraft/show/99316501,2:45,6:59,216,"$189,113.00","$162,602.00"
EWR - CLT,51054795072,EWR-BWI-BOS 3 E,A319-100,https://www.airlines-manager.com/network/showline/39273490,https://www.airlines-manager.com/network/showflight/51054795072,https://www.airlines-manager.com/aircraft/show/104034464,10:00,14:14,216,"$189,113.00","$162,602.00"
EWR - CLT,51066574291,EWR-BWI-BOS 2 E,A319-100,https://www.airlines-manager.com/network/showline/39273490,https://www.airlines-manager.com/network/showflight/51066574291,https://www.airlines-manager.com/aircraft/show/104034463,13:00,17:14,216,"$189,113.00","$162,602.00"
EWR - CLT,51071689586,EWR-BWI-BOS 1 E,A319-100,https://www.airlines-manager.com/network/showline/39273490,https://www.airlines-manager.com/network/showflight/51071689586,https://www.airlines-manager.com/aircraft/show/104034462,15:45,19:59,216,"$189,113.00","$162,602.00"
EWR - CLT,51071689587,EWR-BWI-BOS 4 E,A319-100,https://www.airlines-manager.com/network/showline/39273490,https://www.airlines-manager.com/network/showflight/51071689587,https://www.airlines-manager.com/aircraft/show/99316501,16:45,20:59,216,"$189,113.00","$162,602.00"
EWR - CLT,51077491578,EWR-BWI-BOS 3 E,A319-100,https://www.airlines-manager.com/network/showline/39273490,https://www.airlines-manager.com/network/showflight/51077491578,https://www.airlines-manager.com/aircraft/show/104034464,20:00,0:14,216,"$189,113.00","$162,602.00"
EWR - CLT,51086541009,EWR-BWI-BOS 2 E,A319-100,https://www.airlines-manager.com/network/showline/39273490,https://www.airlines-manager.com/network/showflight/51086541009,https://www.airlines-manager.com/aircraft/show/104034463,23:00,3:14,216,"$189,113.00","$162,602.00"
EWR - CMH,51043595779,EWR-BNA-JAX 2,A321-200,https://www.airlines-manager.com/network/showline/45849199,https://www.airlines-manager.com/network/showflight/51043595779,https://www.airlines-manager.com/aircraft/show/104610409,4:30,8:29,310,"$222,475.00","$198,321.00"
EWR - CMH,51054795013,EWR-BNA-JAX 1,A321-200,https://www.airlines-manager.com/network/showline/45849199,https://www.airlines-manager.com/network/showflight/51054795013,https://www.airlines-manager.com/aircraft/show/104610410,8:30,12:29,310,"$222,475.00","$198,321.00"
EWR - CMH,51066574332,EWR-BNA-JAX 5,ERJ-175,https://www.airlines-manager.com/network/showline/45849199,https://www.airlines-manager.com/network/showflight/51066574332,https://www.airlines-manager.com/aircraft/show/96421247,13:00,16:59,112,"$103,627.00","$88,330.00"
EWR - CMH,51077491284,EWR-BNA-JAX 4,A321-200,https://www.airlines-manager.com/network/showline/45849199,https://www.airlines-manager.com/network/showflight/51077491284,https://www.airlines-manager.com/aircraft/show/104610407,17:15,21:14,310,"$222,475.00","$198,321.00"
EWR - CMH,51086541036,EWR-BNA-JAX 3,A321-200,https://www.airlines-manager.com/network/showline/45849199,https://www.airlines-manager.com/network/showflight/51086541036,https://www.airlines-manager.com/aircraft/show/104610408,23:15,3:14,310,"$222,475.00","$198,321.00"
EWR - COS,51043595524,EWR-COS-ICT 1,A321-200,https://www.airlines-manager.com/network/showline/47218134,https://www.airlines-manager.com/network/showflight/51043595524,https://www.airlines-manager.com/aircraft/show/108834808,1:30,9:59,310,"$532,516.00","$490,864.00"
EWR - COS,51043595525,EWR-COS-ICT 4,A321-200,https://www.airlines-manager.com/network/showline/47218134,https://www.airlines-manager.com/network/showflight/51043595525,https://www.airlines-manager.com/aircraft/show/108834811,3:30,11:59,310,"$532,516.00","$490,864.00"
EWR - COS,51066574329,EWR-COS-ICT 5,ERJ-175,https://www.airlines-manager.com/network/showline/47218134,https://www.airlines-manager.com/network/showflight/51066574329,https://www.airlines-manager.com/aircraft/show/108466265,13:00,21:29,112,"$250,187.00","$222,369.00"
EWR - COS,51071689649,EWR-COS-ICT 3,A321-200,https://www.airlines-manager.com/network/showline/47218134,https://www.airlines-manager.com/network/showflight/51071689649,https://www.airlines-manager.com/aircraft/show/108834810,16:30,0:59,310,"$532,516.00","$490,864.00"
EWR - COS,51077491478,EWR-COS-ICT 2,A321-200,https://www.airlines-manager.com/network/showline/47218134,https://www.airlines-manager.com/network/showflight/51077491478,https://www.airlines-manager.com/aircraft/show/108834809,18:30,2:59,310,"$532,516.00","$490,864.00"
EWR - CUN,51043595407,EWR-CUN-SJU 3,737-900ER,https://www.airlines-manager.com/network/showline/46524825,https://www.airlines-manager.com/network/showflight/51043595407,https://www.airlines-manager.com/aircraft/show/106581306,0:45,8:44,320,"$519,725.00","$471,949.00"
EWR - CUN,51043595408,EWR-CUN-SJU 2,737-900ER,https://www.airlines-manager.com/network/showline/46524825,https://www.airlines-manager.com/network/showflight/51043595408,https://www.airlines-manager.com/aircraft/show/106581305,2:15,10:14,320,"$519,725.00","$471,949.00"
EWR - CUN,51066574444,EWR-CUN-SJU 1,737-900ER,https://www.airlines-manager.com/network/showline/46524825,https://www.airlines-manager.com/network/showflight/51066574444,https://www.airlines-manager.com/aircraft/show/106581304,13:00,20:59,320,"$519,725.00","$471,949.00"
EWR - CUN,51066574445,EWR-CUN-SJU 4,737-900ER,https://www.airlines-manager.com/network/showline/46524825,https://www.airlines-manager.com/network/showflight/51066574445,https://www.airlines-manager.com/aircraft/show/106581307,14:30,22:29,320,"$519,725.00","$471,949.00"
EWR - CUN,51082169948,EWR-CUN-SJU 5,737-900ER,https://www.airlines-manager.com/network/showline/46524825,https://www.airlines-manager.com/network/showflight/51082169948,https://www.airlines-manager.com/aircraft/show/86238754,22:15,6:14,320,"$519,725.00","$471,949.00"
EWR - CVG,51043595344,EWR-BNA-JAX 2,A321-200,https://www.airlines-manager.com/network/showline/45849223,https://www.airlines-manager.com/network/showflight/51043595344,https://www.airlines-manager.com/aircraft/show/104610409,0:15,4:29,310,"$269,325.00","$241,600.00"
EWR - CVG,51043595345,EWR-BNA-JAX 1,A321-200,https://www.airlines-manager.com/network/showline/45849223,https://www.airlines-manager.com/network/showflight/51043595345,https://www.airlines-manager.com/aircraft/show/104610410,4:15,8:29,310,"$269,325.00","$241,600.00"
EWR - CVG,51054794990,EWR-BNA-JAX 5,ERJ-175,https://www.airlines-manager.com/network/showline/45849223,https://www.airlines-manager.com/network/showflight/51054794990,https://www.airlines-manager.com/aircraft/show/96421247,8:15,12:29,112,"$127,234.00","$109,608.00"
EWR - CVG,51054794991,EWR CARGO 2,737-700,https://www.airlines-manager.com/network/showline/45849223,https://www.airlines-manager.com/network/showflight/51054794991,https://www.airlines-manager.com/aircraft/show/107576645,9:00,13:14,0,"$68,907.00","$49,985.00"
EWR - CVG,51066574333,EWR-BNA-JAX 4,A321-200,https://www.airlines-manager.com/network/showline/45849223,https://www.airlines-manager.com/network/showflight/51066574333,https://www.airlines-manager.com/aircraft/show/104610407,13:00,17:14,310,"$269,325.00","$241,600.00"
EWR - CVG,51077491499,EWR-BNA-JAX 3,A321-200,https://www.airlines-manager.com/network/showline/45849223,https://www.airlines-manager.com/network/showflight/51077491499,https://www.airlines-manager.com/aircraft/show/104610408,19:00,23:14,310,"$269,325.00","$241,600.00"
EWR - DEN,51043595570,EWR-DEN-SLC 1,A321-200,https://www.airlines-manager.com/network/showline/39261033,https://www.airlines-manager.com/network/showflight/51043595570,https://www.airlines-manager.com/aircraft/show/86270785,1:45,9:59,310,"$528,111.00","$464,005.00"
EWR - DEN,51043595571,EWR-DEN-SLC 4,A321-200,https://www.airlines-manager.com/network/showline/39261033,https://www.airlines-manager.com/network/showflight/51043595571,https://www.airlines-manager.com/aircraft/show/90452835,2:45,10:59,310,"$528,111.00","$464,005.00"
EWR - DEN,51054795112,EWR-DEN-SLC 2,A321-200,https://www.airlines-manager.com/network/showline/39261033,https://www.airlines-manager.com/network/showflight/51054795112,https://www.airlines-manager.com/aircraft/show/87153196,10:00,18:14,310,"$528,111.00","$464,005.00"
EWR - DEN,51060918944,EWR-DEN-SLC 3,A321-200,https://www.airlines-manager.com/network/showline/39261033,https://www.airlines-manager.com/network/showflight/51060918944,https://www.airlines-manager.com/aircraft/show/86270783,11:00,19:14,310,"$528,111.00","$464,005.00"
EWR - DEN,51071689599,EWR-DEN-SLC 5,A321-200,https://www.airlines-manager.com/network/showline/39261033,https://www.airlines-manager.com/network/showflight/51071689599,https://www.airlines-manager.com/aircraft/show/90452833,16:00,0:14,310,"$528,111.00","$464,005.00"
EWR - DEN,51071689600,EWR-DEN-SLC 6 B,A319-100,https://www.airlines-manager.com/network/showline/39261033,https://www.airlines-manager.com/network/showflight/51071689600,https://www.airlines-manager.com/aircraft/show/105223076,17:00,1:14,198,"$397,864.00","$346,510.00"
EWR - DFW,51043595619,EWR-DFW-ATL 1,737-900ER,https://www.airlines-manager.com/network/showline/39279932,https://www.airlines-manager.com/network/showflight/51043595619,https://www.airlines-manager.com/aircraft/show/90489724,2:30,9:59,320,"$472,448.00","$407,333.00"
EWR - DFW,51043595620,EWR-DFW-ATL 4,737-900ER,https://www.airlines-manager.com/network/showline/39279932,https://www.airlines-manager.com/network/showflight/51043595620,https://www.airlines-manager.com/aircraft/show/86238753,3:30,10:59,320,"$472,448.00","$407,333.00"
EWR - DFW,51054795064,EWR-DFW-ATL 2,737-900ER,https://www.airlines-manager.com/network/showline/39279932,https://www.airlines-manager.com/network/showflight/51054795064,https://www.airlines-manager.com/aircraft/show/90489725,10:00,17:29,320,"$472,448.00","$407,333.00"
EWR - DFW,51060918916,EWR-DFW-ATL 6 B,A319-100,https://www.airlines-manager.com/network/showline/39279932,https://www.airlines-manager.com/network/showflight/51060918916,https://www.airlines-manager.com/aircraft/show/105222360,11:00,18:29,198,"$357,260.00","$311,658.00"
EWR - DFW,51060918917,EWR-DFW-ATL 5,737-900ER,https://www.airlines-manager.com/network/showline/39279932,https://www.airlines-manager.com/network/showflight/51060918917,https://www.airlines-manager.com/aircraft/show/86238752,12:15,19:44,320,"$472,448.00","$407,333.00"
EWR - DFW,51077491531,EWR-DFW-ATL 3,737-900ER,https://www.airlines-manager.com/network/showline/39279932,https://www.airlines-manager.com/network/showflight/51077491531,https://www.airlines-manager.com/aircraft/show/90489726,19:15,2:44,320,"$472,448.00","$407,333.00"
EWR - DSM,51043595594,EWR-TUL-DSM 5,ERJ-175,https://www.airlines-manager.com/network/showline/47540558,https://www.airlines-manager.com/network/showflight/51043595594,https://www.airlines-manager.com/aircraft/show/110113039,2:00,7:59,112,"$177,241.00","$157,201.00"
EWR - DSM,51043595595,EWR-TUL-DSM 4,A321-200,https://www.airlines-manager.com/network/showline/47540558,https://www.airlines-manager.com/network/showflight/51043595595,https://www.airlines-manager.com/aircraft/show/110044466,4:15,10:14,310,"$374,811.00","$344,361.00"
EWR - DSM,51060918964,EWR-TUL-DSM 3,A321-200,https://www.airlines-manager.com/network/showline/47540558,https://www.airlines-manager.com/network/showflight/51060918964,https://www.airlines-manager.com/aircraft/show/110044465,12:00,17:59,310,"$374,811.00","$344,361.00"
EWR - DSM,51066574473,EWR-TUL-DSM 2,A321-200,https://www.airlines-manager.com/network/showline/47540558,https://www.airlines-manager.com/network/showflight/51066574473,https://www.airlines-manager.com/aircraft/show/110044464,13:45,19:44,310,"$374,811.00","$344,361.00"
EWR - DSM,51086540953,EWR-TUL-DSM 1,A321-200,https://www.airlines-manager.com/network/showline/47540558,https://www.airlines-manager.com/network/showflight/51086540953,https://www.airlines-manager.com/aircraft/show/110044463,22:30,4:29,276,"$350,412.00","$320,907.00"
EWR - DTW,51043595710,EWR-DTW-YYZ 5,737-900ER,https://www.airlines-manager.com/network/showline/42493159,https://www.airlines-manager.com/network/showflight/51043595710,https://www.airlines-manager.com/aircraft/show/92003921,3:30,7:29,320,"$225,671.00","$188,424.00"
EWR - DTW,51054795062,EWR-DTW-YYZ 1,737-900ER,https://www.airlines-manager.com/network/showline/42493159,https://www.airlines-manager.com/network/showflight/51054795062,https://www.airlines-manager.com/aircraft/show/92003925,10:00,13:59,320,"$225,671.00","$188,424.00"
EWR - DTW,51066574470,EWR-DTW-YYZ 2,737-900ER,https://www.airlines-manager.com/network/showline/42493159,https://www.airlines-manager.com/network/showflight/51066574470,https://www.airlines-manager.com/aircraft/show/92003924,13:30,17:29,320,"$225,671.00","$188,424.00"
EWR - DTW,51082169902,EWR-DTW-YYZ 3,737-900ER,https://www.airlines-manager.com/network/showline/42493159,https://www.airlines-manager.com/network/showflight/51082169902,https://www.airlines-manager.com/aircraft/show/92003923,21:45,1:44,320,"$225,671.00","$188,424.00"
EWR - DTW,51082169903,EWR-DTW-YYZ 4,737-900ER,https://www.airlines-manager.com/network/showline/42493159,https://www.airlines-manager.com/network/showflight/51082169903,https://www.airlines-manager.com/aircraft/show/92003922,22:15,2:14,320,"$225,671.00","$188,424.00"
EWR - DTW,51086540980,EWR CARGO 1,A321neo-LR,https://www.airlines-manager.com/network/showline/42493159,https://www.airlines-manager.com/network/showflight/51086540980,https://www.airlines-manager.com/aircraft/show/103406580,22:45,2:44,0,"$77,012.00","$45,858.00"
EWR - DUB,51043595704,EWR 56C-1 F,787-10,https://www.airlines-manager.com/network/showline/46569727,https://www.airlines-manager.com/network/showflight/51043595704,https://www.airlines-manager.com/aircraft/show/106721556,3:30,16:59,598,"$1,651,220.00","$1,539,956.00"
EWR - DUB,51043595705,EWR 56C-3 F,787-10,https://www.airlines-manager.com/network/showline/46569727,https://www.airlines-manager.com/network/showflight/51043595705,https://www.airlines-manager.com/aircraft/show/106721558,5:15,18:44,598,"$1,651,220.00","$1,539,956.00"
EWR - DUB,51060918854,EWR 56C-5 F,787-10,https://www.airlines-manager.com/network/showline/46569727,https://www.airlines-manager.com/network/showflight/51060918854,https://www.airlines-manager.com/aircraft/show/106721560,10:30,23:59,598,"$1,651,220.00","$1,539,956.00"
EWR - EDI,51043595765,EWR 56C-2 F,787-10,https://www.airlines-manager.com/network/showline/46569734,https://www.airlines-manager.com/network/showflight/51043595765,https://www.airlines-manager.com/aircraft/show/106721557,4:15,17:59,598,"$1,636,319.00","$1,529,028.00"
EWR - EDI,51043595766,EWR 56C-4 F,787-10,https://www.airlines-manager.com/network/showline/46569734,https://www.airlines-manager.com/network/showflight/51043595766,https://www.airlines-manager.com/aircraft/show/106721559,6:00,19:44,598,"$1,636,319.00","$1,529,028.00"
EWR - EDI,51077491560,EWR 56C-4 F,787-10,https://www.airlines-manager.com/network/showline/46569734,https://www.airlines-manager.com/network/showflight/51077491560,https://www.airlines-manager.com/aircraft/show/106721559,19:45,9:29,598,"$1,636,319.00","$1,529,028.00"
EWR - ELP,51043595373,EWR-ELP-SAT 2,737-900ER,https://www.airlines-manager.com/network/showline/45334027,https://www.airlines-manager.com/network/showflight/51043595373,https://www.airlines-manager.com/aircraft/show/103365577,0:30,9:59,320,"$589,315.00","$539,533.00"
EWR - ELP,51043595374,EWR-ELP-SAT 5 B,A319-100,https://www.airlines-manager.com/network/showline/45334027,https://www.airlines-manager.com/network/showflight/51043595374,https://www.airlines-manager.com/aircraft/show/110582847,2:30,11:59,198,"$444,188.00","$407,985.00"
EWR - ELP,51054795116,EWR-ELP-SAT 1,737-900ER,https://www.airlines-manager.com/network/showline/45334027,https://www.airlines-manager.com/network/showflight/51054795116,https://www.airlines-manager.com/aircraft/show/103365578,10:00,19:29,320,"$589,315.00","$539,533.00"
EWR - ELP,51060918983,EWR-ELP-SAT 4,737-900ER,https://www.airlines-manager.com/network/showline/45334027,https://www.airlines-manager.com/network/showflight/51060918983,https://www.airlines-manager.com/aircraft/show/103365575,12:00,21:29,320,"$589,315.00","$539,533.00"
EWR - ELP,51071689635,EWR-ELP-SAT 3,737-900ER,https://www.airlines-manager.com/network/showline/45334027,https://www.airlines-manager.com/network/showflight/51071689635,https://www.airlines-manager.com/aircraft/show/103365576,16:15,1:44,320,"$589,315.00","$539,533.00"
EWR - FAR,51043595579,EWR-LIT-FAR 4,A321-200,https://www.airlines-manager.com/network/showline/48530160,https://www.airlines-manager.com/network/showflight/51043595579,https://www.airlines-manager.com/aircraft/show/86270784,1:45,8:29,310,"$423,689.00","$390,722.00"
EWR - FAR,51043595580,EWR-LIT-FAR 3,A321-200,https://www.airlines-manager.com/network/showline/48530160,https://www.airlines-manager.com/network/showflight/51043595580,https://www.airlines-manager.com/aircraft/show/86270786,5:00,11:44,310,"$423,689.00","$390,722.00"
EWR - FAR,51071689484,EWR-LIT-FAR 2,A321-200,https://www.airlines-manager.com/network/showline/48530160,https://www.airlines-manager.com/network/showflight/51071689484,https://www.airlines-manager.com/aircraft/show/86270787,15:00,21:44,310,"$423,689.00","$390,722.00"
EWR - FAR,51077491528,EWR-LIT-FAR 1,A321-200,https://www.airlines-manager.com/network/showline/48530160,https://www.airlines-manager.com/network/showflight/51077491528,https://www.airlines-manager.com/aircraft/show/90452834,19:15,1:59,310,"$423,689.00","$390,722.00"
EWR - FCO,51043595628,EWR 84A-1 B2,777-300,https://www.airlines-manager.com/network/showline/39865842,https://www.airlines-manager.com/network/showflight/51043595628,https://www.airlines-manager.com/aircraft/show/90656554,2:30,19:59,852,"$2,894,813.00","$2,620,899.00"
EWR - FCO,51060918990,EWR 84A-2 B2,777-300,https://www.airlines-manager.com/network/showline/39865842,https://www.airlines-manager.com/network/showflight/51060918990,https://www.airlines-manager.com/aircraft/show/94521252,12:00,5:29,852,"$2,894,813.00","$2,620,899.00"
EWR - FLL,51043595507,EWR CARGO 2,737-700,https://www.airlines-manager.com/network/showline/42503825,https://www.airlines-manager.com/network/showflight/51043595507,https://www.airlines-manager.com/aircraft/show/107576645,1:15,7:29,0,"$102,588.00","$77,040.00"
EWR - FLL,51043595508,EWR-DTW-YYZ 2,737-900ER,https://www.airlines-manager.com/network/showline/42503825,https://www.airlines-manager.com/network/showflight/51043595508,https://www.airlines-manager.com/aircraft/show/92003924,3:45,9:59,320,"$388,513.00","$348,500.00"
EWR - FLL,51043595509,EWR-DTW-YYZ 4,737-900ER,https://www.airlines-manager.com/network/showline/42503825,https://www.airlines-manager.com/network/showflight/51043595509,https://www.airlines-manager.com/aircraft/show/92003922,5:45,11:59,320,"$388,513.00","$348,500.00"
EWR - FLL,51060918937,EWR-DTW-YYZ 5,737-900ER,https://www.airlines-manager.com/network/showline/42503825,https://www.airlines-manager.com/network/showflight/51060918937,https://www.airlines-manager.com/aircraft/show/92003921,11:00,17:14,320,"$388,513.00","$348,500.00"
EWR - FLL,51060918938,EWR-DTW-YYZ 3,737-900ER,https://www.airlines-manager.com/network/showline/42503825,https://www.airlines-manager.com/network/showflight/51060918938,https://www.airlines-manager.com/aircraft/show/92003923,12:00,18:14,320,"$388,513.00","$348,500.00"
EWR - FLL,51077491364,EWR-DTW-YYZ 1,737-900ER,https://www.airlines-manager.com/network/showline/42503825,https://www.airlines-manager.com/network/showflight/51077491364,https://www.airlines-manager.com/aircraft/show/92003925,17:30,23:44,320,"$388,513.00","$348,500.00"
EWR - FRA,51043595650,EWR 56B-4 B1,777-300,https://www.airlines-manager.com/network/showline/39908990,https://www.airlines-manager.com/network/showflight/51043595650,https://www.airlines-manager.com/aircraft/show/94521247,2:45,18:44,748,"$2,436,227.00","$2,171,323.00"
EWR - FRA,51043595651,EWR 56B-2 B1,777-300,https://www.airlines-manager.com/network/showline/39908990,https://www.airlines-manager.com/network/showflight/51043595651,https://www.airlines-manager.com/aircraft/show/90656556,4:30,20:29,748,"$2,436,227.00","$2,171,323.00"
EWR - FRA,51043595652,EWR 56B-7 B1,777-300,https://www.airlines-manager.com/network/showline/39908990,https://www.airlines-manager.com/network/showflight/51043595652,https://www.airlines-manager.com/aircraft/show/89124072,6:15,22:14,748,"$2,198,646.00","$1,997,654.00"
EWR - FSD,51043595763,EWR-OKC-FSD 3,A321-200,https://www.airlines-manager.com/network/showline/46719736,https://www.airlines-manager.com/network/showflight/51043595763,https://www.airlines-manager.com/aircraft/show/107161240,4:15,10:59,310,"$410,970.00","$378,489.00"
EWR - FSD,51054795042,EWR-OKC-FSD 5,ERJ-175,https://www.airlines-manager.com/network/showline/46719736,https://www.airlines-manager.com/network/showflight/51054795042,https://www.airlines-manager.com/aircraft/show/86782214,9:00,15:44,112,"$193,671.00","$172,141.00"
EWR - FSD,51060918886,EWR-OKC-FSD 2,A321-200,https://www.airlines-manager.com/network/showline/46719736,https://www.airlines-manager.com/network/showflight/51060918886,https://www.airlines-manager.com/aircraft/show/107161239,11:00,17:44,310,"$410,970.00","$378,489.00"
EWR - FSD,51071689554,EWR-OKC-FSD 4,A321-200,https://www.airlines-manager.com/network/showline/46719736,https://www.airlines-manager.com/network/showflight/51071689554,https://www.airlines-manager.com/aircraft/show/107161241,15:15,21:59,310,"$410,970.00","$378,489.00"
EWR - FSD,51077491444,EWR-OKC-FSD 1,A321-200,https://www.airlines-manager.com/network/showline/46719736,https://www.airlines-manager.com/network/showflight/51077491444,https://www.airlines-manager.com/aircraft/show/107161238,18:15,0:59,281,"$388,105.00","$356,554.00"
EWR - IAH,51043595718,EWR-IAH-LAS 3,A321neo,https://www.airlines-manager.com/network/showline/39422884,https://www.airlines-manager.com/network/showflight/51043595718,https://www.airlines-manager.com/aircraft/show/105859512,3:30,10:59,338,"$516,616.00","$468,754.00"
EWR - IAH,51043595719,EWR-IAH-LAS 5,A321neo,https://www.airlines-manager.com/network/showline/39422884,https://www.airlines-manager.com/network/showflight/51043595719,https://www.airlines-manager.com/aircraft/show/105859514,4:30,11:59,338,"$516,616.00","$468,754.00"
EWR - IAH,51054794958,EWR-IAH-LAS 1,A321neo,https://www.airlines-manager.com/network/showline/39422884,https://www.airlines-manager.com/network/showflight/51054794958,https://www.airlines-manager.com/aircraft/show/105859510,7:30,14:59,338,"$516,616.00","$468,754.00"
EWR - IAH,51060918906,EWR-IAH-LAS 2,A321neo,https://www.airlines-manager.com/network/showline/39422884,https://www.airlines-manager.com/network/showflight/51060918906,https://www.airlines-manager.com/aircraft/show/105859511,11:00,18:29,338,"$516,616.00","$468,754.00"
EWR - IAH,51060918907,EWR-IAH-LAS 4,A321neo,https://www.airlines-manager.com/network/showline/39422884,https://www.airlines-manager.com/network/showflight/51060918907,https://www.airlines-manager.com/aircraft/show/105859513,12:00,19:29,338,"$516,616.00","$468,754.00"
EWR - IAH,51077491492,EWR-IAH-LAS 6,ERJ-175,https://www.airlines-manager.com/network/showline/39422884,https://www.airlines-manager.com/network/showflight/51077491492,https://www.airlines-manager.com/aircraft/show/105864236,18:45,2:14,112,"$225,215.00","$193,008.00"
EWR - ICT,51043595461,EWR-COS-ICT 3,A321-200,https://www.airlines-manager.com/network/showline/47218155,https://www.airlines-manager.com/network/showflight/51043595461,https://www.airlines-manager.com/aircraft/show/108834810,1:00,7:59,310,"$440,336.00","$405,636.00"
EWR - ICT,51043595462,EWR-COS-ICT 2,A321-200,https://www.airlines-manager.com/network/showline/47218155,https://www.airlines-manager.com/network/showflight/51043595462,https://www.airlines-manager.com/aircraft/show/108834809,3:00,9:59,310,"$440,336.00","$405,636.00"
EWR - ICT,51060918879,EWR-COS-ICT 1,A321-200,https://www.airlines-manager.com/network/showline/47218155,https://www.airlines-manager.com/network/showflight/51060918879,https://www.airlines-manager.com/aircraft/show/108834808,11:00,17:59,310,"$440,336.00","$405,636.00"
EWR - ICT,51066574328,EWR-COS-ICT 4,A321-200,https://www.airlines-manager.com/network/showline/47218155,https://www.airlines-manager.com/network/showflight/51066574328,https://www.airlines-manager.com/aircraft/show/108834811,13:00,19:59,310,"$440,336.00","$405,636.00"
EWR - ICT,51082169901,EWR-COS-ICT 5,ERJ-175,https://www.airlines-manager.com/network/showline/47218155,https://www.airlines-manager.com/network/showflight/51082169901,https://www.airlines-manager.com/aircraft/show/108466265,21:30,4:29,112,"$208,487.00","$185,467.00"
EWR - IND,51043595378,EWR-IND-RDU 3,737-900ER,https://www.airlines-manager.com/network/showline/46255763,https://www.airlines-manager.com/network/showflight/51043595378,https://www.airlines-manager.com/aircraft/show/88494376,0:30,4:59,320,"$293,817.00","$262,249.00"
EWR - IND,51043595379,EWR-IND-RDU 2,737-900ER,https://www.airlines-manager.com/network/showline/46255763,https://www.airlines-manager.com/network/showflight/51043595379,https://www.airlines-manager.com/aircraft/show/88494377,4:15,8:44,320,"$293,817.00","$262,249.00"
EWR - IND,51060918918,EWR-IND-RDU 1,737-900ER,https://www.airlines-manager.com/network/showline/46255763,https://www.airlines-manager.com/network/showflight/51060918918,https://www.airlines-manager.com/aircraft/show/88494375,11:00,15:29,320,"$293,817.00","$262,249.00"
EWR - IND,51077491362,EWR-IND-RDU 5,ERJ-175,https://www.airlines-manager.com/network/showline/46255763,https://www.airlines-manager.com/network/showflight/51077491362,https://www.airlines-manager.com/aircraft/show/106104450,17:30,21:59,112,"$140,286.00","$122,631.00"
EWR - IND,51082169831,EWR-IND-RDU 4,737-900ER,https://www.airlines-manager.com/network/showline/46255763,https://www.airlines-manager.com/network/showflight/51082169831,https://www.airlines-manager.com/aircraft/show/105731236,20:45,1:14,320,"$293,817.00","$262,249.00"
EWR - JAN,51043595597,EWR-LIT-FAR 1,A321-200,https://www.airlines-manager.com/network/showline/48530163,https://www.airlines-manager.com/network/showflight/51043595597,https://www.airlines-manager.com/aircraft/show/90452834,2:00,8:14,310,"$387,602.00","$356,921.00"
EWR - JAN,51054795002,EWR-LIT-FAR 4,A321-200,https://www.airlines-manager.com/network/showline/48530163,https://www.airlines-manager.com/network/showflight/51054795002,https://www.airlines-manager.com/aircraft/show/86270784,8:30,14:44,310,"$387,602.00","$356,921.00"
EWR - JAN,51060918981,EWR-LIT-FAR 3,A321-200,https://www.airlines-manager.com/network/showline/48530163,https://www.airlines-manager.com/network/showflight/51060918981,https://www.airlines-manager.com/aircraft/show/86270786,12:00,18:14,310,"$387,602.00","$356,921.00"
EWR - JAN,51082169906,EWR-LIT-FAR 2,A321-200,https://www.airlines-manager.com/network/showline/48530163,https://www.airlines-manager.com/network/showflight/51082169906,https://www.airlines-manager.com/aircraft/show/86270787,21:45,3:59,310,"$387,602.00","$356,921.00"
EWR - JAX,51043595605,EWR-BNA-JAX 4,A321-200,https://www.airlines-manager.com/network/showline/45849204,https://www.airlines-manager.com/network/showflight/51043595605,https://www.airlines-manager.com/aircraft/show/104610407,2:15,7:29,310,"$335,996.00","$306,973.00"
EWR - JAX,51054794997,EWR-BNA-JAX 3,A321-200,https://www.airlines-manager.com/network/showline/45849204,https://www.airlines-manager.com/network/showflight/51054794997,https://www.airlines-manager.com/aircraft/show/104610408,8:15,13:29,310,"$335,996.00","$306,973.00"
EWR - JAX,51066574595,EWR-BNA-JAX 2,A321-200,https://www.airlines-manager.com/network/showline/45849204,https://www.airlines-manager.com/network/showflight/51066574595,https://www.airlines-manager.com/aircraft/show/104610409,14:00,19:14,310,"$335,996.00","$306,973.00"
EWR - JAX,51077491393,EWR-BNA-JAX 1,A321-200,https://www.airlines-manager.com/network/showline/45849204,https://www.airlines-manager.com/network/showflight/51077491393,https://www.airlines-manager.com/aircraft/show/104610410,18:00,23:14,310,"$335,996.00","$306,973.00"
EWR - JAX,51082169927,EWR-BNA-JAX 5,ERJ-175,https://www.airlines-manager.com/network/showline/45849204,https://www.airlines-manager.com/network/showflight/51082169927,https://www.airlines-manager.com/aircraft/show/96421247,22:00,3:14,112,"$159,525.00","$140,679.00"
EWR - KEF,51071689679,EWR 56C-1 F,787-10,https://www.airlines-manager.com/network/showline/46569722,https://www.airlines-manager.com/network/showflight/51071689679,https://www.airlines-manager.com/aircraft/show/106721556,17:00,4:14,598,"$1,334,396.00","$1,245,385.00"
EWR - KEF,51077491404,EWR 56C-2 F,787-10,https://www.airlines-manager.com/network/showline/46569722,https://www.airlines-manager.com/network/showflight/51077491404,https://www.airlines-manager.com/aircraft/show/106721557,18:00,5:14,598,"$1,334,396.00","$1,245,385.00"
EWR - KEF,51077491405,EWR 56C-3 F,787-10,https://www.airlines-manager.com/network/showline/46569722,https://www.airlines-manager.com/network/showflight/51077491405,https://www.airlines-manager.com/aircraft/show/106721558,18:45,5:59,598,"$1,334,396.00","$1,245,385.00"
EWR - LAS,51043595337,EWR-IAH-LAS 2,A321neo,https://www.airlines-manager.com/network/showline/39279941,https://www.airlines-manager.com/network/showflight/51043595337,https://www.airlines-manager.com/aircraft/show/105859511,0:15,10:59,338,"$733,483.00","$669,319.00"
EWR - LAS,51043595338,EWR-IAH-LAS 4,A321neo,https://www.airlines-manager.com/network/showline/39279941,https://www.airlines-manager.com/network/showflight/51043595338,https://www.airlines-manager.com/aircraft/show/105859513,1:15,11:59,338,"$733,483.00","$669,319.00"
EWR - LAS,51043595339,EWR-IAH-LAS 6,ERJ-175,https://www.airlines-manager.com/network/showline/39279941,https://www.airlines-manager.com/network/showflight/51043595339,https://www.airlines-manager.com/aircraft/show/105864236,2:15,12:59,112,"$316,943.00","$272,898.00"
EWR - LAS,51060919002,EWR-IAH-LAS 5,A321neo,https://www.airlines-manager.com/network/showline/39279941,https://www.airlines-manager.com/network/showflight/51060919002,https://www.airlines-manager.com/aircraft/show/105859514,12:00,22:44,338,"$733,483.00","$669,319.00"
EWR - LAS,51071689511,EWR-IAH-LAS 1,A321neo,https://www.airlines-manager.com/network/showline/39279941,https://www.airlines-manager.com/network/showflight/51071689511,https://www.airlines-manager.com/aircraft/show/105859510,15:00,1:44,338,"$733,483.00","$669,319.00"
EWR - LAS,51071689512,EWR-IAH-LAS 3,A321neo,https://www.airlines-manager.com/network/showline/39279941,https://www.airlines-manager.com/network/showflight/51071689512,https://www.airlines-manager.com/aircraft/show/105859512,16:45,3:29,338,"$733,483.00","$669,319.00"
EWR - LAX,51043595273,EWR-SFO-LAX 4,757-300,https://www.airlines-manager.com/network/showline/39254373,https://www.airlines-manager.com/network/showflight/51043595273,https://www.airlines-manager.com/aircraft/show/89233030,0:00,11:29,400,"$931,727.00","$840,504.00"
EWR - LAX,51043595274,EWR-SFO-LAX 5,757-300,https://www.airlines-manager.com/network/showline/39254373,https://www.airlines-manager.com/network/showflight/51043595274,https://www.airlines-manager.com/aircraft/show/89233027,2:00,13:29,400,"$931,727.00","$840,504.00"
EWR - LAX,51066574270,EWR-SFO-LAX 1,757-300,https://www.airlines-manager.com/network/showline/39254373,https://www.airlines-manager.com/network/showflight/51066574270,https://www.airlines-manager.com/aircraft/show/83716137,12:30,23:59,400,"$931,727.00","$840,504.00"
EWR - LAX,51066574271,EWR-SFO-LAX 2,757-300,https://www.airlines-manager.com/network/showline/39254373,https://www.airlines-manager.com/network/showflight/51066574271,https://www.airlines-manager.com/aircraft/show/89233028,14:00,1:29,400,"$931,727.00","$840,504.00"
EWR - LAX,51071689569,EWR-SFO-LAX 3,757-300,https://www.airlines-manager.com/network/showline/39254373,https://www.airlines-manager.com/network/showflight/51071689569,https://www.airlines-manager.com/aircraft/show/89233029,15:30,2:59,400,"$931,727.00","$840,504.00"
EWR - LHR,51043595612,EWR 56A-7 B1,777-300,https://www.airlines-manager.com/network/showline/40098745,https://www.airlines-manager.com/network/showflight/51043595612,https://www.airlines-manager.com/aircraft/show/106813013,2:15,16:44,748,"$2,216,229.00","$1,964,626.00"
EWR - LHR,51066574274,EWR 56A-3 B1,777-300,https://www.airlines-manager.com/network/showline/40098745,https://www.airlines-manager.com/network/showflight/51066574274,https://www.airlines-manager.com/aircraft/show/106813009,12:30,2:59,748,"$2,216,229.00","$1,964,626.00"
EWR - LHR,51077491456,EWR 56A-4 B1,777-300,https://www.airlines-manager.com/network/showline/40098745,https://www.airlines-manager.com/network/showflight/51077491456,https://www.airlines-manager.com/aircraft/show/106813010,18:15,8:44,748,"$2,000,651.00","$1,806,291.00"
EWR - LIS,51043595803,EWR 84A-3 B2,777-300,https://www.airlines-manager.com/network/showline/46601012,https://www.airlines-manager.com/network/showflight/51043595803,https://www.airlines-manager.com/aircraft/show/90656553,5:30,19:44,852,"$2,324,489.00","$2,116,154.00"
EWR - LIS,51060919009,EWR 84A-7 B2,777-300,https://www.airlines-manager.com/network/showline/46601012,https://www.airlines-manager.com/network/showflight/51060919009,https://www.airlines-manager.com/aircraft/show/94521249,12:15,2:29,852,"$2,324,489.00","$2,116,154.00"
EWR - LIT,51054795010,EWR-LIT-FAR 2,A321-200,https://www.airlines-manager.com/network/showline/48530155,https://www.airlines-manager.com/network/showflight/51054795010,https://www.airlines-manager.com/aircraft/show/86270787,8:30,14:44,310,"$393,314.00","$362,357.00"
EWR - LIT,51066574327,EWR-LIT-FAR 1,A321-200,https://www.airlines-manager.com/network/showline/48530155,https://www.airlines-manager.com/network/showflight/51066574327,https://www.airlines-manager.com/aircraft/show/90452834,13:00,19:14,310,"$393,314.00","$362,357.00"
EWR - LIT,51077491545,EWR-LIT-FAR 4,A321-200,https://www.airlines-manager.com/network/showline/48530155,https://www.airlines-manager.com/network/showflight/51077491545,https://www.airlines-manager.com/aircraft/show/86270784,19:30,1:44,310,"$393,314.00","$362,357.00"
EWR - LIT,51086540988,EWR-LIT-FAR 3,A321-200,https://www.airlines-manager.com/network/showline/48530155,https://www.airlines-manager.com/network/showflight/51086540988,https://www.airlines-manager.com/aircraft/show/86270786,22:45,4:59,310,"$393,314.00","$362,357.00"
EWR - MAD,51043595275,EWR 56B-6 B1,777-300,https://www.airlines-manager.com/network/showline/42007979,https://www.airlines-manager.com/network/showflight/51043595275,https://www.airlines-manager.com/aircraft/show/94521248,0:00,14:59,748,"$2,285,364.00","$2,032,405.00"
EWR - MAD,51082169819,EWR 56B-2 B1,777-300,https://www.airlines-manager.com/network/showline/42007979,https://www.airlines-manager.com/network/showflight/51082169819,https://www.airlines-manager.com/aircraft/show/90656556,20:30,11:29,748,"$2,285,364.00","$2,032,405.00"
EWR - MAD,51082169820,EWR 56B-7 B1,777-300,https://www.airlines-manager.com/network/showline/42007979,https://www.airlines-manager.com/network/showflight/51082169820,https://www.airlines-manager.com/aircraft/show/89124072,22:15,13:14,748,"$2,062,126.00","$1,868,735.00"
EWR - MCI,51043595728,EWR-ELP-SAT 1,737-900ER,https://www.airlines-manager.com/network/showline/45356715,https://www.airlines-manager.com/network/showflight/51043595728,https://www.airlines-manager.com/aircraft/show/103365578,3:45,9:59,320,"$392,599.00","$353,623.00"
EWR - MCI,51043595729,EWR-ELP-SAT 4,737-900ER,https://www.airlines-manager.com/network/showline/45356715,https://www.airlines-manager.com/network/showflight/51043595729,https://www.airlines-manager.com/aircraft/show/103365575,5:45,11:59,320,"$392,599.00","$353,623.00"
EWR - MCI,51054795074,EWR-ELP-SAT 3,737-900ER,https://www.airlines-manager.com/network/showline/45356715,https://www.airlines-manager.com/network/showflight/51054795074,https://www.airlines-manager.com/aircraft/show/103365576,10:00,16:14,320,"$392,599.00","$353,623.00"
EWR - MCI,51066574456,EWR CARGO 2,737-700,https://www.airlines-manager.com/network/showline/45356715,https://www.airlines-manager.com/network/showflight/51066574456,https://www.airlines-manager.com/aircraft/show/107576645,13:15,19:29,0,"$102,729.00","$77,582.00"
EWR - MCI,51077491445,EWR-ELP-SAT 2,737-900ER,https://www.airlines-manager.com/network/showline/45356715,https://www.airlines-manager.com/network/showflight/51077491445,https://www.airlines-manager.com/aircraft/show/103365577,18:15,0:29,320,"$392,599.00","$353,623.00"
EWR - MCI,51082169786,EWR-ELP-SAT 5 B,A319-100,https://www.airlines-manager.com/network/showline/45356715,https://www.airlines-manager.com/network/showflight/51082169786,https://www.airlines-manager.com/aircraft/show/110582847,20:15,2:29,198,"$297,231.00","$269,504.00"
EWR - MCO,51043595555,EWR-IAH-LAS 1,A321neo,https://www.airlines-manager.com/network/showline/40395708,https://www.airlines-manager.com/network/showflight/51043595555,https://www.airlines-manager.com/aircraft/show/105859510,1:45,7:29,338,"$389,287.00","$349,992.00"
EWR - MCO,51060918908,EWR-IAH-LAS 3,A321neo,https://www.airlines-manager.com/network/showline/40395708,https://www.airlines-manager.com/network/showflight/51060918908,https://www.airlines-manager.com/aircraft/show/105859512,11:00,16:44,338,"$389,287.00","$349,992.00"
EWR - MCO,51066574454,EWR-IAH-LAS 6,ERJ-175,https://www.airlines-manager.com/network/showline/40395708,https://www.airlines-manager.com/network/showflight/51066574454,https://www.airlines-manager.com/aircraft/show/105864236,13:00,18:44,112,"$170,572.00","$144,654.00"
EWR - MCO,51077491464,EWR-IAH-LAS 2,A321neo,https://www.airlines-manager.com/network/showline/40395708,https://www.airlines-manager.com/network/showflight/51077491464,https://www.airlines-manager.com/aircraft/show/105859511,18:30,0:14,338,"$389,287.00","$349,992.00"
EWR - MCO,51077491465,EWR-IAH-LAS 4,A321neo,https://www.airlines-manager.com/network/showline/40395708,https://www.airlines-manager.com/network/showflight/51077491465,https://www.airlines-manager.com/aircraft/show/105859513,19:30,1:14,338,"$389,287.00","$349,992.00"
EWR - MCO,51086540998,EWR-IAH-LAS 5,A321neo,https://www.airlines-manager.com/network/showline/40395708,https://www.airlines-manager.com/network/showflight/51086540998,https://www.airlines-manager.com/aircraft/show/105859514,22:45,4:29,336,"$387,919.00","$348,667.00"
EWR - MEM,51043595484,EWR-RNO-MEM 4,737-900ER,https://www.airlines-manager.com/network/showline/45056241,https://www.airlines-manager.com/network/showflight/51043595484,https://www.airlines-manager.com/aircraft/show/99920619,1:15,6:59,320,"$361,184.00","$324,126.00"
EWR - MEM,51043595485,EWR-RNO-MEM 3,737-900ER,https://www.airlines-manager.com/network/showline/45056241,https://www.airlines-manager.com/network/showflight/51043595485,https://www.airlines-manager.com/aircraft/show/99920620,3:45,9:29,320,"$361,184.00","$324,126.00"
EWR - MEM,51060918844,EWR-RNO-MEM 2,737-900ER,https://www.airlines-manager.com/network/showline/45056241,https://www.airlines-manager.com/network/showflight/51060918844,https://www.airlines-manager.com/aircraft/show/99920621,10:15,15:59,320,"$361,184.00","$324,126.00"
EWR - MEM,51077491549,EWR CARGO 2,737-700,https://www.airlines-manager.com/network/showline/45056241,https://www.airlines-manager.com/network/showflight/51077491549,https://www.airlines-manager.com/aircraft/show/107576645,19:30,1:14,0,"$96,157.00","$72,722.00"
EWR - MEM,51082169796,EWR-RNO-MEM 5 B,A319-100,https://www.airlines-manager.com/network/showline/45056241,https://www.airlines-manager.com/network/showflight/51082169796,https://www.airlines-manager.com/aircraft/show/100096560,20:15,1:59,198,"$273,914.00","$247,698.00"
EWR - MEM,51082169797,EWR-RNO-MEM 1,737-900ER,https://www.airlines-manager.com/network/showline/45056241,https://www.airlines-manager.com/network/showflight/51082169797,https://www.airlines-manager.com/aircraft/show/99920622,21:30,3:14,320,"$361,184.00","$324,126.00"
EWR - MEX,51043595569,EWR-DTW-YYZ 3,737-900ER,https://www.airlines-manager.com/network/showline/42538129,https://www.airlines-manager.com/network/showflight/51043595569,https://www.airlines-manager.com/aircraft/show/92003923,1:45,11:59,320,"$638,062.00","$574,462.00"
EWR - MEX,51054795088,EWR-DTW-YYZ 6 E,A319-100,https://www.airlines-manager.com/network/showline/42538129,https://www.airlines-manager.com/network/showflight/51054795088,https://www.airlines-manager.com/aircraft/show/104258433,10:00,20:14,216,"$485,869.00","$439,364.00"
EWR - MEX,51060918962,EWR-DTW-YYZ 4,737-900ER,https://www.airlines-manager.com/network/showline/42538129,https://www.airlines-manager.com/network/showflight/51060918962,https://www.airlines-manager.com/aircraft/show/92003922,12:00,22:14,320,"$638,062.00","$574,462.00"
EWR - MEX,51077491256,EWR-DTW-YYZ 5,737-900ER,https://www.airlines-manager.com/network/showline/42538129,https://www.airlines-manager.com/network/showflight/51077491256,https://www.airlines-manager.com/aircraft/show/92003921,17:15,3:29,320,"$638,062.00","$574,462.00"
EWR - MEX,51077491279,EWR-DTW-YYZ 2,737-900ER,https://www.airlines-manager.com/network/showline/42538129,https://www.airlines-manager.com/network/showflight/51077491279,https://www.airlines-manager.com/aircraft/show/92003924,17:30,3:44,320,"$638,062.00","$574,462.00"
EWR - MEX,51082169789,EWR-DTW-YYZ 6 E,A319-100,https://www.airlines-manager.com/network/showline/42538129,https://www.airlines-manager.com/network/showflight/51082169789,https://www.airlines-manager.com/aircraft/show/104258433,20:15,6:29,216,"$485,869.00","$439,364.00"
EWR - MEX,51086541066,EWR-DTW-YYZ 1,737-900ER,https://www.airlines-manager.com/network/showline/42538129,https://www.airlines-manager.com/network/showflight/51086541066,https://www.airlines-manager.com/aircraft/show/92003925,23:45,9:59,299,"$601,678.00","$539,546.00"
EWR - MIA,51043595631,EWR-MIA-ORD 5,A321neo,https://www.airlines-manager.com/network/showline/39256188,https://www.airlines-manager.com/network/showflight/51043595631,https://www.airlines-manager.com/aircraft/show/113251309,2:30,8:44,338,"$429,739.00","$386,653.00"
EWR - MIA,51043595632,EWR-MIA-ORD 1,A321neo,https://www.airlines-manager.com/network/showline/39256188,https://www.airlines-manager.com/network/showflight/51043595632,https://www.airlines-manager.com/aircraft/show/113251305,4:00,10:14,338,"$429,739.00","$386,653.00"
EWR - MIA,51054795104,EWR-MIA-ORD 2,A321neo,https://www.airlines-manager.com/network/showline/39256188,https://www.airlines-manager.com/network/showflight/51054795104,https://www.airlines-manager.com/aircraft/show/113251306,10:00,16:14,338,"$429,739.00","$386,653.00"
EWR - MIA,51060918867,EWR-MIA-ORD 4,A321neo,https://www.airlines-manager.com/network/showline/39256188,https://www.airlines-manager.com/network/showflight/51060918867,https://www.airlines-manager.com/aircraft/show/113251308,11:00,17:14,338,"$429,739.00","$386,653.00"
EWR - MIA,51071689642,EWR-MIA-ORD 3,A321neo,https://www.airlines-manager.com/network/showline/39256188,https://www.airlines-manager.com/network/showflight/51071689642,https://www.airlines-manager.com/aircraft/show/113251307,16:30,22:44,338,"$429,739.00","$386,653.00"
EWR - MKE,51043595687,EWR-BNA-JAX 5,ERJ-175,https://www.airlines-manager.com/network/showline/45849213,https://www.airlines-manager.com/network/showflight/51043595687,https://www.airlines-manager.com/aircraft/show/96421247,3:15,8:14,112,"$149,666.00","$131,674.00"
EWR - MKE,51054794940,EWR-BNA-JAX 4,A321-200,https://www.airlines-manager.com/network/showline/45849213,https://www.airlines-manager.com/network/showflight/51054794940,https://www.airlines-manager.com/aircraft/show/104610407,7:30,12:29,310,"$314,914.00","$287,029.00"
EWR - MKE,51066574594,EWR-BNA-JAX 3,A321-200,https://www.airlines-manager.com/network/showline/45849213,https://www.airlines-manager.com/network/showflight/51066574594,https://www.airlines-manager.com/aircraft/show/104610408,14:00,18:59,310,"$314,914.00","$287,029.00"
EWR - MKE,51077491533,EWR-BNA-JAX 2,A321-200,https://www.airlines-manager.com/network/showline/45849213,https://www.airlines-manager.com/network/showflight/51077491533,https://www.airlines-manager.com/aircraft/show/104610409,19:15,0:14,310,"$314,914.00","$287,029.00"
EWR - MKE,51086541042,EWR-BNA-JAX 1,A321-200,https://www.airlines-manager.com/network/showline/45849213,https://www.airlines-manager.com/network/showflight/51086541042,https://www.airlines-manager.com/aircraft/show/104610410,23:15,4:14,310,"$314,914.00","$287,029.00"
EWR - MSO,51043595466,EWR-OKC-FSD 1,A321-200,https://www.airlines-manager.com/network/showline/46719716,https://www.airlines-manager.com/network/showflight/51043595466,https://www.airlines-manager.com/aircraft/show/107161238,1:00,10:59,310,"$614,414.00","$569,467.00"
EWR - MSO,51060918892,EWR-OKC-FSD 3,A321-200,https://www.airlines-manager.com/network/showline/46719716,https://www.airlines-manager.com/network/showflight/51060918892,https://www.airlines-manager.com/aircraft/show/107161240,11:00,20:59,310,"$614,414.00","$569,467.00"
EWR - MSO,51071689571,EWR-OKC-FSD 5,ERJ-175,https://www.airlines-manager.com/network/showline/46719716,https://www.airlines-manager.com/network/showflight/51071689571,https://www.airlines-manager.com/aircraft/show/86782214,15:45,1:44,112,"$288,621.00","$258,138.00"
EWR - MSO,51077491368,EWR-OKC-FSD 2,A321-200,https://www.airlines-manager.com/network/showline/46719716,https://www.airlines-manager.com/network/showflight/51077491368,https://www.airlines-manager.com/aircraft/show/107161239,17:45,3:44,310,"$614,414.00","$569,467.00"
EWR - MSO,51082169923,EWR-OKC-FSD 4,A321-200,https://www.airlines-manager.com/network/showline/46719716,https://www.airlines-manager.com/network/showflight/51082169923,https://www.airlines-manager.com/aircraft/show/107161241,22:00,7:59,310,"$614,414.00","$569,467.00"
EWR - MSP,51043595789,EWR-DEN-SLC 3,A321-200,https://www.airlines-manager.com/network/showline/40395806,https://www.airlines-manager.com/network/showflight/51043595789,https://www.airlines-manager.com/aircraft/show/86270783,5:00,10:59,310,"$373,828.00","$334,593.00"
EWR - MSP,51054795111,EWR-DEN-SLC 5,A321-200,https://www.airlines-manager.com/network/showline/40395806,https://www.airlines-manager.com/network/showflight/51054795111,https://www.airlines-manager.com/aircraft/show/90452833,10:00,15:59,310,"$373,828.00","$334,593.00"
EWR - MSP,51060918915,EWR-DEN-SLC 6 B,A319-100,https://www.airlines-manager.com/network/showline/40395806,https://www.airlines-manager.com/network/showflight/51060918915,https://www.airlines-manager.com/aircraft/show/105223076,11:00,16:59,198,"$283,416.00","$251,985.00"
EWR - MSP,51077491450,EWR-DEN-SLC 2,A321-200,https://www.airlines-manager.com/network/showline/40395806,https://www.airlines-manager.com/network/showflight/51077491450,https://www.airlines-manager.com/aircraft/show/87153196,18:15,0:14,310,"$373,828.00","$334,593.00"
EWR - MSP,51077491451,EWR-DEN-SLC 1,A321-200,https://www.airlines-manager.com/network/showline/40395806,https://www.airlines-manager.com/network/showflight/51077491451,https://www.airlines-manager.com/aircraft/show/86270785,19:45,1:44,310,"$373,828.00","$334,593.00"
EWR - MSP,51082169827,EWR-DEN-SLC 4,A321-200,https://www.airlines-manager.com/network/showline/40395806,https://www.airlines-manager.com/network/showflight/51082169827,https://www.airlines-manager.com/aircraft/show/90452835,20:45,2:44,310,"$373,828.00","$334,593.00"
EWR - MSY,51043595691,EWR-ABQ-AUS 1,A321-200,https://www.airlines-manager.com/network/showline/43857268,https://www.airlines-manager.com/network/showflight/51043595691,https://www.airlines-manager.com/aircraft/show/90717079,3:15,9:59,310,"$414,028.00","$379,277.00"
EWR - MSY,51054795081,EWR-ABQ-AUS 3,A321-200,https://www.airlines-manager.com/network/showline/43857268,https://www.airlines-manager.com/network/showflight/51054795081,https://www.airlines-manager.com/aircraft/show/90717077,10:00,16:44,310,"$414,028.00","$379,277.00"
EWR - MSY,51060918934,EWR-ABQ-AUS 4,A321-200,https://www.airlines-manager.com/network/showline/43857268,https://www.airlines-manager.com/network/showflight/51060918934,https://www.airlines-manager.com/aircraft/show/90717076,11:00,17:44,310,"$414,028.00","$379,277.00"
EWR - MSY,51077491398,EWR-ABQ-AUS 2,A321-200,https://www.airlines-manager.com/network/showline/43857268,https://www.airlines-manager.com/network/showflight/51077491398,https://www.airlines-manager.com/aircraft/show/90717078,18:00,0:44,310,"$414,028.00","$379,277.00"
EWR - MSY,51077491399,EWR-ABQ-AUS 5,A321-200,https://www.airlines-manager.com/network/showline/43857268,https://www.airlines-manager.com/network/showflight/51077491399,https://www.airlines-manager.com/aircraft/show/95950199,20:00,2:44,310,"$414,028.00","$379,277.00"
EWR - MUC,51043595276,EWR 56C-6 F,787-10,https://www.airlines-manager.com/network/showline/46569718,https://www.airlines-manager.com/network/showflight/51043595276,https://www.airlines-manager.com/aircraft/show/106721561,0:00,16:29,598,"$2,035,381.00","$1,885,310.00"
EWR - MUC,51060918891,EWR 56C-7 F,787-10,https://www.airlines-manager.com/network/showline/46569718,https://www.airlines-manager.com/network/showflight/51060918891,https://www.airlines-manager.com/aircraft/show/106721562,11:00,3:29,598,"$2,035,381.00","$1,885,310.00"
EWR - MUC,51077491463,EWR 56C-6 F,787-10,https://www.airlines-manager.com/network/showline/46569718,https://www.airlines-manager.com/network/showflight/51077491463,https://www.airlines-manager.com/aircraft/show/106721561,18:30,10:59,598,"$2,035,381.00","$1,885,310.00"
EWR - NAS,51043595798,EWR-TUS-TPA 1,A321-200,https://www.airlines-manager.com/network/showline/44584392,https://www.airlines-manager.com/network/showflight/51043595798,https://www.airlines-manager.com/aircraft/show/98379319,5:15,11:44,310,"$395,013.00","$362,012.00"
EWR - NAS,51066574318,EWR-TUS-TPA 3,A321-200,https://www.airlines-manager.com/network/showline/44584392,https://www.airlines-manager.com/network/showflight/51066574318,https://www.airlines-manager.com/aircraft/show/98379317,13:00,19:29,310,"$395,013.00","$362,012.00"
EWR - NAS,51077491433,EWR-TUS-TPA 4,A321-200,https://www.airlines-manager.com/network/showline/44584392,https://www.airlines-manager.com/network/showflight/51077491433,https://www.airlines-manager.com/aircraft/show/98379316,18:00,0:29,310,"$395,013.00","$362,012.00"
EWR - NAS,51077491434,EWR-TUS-TPA 2,A321-200,https://www.airlines-manager.com/network/showline/44584392,https://www.airlines-manager.com/network/showflight/51077491434,https://www.airlines-manager.com/aircraft/show/98379318,19:00,1:29,310,"$395,013.00","$362,012.00"
EWR - NAS,51082169848,EWR-TUS-TPA 5,A321-200,https://www.airlines-manager.com/network/showline/44584392,https://www.airlines-manager.com/network/showflight/51082169848,https://www.airlines-manager.com/aircraft/show/98379315,21:00,3:29,290,"$372,624.00","$340,375.00"
EWR - NRT,51043595285,EWR 56A-6 B1,777-300,https://www.airlines-manager.com/network/showline/46601007,https://www.airlines-manager.com/network/showflight/51043595285,https://www.airlines-manager.com/aircraft/show/106813012,0:00,2:14,748,"$3,973,241.00","$3,574,539.00"
EWR - NRT,51060918842,EWR 56A-2 B1,777-300,https://www.airlines-manager.com/network/showline/46601007,https://www.airlines-manager.com/network/showflight/51060918842,https://www.airlines-manager.com/aircraft/show/106813008,10:15,12:29,748,"$3,947,501.00","$3,557,882.00"
EWR - NRT,51071689666,EWR 56A-7 B1,777-300,https://www.airlines-manager.com/network/showline/46601007,https://www.airlines-manager.com/network/showflight/51071689666,https://www.airlines-manager.com/aircraft/show/106813013,16:45,18:59,748,"$3,551,373.00","$3,266,207.00"
EWR - OAK,51043595476,EWR-OAK-SJC 5,A321-200,https://www.airlines-manager.com/network/showline/39907187,https://www.airlines-manager.com/network/showflight/51043595476,https://www.airlines-manager.com/aircraft/show/104717239,1:00,12:59,310,"$734,680.00","$679,106.00"
EWR - OAK,51054795068,EWR-OAK-SJC 1,A321-200,https://www.airlines-manager.com/network/showline/39907187,https://www.airlines-manager.com/network/showflight/51054795068,https://www.airlines-manager.com/aircraft/show/104717243,10:00,21:59,310,"$734,680.00","$679,106.00"
EWR - OAK,51060918977,EWR-OAK-SJC 2,A321-200,https://www.airlines-manager.com/network/showline/39907187,https://www.airlines-manager.com/network/showflight/51060918977,https://www.airlines-manager.com/aircraft/show/104717242,12:00,23:59,310,"$734,680.00","$679,106.00"
EWR - OAK,51066574599,EWR-OAK-SJC 3,A321-200,https://www.airlines-manager.com/network/showline/39907187,https://www.airlines-manager.com/network/showflight/51066574599,https://www.airlines-manager.com/aircraft/show/104717241,14:00,1:59,310,"$734,680.00","$679,106.00"
EWR - OAK,51086540962,EWR-OAK-SJC 4,A321-200,https://www.airlines-manager.com/network/showline/39907187,https://www.airlines-manager.com/network/showflight/51086540962,https://www.airlines-manager.com/aircraft/show/104717240,22:30,10:29,310,"$734,680.00","$679,106.00"
EWR - OKC,51043595577,EWR-OKC-FSD 5,ERJ-175,https://www.airlines-manager.com/network/showline/46719742,https://www.airlines-manager.com/network/showflight/51043595577,https://www.airlines-manager.com/aircraft/show/86782214,1:45,8:59,112,"$217,241.00","$193,495.00"
EWR - OKC,51043595578,EWR-OKC-FSD 2,A321-200,https://www.airlines-manager.com/network/showline/46719742,https://www.airlines-manager.com/network/showflight/51043595578,https://www.airlines-manager.com/aircraft/show/107161239,3:45,10:59,310,"$460,171.00","$424,442.00"
EWR - OKC,51054794981,EWR-OKC-FSD 4,A321-200,https://www.airlines-manager.com/network/showline/46719742,https://www.airlines-manager.com/network/showflight/51054794981,https://www.airlines-manager.com/aircraft/show/107161241,8:00,15:14,310,"$460,171.00","$424,442.00"
EWR - OKC,51060918887,EWR-OKC-FSD 1,A321-200,https://www.airlines-manager.com/network/showline/46719742,https://www.airlines-manager.com/network/showflight/51060918887,https://www.airlines-manager.com/aircraft/show/107161238,11:00,18:14,310,"$460,171.00","$424,442.00"
EWR - OKC,51082169865,EWR-OKC-FSD 3,A321-200,https://www.airlines-manager.com/network/showline/46719742,https://www.airlines-manager.com/network/showflight/51082169865,https://www.airlines-manager.com/aircraft/show/107161240,21:00,4:14,310,"$460,171.00","$424,442.00"
EWR - OMA,51043595627,EWR-BOI-PBI 1,A321-200,https://www.airlines-manager.com/network/showline/45805662,https://www.airlines-manager.com/network/showflight/51043595627,https://www.airlines-manager.com/aircraft/show/104418460,2:30,8:59,310,"$401,509.00","$368,534.00"
EWR - OMA,51054794949,EWR-BOI-PBI 4,A321-200,https://www.airlines-manager.com/network/showline/45805662,https://www.airlines-manager.com/network/showflight/51054794949,https://www.airlines-manager.com/aircraft/show/104418463,7:30,13:59,310,"$401,509.00","$368,534.00"
EWR - OMA,51054794950,EWR-BOI-PBI 3,A321-200,https://www.airlines-manager.com/network/showline/45805662,https://www.airlines-manager.com/network/showflight/51054794950,https://www.airlines-manager.com/aircraft/show/104418462,10:00,16:29,310,"$401,509.00","$368,534.00"
EWR - OMA,51071689695,EWR-BOI-PBI 2,A321-200,https://www.airlines-manager.com/network/showline/45805662,https://www.airlines-manager.com/network/showflight/51071689695,https://www.airlines-manager.com/aircraft/show/104418461,17:00,23:29,310,"$401,509.00","$368,534.00"
EWR - OMA,51077491507,EWR-BOI-PBI 5 B,A319-100,https://www.airlines-manager.com/network/showline/45805662,https://www.airlines-manager.com/network/showflight/51077491507,https://www.airlines-manager.com/aircraft/show/110582846,19:00,1:29,195,"$301,410.00","$275,088.00"
EWR - ONT,51043595271,EWR-SMF-ONT 4,737-900ER,https://www.airlines-manager.com/network/showline/48619155,https://www.airlines-manager.com/network/showflight/51043595271,https://www.airlines-manager.com/aircraft/show/94889153,0:00,11:29,320,"$702,968.00","$644,264.00"
EWR - ONT,51043595272,EWR-SMF-ONT 5,737-900ER,https://www.airlines-manager.com/network/showline/48619155,https://www.airlines-manager.com/network/showflight/51043595272,https://www.airlines-manager.com/aircraft/show/94889154,2:00,13:29,320,"$702,968.00","$644,264.00"
EWR - ONT,51060918961,EWR-SMF-ONT 1,737-900ER,https://www.airlines-manager.com/network/showline/48619155,https://www.airlines-manager.com/network/showflight/51060918961,https://www.airlines-manager.com/aircraft/show/94889150,11:45,23:14,320,"$702,968.00","$644,264.00"
EWR - ONT,51066574458,EWR-SMF-ONT 2,737-900ER,https://www.airlines-manager.com/network/showline/48619155,https://www.airlines-manager.com/network/showflight/51066574458,https://www.airlines-manager.com/aircraft/show/94889151,13:15,0:44,320,"$702,968.00","$644,264.00"
EWR - ONT,51066574459,EWR-SMF-ONT 3,737-900ER,https://www.airlines-manager.com/network/showline/48619155,https://www.airlines-manager.com/network/showflight/51066574459,https://www.airlines-manager.com/aircraft/show/94889152,14:45,2:14,300,"$675,795.00","$618,385.00"
EWR - ORD,51043595788,EWR-MIA-ORD 2,A321neo,https://www.airlines-manager.com/network/showline/39259370,https://www.airlines-manager.com/network/showflight/51043595788,https://www.airlines-manager.com/aircraft/show/113251306,5:00,9:59,338,"$340,482.00","$293,447.00"
EWR - ORD,51060918837,EWR-MIA-ORD 1,A321neo,https://www.airlines-manager.com/network/showline/39259370,https://www.airlines-manager.com/network/showflight/51060918837,https://www.airlines-manager.com/aircraft/show/113251305,10:15,15:14,338,"$340,482.00","$293,447.00"
EWR - ORD,51060918838,EWR-MIA-ORD 3,A321neo,https://www.airlines-manager.com/network/showline/39259370,https://www.airlines-manager.com/network/showflight/51060918838,https://www.airlines-manager.com/aircraft/show/113251307,11:30,16:29,338,"$340,482.00","$293,447.00"
EWR - ORD,51077491281,EWR-MIA-ORD 4,A321neo,https://www.airlines-manager.com/network/showline/39259370,https://www.airlines-manager.com/network/showflight/51077491281,https://www.airlines-manager.com/aircraft/show/113251308,17:15,22:14,338,"$340,482.00","$293,447.00"
EWR - ORD,51082169888,EWR-MIA-ORD 5,A321neo,https://www.airlines-manager.com/network/showline/39259370,https://www.airlines-manager.com/network/showflight/51082169888,https://www.airlines-manager.com/aircraft/show/113251309,21:30,2:29,338,"$340,482.00","$293,447.00"
EWR - ORF,51043595616,EWR-IND-RDU 1,737-900ER,https://www.airlines-manager.com/network/showline/46250219,https://www.airlines-manager.com/network/showflight/51043595616,https://www.airlines-manager.com/aircraft/show/88494375,2:15,5:29,320,"$153,055.00","$129,505.00"
EWR - ORF,51060918896,EWR-IND-RDU 5,ERJ-175,https://www.airlines-manager.com/network/showline/46250219,https://www.airlines-manager.com/network/showflight/51060918896,https://www.airlines-manager.com/aircraft/show/106104450,11:00,14:14,112,"$70,205.00","$57,603.00"
EWR - ORF,51066574621,EWR-IND-RDU 4,737-900ER,https://www.airlines-manager.com/network/showline/46250219,https://www.airlines-manager.com/network/showflight/51066574621,https://www.airlines-manager.com/aircraft/show/105731236,14:15,17:29,320,"$153,055.00","$129,505.00"
EWR - ORF,51077491392,EWR-IND-RDU 3,737-900ER,https://www.airlines-manager.com/network/showline/46250219,https://www.airlines-manager.com/network/showflight/51077491392,https://www.airlines-manager.com/aircraft/show/88494376,18:00,21:14,320,"$153,055.00","$129,505.00"
EWR - ORF,51082169912,EWR-IND-RDU 2,737-900ER,https://www.airlines-manager.com/network/showline/46250219,https://www.airlines-manager.com/network/showflight/51082169912,https://www.airlines-manager.com/aircraft/show/88494377,21:45,0:59,320,"$153,055.00","$129,505.00"
EWR - PBI,51043595528,EWR-BOI-PBI 4,A321-200,https://www.airlines-manager.com/network/showline/45805644,https://www.airlines-manager.com/network/showflight/51043595528,https://www.airlines-manager.com/aircraft/show/104418463,1:30,7:29,310,"$378,718.00","$346,277.00"
EWR - PBI,51043595529,EWR-BOI-PBI 3,A321-200,https://www.airlines-manager.com/network/showline/45805644,https://www.airlines-manager.com/network/showflight/51043595529,https://www.airlines-manager.com/aircraft/show/104418462,3:00,8:59,310,"$378,718.00","$346,277.00"
EWR - PBI,51060918925,EWR-BOI-PBI 2,A321-200,https://www.airlines-manager.com/network/showline/45805644,https://www.airlines-manager.com/network/showflight/51060918925,https://www.airlines-manager.com/aircraft/show/104418461,11:00,16:59,310,"$378,718.00","$346,277.00"
EWR - PBI,51066574441,EWR-BOI-PBI 5 B,A319-100,https://www.airlines-manager.com/network/showline/45805644,https://www.airlines-manager.com/network/showflight/51066574441,https://www.airlines-manager.com/aircraft/show/110582846,13:00,18:59,198,"$286,787.00","$260,791.00"
EWR - PBI,51082169806,EWR-BOI-PBI 1,A321-200,https://www.airlines-manager.com/network/showline/45805644,https://www.airlines-manager.com/network/showflight/51082169806,https://www.airlines-manager.com/aircraft/show/104418460,20:30,2:29,310,"$378,718.00","$346,277.00"
EWR - PDX,51043595289,EWR-PHX-PDX 3,A321neo,https://www.airlines-manager.com/network/showline/39259269,https://www.airlines-manager.com/network/showflight/51043595289,https://www.airlines-manager.com/aircraft/show/113595213,0:00,11:29,338,"$757,734.00","$705,027.00"
EWR - PDX,51043595290,EWR-PHX-PDX 4,A321neo,https://www.airlines-manager.com/network/showline/39259269,https://www.airlines-manager.com/network/showflight/51043595290,https://www.airlines-manager.com/aircraft/show/113595214,2:00,13:29,338,"$757,734.00","$705,027.00"
EWR - PDX,51043595291,EWR-PHX-PDX 5,A321neo,https://www.airlines-manager.com/network/showline/39259269,https://www.airlines-manager.com/network/showflight/51043595291,https://www.airlines-manager.com/aircraft/show/113595215,5:00,16:29,338,"$757,734.00","$705,027.00"
EWR - PDX,51043595292,EWR-PHX-PDX 6 B,A319-100,https://www.airlines-manager.com/network/showline/39259269,https://www.airlines-manager.com/network/showflight/51043595292,https://www.airlines-manager.com/aircraft/show/99219630,6:30,17:59,198,"$526,441.00","$481,744.00"
EWR - PDX,51060918835,EWR-PHX-PDX 1,A321neo,https://www.airlines-manager.com/network/showline/39259269,https://www.airlines-manager.com/network/showflight/51060918835,https://www.airlines-manager.com/aircraft/show/113595211,10:15,21:44,338,"$757,734.00","$705,027.00"
EWR - PDX,51060918836,EWR-PHX-PDX 2,A321neo,https://www.airlines-manager.com/network/showline/39259269,https://www.airlines-manager.com/network/showflight/51060918836,https://www.airlines-manager.com/aircraft/show/113595212,12:15,23:44,307,"$715,278.00","$664,287.00"
EWR - PHX,51043595296,EWR-PHX-PDX 1,A321neo,https://www.airlines-manager.com/network/showline/39338280,https://www.airlines-manager.com/network/showflight/51043595296,https://www.airlines-manager.com/aircraft/show/113595211,0:00,10:14,338,"$704,208.00","$646,838.00"
EWR - PHX,51043595297,EWR-PHX-PDX 2,A321neo,https://www.airlines-manager.com/network/showline/39338280,https://www.airlines-manager.com/network/showflight/51043595297,https://www.airlines-manager.com/aircraft/show/113595212,2:00,12:14,338,"$704,208.00","$646,838.00"
EWR - PHX,51060918957,EWR-PHX-PDX 3,A321neo,https://www.airlines-manager.com/network/showline/39338280,https://www.airlines-manager.com/network/showflight/51060918957,https://www.airlines-manager.com/aircraft/show/113595213,11:30,21:44,338,"$704,208.00","$646,838.00"
EWR - PHX,51066574467,EWR-PHX-PDX 4,A321neo,https://www.airlines-manager.com/network/showline/39338280,https://www.airlines-manager.com/network/showflight/51066574467,https://www.airlines-manager.com/aircraft/show/113595214,13:30,23:44,338,"$704,208.00","$646,838.00"
EWR - PHX,51071689644,EWR-PHX-PDX 5,A321neo,https://www.airlines-manager.com/network/showline/39338280,https://www.airlines-manager.com/network/showflight/51071689644,https://www.airlines-manager.com/aircraft/show/113595215,16:30,2:44,338,"$704,208.00","$646,838.00"
EWR - PHX,51077491438,EWR-PHX-PDX 6 B,A319-100,https://www.airlines-manager.com/network/showline/39338280,https://www.airlines-manager.com/network/showflight/51077491438,https://www.airlines-manager.com/aircraft/show/99219630,18:00,4:29,198,"$489,684.00","$441,569.00"
EWR - PIT,51043595693,EWR-STL-PIT 5,ERJ-175,https://www.airlines-manager.com/network/showline/44778351,https://www.airlines-manager.com/network/showflight/51043595693,https://www.airlines-manager.com/aircraft/show/98887257,3:15,6:29,112,"$77,854.00","$63,494.00"
EWR - PIT,51043595694,EWR-STL-PIT 3,737-900ER,https://www.airlines-manager.com/network/showline/44778351,https://www.airlines-manager.com/network/showflight/51043595694,https://www.airlines-manager.com/aircraft/show/98936169,6:30,9:44,320,"$168,516.00","$141,648.00"
EWR - PIT,51054795094,EWR-STL-PIT 2,737-900ER,https://www.airlines-manager.com/network/showline/44778351,https://www.airlines-manager.com/network/showflight/51054795094,https://www.airlines-manager.com/aircraft/show/98936170,10:00,13:14,320,"$168,516.00","$141,648.00"
EWR - PIT,51066574313,EWR-STL-PIT 4,737-900ER,https://www.airlines-manager.com/network/showline/44778351,https://www.airlines-manager.com/network/showflight/51066574313,https://www.airlines-manager.com/aircraft/show/98936168,13:00,16:14,320,"$168,516.00","$141,648.00"
EWR - PIT,51071689561,EWR-STL-PIT 1,737-900ER,https://www.airlines-manager.com/network/showline/44778351,https://www.airlines-manager.com/network/showflight/51071689561,https://www.airlines-manager.com/aircraft/show/98936171,15:30,18:44,320,"$168,516.00","$141,648.00"
EWR - PIT,51077491476,EWR-STL-PIT 5,ERJ-175,https://www.airlines-manager.com/network/showline/44778351,https://www.airlines-manager.com/network/showflight/51077491476,https://www.airlines-manager.com/aircraft/show/98887257,18:30,21:44,112,"$77,854.00","$63,494.00"
EWR - PVD,51043595511,EWR-TUL-DSM 4,A321-200,https://www.airlines-manager.com/network/showline/47540547,https://www.airlines-manager.com/network/showflight/51043595511,https://www.airlines-manager.com/aircraft/show/110044466,1:30,4:14,310,"$98,870.00","$81,235.00"
EWR - PVD,51054795050,EWR-TUL-DSM 3,A321-200,https://www.airlines-manager.com/network/showline/47540547,https://www.airlines-manager.com/network/showflight/51054795050,https://www.airlines-manager.com/aircraft/show/110044465,9:15,11:59,310,"$98,870.00","$81,235.00"
EWR - PVD,51060918876,EWR-TUL-DSM 2,A321-200,https://www.airlines-manager.com/network/showline/47540547,https://www.airlines-manager.com/network/showflight/51060918876,https://www.airlines-manager.com/aircraft/show/110044464,11:00,13:44,310,"$98,870.00","$81,235.00"
EWR - PVD,51077491554,EWR-TUL-DSM 1,A321-200,https://www.airlines-manager.com/network/showline/47540547,https://www.airlines-manager.com/network/showflight/51077491554,https://www.airlines-manager.com/aircraft/show/110044463,19:45,22:29,310,"$98,870.00","$81,235.00"
EWR - PVD,51086541038,EWR-TUL-DSM 5,ERJ-175,https://www.airlines-manager.com/network/showline/47540547,https://www.airlines-manager.com/network/showflight/51086541038,https://www.airlines-manager.com/aircraft/show/110113039,23:15,1:59,112,"$42,428.00","$31,570.00"
EWR - PWM,51043595778,EWR-TUL-DSM 1,A321-200,https://www.airlines-manager.com/network/showline/47540554,https://www.airlines-manager.com/network/showflight/51043595778,https://www.airlines-manager.com/aircraft/show/110044463,4:30,7:44,310,"$153,986.00","$134,936.00"
EWR - PWM,51054795027,EWR-TUL-DSM 5,ERJ-175,https://www.airlines-manager.com/network/showline/47540554,https://www.airlines-manager.com/network/showflight/51054795027,https://www.airlines-manager.com/aircraft/show/110113039,8:45,11:59,112,"$69,973.00","$58,047.00"
EWR - PWM,51060918877,EWR-TUL-DSM 4,A321-200,https://www.airlines-manager.com/network/showline/47540554,https://www.airlines-manager.com/network/showflight/51060918877,https://www.airlines-manager.com/aircraft/show/110044466,11:00,14:14,310,"$153,986.00","$134,936.00"
EWR - PWM,51077491409,EWR-TUL-DSM 3,A321-200,https://www.airlines-manager.com/network/showline/47540554,https://www.airlines-manager.com/network/showflight/51077491409,https://www.airlines-manager.com/aircraft/show/110044465,18:00,21:14,310,"$153,986.00","$134,936.00"
EWR - PWM,51077491410,EWR-TUL-DSM 2,A321-200,https://www.airlines-manager.com/network/showline/47540554,https://www.airlines-manager.com/network/showflight/51077491410,https://www.airlines-manager.com/aircraft/show/110044464,19:45,22:59,300,"$151,084.00","$132,112.00"
EWR - RDU,51043595492,EWR-IND-RDU 4,737-900ER,https://www.airlines-manager.com/network/showline/46258935,https://www.airlines-manager.com/network/showflight/51043595492,https://www.airlines-manager.com/aircraft/show/105731236,1:15,4:59,320,"$200,277.00","$172,309.00"
EWR - RDU,51043595493,EWR-IND-RDU 3,737-900ER,https://www.airlines-manager.com/network/showline/46258935,https://www.airlines-manager.com/network/showflight/51043595493,https://www.airlines-manager.com/aircraft/show/88494376,5:00,8:44,320,"$200,277.00","$172,309.00"
EWR - RDU,51060918912,EWR-IND-RDU 2,737-900ER,https://www.airlines-manager.com/network/showline/46258935,https://www.airlines-manager.com/network/showflight/51060918912,https://www.airlines-manager.com/aircraft/show/88494377,11:00,14:44,320,"$200,277.00","$172,309.00"
EWR - RDU,51071689565,EWR-IND-RDU 1,737-900ER,https://www.airlines-manager.com/network/showline/46258935,https://www.airlines-manager.com/network/showflight/51071689565,https://www.airlines-manager.com/aircraft/show/88494375,15:30,19:14,320,"$200,277.00","$172,309.00"
EWR - RDU,51082169914,EWR-IND-RDU 5,ERJ-175,https://www.airlines-manager.com/network/showline/46258935,https://www.airlines-manager.com/network/showflight/51082169914,https://www.airlines-manager.com/aircraft/show/106104450,22:00,1:44,112,"$92,910.00","$77,713.00"
EWR - RIC,51043595469,EWR-IND-RDU 2,737-900ER,https://www.airlines-manager.com/network/showline/46242111,https://www.airlines-manager.com/network/showflight/51043595469,https://www.airlines-manager.com/aircraft/show/88494377,1:00,4:14,320,"$138,896.00","$115,475.00"
EWR - RIC,51043595470,EWR-IND-RDU 1,737-900ER,https://www.airlines-manager.com/network/showline/46242111,https://www.airlines-manager.com/network/showflight/51043595470,https://www.airlines-manager.com/aircraft/show/88494375,5:30,8:44,320,"$138,896.00","$115,475.00"
EWR - RIC,51066574622,EWR-IND-RDU 5,ERJ-175,https://www.airlines-manager.com/network/showline/46242111,https://www.airlines-manager.com/network/showflight/51066574622,https://www.airlines-manager.com/aircraft/show/106104450,14:15,17:29,112,"$62,552.00","$50,035.00"
EWR - RIC,51077491355,EWR-IND-RDU 4,737-900ER,https://www.airlines-manager.com/network/showline/46242111,https://www.airlines-manager.com/network/showflight/51077491355,https://www.airlines-manager.com/aircraft/show/105731236,17:30,20:44,320,"$138,896.00","$115,475.00"
EWR - RIC,51082169869,EWR-IND-RDU 3,737-900ER,https://www.airlines-manager.com/network/showline/46242111,https://www.airlines-manager.com/network/showflight/51082169869,https://www.airlines-manager.com/aircraft/show/88494376,21:15,0:29,320,"$138,896.00","$115,475.00"
EWR - RNO,51043595598,EWR-RNO-MEM 5 B,A319-100,https://www.airlines-manager.com/network/showline/45056255,https://www.airlines-manager.com/network/showflight/51043595598,https://www.airlines-manager.com/aircraft/show/100096560,2:00,13:29,198,"$529,149.00","$487,362.00"
EWR - RNO,51060918843,EWR-RNO-MEM 1,737-900ER,https://www.airlines-manager.com/network/showline/45056255,https://www.airlines-manager.com/network/showflight/51060918843,https://www.airlines-manager.com/aircraft/show/99920622,10:15,21:29,320,"$701,693.00","$644,733.00"
EWR - RNO,51066574609,EWR-RNO-MEM 4,737-900ER,https://www.airlines-manager.com/network/showline/45056255,https://www.airlines-manager.com/network/showflight/51066574609,https://www.airlines-manager.com/aircraft/show/99920619,14:00,1:14,320,"$701,693.00","$644,733.00"
EWR - RNO,51071689651,EWR-RNO-MEM 3,737-900ER,https://www.airlines-manager.com/network/showline/45056255,https://www.airlines-manager.com/network/showflight/51071689651,https://www.airlines-manager.com/aircraft/show/99920620,16:30,3:44,320,"$701,693.00","$644,733.00"
EWR - RNO,51082169943,EWR-RNO-MEM 2,737-900ER,https://www.airlines-manager.com/network/showline/45056255,https://www.airlines-manager.com/network/showflight/51082169943,https://www.airlines-manager.com/aircraft/show/99920621,22:15,9:29,320,"$701,693.00","$644,733.00"
EWR - RSW,51043595700,EWR-RNO-MEM 1,737-900ER,https://www.airlines-manager.com/network/showline/45056246,https://www.airlines-manager.com/network/showflight/51043595700,https://www.airlines-manager.com/aircraft/show/99920622,3:15,9:29,320,"$388,206.00","$349,436.00"
EWR - RSW,51054794908,EWR-RNO-MEM 4,737-900ER,https://www.airlines-manager.com/network/showline/45056246,https://www.airlines-manager.com/network/showflight/51054794908,https://www.airlines-manager.com/aircraft/show/99920619,7:00,13:14,320,"$388,206.00","$349,436.00"
EWR - RSW,51060918845,EWR-RNO-MEM 3,737-900ER,https://www.airlines-manager.com/network/showline/45056246,https://www.airlines-manager.com/network/showflight/51060918845,https://www.airlines-manager.com/aircraft/show/99920620,10:15,16:29,320,"$388,206.00","$349,436.00"
EWR - RSW,51066574608,EWR-RNO-MEM 5 B,A319-100,https://www.airlines-manager.com/network/showline/45056246,https://www.airlines-manager.com/network/showflight/51066574608,https://www.airlines-manager.com/aircraft/show/100096560,14:00,20:14,198,"$294,435.00","$266,876.00"
EWR - RSW,51071689607,EWR-RNO-MEM 2,737-900ER,https://www.airlines-manager.com/network/showline/45056246,https://www.airlines-manager.com/network/showflight/51071689607,https://www.airlines-manager.com/aircraft/show/99920621,16:00,22:14,320,"$388,206.00","$349,436.00"
EWR - SAN,51043595321,EWR-MIA-ORD 3,A321neo,https://www.airlines-manager.com/network/showline/39319598,https://www.airlines-manager.com/network/showflight/51043595321,https://www.airlines-manager.com/aircraft/show/113251307,0:00,11:29,338,"$775,604.00","$723,308.00"
EWR - SAN,51054795115,EWR-MIA-ORD 5,A321neo,https://www.airlines-manager.com/network/showline/39319598,https://www.airlines-manager.com/network/showflight/51054795115,https://www.airlines-manager.com/aircraft/show/113251309,10:00,21:29,338,"$775,604.00","$723,308.00"
EWR - SAN,51071689559,EWR-MIA-ORD 1,A321neo,https://www.airlines-manager.com/network/showline/39319598,https://www.airlines-manager.com/network/showflight/51071689559,https://www.airlines-manager.com/aircraft/show/113251305,15:15,2:44,338,"$775,604.00","$723,308.00"
EWR - SAN,51071689560,EWR-MIA-ORD 2,A321neo,https://www.airlines-manager.com/network/showline/39319598,https://www.airlines-manager.com/network/showflight/51071689560,https://www.airlines-manager.com/aircraft/show/113251306,16:15,3:44,338,"$775,604.00","$723,308.00"
EWR - SAN,51082169941,EWR-MIA-ORD 4,A321neo,https://www.airlines-manager.com/network/showline/39319598,https://www.airlines-manager.com/network/showflight/51082169941,https://www.airlines-manager.com/aircraft/show/113251308,22:15,9:44,338,"$775,604.00","$723,308.00"
EWR - SAT,51043595564,EWR-ELP-SAT 3,737-900ER,https://www.airlines-manager.com/network/showline/45356722,https://www.airlines-manager.com/network/showflight/51043595564,https://www.airlines-manager.com/aircraft/show/103365576,1:45,9:59,320,"$517,034.00","$473,240.00"
EWR - SAT,51054795117,EWR-ELP-SAT 2,737-900ER,https://www.airlines-manager.com/network/showline/45356722,https://www.airlines-manager.com/network/showflight/51054795117,https://www.airlines-manager.com/aircraft/show/103365577,10:00,18:14,320,"$517,034.00","$473,240.00"
EWR - SAT,51060919000,EWR-ELP-SAT 5 B,A319-100,https://www.airlines-manager.com/network/showline/45356722,https://www.airlines-manager.com/network/showflight/51060919000,https://www.airlines-manager.com/aircraft/show/110582847,12:00,20:14,198,"$390,297.00","$358,593.00"
EWR - SAT,51077491547,EWR-ELP-SAT 1,737-900ER,https://www.airlines-manager.com/network/showline/45356722,https://www.airlines-manager.com/network/showflight/51077491547,https://www.airlines-manager.com/aircraft/show/103365578,19:30,3:44,320,"$517,034.00","$473,240.00"
EWR - SAT,51082169886,EWR-ELP-SAT 4,737-900ER,https://www.airlines-manager.com/network/showline/45356722,https://www.airlines-manager.com/network/showflight/51082169886,https://www.airlines-manager.com/aircraft/show/103365575,21:30,5:44,320,"$517,034.00","$473,240.00"
EWR - SAV,51043595773,EWR-COS-ICT 5,ERJ-175,https://www.airlines-manager.com/network/showline/47218122,https://www.airlines-manager.com/network/showflight/51043595773,https://www.airlines-manager.com/aircraft/show/108466265,4:30,9:29,112,"$146,144.00","$129,227.00"
EWR - SAV,51054795037,EWR-COS-ICT 3,A321-200,https://www.airlines-manager.com/network/showline/47218122,https://www.airlines-manager.com/network/showflight/51054795037,https://www.airlines-manager.com/aircraft/show/108834810,9:00,13:59,310,"$307,285.00","$281,150.00"
EWR - SAV,51060918878,EWR-COS-ICT 2,A321-200,https://www.airlines-manager.com/network/showline/47218122,https://www.airlines-manager.com/network/showflight/51060918878,https://www.airlines-manager.com/aircraft/show/108834809,11:00,15:59,310,"$307,285.00","$281,150.00"
EWR - SAV,51077491413,EWR-COS-ICT 1,A321-200,https://www.airlines-manager.com/network/showline/47218122,https://www.airlines-manager.com/network/showflight/51077491413,https://www.airlines-manager.com/aircraft/show/108834808,18:00,22:59,310,"$307,285.00","$281,150.00"
EWR - SAV,51077491426,EWR-COS-ICT 4,A321-200,https://www.airlines-manager.com/network/showline/47218122,https://www.airlines-manager.com/network/showflight/51077491426,https://www.airlines-manager.com/aircraft/show/108834811,20:00,0:59,258,"$277,144.00","$252,018.00"
EWR - SDF,51043595739,EWR-LIT-FAR 2,A321-200,https://www.airlines-manager.com/network/showline/48530172,https://www.airlines-manager.com/network/showflight/51043595739,https://www.airlines-manager.com/aircraft/show/86270787,4:00,8:29,310,"$295,484.00","$268,391.00"
EWR - SDF,51054794988,EWR-LIT-FAR 1,A321-200,https://www.airlines-manager.com/network/showline/48530172,https://www.airlines-manager.com/network/showflight/51054794988,https://www.airlines-manager.com/aircraft/show/90452834,8:15,12:44,310,"$295,484.00","$268,391.00"
EWR - SDF,51071689483,EWR-LIT-FAR 4,A321-200,https://www.airlines-manager.com/network/showline/48530172,https://www.airlines-manager.com/network/showflight/51071689483,https://www.airlines-manager.com/aircraft/show/86270784,15:00,19:29,310,"$295,484.00","$268,391.00"
EWR - SDF,51077491458,EWR-LIT-FAR 3,A321-200,https://www.airlines-manager.com/network/showline/48530172,https://www.airlines-manager.com/network/showflight/51077491458,https://www.airlines-manager.com/aircraft/show/86270786,18:15,22:44,310,"$295,484.00","$268,391.00"
EWR - SEA,51043595454,EWR-DFW-ATL 5,737-900ER,https://www.airlines-manager.com/network/showline/39259211,https://www.airlines-manager.com/network/showflight/51043595454,https://www.airlines-manager.com/aircraft/show/86238752,1:00,12:14,320,"$708,680.00","$639,611.00"
EWR - SEA,51043595455,EWR-DFW-ATL 3,737-900ER,https://www.airlines-manager.com/network/showline/39259211,https://www.airlines-manager.com/network/showflight/51043595455,https://www.airlines-manager.com/aircraft/show/90489726,3:00,14:14,320,"$708,680.00","$639,611.00"
EWR - SEA,51060918945,EWR-DFW-ATL 4,737-900ER,https://www.airlines-manager.com/network/showline/39259211,https://www.airlines-manager.com/network/showflight/51060918945,https://www.airlines-manager.com/aircraft/show/86238753,11:00,22:14,320,"$708,680.00","$639,611.00"
EWR - SEA,51071689553,EWR-DFW-ATL 1,737-900ER,https://www.airlines-manager.com/network/showline/39259211,https://www.airlines-manager.com/network/showflight/51071689553,https://www.airlines-manager.com/aircraft/show/90489724,15:00,2:14,320,"$708,680.00","$639,611.00"
EWR - SEA,51086540986,EWR-DFW-ATL 2,737-900ER,https://www.airlines-manager.com/network/showline/39259211,https://www.airlines-manager.com/network/showflight/51086540986,https://www.airlines-manager.com/aircraft/show/90489725,22:45,9:59,320,"$708,680.00","$639,611.00"
EWR - SEA,51086540987,EWR-DFW-ATL 6 B,A319-100,https://www.airlines-manager.com/network/showline/39259211,https://www.airlines-manager.com/network/showflight/51086540987,https://www.airlines-manager.com/aircraft/show/105222360,23:30,10:59,198,"$534,187.00","$484,309.00"
EWR - SFO,51043595314,EWR-SFO-LAX 1,757-300,https://www.airlines-manager.com/network/showline/39254584,https://www.airlines-manager.com/network/showflight/51043595314,https://www.airlines-manager.com/aircraft/show/83716137,0:00,11:44,400,"$942,980.00","$858,371.00"
EWR - SFO,51043595315,EWR-SFO-LAX 2,757-300,https://www.airlines-manager.com/network/showline/39254584,https://www.airlines-manager.com/network/showflight/51043595315,https://www.airlines-manager.com/aircraft/show/89233028,1:30,13:14,400,"$942,980.00","$858,371.00"
EWR - SFO,51043595316,EWR-SFO-LAX 3,757-300,https://www.airlines-manager.com/network/showline/39254584,https://www.airlines-manager.com/network/showflight/51043595316,https://www.airlines-manager.com/aircraft/show/89233029,3:00,14:44,400,"$942,980.00","$858,371.00"
EWR - SFO,51060919010,EWR-SFO-LAX 4,757-300,https://www.airlines-manager.com/network/showline/39254584,https://www.airlines-manager.com/network/showflight/51060919010,https://www.airlines-manager.com/aircraft/show/89233030,12:15,23:59,400,"$942,980.00","$858,371.00"
EWR - SFO,51066574626,EWR-SFO-LAX 5,757-300,https://www.airlines-manager.com/network/showline/39254584,https://www.airlines-manager.com/network/showflight/51066574626,https://www.airlines-manager.com/aircraft/show/89233027,14:15,1:59,400,"$942,980.00","$858,371.00"
EWR - SJC,51043595310,EWR-OAK-SJC 2,A321-200,https://www.airlines-manager.com/network/showline/45881921,https://www.airlines-manager.com/network/showflight/51043595310,https://www.airlines-manager.com/aircraft/show/104717242,0:00,11:59,310,"$731,687.00","$675,737.00"
EWR - SJC,51043595311,EWR-OAK-SJC 3,A321-200,https://www.airlines-manager.com/network/showline/45881921,https://www.airlines-manager.com/network/showflight/51043595311,https://www.airlines-manager.com/aircraft/show/104717241,2:00,13:59,310,"$731,687.00","$675,737.00"
EWR - SJC,51060918850,EWR-OAK-SJC 4,A321-200,https://www.airlines-manager.com/network/showline/45881921,https://www.airlines-manager.com/network/showflight/51060918850,https://www.airlines-manager.com/aircraft/show/104717240,10:30,22:29,310,"$731,687.00","$675,737.00"
EWR - SJC,51066574330,EWR-OAK-SJC 5,A321-200,https://www.airlines-manager.com/network/showline/45881921,https://www.airlines-manager.com/network/showflight/51066574330,https://www.airlines-manager.com/aircraft/show/104717239,13:00,0:59,310,"$731,687.00","$675,737.00"
EWR - SJC,51082169926,EWR-OAK-SJC 1,A321-200,https://www.airlines-manager.com/network/showline/45881921,https://www.airlines-manager.com/network/showflight/51082169926,https://www.airlines-manager.com/aircraft/show/104717243,22:00,9:59,310,"$731,687.00","$675,737.00"
EWR - SJU,51043595394,EWR-CUN-SJU 1,737-900ER,https://www.airlines-manager.com/network/showline/46524807,https://www.airlines-manager.com/network/showflight/51043595394,https://www.airlines-manager.com/aircraft/show/106581304,0:30,8:44,320,"$525,884.00","$479,987.00"
EWR - SJU,51043595395,EWR-CUN-SJU 4,737-900ER,https://www.airlines-manager.com/network/showline/46524807,https://www.airlines-manager.com/network/showflight/51043595395,https://www.airlines-manager.com/aircraft/show/106581307,2:00,10:14,320,"$525,884.00","$479,987.00"
EWR - SJU,51054794924,EWR-CUN-SJU 5,737-900ER,https://www.airlines-manager.com/network/showline/46524807,https://www.airlines-manager.com/network/showflight/51054794924,https://www.airlines-manager.com/aircraft/show/86238754,7:00,15:14,320,"$525,884.00","$479,987.00"
EWR - SJU,51066574442,EWR-CUN-SJU 3,737-900ER,https://www.airlines-manager.com/network/showline/46524807,https://www.airlines-manager.com/network/showflight/51066574442,https://www.airlines-manager.com/aircraft/show/106581306,13:00,21:14,320,"$525,884.00","$479,987.00"
EWR - SJU,51066574443,EWR-CUN-SJU 2,737-900ER,https://www.airlines-manager.com/network/showline/46524807,https://www.airlines-manager.com/network/showflight/51066574443,https://www.airlines-manager.com/aircraft/show/106581305,14:30,22:44,320,"$525,884.00","$479,987.00"
EWR - SLC,51043595334,EWR-DEN-SLC 2,A321-200,https://www.airlines-manager.com/network/showline/42046650,https://www.airlines-manager.com/network/showflight/51043595334,https://www.airlines-manager.com/aircraft/show/87153196,0:15,9:59,310,"$610,496.00","$558,567.00"
EWR - SLC,51043595335,EWR-DEN-SLC 5,A321-200,https://www.airlines-manager.com/network/showline/42046650,https://www.airlines-manager.com/network/showflight/51043595335,https://www.airlines-manager.com/aircraft/show/90452833,0:15,9:59,310,"$610,496.00","$558,567.00"
EWR - SLC,51043595336,EWR-DEN-SLC 6 B,A319-100,https://www.airlines-manager.com/network/showline/42046650,https://www.airlines-manager.com/network/showflight/51043595336,https://www.airlines-manager.com/aircraft/show/105223076,1:15,10:59,198,"$459,244.00","$417,617.00"
EWR - SLC,51054795113,EWR-DEN-SLC 1,A321-200,https://www.airlines-manager.com/network/showline/42046650,https://www.airlines-manager.com/network/showflight/51054795113,https://www.airlines-manager.com/aircraft/show/86270785,10:00,19:44,310,"$610,496.00","$558,567.00"
EWR - SLC,51060918943,EWR-DEN-SLC 4,A321-200,https://www.airlines-manager.com/network/showline/42046650,https://www.airlines-manager.com/network/showflight/51060918943,https://www.airlines-manager.com/aircraft/show/90452835,11:00,20:44,310,"$610,496.00","$558,567.00"
EWR - SLC,51077491522,EWR-DEN-SLC 3,A321-200,https://www.airlines-manager.com/network/showline/42046650,https://www.airlines-manager.com/network/showflight/51077491522,https://www.airlines-manager.com/aircraft/show/86270783,19:15,4:59,310,"$610,496.00","$558,567.00"
EWR - SMF,51043595268,EWR-SMF-ONT 1,737-900ER,https://www.airlines-manager.com/network/showline/48619145,https://www.airlines-manager.com/network/showflight/51043595268,https://www.airlines-manager.com/aircraft/show/94889150,0:00,11:44,320,"$717,456.00","$659,009.00"
EWR - SMF,51043595269,EWR-SMF-ONT 2,737-900ER,https://www.airlines-manager.com/network/showline/48619145,https://www.airlines-manager.com/network/showflight/51043595269,https://www.airlines-manager.com/aircraft/show/94889151,1:30,13:14,320,"$717,456.00","$659,009.00"
EWR - SMF,51043595270,EWR-SMF-ONT 3,737-900ER,https://www.airlines-manager.com/network/showline/48619145,https://www.airlines-manager.com/network/showflight/51043595270,https://www.airlines-manager.com/aircraft/show/94889152,3:00,14:44,320,"$717,456.00","$659,009.00"
EWR - SMF,51060918958,EWR-SMF-ONT 4,737-900ER,https://www.airlines-manager.com/network/showline/48619145,https://www.airlines-manager.com/network/showflight/51060918958,https://www.airlines-manager.com/aircraft/show/94889153,11:30,23:14,320,"$717,456.00","$659,009.00"
EWR - SMF,51066574465,EWR-SMF-ONT 5,737-900ER,https://www.airlines-manager.com/network/showline/48619145,https://www.airlines-manager.com/network/showflight/51066574465,https://www.airlines-manager.com/aircraft/show/94889154,13:30,1:14,320,"$717,456.00","$659,009.00"
EWR - SNN,51060918856,EWR 56B-5 B1,777-300,https://www.airlines-manager.com/network/showline/46604244,https://www.airlines-manager.com/network/showflight/51060918856,https://www.airlines-manager.com/aircraft/show/94521253,10:45,23:59,748,"$2,076,240.00","$1,892,979.00"
EWR - SNN,51077491488,EWR 56B-4 B1,777-300,https://www.airlines-manager.com/network/showline/46604244,https://www.airlines-manager.com/network/showflight/51077491488,https://www.airlines-manager.com/aircraft/show/94521247,18:45,7:59,748,"$1,986,856.00","$1,830,726.00"
EWR - STL,51043595467,EWR-STL-PIT 3,737-900ER,https://www.airlines-manager.com/network/showline/44784449,https://www.airlines-manager.com/network/showflight/51043595467,https://www.airlines-manager.com/aircraft/show/98936169,1:00,6:29,320,"$345,919.00","$309,451.00"
EWR - STL,51043595468,EWR-STL-PIT 2,737-900ER,https://www.airlines-manager.com/network/showline/44784449,https://www.airlines-manager.com/network/showflight/51043595468,https://www.airlines-manager.com/aircraft/show/98936170,4:15,9:44,320,"$345,919.00","$309,451.00"
EWR - STL,51054795095,EWR-STL-PIT 1,737-900ER,https://www.airlines-manager.com/network/showline/44784449,https://www.airlines-manager.com/network/showflight/51054795095,https://www.airlines-manager.com/aircraft/show/98936171,10:00,15:29,320,"$345,919.00","$309,451.00"
EWR - STL,51066574312,EWR-STL-PIT 5,ERJ-175,https://www.airlines-manager.com/network/showline/44784449,https://www.airlines-manager.com/network/showflight/51066574312,https://www.airlines-manager.com/aircraft/show/98887257,13:00,18:29,112,"$164,140.00","$143,373.00"
EWR - STL,51071689636,EWR-STL-PIT 4,737-900ER,https://www.airlines-manager.com/network/showline/44784449,https://www.airlines-manager.com/network/showflight/51071689636,https://www.airlines-manager.com/aircraft/show/98936168,16:15,21:44,320,"$345,919.00","$309,451.00"
EWR - STL,51082169913,EWR-STL-PIT 5,ERJ-175,https://www.airlines-manager.com/network/showline/44784449,https://www.airlines-manager.com/network/showflight/51082169913,https://www.airlines-manager.com/aircraft/show/98887257,21:45,3:14,112,"$164,140.00","$143,373.00"
EWR - TLS,51043595264,Charter 2,747-300,https://www.airlines-manager.com/network/showline/48907589,https://www.airlines-manager.com/network/showflight/51043595264,https://www.airlines-manager.com/aircraft/show/112787252,0:00,15:14,828,"$2,632,374.00","$2,453,729.00"
EWR - TLS,51060918982,Charter 1,747-300,https://www.airlines-manager.com/network/showline/48907589,https://www.airlines-manager.com/network/showflight/51060918982,https://www.airlines-manager.com/aircraft/show/110577510,12:00,3:14,828,"$2,632,374.00","$2,453,729.00"
EWR - TLV,51043595671,EWR-TLV 2 S,777-300,https://www.airlines-manager.com/network/showline/39655245,https://www.airlines-manager.com/network/showflight/51043595671,https://www.airlines-manager.com/aircraft/show/89124073,3:00,1:29,884,"$3,645,690.00","$3,326,341.00"
EWR - TLV,51082169864,EWR-TLV 1 S,777-300,https://www.airlines-manager.com/network/showline/39655245,https://www.airlines-manager.com/network/showflight/51082169864,https://www.airlines-manager.com/aircraft/show/93429385,21:00,19:29,884,"$3,645,690.00","$3,326,341.00"
EWR - TPA,51043595809,EWR-TUS-TPA 3,A321-200,https://www.airlines-manager.com/network/showline/44584397,https://www.airlines-manager.com/network/showflight/51043595809,https://www.airlines-manager.com/aircraft/show/98379317,5:45,11:44,310,"$375,612.00","$340,431.00"
EWR - TPA,51060918861,EWR-TUS-TPA 4,A321-200,https://www.airlines-manager.com/network/showline/44584397,https://www.airlines-manager.com/network/showflight/51060918861,https://www.airlines-manager.com/aircraft/show/98379316,10:45,16:44,310,"$375,612.00","$340,431.00"
EWR - TPA,51066574319,EWR-TUS-TPA 2,A321-200,https://www.airlines-manager.com/network/showline/44584397,https://www.airlines-manager.com/network/showflight/51066574319,https://www.airlines-manager.com/aircraft/show/98379318,13:00,18:59,310,"$375,612.00","$340,431.00"
EWR - TPA,51071689547,EWR-TUS-TPA 5,A321-200,https://www.airlines-manager.com/network/showline/44584397,https://www.airlines-manager.com/network/showflight/51071689547,https://www.airlines-manager.com/aircraft/show/98379315,15:00,20:59,310,"$375,612.00","$340,431.00"
EWR - TPA,51086541030,EWR-TUS-TPA 1,A321-200,https://www.airlines-manager.com/network/showline/44584397,https://www.airlines-manager.com/network/showflight/51086541030,https://www.airlines-manager.com/aircraft/show/98379319,23:15,5:14,310,"$375,612.00","$340,431.00"
EWR - TUL,51043595549,EWR-TUL-DSM 3,A321-200,https://www.airlines-manager.com/network/showline/47540564,https://www.airlines-manager.com/network/showflight/51043595549,https://www.airlines-manager.com/aircraft/show/110044465,1:45,8:29,310,"$426,097.00","$391,996.00"
EWR - TUL,51043595550,EWR-TUL-DSM 2,A321-200,https://www.airlines-manager.com/network/showline/47540564,https://www.airlines-manager.com/network/showflight/51043595550,https://www.airlines-manager.com/aircraft/show/110044464,3:30,10:14,310,"$426,097.00","$391,996.00"
EWR - TUL,51066574345,EWR-TUL-DSM 1,A321-200,https://www.airlines-manager.com/network/showline/47540564,https://www.airlines-manager.com/network/showflight/51066574345,https://www.airlines-manager.com/aircraft/show/110044463,13:00,19:44,310,"$426,097.00","$391,996.00"
EWR - TUL,51071689652,EWR-TUL-DSM 5,ERJ-175,https://www.airlines-manager.com/network/showline/47540564,https://www.airlines-manager.com/network/showflight/51071689652,https://www.airlines-manager.com/aircraft/show/110113039,16:30,23:14,112,"$200,572.00","$177,995.00"
EWR - TUL,51077491495,EWR-TUL-DSM 4,A321-200,https://www.airlines-manager.com/network/showline/47540564,https://www.airlines-manager.com/network/showflight/51077491495,https://www.airlines-manager.com/aircraft/show/110044466,18:45,1:29,310,"$426,097.00","$391,996.00"
EWR - TUS,51043595404,EWR-TUS-TPA 4,A321-200,https://www.airlines-manager.com/network/showline/44592944,https://www.airlines-manager.com/network/showflight/51043595404,https://www.airlines-manager.com/aircraft/show/98379316,0:30,10:44,310,"$637,910.00","$589,816.00"
EWR - TUS,51043595405,EWR-TUS-TPA 2,A321-200,https://www.airlines-manager.com/network/showline/44592944,https://www.airlines-manager.com/network/showflight/51043595405,https://www.airlines-manager.com/aircraft/show/98379318,1:30,11:44,310,"$637,910.00","$589,816.00"
EWR - TUS,51043595406,EWR-TUS-TPA 5,A321-200,https://www.airlines-manager.com/network/showline/44592944,https://www.airlines-manager.com/network/showflight/51043595406,https://www.airlines-manager.com/aircraft/show/98379315,3:30,13:44,310,"$637,910.00","$589,816.00"
EWR - TUS,51066574320,EWR-TUS-TPA 1,A321-200,https://www.airlines-manager.com/network/showline/44592944,https://www.airlines-manager.com/network/showflight/51066574320,https://www.airlines-manager.com/aircraft/show/98379319,13:00,23:14,310,"$637,910.00","$589,816.00"
EWR - TUS,51077491543,EWR-TUS-TPA 3,A321-200,https://www.airlines-manager.com/network/showline/44592944,https://www.airlines-manager.com/network/showflight/51077491543,https://www.airlines-manager.com/aircraft/show/98379317,19:30,5:44,310,"$637,910.00","$589,816.00"
EWR - YOW,51054795056,EWR-CUN-SJU 1,737-900ER,https://www.airlines-manager.com/network/showline/46524768,https://www.airlines-manager.com/network/showflight/51054795056,https://www.airlines-manager.com/aircraft/show/106581304,9:30,12:59,320,"$170,425.00","$145,094.00"
EWR - YOW,51060918895,EWR-CUN-SJU 4,737-900ER,https://www.airlines-manager.com/network/showline/46524768,https://www.airlines-manager.com/network/showflight/51060918895,https://www.airlines-manager.com/aircraft/show/106581307,11:00,14:29,320,"$170,425.00","$145,094.00"
EWR - YOW,51077491485,EWR-CUN-SJU 5,737-900ER,https://www.airlines-manager.com/network/showline/46524768,https://www.airlines-manager.com/network/showflight/51077491485,https://www.airlines-manager.com/aircraft/show/86238754,18:45,22:14,320,"$170,425.00","$145,094.00"
EWR - YOW,51082169868,EWR-CUN-SJU 3,737-900ER,https://www.airlines-manager.com/network/showline/46524768,https://www.airlines-manager.com/network/showflight/51082169868,https://www.airlines-manager.com/aircraft/show/106581306,21:15,0:44,320,"$170,425.00","$145,094.00"
EWR - YOW,51086540990,EWR-CUN-SJU 2,737-900ER,https://www.airlines-manager.com/network/showline/46524768,https://www.airlines-manager.com/network/showflight/51086540990,https://www.airlines-manager.com/aircraft/show/106581305,22:45,2:14,292,"$161,338.00","$136,254.00"
EWR - YUL,51054795057,EWR-CUN-SJU 3,737-900ER,https://www.airlines-manager.com/network/showline/46524780,https://www.airlines-manager.com/network/showflight/51054795057,https://www.airlines-manager.com/aircraft/show/106581306,9:30,12:59,320,"$173,622.00","$145,464.00"
EWR - YUL,51060918894,EWR-CUN-SJU 2,737-900ER,https://www.airlines-manager.com/network/showline/46524780,https://www.airlines-manager.com/network/showflight/51060918894,https://www.airlines-manager.com/aircraft/show/106581305,11:00,14:29,320,"$173,622.00","$145,464.00"
EWR - YUL,51071689558,EWR-CUN-SJU 5,737-900ER,https://www.airlines-manager.com/network/showline/46524780,https://www.airlines-manager.com/network/showflight/51071689558,https://www.airlines-manager.com/aircraft/show/86238754,15:15,18:44,320,"$173,622.00","$145,464.00"
EWR - YUL,51082169844,EWR-CUN-SJU 1,737-900ER,https://www.airlines-manager.com/network/showline/46524780,https://www.airlines-manager.com/network/showflight/51082169844,https://www.airlines-manager.com/aircraft/show/106581304,21:00,0:29,320,"$173,622.00","$145,464.00"
EWR - YUL,51086540960,EWR-CUN-SJU 4,737-900ER,https://www.airlines-manager.com/network/showline/46524780,https://www.airlines-manager.com/network/showflight/51086540960,https://www.airlines-manager.com/aircraft/show/106581307,22:30,1:59,320,"$173,622.00","$145,464.00"
EWR - YVR,51043595286,EWR-YVR-YYC 1,757-300,https://www.airlines-manager.com/network/showline/39297576,https://www.airlines-manager.com/network/showflight/51043595286,https://www.airlines-manager.com/aircraft/show/113681636,0:00,11:14,400,"$908,637.00","$836,259.00"
EWR - YVR,51043595287,EWR-YVR-YYC 2,757-300,https://www.airlines-manager.com/network/showline/39297576,https://www.airlines-manager.com/network/showflight/51043595287,https://www.airlines-manager.com/aircraft/show/113681637,1:30,12:44,400,"$908,637.00","$836,259.00"
EWR - YVR,51043595288,EWR-YVR-YYC 3,757-300,https://www.airlines-manager.com/network/showline/39297576,https://www.airlines-manager.com/network/showflight/51043595288,https://www.airlines-manager.com/aircraft/show/113681638,3:00,14:14,400,"$908,637.00","$836,259.00"
EWR - YVR,51060918951,EWR-YVR-YYC 4,757-300,https://www.airlines-manager.com/network/showline/39297576,https://www.airlines-manager.com/network/showflight/51060918951,https://www.airlines-manager.com/aircraft/show/113681639,11:15,22:29,400,"$908,637.00","$836,259.00"
EWR - YVR,51066574277,EWR-YVR-YYC 5,757-300,https://www.airlines-manager.com/network/showline/39297576,https://www.airlines-manager.com/network/showflight/51066574277,https://www.airlines-manager.com/aircraft/show/113681640,12:45,23:59,400,"$908,637.00","$836,259.00"
EWR - YYC,51043595522,EWR-YVR-YYC 4,757-300,https://www.airlines-manager.com/network/showline/48643425,https://www.airlines-manager.com/network/showflight/51043595522,https://www.airlines-manager.com/aircraft/show/113681639,1:30,11:14,400,"$787,946.00","$724,393.00"
EWR - YYC,51043595523,EWR-YVR-YYC 5,757-300,https://www.airlines-manager.com/network/showline/48643425,https://www.airlines-manager.com/network/showflight/51043595523,https://www.airlines-manager.com/aircraft/show/113681640,3:00,12:44,400,"$787,946.00","$724,393.00"
EWR - YYC,51060918948,EWR-YVR-YYC 1,757-300,https://www.airlines-manager.com/network/showline/48643425,https://www.airlines-manager.com/network/showflight/51060918948,https://www.airlines-manager.com/aircraft/show/113681636,11:15,20:59,400,"$787,946.00","$724,393.00"
EWR - YYC,51066574275,EWR-YVR-YYC 2,757-300,https://www.airlines-manager.com/network/showline/48643425,https://www.airlines-manager.com/network/showflight/51066574275,https://www.airlines-manager.com/aircraft/show/113681637,12:45,22:29,400,"$787,946.00","$724,393.00"
EWR - YYC,51066574276,EWR-YVR-YYC 3,757-300,https://www.airlines-manager.com/network/showline/48643425,https://www.airlines-manager.com/network/showflight/51066574276,https://www.airlines-manager.com/aircraft/show/113681638,14:15,23:59,400,"$787,946.00","$724,393.00"
EWR - YYZ,51043595617,EWR-DTW-YYZ 4,737-900ER,https://www.airlines-manager.com/network/showline/42503817,https://www.airlines-manager.com/network/showflight/51043595617,https://www.airlines-manager.com/aircraft/show/92003922,2:15,5:44,320,"$178,373.00","$144,035.00"
EWR - YYZ,51054794941,EWR-DTW-YYZ 5,737-900ER,https://www.airlines-manager.com/network/showline/42503817,https://www.airlines-manager.com/network/showflight/51054794941,https://www.airlines-manager.com/aircraft/show/92003921,7:30,10:59,320,"$178,373.00","$144,035.00"
EWR - YYZ,51054794942,EWR-DTW-YYZ 2,737-900ER,https://www.airlines-manager.com/network/showline/42503817,https://www.airlines-manager.com/network/showflight/51054794942,https://www.airlines-manager.com/aircraft/show/92003924,10:00,13:29,320,"$178,373.00","$144,035.00"
EWR - YYZ,51066574616,EWR-DTW-YYZ 1,737-900ER,https://www.airlines-manager.com/network/showline/42503817,https://www.airlines-manager.com/network/showflight/51066574616,https://www.airlines-manager.com/aircraft/show/92003925,14:00,17:29,320,"$178,373.00","$144,035.00"
EWR - YYZ,51077491446,EWR-DTW-YYZ 3,737-900ER,https://www.airlines-manager.com/network/showline/42503817,https://www.airlines-manager.com/network/showflight/51077491446,https://www.airlines-manager.com/aircraft/show/92003923,18:15,21:44,320,"$178,373.00","$144,035.00"
EWR - YYZ,51077491447,EWR CARGO 1,A321neo-LR,https://www.airlines-manager.com/network/showline/42503817,https://www.airlines-manager.com/network/showflight/51077491447,https://www.airlines-manager.com/aircraft/show/103406580,19:15,22:44,0,"$63,855.00","$35,078.00"
EWR - ZRH,51054794962,EWR 84A-5 B2,777-300,https://www.airlines-manager.com/network/showline/42022972,https://www.airlines-manager.com/network/showflight/51054794962,https://www.airlines-manager.com/aircraft/show/94521250,7:45,23:59,852,"$2,623,328.00","$2,380,639.00"
EWR - ZRH,51077491580,EWR 84A-6 B2,777-300,https://www.airlines-manager.com/network/showline/42022972,https://www.airlines-manager.com/network/showflight/51077491580,https://www.airlines-manager.com/aircraft/show/90656552,20:00,12:14,852,"$2,623,328.00","$2,380,639.00"
HNL - AKL,51071689613,HNL 84B-1 F,777-300,https://www.airlines-manager.com/network/showline/44044097,https://www.airlines-manager.com/network/showflight/51071689613,https://www.airlines-manager.com/aircraft/show/96807093,16:00,9:59,832,"$2,898,943.00","$2,648,267.00"
HNL - AKL,51086541011,HNL 84B-5 F,777-300,https://www.airlines-manager.com/network/showline/44044097,https://www.airlines-manager.com/network/showflight/51086541011,https://www.airlines-manager.com/aircraft/show/96807089,23:00,16:59,832,"$2,859,925.00","$2,622,650.00"
HNL - ATL,51043595785,HNL 56B-1 B,787-10,https://www.airlines-manager.com/network/showline/47262358,https://www.airlines-manager.com/network/showflight/51043595785,https://www.airlines-manager.com/aircraft/show/109187498,4:45,22:44,592,"$2,186,990.00","$2,001,135.00"
HNL - ATL,51071689589,HNL 56B-3 B,787-10,https://www.airlines-manager.com/network/showline/47262358,https://www.airlines-manager.com/network/showflight/51071689589,https://www.airlines-manager.com/aircraft/show/109187500,16:00,9:59,592,"$2,186,990.00","$2,001,135.00"
HNL - ATL,51086540999,HNL 56B-1 B,787-10,https://www.airlines-manager.com/network/showline/47262358,https://www.airlines-manager.com/network/showflight/51086540999,https://www.airlines-manager.com/aircraft/show/109187498,22:45,16:44,592,"$2,186,990.00","$2,001,135.00"
HNL - BNE,51043595734,HNL 84B-5 F,777-300,https://www.airlines-manager.com/network/showline/45391394,https://www.airlines-manager.com/network/showflight/51043595734,https://www.airlines-manager.com/aircraft/show/96807089,4:00,22:59,832,"$3,040,599.00","$2,771,750.00"
HNL - BNE,51054795110,HNL 84B-2 F,777-300,https://www.airlines-manager.com/network/showline/45391394,https://www.airlines-manager.com/network/showflight/51054795110,https://www.airlines-manager.com/aircraft/show/96807092,10:00,4:59,832,"$3,022,210.00","$2,759,707.00"
HNL - CLT,51043595776,HNL 56D-2 B,787-10,https://www.airlines-manager.com/network/showline/48149169,https://www.airlines-manager.com/network/showflight/51043595776,https://www.airlines-manager.com/aircraft/show/112066133,4:30,23:14,592,"$2,250,194.00","$2,094,495.00"
HNL - CLT,51043595777,HNL 56D-4 B,787-10,https://www.airlines-manager.com/network/showline/48149169,https://www.airlines-manager.com/network/showflight/51043595777,https://www.airlines-manager.com/aircraft/show/112066135,5:30,0:14,592,"$2,250,194.00","$2,094,495.00"
HNL - CLT,51086541034,HNL 56D-2 B,787-10,https://www.airlines-manager.com/network/showline/48149169,https://www.airlines-manager.com/network/showflight/51086541034,https://www.airlines-manager.com/aircraft/show/112066133,23:15,17:59,592,"$2,250,194.00","$2,094,495.00"
HNL - CXI,51043595721,HNL CARGO 2,737-700,https://www.airlines-manager.com/network/showline/43541576,https://www.airlines-manager.com/network/showflight/51043595721,https://www.airlines-manager.com/aircraft/show/107563068,3:45,10:59,0,"$121,088.00","$97,422.00"
HNL - CXI,51043595722,HNL-CXI S,A321-200,https://www.airlines-manager.com/network/showline/43541576,https://www.airlines-manager.com/network/showflight/51043595722,https://www.airlines-manager.com/aircraft/show/90717080,5:30,12:44,388,"$489,381.00","$458,873.00"
HNL - CXI,51071689550,HNL-CXI S,A321-200,https://www.airlines-manager.com/network/showline/43541576,https://www.airlines-manager.com/network/showflight/51071689550,https://www.airlines-manager.com/aircraft/show/90717080,15:00,22:14,388,"$489,381.00","$458,873.00"
HNL - CXI,51082169935,HNL-CXI S,A321-200,https://www.airlines-manager.com/network/showline/43541576,https://www.airlines-manager.com/network/showflight/51082169935,https://www.airlines-manager.com/aircraft/show/90717080,22:15,5:29,388,"$489,381.00","$458,873.00"
HNL - EWR,51043595767,HNL 56A-6 B,787-10,https://www.airlines-manager.com/network/showline/43560815,https://www.airlines-manager.com/network/showflight/51043595767,https://www.airlines-manager.com/aircraft/show/95351587,4:15,23:59,592,"$2,357,004.00","$2,195,089.00"
HNL - EWR,51043595768,HNL 56A-5 B,787-10,https://www.airlines-manager.com/network/showline/43560815,https://www.airlines-manager.com/network/showflight/51043595768,https://www.airlines-manager.com/aircraft/show/95351588,6:00,1:44,592,"$2,357,004.00","$2,195,089.00"
HNL - EWR,51077491562,HNL 56A-2 B,787-10,https://www.airlines-manager.com/network/showline/43560815,https://www.airlines-manager.com/network/showflight/51077491562,https://www.airlines-manager.com/aircraft/show/95351591,19:45,15:29,592,"$2,357,004.00","$2,195,089.00"
HNL - GUM,51043595317,HNL-GUM B,787-10,https://www.airlines-manager.com/network/showline/43718411,https://www.airlines-manager.com/network/showflight/51043595317,https://www.airlines-manager.com/aircraft/show/110213648,0:00,15:29,592,"$1,868,666.00","$1,754,294.00"
HNL - GUM,51043595318,HNL 84A-2 F,777-300,https://www.airlines-manager.com/network/showline/43718411,https://www.airlines-manager.com/network/showflight/51043595318,https://www.airlines-manager.com/aircraft/show/95818925,4:45,20:29,808,"$2,404,119.00","$2,206,771.00"
HNL - IAD,51043595685,HNL 56C-2 B,787-10,https://www.airlines-manager.com/network/showline/48011873,https://www.airlines-manager.com/network/showflight/51043595685,https://www.airlines-manager.com/aircraft/show/111639414,3:15,22:14,592,"$2,264,780.00","$2,112,053.00"
HNL - IAD,51054795043,HNL 56C-4 B,787-10,https://www.airlines-manager.com/network/showline/48011873,https://www.airlines-manager.com/network/showflight/51054795043,https://www.airlines-manager.com/aircraft/show/111639416,9:15,4:14,592,"$2,264,780.00","$2,112,053.00"
HNL - IAD,51077491582,HNL 56C-6 B,787-10,https://www.airlines-manager.com/network/showline/48011873,https://www.airlines-manager.com/network/showflight/51077491582,https://www.airlines-manager.com/aircraft/show/111639418,20:00,14:59,592,"$2,264,780.00","$2,112,053.00"
HNL - IAH,51043595300,HNL 56A-7 B,787-10,https://www.airlines-manager.com/network/showline/43568404,https://www.airlines-manager.com/network/showflight/51043595300,https://www.airlines-manager.com/aircraft/show/95351586,0:00,15:59,592,"$1,922,679.00","$1,782,368.00"
HNL - IAH,51043595301,HNL 56A-2 B,787-10,https://www.airlines-manager.com/network/showline/43568404,https://www.airlines-manager.com/network/showflight/51043595301,https://www.airlines-manager.com/aircraft/show/95351591,3:45,19:44,592,"$1,922,679.00","$1,782,368.00"
HNL - IAH,51071689624,HNL 56A-7 B,787-10,https://www.airlines-manager.com/network/showline/43568404,https://www.airlines-manager.com/network/showflight/51071689624,https://www.airlines-manager.com/aircraft/show/95351586,16:00,7:59,592,"$1,922,679.00","$1,782,368.00"
HNL - ITO,51043595559,HNL Interisland 4,717-200,https://www.airlines-manager.com/network/showline/43516658,https://www.airlines-manager.com/network/showflight/51043595559,https://www.airlines-manager.com/aircraft/show/94803593,1:45,4:44,170,"$76,964.00","$66,437.00"
HNL - ITO,51043595560,HNL Interisland 1,717-200,https://www.airlines-manager.com/network/showline/43516658,https://www.airlines-manager.com/network/showflight/51043595560,https://www.airlines-manager.com/aircraft/show/94803596,3:15,6:14,170,"$76,964.00","$66,437.00"
HNL - ITO,51043595561,HNL Interisland 2,717-200,https://www.airlines-manager.com/network/showline/43516658,https://www.airlines-manager.com/network/showflight/51043595561,https://www.airlines-manager.com/aircraft/show/94803595,6:00,8:59,170,"$76,964.00","$66,437.00"
HNL - ITO,51054795052,HNL Interisland 3,717-200,https://www.airlines-manager.com/network/showline/43516658,https://www.airlines-manager.com/network/showflight/51054795052,https://www.airlines-manager.com/aircraft/show/94803594,9:30,12:29,170,"$76,964.00","$66,437.00"
HNL - ITO,51071689526,HNL Interisland 4,717-200,https://www.airlines-manager.com/network/showline/43516658,https://www.airlines-manager.com/network/showflight/51071689526,https://www.airlines-manager.com/aircraft/show/94803593,15:00,17:59,170,"$76,964.00","$66,437.00"
HNL - ITO,51071689527,HNL Interisland 1,717-200,https://www.airlines-manager.com/network/showline/43516658,https://www.airlines-manager.com/network/showflight/51071689527,https://www.airlines-manager.com/aircraft/show/94803596,16:30,19:29,170,"$76,964.00","$66,437.00"
HNL - ITO,51077491524,HNL Interisland 2,717-200,https://www.airlines-manager.com/network/showline/43516658,https://www.airlines-manager.com/network/showflight/51077491524,https://www.airlines-manager.com/aircraft/show/94803595,19:15,22:14,170,"$76,964.00","$66,437.00"
HNL - ITO,51086541000,HNL Interisland 3,717-200,https://www.airlines-manager.com/network/showline/43516658,https://www.airlines-manager.com/network/showflight/51086541000,https://www.airlines-manager.com/aircraft/show/94803594,22:45,1:44,126,"$65,367.00","$55,311.00"
HNL - JFK,51043595665,HNL 56B-5 B,787-10,https://www.airlines-manager.com/network/showline/47262348,https://www.airlines-manager.com/network/showflight/51043595665,https://www.airlines-manager.com/aircraft/show/109187502,3:00,22:44,592,"$2,389,751.00","$2,207,311.00"
HNL - JFK,51054795040,HNL 56B-7 B,787-10,https://www.airlines-manager.com/network/showline/47262348,https://www.airlines-manager.com/network/showflight/51054795040,https://www.airlines-manager.com/aircraft/show/109187504,9:00,4:44,592,"$2,389,751.00","$2,207,311.00"
HNL - JFK,51071689680,HNL 56B-2 B,787-10,https://www.airlines-manager.com/network/showline/47262348,https://www.airlines-manager.com/network/showflight/51071689680,https://www.airlines-manager.com/aircraft/show/109187499,17:00,12:44,592,"$2,389,751.00","$2,207,311.00"
HNL - KOA,51043595415,HNL Interisland 2,717-200,https://www.airlines-manager.com/network/showline/43516655,https://www.airlines-manager.com/network/showflight/51043595415,https://www.airlines-manager.com/aircraft/show/94803595,0:45,3:29,170,"$58,646.00","$48,268.00"
HNL - KOA,51043595416,HNL Interisland 3,717-200,https://www.airlines-manager.com/network/showline/43516655,https://www.airlines-manager.com/network/showflight/51043595416,https://www.airlines-manager.com/aircraft/show/94803594,4:15,6:59,170,"$58,646.00","$48,268.00"
HNL - KOA,51054794931,HNL Interisland 4,717-200,https://www.airlines-manager.com/network/showline/43516655,https://www.airlines-manager.com/network/showflight/51054794931,https://www.airlines-manager.com/aircraft/show/94803593,7:15,9:59,170,"$58,646.00","$48,268.00"
HNL - KOA,51054794932,HNL Interisland 1,717-200,https://www.airlines-manager.com/network/showline/43516655,https://www.airlines-manager.com/network/showflight/51054794932,https://www.airlines-manager.com/aircraft/show/94803596,8:45,11:29,170,"$58,646.00","$48,268.00"
HNL - KOA,51066574600,HNL Interisland 2,717-200,https://www.airlines-manager.com/network/showline/43516655,https://www.airlines-manager.com/network/showflight/51066574600,https://www.airlines-manager.com/aircraft/show/94803595,14:00,16:44,170,"$58,646.00","$48,268.00"
HNL - KOA,51077491366,HNL Interisland 3,717-200,https://www.airlines-manager.com/network/showline/43516655,https://www.airlines-manager.com/network/showflight/51077491366,https://www.airlines-manager.com/aircraft/show/94803594,17:30,20:14,170,"$58,646.00","$48,268.00"
HNL - KOA,51082169807,HNL Interisland 4,717-200,https://www.airlines-manager.com/network/showline/43516655,https://www.airlines-manager.com/network/showflight/51082169807,https://www.airlines-manager.com/aircraft/show/94803593,20:30,23:14,170,"$58,646.00","$48,268.00"
HNL - KOA,51082169808,HNL Interisland 1,717-200,https://www.airlines-manager.com/network/showline/43516655,https://www.airlines-manager.com/network/showflight/51082169808,https://www.airlines-manager.com/aircraft/show/94803596,22:00,0:44,170,"$58,646.00","$48,268.00"
HNL - LAS,51043595817,HNL 84A-4 F,777-300,https://www.airlines-manager.com/network/showline/45390240,https://www.airlines-manager.com/network/showflight/51043595817,https://www.airlines-manager.com/aircraft/show/95818923,6:30,18:29,832,"$1,927,512.00","$1,740,884.00"
HNL - LAS,51082169805,HNL 84A-2 F,777-300,https://www.airlines-manager.com/network/showline/45390240,https://www.airlines-manager.com/network/showflight/51082169805,https://www.airlines-manager.com/aircraft/show/95818925,20:30,8:29,802,"$1,882,417.00","$1,698,587.00"
HNL - LAX,51054794919,HNL-SFO-LAX 3,A321neo,https://www.airlines-manager.com/network/showline/43538953,https://www.airlines-manager.com/network/showflight/51054794919,https://www.airlines-manager.com/aircraft/show/110044460,7:00,18:59,338,"$785,134.00","$716,862.00"
HNL - LAX,51054794920,HNL-SFO-LAX 4,A321neo,https://www.airlines-manager.com/network/showline/43538953,https://www.airlines-manager.com/network/showflight/51054794920,https://www.airlines-manager.com/aircraft/show/110044461,9:00,20:59,338,"$785,134.00","$716,862.00"
HNL - LAX,51054794921,HNL-SFO-LAX 6 B,A319-100,https://www.airlines-manager.com/network/showline/43538953,https://www.airlines-manager.com/network/showflight/51054794921,https://www.airlines-manager.com/aircraft/show/106106389,10:00,21:59,198,"$543,529.00","$486,249.00"
HNL - LAX,51077491457,HNL-SFO-LAX 1,A321neo,https://www.airlines-manager.com/network/showline/43538953,https://www.airlines-manager.com/network/showflight/51077491457,https://www.airlines-manager.com/aircraft/show/110044458,18:15,6:14,338,"$785,134.00","$716,862.00"
HNL - LAX,51082169779,HNL-SFO-LAX 2,A321neo,https://www.airlines-manager.com/network/showline/43538953,https://www.airlines-manager.com/network/showflight/51082169779,https://www.airlines-manager.com/aircraft/show/110044459,20:15,8:14,338,"$785,134.00","$716,862.00"
HNL - LAX,51082169780,HNL-SFO-LAX 5,A321neo,https://www.airlines-manager.com/network/showline/43538953,https://www.airlines-manager.com/network/showflight/51082169780,https://www.airlines-manager.com/aircraft/show/110044462,21:45,9:44,338,"$785,134.00","$716,862.00"
HNL - LIH,51043595417,HNL Interisland 1,717-200,https://www.airlines-manager.com/network/showline/43516646,https://www.airlines-manager.com/network/showflight/51043595417,https://www.airlines-manager.com/aircraft/show/94803596,0:45,3:14,170,"$50,772.00","$42,352.00"
HNL - LIH,51043595418,HNL Interisland 2,717-200,https://www.airlines-manager.com/network/showline/43516646,https://www.airlines-manager.com/network/showflight/51043595418,https://www.airlines-manager.com/aircraft/show/94803595,3:30,5:59,170,"$50,772.00","$42,352.00"
HNL - LIH,51054794912,HNL Interisland 3,717-200,https://www.airlines-manager.com/network/showline/43516646,https://www.airlines-manager.com/network/showflight/51054794912,https://www.airlines-manager.com/aircraft/show/94803594,7:00,9:29,170,"$50,772.00","$42,352.00"
HNL - LIH,51054794913,HNL Interisland 4,717-200,https://www.airlines-manager.com/network/showline/43516646,https://www.airlines-manager.com/network/showflight/51054794913,https://www.airlines-manager.com/aircraft/show/94803593,10:00,12:29,170,"$50,772.00","$42,352.00"
HNL - LIH,51066574601,HNL Interisland 1,717-200,https://www.airlines-manager.com/network/showline/43516646,https://www.airlines-manager.com/network/showflight/51066574601,https://www.airlines-manager.com/aircraft/show/94803596,14:00,16:29,170,"$50,772.00","$42,352.00"
HNL - LIH,51071689660,HNL Interisland 2,717-200,https://www.airlines-manager.com/network/showline/43516646,https://www.airlines-manager.com/network/showflight/51071689660,https://www.airlines-manager.com/aircraft/show/94803595,16:45,19:14,170,"$50,772.00","$42,352.00"
HNL - LIH,51082169783,HNL Interisland 3,717-200,https://www.airlines-manager.com/network/showline/43516646,https://www.airlines-manager.com/network/showflight/51082169783,https://www.airlines-manager.com/aircraft/show/94803594,20:15,22:44,170,"$50,772.00","$42,352.00"
HNL - LIH,51086541031,HNL Interisland 4,717-200,https://www.airlines-manager.com/network/showline/43516646,https://www.airlines-manager.com/network/showflight/51086541031,https://www.airlines-manager.com/aircraft/show/94803593,23:15,1:44,170,"$50,772.00","$42,352.00"
HNL - LNY,51043595471,HNL-LNY,Q-400,https://www.airlines-manager.com/network/showline/43516637,https://www.airlines-manager.com/network/showflight/51043595471,https://www.airlines-manager.com/aircraft/show/106107514,1:00,3:29,116,"$30,198.00","$25,191.00"
HNL - LNY,51043595472,HNL-LNY,Q-400,https://www.airlines-manager.com/network/showline/43516637,https://www.airlines-manager.com/network/showflight/51043595472,https://www.airlines-manager.com/aircraft/show/106107514,3:30,5:59,116,"$30,198.00","$25,191.00"
HNL - LNY,51043595473,HNL-LNY,Q-400,https://www.airlines-manager.com/network/showline/43516637,https://www.airlines-manager.com/network/showflight/51043595473,https://www.airlines-manager.com/aircraft/show/106107514,6:00,8:29,116,"$30,198.00","$25,191.00"
HNL - LNY,51054795020,HNL-LNY,Q-400,https://www.airlines-manager.com/network/showline/43516637,https://www.airlines-manager.com/network/showflight/51054795020,https://www.airlines-manager.com/aircraft/show/106107514,8:30,10:59,116,"$30,198.00","$25,191.00"
HNL - LNY,51071689510,HNL-LNY,Q-400,https://www.airlines-manager.com/network/showline/43516637,https://www.airlines-manager.com/network/showflight/51071689510,https://www.airlines-manager.com/aircraft/show/106107514,15:00,17:29,116,"$30,198.00","$25,191.00"
HNL - LNY,51077491324,HNL-LNY,Q-400,https://www.airlines-manager.com/network/showline/43516637,https://www.airlines-manager.com/network/showflight/51077491324,https://www.airlines-manager.com/aircraft/show/106107514,17:30,19:59,116,"$30,198.00","$25,191.00"
HNL - LNY,51077491327,HNL-LNY,Q-400,https://www.airlines-manager.com/network/showline/43516637,https://www.airlines-manager.com/network/showflight/51077491327,https://www.airlines-manager.com/aircraft/show/106107514,20:00,22:29,116,"$30,198.00","$25,191.00"
HNL - LNY,51086540970,HNL-LNY,Q-400,https://www.airlines-manager.com/network/showline/43516637,https://www.airlines-manager.com/network/showflight/51086540970,https://www.airlines-manager.com/aircraft/show/106107514,22:30,0:59,116,"$30,198.00","$25,191.00"
HNL - MCO,51043595474,HNL 56C-6 B,787-10,https://www.airlines-manager.com/network/showline/48011877,https://www.airlines-manager.com/network/showflight/51043595474,https://www.airlines-manager.com/aircraft/show/111639418,1:00,19:59,592,"$2,274,563.00","$2,114,464.00"
HNL - MCO,51043595475,HNL 56C-5 B,787-10,https://www.airlines-manager.com/network/showline/48011877,https://www.airlines-manager.com/network/showflight/51043595475,https://www.airlines-manager.com/aircraft/show/111639417,4:15,23:14,592,"$2,274,563.00","$2,114,464.00"
HNL - MCO,51054794986,HNL 56C-1 B,787-10,https://www.airlines-manager.com/network/showline/48011877,https://www.airlines-manager.com/network/showflight/51054794986,https://www.airlines-manager.com/aircraft/show/111639413,8:15,3:14,592,"$2,274,563.00","$2,114,464.00"
HNL - MEL,51054795012,HNL 84A-3 F,777-300,https://www.airlines-manager.com/network/showline/45395143,https://www.airlines-manager.com/network/showflight/51054795012,https://www.airlines-manager.com/aircraft/show/95818924,8:30,6:29,832,"$3,522,198.00","$3,220,816.00"
HNL - MEL,51077491575,HNL 84A-6 F,777-300,https://www.airlines-manager.com/network/showline/45395143,https://www.airlines-manager.com/network/showflight/51077491575,https://www.airlines-manager.com/aircraft/show/95818921,20:00,17:59,832,"$3,522,198.00","$3,220,816.00"
HNL - MIA,51054795000,HNL 56A-1 B,787-10,https://www.airlines-manager.com/network/showline/43560807,https://www.airlines-manager.com/network/showflight/51054795000,https://www.airlines-manager.com/aircraft/show/95351592,8:30,3:44,592,"$2,318,372.00","$2,152,111.00"
HNL - MIA,51060918855,HNL 56A-4 B,787-10,https://www.airlines-manager.com/network/showline/43560807,https://www.airlines-manager.com/network/showflight/51060918855,https://www.airlines-manager.com/aircraft/show/95351589,10:45,5:59,592,"$2,318,372.00","$2,152,111.00"
HNL - MIA,51071689568,HNL 56A-3 B,787-10,https://www.airlines-manager.com/network/showline/43560807,https://www.airlines-manager.com/network/showflight/51071689568,https://www.airlines-manager.com/aircraft/show/95351590,15:30,10:44,592,"$2,318,372.00","$2,152,111.00"
HNL - MNL,51054794951,HNL 84A-1 F,777-300,https://www.airlines-manager.com/network/showline/43762944,https://www.airlines-manager.com/network/showflight/51054794951,https://www.airlines-manager.com/aircraft/show/95818926,7:30,4:44,832,"$3,444,461.00","$3,155,164.00"
HNL - MNL,51077491477,HNL 84A-4 F,777-300,https://www.airlines-manager.com/network/showline/43762944,https://www.airlines-manager.com/network/showflight/51077491477,https://www.airlines-manager.com/aircraft/show/95818923,18:30,15:44,832,"$3,444,461.00","$3,155,164.00"
HNL - MSP,51071689596,HNL 56C-7 B,787-10,https://www.airlines-manager.com/network/showline/48011881,https://www.airlines-manager.com/network/showflight/51071689596,https://www.airlines-manager.com/aircraft/show/111639419,16:00,8:14,592,"$1,937,167.00","$1,802,794.00"
HNL - MSP,51071689597,HNL 56C-3 B,787-10,https://www.airlines-manager.com/network/showline/48011881,https://www.airlines-manager.com/network/showflight/51071689597,https://www.airlines-manager.com/aircraft/show/111639415,17:00,9:14,592,"$1,937,167.00","$1,802,794.00"
HNL - MSP,51082169934,HNL 56C-2 B,787-10,https://www.airlines-manager.com/network/showline/48011881,https://www.airlines-manager.com/network/showflight/51082169934,https://www.airlines-manager.com/aircraft/show/111639414,22:15,14:29,592,"$1,937,167.00","$1,802,794.00"
HNL - NAN,51043595726,HNL 84A-6 F,777-300,https://www.airlines-manager.com/network/showline/43541571,https://www.airlines-manager.com/network/showflight/51043595726,https://www.airlines-manager.com/aircraft/show/95818921,3:45,17:14,832,"$2,061,916.00","$1,890,710.00"
HNL - NAN,51077491440,HNL 84A-7 F,777-300,https://www.airlines-manager.com/network/showline/43541571,https://www.airlines-manager.com/network/showflight/51077491440,https://www.airlines-manager.com/aircraft/show/95818920,18:00,7:29,832,"$2,032,954.00","$1,871,402.00"
HNL - OGG,51043595556,HNL Interisland 3,717-200,https://www.airlines-manager.com/network/showline/43516648,https://www.airlines-manager.com/network/showflight/51043595556,https://www.airlines-manager.com/aircraft/show/94803594,1:45,4:14,170,"$51,536.00","$42,738.00"
HNL - OGG,51043595557,HNL Interisland 4,717-200,https://www.airlines-manager.com/network/showline/43516648,https://www.airlines-manager.com/network/showflight/51043595557,https://www.airlines-manager.com/aircraft/show/94803593,4:45,7:14,170,"$51,536.00","$42,738.00"
HNL - OGG,51043595558,HNL Interisland 1,717-200,https://www.airlines-manager.com/network/showline/43516648,https://www.airlines-manager.com/network/showflight/51043595558,https://www.airlines-manager.com/aircraft/show/94803596,6:15,8:44,170,"$51,536.00","$42,738.00"
HNL - OGG,51054795032,HNL Interisland 2,717-200,https://www.airlines-manager.com/network/showline/43516648,https://www.airlines-manager.com/network/showflight/51054795032,https://www.airlines-manager.com/aircraft/show/94803595,9:00,11:29,170,"$51,536.00","$42,738.00"
HNL - OGG,51071689525,HNL Interisland 3,717-200,https://www.airlines-manager.com/network/showline/43516648,https://www.airlines-manager.com/network/showflight/51071689525,https://www.airlines-manager.com/aircraft/show/94803594,15:00,17:29,170,"$51,536.00","$42,738.00"
HNL - OGG,51077491407,HNL Interisland 4,717-200,https://www.airlines-manager.com/network/showline/43516648,https://www.airlines-manager.com/network/showflight/51077491407,https://www.airlines-manager.com/aircraft/show/94803593,18:00,20:29,170,"$51,536.00","$42,738.00"
HNL - OGG,51077491408,HNL Interisland 1,717-200,https://www.airlines-manager.com/network/showline/43516648,https://www.airlines-manager.com/network/showflight/51077491408,https://www.airlines-manager.com/aircraft/show/94803596,19:30,21:59,170,"$51,536.00","$42,738.00"
HNL - OGG,51082169938,HNL Interisland 2,717-200,https://www.airlines-manager.com/network/showline/43516648,https://www.airlines-manager.com/network/showflight/51082169938,https://www.airlines-manager.com/aircraft/show/94803595,22:15,0:44,170,"$51,536.00","$42,738.00"
HNL - ORD,51054795102,HNL 56B-4 B,787-10,https://www.airlines-manager.com/network/showline/43560795,https://www.airlines-manager.com/network/showflight/51054795102,https://www.airlines-manager.com/aircraft/show/109187501,10:00,2:59,592,"$2,075,541.00","$1,906,081.00"
HNL - ORD,51071689588,HNL 56B-6 B,787-10,https://www.airlines-manager.com/network/showline/43560795,https://www.airlines-manager.com/network/showflight/51071689588,https://www.airlines-manager.com/aircraft/show/109187503,16:00,8:59,592,"$2,075,541.00","$1,906,081.00"
HNL - ORD,51086541005,HNL 56B-5 B,787-10,https://www.airlines-manager.com/network/showline/43560795,https://www.airlines-manager.com/network/showflight/51086541005,https://www.airlines-manager.com/aircraft/show/109187502,22:45,15:44,592,"$2,075,541.00","$1,906,081.00"
HNL - PHX,51043595716,HNL 56D-6 B,787-10,https://www.airlines-manager.com/network/showline/43718390,https://www.airlines-manager.com/network/showflight/51043595716,https://www.airlines-manager.com/aircraft/show/112066137,3:30,15:59,592,"$1,511,576.00","$1,400,441.00"
HNL - PHX,51071689486,HNL 56D-5 B,787-10,https://www.airlines-manager.com/network/showline/43718390,https://www.airlines-manager.com/network/showflight/51071689486,https://www.airlines-manager.com/aircraft/show/112066136,15:00,3:29,592,"$1,511,576.00","$1,400,441.00"
HNL - PHX,51071689487,HNL 56D-1 B,787-10,https://www.airlines-manager.com/network/showline/43718390,https://www.airlines-manager.com/network/showflight/51071689487,https://www.airlines-manager.com/aircraft/show/112066132,16:00,4:29,592,"$1,511,576.00","$1,400,441.00"
HNL - PPG,51043595606,HNL CARGO 1,737-700,https://www.airlines-manager.com/network/showline/43998032,https://www.airlines-manager.com/network/showflight/51043595606,https://www.airlines-manager.com/aircraft/show/107564830,2:15,14:29,0,"$205,880.00","$165,405.00"
HNL - PPG,51043595607,HNL-TRW-PPG 1 S,A321-200,https://www.airlines-manager.com/network/showline/43998032,https://www.airlines-manager.com/network/showflight/51043595607,https://www.airlines-manager.com/aircraft/show/88725599,3:30,15:44,380,"$784,357.00","$734,755.00"
HNL - PPG,51071689619,HNL-TRW-PPG 2 S,A321-200,https://www.airlines-manager.com/network/showline/43998032,https://www.airlines-manager.com/network/showflight/51071689619,https://www.airlines-manager.com/aircraft/show/88725598,16:00,4:14,380,"$784,357.00","$734,755.00"
HNL - PPG,51077491435,HNL-TRW-PPG 3 S,A321-200,https://www.airlines-manager.com/network/showline/43998032,https://www.airlines-manager.com/network/showflight/51077491435,https://www.airlines-manager.com/aircraft/show/88725597,18:00,6:14,380,"$784,357.00","$734,755.00"
HNL - PPT,51043595816,HNL-PPT,A321-200,https://www.airlines-manager.com/network/showline/43719628,https://www.airlines-manager.com/network/showflight/51043595816,https://www.airlines-manager.com/aircraft/show/88725600,6:15,18:59,310,"$765,067.00","$712,100.00"
HNL - PPT,51071689495,HNL CARGO 2,737-700,https://www.airlines-manager.com/network/showline/43719628,https://www.airlines-manager.com/network/showflight/51071689495,https://www.airlines-manager.com/aircraft/show/107563068,15:00,3:44,0,"$210,714.00","$167,878.00"
HNL - PPT,51071689496,HNL 84A-5 F,777-300,https://www.airlines-manager.com/network/showline/43719628,https://www.airlines-manager.com/network/showflight/51071689496,https://www.airlines-manager.com/aircraft/show/95818922,15:45,3:44,832,"$1,832,588.00","$1,696,344.00"
HNL - PPT,51077491516,HNL-PPT,A321-200,https://www.airlines-manager.com/network/showline/43719628,https://www.airlines-manager.com/network/showflight/51077491516,https://www.airlines-manager.com/aircraft/show/88725600,19:00,7:44,310,"$687,427.00","$641,982.00"
HNL - SEA,51043595720,HNL 56D-7 B,787-10,https://www.airlines-manager.com/network/showline/48149157,https://www.airlines-manager.com/network/showflight/51043595720,https://www.airlines-manager.com/aircraft/show/112066138,3:45,15:14,592,"$1,410,760.00","$1,309,087.00"
HNL - SEA,51071689608,HNL 56D-7 B,787-10,https://www.airlines-manager.com/network/showline/48149157,https://www.airlines-manager.com/network/showflight/51071689608,https://www.airlines-manager.com/aircraft/show/112066138,16:00,3:29,592,"$1,410,760.00","$1,309,087.00"
HNL - SEA,51077491400,HNL 56D-3 B,787-10,https://www.airlines-manager.com/network/showline/48149157,https://www.airlines-manager.com/network/showflight/51077491400,https://www.airlines-manager.com/aircraft/show/112066134,18:00,5:29,592,"$1,410,760.00","$1,309,087.00"
HNL - SFO,51054794922,HNL-SFO-LAX 1,A321neo,https://www.airlines-manager.com/network/showline/43557863,https://www.airlines-manager.com/network/showflight/51054794922,https://www.airlines-manager.com/aircraft/show/110044458,7:00,18:14,338,"$754,269.00","$695,785.00"
HNL - SFO,51054794923,HNL-SFO-LAX 2,A321neo,https://www.airlines-manager.com/network/showline/43557863,https://www.airlines-manager.com/network/showflight/51054794923,https://www.airlines-manager.com/aircraft/show/110044459,9:00,20:14,338,"$754,269.00","$695,785.00"
HNL - SFO,51060918848,HNL-SFO-LAX 5,A321neo,https://www.airlines-manager.com/network/showline/43557863,https://www.airlines-manager.com/network/showflight/51060918848,https://www.airlines-manager.com/aircraft/show/110044462,10:30,21:44,338,"$754,269.00","$695,785.00"
HNL - SFO,51077491497,HNL-SFO-LAX 3,A321neo,https://www.airlines-manager.com/network/showline/43557863,https://www.airlines-manager.com/network/showflight/51077491497,https://www.airlines-manager.com/aircraft/show/110044460,19:00,6:14,338,"$754,269.00","$695,785.00"
HNL - SFO,51082169852,HNL-SFO-LAX 4,A321neo,https://www.airlines-manager.com/network/showline/43557863,https://www.airlines-manager.com/network/showflight/51082169852,https://www.airlines-manager.com/aircraft/show/110044461,21:00,8:14,338,"$754,269.00","$695,785.00"
HNL - SFO,51082169853,HNL-SFO-LAX 6 B,A319-100,https://www.airlines-manager.com/network/showline/43557863,https://www.airlines-manager.com/network/showflight/51082169853,https://www.airlines-manager.com/aircraft/show/106106389,22:00,9:29,198,"$525,393.00","$476,106.00"
HNL - SIN,51043595799,HNL 84B-3 F,777-300,https://www.airlines-manager.com/network/showline/44044115,https://www.airlines-manager.com/network/showflight/51043595799,https://www.airlines-manager.com/aircraft/show/96807091,5:15,7:29,832,"$4,299,232.00","$3,901,010.00"
HNL - SIN,51071689687,HNL 84B-6 F,777-300,https://www.airlines-manager.com/network/showline/44044115,https://www.airlines-manager.com/network/showflight/51071689687,https://www.airlines-manager.com/aircraft/show/96807088,17:00,19:14,832,"$4,299,232.00","$3,901,010.00"
HNL - SYD,51054794957,HNL 84B-4 F,777-300,https://www.airlines-manager.com/network/showline/43719642,https://www.airlines-manager.com/network/showflight/51054794957,https://www.airlines-manager.com/aircraft/show/96807090,7:30,3:59,832,"$3,324,591.00","$3,017,560.00"
HNL - SYD,51077491529,HNL 84B-7 F,777-300,https://www.airlines-manager.com/network/showline/43719642,https://www.airlines-manager.com/network/showflight/51077491529,https://www.airlines-manager.com/aircraft/show/96807087,19:15,15:44,832,"$3,324,591.00","$3,017,560.00"
HNL - TRW,51043595760,HNL-TRW-PPG 2 S,A321-200,https://www.airlines-manager.com/network/showline/43998029,https://www.airlines-manager.com/network/showflight/51043595760,https://www.airlines-manager.com/aircraft/show/88725598,4:15,15:44,380,"$763,465.00","$718,834.00"
HNL - TRW,51043595761,HNL-TRW-PPG 3 S,A321-200,https://www.airlines-manager.com/network/showline/43998029,https://www.airlines-manager.com/network/showflight/51043595761,https://www.airlines-manager.com/aircraft/show/88725597,6:15,17:44,380,"$763,465.00","$718,834.00"
HNL - TRW,51071689493,HNL CARGO 1,737-700,https://www.airlines-manager.com/network/showline/43998029,https://www.airlines-manager.com/network/showflight/51071689493,https://www.airlines-manager.com/aircraft/show/107564830,15:00,2:14,0,"$192,166.00","$155,600.00"
HNL - TRW,51071689494,HNL-TRW-PPG 1 S,A321-200,https://www.airlines-manager.com/network/showline/43998029,https://www.airlines-manager.com/network/showflight/51071689494,https://www.airlines-manager.com/aircraft/show/88725599,16:00,3:29,380,"$763,465.00","$718,834.00"
HNL - YVR,51043595342,HNL 56D-5 B,787-10,https://www.airlines-manager.com/network/showline/48149164,https://www.airlines-manager.com/network/showflight/51043595342,https://www.airlines-manager.com/aircraft/show/112066136,0:15,11:59,592,"$1,413,733.00","$1,318,327.00"
HNL - YVR,51043595343,HNL 56D-1 B,787-10,https://www.airlines-manager.com/network/showline/48149164,https://www.airlines-manager.com/network/showflight/51043595343,https://www.airlines-manager.com/aircraft/show/112066132,3:30,15:14,592,"$1,413,733.00","$1,318,327.00"
HNL - YVR,51071689610,HNL 56D-6 B,787-10,https://www.airlines-manager.com/network/showline/48149164,https://www.airlines-manager.com/network/showflight/51071689610,https://www.airlines-manager.com/aircraft/show/112066137,16:00,3:44,592,"$1,413,733.00","$1,318,327.00"
IAH - ABQ,51043595478,IAH-CLE-STL 1,A321-200,https://www.airlines-manager.com/network/showline/45490320,https://www.airlines-manager.com/network/showflight/51043595478,https://www.airlines-manager.com/aircraft/show/103600700,1:00,5:59,310,"$316,364.00","$283,047.00"
IAH - ABQ,51043595479,IAH-CLE-STL 5 B,A319-100,https://www.airlines-manager.com/network/showline/45490320,https://www.airlines-manager.com/network/showflight/51043595479,https://www.airlines-manager.com/aircraft/show/110582844,2:30,7:29,198,"$240,460.00","$213,774.00"
IAH - ABQ,51043595480,IAH-CLE-STL 4,A321-200,https://www.airlines-manager.com/network/showline/45490320,https://www.airlines-manager.com/network/showflight/51043595480,https://www.airlines-manager.com/aircraft/show/88725601,6:00,10:59,310,"$316,364.00","$283,047.00"
IAH - ABQ,51066574295,IAH-CLE-STL 3,A321-200,https://www.airlines-manager.com/network/showline/45490320,https://www.airlines-manager.com/network/showflight/51066574295,https://www.airlines-manager.com/aircraft/show/103600702,13:00,17:59,310,"$316,364.00","$283,047.00"
IAH - ABQ,51077491487,IAH-CLE-STL 2,A321-200,https://www.airlines-manager.com/network/showline/45490320,https://www.airlines-manager.com/network/showflight/51077491487,https://www.airlines-manager.com/aircraft/show/103600701,18:45,23:44,310,"$316,364.00","$283,047.00"
IAH - ALB,51043595355,IAH-MHT-ALB 2,737-900ER,https://www.airlines-manager.com/network/showline/48841855,https://www.airlines-manager.com/network/showflight/51043595355,https://www.airlines-manager.com/aircraft/show/114266976,0:15,7:59,320,"$495,266.00","$449,812.00"
IAH - ALB,51043595356,IAH-MHT-ALB 5,ERJ-175,https://www.airlines-manager.com/network/showline/48841855,https://www.airlines-manager.com/network/showflight/51043595356,https://www.airlines-manager.com/aircraft/show/92800067,2:00,9:59,112,"$234,409.00","$207,369.00"
IAH - ALB,51060919006,IAH-MHT-ALB 3,737-900ER,https://www.airlines-manager.com/network/showline/48841855,https://www.airlines-manager.com/network/showflight/51060919006,https://www.airlines-manager.com/aircraft/show/114266971,12:00,19:44,320,"$495,266.00","$449,812.00"
IAH - ALB,51071689482,IAH-MHT-ALB 4,737-900ER,https://www.airlines-manager.com/network/showline/48841855,https://www.airlines-manager.com/network/showflight/51071689482,https://www.airlines-manager.com/aircraft/show/114266970,15:00,22:44,320,"$495,266.00","$449,812.00"
IAH - ALB,51082169790,IAH-MHT-ALB 1,737-900ER,https://www.airlines-manager.com/network/showline/48841855,https://www.airlines-manager.com/network/showflight/51082169790,https://www.airlines-manager.com/aircraft/show/114266972,20:15,3:59,320,"$495,266.00","$449,812.00"
IAH - ANC,51060918972,IAH-ANC-ONT 1,A321-200,https://www.airlines-manager.com/network/showline/47054828,https://www.airlines-manager.com/network/showflight/51060918972,https://www.airlines-manager.com/aircraft/show/108258010,12:00,2:44,310,"$895,397.00","$825,173.00"
IAH - ANC,51066574498,IAH-ANC-ONT 2,A321-200,https://www.airlines-manager.com/network/showline/47054828,https://www.airlines-manager.com/network/showflight/51066574498,https://www.airlines-manager.com/aircraft/show/108258011,14:00,4:44,310,"$895,397.00","$825,173.00"
IAH - ANC,51077491530,IAH-ANC-ONT 3,A321-200,https://www.airlines-manager.com/network/showline/47054828,https://www.airlines-manager.com/network/showflight/51077491530,https://www.airlines-manager.com/aircraft/show/108258012,19:15,9:59,310,"$895,397.00","$825,173.00"
IAH - ANC,51082169882,IAH-ANC-ONT 4,A321-200,https://www.airlines-manager.com/network/showline/47054828,https://www.airlines-manager.com/network/showflight/51082169882,https://www.airlines-manager.com/aircraft/show/108089220,21:15,11:59,310,"$895,397.00","$825,173.00"
IAH - ANC,51086541027,IAH-ANC-ONT 5 B,A319-100,https://www.airlines-manager.com/network/showline/47054828,https://www.airlines-manager.com/network/showflight/51086541027,https://www.airlines-manager.com/aircraft/show/108286957,23:15,13:59,198,"$668,398.00","$612,078.00"
IAH - ATL,51043595354,IAH-LAS-ATL 6,ERJ-175,https://www.airlines-manager.com/network/showline/41475893,https://www.airlines-manager.com/network/showflight/51043595354,https://www.airlines-manager.com/aircraft/show/82323704,0:15,4:59,112,"$145,966.00","$111,925.00"
IAH - ATL,51054795099,IAH-LAS-ATL 5,737-900ER,https://www.airlines-manager.com/network/showline/41475893,https://www.airlines-manager.com/network/showflight/51054795099,https://www.airlines-manager.com/aircraft/show/95894466,10:00,14:44,320,"$306,331.00","$242,256.00"
IAH - ATL,51060918858,IAH-LAS-ATL 1,737-900ER,https://www.airlines-manager.com/network/showline/41475893,https://www.airlines-manager.com/network/showflight/51060918858,https://www.airlines-manager.com/aircraft/show/96256511,10:45,15:29,320,"$306,331.00","$242,256.00"
IAH - ATL,51071689602,IAH-LAS-ATL 3,737-900ER,https://www.airlines-manager.com/network/showline/41475893,https://www.airlines-manager.com/network/showflight/51071689602,https://www.airlines-manager.com/aircraft/show/96183549,16:00,20:44,320,"$306,331.00","$242,256.00"
IAH - ATL,51077491372,IAH-LAS-ATL 4,737-900ER,https://www.airlines-manager.com/network/showline/41475893,https://www.airlines-manager.com/network/showflight/51077491372,https://www.airlines-manager.com/aircraft/show/96177955,17:45,22:29,320,"$306,331.00","$242,256.00"
IAH - ATL,51086541065,IAH-LAS-ATL 2,737-900ER,https://www.airlines-manager.com/network/showline/41475893,https://www.airlines-manager.com/network/showflight/51086541065,https://www.airlines-manager.com/aircraft/show/96250652,23:45,4:29,320,"$306,331.00","$242,256.00"
IAH - AUS,51043595764,IAH-BWI-PHL 2,A321neo,https://www.airlines-manager.com/network/showline/44227440,https://www.airlines-manager.com/network/showflight/51043595764,https://www.airlines-manager.com/aircraft/show/106007214,4:15,6:59,338,"$100,421.00","$76,820.00"
IAH - AUS,51060918902,IAH-BWI-PHL 1,A321neo,https://www.airlines-manager.com/network/showline/44227440,https://www.airlines-manager.com/network/showflight/51060918902,https://www.airlines-manager.com/aircraft/show/106007213,11:00,13:44,338,"$100,421.00","$76,820.00"
IAH - AUS,51060918903,IAH-BWI-PHL 5,A321neo,https://www.airlines-manager.com/network/showline/44227440,https://www.airlines-manager.com/network/showflight/51060918903,https://www.airlines-manager.com/aircraft/show/106007217,12:00,14:44,338,"$100,421.00","$76,820.00"
IAH - AUS,51077491454,IAH-BWI-PHL 4,A321neo,https://www.airlines-manager.com/network/showline/44227440,https://www.airlines-manager.com/network/showflight/51077491454,https://www.airlines-manager.com/aircraft/show/106007216,18:15,20:59,338,"$100,421.00","$76,820.00"
IAH - AUS,51082169887,IAH-BWI-PHL 3,A321neo,https://www.airlines-manager.com/network/showline/44227440,https://www.airlines-manager.com/network/showflight/51082169887,https://www.airlines-manager.com/aircraft/show/106007215,21:30,0:14,268,"$88,198.00","$64,820.00"
IAH - BDL,51043595814,IAH-CLE-STL 1,A321-200,https://www.airlines-manager.com/network/showline/45495448,https://www.airlines-manager.com/network/showflight/51043595814,https://www.airlines-manager.com/aircraft/show/103600700,6:00,13:59,310,"$497,384.00","$455,044.00"
IAH - BDL,51054794945,IAH-CLE-STL 5 B,A319-100,https://www.airlines-manager.com/network/showline/45495448,https://www.airlines-manager.com/network/showflight/51054794945,https://www.airlines-manager.com/aircraft/show/110582844,7:30,15:29,198,"$374,946.00","$341,009.00"
IAH - BDL,51060918929,IAH-CLE-STL 4,A321-200,https://www.airlines-manager.com/network/showline/45495448,https://www.airlines-manager.com/network/showflight/51060918929,https://www.airlines-manager.com/aircraft/show/88725601,11:00,18:59,310,"$497,384.00","$455,044.00"
IAH - BDL,51077491401,IAH-CLE-STL 3,A321-200,https://www.airlines-manager.com/network/showline/45495448,https://www.airlines-manager.com/network/showflight/51077491401,https://www.airlines-manager.com/aircraft/show/103600702,18:00,1:59,310,"$497,384.00","$455,044.00"
IAH - BDL,51077491402,IAH-DFW-STL,ERJ-175,https://www.airlines-manager.com/network/showline/45495448,https://www.airlines-manager.com/network/showflight/51077491402,https://www.airlines-manager.com/aircraft/show/96990010,19:45,3:44,112,"$234,146.00","$206,113.00"
IAH - BDL,51086541058,IAH-CLE-STL 2,A321-200,https://www.airlines-manager.com/network/showline/45495448,https://www.airlines-manager.com/network/showflight/51086541058,https://www.airlines-manager.com/aircraft/show/103600701,23:45,7:44,310,"$497,384.00","$455,044.00"
IAH - BFF,51043595733,IAH-MHT-ALB 1,737-900ER,https://www.airlines-manager.com/network/showline/48841858,https://www.airlines-manager.com/network/showflight/51043595733,https://www.airlines-manager.com/aircraft/show/114266972,4:00,9:44,320,"$365,462.00","$327,584.00"
IAH - BFF,51060918833,IAH-MHT-ALB 2,737-900ER,https://www.airlines-manager.com/network/showline/48841858,https://www.airlines-manager.com/network/showflight/51060918833,https://www.airlines-manager.com/aircraft/show/114266976,10:15,15:59,320,"$365,462.00","$327,584.00"
IAH - BFF,51060918834,IAH-MHT-ALB 5,ERJ-175,https://www.airlines-manager.com/network/showline/48841858,https://www.airlines-manager.com/network/showflight/51060918834,https://www.airlines-manager.com/aircraft/show/92800067,12:00,17:44,112,"$173,194.00","$151,513.00"
IAH - BFF,51077491559,IAH-MHT-ALB 3,737-900ER,https://www.airlines-manager.com/network/showline/48841858,https://www.airlines-manager.com/network/showflight/51077491559,https://www.airlines-manager.com/aircraft/show/114266971,19:45,1:29,320,"$365,462.00","$327,584.00"
IAH - BFF,51086540997,IAH-MHT-ALB 4,737-900ER,https://www.airlines-manager.com/network/showline/48841858,https://www.airlines-manager.com/network/showflight/51086540997,https://www.airlines-manager.com/aircraft/show/114266970,22:45,4:29,320,"$365,462.00","$327,584.00"
IAH - BNA,51043595742,IAH-BOI-BNA 4,A321-200,https://www.airlines-manager.com/network/showline/45737509,https://www.airlines-manager.com/network/showflight/51043595742,https://www.airlines-manager.com/aircraft/show/104258214,4:00,8:44,310,"$301,470.00","$270,261.00"
IAH - BNA,51054795049,IAH-BOI-BNA 3,A321-200,https://www.airlines-manager.com/network/showline/45737509,https://www.airlines-manager.com/network/showflight/51054795049,https://www.airlines-manager.com/aircraft/show/104258213,9:15,13:59,310,"$301,470.00","$270,261.00"
IAH - BNA,51071689524,IAH-BOI-BNA 2,A321-200,https://www.airlines-manager.com/network/showline/45737509,https://www.airlines-manager.com/network/showflight/51071689524,https://www.airlines-manager.com/aircraft/show/104258212,15:00,19:44,310,"$301,470.00","$270,261.00"
IAH - BNA,51082169928,IAH-BOI-BNA 1,A321-200,https://www.airlines-manager.com/network/showline/45737509,https://www.airlines-manager.com/network/showflight/51082169928,https://www.airlines-manager.com/aircraft/show/104258211,22:00,2:44,310,"$301,470.00","$270,261.00"
IAH - BNA,51086541014,IAH-BOI-BNA 5,ERJ-175,https://www.airlines-manager.com/network/showline/45737509,https://www.airlines-manager.com/network/showflight/51086541014,https://www.airlines-manager.com/aircraft/show/103534664,23:00,3:44,112,"$143,306.00","$123,435.00"
IAH - BOG,51043595810,IAH 56A-3 B,787-10,https://www.airlines-manager.com/network/showline/41798688,https://www.airlines-manager.com/network/showflight/51043595810,https://www.airlines-manager.com/aircraft/show/106676234,6:00,15:59,648,"$1,298,463.00","$1,206,171.00"
IAH - BOG,51066574501,IAH 56A-5 B,787-10,https://www.airlines-manager.com/network/showline/41798688,https://www.airlines-manager.com/network/showflight/51066574501,https://www.airlines-manager.com/aircraft/show/106676236,14:00,23:59,648,"$1,298,463.00","$1,206,171.00"
IAH - BOG,51077491576,IAH 56A-7 B,787-10,https://www.airlines-manager.com/network/showline/41798688,https://www.airlines-manager.com/network/showflight/51077491576,https://www.airlines-manager.com/aircraft/show/106676238,20:00,5:59,648,"$1,298,463.00","$1,206,171.00"
IAH - BOI,51043595483,IAH-BOI-BNA 3,A321-200,https://www.airlines-manager.com/network/showline/45737517,https://www.airlines-manager.com/network/showflight/51043595483,https://www.airlines-manager.com/aircraft/show/104258213,1:15,9:14,310,"$499,891.00","$458,264.00"
IAH - BOI,51054794915,IAH-BOI-BNA 2,A321-200,https://www.airlines-manager.com/network/showline/45737517,https://www.airlines-manager.com/network/showflight/51054794915,https://www.airlines-manager.com/aircraft/show/104258212,7:00,14:59,310,"$499,891.00","$458,264.00"
IAH - BOI,51066574598,IAH-BOI-BNA 1,A321-200,https://www.airlines-manager.com/network/showline/45737517,https://www.airlines-manager.com/network/showflight/51066574598,https://www.airlines-manager.com/aircraft/show/104258211,14:00,21:59,310,"$499,891.00","$458,264.00"
IAH - BOI,51071689528,IAH-BOI-BNA 5,ERJ-175,https://www.airlines-manager.com/network/showline/45737517,https://www.airlines-manager.com/network/showflight/51071689528,https://www.airlines-manager.com/aircraft/show/103534664,15:00,22:59,112,"$235,307.00","$207,745.00"
IAH - BOI,51077491567,IAH-BOI-BNA 4,A321-200,https://www.airlines-manager.com/network/showline/45737517,https://www.airlines-manager.com/network/showflight/51077491567,https://www.airlines-manager.com/aircraft/show/104258214,20:00,3:59,310,"$499,891.00","$458,264.00"
IAH - BOS,51043595572,IAH-JFK-LAX 3,757-300,https://www.airlines-manager.com/network/showline/41429011,https://www.airlines-manager.com/network/showflight/51043595572,https://www.airlines-manager.com/aircraft/show/88400800,1:45,9:59,400,"$665,277.00","$603,473.00"
IAH - BOS,51060918946,IAH-JFK-LAX 2,757-300,https://www.airlines-manager.com/network/showline/41429011,https://www.airlines-manager.com/network/showflight/51060918946,https://www.airlines-manager.com/aircraft/show/88400799,11:00,19:14,400,"$665,277.00","$603,473.00"
IAH - BOS,51060918947,IAH-JFK-LAX 4,757-300,https://www.airlines-manager.com/network/showline/41429011,https://www.airlines-manager.com/network/showflight/51060918947,https://www.airlines-manager.com/aircraft/show/88400801,12:00,20:14,400,"$665,277.00","$603,473.00"
IAH - BOS,51077491379,IAH-JFK-LAX 5,757-300,https://www.airlines-manager.com/network/showline/41429011,https://www.airlines-manager.com/network/showflight/51077491379,https://www.airlines-manager.com/aircraft/show/89233038,17:45,1:59,400,"$665,277.00","$603,473.00"
IAH - BOS,51077491380,IAH-JFK-LAX 1,757-300,https://www.airlines-manager.com/network/showline/41429011,https://www.airlines-manager.com/network/showflight/51077491380,https://www.airlines-manager.com/aircraft/show/88400798,18:30,2:44,379,"$644,431.00","$583,497.00"
IAH - BSB,51060918950,IAH 84A-2 E1,777-300,https://www.airlines-manager.com/network/showline/41559619,https://www.airlines-manager.com/network/showflight/51060918950,https://www.airlines-manager.com/aircraft/show/89439130,11:15,5:29,932,"$3,048,352.00","$2,780,418.00"
IAH - BSB,51082169781,IAH 84A-6 E1,777-300,https://www.airlines-manager.com/network/showline/41559619,https://www.airlines-manager.com/network/showflight/51082169781,https://www.airlines-manager.com/aircraft/show/88905141,20:15,14:29,932,"$3,048,352.00","$2,780,418.00"
IAH - BTV,51043595308,IAH-BTV-CAK 3,A321-200,https://www.airlines-manager.com/network/showline/48841709,https://www.airlines-manager.com/network/showflight/51043595308,https://www.airlines-manager.com/aircraft/show/86385103,0:00,8:14,310,"$515,456.00","$473,729.00"
IAH - BTV,51043595309,IAH-BTV-CAK 5,ERJ-175,https://www.airlines-manager.com/network/showline/48841709,https://www.airlines-manager.com/network/showflight/51043595309,https://www.airlines-manager.com/aircraft/show/82543907,4:15,12:29,112,"$242,896.00","$215,121.00"
IAH - BTV,51054794928,IAH-BTV-CAK 2,A321-200,https://www.airlines-manager.com/network/showline/48841709,https://www.airlines-manager.com/network/showflight/51054794928,https://www.airlines-manager.com/aircraft/show/114373409,7:15,15:29,310,"$515,456.00","$473,729.00"
IAH - BTV,51066574478,IAH-BTV-CAK 1,A321-200,https://www.airlines-manager.com/network/showline/48841709,https://www.airlines-manager.com/network/showflight/51066574478,https://www.airlines-manager.com/aircraft/show/114373410,14:00,22:14,310,"$515,456.00","$473,729.00"
IAH - BTV,51077491481,IAH-BTV-CAK 4,A321-200,https://www.airlines-manager.com/network/showline/48841709,https://www.airlines-manager.com/network/showflight/51077491481,https://www.airlines-manager.com/aircraft/show/113994196,18:45,2:59,310,"$515,456.00","$473,729.00"
IAH - BUF,51043595496,IAH-PVD-BUF 4,A321-200,https://www.airlines-manager.com/network/showline/46824184,https://www.airlines-manager.com/network/showflight/51043595496,https://www.airlines-manager.com/aircraft/show/107467127,1:15,8:14,310,"$451,437.00","$412,770.00"
IAH - BUF,51043595497,IAH-PVD-BUF 3,A321-200,https://www.airlines-manager.com/network/showline/46824184,https://www.airlines-manager.com/network/showflight/51043595497,https://www.airlines-manager.com/aircraft/show/107467128,4:00,10:59,310,"$451,437.00","$412,770.00"
IAH - BUF,51066574322,IAH-PVD-BUF 2,A321-200,https://www.airlines-manager.com/network/showline/46824184,https://www.airlines-manager.com/network/showflight/51066574322,https://www.airlines-manager.com/aircraft/show/107467129,13:00,19:59,310,"$451,437.00","$412,770.00"
IAH - BUF,51071689672,IAH-PVD-BUF 5 B,A319-100,https://www.airlines-manager.com/network/showline/46824184,https://www.airlines-manager.com/network/showflight/51071689672,https://www.airlines-manager.com/aircraft/show/110582843,17:00,23:59,198,"$340,837.00","$309,849.00"
IAH - BUF,51082169883,IAH-PVD-BUF 1,A321-200,https://www.airlines-manager.com/network/showline/46824184,https://www.airlines-manager.com/network/showflight/51082169883,https://www.airlines-manager.com/aircraft/show/107467130,21:15,4:14,310,"$451,437.00","$412,770.00"
IAH - BWI,51043595366,IAH-BWI-PHL 3,A321neo,https://www.airlines-manager.com/network/showline/44225049,https://www.airlines-manager.com/network/showflight/51043595366,https://www.airlines-manager.com/aircraft/show/106007215,0:15,6:59,338,"$465,613.00","$424,242.00"
IAH - BWI,51043595367,IAH CARGO 1,737-700,https://www.airlines-manager.com/network/showline/44225049,https://www.airlines-manager.com/network/showflight/51043595367,https://www.airlines-manager.com/aircraft/show/107543798,4:45,11:44,0,"$114,774.00","$84,056.00"
IAH - BWI,51060918901,IAH-BWI-PHL 2,A321neo,https://www.airlines-manager.com/network/showline/44225049,https://www.airlines-manager.com/network/showflight/51060918901,https://www.airlines-manager.com/aircraft/show/106007214,11:00,17:44,338,"$465,613.00","$424,242.00"
IAH - BWI,51066574474,IAH-BWI-PHL 1,A321neo,https://www.airlines-manager.com/network/showline/44225049,https://www.airlines-manager.com/network/showflight/51066574474,https://www.airlines-manager.com/aircraft/show/106007213,13:45,20:29,338,"$465,613.00","$424,242.00"
IAH - BWI,51066574475,IAH-BWI-PHL 5,A321neo,https://www.airlines-manager.com/network/showline/44225049,https://www.airlines-manager.com/network/showflight/51066574475,https://www.airlines-manager.com/aircraft/show/106007217,14:45,21:29,338,"$465,613.00","$424,242.00"
IAH - BWI,51082169856,IAH-BWI-PHL 4,A321neo,https://www.airlines-manager.com/network/showline/44225049,https://www.airlines-manager.com/network/showflight/51082169856,https://www.airlines-manager.com/aircraft/show/106007216,21:00,3:44,338,"$465,613.00","$424,242.00"
IAH - CAK,51043595668,IAH-BTV-CAK 4,A321-200,https://www.airlines-manager.com/network/showline/48841720,https://www.airlines-manager.com/network/showflight/51043595668,https://www.airlines-manager.com/aircraft/show/113994196,3:00,9:14,310,"$391,705.00","$357,270.00"
IAH - CAK,51054794987,IAH-BTV-CAK 3,A321-200,https://www.airlines-manager.com/network/showline/48841720,https://www.airlines-manager.com/network/showflight/51054794987,https://www.airlines-manager.com/aircraft/show/86385103,8:15,14:29,310,"$391,705.00","$357,270.00"
IAH - CAK,51066574283,IAH-BTV-CAK 5,ERJ-175,https://www.airlines-manager.com/network/showline/48841720,https://www.airlines-manager.com/network/showflight/51066574283,https://www.airlines-manager.com/aircraft/show/82543907,13:00,19:14,112,"$185,120.00","$162,566.00"
IAH - CAK,51071689621,IAH-BTV-CAK 2,A321-200,https://www.airlines-manager.com/network/showline/48841720,https://www.airlines-manager.com/network/showflight/51071689621,https://www.airlines-manager.com/aircraft/show/114373409,16:00,22:14,310,"$391,705.00","$357,270.00"
IAH - CAK,51082169937,IAH-BTV-CAK 1,A321-200,https://www.airlines-manager.com/network/showline/48841720,https://www.airlines-manager.com/network/showflight/51082169937,https://www.airlines-manager.com/aircraft/show/114373410,22:15,4:29,293,"$378,949.00","$345,019.00"
IAH - CHS,51043595545,IAH-RIC-SDF 5,ERJ-175,https://www.airlines-manager.com/network/showline/46824157,https://www.airlines-manager.com/network/showflight/51043595545,https://www.airlines-manager.com/aircraft/show/107467211,1:30,7:14,112,"$169,505.00","$148,348.00"
IAH - CHS,51043595546,IAH-RIC-SDF 4,A321-200,https://www.airlines-manager.com/network/showline/46824157,https://www.airlines-manager.com/network/showflight/51043595546,https://www.airlines-manager.com/aircraft/show/107467131,3:30,9:14,310,"$357,336.00","$324,760.00"
IAH - CHS,51060918985,IAH-RIC-SDF 3,A321-200,https://www.airlines-manager.com/network/showline/46824157,https://www.airlines-manager.com/network/showflight/51060918985,https://www.airlines-manager.com/aircraft/show/107467132,12:00,17:44,310,"$357,336.00","$324,760.00"
IAH - CHS,51077491298,IAH-RIC-SDF 2,A321-200,https://www.airlines-manager.com/network/showline/46824157,https://www.airlines-manager.com/network/showflight/51077491298,https://www.airlines-manager.com/aircraft/show/107467133,17:15,22:59,310,"$357,336.00","$324,760.00"
IAH - CHS,51086541055,IAH-RIC-SDF 1,A321-200,https://www.airlines-manager.com/network/showline/46824157,https://www.airlines-manager.com/network/showflight/51086541055,https://www.airlines-manager.com/aircraft/show/107467134,23:45,5:29,310,"$357,336.00","$324,760.00"
IAH - CLE,51043595593,IAH-CLE-STL 3,A321-200,https://www.airlines-manager.com/network/showline/45495444,https://www.airlines-manager.com/network/showflight/51043595593,https://www.airlines-manager.com/aircraft/show/103600702,2:00,8:14,310,"$398,902.00","$362,191.00"
IAH - CLE,51054794965,IAH-CLE-STL 2,A321-200,https://www.airlines-manager.com/network/showline/45495444,https://www.airlines-manager.com/network/showflight/51054794965,https://www.airlines-manager.com/aircraft/show/103600701,7:45,13:59,310,"$398,902.00","$362,191.00"
IAH - CLE,51066574607,IAH-CLE-STL 1,A321-200,https://www.airlines-manager.com/network/showline/45495444,https://www.airlines-manager.com/network/showflight/51066574607,https://www.airlines-manager.com/aircraft/show/103600700,14:00,20:14,310,"$398,902.00","$362,191.00"
IAH - CLE,51071689566,IAH-CLE-STL 5 B,A319-100,https://www.airlines-manager.com/network/showline/45495444,https://www.airlines-manager.com/network/showflight/51071689566,https://www.airlines-manager.com/aircraft/show/110582844,15:30,21:44,198,"$301,307.00","$271,891.00"
IAH - CLE,51077491500,IAH-CLE-STL 4,A321-200,https://www.airlines-manager.com/network/showline/45495444,https://www.airlines-manager.com/network/showflight/51077491500,https://www.airlines-manager.com/aircraft/show/88725601,19:00,1:14,310,"$398,902.00","$362,191.00"
IAH - CLT,51043595725,IAH-SLC-CLT 3,A321-200,https://www.airlines-manager.com/network/showline/42897996,https://www.airlines-manager.com/network/showflight/51043595725,https://www.airlines-manager.com/aircraft/show/93094697,3:45,9:29,310,"$359,869.00","$317,569.00"
IAH - CLT,51054795085,IAH-SLC-CLT 2,A321-200,https://www.airlines-manager.com/network/showline/42897996,https://www.airlines-manager.com/network/showflight/51054795085,https://www.airlines-manager.com/aircraft/show/93094698,10:00,15:44,310,"$359,869.00","$317,569.00"
IAH - CLT,51060919004,IAH-SLC-CLT 6,ERJ-175,https://www.airlines-manager.com/network/showline/42897996,https://www.airlines-manager.com/network/showflight/51060919004,https://www.airlines-manager.com/aircraft/show/93100455,12:00,17:44,112,"$170,327.00","$143,356.00"
IAH - CLT,51071689661,IAH-SLC-CLT 1,A321-200,https://www.airlines-manager.com/network/showline/42897996,https://www.airlines-manager.com/network/showflight/51071689661,https://www.airlines-manager.com/aircraft/show/93094699,16:45,22:29,310,"$359,869.00","$317,569.00"
IAH - CLT,51077491486,IAH-SLC-CLT 5,A321-200,https://www.airlines-manager.com/network/showline/42897996,https://www.airlines-manager.com/network/showflight/51077491486,https://www.airlines-manager.com/aircraft/show/93094695,18:45,0:29,310,"$359,869.00","$317,569.00"
IAH - CLT,51082169931,IAH-SLC-CLT 4,A321-200,https://www.airlines-manager.com/network/showline/42897996,https://www.airlines-manager.com/network/showflight/51082169931,https://www.airlines-manager.com/aircraft/show/93094696,22:00,3:44,310,"$359,869.00","$317,569.00"
IAH - CMH,51054794911,IAH-RNO-MCI 1,A321-200,https://www.airlines-manager.com/network/showline/45594509,https://www.airlines-manager.com/network/showflight/51054794911,https://www.airlines-manager.com/aircraft/show/103882355,7:00,12:59,310,"$377,259.00","$341,992.00"
IAH - CMH,51060918927,IAH-RNO-MCI 4,A321-200,https://www.airlines-manager.com/network/showline/45594509,https://www.airlines-manager.com/network/showflight/51060918927,https://www.airlines-manager.com/aircraft/show/103882358,11:00,16:59,310,"$377,259.00","$341,992.00"
IAH - CMH,51060918928,IAH-RNO-MCI 5,ERJ-175,https://www.airlines-manager.com/network/showline/45594509,https://www.airlines-manager.com/network/showflight/51060918928,https://www.airlines-manager.com/aircraft/show/105099861,12:00,17:59,112,"$178,275.00","$155,395.00"
IAH - CMH,51077491535,IAH-RNO-MCI 3,A321-200,https://www.airlines-manager.com/network/showline/45594509,https://www.airlines-manager.com/network/showflight/51077491535,https://www.airlines-manager.com/aircraft/show/103882357,19:15,1:14,310,"$377,259.00","$341,992.00"
IAH - CMH,51086541010,IAH-RNO-MCI 2,A321-200,https://www.airlines-manager.com/network/showline/45594509,https://www.airlines-manager.com/network/showflight/51086541010,https://www.airlines-manager.com/aircraft/show/103882356,23:00,4:59,310,"$377,259.00","$341,992.00"
IAH - COS,51043595562,IAH-RNO-MCI 1,A321-200,https://www.airlines-manager.com/network/showline/45594506,https://www.airlines-manager.com/network/showflight/51043595562,https://www.airlines-manager.com/aircraft/show/103882355,1:45,6:59,310,"$330,287.00","$297,372.00"
IAH - COS,51043595563,IAH-RNO-MCI 4,A321-200,https://www.airlines-manager.com/network/showline/45594506,https://www.airlines-manager.com/network/showflight/51043595563,https://www.airlines-manager.com/aircraft/show/103882358,5:45,10:59,310,"$330,287.00","$297,372.00"
IAH - COS,51066574604,IAH-RNO-MCI 3,A321-200,https://www.airlines-manager.com/network/showline/45594506,https://www.airlines-manager.com/network/showflight/51066574604,https://www.airlines-manager.com/aircraft/show/103882357,14:00,19:14,310,"$330,287.00","$297,372.00"
IAH - COS,51077491385,IAH-RNO-MCI 2,A321-200,https://www.airlines-manager.com/network/showline/45594506,https://www.airlines-manager.com/network/showflight/51077491385,https://www.airlines-manager.com/aircraft/show/103882356,17:45,22:59,310,"$330,287.00","$297,372.00"
IAH - COS,51086540995,IAH-RNO-MCI 5,ERJ-175,https://www.airlines-manager.com/network/showline/45594506,https://www.airlines-manager.com/network/showflight/51086540995,https://www.airlines-manager.com/aircraft/show/105099861,22:45,3:59,112,"$157,034.00","$135,873.00"
IAH - CUN,51043595453,IAH 56A-3 B,787-10,https://www.airlines-manager.com/network/showline/41805427,https://www.airlines-manager.com/network/showflight/51043595453,https://www.airlines-manager.com/aircraft/show/106676234,1:00,5:59,648,"$622,330.00","$569,221.00"
IAH - CUN,51066574272,IAH 56A-4 B,787-10,https://www.airlines-manager.com/network/showline/41805427,https://www.airlines-manager.com/network/showflight/51066574272,https://www.airlines-manager.com/aircraft/show/106676235,12:30,17:29,648,"$622,330.00","$569,221.00"
IAH - CUN,51082169810,IAH 56A-6 B,787-10,https://www.airlines-manager.com/network/showline/41805427,https://www.airlines-manager.com/network/showflight/51082169810,https://www.airlines-manager.com/aircraft/show/106676237,20:30,1:29,648,"$622,330.00","$569,221.00"
IAH - CVG,51043595346,IAH-SMF-CVG 4,737-900ER,https://www.airlines-manager.com/network/showline/44841050,https://www.airlines-manager.com/network/showflight/51043595346,https://www.airlines-manager.com/aircraft/show/99093332,0:15,5:44,320,"$346,138.00","$305,437.00"
IAH - CVG,51043595347,IAH-SMF-CVG 3,737-900ER,https://www.airlines-manager.com/network/showline/44841050,https://www.airlines-manager.com/network/showflight/51043595347,https://www.airlines-manager.com/aircraft/show/99093333,4:00,9:29,320,"$346,138.00","$305,437.00"
IAH - CVG,51054794976,IAH-SMF-CVG 2,737-900ER,https://www.airlines-manager.com/network/showline/44841050,https://www.airlines-manager.com/network/showflight/51054794976,https://www.airlines-manager.com/aircraft/show/99093334,8:00,13:29,320,"$346,138.00","$305,437.00"
IAH - CVG,51066574614,IAH-SMF-CVG 1,737-900ER,https://www.airlines-manager.com/network/showline/44841050,https://www.airlines-manager.com/network/showflight/51066574614,https://www.airlines-manager.com/aircraft/show/99093335,14:00,19:29,320,"$346,138.00","$305,437.00"
IAH - CVG,51071689572,IAH CARGO 2,A320-200,https://www.airlines-manager.com/network/showline/44841050,https://www.airlines-manager.com/network/showflight/51071689572,https://www.airlines-manager.com/aircraft/show/101412921,15:45,21:14,0,"$107,998.00","$73,817.00"
IAH - CVG,51071689573,IAH-SMF-CVG 5 B,A319-100,https://www.airlines-manager.com/network/showline/44841050,https://www.airlines-manager.com/network/showflight/51071689573,https://www.airlines-manager.com/aircraft/show/106499070,16:00,21:29,198,"$262,645.00","$234,118.00"
IAH - DEN,51060918997,IAH-SEA-DEN 5,A321neo,https://www.airlines-manager.com/network/showline/41444690,https://www.airlines-manager.com/network/showflight/51060918997,https://www.airlines-manager.com/aircraft/show/105562975,12:00,17:29,338,"$376,616.00","$323,382.00"
IAH - DEN,51066574428,IAH-SEA-DEN 1,A321neo,https://www.airlines-manager.com/network/showline/41444690,https://www.airlines-manager.com/network/showflight/51066574428,https://www.airlines-manager.com/aircraft/show/105562971,13:00,18:29,338,"$376,616.00","$323,382.00"
IAH - DEN,51086540963,IAH-SEA-DEN 2,A321neo,https://www.airlines-manager.com/network/showline/41444690,https://www.airlines-manager.com/network/showflight/51086540963,https://www.airlines-manager.com/aircraft/show/105562972,22:30,3:59,338,"$376,616.00","$323,382.00"
IAH - DEN,51086540964,IAH-SEA-DEN 3,A321neo,https://www.airlines-manager.com/network/showline/41444690,https://www.airlines-manager.com/network/showflight/51086540964,https://www.airlines-manager.com/aircraft/show/105562973,23:00,4:29,338,"$376,616.00","$323,382.00"
IAH - DEN,51086540965,IAH CARGO 1,737-700,https://www.airlines-manager.com/network/showline/41444690,https://www.airlines-manager.com/network/showflight/51086540965,https://www.airlines-manager.com/aircraft/show/107543798,23:15,4:44,0,"$93,110.00","$57,053.00"
IAH - DEN,51086540966,IAH-SEA-DEN 4,A321neo,https://www.airlines-manager.com/network/showline/41444690,https://www.airlines-manager.com/network/showflight/51086540966,https://www.airlines-manager.com/aircraft/show/105562974,23:30,4:59,338,"$376,616.00","$323,382.00"
IAH - DFW,51043595450,IAH-SMF-CVG 3,737-900ER,https://www.airlines-manager.com/network/showline/41920952,https://www.airlines-manager.com/network/showflight/51043595450,https://www.airlines-manager.com/aircraft/show/99093333,1:00,3:59,320,"$130,428.00","$82,834.00"
IAH - DFW,51043595451,IAH-SMF-CVG 2,737-900ER,https://www.airlines-manager.com/network/showline/41920952,https://www.airlines-manager.com/network/showflight/51043595451,https://www.airlines-manager.com/aircraft/show/99093334,5:00,7:59,320,"$130,428.00","$82,834.00"
IAH - DFW,51060918931,IAH-SMF-CVG 1,737-900ER,https://www.airlines-manager.com/network/showline/41920952,https://www.airlines-manager.com/network/showflight/51060918931,https://www.airlines-manager.com/aircraft/show/99093335,11:00,13:59,320,"$130,428.00","$82,834.00"
IAH - DFW,51060918932,IAH-DFW-STL,ERJ-175,https://www.airlines-manager.com/network/showline/41920952,https://www.airlines-manager.com/network/showflight/51060918932,https://www.airlines-manager.com/aircraft/show/96990010,12:00,14:59,112,"$58,259.00","$33,809.00"
IAH - DFW,51066574309,IAH CARGO 1,737-700,https://www.airlines-manager.com/network/showline/41920952,https://www.airlines-manager.com/network/showflight/51066574309,https://www.airlines-manager.com/aircraft/show/107543798,13:00,15:59,0,"$39,182.00","$14,220.00"
IAH - DFW,51066574310,IAH-SMF-CVG 5 B,A319-100,https://www.airlines-manager.com/network/showline/41920952,https://www.airlines-manager.com/network/showflight/51066574310,https://www.airlines-manager.com/aircraft/show/106499070,13:00,15:59,198,"$98,047.00","$65,959.00"
IAH - DFW,51082169871,IAH-SMF-CVG 4,737-900ER,https://www.airlines-manager.com/network/showline/41920952,https://www.airlines-manager.com/network/showflight/51082169871,https://www.airlines-manager.com/aircraft/show/99093332,21:15,0:14,320,"$130,428.00","$82,834.00"
IAH - DSM,51043595690,IAH-FAT-SAV 1,737-900ER,https://www.airlines-manager.com/network/showline/47654556,https://www.airlines-manager.com/network/showflight/51043595690,https://www.airlines-manager.com/aircraft/show/110424761,3:15,8:29,320,"$331,460.00","$296,530.00"
IAH - DSM,51054795028,IAH-FAT-SAV 4,737-900ER,https://www.airlines-manager.com/network/showline/47654556,https://www.airlines-manager.com/network/showflight/51054795028,https://www.airlines-manager.com/aircraft/show/110424758,8:45,13:59,320,"$331,460.00","$296,530.00"
IAH - DSM,51066574488,IAH-FAT-SAV 3,737-900ER,https://www.airlines-manager.com/network/showline/47654556,https://www.airlines-manager.com/network/showflight/51066574488,https://www.airlines-manager.com/aircraft/show/110424759,14:00,19:14,320,"$331,460.00","$296,530.00"
IAH - DSM,51077491471,IAH-FAT-SAV 2,737-900ER,https://www.airlines-manager.com/network/showline/47654556,https://www.airlines-manager.com/network/showflight/51077491471,https://www.airlines-manager.com/aircraft/show/110424760,18:30,23:44,320,"$331,460.00","$296,530.00"
IAH - DTW,51043595396,IAH-MIA-ORD 1,A321-200,https://www.airlines-manager.com/network/showline/41960920,https://www.airlines-manager.com/network/showflight/51043595396,https://www.airlines-manager.com/aircraft/show/90183184,0:30,6:44,310,"$393,702.00","$348,945.00"
IAH - DTW,51043595397,IAH-MIA-ORD 5,A321-200,https://www.airlines-manager.com/network/showline/41960920,https://www.airlines-manager.com/network/showflight/51043595397,https://www.airlines-manager.com/aircraft/show/90183180,2:30,8:44,310,"$393,702.00","$348,945.00"
IAH - DTW,51043595398,IAH-MIA-ORD 4,A321-200,https://www.airlines-manager.com/network/showline/41960920,https://www.airlines-manager.com/network/showflight/51043595398,https://www.airlines-manager.com/aircraft/show/90183181,6:00,12:14,310,"$393,702.00","$348,945.00"
IAH - DTW,51066574337,IAH-MIA-ORD 3,A321-200,https://www.airlines-manager.com/network/showline/41960920,https://www.airlines-manager.com/network/showflight/51066574337,https://www.airlines-manager.com/aircraft/show/90183182,13:00,19:14,310,"$393,702.00","$348,945.00"
IAH - DTW,51077491494,IAH-MIA-ORD 2,A321-200,https://www.airlines-manager.com/network/showline/41960920,https://www.airlines-manager.com/network/showflight/51077491494,https://www.airlines-manager.com/aircraft/show/90183183,18:45,0:59,310,"$393,702.00","$348,945.00"
IAH - DTW,51082169837,IAH-MIA-ORD 6 S,ERJ-175,https://www.airlines-manager.com/network/showline/41960920,https://www.airlines-manager.com/network/showflight/51082169837,https://www.airlines-manager.com/aircraft/show/90140936,20:45,2:59,136,"$187,242.00","$158,696.00"
IAH - ELP,51043595712,IAH-PBI-RSW 3,A321-200,https://www.airlines-manager.com/network/showline/45920394,https://www.airlines-manager.com/network/showflight/51043595712,https://www.airlines-manager.com/aircraft/show/104717245,3:30,8:14,310,"$299,097.00","$268,740.00"
IAH - ELP,51060918923,IAH-PBI-RSW 2,A321-200,https://www.airlines-manager.com/network/showline/45920394,https://www.airlines-manager.com/network/showflight/51060918923,https://www.airlines-manager.com/aircraft/show/104717246,11:00,15:44,310,"$299,097.00","$268,740.00"
IAH - ELP,51071689662,IAH-PBI-RSW 1,A321-200,https://www.airlines-manager.com/network/showline/45920394,https://www.airlines-manager.com/network/showflight/51071689662,https://www.airlines-manager.com/aircraft/show/104717247,16:45,21:29,310,"$299,097.00","$268,740.00"
IAH - ELP,51077491514,IAH-PBI-RSW 5,ERJ-175,https://www.airlines-manager.com/network/showline/45920394,https://www.airlines-manager.com/network/showflight/51077491514,https://www.airlines-manager.com/aircraft/show/104743902,19:00,23:44,112,"$142,558.00","$123,181.00"
IAH - ELP,51082169925,IAH-PBI-RSW 4,A321-200,https://www.airlines-manager.com/network/showline/45920394,https://www.airlines-manager.com/network/showflight/51082169925,https://www.airlines-manager.com/aircraft/show/104717244,22:00,2:44,310,"$299,097.00","$268,740.00"
IAH - EZE,51043595740,IAH 84A-1 E1,777-300,https://www.airlines-manager.com/network/showline/41556672,https://www.airlines-manager.com/network/showflight/51043595740,https://www.airlines-manager.com/aircraft/show/89439131,4:00,0:29,932,"$3,357,892.00","$3,060,630.00"
IAH - EZE,51043595741,IAH 84A-3 E1,777-300,https://www.airlines-manager.com/network/showline/41556672,https://www.airlines-manager.com/network/showflight/51043595741,https://www.airlines-manager.com/aircraft/show/89124076,5:30,1:59,932,"$3,357,892.00","$3,060,630.00"
IAH - FAR,51043595518,IAH-MSO-FAR 4,737-900ER,https://www.airlines-manager.com/network/showline/47654615,https://www.airlines-manager.com/network/showflight/51043595518,https://www.airlines-manager.com/aircraft/show/110424754,1:30,8:14,320,"$416,723.00","$376,276.00"
IAH - FAR,51043595519,IAH-MSO-FAR 3,737-900ER,https://www.airlines-manager.com/network/showline/47654615,https://www.airlines-manager.com/network/showflight/51043595519,https://www.airlines-manager.com/aircraft/show/110424755,4:15,10:59,320,"$416,723.00","$376,276.00"
IAH - FAR,51060918970,IAH-MSO-FAR 2,737-900ER,https://www.airlines-manager.com/network/showline/47654615,https://www.airlines-manager.com/network/showflight/51060918970,https://www.airlines-manager.com/aircraft/show/110424756,12:00,18:44,320,"$416,723.00","$376,276.00"
IAH - FAR,51082169919,IAH-MSO-FAR 1,737-900ER,https://www.airlines-manager.com/network/showline/47654615,https://www.airlines-manager.com/network/showflight/51082169919,https://www.airlines-manager.com/aircraft/show/110424757,22:00,4:44,320,"$416,723.00","$376,276.00"
IAH - FAT,51043595744,IAH-FAT-SAV 2,737-900ER,https://www.airlines-manager.com/network/showline/47654561,https://www.airlines-manager.com/network/showflight/51043595744,https://www.airlines-manager.com/aircraft/show/110424760,4:00,11:44,320,"$496,239.00","$450,786.00"
IAH - FAT,51066574489,IAH-FAT-SAV 1,737-900ER,https://www.airlines-manager.com/network/showline/47654561,https://www.airlines-manager.com/network/showflight/51066574489,https://www.airlines-manager.com/aircraft/show/110424761,14:00,21:44,320,"$496,239.00","$450,786.00"
IAH - FAT,51077491455,IAH-FAT-SAV 4,737-900ER,https://www.airlines-manager.com/network/showline/47654561,https://www.airlines-manager.com/network/showflight/51077491455,https://www.airlines-manager.com/aircraft/show/110424758,18:15,1:59,320,"$496,239.00","$450,786.00"
IAH - FAT,51086541044,IAH-FAT-SAV 3,737-900ER,https://www.airlines-manager.com/network/showline/47654561,https://www.airlines-manager.com/network/showflight/51086541044,https://www.airlines-manager.com/aircraft/show/110424759,23:30,7:14,320,"$496,239.00","$450,786.00"
IAH - FLL,51043595391,IAH-SLC-CLT 5,A321-200,https://www.airlines-manager.com/network/showline/42890581,https://www.airlines-manager.com/network/showflight/51043595391,https://www.airlines-manager.com/aircraft/show/93094695,0:30,6:14,310,"$366,539.00","$329,311.00"
IAH - FLL,51043595392,IAH-SLC-CLT 4,A321-200,https://www.airlines-manager.com/network/showline/42890581,https://www.airlines-manager.com/network/showflight/51043595392,https://www.airlines-manager.com/aircraft/show/93094696,3:45,9:29,310,"$366,539.00","$329,311.00"
IAH - FLL,51054795084,IAH-SLC-CLT 3,A321-200,https://www.airlines-manager.com/network/showline/42890581,https://www.airlines-manager.com/network/showflight/51054795084,https://www.airlines-manager.com/aircraft/show/93094697,10:00,15:44,310,"$366,539.00","$329,311.00"
IAH - FLL,51071689585,IAH-SLC-CLT 2,A321-200,https://www.airlines-manager.com/network/showline/42890581,https://www.airlines-manager.com/network/showflight/51071689585,https://www.airlines-manager.com/aircraft/show/93094698,15:45,21:29,310,"$366,539.00","$329,311.00"
IAH - FLL,51077491370,IAH-SLC-CLT 6,ERJ-175,https://www.airlines-manager.com/network/showline/42890581,https://www.airlines-manager.com/network/showflight/51077491370,https://www.airlines-manager.com/aircraft/show/93100455,17:45,23:29,112,"$173,913.00","$149,893.00"
IAH - FLL,51086540954,IAH-SLC-CLT 1,A321-200,https://www.airlines-manager.com/network/showline/42890581,https://www.airlines-manager.com/network/showflight/51086540954,https://www.airlines-manager.com/aircraft/show/93094699,22:30,4:14,310,"$366,539.00","$329,311.00"
IAH - FSD,51043595781,IAH-MSO-FAR 1,737-900ER,https://www.airlines-manager.com/network/showline/47654619,https://www.airlines-manager.com/network/showflight/51043595781,https://www.airlines-manager.com/aircraft/show/110424757,4:45,10:29,320,"$361,497.00","$324,662.00"
IAH - FSD,51054794989,IAH-MSO-FAR 4,737-900ER,https://www.airlines-manager.com/network/showline/47654619,https://www.airlines-manager.com/network/showflight/51054794989,https://www.airlines-manager.com/aircraft/show/110424754,8:15,13:59,320,"$361,497.00","$324,662.00"
IAH - FSD,51060918875,IAH-MSO-FAR 3,737-900ER,https://www.airlines-manager.com/network/showline/47654619,https://www.airlines-manager.com/network/showflight/51060918875,https://www.airlines-manager.com/aircraft/show/110424755,11:00,16:44,320,"$361,497.00","$324,662.00"
IAH - FSD,51077491491,IAH-MSO-FAR 2,737-900ER,https://www.airlines-manager.com/network/showline/47654619,https://www.airlines-manager.com/network/showflight/51077491491,https://www.airlines-manager.com/aircraft/show/110424756,18:45,0:29,280,"$334,061.00","$298,241.00"
IAH - GDL,51043595784,IAH-YYC-YUL 1,757-300,https://www.airlines-manager.com/network/showline/48842057,https://www.airlines-manager.com/network/showflight/51043595784,https://www.airlines-manager.com/aircraft/show/114266977,4:45,9:59,400,"$437,939.00","$395,426.00"
IAH - GDL,51060918859,IAH-YYC-YUL 4,757-300,https://www.airlines-manager.com/network/showline/48842057,https://www.airlines-manager.com/network/showflight/51060918859,https://www.airlines-manager.com/aircraft/show/114266980,10:45,15:59,400,"$437,939.00","$395,426.00"
IAH - GDL,51060918860,IAH-YYC-YUL 3,757-300,https://www.airlines-manager.com/network/showline/48842057,https://www.airlines-manager.com/network/showflight/51060918860,https://www.airlines-manager.com/aircraft/show/114266979,12:00,17:14,400,"$437,939.00","$395,426.00"
IAH - GDL,51077491584,IAH-YYC-YUL 2,757-300,https://www.airlines-manager.com/network/showline/48842057,https://www.airlines-manager.com/network/showflight/51077491584,https://www.airlines-manager.com/aircraft/show/114266978,20:00,1:14,355,"$395,098.00","$353,783.00"
IAH - GIG,51043595328,IAH 84A-6 E1,777-300,https://www.airlines-manager.com/network/showline/41556659,https://www.airlines-manager.com/network/showflight/51043595328,https://www.airlines-manager.com/aircraft/show/88905141,0:00,20:14,932,"$3,368,144.00","$3,065,499.00"
IAH - GIG,51043595329,IAH 84A-4 E1,777-300,https://www.airlines-manager.com/network/showline/41556659,https://www.airlines-manager.com/network/showflight/51043595329,https://www.airlines-manager.com/aircraft/show/89124075,2:00,22:14,932,"$3,368,144.00","$3,065,499.00"
IAH - GRU,51043595452,IAH 56A-6 B,787-10,https://www.airlines-manager.com/network/showline/41769042,https://www.airlines-manager.com/network/showflight/51043595452,https://www.airlines-manager.com/aircraft/show/106676237,1:00,20:29,648,"$2,471,276.00","$2,301,634.00"
IAH - GRU,51060918893,IAH 56A-1 B,787-10,https://www.airlines-manager.com/network/showline/41769042,https://www.airlines-manager.com/network/showflight/51060918893,https://www.airlines-manager.com/aircraft/show/106676232,11:00,6:29,648,"$2,471,276.00","$2,301,634.00"
IAH - GRU,51071689678,IAH 56A-3 B,787-10,https://www.airlines-manager.com/network/showline/41769042,https://www.airlines-manager.com/network/showflight/51071689678,https://www.airlines-manager.com/aircraft/show/106676234,17:00,12:29,648,"$2,471,276.00","$2,301,634.00"
IAH - IAD,51043595713,IAH-IAD-SAN 6,ERJ-175,https://www.airlines-manager.com/network/showline/44653691,https://www.airlines-manager.com/network/showflight/51043595713,https://www.airlines-manager.com/aircraft/show/105400635,3:30,10:14,112,"$198,618.00","$170,364.00"
IAH - IAD,51054794895,IAH-IAD-SAN 2,737-900ER,https://www.airlines-manager.com/network/showline/44653691,https://www.airlines-manager.com/network/showflight/51054794895,https://www.airlines-manager.com/aircraft/show/98578923,6:45,13:29,320,"$421,272.00","$371,688.00"
IAH - IAD,51054794896,IAH-IAD-SAN 5,737-900ER,https://www.airlines-manager.com/network/showline/44653691,https://www.airlines-manager.com/network/showflight/51054794896,https://www.airlines-manager.com/aircraft/show/98578920,9:45,16:29,320,"$421,272.00","$371,688.00"
IAH - IAD,51066574317,IAH-IAD-SAN 1,737-900ER,https://www.airlines-manager.com/network/showline/44653691,https://www.airlines-manager.com/network/showflight/51066574317,https://www.airlines-manager.com/aircraft/show/98578924,13:00,19:44,320,"$421,272.00","$371,688.00"
IAH - IAD,51077491412,IAH-IAD-SAN 4,737-900ER,https://www.airlines-manager.com/network/showline/44653691,https://www.airlines-manager.com/network/showflight/51077491412,https://www.airlines-manager.com/aircraft/show/98578921,18:00,0:44,320,"$421,272.00","$371,688.00"
IAH - IAD,51082169893,IAH-IAD-SAN 3,737-900ER,https://www.airlines-manager.com/network/showline/44653691,https://www.airlines-manager.com/network/showflight/51082169893,https://www.airlines-manager.com/aircraft/show/98578922,21:30,4:14,320,"$421,272.00","$371,688.00"
IAH - ICT,51054795060,IAH-FAT-SAV 1,737-900ER,https://www.airlines-manager.com/network/showline/47654551,https://www.airlines-manager.com/network/showflight/51054795060,https://www.airlines-manager.com/aircraft/show/110424761,9:45,13:59,320,"$249,753.00","$218,169.00"
IAH - ICT,51066574487,IAH-FAT-SAV 4,737-900ER,https://www.airlines-manager.com/network/showline/47654551,https://www.airlines-manager.com/network/showflight/51066574487,https://www.airlines-manager.com/aircraft/show/110424758,14:00,18:14,320,"$249,753.00","$218,169.00"
IAH - ICT,51077491539,IAH-FAT-SAV 3,737-900ER,https://www.airlines-manager.com/network/showline/47654551,https://www.airlines-manager.com/network/showflight/51077491539,https://www.airlines-manager.com/aircraft/show/110424759,19:15,23:29,320,"$249,753.00","$218,169.00"
IAH - ICT,51086541062,IAH-FAT-SAV 2,737-900ER,https://www.airlines-manager.com/network/showline/47654551,https://www.airlines-manager.com/network/showflight/51086541062,https://www.airlines-manager.com/aircraft/show/110424760,23:45,3:59,316,"$247,873.00","$216,347.00"
IAH - IND,51043595305,IAH-PIT-RDU 1,A321-200,https://www.airlines-manager.com/network/showline/45170732,https://www.airlines-manager.com/network/showflight/51043595305,https://www.airlines-manager.com/aircraft/show/100684074,0:00,5:29,310,"$342,563.00","$308,697.00"
IAH - IND,51043595306,IAH-PIT-RDU 5 B,A319-100,https://www.airlines-manager.com/network/showline/45170732,https://www.airlines-manager.com/network/showflight/51043595306,https://www.airlines-manager.com/aircraft/show/110582845,4:45,10:14,198,"$259,749.00","$232,620.00"
IAH - IND,51043595307,IAH-PIT-RDU 4,A321-200,https://www.airlines-manager.com/network/showline/45170732,https://www.airlines-manager.com/network/showflight/51043595307,https://www.airlines-manager.com/aircraft/show/100684071,6:00,11:29,310,"$342,563.00","$308,697.00"
IAH - IND,51060918953,IAH-PIT-RDU 3,A321-200,https://www.airlines-manager.com/network/showline/45170732,https://www.airlines-manager.com/network/showflight/51060918953,https://www.airlines-manager.com/aircraft/show/100684072,11:30,16:59,310,"$342,563.00","$308,697.00"
IAH - IND,51077491374,IAH-PIT-RDU 2,A321-200,https://www.airlines-manager.com/network/showline/45170732,https://www.airlines-manager.com/network/showflight/51077491374,https://www.airlines-manager.com/aircraft/show/100684073,17:45,23:14,310,"$342,563.00","$308,697.00"
IAH - JAN,51043595390,IAH-MSO-FAR 2,737-900ER,https://www.airlines-manager.com/network/showline/47654614,https://www.airlines-manager.com/network/showflight/51043595390,https://www.airlines-manager.com/aircraft/show/110424756,0:30,3:59,320,"$176,739.00","$149,288.00"
IAH - JAN,51060918849,IAH-MSO-FAR 1,737-900ER,https://www.airlines-manager.com/network/showline/47654614,https://www.airlines-manager.com/network/showflight/51060918849,https://www.airlines-manager.com/aircraft/show/110424757,10:30,13:59,320,"$176,739.00","$149,288.00"
IAH - JAN,51066574491,IAH-MSO-FAR 4,737-900ER,https://www.airlines-manager.com/network/showline/47654614,https://www.airlines-manager.com/network/showflight/51066574491,https://www.airlines-manager.com/aircraft/show/110424754,14:00,17:29,320,"$176,739.00","$149,288.00"
IAH - JAN,51071689665,IAH-MSO-FAR 3,737-900ER,https://www.airlines-manager.com/network/showline/47654614,https://www.airlines-manager.com/network/showflight/51071689665,https://www.airlines-manager.com/aircraft/show/110424755,16:45,20:14,307,"$172,390.00","$145,061.00"
IAH - JAX,51043595683,IAH-PBI-RSW 1,A321-200,https://www.airlines-manager.com/network/showline/45920385,https://www.airlines-manager.com/network/showflight/51043595683,https://www.airlines-manager.com/aircraft/show/104717247,3:00,8:14,310,"$336,348.00","$304,120.00"
IAH - JAX,51054794982,IAH-PBI-RSW 5,ERJ-175,https://www.airlines-manager.com/network/showline/45920385,https://www.airlines-manager.com/network/showflight/51054794982,https://www.airlines-manager.com/aircraft/show/104743902,8:00,13:14,112,"$159,544.00","$138,784.00"
IAH - JAX,51060918921,IAH-PBI-RSW 4,A321-200,https://www.airlines-manager.com/network/showline/45920385,https://www.airlines-manager.com/network/showflight/51060918921,https://www.airlines-manager.com/aircraft/show/104717244,11:00,16:14,310,"$336,348.00","$304,120.00"
IAH - JAX,51071689655,IAH-PBI-RSW 3,A321-200,https://www.airlines-manager.com/network/showline/45920385,https://www.airlines-manager.com/network/showflight/51071689655,https://www.airlines-manager.com/aircraft/show/104717245,16:30,21:44,310,"$336,348.00","$304,120.00"
IAH - JAX,51082169884,IAH-PBI-RSW 2,A321-200,https://www.airlines-manager.com/network/showline/45920385,https://www.airlines-manager.com/network/showflight/51082169884,https://www.airlines-manager.com/aircraft/show/104717246,21:15,2:29,310,"$336,348.00","$304,120.00"
IAH - JFK,51043595583,IAH-JFK-LAX 5,757-300,https://www.airlines-manager.com/network/showline/41429004,https://www.airlines-manager.com/network/showflight/51043595583,https://www.airlines-manager.com/aircraft/show/89233038,2:00,9:29,400,"$619,322.00","$546,013.00"
IAH - JFK,51060918862,IAH-JFK-LAX 1,757-300,https://www.airlines-manager.com/network/showline/41429004,https://www.airlines-manager.com/network/showflight/51060918862,https://www.airlines-manager.com/aircraft/show/88400798,11:00,18:29,400,"$619,322.00","$546,013.00"
IAH - JFK,51077491452,IAH-JFK-LAX 3,757-300,https://www.airlines-manager.com/network/showline/41429004,https://www.airlines-manager.com/network/showflight/51077491452,https://www.airlines-manager.com/aircraft/show/88400800,18:15,1:44,400,"$619,322.00","$546,013.00"
IAH - JFK,51077491453,IAH-JFK-LAX 2,757-300,https://www.airlines-manager.com/network/showline/41429004,https://www.airlines-manager.com/network/showflight/51077491453,https://www.airlines-manager.com/aircraft/show/88400799,19:15,2:44,400,"$619,322.00","$546,013.00"
IAH - JFK,51082169874,IAH-JFK-LAX 4,757-300,https://www.airlines-manager.com/network/showline/41429004,https://www.airlines-manager.com/network/showflight/51082169874,https://www.airlines-manager.com/aircraft/show/88400801,21:15,4:44,400,"$619,322.00","$546,013.00"
IAH - LAS,51043595750,IAH-LAS-ATL 1,737-900ER,https://www.airlines-manager.com/network/showline/41475884,https://www.airlines-manager.com/network/showflight/51043595750,https://www.airlines-manager.com/aircraft/show/96256511,4:00,10:44,320,"$427,825.00","$366,344.00"
IAH - LAS,51043595751,IAH-LAS-ATL 2,737-900ER,https://www.airlines-manager.com/network/showline/41475884,https://www.airlines-manager.com/network/showflight/51043595751,https://www.airlines-manager.com/aircraft/show/96250652,5:00,11:44,320,"$427,825.00","$366,344.00"
IAH - LAS,51043595752,IAH-DFW-STL,ERJ-175,https://www.airlines-manager.com/network/showline/41475884,https://www.airlines-manager.com/network/showflight/51043595752,https://www.airlines-manager.com/aircraft/show/96990010,5:15,11:59,112,"$201,346.00","$167,052.00"
IAH - LAS,51060918933,IAH-LAS-ATL 4,737-900ER,https://www.airlines-manager.com/network/showline/41475884,https://www.airlines-manager.com/network/showflight/51060918933,https://www.airlines-manager.com/aircraft/show/96177955,11:00,17:44,320,"$427,825.00","$366,344.00"
IAH - LAS,51066574632,IAH-LAS-ATL 5,737-900ER,https://www.airlines-manager.com/network/showline/41475884,https://www.airlines-manager.com/network/showflight/51066574632,https://www.airlines-manager.com/aircraft/show/95894466,14:45,21:29,320,"$427,825.00","$366,344.00"
IAH - LAS,51077491353,IAH-LAS-ATL 6,ERJ-175,https://www.airlines-manager.com/network/showline/41475884,https://www.airlines-manager.com/network/showflight/51077491353,https://www.airlines-manager.com/aircraft/show/82323704,17:30,0:14,112,"$201,346.00","$167,052.00"
IAH - LAS,51082169836,IAH-LAS-ATL 3,737-900ER,https://www.airlines-manager.com/network/showline/41475884,https://www.airlines-manager.com/network/showflight/51082169836,https://www.airlines-manager.com/aircraft/show/96183549,20:45,3:29,320,"$427,825.00","$366,344.00"
IAH - LAX,51043595635,IAH-JFK-LAX 2,757-300,https://www.airlines-manager.com/network/showline/41429006,https://www.airlines-manager.com/network/showflight/51043595635,https://www.airlines-manager.com/aircraft/show/88400799,2:45,9:59,400,"$606,964.00","$534,791.00"
IAH - LAX,51043595636,IAH-JFK-LAX 1,757-300,https://www.airlines-manager.com/network/showline/41429006,https://www.airlines-manager.com/network/showflight/51043595636,https://www.airlines-manager.com/aircraft/show/88400798,3:45,10:59,400,"$606,964.00","$534,791.00"
IAH - LAX,51043595637,IAH-JFK-LAX 4,757-300,https://www.airlines-manager.com/network/showline/41429006,https://www.airlines-manager.com/network/showflight/51043595637,https://www.airlines-manager.com/aircraft/show/88400801,4:45,11:59,400,"$606,964.00","$534,791.00"
IAH - LAX,51060918851,IAH-JFK-LAX 5,757-300,https://www.airlines-manager.com/network/showline/41429006,https://www.airlines-manager.com/network/showflight/51060918851,https://www.airlines-manager.com/aircraft/show/89233038,10:30,17:44,400,"$606,964.00","$534,791.00"
IAH - LAX,51060918852,IAH-JFK-LAX 3,757-300,https://www.airlines-manager.com/network/showline/41429006,https://www.airlines-manager.com/network/showflight/51060918852,https://www.airlines-manager.com/aircraft/show/88400800,11:00,18:14,400,"$606,964.00","$534,791.00"
IAH - LEX,51043595774,IAH-BTV-CAK 1,A321-200,https://www.airlines-manager.com/network/showline/48841727,https://www.airlines-manager.com/network/showflight/51043595774,https://www.airlines-manager.com/aircraft/show/114373410,4:30,9:44,310,"$333,424.00","$303,446.00"
IAH - LEX,51054795045,IAH-BTV-CAK 4,A321-200,https://www.airlines-manager.com/network/showline/48841727,https://www.airlines-manager.com/network/showflight/51054795045,https://www.airlines-manager.com/aircraft/show/113994196,9:15,14:29,310,"$333,424.00","$303,446.00"
IAH - LEX,51071689481,IAH-BTV-CAK 3,A321-200,https://www.airlines-manager.com/network/showline/48841727,https://www.airlines-manager.com/network/showflight/51071689481,https://www.airlines-manager.com/aircraft/show/86385103,15:00,20:14,310,"$333,424.00","$303,446.00"
IAH - LEX,51077491521,IAH-BTV-CAK 5,ERJ-175,https://www.airlines-manager.com/network/showline/48841727,https://www.airlines-manager.com/network/showflight/51077491521,https://www.airlines-manager.com/aircraft/show/82543907,19:15,0:29,112,"$158,427.00","$138,994.00"
IAH - LEX,51082169946,IAH-BTV-CAK 2,A321-200,https://www.airlines-manager.com/network/showline/48841727,https://www.airlines-manager.com/network/showflight/51082169946,https://www.airlines-manager.com/aircraft/show/114373409,22:15,3:29,264,"$304,254.00","$275,320.00"
IAH - LIM,51066574628,IAH 84A-7 E1,777-300,https://www.airlines-manager.com/network/showline/41559632,https://www.airlines-manager.com/network/showflight/51066574628,https://www.airlines-manager.com/aircraft/show/88905140,14:30,3:59,932,"$2,245,065.00","$2,045,220.00"
IAH - LIM,51086541061,IAH 84A-4 E1,777-300,https://www.airlines-manager.com/network/showline/41559632,https://www.airlines-manager.com/network/showflight/51086541061,https://www.airlines-manager.com/aircraft/show/89124075,23:45,13:14,932,"$2,245,065.00","$2,045,220.00"
IAH - LIT,51043595730,IAH-SJC-PWM 1,A321-200,https://www.airlines-manager.com/network/showline/46351097,https://www.airlines-manager.com/network/showflight/51043595730,https://www.airlines-manager.com/aircraft/show/96692491,3:45,7:14,310,"$188,142.00","$164,136.00"
IAH - LIT,51060918897,IAH-SJC-PWM 3,A321-200,https://www.airlines-manager.com/network/showline/46351097,https://www.airlines-manager.com/network/showflight/51060918897,https://www.airlines-manager.com/aircraft/show/96692343,11:00,14:29,310,"$188,142.00","$164,136.00"
IAH - LIT,51077491540,IAH-SJC-PWM 2,A321-200,https://www.airlines-manager.com/network/showline/46351097,https://www.airlines-manager.com/network/showflight/51077491540,https://www.airlines-manager.com/aircraft/show/96691558,19:30,22:59,310,"$188,142.00","$164,136.00"
IAH - LIT,51077491541,IAH-SJC-PWM 5 B,A319-100,https://www.airlines-manager.com/network/showline/46351097,https://www.airlines-manager.com/network/showflight/51077491541,https://www.airlines-manager.com/aircraft/show/106014350,20:00,23:29,198,"$141,962.00","$122,741.00"
IAH - LIT,51086541047,IAH-SJC-PWM 4,A321-200,https://www.airlines-manager.com/network/showline/46351097,https://www.airlines-manager.com/network/showflight/51086541047,https://www.airlines-manager.com/aircraft/show/96694086,23:30,2:59,272,"$174,539.00","$150,923.00"
IAH - MCI,51043595481,IAH-RNO-MCI 4,A321-200,https://www.airlines-manager.com/network/showline/45594512,https://www.airlines-manager.com/network/showflight/51043595481,https://www.airlines-manager.com/aircraft/show/103882358,1:00,5:44,310,"$297,925.00","$266,767.00"
IAH - MCI,51054795051,IAH-RNO-MCI 3,A321-200,https://www.airlines-manager.com/network/showline/45594512,https://www.airlines-manager.com/network/showflight/51054795051,https://www.airlines-manager.com/aircraft/show/103882357,9:15,13:59,310,"$297,925.00","$266,767.00"
IAH - MCI,51066574293,IAH-RNO-MCI 2,A321-200,https://www.airlines-manager.com/network/showline/45594512,https://www.airlines-manager.com/network/showflight/51066574293,https://www.airlines-manager.com/aircraft/show/103882356,13:00,17:44,310,"$297,925.00","$266,767.00"
IAH - MCI,51077491390,IAH-RNO-MCI 5,ERJ-175,https://www.airlines-manager.com/network/showline/45594512,https://www.airlines-manager.com/network/showflight/51077491390,https://www.airlines-manager.com/aircraft/show/105099861,18:00,22:44,112,"$141,110.00","$121,290.00"
IAH - MCI,51082169839,IAH-RNO-MCI 1,A321-200,https://www.airlines-manager.com/network/showline/45594512,https://www.airlines-manager.com/network/showflight/51082169839,https://www.airlines-manager.com/aircraft/show/103882355,21:00,1:44,310,"$297,925.00","$266,767.00"
IAH - MCI,51082169840,IAH CARGO 2,A320-200,https://www.airlines-manager.com/network/showline/45594512,https://www.airlines-manager.com/network/showflight/51082169840,https://www.airlines-manager.com/aircraft/show/101412921,21:15,1:59,0,"$90,492.00","$60,393.00"
IAH - MCO,51043595448,IAH-MIA-ORD 2,A321-200,https://www.airlines-manager.com/network/showline/41856116,https://www.airlines-manager.com/network/showflight/51043595448,https://www.airlines-manager.com/aircraft/show/90183183,1:00,6:29,310,"$344,958.00","$302,564.00"
IAH - MCO,51043595449,IAH-MIA-ORD 6 S,ERJ-175,https://www.airlines-manager.com/network/showline/41856116,https://www.airlines-manager.com/network/showflight/51043595449,https://www.airlines-manager.com/aircraft/show/90140936,3:00,8:29,136,"$164,259.00","$137,481.00"
IAH - MCO,51054794885,IAH-MIA-ORD 1,A321-200,https://www.airlines-manager.com/network/showline/41856116,https://www.airlines-manager.com/network/showflight/51054794885,https://www.airlines-manager.com/aircraft/show/90183184,6:45,12:14,310,"$344,958.00","$302,564.00"
IAH - MCO,51054794886,IAH-MIA-ORD 5,A321-200,https://www.airlines-manager.com/network/showline/41856116,https://www.airlines-manager.com/network/showflight/51054794886,https://www.airlines-manager.com/aircraft/show/90183180,8:45,14:14,310,"$344,958.00","$302,564.00"
IAH - MCO,51066574338,IAH-MIA-ORD 4,A321-200,https://www.airlines-manager.com/network/showline/41856116,https://www.airlines-manager.com/network/showflight/51066574338,https://www.airlines-manager.com/aircraft/show/90183181,13:00,18:29,310,"$344,958.00","$302,564.00"
IAH - MCO,51077491534,IAH-MIA-ORD 3,A321-200,https://www.airlines-manager.com/network/showline/41856116,https://www.airlines-manager.com/network/showflight/51077491534,https://www.airlines-manager.com/aircraft/show/90183182,19:15,0:44,310,"$344,958.00","$302,564.00"
IAH - MEM,51043595600,IAH CARGO 2,A320-200,https://www.airlines-manager.com/network/showline/44833769,https://www.airlines-manager.com/network/showflight/51043595600,https://www.airlines-manager.com/aircraft/show/101412921,2:00,5:59,0,"$71,747.00","$43,804.00"
IAH - MEM,51043595601,IAH-SMF-CVG 4,737-900ER,https://www.airlines-manager.com/network/showline/44833769,https://www.airlines-manager.com/network/showflight/51043595601,https://www.airlines-manager.com/aircraft/show/99093332,5:45,9:44,320,"$221,531.00","$188,169.00"
IAH - MEM,51054795055,IAH-SMF-CVG 3,737-900ER,https://www.airlines-manager.com/network/showline/44833769,https://www.airlines-manager.com/network/showflight/51054795055,https://www.airlines-manager.com/aircraft/show/99093333,9:30,13:29,320,"$221,531.00","$188,169.00"
IAH - MEM,51066574613,IAH-SMF-CVG 2,737-900ER,https://www.airlines-manager.com/network/showline/44833769,https://www.airlines-manager.com/network/showflight/51066574613,https://www.airlines-manager.com/aircraft/show/99093334,14:00,17:59,320,"$221,531.00","$188,169.00"
IAH - MEM,51077491550,IAH-SMF-CVG 1,737-900ER,https://www.airlines-manager.com/network/showline/44833769,https://www.airlines-manager.com/network/showflight/51077491550,https://www.airlines-manager.com/aircraft/show/99093335,19:30,23:29,320,"$221,531.00","$188,169.00"
IAH - MEM,51082169889,IAH-SMF-CVG 5 B,A319-100,https://www.airlines-manager.com/network/showline/44833769,https://www.airlines-manager.com/network/showflight/51082169889,https://www.airlines-manager.com/aircraft/show/106499070,21:30,1:29,198,"$168,142.00","$145,152.00"
IAH - MEX,51043595567,IAH-MEX-YYZ 6 S,ERJ-175,https://www.airlines-manager.com/network/showline/41979990,https://www.airlines-manager.com/network/showflight/51043595567,https://www.airlines-manager.com/aircraft/show/97026605,1:45,6:44,136,"$153,236.00","$128,335.00"
IAH - MEX,51043595568,IAH-MEX-YYZ 2,757-300,https://www.airlines-manager.com/network/showline/41979990,https://www.airlines-manager.com/network/showflight/51043595568,https://www.airlines-manager.com/aircraft/show/97076945,5:30,10:29,400,"$413,583.00","$365,240.00"
IAH - MEX,51054795007,IAH-MEX-YYZ 5,757-300,https://www.airlines-manager.com/network/showline/41979990,https://www.airlines-manager.com/network/showflight/51054795007,https://www.airlines-manager.com/aircraft/show/97076942,8:30,13:29,400,"$413,583.00","$365,240.00"
IAH - MEX,51066574339,IAH-MEX-YYZ 1,757-300,https://www.airlines-manager.com/network/showline/41979990,https://www.airlines-manager.com/network/showflight/51066574339,https://www.airlines-manager.com/aircraft/show/97076946,13:00,17:59,400,"$413,583.00","$365,240.00"
IAH - MEX,51071689590,IAH-MEX-YYZ 4,757-300,https://www.airlines-manager.com/network/showline/41979990,https://www.airlines-manager.com/network/showflight/51071689590,https://www.airlines-manager.com/aircraft/show/97076943,16:00,20:59,392,"$406,237.00","$358,093.00"
IAH - MEX,51086540971,IAH-MEX-YYZ 3,757-300,https://www.airlines-manager.com/network/showline/41979990,https://www.airlines-manager.com/network/showflight/51086540971,https://www.airlines-manager.com/aircraft/show/97076944,22:30,3:29,284,"$307,063.00","$261,601.00"
IAH - MHT,51043595510,IAH-MHT-ALB 3,737-900ER,https://www.airlines-manager.com/network/showline/48841849,https://www.airlines-manager.com/network/showflight/51043595510,https://www.airlines-manager.com/aircraft/show/114266971,1:30,9:44,320,"$523,320.00","$475,464.00"
IAH - MHT,51054794890,IAH-MHT-ALB 4,737-900ER,https://www.airlines-manager.com/network/showline/48841849,https://www.airlines-manager.com/network/showflight/51054794890,https://www.airlines-manager.com/aircraft/show/114266970,6:45,14:59,320,"$523,320.00","$475,464.00"
IAH - MHT,51060918969,IAH-MHT-ALB 1,737-900ER,https://www.airlines-manager.com/network/showline/48841849,https://www.airlines-manager.com/network/showflight/51060918969,https://www.airlines-manager.com/aircraft/show/114266972,12:00,20:14,320,"$523,320.00","$475,464.00"
IAH - MHT,51071689632,IAH-MHT-ALB 2,737-900ER,https://www.airlines-manager.com/network/showline/48841849,https://www.airlines-manager.com/network/showflight/51071689632,https://www.airlines-manager.com/aircraft/show/114266976,16:00,0:14,320,"$523,320.00","$475,464.00"
IAH - MHT,51077491369,IAH-MHT-ALB 5,ERJ-175,https://www.airlines-manager.com/network/showline/48841849,https://www.airlines-manager.com/network/showflight/51077491369,https://www.airlines-manager.com/aircraft/show/92800067,17:45,1:59,112,"$246,686.00","$218,119.00"
IAH - MIA,51043595425,IAH-MIA-ORD 3,A321-200,https://www.airlines-manager.com/network/showline/41856105,https://www.airlines-manager.com/network/showflight/51043595425,https://www.airlines-manager.com/aircraft/show/90183182,0:45,6:29,310,"$369,528.00","$323,771.00"
IAH - MIA,51043595426,IAH-MIA-ORD 2,A321-200,https://www.airlines-manager.com/network/showline/41856105,https://www.airlines-manager.com/network/showflight/51043595426,https://www.airlines-manager.com/aircraft/show/90183183,6:30,12:14,310,"$369,528.00","$323,771.00"
IAH - MIA,51054795018,IAH-MIA-ORD 6 S,ERJ-175,https://www.airlines-manager.com/network/showline/41856105,https://www.airlines-manager.com/network/showflight/51054795018,https://www.airlines-manager.com/aircraft/show/90140936,8:30,14:14,136,"$175,970.00","$147,002.00"
IAH - MIA,51066574450,IAH-MIA-ORD 1,A321-200,https://www.airlines-manager.com/network/showline/41856105,https://www.airlines-manager.com/network/showflight/51066574450,https://www.airlines-manager.com/aircraft/show/90183184,13:00,18:44,310,"$369,528.00","$323,771.00"
IAH - MIA,51071689549,IAH-MIA-ORD 5,A321-200,https://www.airlines-manager.com/network/showline/41856105,https://www.airlines-manager.com/network/showflight/51071689549,https://www.airlines-manager.com/aircraft/show/90183180,15:00,20:44,310,"$369,528.00","$323,771.00"
IAH - MIA,51077491470,IAH-MIA-ORD 4,A321-200,https://www.airlines-manager.com/network/showline/41856105,https://www.airlines-manager.com/network/showflight/51077491470,https://www.airlines-manager.com/aircraft/show/90183181,18:30,0:14,310,"$369,528.00","$323,771.00"
IAH - MKE,51043595477,IAH-BOI-BNA 2,A321-200,https://www.airlines-manager.com/network/showline/45748027,https://www.airlines-manager.com/network/showflight/51043595477,https://www.airlines-manager.com/aircraft/show/104258212,1:00,6:59,310,"$378,367.00","$343,233.00"
IAH - MKE,51054794968,IAH-BOI-BNA 1,A321-200,https://www.airlines-manager.com/network/showline/45748027,https://www.airlines-manager.com/network/showflight/51054794968,https://www.airlines-manager.com/aircraft/show/104258211,8:00,13:59,310,"$378,367.00","$343,233.00"
IAH - MKE,51054794969,IAH-BOI-BNA 5,ERJ-175,https://www.airlines-manager.com/network/showline/45748027,https://www.airlines-manager.com/network/showflight/51054794969,https://www.airlines-manager.com/aircraft/show/103534664,9:00,14:59,112,"$178,739.00","$155,939.00"
IAH - MKE,51066574596,IAH-BOI-BNA 4,A321-200,https://www.airlines-manager.com/network/showline/45748027,https://www.airlines-manager.com/network/showflight/51066574596,https://www.airlines-manager.com/aircraft/show/104258214,14:00,19:59,310,"$378,367.00","$343,233.00"
IAH - MKE,51077491532,IAH-BOI-BNA 3,A321-200,https://www.airlines-manager.com/network/showline/45748027,https://www.airlines-manager.com/network/showflight/51077491532,https://www.airlines-manager.com/aircraft/show/104258213,19:15,1:14,310,"$378,367.00","$343,233.00"
IAH - MSO,51043595745,IAH-MSO-FAR 2,737-900ER,https://www.airlines-manager.com/network/showline/47654624,https://www.airlines-manager.com/network/showflight/51043595745,https://www.airlines-manager.com/aircraft/show/110424756,4:00,11:59,320,"$506,098.00","$459,665.00"
IAH - MSO,51066574486,IAH-MSO-FAR 1,737-900ER,https://www.airlines-manager.com/network/showline/47654624,https://www.airlines-manager.com/network/showflight/51066574486,https://www.airlines-manager.com/aircraft/show/110424757,14:00,21:59,320,"$506,098.00","$459,665.00"
IAH - MSO,51077491354,IAH-MSO-FAR 4,737-900ER,https://www.airlines-manager.com/network/showline/47654624,https://www.airlines-manager.com/network/showflight/51077491354,https://www.airlines-manager.com/aircraft/show/110424754,17:30,1:29,320,"$506,098.00","$459,665.00"
IAH - MSO,51082169798,IAH-MSO-FAR 3,737-900ER,https://www.airlines-manager.com/network/showline/47654624,https://www.airlines-manager.com/network/showflight/51082169798,https://www.airlines-manager.com/aircraft/show/110424755,20:15,4:14,320,"$506,098.00","$459,665.00"
IAH - MSP,51043595746,IAH-LAS-ATL 5,737-900ER,https://www.airlines-manager.com/network/showline/41475907,https://www.airlines-manager.com/network/showflight/51043595746,https://www.airlines-manager.com/aircraft/show/95894466,4:00,9:59,320,"$382,731.00","$333,435.00"
IAH - MSP,51043595747,IAH-LAS-ATL 6,ERJ-175,https://www.airlines-manager.com/network/showline/41475907,https://www.airlines-manager.com/network/showflight/51043595747,https://www.airlines-manager.com/aircraft/show/82323704,5:00,11:14,112,"$181,789.00","$154,124.00"
IAH - MSP,51054795100,IAH-LAS-ATL 3,737-900ER,https://www.airlines-manager.com/network/showline/41475907,https://www.airlines-manager.com/network/showflight/51054795100,https://www.airlines-manager.com/aircraft/show/96183549,10:00,15:59,320,"$382,731.00","$333,435.00"
IAH - MSP,51077491371,IAH-LAS-ATL 2,737-900ER,https://www.airlines-manager.com/network/showline/41475907,https://www.airlines-manager.com/network/showflight/51077491371,https://www.airlines-manager.com/aircraft/show/96250652,17:45,23:44,320,"$382,731.00","$333,435.00"
IAH - MSP,51082169891,IAH-LAS-ATL 1,737-900ER,https://www.airlines-manager.com/network/showline/41475907,https://www.airlines-manager.com/network/showflight/51082169891,https://www.airlines-manager.com/aircraft/show/96256511,21:30,3:29,320,"$382,731.00","$333,435.00"
IAH - MSP,51086540974,IAH-LAS-ATL 4,737-900ER,https://www.airlines-manager.com/network/showline/41475907,https://www.airlines-manager.com/network/showflight/51086540974,https://www.airlines-manager.com/aircraft/show/96177955,22:30,4:29,320,"$382,731.00","$333,435.00"
IAH - MSY,51043595723,IAH-BWI-PHL 4,A321neo,https://www.airlines-manager.com/network/showline/44236349,https://www.airlines-manager.com/network/showflight/51043595723,https://www.airlines-manager.com/aircraft/show/106007216,3:45,6:59,338,"$170,205.00","$145,558.00"
IAH - MSY,51043595724,IAH-BWI-PHL 5,A321neo,https://www.airlines-manager.com/network/showline/44236349,https://www.airlines-manager.com/network/showflight/51043595724,https://www.airlines-manager.com/aircraft/show/106007217,4:45,7:59,338,"$170,205.00","$145,558.00"
IAH - MSY,51060918910,IAH-BWI-PHL 3,A321neo,https://www.airlines-manager.com/network/showline/44236349,https://www.airlines-manager.com/network/showflight/51060918910,https://www.airlines-manager.com/aircraft/show/106007215,11:00,14:14,338,"$170,205.00","$145,558.00"
IAH - MSY,51077491386,IAH-BWI-PHL 2,A321neo,https://www.airlines-manager.com/network/showline/44236349,https://www.airlines-manager.com/network/showflight/51077491386,https://www.airlines-manager.com/aircraft/show/106007214,17:45,20:59,338,"$170,205.00","$145,558.00"
IAH - MSY,51082169813,IAH-BWI-PHL 1,A321neo,https://www.airlines-manager.com/network/showline/44236349,https://www.airlines-manager.com/network/showflight/51082169813,https://www.airlines-manager.com/aircraft/show/106007213,20:30,23:44,265,"$148,355.00","$124,214.00"
IAH - MTY,51043595703,IAH-YOW-SJD 1,737-900ER,https://www.airlines-manager.com/network/showline/48842088,https://www.airlines-manager.com/network/showflight/51043595703,https://www.airlines-manager.com/aircraft/show/114266974,3:30,7:14,320,"$202,445.00","$171,928.00"
IAH - MTY,51054795044,IAH-YOW-SJD 5,ERJ-175,https://www.airlines-manager.com/network/showline/48842088,https://www.airlines-manager.com/network/showflight/51054795044,https://www.airlines-manager.com/aircraft/show/105099862,9:15,12:59,112,"$92,515.00","$76,060.00"
IAH - MTY,51066574479,IAH-YOW-SJD 4,737-900ER,https://www.airlines-manager.com/network/showline/48842088,https://www.airlines-manager.com/network/showflight/51066574479,https://www.airlines-manager.com/aircraft/show/114266975,14:00,17:44,320,"$202,445.00","$171,928.00"
IAH - MTY,51077491357,IAH-YOW-SJD 3,737-900ER,https://www.airlines-manager.com/network/showline/48842088,https://www.airlines-manager.com/network/showflight/51077491357,https://www.airlines-manager.com/aircraft/show/113250059,17:30,21:14,320,"$202,445.00","$171,928.00"
IAH - MTY,51086541048,IAH-YOW-SJD 2,737-900ER,https://www.airlines-manager.com/network/showline/48842088,https://www.airlines-manager.com/network/showflight/51086541048,https://www.airlines-manager.com/aircraft/show/113114108,23:30,3:14,320,"$202,445.00","$171,928.00"
IAH - OAK,51043595488,IAH-IAD-SAN 5,737-900ER,https://www.airlines-manager.com/network/showline/44653700,https://www.airlines-manager.com/network/showflight/51043595488,https://www.airlines-manager.com/aircraft/show/98578920,1:15,9:44,320,"$527,893.00","$477,070.00"
IAH - OAK,51043595489,IAH-IAD-SAN 1,737-900ER,https://www.airlines-manager.com/network/showline/44653700,https://www.airlines-manager.com/network/showflight/51043595489,https://www.airlines-manager.com/aircraft/show/98578924,3:00,11:29,320,"$527,893.00","$477,070.00"
IAH - OAK,51054794970,IAH-IAD-SAN 4,737-900ER,https://www.airlines-manager.com/network/showline/44653700,https://www.airlines-manager.com/network/showflight/51054794970,https://www.airlines-manager.com/aircraft/show/98578921,8:00,16:29,320,"$527,893.00","$477,070.00"
IAH - OAK,51066574284,IAH-IAD-SAN 3,737-900ER,https://www.airlines-manager.com/network/showline/44653700,https://www.airlines-manager.com/network/showflight/51066574284,https://www.airlines-manager.com/aircraft/show/98578922,13:00,21:29,320,"$527,893.00","$477,070.00"
IAH - OAK,51077491513,IAH-IAD-SAN 6,ERJ-175,https://www.airlines-manager.com/network/showline/44653700,https://www.airlines-manager.com/network/showflight/51077491513,https://www.airlines-manager.com/aircraft/show/105400635,19:00,3:29,112,"$249,006.00","$218,859.00"
IAH - OAK,51082169949,IAH-IAD-SAN 2,737-900ER,https://www.airlines-manager.com/network/showline/44653700,https://www.airlines-manager.com/network/showflight/51082169949,https://www.airlines-manager.com/aircraft/show/98578923,22:15,6:44,320,"$527,893.00","$477,070.00"
IAH - OKC,51043595805,IAH-RIC-SDF 1,A321-200,https://www.airlines-manager.com/network/showline/46824165,https://www.airlines-manager.com/network/showflight/51043595805,https://www.airlines-manager.com/aircraft/show/107467134,5:30,9:14,310,"$196,102.00","$170,841.00"
IAH - OKC,51054795073,IAH-RIC-SDF 5,ERJ-175,https://www.airlines-manager.com/network/showline/46824165,https://www.airlines-manager.com/network/showflight/51054795073,https://www.airlines-manager.com/aircraft/show/107467211,10:00,13:44,112,"$90,553.00","$74,706.00"
IAH - OKC,51060918979,IAH-RIC-SDF 4,A321-200,https://www.airlines-manager.com/network/showline/46824165,https://www.airlines-manager.com/network/showflight/51060918979,https://www.airlines-manager.com/aircraft/show/107467131,12:00,15:44,310,"$196,102.00","$170,841.00"
IAH - OKC,51077491384,IAH-RIC-SDF 3,A321-200,https://www.airlines-manager.com/network/showline/46824165,https://www.airlines-manager.com/network/showflight/51077491384,https://www.airlines-manager.com/aircraft/show/107467132,17:45,21:29,310,"$196,102.00","$170,841.00"
IAH - OKC,51086541012,IAH-RIC-SDF 2,A321-200,https://www.airlines-manager.com/network/showline/46824165,https://www.airlines-manager.com/network/showflight/51086541012,https://www.airlines-manager.com/aircraft/show/107467133,23:00,2:44,310,"$196,102.00","$170,841.00"
IAH - OMA,51043595648,IAH-BOI-BNA 1,A321-200,https://www.airlines-manager.com/network/showline/45737497,https://www.airlines-manager.com/network/showflight/51043595648,https://www.airlines-manager.com/aircraft/show/104258211,2:45,7:59,310,"$328,245.00","$297,102.00"
IAH - OMA,51043595649,IAH-BOI-BNA 5,ERJ-175,https://www.airlines-manager.com/network/showline/45737497,https://www.airlines-manager.com/network/showflight/51043595649,https://www.airlines-manager.com/aircraft/show/103534664,3:45,8:59,112,"$155,796.00","$135,745.00"
IAH - OMA,51054795025,IAH-BOI-BNA 4,A321-200,https://www.airlines-manager.com/network/showline/45737497,https://www.airlines-manager.com/network/showflight/51054795025,https://www.airlines-manager.com/aircraft/show/104258214,8:45,13:59,310,"$328,245.00","$297,102.00"
IAH - OMA,51066574597,IAH-BOI-BNA 3,A321-200,https://www.airlines-manager.com/network/showline/45737497,https://www.airlines-manager.com/network/showflight/51066574597,https://www.airlines-manager.com/aircraft/show/104258213,14:00,19:14,310,"$328,245.00","$297,102.00"
IAH - OMA,51077491561,IAH-BOI-BNA 2,A321-200,https://www.airlines-manager.com/network/showline/45737497,https://www.airlines-manager.com/network/showflight/51077491561,https://www.airlines-manager.com/aircraft/show/104258212,19:45,0:59,310,"$328,245.00","$297,102.00"
IAH - ONT,51043595639,IAH-ANC-ONT 1,A321-200,https://www.airlines-manager.com/network/showline/47054836,https://www.airlines-manager.com/network/showflight/51043595639,https://www.airlines-manager.com/aircraft/show/108258010,2:45,9:59,310,"$462,895.00","$421,729.00"
IAH - ONT,51043595640,IAH-ANC-ONT 2,A321-200,https://www.airlines-manager.com/network/showline/47054836,https://www.airlines-manager.com/network/showflight/51043595640,https://www.airlines-manager.com/aircraft/show/108258011,4:45,11:59,310,"$462,895.00","$421,729.00"
IAH - ONT,51060918971,IAH-ANC-ONT 3,A321-200,https://www.airlines-manager.com/network/showline/47054836,https://www.airlines-manager.com/network/showflight/51060918971,https://www.airlines-manager.com/aircraft/show/108258012,12:00,19:14,310,"$462,895.00","$421,729.00"
IAH - ONT,51066574497,IAH-ANC-ONT 4,A321-200,https://www.airlines-manager.com/network/showline/47054836,https://www.airlines-manager.com/network/showflight/51066574497,https://www.airlines-manager.com/aircraft/show/108089220,14:00,21:14,310,"$462,895.00","$421,729.00"
IAH - ONT,51071689625,IAH-ANC-ONT 5 B,A319-100,https://www.airlines-manager.com/network/showline/47054836,https://www.airlines-manager.com/network/showflight/51071689625,https://www.airlines-manager.com/aircraft/show/108286957,16:00,23:14,198,"$349,421.00","$316,431.00"
IAH - ORD,51043595357,IAH-MIA-ORD 4,A321-200,https://www.airlines-manager.com/network/showline/41856090,https://www.airlines-manager.com/network/showflight/51043595357,https://www.airlines-manager.com/aircraft/show/90183181,0:15,5:59,310,"$362,600.00","$307,634.00"
IAH - ORD,51043595358,IAH-MIA-ORD 3,A321-200,https://www.airlines-manager.com/network/showline/41856090,https://www.airlines-manager.com/network/showflight/51043595358,https://www.airlines-manager.com/aircraft/show/90183182,6:30,12:14,310,"$362,600.00","$307,634.00"
IAH - ORD,51054795078,IAH CARGO 2,A320-200,https://www.airlines-manager.com/network/showline/41856090,https://www.airlines-manager.com/network/showflight/51054795078,https://www.airlines-manager.com/aircraft/show/101412921,10:00,15:44,0,"$114,005.00","$60,561.00"
IAH - ORD,51066574453,IAH-MIA-ORD 2,A321-200,https://www.airlines-manager.com/network/showline/41856090,https://www.airlines-manager.com/network/showflight/51066574453,https://www.airlines-manager.com/aircraft/show/90183183,13:00,18:44,310,"$362,600.00","$307,634.00"
IAH - ORD,51071689548,IAH-MIA-ORD 6 S,ERJ-175,https://www.airlines-manager.com/network/showline/41856090,https://www.airlines-manager.com/network/showflight/51071689548,https://www.airlines-manager.com/aircraft/show/90140936,15:00,20:44,136,"$172,323.00","$137,887.00"
IAH - ORD,51077491493,IAH-MIA-ORD 1,A321-200,https://www.airlines-manager.com/network/showline/41856090,https://www.airlines-manager.com/network/showflight/51077491493,https://www.airlines-manager.com/aircraft/show/90183184,18:45,0:29,310,"$362,600.00","$307,634.00"
IAH - ORD,51082169830,IAH-MIA-ORD 5,A321-200,https://www.airlines-manager.com/network/showline/41856090,https://www.airlines-manager.com/network/showflight/51082169830,https://www.airlines-manager.com/aircraft/show/90183180,20:45,2:29,310,"$362,600.00","$307,634.00"
IAH - ORF,51043595278,IAH-PVD-BUF 5 B,A319-100,https://www.airlines-manager.com/network/showline/46824197,https://www.airlines-manager.com/network/showflight/51043595278,https://www.airlines-manager.com/aircraft/show/110582843,0:00,6:44,198,"$319,174.00","$289,521.00"
IAH - ORF,51043595279,IAH-PVD-BUF 1,A321-200,https://www.airlines-manager.com/network/showline/46824197,https://www.airlines-manager.com/network/showflight/51043595279,https://www.airlines-manager.com/aircraft/show/107467130,4:15,10:59,310,"$422,781.00","$385,779.00"
IAH - ORF,51054794992,IAH-PVD-BUF 4,A321-200,https://www.airlines-manager.com/network/showline/46824197,https://www.airlines-manager.com/network/showflight/51054794992,https://www.airlines-manager.com/aircraft/show/107467127,8:15,14:59,310,"$422,781.00","$385,779.00"
IAH - ORF,51066574311,IAH-PVD-BUF 3,A321-200,https://www.airlines-manager.com/network/showline/46824197,https://www.airlines-manager.com/network/showflight/51066574311,https://www.airlines-manager.com/aircraft/show/107467128,13:00,19:44,310,"$422,781.00","$385,779.00"
IAH - ORF,51077491573,IAH-PVD-BUF 2,A321-200,https://www.airlines-manager.com/network/showline/46824197,https://www.airlines-manager.com/network/showflight/51077491573,https://www.airlines-manager.com/aircraft/show/107467129,20:00,2:44,310,"$422,781.00","$385,779.00"
IAH - PBI,51043595629,IAH-PBI-RSW 2,A321-200,https://www.airlines-manager.com/network/showline/45920408,https://www.airlines-manager.com/network/showflight/51043595629,https://www.airlines-manager.com/aircraft/show/104717246,2:30,8:14,310,"$368,724.00","$333,988.00"
IAH - PBI,51060918924,IAH-PBI-RSW 1,A321-200,https://www.airlines-manager.com/network/showline/45920408,https://www.airlines-manager.com/network/showflight/51060918924,https://www.airlines-manager.com/aircraft/show/104717247,11:00,16:44,310,"$368,724.00","$333,988.00"
IAH - PBI,51066574462,IAH-PBI-RSW 5,ERJ-175,https://www.airlines-manager.com/network/showline/45920408,https://www.airlines-manager.com/network/showflight/51066574462,https://www.airlines-manager.com/aircraft/show/104743902,13:15,18:59,112,"$174,469.00","$151,963.00"
IAH - PBI,51071689638,IAH-PBI-RSW 4,A321-200,https://www.airlines-manager.com/network/showline/45920408,https://www.airlines-manager.com/network/showflight/51071689638,https://www.airlines-manager.com/aircraft/show/104717244,16:15,21:59,310,"$368,724.00","$333,988.00"
IAH - PBI,51082169907,IAH-PBI-RSW 3,A321-200,https://www.airlines-manager.com/network/showline/45920408,https://www.airlines-manager.com/network/showflight/51082169907,https://www.airlines-manager.com/aircraft/show/104717245,21:45,3:29,310,"$368,724.00","$333,988.00"
IAH - PDX,51043595658,IAH-SEA-DEN 5,A321neo,https://www.airlines-manager.com/network/showline/41444686,https://www.airlines-manager.com/network/showflight/51043595658,https://www.airlines-manager.com/aircraft/show/105562975,2:45,11:44,338,"$618,758.00","$570,656.00"
IAH - PDX,51043595659,IAH-SEA-DEN 2,A321neo,https://www.airlines-manager.com/network/showline/41444686,https://www.airlines-manager.com/network/showflight/51043595659,https://www.airlines-manager.com/aircraft/show/105562972,4:00,12:59,338,"$618,758.00","$570,656.00"
IAH - PDX,51043595660,IAH-SEA-DEN 4,A321neo,https://www.airlines-manager.com/network/showline/41444686,https://www.airlines-manager.com/network/showflight/51043595660,https://www.airlines-manager.com/aircraft/show/105562974,5:00,13:59,338,"$618,758.00","$570,656.00"
IAH - PDX,51060918996,IAH-SEA-DEN 6,ERJ-175,https://www.airlines-manager.com/network/showline/41444686,https://www.airlines-manager.com/network/showflight/51060918996,https://www.airlines-manager.com/aircraft/show/105601215,12:00,21:14,112,"$269,513.00","$236,102.00"
IAH - PDX,51066574591,IAH-SEA-DEN 3,A321neo,https://www.airlines-manager.com/network/showline/41444686,https://www.airlines-manager.com/network/showflight/51066574591,https://www.airlines-manager.com/aircraft/show/105562973,14:00,22:59,338,"$618,758.00","$570,656.00"
IAH - PDX,51077491473,IAH-SEA-DEN 1,A321neo,https://www.airlines-manager.com/network/showline/41444686,https://www.airlines-manager.com/network/showflight/51077491473,https://www.airlines-manager.com/aircraft/show/105562971,18:30,3:29,338,"$618,758.00","$570,656.00"
IAH - PHL,51060918900,IAH-BWI-PHL 4,A321neo,https://www.airlines-manager.com/network/showline/44225058,https://www.airlines-manager.com/network/showflight/51060918900,https://www.airlines-manager.com/aircraft/show/106007216,11:00,18:14,338,"$500,569.00","$455,387.00"
IAH - PHL,51066574620,IAH-BWI-PHL 3,A321neo,https://www.airlines-manager.com/network/showline/44225058,https://www.airlines-manager.com/network/showflight/51066574620,https://www.airlines-manager.com/aircraft/show/106007215,14:15,21:29,338,"$500,569.00","$455,387.00"
IAH - PHL,51071689615,IAH CARGO 1,737-700,https://www.airlines-manager.com/network/showline/44225058,https://www.airlines-manager.com/network/showflight/51071689615,https://www.airlines-manager.com/aircraft/show/107543798,16:00,23:14,0,"$122,361.00","$88,930.00"
IAH - PHL,51082169857,IAH-BWI-PHL 2,A321neo,https://www.airlines-manager.com/network/showline/44225058,https://www.airlines-manager.com/network/showflight/51082169857,https://www.airlines-manager.com/aircraft/show/106007214,21:00,4:14,338,"$500,569.00","$455,387.00"
IAH - PHL,51082169858,IAH-BWI-PHL 5,A321neo,https://www.airlines-manager.com/network/showline/44225058,https://www.airlines-manager.com/network/showflight/51082169858,https://www.airlines-manager.com/aircraft/show/106007217,21:30,4:44,338,"$500,569.00","$455,387.00"
IAH - PHL,51086541068,IAH-BWI-PHL 1,A321neo,https://www.airlines-manager.com/network/showline/44225058,https://www.airlines-manager.com/network/showflight/51086541068,https://www.airlines-manager.com/aircraft/show/106007213,23:45,6:59,338,"$500,569.00","$455,387.00"
IAH - PHX,51043595748,IAH-LAS-ATL 3,737-900ER,https://www.airlines-manager.com/network/showline/41475904,https://www.airlines-manager.com/network/showflight/51043595748,https://www.airlines-manager.com/aircraft/show/96183549,4:00,9:59,320,"$378,569.00","$326,535.00"
IAH - PHX,51043595749,IAH-LAS-ATL 4,737-900ER,https://www.airlines-manager.com/network/showline/41475904,https://www.airlines-manager.com/network/showflight/51043595749,https://www.airlines-manager.com/aircraft/show/96177955,5:00,10:59,320,"$378,569.00","$326,535.00"
IAH - PHX,51060918954,IAH-LAS-ATL 6,ERJ-175,https://www.airlines-manager.com/network/showline/41475904,https://www.airlines-manager.com/network/showflight/51060918954,https://www.airlines-manager.com/aircraft/show/82323704,11:30,17:29,112,"$179,122.00","$150,171.00"
IAH - PHX,51060918955,IAH-LAS-ATL 2,737-900ER,https://www.airlines-manager.com/network/showline/41475904,https://www.airlines-manager.com/network/showflight/51060918955,https://www.airlines-manager.com/aircraft/show/96250652,11:45,17:44,320,"$378,569.00","$326,535.00"
IAH - PHX,51071689562,IAH-LAS-ATL 1,737-900ER,https://www.airlines-manager.com/network/showline/41475904,https://www.airlines-manager.com/network/showflight/51071689562,https://www.airlines-manager.com/aircraft/show/96256511,15:30,21:29,320,"$378,569.00","$326,535.00"
IAH - PHX,51082169892,IAH-LAS-ATL 5,737-900ER,https://www.airlines-manager.com/network/showline/41475904,https://www.airlines-manager.com/network/showflight/51082169892,https://www.airlines-manager.com/aircraft/show/95894466,21:30,3:29,320,"$378,569.00","$326,535.00"
IAH - PIT,51043595791,IAH-PIT-RDU 2,A321-200,https://www.airlines-manager.com/network/showline/45172092,https://www.airlines-manager.com/network/showflight/51043595791,https://www.airlines-manager.com/aircraft/show/100684073,5:00,11:29,310,"$404,568.00","$366,204.00"
IAH - PIT,51060918949,IAH-PIT-RDU 1,A321-200,https://www.airlines-manager.com/network/showline/45172092,https://www.airlines-manager.com/network/showflight/51060918949,https://www.airlines-manager.com/aircraft/show/100684074,11:15,17:44,310,"$404,568.00","$366,204.00"
IAH - PIT,51071689591,IAH-PIT-RDU 5 B,A319-100,https://www.airlines-manager.com/network/showline/45172092,https://www.airlines-manager.com/network/showflight/51071689591,https://www.airlines-manager.com/aircraft/show/110582845,16:00,22:29,198,"$305,688.00","$274,949.00"
IAH - PIT,51077491296,IAH-PIT-RDU 4,A321-200,https://www.airlines-manager.com/network/showline/45172092,https://www.airlines-manager.com/network/showflight/51077491296,https://www.airlines-manager.com/aircraft/show/100684071,17:15,23:44,310,"$404,568.00","$366,204.00"
IAH - PIT,51086540989,IAH-PIT-RDU 3,A321-200,https://www.airlines-manager.com/network/showline/45172092,https://www.airlines-manager.com/network/showflight/51086540989,https://www.airlines-manager.com/aircraft/show/100684072,22:45,5:14,310,"$404,568.00","$366,204.00"
IAH - PVD,51043595647,IAH-PVD-BUF 2,A321-200,https://www.airlines-manager.com/network/showline/46824173,https://www.airlines-manager.com/network/showflight/51043595647,https://www.airlines-manager.com/aircraft/show/107467129,2:45,10:59,310,"$515,484.00","$473,974.00"
IAH - PVD,51054794894,IAH-PVD-BUF 5 B,A319-100,https://www.airlines-manager.com/network/showline/46824173,https://www.airlines-manager.com/network/showflight/51054794894,https://www.airlines-manager.com/aircraft/show/110582843,6:45,14:59,198,"$388,564.00","$355,289.00"
IAH - PVD,51066574324,IAH-PVD-BUF 1,A321-200,https://www.airlines-manager.com/network/showline/46824173,https://www.airlines-manager.com/network/showflight/51066574324,https://www.airlines-manager.com/aircraft/show/107467130,13:00,21:14,310,"$515,484.00","$473,974.00"
IAH - PVD,51071689676,IAH-PVD-BUF 4,A321-200,https://www.airlines-manager.com/network/showline/46824173,https://www.airlines-manager.com/network/showflight/51071689676,https://www.airlines-manager.com/aircraft/show/107467127,17:00,1:14,310,"$515,484.00","$473,974.00"
IAH - PVD,51077491552,IAH-PVD-BUF 3,A321-200,https://www.airlines-manager.com/network/showline/46824173,https://www.airlines-manager.com/network/showflight/51077491552,https://www.airlines-manager.com/aircraft/show/107467128,19:45,3:59,310,"$515,484.00","$473,974.00"
IAH - PVR,51043595672,IAH-YOW-SJD 5,ERJ-175,https://www.airlines-manager.com/network/showline/48842082,https://www.airlines-manager.com/network/showflight/51043595672,https://www.airlines-manager.com/aircraft/show/105099862,3:00,8:29,112,"$166,500.00","$145,086.00"
IAH - PVR,51054795006,IAH-YOW-SJD 4,737-900ER,https://www.airlines-manager.com/network/showline/48842082,https://www.airlines-manager.com/network/showflight/51054795006,https://www.airlines-manager.com/aircraft/show/114266975,8:30,13:59,320,"$355,651.00","$318,017.00"
IAH - PVR,51060919008,IAH-YOW-SJD 3,737-900ER,https://www.airlines-manager.com/network/showline/48842082,https://www.airlines-manager.com/network/showflight/51060919008,https://www.airlines-manager.com/aircraft/show/113250059,12:00,17:29,320,"$355,651.00","$318,017.00"
IAH - PVR,51077491389,IAH-YOW-SJD 2,737-900ER,https://www.airlines-manager.com/network/showline/48842082,https://www.airlines-manager.com/network/showflight/51077491389,https://www.airlines-manager.com/aircraft/show/113114108,18:00,23:29,320,"$355,651.00","$318,017.00"
IAH - PVR,51082169922,IAH-YOW-SJD 1,737-900ER,https://www.airlines-manager.com/network/showline/48842082,https://www.airlines-manager.com/network/showflight/51082169922,https://www.airlines-manager.com/aircraft/show/114266974,22:00,3:29,320,"$355,651.00","$318,017.00"
IAH - PWM,51054794961,IAH-SJC-PWM 5 B,A319-100,https://www.airlines-manager.com/network/showline/46335442,https://www.airlines-manager.com/network/showflight/51054794961,https://www.airlines-manager.com/aircraft/show/106014350,7:45,16:14,198,"$405,997.00","$371,813.00"
IAH - PWM,51060918898,IAH-SJC-PWM 2,A321-200,https://www.airlines-manager.com/network/showline/46335442,https://www.airlines-manager.com/network/showflight/51060918898,https://www.airlines-manager.com/aircraft/show/96691558,11:00,19:29,310,"$539,111.00","$496,470.00"
IAH - PWM,51071689508,IAH-SJC-PWM 4,A321-200,https://www.airlines-manager.com/network/showline/46335442,https://www.airlines-manager.com/network/showflight/51071689508,https://www.airlines-manager.com/aircraft/show/96694086,15:00,23:29,310,"$539,111.00","$496,470.00"
IAH - PWM,51077491537,IAH-SJC-PWM 1,A321-200,https://www.airlines-manager.com/network/showline/46335442,https://www.airlines-manager.com/network/showflight/51077491537,https://www.airlines-manager.com/aircraft/show/96692491,19:15,3:44,310,"$539,111.00","$496,470.00"
IAH - PWM,51086540984,IAH-SJC-PWM 3,A321-200,https://www.airlines-manager.com/network/showline/46335442,https://www.airlines-manager.com/network/showflight/51086540984,https://www.airlines-manager.com/aircraft/show/96692343,22:45,7:14,310,"$539,111.00","$496,470.00"
IAH - RDU,51043595797,IAH-PIT-RDU 3,A321-200,https://www.airlines-manager.com/network/showline/45172096,https://www.airlines-manager.com/network/showflight/51043595797,https://www.airlines-manager.com/aircraft/show/100684072,5:15,11:29,310,"$388,147.00","$351,343.00"
IAH - RDU,51060918959,IAH-PIT-RDU 2,A321-200,https://www.airlines-manager.com/network/showline/45172096,https://www.airlines-manager.com/network/showflight/51060918959,https://www.airlines-manager.com/aircraft/show/100684073,11:30,17:44,310,"$388,147.00","$351,343.00"
IAH - RDU,51077491383,IAH-PIT-RDU 1,A321-200,https://www.airlines-manager.com/network/showline/45172096,https://www.airlines-manager.com/network/showflight/51077491383,https://www.airlines-manager.com/aircraft/show/100684074,17:45,23:59,310,"$388,147.00","$351,343.00"
IAH - RDU,51086540958,IAH-PIT-RDU 5 B,A319-100,https://www.airlines-manager.com/network/showline/45172096,https://www.airlines-manager.com/network/showflight/51086540958,https://www.airlines-manager.com/aircraft/show/110582845,22:30,4:44,198,"$293,404.00","$263,915.00"
IAH - RDU,51086540959,IAH-PIT-RDU 4,A321-200,https://www.airlines-manager.com/network/showline/45172096,https://www.airlines-manager.com/network/showflight/51086540959,https://www.airlines-manager.com/aircraft/show/100684071,23:45,5:59,310,"$388,147.00","$351,343.00"
IAH - RIC,51043595638,IAH-RIC-SDF 2,A321-200,https://www.airlines-manager.com/network/showline/46824134,https://www.airlines-manager.com/network/showflight/51043595638,https://www.airlines-manager.com/aircraft/show/107467133,2:45,9:14,310,"$415,802.00","$379,488.00"
IAH - RIC,51060918980,IAH-RIC-SDF 1,A321-200,https://www.airlines-manager.com/network/showline/46824134,https://www.airlines-manager.com/network/showflight/51060918980,https://www.airlines-manager.com/aircraft/show/107467134,12:00,18:29,310,"$415,802.00","$379,488.00"
IAH - RIC,51066574476,IAH-RIC-SDF 5,ERJ-175,https://www.airlines-manager.com/network/showline/46824134,https://www.airlines-manager.com/network/showflight/51066574476,https://www.airlines-manager.com/aircraft/show/107467211,13:45,20:14,112,"$195,658.00","$171,852.00"
IAH - RIC,51071689577,IAH-RIC-SDF 4,A321-200,https://www.airlines-manager.com/network/showline/46824134,https://www.airlines-manager.com/network/showflight/51071689577,https://www.airlines-manager.com/aircraft/show/107467131,15:45,22:14,310,"$415,802.00","$379,488.00"
IAH - RIC,51082169896,IAH-RIC-SDF 3,A321-200,https://www.airlines-manager.com/network/showline/46824134,https://www.airlines-manager.com/network/showflight/51082169896,https://www.airlines-manager.com/aircraft/show/107467132,21:30,3:59,310,"$415,802.00","$379,488.00"
IAH - RNO,51043595500,IAH-RNO-MCI 3,A321-200,https://www.airlines-manager.com/network/showline/45594514,https://www.airlines-manager.com/network/showflight/51043595500,https://www.airlines-manager.com/aircraft/show/103882357,1:15,9:14,310,"$511,357.00","$468,249.00"
IAH - RNO,51043595501,IAH-RNO-MCI 5,ERJ-175,https://www.airlines-manager.com/network/showline/45594514,https://www.airlines-manager.com/network/showflight/51043595501,https://www.airlines-manager.com/aircraft/show/105099861,4:00,11:59,112,"$240,650.00","$212,118.00"
IAH - RNO,51043595502,IAH-RNO-MCI 2,A321-200,https://www.airlines-manager.com/network/showline/45594514,https://www.airlines-manager.com/network/showflight/51043595502,https://www.airlines-manager.com/aircraft/show/103882356,5:00,12:59,310,"$511,357.00","$468,249.00"
IAH - RNO,51066574286,IAH-RNO-MCI 1,A321-200,https://www.airlines-manager.com/network/showline/45594514,https://www.airlines-manager.com/network/showflight/51066574286,https://www.airlines-manager.com/aircraft/show/103882355,13:00,20:59,310,"$511,357.00","$468,249.00"
IAH - RNO,51071689689,IAH-RNO-MCI 4,A321-200,https://www.airlines-manager.com/network/showline/45594514,https://www.airlines-manager.com/network/showflight/51071689689,https://www.airlines-manager.com/aircraft/show/103882358,17:00,0:59,310,"$511,357.00","$468,249.00"
IAH - RSW,51043595643,IAH-PBI-RSW 4,A321-200,https://www.airlines-manager.com/network/showline/45920413,https://www.airlines-manager.com/network/showflight/51043595643,https://www.airlines-manager.com/aircraft/show/104717244,2:45,8:14,310,"$348,866.00","$314,308.00"
IAH - RSW,51060918922,IAH-PBI-RSW 3,A321-200,https://www.airlines-manager.com/network/showline/45920413,https://www.airlines-manager.com/network/showflight/51060918922,https://www.airlines-manager.com/aircraft/show/104717245,11:00,16:29,310,"$348,866.00","$314,308.00"
IAH - RSW,51071689581,IAH-PBI-RSW 2,A321-200,https://www.airlines-manager.com/network/showline/45920413,https://www.airlines-manager.com/network/showflight/51071689581,https://www.airlines-manager.com/aircraft/show/104717246,15:45,21:14,310,"$348,866.00","$314,308.00"
IAH - RSW,51082169898,IAH-PBI-RSW 1,A321-200,https://www.airlines-manager.com/network/showline/45920413,https://www.airlines-manager.com/network/showflight/51082169898,https://www.airlines-manager.com/aircraft/show/104717247,21:30,2:59,310,"$348,866.00","$314,308.00"
IAH - RSW,51086541056,IAH-PBI-RSW 5,ERJ-175,https://www.airlines-manager.com/network/showline/45920413,https://www.airlines-manager.com/network/showflight/51086541056,https://www.airlines-manager.com/aircraft/show/104743902,23:45,5:14,112,"$165,168.00","$142,932.00"
IAH - SAN,51043595409,IAH-IAD-SAN 4,737-900ER,https://www.airlines-manager.com/network/showline/44653695,https://www.airlines-manager.com/network/showflight/51043595409,https://www.airlines-manager.com/aircraft/show/98578921,0:45,7:59,320,"$451,855.00","$404,514.00"
IAH - SAN,51043595410,IAH-IAD-SAN 3,737-900ER,https://www.airlines-manager.com/network/showline/44653695,https://www.airlines-manager.com/network/showflight/51043595410,https://www.airlines-manager.com/aircraft/show/98578922,4:15,11:29,320,"$451,855.00","$404,514.00"
IAH - SAN,51060918839,IAH-IAD-SAN 6,ERJ-175,https://www.airlines-manager.com/network/showline/44653695,https://www.airlines-manager.com/network/showflight/51060918839,https://www.airlines-manager.com/aircraft/show/105400635,10:15,17:29,112,"$214,043.00","$186,584.00"
IAH - SAN,51071689546,IAH-IAD-SAN 2,737-900ER,https://www.airlines-manager.com/network/showline/44653695,https://www.airlines-manager.com/network/showflight/51071689546,https://www.airlines-manager.com/aircraft/show/98578923,15:00,22:14,320,"$451,855.00","$404,514.00"
IAH - SAN,51077491395,IAH-IAD-SAN 5,737-900ER,https://www.airlines-manager.com/network/showline/44653695,https://www.airlines-manager.com/network/showflight/51077491395,https://www.airlines-manager.com/aircraft/show/98578920,18:00,1:14,320,"$451,855.00","$404,514.00"
IAH - SAN,51077491396,IAH-IAD-SAN 1,737-900ER,https://www.airlines-manager.com/network/showline/44653695,https://www.airlines-manager.com/network/showflight/51077491396,https://www.airlines-manager.com/aircraft/show/98578924,19:45,2:59,320,"$451,855.00","$404,514.00"
IAH - SAT,51043595535,IAH-SMF-CVG 5 B,A319-100,https://www.airlines-manager.com/network/showline/44833765,https://www.airlines-manager.com/network/showflight/51043595535,https://www.airlines-manager.com/aircraft/show/106499070,1:30,4:14,198,"$89,981.00","$72,102.00"
IAH - SAT,51043595536,IAH CARGO 2,A320-200,https://www.airlines-manager.com/network/showline/44833765,https://www.airlines-manager.com/network/showflight/51043595536,https://www.airlines-manager.com/aircraft/show/101412921,6:00,8:44,0,"$42,956.00","$20,929.00"
IAH - SAT,51054795061,IAH-SMF-CVG 4,737-900ER,https://www.airlines-manager.com/network/showline/44833765,https://www.airlines-manager.com/network/showflight/51054795061,https://www.airlines-manager.com/aircraft/show/99093332,9:45,12:29,320,"$119,074.00","$92,710.00"
IAH - SAT,51066574612,IAH-SMF-CVG 3,737-900ER,https://www.airlines-manager.com/network/showline/44833765,https://www.airlines-manager.com/network/showflight/51066574612,https://www.airlines-manager.com/aircraft/show/99093333,14:00,16:44,320,"$119,074.00","$92,710.00"
IAH - SAT,51077491411,IAH-SMF-CVG 2,737-900ER,https://www.airlines-manager.com/network/showline/44833765,https://www.airlines-manager.com/network/showflight/51077491411,https://www.airlines-manager.com/aircraft/show/99093334,18:00,20:44,320,"$119,074.00","$92,710.00"
IAH - SAT,51086541052,IAH-SMF-CVG 1,737-900ER,https://www.airlines-manager.com/network/showline/44833765,https://www.airlines-manager.com/network/showflight/51086541052,https://www.airlines-manager.com/aircraft/show/99093335,23:30,2:14,320,"$119,074.00","$92,710.00"
IAH - SAV,51043595596,IAH-FAT-SAV 4,737-900ER,https://www.airlines-manager.com/network/showline/47654558,https://www.airlines-manager.com/network/showflight/51043595596,https://www.airlines-manager.com/aircraft/show/110424758,2:00,7:29,320,"$342,072.00","$306,266.00"
IAH - SAV,51054795003,IAH-FAT-SAV 3,737-900ER,https://www.airlines-manager.com/network/showline/47654558,https://www.airlines-manager.com/network/showflight/51054795003,https://www.airlines-manager.com/aircraft/show/110424759,8:30,13:59,320,"$342,072.00","$306,266.00"
IAH - SAV,51066574343,IAH-FAT-SAV 2,737-900ER,https://www.airlines-manager.com/network/showline/47654558,https://www.airlines-manager.com/network/showflight/51066574343,https://www.airlines-manager.com/aircraft/show/110424760,13:00,18:29,320,"$342,072.00","$306,266.00"
IAH - SAV,51082169909,IAH-FAT-SAV 1,737-900ER,https://www.airlines-manager.com/network/showline/47654558,https://www.airlines-manager.com/network/showflight/51082169909,https://www.airlines-manager.com/aircraft/show/110424761,21:45,3:14,320,"$342,072.00","$306,266.00"
IAH - SCL,51043595543,IAH 56A-7 B,787-10,https://www.airlines-manager.com/network/showline/41776795,https://www.airlines-manager.com/network/showflight/51043595543,https://www.airlines-manager.com/aircraft/show/106676238,1:30,19:59,648,"$2,283,510.00","$2,127,394.00"
IAH - SCL,51043595544,IAH 56A-2 B,787-10,https://www.airlines-manager.com/network/showline/41776795,https://www.airlines-manager.com/network/showflight/51043595544,https://www.airlines-manager.com/aircraft/show/106676233,6:30,0:59,648,"$2,283,510.00","$2,127,394.00"
IAH - SCL,51077491332,IAH 56A-4 B,787-10,https://www.airlines-manager.com/network/showline/41776795,https://www.airlines-manager.com/network/showflight/51077491332,https://www.airlines-manager.com/aircraft/show/106676235,17:30,11:59,648,"$2,283,510.00","$2,127,394.00"
IAH - SDF,51043595735,IAH-RIC-SDF 3,A321-200,https://www.airlines-manager.com/network/showline/46824149,https://www.airlines-manager.com/network/showflight/51043595735,https://www.airlines-manager.com/aircraft/show/107467132,4:00,9:14,310,"$328,479.00","$295,926.00"
IAH - SDF,51060918986,IAH-RIC-SDF 2,A321-200,https://www.airlines-manager.com/network/showline/46824149,https://www.airlines-manager.com/network/showflight/51060918986,https://www.airlines-manager.com/aircraft/show/107467133,12:00,17:14,310,"$328,479.00","$295,926.00"
IAH - SDF,51077491462,IAH-RIC-SDF 1,A321-200,https://www.airlines-manager.com/network/showline/46824149,https://www.airlines-manager.com/network/showflight/51077491462,https://www.airlines-manager.com/aircraft/show/107467134,18:30,23:44,310,"$328,479.00","$295,926.00"
IAH - SDF,51082169801,IAH-RIC-SDF 5,ERJ-175,https://www.airlines-manager.com/network/showline/46824149,https://www.airlines-manager.com/network/showflight/51082169801,https://www.airlines-manager.com/aircraft/show/107467211,20:15,1:29,112,"$156,003.00","$135,096.00"
IAH - SDF,51082169802,IAH-RIC-SDF 4,A321-200,https://www.airlines-manager.com/network/showline/46824149,https://www.airlines-manager.com/network/showflight/51082169802,https://www.airlines-manager.com/aircraft/show/107467131,22:15,3:29,310,"$328,479.00","$295,926.00"
IAH - SEA,51043595714,IAH-SEA-DEN 1,A321neo,https://www.airlines-manager.com/network/showline/41444678,https://www.airlines-manager.com/network/showflight/51043595714,https://www.airlines-manager.com/aircraft/show/105562971,3:30,12:44,338,"$642,884.00","$587,526.00"
IAH - SEA,51043595715,IAH-SEA-DEN 3,A321neo,https://www.airlines-manager.com/network/showline/41444678,https://www.airlines-manager.com/network/showflight/51043595715,https://www.airlines-manager.com/aircraft/show/105562973,4:30,13:44,338,"$642,884.00","$587,526.00"
IAH - SEA,51066574346,IAH-SEA-DEN 2,A321neo,https://www.airlines-manager.com/network/showline/41444678,https://www.airlines-manager.com/network/showflight/51066574346,https://www.airlines-manager.com/aircraft/show/105562972,13:00,22:14,338,"$642,884.00","$587,526.00"
IAH - SEA,51066574347,IAH-SEA-DEN 4,A321neo,https://www.airlines-manager.com/network/showline/41444678,https://www.airlines-manager.com/network/showflight/51066574347,https://www.airlines-manager.com/aircraft/show/105562974,14:00,23:14,338,"$642,884.00","$587,526.00"
IAH - SEA,51077491358,IAH-SEA-DEN 5,A321neo,https://www.airlines-manager.com/network/showline/41444678,https://www.airlines-manager.com/network/showflight/51077491358,https://www.airlines-manager.com/aircraft/show/105562975,17:30,2:44,338,"$642,884.00","$587,526.00"
IAH - SEA,51082169876,IAH-SEA-DEN 6,ERJ-175,https://www.airlines-manager.com/network/showline/41444678,https://www.airlines-manager.com/network/showflight/51082169876,https://www.airlines-manager.com/aircraft/show/105601215,21:15,6:44,112,"$279,011.00","$241,123.00"
IAH - SJC,51043595679,IAH-SJC-PWM 4,A321-200,https://www.airlines-manager.com/network/showline/46335448,https://www.airlines-manager.com/network/showflight/51043595679,https://www.airlines-manager.com/aircraft/show/96694086,3:00,11:14,310,"$530,569.00","$484,940.00"
IAH - SJC,51060918899,IAH-SJC-PWM 1,A321-200,https://www.airlines-manager.com/network/showline/46335448,https://www.airlines-manager.com/network/showflight/51060918899,https://www.airlines-manager.com/aircraft/show/96692491,11:00,19:14,310,"$530,569.00","$484,940.00"
IAH - SJC,51066574629,IAH-SJC-PWM 3,A321-200,https://www.airlines-manager.com/network/showline/46335448,https://www.airlines-manager.com/network/showflight/51066574629,https://www.airlines-manager.com/aircraft/show/96692343,14:30,22:44,310,"$530,569.00","$484,940.00"
IAH - SJC,51086541015,IAH-SJC-PWM 2,A321-200,https://www.airlines-manager.com/network/showline/46335448,https://www.airlines-manager.com/network/showflight/51086541015,https://www.airlines-manager.com/aircraft/show/96691558,23:00,7:14,310,"$530,569.00","$484,940.00"
IAH - SJC,51086541016,IAH-SJC-PWM 5 B,A319-100,https://www.airlines-manager.com/network/showline/46335448,https://www.airlines-manager.com/network/showflight/51086541016,https://www.airlines-manager.com/aircraft/show/106014350,23:30,7:44,198,"$399,293.00","$362,721.00"
IAH - SJD,51043595573,IAH-YOW-SJD 4,737-900ER,https://www.airlines-manager.com/network/showline/48842079,https://www.airlines-manager.com/network/showflight/51043595573,https://www.airlines-manager.com/aircraft/show/114266975,1:45,7:44,320,"$380,891.00","$342,053.00"
IAH - SJD,51043595574,IAH-YOW-SJD 3,737-900ER,https://www.airlines-manager.com/network/showline/48842079,https://www.airlines-manager.com/network/showflight/51043595574,https://www.airlines-manager.com/aircraft/show/113250059,5:15,11:14,320,"$380,891.00","$342,053.00"
IAH - SJD,51060919007,IAH-YOW-SJD 2,737-900ER,https://www.airlines-manager.com/network/showline/48842079,https://www.airlines-manager.com/network/showflight/51060919007,https://www.airlines-manager.com/aircraft/show/113114108,12:00,17:59,320,"$380,891.00","$342,053.00"
IAH - SJD,51071689620,IAH-YOW-SJD 1,737-900ER,https://www.airlines-manager.com/network/showline/48842079,https://www.airlines-manager.com/network/showflight/51071689620,https://www.airlines-manager.com/aircraft/show/114266974,16:00,21:59,320,"$380,891.00","$342,053.00"
IAH - SJD,51082169842,IAH-YOW-SJD 5,ERJ-175,https://www.airlines-manager.com/network/showline/48842079,https://www.airlines-manager.com/network/showflight/51082169842,https://www.airlines-manager.com/aircraft/show/105099862,21:00,2:59,109,"$174,508.00","$152,324.00"
IAH - SLC,51043595653,IAH-SLC-CLT 2,A321-200,https://www.airlines-manager.com/network/showline/42839462,https://www.airlines-manager.com/network/showflight/51043595653,https://www.airlines-manager.com/aircraft/show/93094698,2:45,9:29,310,"$423,730.00","$380,243.00"
IAH - SLC,51043595654,IAH-SLC-CLT 6,ERJ-175,https://www.airlines-manager.com/network/showline/42839462,https://www.airlines-manager.com/network/showflight/51043595654,https://www.airlines-manager.com/aircraft/show/93100455,4:45,11:29,112,"$199,385.00","$171,208.00"
IAH - SLC,51054795086,IAH-SLC-CLT 1,A321-200,https://www.airlines-manager.com/network/showline/42839462,https://www.airlines-manager.com/network/showflight/51054795086,https://www.airlines-manager.com/aircraft/show/93094699,10:00,16:44,310,"$423,730.00","$380,243.00"
IAH - SLC,51060919005,IAH-SLC-CLT 5,A321-200,https://www.airlines-manager.com/network/showline/42839462,https://www.airlines-manager.com/network/showflight/51060919005,https://www.airlines-manager.com/aircraft/show/93094695,12:00,18:44,310,"$423,730.00","$380,243.00"
IAH - SLC,51071689557,IAH-SLC-CLT 4,A321-200,https://www.airlines-manager.com/network/showline/42839462,https://www.airlines-manager.com/network/showflight/51071689557,https://www.airlines-manager.com/aircraft/show/93094696,15:15,21:59,310,"$423,730.00","$380,243.00"
IAH - SLC,51082169859,IAH-SLC-CLT 3,A321-200,https://www.airlines-manager.com/network/showline/42839462,https://www.airlines-manager.com/network/showflight/51082169859,https://www.airlines-manager.com/aircraft/show/93094697,21:00,3:44,310,"$423,730.00","$380,243.00"
IAH - SMF,51043595613,IAH-SMF-CVG 1,737-900ER,https://www.airlines-manager.com/network/showline/44844654,https://www.airlines-manager.com/network/showflight/51043595613,https://www.airlines-manager.com/aircraft/show/99093335,2:15,10:29,320,"$529,052.00","$479,823.00"
IAH - SMF,51043595614,IAH-SMF-CVG 5 B,A319-100,https://www.airlines-manager.com/network/showline/44844654,https://www.airlines-manager.com/network/showflight/51043595614,https://www.airlines-manager.com/aircraft/show/106499070,4:15,12:29,198,"$398,648.00","$363,259.00"
IAH - SMF,51066574308,IAH-SMF-CVG 4,737-900ER,https://www.airlines-manager.com/network/showline/44844654,https://www.airlines-manager.com/network/showflight/51066574308,https://www.airlines-manager.com/aircraft/show/99093332,13:00,21:14,320,"$529,052.00","$479,823.00"
IAH - SMF,51071689659,IAH-SMF-CVG 3,737-900ER,https://www.airlines-manager.com/network/showline/44844654,https://www.airlines-manager.com/network/showflight/51071689659,https://www.airlines-manager.com/aircraft/show/99093333,16:45,0:59,320,"$529,052.00","$479,823.00"
IAH - SMF,51082169824,IAH-SMF-CVG 2,737-900ER,https://www.airlines-manager.com/network/showline/44844654,https://www.airlines-manager.com/network/showflight/51082169824,https://www.airlines-manager.com/aircraft/show/99093334,20:45,4:59,320,"$529,052.00","$479,823.00"
IAH - STL,51043595482,IAH-CLE-STL 4,A321-200,https://www.airlines-manager.com/network/showline/45490332,https://www.airlines-manager.com/network/showflight/51043595482,https://www.airlines-manager.com/aircraft/show/88725601,1:15,5:59,310,"$299,346.00","$267,075.00"
IAH - STL,51054794998,IAH-CLE-STL 3,A321-200,https://www.airlines-manager.com/network/showline/45490332,https://www.airlines-manager.com/network/showflight/51054794998,https://www.airlines-manager.com/aircraft/show/103600702,8:15,12:59,310,"$299,346.00","$267,075.00"
IAH - STL,51066574606,IAH-CLE-STL 2,A321-200,https://www.airlines-manager.com/network/showline/45490332,https://www.airlines-manager.com/network/showflight/51066574606,https://www.airlines-manager.com/aircraft/show/103600701,14:00,18:44,310,"$299,346.00","$267,075.00"
IAH - STL,51071689504,IAH-DFW-STL,ERJ-175,https://www.airlines-manager.com/network/showline/45490332,https://www.airlines-manager.com/network/showflight/51071689504,https://www.airlines-manager.com/aircraft/show/96990010,15:00,19:44,112,"$142,348.00","$121,818.00"
IAH - STL,51082169792,IAH-CLE-STL 1,A321-200,https://www.airlines-manager.com/network/showline/45490332,https://www.airlines-manager.com/network/showflight/51082169792,https://www.airlines-manager.com/aircraft/show/103600700,20:15,0:59,310,"$299,346.00","$267,075.00"
IAH - STL,51082169793,IAH-CLE-STL 5 B,A319-100,https://www.airlines-manager.com/network/showline/45490332,https://www.airlines-manager.com/network/showflight/51082169793,https://www.airlines-manager.com/aircraft/show/110582844,21:45,2:29,198,"$227,489.00","$201,643.00"
IAH - TPA,51043595758,IAH-SLC-CLT 1,A321-200,https://www.airlines-manager.com/network/showline/42874411,https://www.airlines-manager.com/network/showflight/51043595758,https://www.airlines-manager.com/aircraft/show/93094699,4:15,9:29,310,"$326,085.00","$290,863.00"
IAH - TPA,51043595759,IAH-SLC-CLT 5,A321-200,https://www.airlines-manager.com/network/showline/42874411,https://www.airlines-manager.com/network/showflight/51043595759,https://www.airlines-manager.com/aircraft/show/93094695,6:15,11:29,310,"$326,085.00","$290,863.00"
IAH - TPA,51054795101,IAH-SLC-CLT 4,A321-200,https://www.airlines-manager.com/network/showline/42874411,https://www.airlines-manager.com/network/showflight/51054795101,https://www.airlines-manager.com/aircraft/show/93094696,10:00,15:14,310,"$326,085.00","$290,863.00"
IAH - TPA,51071689582,IAH-SLC-CLT 3,A321-200,https://www.airlines-manager.com/network/showline/42874411,https://www.airlines-manager.com/network/showflight/51071689582,https://www.airlines-manager.com/aircraft/show/93094697,15:45,20:59,310,"$326,085.00","$290,863.00"
IAH - TPA,51082169890,IAH-SLC-CLT 2,A321-200,https://www.airlines-manager.com/network/showline/42874411,https://www.airlines-manager.com/network/showflight/51082169890,https://www.airlines-manager.com/aircraft/show/93094698,21:30,2:44,310,"$326,085.00","$290,863.00"
IAH - TPA,51086541043,IAH-SLC-CLT 6,ERJ-175,https://www.airlines-manager.com/network/showline/42874411,https://www.airlines-manager.com/network/showflight/51086541043,https://www.airlines-manager.com/aircraft/show/93100455,23:30,4:44,109,"$153,197.00","$130,793.00"
IAH - TUL,51043595383,IAH-BTV-CAK 5,ERJ-175,https://www.airlines-manager.com/network/showline/48841734,https://www.airlines-manager.com/network/showflight/51043595383,https://www.airlines-manager.com/aircraft/show/82543907,0:30,4:14,112,"$93,634.00","$77,420.00"
IAH - TUL,51043595384,IAH-BTV-CAK 2,A321-200,https://www.airlines-manager.com/network/showline/48841734,https://www.airlines-manager.com/network/showflight/51043595384,https://www.airlines-manager.com/aircraft/show/114373409,3:30,7:14,310,"$202,736.00","$176,965.00"
IAH - TUL,51054795059,IAH-BTV-CAK 1,A321-200,https://www.airlines-manager.com/network/showline/48841734,https://www.airlines-manager.com/network/showflight/51054795059,https://www.airlines-manager.com/aircraft/show/114373410,9:45,13:29,310,"$202,736.00","$176,965.00"
IAH - TUL,51071689480,IAH-BTV-CAK 4,A321-200,https://www.airlines-manager.com/network/showline/48841734,https://www.airlines-manager.com/network/showflight/51071689480,https://www.airlines-manager.com/aircraft/show/113994196,15:00,18:44,310,"$202,736.00","$176,965.00"
IAH - TUL,51082169785,IAH-BTV-CAK 3,A321-200,https://www.airlines-manager.com/network/showline/48841734,https://www.airlines-manager.com/network/showflight/51082169785,https://www.airlines-manager.com/aircraft/show/86385103,20:15,23:59,310,"$202,736.00","$176,965.00"
IAH - TUS,51043595802,IAH-PIT-RDU 1,A321-200,https://www.airlines-manager.com/network/showline/45170727,https://www.airlines-manager.com/network/showflight/51043595802,https://www.airlines-manager.com/aircraft/show/100684074,5:30,11:14,310,"$358,303.00","$324,224.00"
IAH - TUS,51060918840,IAH-PIT-RDU 5 B,A319-100,https://www.airlines-manager.com/network/showline/45170727,https://www.airlines-manager.com/network/showflight/51060918840,https://www.airlines-manager.com/aircraft/show/110582845,10:15,15:59,198,"$271,744.00","$244,441.00"
IAH - TUS,51060918841,IAH-PIT-RDU 4,A321-200,https://www.airlines-manager.com/network/showline/45170727,https://www.airlines-manager.com/network/showflight/51060918841,https://www.airlines-manager.com/aircraft/show/100684071,11:30,17:14,310,"$358,303.00","$324,224.00"
IAH - TUS,51071689685,IAH-PIT-RDU 3,A321-200,https://www.airlines-manager.com/network/showline/45170727,https://www.airlines-manager.com/network/showflight/51071689685,https://www.airlines-manager.com/aircraft/show/100684072,17:00,22:44,310,"$358,303.00","$324,224.00"
IAH - TUS,51086541028,IAH-PIT-RDU 2,A321-200,https://www.airlines-manager.com/network/showline/45170727,https://www.airlines-manager.com/network/showflight/51086541028,https://www.airlines-manager.com/aircraft/show/100684073,23:15,4:59,310,"$358,303.00","$324,224.00"
IAH - UIO,51043595393,IAH 84A-2 E1,777-300,https://www.airlines-manager.com/network/showline/41572544,https://www.airlines-manager.com/network/showflight/51043595393,https://www.airlines-manager.com/aircraft/show/89439130,0:30,11:14,932,"$1,792,178.00","$1,636,784.00"
IAH - UIO,51066574457,IAH 84A-5 E1,777-300,https://www.airlines-manager.com/network/showline/41572544,https://www.airlines-manager.com/network/showflight/51066574457,https://www.airlines-manager.com/aircraft/show/89124074,13:15,23:59,932,"$1,792,178.00","$1,636,784.00"
IAH - YOW,51043595701,IAH-YOW-SJD 2,737-900ER,https://www.airlines-manager.com/network/showline/48842072,https://www.airlines-manager.com/network/showflight/51043595701,https://www.airlines-manager.com/aircraft/show/113114108,3:15,11:14,320,"$508,952.00","$461,295.00"
IAH - YOW,51054794974,IAH-YOW-SJD 1,737-900ER,https://www.airlines-manager.com/network/showline/48842072,https://www.airlines-manager.com/network/showflight/51054794974,https://www.airlines-manager.com/aircraft/show/114266974,8:00,15:59,320,"$508,952.00","$461,295.00"
IAH - YOW,51066574439,IAH-YOW-SJD 5,ERJ-175,https://www.airlines-manager.com/network/showline/48842072,https://www.airlines-manager.com/network/showflight/51066574439,https://www.airlines-manager.com/aircraft/show/105099862,13:00,20:59,112,"$238,576.00","$210,371.00"
IAH - YOW,51077491378,IAH-YOW-SJD 4,737-900ER,https://www.airlines-manager.com/network/showline/48842072,https://www.airlines-manager.com/network/showflight/51077491378,https://www.airlines-manager.com/aircraft/show/114266975,17:45,1:44,320,"$508,952.00","$461,295.00"
IAH - YOW,51082169867,IAH-YOW-SJD 3,737-900ER,https://www.airlines-manager.com/network/showline/48842072,https://www.airlines-manager.com/network/showflight/51082169867,https://www.airlines-manager.com/aircraft/show/113250059,21:15,5:14,320,"$508,952.00","$461,295.00"
IAH - YUL,51043595423,IAH-YYC-YUL 4,757-300,https://www.airlines-manager.com/network/showline/48842047,https://www.airlines-manager.com/network/showflight/51043595423,https://www.airlines-manager.com/aircraft/show/114266980,0:45,8:44,400,"$682,526.00","$624,585.00"
IAH - YUL,51043595424,IAH-YYC-YUL 3,757-300,https://www.airlines-manager.com/network/showline/48842047,https://www.airlines-manager.com/network/showflight/51043595424,https://www.airlines-manager.com/aircraft/show/114266979,2:00,9:59,400,"$682,526.00","$624,585.00"
IAH - YUL,51060918991,IAH-YYC-YUL 2,757-300,https://www.airlines-manager.com/network/showline/48842047,https://www.airlines-manager.com/network/showflight/51060918991,https://www.airlines-manager.com/aircraft/show/114266978,12:00,19:59,400,"$682,526.00","$624,585.00"
IAH - YUL,51082169825,IAH-YYC-YUL 1,757-300,https://www.airlines-manager.com/network/showline/48842047,https://www.airlines-manager.com/network/showflight/51082169825,https://www.airlines-manager.com/aircraft/show/114266977,20:45,4:44,400,"$682,526.00","$624,585.00"
IAH - YVR,51043595442,IAH-MEX-YYZ 1,757-300,https://www.airlines-manager.com/network/showline/41988815,https://www.airlines-manager.com/network/showflight/51043595442,https://www.airlines-manager.com/aircraft/show/97076946,1:00,10:29,400,"$772,534.00","$704,472.00"
IAH - YVR,51043595443,IAH-MEX-YYZ 4,757-300,https://www.airlines-manager.com/network/showline/41988815,https://www.airlines-manager.com/network/showflight/51043595443,https://www.airlines-manager.com/aircraft/show/97076943,4:00,13:29,400,"$772,534.00","$704,472.00"
IAH - YVR,51066574431,IAH-MEX-YYZ 3,757-300,https://www.airlines-manager.com/network/showline/41988815,https://www.airlines-manager.com/network/showflight/51066574431,https://www.airlines-manager.com/aircraft/show/97076944,13:00,22:29,400,"$772,534.00","$704,472.00"
IAH - YVR,51071689611,IAH-MEX-YYZ 6 S,ERJ-175,https://www.airlines-manager.com/network/showline/41988815,https://www.airlines-manager.com/network/showflight/51071689611,https://www.airlines-manager.com/aircraft/show/97026605,16:00,1:44,136,"$285,256.00","$249,348.00"
IAH - YVR,51077491568,IAH-MEX-YYZ 2,757-300,https://www.airlines-manager.com/network/showline/41988815,https://www.airlines-manager.com/network/showflight/51077491568,https://www.airlines-manager.com/aircraft/show/97076945,20:00,5:29,400,"$772,534.00","$704,472.00"
IAH - YVR,51086541007,IAH-MEX-YYZ 5,757-300,https://www.airlines-manager.com/network/showline/41988815,https://www.airlines-manager.com/network/showflight/51086541007,https://www.airlines-manager.com/aircraft/show/97076942,23:00,8:29,400,"$772,534.00","$704,472.00"
IAH - YYC,51043595505,IAH-YYC-YUL 2,757-300,https://www.airlines-manager.com/network/showline/48842030,https://www.airlines-manager.com/network/showflight/51043595505,https://www.airlines-manager.com/aircraft/show/114266978,1:15,9:59,400,"$742,661.00","$679,909.00"
IAH - YYC,51060918988,IAH-YYC-YUL 1,757-300,https://www.airlines-manager.com/network/showline/48842030,https://www.airlines-manager.com/network/showflight/51060918988,https://www.airlines-manager.com/aircraft/show/114266977,12:00,20:44,400,"$742,661.00","$679,909.00"
IAH - YYC,51071689616,IAH-YYC-YUL 4,757-300,https://www.airlines-manager.com/network/showline/48842030,https://www.airlines-manager.com/network/showflight/51071689616,https://www.airlines-manager.com/aircraft/show/114266980,16:00,0:44,400,"$742,661.00","$679,909.00"
IAH - YYC,51077491255,IAH-YYC-YUL 3,757-300,https://www.airlines-manager.com/network/showline/48842030,https://www.airlines-manager.com/network/showflight/51077491255,https://www.airlines-manager.com/aircraft/show/114266979,17:15,1:59,400,"$742,661.00","$679,909.00"
IAH - YYZ,51043595709,IAH-MEX-YYZ 3,757-300,https://www.airlines-manager.com/network/showline/41856128,https://www.airlines-manager.com/network/showflight/51043595709,https://www.airlines-manager.com/aircraft/show/97076944,3:30,10:29,400,"$571,272.00","$512,624.00"
IAH - YYZ,51054794904,IAH-MEX-YYZ 6 S,ERJ-175,https://www.airlines-manager.com/network/showline/41856128,https://www.airlines-manager.com/network/showflight/51054794904,https://www.airlines-manager.com/aircraft/show/97026605,6:45,13:44,136,"$211,051.00","$180,508.00"
IAH - YYZ,51066574340,IAH-MEX-YYZ 2,757-300,https://www.airlines-manager.com/network/showline/41856128,https://www.airlines-manager.com/network/showflight/51066574340,https://www.airlines-manager.com/aircraft/show/97076945,13:00,19:59,400,"$571,272.00","$512,624.00"
IAH - YYZ,51071689634,IAH-MEX-YYZ 5,757-300,https://www.airlines-manager.com/network/showline/41856128,https://www.airlines-manager.com/network/showflight/51071689634,https://www.airlines-manager.com/aircraft/show/97076942,16:00,22:59,400,"$571,272.00","$512,624.00"
IAH - YYZ,51077491391,IAH-MEX-YYZ 1,757-300,https://www.airlines-manager.com/network/showline/41856128,https://www.airlines-manager.com/network/showflight/51077491391,https://www.airlines-manager.com/aircraft/show/97076946,18:00,0:59,400,"$571,272.00","$512,624.00"
IAH - YYZ,51082169860,IAH-MEX-YYZ 4,757-300,https://www.airlines-manager.com/network/showline/41856128,https://www.airlines-manager.com/network/showflight/51082169860,https://www.airlines-manager.com/aircraft/show/97076943,21:00,3:59,400,"$571,272.00","$512,624.00"
MIA - ABQ,51043595494,MIA-IAD-TUS 1,A321-200,https://www.airlines-manager.com/network/showline/44372807,https://www.airlines-manager.com/network/showflight/51043595494,https://www.airlines-manager.com/aircraft/show/97556721,1:15,9:59,310,"$546,501.00","$498,660.00"
MIA - ABQ,51043595495,MIA-IAD-TUS 4,A321-200,https://www.airlines-manager.com/network/showline/44372807,https://www.airlines-manager.com/network/showflight/51043595495,https://www.airlines-manager.com/aircraft/show/97556718,4:15,12:59,310,"$546,501.00","$498,660.00"
MIA - ABQ,51054795097,MIA-IAD-TUS 3,A321-200,https://www.airlines-manager.com/network/showline/44372807,https://www.airlines-manager.com/network/showflight/51054795097,https://www.airlines-manager.com/aircraft/show/97556719,10:00,18:44,310,"$546,501.00","$498,660.00"
MIA - ABQ,51077491548,MIA-IAD-TUS 2,A321-200,https://www.airlines-manager.com/network/showline/44372807,https://www.airlines-manager.com/network/showflight/51077491548,https://www.airlines-manager.com/aircraft/show/97556720,19:30,4:14,310,"$546,501.00","$498,660.00"
MIA - ABQ,51086540968,MIA-IAD-TUS 5,A321-200,https://www.airlines-manager.com/network/showline/44372807,https://www.airlines-manager.com/network/showflight/51086540968,https://www.airlines-manager.com/aircraft/show/97556716,22:30,7:14,310,"$546,501.00","$498,660.00"
MIA - ACC,51066574623,MIA 84B-1 E2,777-300,https://www.airlines-manager.com/network/showline/43186738,https://www.airlines-manager.com/network/showflight/51066574623,https://www.airlines-manager.com/aircraft/show/106676225,14:15,11:59,962,"$3,557,573.00","$3,247,260.00"
MIA - ACC,51086541001,MIA 84B-3 E2,777-300,https://www.airlines-manager.com/network/showline/43186738,https://www.airlines-manager.com/network/showflight/51086541001,https://www.airlines-manager.com/aircraft/show/106676227,22:45,20:29,962,"$3,557,573.00","$3,247,260.00"
MIA - ALB,51043595717,MIA-DSM-ALB 3,737-900ER,https://www.airlines-manager.com/network/showline/48487680,https://www.airlines-manager.com/network/showflight/51043595717,https://www.airlines-manager.com/aircraft/show/113101233,3:30,10:14,320,"$427,571.00","$386,197.00"
MIA - ALB,51066574296,MIA-DSM-ALB 2,737-900ER,https://www.airlines-manager.com/network/showline/48487680,https://www.airlines-manager.com/network/showflight/51066574296,https://www.airlines-manager.com/aircraft/show/113101230,13:00,19:44,320,"$427,571.00","$386,197.00"
MIA - ALB,51071689614,MIA-DSM-ALB 5,ERJ-175,https://www.airlines-manager.com/network/showline/48487680,https://www.airlines-manager.com/network/showflight/51071689614,https://www.airlines-manager.com/aircraft/show/100049776,16:00,22:59,112,"$202,234.00","$177,971.00"
MIA - ALB,51082169795,MIA-DSM-ALB 1,737-900ER,https://www.airlines-manager.com/network/showline/48487680,https://www.airlines-manager.com/network/showflight/51082169795,https://www.airlines-manager.com/aircraft/show/111064081,20:15,2:59,320,"$427,571.00","$386,197.00"
MIA - ALB,51086541035,MIA-DSM-ALB 4,737-900ER,https://www.airlines-manager.com/network/showline/48487680,https://www.airlines-manager.com/network/showflight/51086541035,https://www.airlines-manager.com/aircraft/show/113101228,23:15,5:59,320,"$427,571.00","$386,197.00"
MIA - ALG,51071689681,MIA 84B-6 E2,777-300,https://www.airlines-manager.com/network/showline/46538378,https://www.airlines-manager.com/network/showflight/51071689681,https://www.airlines-manager.com/aircraft/show/106676230,17:00,12:29,962,"$3,230,543.00","$2,945,011.00"
MIA - ALG,51082169822,MIA 84B-4 E2,777-300,https://www.airlines-manager.com/network/showline/46538378,https://www.airlines-manager.com/network/showflight/51082169822,https://www.airlines-manager.com/aircraft/show/106676228,20:30,15:59,962,"$3,230,543.00","$2,945,011.00"
MIA - ANU,51043595821,MIA-ANU-SXM 3 S,A319-100,https://www.airlines-manager.com/network/showline/47559658,https://www.airlines-manager.com/network/showflight/51043595821,https://www.airlines-manager.com/aircraft/show/110114297,6:30,13:44,228,"$354,785.00","$324,102.00"
MIA - ANU,51054794999,MIA-ANU-SXM 4 S,A319-100,https://www.airlines-manager.com/network/showline/47559658,https://www.airlines-manager.com/network/showflight/51054794999,https://www.airlines-manager.com/aircraft/show/110114298,8:30,15:44,228,"$354,785.00","$324,102.00"
MIA - ANU,51060918999,MIA-ANU-SXM 1 S,A319-100,https://www.airlines-manager.com/network/showline/47559658,https://www.airlines-manager.com/network/showflight/51060918999,https://www.airlines-manager.com/aircraft/show/110114295,12:00,19:14,228,"$354,785.00","$324,102.00"
MIA - ANU,51066574344,MIA-ANU-SXM 2 S,A319-100,https://www.airlines-manager.com/network/showline/47559658,https://www.airlines-manager.com/network/showflight/51066574344,https://www.airlines-manager.com/aircraft/show/110114296,13:00,20:14,228,"$354,785.00","$324,102.00"
MIA - ANU,51071689647,MIA-ANU-SXM 6 S,A319-100,https://www.airlines-manager.com/network/showline/47559658,https://www.airlines-manager.com/network/showflight/51071689647,https://www.airlines-manager.com/aircraft/show/110114300,16:30,23:44,228,"$354,785.00","$324,102.00"
MIA - ANU,51086541049,MIA-ANU-SXM 5 S,A319-100,https://www.airlines-manager.com/network/showline/47559658,https://www.airlines-manager.com/network/showflight/51086541049,https://www.airlines-manager.com/aircraft/show/110114299,23:30,6:44,228,"$354,785.00","$324,102.00"
MIA - ATL,51043595819,MIA-LAX-DEN 5,757-300,https://www.airlines-manager.com/network/showline/42257954,https://www.airlines-manager.com/network/showflight/51043595819,https://www.airlines-manager.com/aircraft/show/91126653,6:30,10:59,400,"$353,815.00","$289,570.00"
MIA - ATL,51060918984,MIA-LAX-DEN 4,757-300,https://www.airlines-manager.com/network/showline/42257954,https://www.airlines-manager.com/network/showflight/51060918984,https://www.airlines-manager.com/aircraft/show/91126652,12:00,16:29,400,"$353,815.00","$289,570.00"
MIA - ATL,51066574297,MIA-LAX-DEN 2,757-300,https://www.airlines-manager.com/network/showline/42257954,https://www.airlines-manager.com/network/showflight/51066574297,https://www.airlines-manager.com/aircraft/show/91126650,13:00,17:29,400,"$353,815.00","$289,570.00"
MIA - ATL,51077491544,MIA-LAX-DEN 1,757-300,https://www.airlines-manager.com/network/showline/42257954,https://www.airlines-manager.com/network/showflight/51077491544,https://www.airlines-manager.com/aircraft/show/91126649,19:30,23:59,400,"$353,815.00","$289,570.00"
MIA - ATL,51082169863,MIA-LAX-DEN 3,757-300,https://www.airlines-manager.com/network/showline/42257954,https://www.airlines-manager.com/network/showflight/51082169863,https://www.airlines-manager.com/aircraft/show/91126651,21:00,1:29,346,"$326,034.00","$262,624.00"
MIA - AUA,51043595673,MIA-BGI-CUR 1,737-900ER,https://www.airlines-manager.com/network/showline/46704488,https://www.airlines-manager.com/network/showflight/51043595673,https://www.airlines-manager.com/aircraft/show/107121795,3:00,9:29,320,"$403,121.00","$363,301.00"
MIA - AUA,51043595674,MIA-BGI-CUR 4,737-900ER,https://www.airlines-manager.com/network/showline/46704488,https://www.airlines-manager.com/network/showflight/51043595674,https://www.airlines-manager.com/aircraft/show/107121798,4:30,10:59,320,"$403,121.00","$363,301.00"
MIA - AUA,51060918889,MIA-BGI-CUR 3,737-900ER,https://www.airlines-manager.com/network/showline/46704488,https://www.airlines-manager.com/network/showflight/51060918889,https://www.airlines-manager.com/aircraft/show/107121797,11:00,17:29,320,"$403,121.00","$363,301.00"
MIA - AUA,51077491377,MIA-BGI-CUR 2,737-900ER,https://www.airlines-manager.com/network/showline/46704488,https://www.airlines-manager.com/network/showflight/51077491377,https://www.airlines-manager.com/aircraft/show/107121796,17:45,0:14,320,"$403,121.00","$363,301.00"
MIA - AUA,51082169910,MIA-BGI-CUR 5,737-900ER,https://www.airlines-manager.com/network/showline/46704488,https://www.airlines-manager.com/network/showflight/51082169910,https://www.airlines-manager.com/aircraft/show/107121799,21:45,4:14,242,"$314,030.00","$277,191.00"
MIA - AUS,51043595664,MIA-AUS-PIT 2,737-900ER,https://www.airlines-manager.com/network/showline/44971964,https://www.airlines-manager.com/network/showflight/51043595664,https://www.airlines-manager.com/aircraft/show/99920625,2:45,9:14,320,"$401,516.00","$357,817.00"
MIA - AUS,51054795091,MIA-AUS-PIT 1,737-900ER,https://www.airlines-manager.com/network/showline/44971964,https://www.airlines-manager.com/network/showflight/51054795091,https://www.airlines-manager.com/aircraft/show/99920626,10:00,16:29,320,"$401,516.00","$357,817.00"
MIA - AUS,51066574610,MIA-AUS-PIT 5,ERJ-175,https://www.airlines-manager.com/network/showline/44971964,https://www.airlines-manager.com/network/showflight/51066574610,https://www.airlines-manager.com/aircraft/show/82323689,14:00,20:29,112,"$189,575.00","$164,516.00"
MIA - AUS,51066574611,MIA-AUS-PIT 4,737-900ER,https://www.airlines-manager.com/network/showline/44971964,https://www.airlines-manager.com/network/showflight/51066574611,https://www.airlines-manager.com/aircraft/show/99920623,14:45,21:14,320,"$401,516.00","$357,817.00"
MIA - AUS,51082169834,MIA-AUS-PIT 3,737-900ER,https://www.airlines-manager.com/network/showline/44971964,https://www.airlines-manager.com/network/showflight/51082169834,https://www.airlines-manager.com/aircraft/show/99920624,20:45,3:14,320,"$401,516.00","$357,817.00"
MIA - BDA,51043595676,MIA-PUJ-BDA 1 S,A319-100,https://www.airlines-manager.com/network/showline/42193835,https://www.airlines-manager.com/network/showflight/51043595676,https://www.airlines-manager.com/aircraft/show/104034457,3:00,9:14,228,"$294,602.00","$267,076.00"
MIA - BDA,51043595677,MIA-PUJ-BDA 3 S,A319-100,https://www.airlines-manager.com/network/showline/42193835,https://www.airlines-manager.com/network/showflight/51043595677,https://www.airlines-manager.com/aircraft/show/104034459,3:45,9:59,228,"$294,602.00","$267,076.00"
MIA - BDA,51054795070,MIA-PUJ-BDA 4 S,A319-100,https://www.airlines-manager.com/network/showline/42193835,https://www.airlines-manager.com/network/showflight/51054795070,https://www.airlines-manager.com/aircraft/show/104034460,10:00,16:14,228,"$294,602.00","$267,076.00"
MIA - BDA,51060918926,MIA-PUJ-BDA 6 S,A319-100,https://www.airlines-manager.com/network/showline/42193835,https://www.airlines-manager.com/network/showflight/51060918926,https://www.airlines-manager.com/aircraft/show/99326789,11:00,17:14,228,"$294,602.00","$267,076.00"
MIA - BDA,51071689584,MIA-PUJ-BDA 5 S,A319-100,https://www.airlines-manager.com/network/showline/42193835,https://www.airlines-manager.com/network/showflight/51071689584,https://www.airlines-manager.com/aircraft/show/104034461,15:45,21:59,228,"$294,602.00","$267,076.00"
MIA - BDA,51082169878,MIA-PUJ-BDA 2 S,A319-100,https://www.airlines-manager.com/network/showline/42193835,https://www.airlines-manager.com/network/showflight/51082169878,https://www.airlines-manager.com/aircraft/show/104034458,21:15,3:29,228,"$294,602.00","$267,076.00"
MIA - BDL,51043595667,MIA-BDL-SAT 2,737-900ER,https://www.airlines-manager.com/network/showline/46909505,https://www.airlines-manager.com/network/showflight/51043595667,https://www.airlines-manager.com/aircraft/show/107763565,3:00,9:44,320,"$425,506.00","$383,225.00"
MIA - BDL,51054794984,MIA-BDL-SAT 5,ERJ-175,https://www.airlines-manager.com/network/showline/46909505,https://www.airlines-manager.com/network/showflight/51054794984,https://www.airlines-manager.com/aircraft/show/107467213,8:00,14:44,112,"$200,320.00","$175,693.00"
MIA - BDL,51066574471,MIA-BDL-SAT 4,737-900ER,https://www.airlines-manager.com/network/showline/46909505,https://www.airlines-manager.com/network/showflight/51066574471,https://www.airlines-manager.com/aircraft/show/107763561,13:45,20:29,320,"$425,506.00","$383,225.00"
MIA - BDL,51066574472,MIA-BDL-SAT 1,737-900ER,https://www.airlines-manager.com/network/showline/46909505,https://www.airlines-manager.com/network/showflight/51066574472,https://www.airlines-manager.com/aircraft/show/107763566,14:00,20:44,320,"$425,506.00","$383,225.00"
MIA - BDL,51082169815,MIA-BDL-SAT 3,737-900ER,https://www.airlines-manager.com/network/showline/46909505,https://www.airlines-manager.com/network/showflight/51082169815,https://www.airlines-manager.com/aircraft/show/107763562,20:30,3:14,320,"$425,506.00","$383,225.00"
MIA - BGI,51043595661,MIA-BGI-CUR 2,737-900ER,https://www.airlines-manager.com/network/showline/46704471,https://www.airlines-manager.com/network/showflight/51043595661,https://www.airlines-manager.com/aircraft/show/107121796,2:45,10:59,320,"$515,000.00","$466,176.00"
MIA - BGI,51054794884,MIA-BGI-CUR 5,737-900ER,https://www.airlines-manager.com/network/showline/46704471,https://www.airlines-manager.com/network/showflight/51054794884,https://www.airlines-manager.com/aircraft/show/107121799,6:45,14:59,320,"$515,000.00","$466,176.00"
MIA - BGI,51060918987,MIA-BGI-CUR 1,737-900ER,https://www.airlines-manager.com/network/showline/46704471,https://www.airlines-manager.com/network/showflight/51060918987,https://www.airlines-manager.com/aircraft/show/107121795,12:00,20:14,320,"$515,000.00","$466,176.00"
MIA - BGI,51066574469,MIA-BGI-CUR 4,737-900ER,https://www.airlines-manager.com/network/showline/46704471,https://www.airlines-manager.com/network/showflight/51066574469,https://www.airlines-manager.com/aircraft/show/107121798,13:30,21:44,320,"$515,000.00","$466,176.00"
MIA - BGI,51077491571,MIA-BGI-CUR 3,737-900ER,https://www.airlines-manager.com/network/showline/46704471,https://www.airlines-manager.com/network/showflight/51077491571,https://www.airlines-manager.com/aircraft/show/107121797,20:00,4:14,320,"$515,000.00","$466,176.00"
MIA - BNA,51043595429,MIA-BOI-BNA 5,ERJ-175,https://www.airlines-manager.com/network/showline/45701836,https://www.airlines-manager.com/network/showflight/51043595429,https://www.airlines-manager.com/aircraft/show/103534663,0:45,5:59,112,"$156,995.00","$135,517.00"
MIA - BNA,51043595430,MIA-BOI-BNA 4,737-900ER,https://www.airlines-manager.com/network/showline/45701836,https://www.airlines-manager.com/network/showflight/51043595430,https://www.airlines-manager.com/aircraft/show/103775657,1:15,6:29,320,"$330,251.00","$292,000.00"
MIA - BNA,51043595431,MIA-BOI-BNA 3,737-900ER,https://www.airlines-manager.com/network/showline/45701836,https://www.airlines-manager.com/network/showflight/51043595431,https://www.airlines-manager.com/aircraft/show/104020880,4:45,9:59,320,"$330,251.00","$292,000.00"
MIA - BNA,51054795120,MIA-BOI-BNA 2,737-900ER,https://www.airlines-manager.com/network/showline/45701836,https://www.airlines-manager.com/network/showflight/51054795120,https://www.airlines-manager.com/aircraft/show/104022609,10:00,15:14,320,"$330,251.00","$292,000.00"
MIA - BNA,51060918975,MIA-BOI-BNA 5,ERJ-175,https://www.airlines-manager.com/network/showline/45701836,https://www.airlines-manager.com/network/showflight/51060918975,https://www.airlines-manager.com/aircraft/show/103534663,12:00,17:14,112,"$156,995.00","$135,517.00"
MIA - BNA,51082169870,MIA-BOI-BNA 1,737-900ER,https://www.airlines-manager.com/network/showline/45701836,https://www.airlines-manager.com/network/showflight/51082169870,https://www.airlines-manager.com/aircraft/show/104133006,21:15,2:29,320,"$330,251.00","$292,000.00"
MIA - BOI,51043595552,MIA-ORD-BOI-JAX B,A319-100,https://www.airlines-manager.com/network/showline/45701907,https://www.airlines-manager.com/network/showflight/51043595552,https://www.airlines-manager.com/aircraft/show/106339154,1:45,12:59,198,"$522,418.00","$478,549.00"
MIA - BOI,51054795119,MIA-BOI-BNA 1,737-900ER,https://www.airlines-manager.com/network/showline/45701907,https://www.airlines-manager.com/network/showflight/51054795119,https://www.airlines-manager.com/aircraft/show/104133006,10:00,21:14,320,"$694,059.00","$633,907.00"
MIA - BOI,51066574602,MIA-BOI-BNA 4,737-900ER,https://www.airlines-manager.com/network/showline/45701907,https://www.airlines-manager.com/network/showflight/51066574602,https://www.airlines-manager.com/aircraft/show/103775657,14:00,1:14,320,"$694,059.00","$633,907.00"
MIA - BOI,51077491356,MIA-BOI-BNA 3,737-900ER,https://www.airlines-manager.com/network/showline/45701907,https://www.airlines-manager.com/network/showflight/51077491356,https://www.airlines-manager.com/aircraft/show/104020880,17:30,4:44,320,"$694,059.00","$633,907.00"
MIA - BOI,51086541004,MIA-BOI-BNA 2,737-900ER,https://www.airlines-manager.com/network/showline/45701907,https://www.airlines-manager.com/network/showflight/51086541004,https://www.airlines-manager.com/aircraft/show/104022609,22:45,9:59,320,"$694,059.00","$633,907.00"
MIA - BOS,51043595584,MIA-SJU-BOS 5,A321-200,https://www.airlines-manager.com/network/showline/42307221,https://www.airlines-manager.com/network/showflight/51043595584,https://www.airlines-manager.com/aircraft/show/91352059,2:00,8:59,310,"$443,334.00","$398,925.00"
MIA - BOS,51043595585,MIA-SJU-BOS 1,A321-200,https://www.airlines-manager.com/network/showline/42307221,https://www.airlines-manager.com/network/showflight/51043595585,https://www.airlines-manager.com/aircraft/show/91352063,5:00,11:59,310,"$443,334.00","$398,925.00"
MIA - BOS,51060918952,MIA-SJU-BOS 4,A321-200,https://www.airlines-manager.com/network/showline/42307221,https://www.airlines-manager.com/network/showflight/51060918952,https://www.airlines-manager.com/aircraft/show/91352060,11:15,18:14,310,"$443,334.00","$398,925.00"
MIA - BOS,51071689650,MIA-SJU-BOS 2,A321-200,https://www.airlines-manager.com/network/showline/42307221,https://www.airlines-manager.com/network/showflight/51071689650,https://www.airlines-manager.com/aircraft/show/91352062,16:30,23:29,310,"$443,334.00","$398,925.00"
MIA - BOS,51077491506,MIA-SJU-BOS 3,A321-200,https://www.airlines-manager.com/network/showline/42307221,https://www.airlines-manager.com/network/showflight/51077491506,https://www.airlines-manager.com/aircraft/show/91352061,19:00,1:59,310,"$443,334.00","$398,925.00"
MIA - BOS,51082169800,MIA-SJU-BOS 6 B,A319-100,https://www.airlines-manager.com/network/showline/42307221,https://www.airlines-manager.com/network/showflight/51082169800,https://www.airlines-manager.com/aircraft/show/110582841,20:15,3:14,198,"$335,405.00","$299,824.00"
MIA - BTV,51043595675,MIA-DSM-ALB 1,737-900ER,https://www.airlines-manager.com/network/showline/48487638,https://www.airlines-manager.com/network/showflight/51043595675,https://www.airlines-manager.com/aircraft/show/111064081,3:00,10:14,320,"$459,337.00","$416,465.00"
MIA - BTV,51054795021,MIA-DSM-ALB 4,737-900ER,https://www.airlines-manager.com/network/showline/48487638,https://www.airlines-manager.com/network/showflight/51054795021,https://www.airlines-manager.com/aircraft/show/113101228,8:45,15:59,320,"$459,337.00","$416,465.00"
MIA - BTV,51066574331,MIA-DSM-ALB 3,737-900ER,https://www.airlines-manager.com/network/showline/48487638,https://www.airlines-manager.com/network/showflight/51066574331,https://www.airlines-manager.com/aircraft/show/113101233,13:00,20:14,320,"$459,337.00","$416,465.00"
MIA - BTV,51077491558,MIA-DSM-ALB 2,737-900ER,https://www.airlines-manager.com/network/showline/48487638,https://www.airlines-manager.com/network/showflight/51077491558,https://www.airlines-manager.com/aircraft/show/113101230,19:45,2:59,320,"$459,337.00","$416,465.00"
MIA - BTV,51086541006,MIA-DSM-ALB 5,ERJ-175,https://www.airlines-manager.com/network/showline/48487638,https://www.airlines-manager.com/network/showflight/51086541006,https://www.airlines-manager.com/aircraft/show/100049776,23:00,6:29,110,"$216,516.00","$191,261.00"
MIA - BUF,51043595681,MIA-BDL-SAT 4,737-900ER,https://www.airlines-manager.com/network/showline/46909524,https://www.airlines-manager.com/network/showflight/51043595681,https://www.airlines-manager.com/aircraft/show/107763561,3:00,9:44,320,"$423,660.00","$381,845.00"
MIA - BUF,51043595682,MIA-BDL-SAT 1,737-900ER,https://www.airlines-manager.com/network/showline/46909524,https://www.airlines-manager.com/network/showflight/51043595682,https://www.airlines-manager.com/aircraft/show/107763566,3:15,9:59,320,"$423,660.00","$381,845.00"
MIA - BUF,51060918883,MIA-BDL-SAT 3,737-900ER,https://www.airlines-manager.com/network/showline/46909524,https://www.airlines-manager.com/network/showflight/51060918883,https://www.airlines-manager.com/aircraft/show/107763562,11:00,17:44,320,"$423,660.00","$381,845.00"
MIA - BUF,51077491363,MIA-BDL-SAT 2,737-900ER,https://www.airlines-manager.com/network/showline/46909524,https://www.airlines-manager.com/network/showflight/51077491363,https://www.airlines-manager.com/aircraft/show/107763565,17:30,0:14,320,"$423,660.00","$381,845.00"
MIA - BUF,51082169875,MIA-BDL-SAT 5,ERJ-175,https://www.airlines-manager.com/network/showline/46909524,https://www.airlines-manager.com/network/showflight/51082169875,https://www.airlines-manager.com/aircraft/show/107467213,21:15,3:59,112,"$199,435.00","$175,067.00"
MIA - BUR,51043595655,MIA-BUR-PVD 4,A321-200,https://www.airlines-manager.com/network/showline/46909485,https://www.airlines-manager.com/network/showflight/51043595655,https://www.airlines-manager.com/aircraft/show/108834806,2:45,13:59,310,"$700,124.00","$647,219.00"
MIA - BUR,51060918882,MIA-BUR-PVD 1,A321-200,https://www.airlines-manager.com/network/showline/46909485,https://www.airlines-manager.com/network/showflight/51060918882,https://www.airlines-manager.com/aircraft/show/108834803,11:00,22:14,310,"$700,124.00","$647,219.00"
MIA - BUR,51066574496,MIA-BUR-PVD 3,A321-200,https://www.airlines-manager.com/network/showline/46909485,https://www.airlines-manager.com/network/showflight/51066574496,https://www.airlines-manager.com/aircraft/show/108834805,14:00,1:14,310,"$700,124.00","$647,219.00"
MIA - BUR,51077491579,MIA-BUR-PVD 5 B,A319-100,https://www.airlines-manager.com/network/showline/46909485,https://www.airlines-manager.com/network/showflight/51077491579,https://www.airlines-manager.com/aircraft/show/108834807,20:00,7:14,198,"$525,255.00","$482,830.00"
MIA - BUR,51082169835,MIA-BUR-PVD 2,A321-200,https://www.airlines-manager.com/network/showline/46909485,https://www.airlines-manager.com/network/showflight/51082169835,https://www.airlines-manager.com/aircraft/show/108834804,20:45,7:59,310,"$700,124.00","$647,219.00"
MIA - BWI,51043595736,MIA-BWI-YYZ 4,A321-200,https://www.airlines-manager.com/network/showline/42608062,https://www.airlines-manager.com/network/showflight/51043595736,https://www.airlines-manager.com/aircraft/show/92153442,4:00,9:44,310,"$364,030.00","$325,721.00"
MIA - BWI,51043595737,MIA-BWI-YYZ 5,A321-200,https://www.airlines-manager.com/network/showline/42608062,https://www.airlines-manager.com/network/showflight/51043595737,https://www.airlines-manager.com/aircraft/show/92153439,6:00,11:44,310,"$364,030.00","$325,721.00"
MIA - BWI,51054795087,MIA-BWI-YYZ 1,A321-200,https://www.airlines-manager.com/network/showline/42608062,https://www.airlines-manager.com/network/showflight/51054795087,https://www.airlines-manager.com/aircraft/show/92153443,10:00,15:44,310,"$364,030.00","$325,721.00"
MIA - BWI,51066574440,MIA-BWI-YYZ 2,A321-200,https://www.airlines-manager.com/network/showline/42608062,https://www.airlines-manager.com/network/showflight/51066574440,https://www.airlines-manager.com/aircraft/show/92153440,13:00,18:44,310,"$364,030.00","$325,721.00"
MIA - BWI,51082169862,MIA-BWI-YYZ 3,A321-200,https://www.airlines-manager.com/network/showline/42608062,https://www.airlines-manager.com/network/showflight/51082169862,https://www.airlines-manager.com/aircraft/show/92153441,21:00,2:44,310,"$364,030.00","$325,721.00"
MIA - BWI,51086541021,MIA-BWI-YYZ 6 S,ERJ-175,https://www.airlines-manager.com/network/showline/42608062,https://www.airlines-manager.com/network/showflight/51086541021,https://www.airlines-manager.com/aircraft/show/92137503,23:00,4:44,87,"$122,376.00","$101,536.00"
MIA - CHS,51043595688,MIA-SDF-PWM 2,A321-200,https://www.airlines-manager.com/network/showline/46376123,https://www.airlines-manager.com/network/showflight/51043595688,https://www.airlines-manager.com/aircraft/show/94886626,3:15,7:14,310,"$224,883.00","$198,891.00"
MIA - CHS,51043595689,MIA CARGO 1,737-700,https://www.airlines-manager.com/network/showline/46376123,https://www.airlines-manager.com/network/showflight/51043595689,https://www.airlines-manager.com/aircraft/show/107577220,4:15,8:14,0,"$60,609.00","$43,037.00"
MIA - CHS,51054795036,MIA-SDF-PWM 1,A321-200,https://www.airlines-manager.com/network/showline/46376123,https://www.airlines-manager.com/network/showflight/51054795036,https://www.airlines-manager.com/aircraft/show/96692674,9:00,12:59,310,"$224,883.00","$198,891.00"
MIA - CHS,51060918871,MIA-SDF-PWM 5,ERJ-175,https://www.airlines-manager.com/network/showline/46376123,https://www.airlines-manager.com/network/showflight/51060918871,https://www.airlines-manager.com/aircraft/show/105601657,11:00,14:59,112,"$104,517.00","$88,065.00"
MIA - CHS,51066574505,MIA-SDF-PWM 4,A321-200,https://www.airlines-manager.com/network/showline/46376123,https://www.airlines-manager.com/network/showflight/51066574505,https://www.airlines-manager.com/aircraft/show/94886625,14:00,17:59,310,"$224,883.00","$198,891.00"
MIA - CHS,51082169833,MIA-SDF-PWM 3,A321-200,https://www.airlines-manager.com/network/showline/46376123,https://www.airlines-manager.com/network/showflight/51082169833,https://www.airlines-manager.com/aircraft/show/94886629,20:45,0:44,291,"$197,712.00","$173,186.00"
MIA - CLE,51043595388,MIA-COS-CVG 5,ERJ-175,https://www.airlines-manager.com/network/showline/45553091,https://www.airlines-manager.com/network/showflight/51043595388,https://www.airlines-manager.com/aircraft/show/103534665,0:30,6:44,112,"$187,754.00","$163,970.00"
MIA - CLE,51043595389,MIA-COS-CVG 1,737-900ER,https://www.airlines-manager.com/network/showline/45553091,https://www.airlines-manager.com/network/showflight/51043595389,https://www.airlines-manager.com/aircraft/show/103684630,4:15,10:29,320,"$397,759.00","$356,502.00"
MIA - CLE,51054794964,MIA-COS-CVG 4,737-900ER,https://www.airlines-manager.com/network/showline/45553091,https://www.airlines-manager.com/network/showflight/51054794964,https://www.airlines-manager.com/aircraft/show/103365574,7:45,13:59,320,"$397,759.00","$356,502.00"
MIA - CLE,51066574287,MIA-COS-CVG 3,737-900ER,https://www.airlines-manager.com/network/showline/45553091,https://www.airlines-manager.com/network/showflight/51066574287,https://www.airlines-manager.com/aircraft/show/103684632,13:00,19:14,320,"$397,759.00","$356,502.00"
MIA - CLE,51082169832,MIA-COS-CVG 2,737-900ER,https://www.airlines-manager.com/network/showline/45553091,https://www.airlines-manager.com/network/showflight/51082169832,https://www.airlines-manager.com/aircraft/show/103684631,20:45,2:59,320,"$397,759.00","$356,502.00"
MIA - CLT,51043595757,MIA-ORD-DFW 6,ERJ-175,https://www.airlines-manager.com/network/showline/42379428,https://www.airlines-manager.com/network/showflight/51043595757,https://www.airlines-manager.com/aircraft/show/82543123,4:15,8:59,112,"$142,059.00","$118,152.00"
MIA - CLT,51054795107,MIA-ORD-DFW 3,A321-200,https://www.airlines-manager.com/network/showline/42379428,https://www.airlines-manager.com/network/showflight/51054795107,https://www.airlines-manager.com/aircraft/show/91600939,10:00,14:44,310,"$298,289.00","$260,340.00"
MIA - CLT,51071689627,MIA-ORD-DFW 2,A321-200,https://www.airlines-manager.com/network/showline/42379428,https://www.airlines-manager.com/network/showflight/51071689627,https://www.airlines-manager.com/aircraft/show/91600936,16:00,20:44,310,"$298,289.00","$260,340.00"
MIA - CLT,51077491381,MIA-ORD-DFW 5,A321-200,https://www.airlines-manager.com/network/showline/42379428,https://www.airlines-manager.com/network/showflight/51077491381,https://www.airlines-manager.com/aircraft/show/91600937,17:45,22:29,310,"$298,289.00","$260,340.00"
MIA - CLT,51086540976,MIA-ORD-DFW 1,A321-200,https://www.airlines-manager.com/network/showline/42379428,https://www.airlines-manager.com/network/showflight/51086540976,https://www.airlines-manager.com/aircraft/show/91600935,22:30,3:14,310,"$298,289.00","$260,340.00"
MIA - CLT,51086540977,MIA-ORD-DFW 4,A321-200,https://www.airlines-manager.com/network/showline/42379428,https://www.airlines-manager.com/network/showflight/51086540977,https://www.airlines-manager.com/aircraft/show/91600938,23:30,4:14,310,"$298,289.00","$260,340.00"
MIA - CMH,51043595576,MIA-MKE-CMH 4,737-900ER,https://www.airlines-manager.com/network/showline/46163833,https://www.airlines-manager.com/network/showflight/51043595576,https://www.airlines-manager.com/aircraft/show/88494374,1:45,7:44,320,"$371,694.00","$331,673.00"
MIA - CMH,51054794937,MIA-MKE-CMH 3,737-900ER,https://www.airlines-manager.com/network/showline/46163833,https://www.airlines-manager.com/network/showflight/51054794937,https://www.airlines-manager.com/aircraft/show/88494378,7:15,13:14,320,"$371,694.00","$331,673.00"
MIA - CMH,51066574589,MIA-MKE-CMH 2,737-900ER,https://www.airlines-manager.com/network/showline/46163833,https://www.airlines-manager.com/network/showflight/51066574589,https://www.airlines-manager.com/aircraft/show/91806233,14:00,19:59,320,"$371,694.00","$331,673.00"
MIA - CMH,51077491441,MIA-MKE-CMH 5 B,A319-100,https://www.airlines-manager.com/network/showline/46163833,https://www.airlines-manager.com/network/showflight/51077491441,https://www.airlines-manager.com/aircraft/show/110582842,18:00,23:59,198,"$282,253.00","$253,984.00"
MIA - CMH,51082169843,MIA-MKE-CMH 1,737-900ER,https://www.airlines-manager.com/network/showline/46163833,https://www.airlines-manager.com/network/showflight/51082169843,https://www.airlines-manager.com/aircraft/show/88239556,21:00,2:59,320,"$371,694.00","$331,673.00"
MIA - CMN,51043595786,MIA 84B-3 E2,777-300,https://www.airlines-manager.com/network/showline/43186717,https://www.airlines-manager.com/network/showflight/51043595786,https://www.airlines-manager.com/aircraft/show/106676227,5:00,22:44,962,"$2,952,242.00","$2,693,573.00"
MIA - CMN,51082169821,MIA 84B-7 E2,777-300,https://www.airlines-manager.com/network/showline/43186717,https://www.airlines-manager.com/network/showflight/51082169821,https://www.airlines-manager.com/aircraft/show/106676231,20:30,14:14,962,"$2,952,242.00","$2,693,573.00"
MIA - COS,51043595820,MIA-COS-CVG 2,737-900ER,https://www.airlines-manager.com/network/showline/45553098,https://www.airlines-manager.com/network/showflight/51043595820,https://www.airlines-manager.com/aircraft/show/103684631,6:30,14:59,320,"$542,859.00","$491,469.00"
MIA - COS,51054795077,MIA-COS-CVG 5,ERJ-175,https://www.airlines-manager.com/network/showline/45553098,https://www.airlines-manager.com/network/showflight/51054795077,https://www.airlines-manager.com/aircraft/show/103534665,10:00,18:44,112,"$256,043.00","$225,462.00"
MIA - COS,51066574603,MIA-COS-CVG 1,737-900ER,https://www.airlines-manager.com/network/showline/45553098,https://www.airlines-manager.com/network/showflight/51066574603,https://www.airlines-manager.com/aircraft/show/103684630,14:00,22:29,320,"$542,859.00","$491,469.00"
MIA - COS,51077491330,MIA-COS-CVG 4,737-900ER,https://www.airlines-manager.com/network/showline/45553098,https://www.airlines-manager.com/network/showflight/51077491330,https://www.airlines-manager.com/aircraft/show/103365574,17:30,1:59,320,"$542,859.00","$491,469.00"
MIA - COS,51086540994,MIA-COS-CVG 3,737-900ER,https://www.airlines-manager.com/network/showline/45553098,https://www.airlines-manager.com/network/showflight/51086540994,https://www.airlines-manager.com/aircraft/show/103684632,22:45,7:14,320,"$542,859.00","$491,469.00"
MIA - CPT,51043595790,MIA 84A-5 E,747-400,https://www.airlines-manager.com/network/showline/43025993,https://www.airlines-manager.com/network/showflight/51043595790,https://www.airlines-manager.com/aircraft/show/93704215,5:00,10:29,1048,"$5,416,794.00","$5,022,186.00"
MIA - CPT,51077491432,MIA 84A-1 E,747-400,https://www.airlines-manager.com/network/showline/43025993,https://www.airlines-manager.com/network/showflight/51077491432,https://www.airlines-manager.com/aircraft/show/93686969,18:00,23:29,1048,"$5,416,794.00","$5,022,186.00"
MIA - CUR,51043595762,MIA-BGI-CUR 3,737-900ER,https://www.airlines-manager.com/network/showline/46704486,https://www.airlines-manager.com/network/showflight/51043595762,https://www.airlines-manager.com/aircraft/show/107121797,4:15,10:59,320,"$412,570.00","$370,557.00"
MIA - CUR,51060918890,MIA-BGI-CUR 2,737-900ER,https://www.airlines-manager.com/network/showline/46704486,https://www.airlines-manager.com/network/showflight/51060918890,https://www.airlines-manager.com/aircraft/show/107121796,11:00,17:44,320,"$412,570.00","$370,557.00"
MIA - CUR,51071689499,MIA-BGI-CUR 5,737-900ER,https://www.airlines-manager.com/network/showline/46704486,https://www.airlines-manager.com/network/showflight/51071689499,https://www.airlines-manager.com/aircraft/show/107121799,15:00,21:44,320,"$412,570.00","$370,557.00"
MIA - CUR,51082169787,MIA-BGI-CUR 1,737-900ER,https://www.airlines-manager.com/network/showline/46704486,https://www.airlines-manager.com/network/showflight/51082169787,https://www.airlines-manager.com/aircraft/show/107121795,20:15,2:59,320,"$412,570.00","$370,557.00"
MIA - CUR,51082169788,MIA-BGI-CUR 4,737-900ER,https://www.airlines-manager.com/network/showline/46704486,https://www.airlines-manager.com/network/showflight/51082169788,https://www.airlines-manager.com/aircraft/show/107121798,21:45,4:29,295,"$383,103.00","$342,095.00"
MIA - CVG,51043595599,MIA-COS-CVG 4,737-900ER,https://www.airlines-manager.com/network/showline/45553080,https://www.airlines-manager.com/network/showflight/51043595599,https://www.airlines-manager.com/aircraft/show/103365574,2:00,7:44,320,"$366,610.00","$324,729.00"
MIA - CVG,51054794938,MIA-COS-CVG 3,737-900ER,https://www.airlines-manager.com/network/showline/45553080,https://www.airlines-manager.com/network/showflight/51054794938,https://www.airlines-manager.com/aircraft/show/103684632,7:15,12:59,320,"$366,610.00","$324,729.00"
MIA - CVG,51054794939,MIA CARGO 2,737-700,https://www.airlines-manager.com/network/showline/45553080,https://www.airlines-manager.com/network/showflight/51054794939,https://www.airlines-manager.com/aircraft/show/107527976,10:00,15:44,0,"$96,465.00","$70,586.00"
MIA - CVG,51071689529,MIA-COS-CVG 2,737-900ER,https://www.airlines-manager.com/network/showline/45553080,https://www.airlines-manager.com/network/showflight/51071689529,https://www.airlines-manager.com/aircraft/show/103684631,15:00,20:44,320,"$366,610.00","$324,729.00"
MIA - CVG,51077491489,MIA-COS-CVG 5,ERJ-175,https://www.airlines-manager.com/network/showline/45553080,https://www.airlines-manager.com/network/showflight/51077491489,https://www.airlines-manager.com/aircraft/show/103534665,18:45,0:29,112,"$172,967.00","$149,258.00"
MIA - CVG,51086540956,MIA-COS-CVG 1,737-900ER,https://www.airlines-manager.com/network/showline/45553080,https://www.airlines-manager.com/network/showflight/51086540956,https://www.airlines-manager.com/aircraft/show/103684630,22:30,4:14,320,"$366,610.00","$324,729.00"
MIA - DEN,51043595541,MIA-LAX-DEN 3,757-300,https://www.airlines-manager.com/network/showline/42257962,https://www.airlines-manager.com/network/showflight/51043595541,https://www.airlines-manager.com/aircraft/show/91126651,1:30,9:59,400,"$714,293.00","$628,661.00"
MIA - DEN,51043595542,MIA-LAX-DEN 4,757-300,https://www.airlines-manager.com/network/showline/42257962,https://www.airlines-manager.com/network/showflight/51043595542,https://www.airlines-manager.com/aircraft/show/91126652,3:30,11:59,400,"$714,293.00","$628,661.00"
MIA - DEN,51060918942,MIA-LAX-DEN 1,757-300,https://www.airlines-manager.com/network/showline/42257962,https://www.airlines-manager.com/network/showflight/51060918942,https://www.airlines-manager.com/aircraft/show/91126649,11:00,19:29,400,"$714,293.00","$628,661.00"
MIA - DEN,51077491303,MIA-LAX-DEN 2,757-300,https://www.airlines-manager.com/network/showline/42257962,https://www.airlines-manager.com/network/showflight/51077491303,https://www.airlines-manager.com/aircraft/show/91126650,17:30,1:59,400,"$714,293.00","$628,661.00"
MIA - DEN,51082169921,MIA-LAX-DEN 5,757-300,https://www.airlines-manager.com/network/showline/42257962,https://www.airlines-manager.com/network/showflight/51082169921,https://www.airlines-manager.com/aircraft/show/91126653,22:00,6:29,400,"$714,293.00","$628,661.00"
MIA - DFW,51043595711,MIA-ORD-DFW 2,A321-200,https://www.airlines-manager.com/network/showline/42379416,https://www.airlines-manager.com/network/showflight/51043595711,https://www.airlines-manager.com/aircraft/show/91600936,3:30,9:59,310,"$408,074.00","$352,153.00"
MIA - DFW,51054795109,MIA-ORD-DFW 1,A321-200,https://www.airlines-manager.com/network/showline/42379416,https://www.airlines-manager.com/network/showflight/51054795109,https://www.airlines-manager.com/aircraft/show/91600935,10:00,16:29,310,"$408,074.00","$352,153.00"
MIA - DFW,51060918940,MIA-ORD-DFW 4,A321-200,https://www.airlines-manager.com/network/showline/42379416,https://www.airlines-manager.com/network/showflight/51060918940,https://www.airlines-manager.com/aircraft/show/91600938,11:00,17:29,310,"$408,074.00","$352,153.00"
MIA - DFW,51071689574,MIA-ORD-DFW 6,ERJ-175,https://www.airlines-manager.com/network/showline/42379416,https://www.airlines-manager.com/network/showflight/51071689574,https://www.airlines-manager.com/aircraft/show/82543123,15:45,22:14,112,"$192,170.00","$156,663.00"
MIA - DFW,51082169895,MIA-ORD-DFW 3,A321-200,https://www.airlines-manager.com/network/showline/42379416,https://www.airlines-manager.com/network/showflight/51082169895,https://www.airlines-manager.com/aircraft/show/91600939,21:30,3:59,310,"$408,074.00","$352,153.00"
MIA - DFW,51086540969,MIA-ORD-DFW 5,A321-200,https://www.airlines-manager.com/network/showline/42379416,https://www.airlines-manager.com/network/showflight/51086540969,https://www.airlines-manager.com/aircraft/show/91600937,22:30,4:59,310,"$408,074.00","$352,153.00"
MIA - DSM,51043595684,MIA-DSM-ALB 2,737-900ER,https://www.airlines-manager.com/network/showline/48487669,https://www.airlines-manager.com/network/showflight/51043595684,https://www.airlines-manager.com/aircraft/show/113101230,3:00,10:14,320,"$455,813.00","$412,784.00"
MIA - DSM,51054795022,MIA-DSM-ALB 5,ERJ-175,https://www.airlines-manager.com/network/showline/48487669,https://www.airlines-manager.com/network/showflight/51054795022,https://www.airlines-manager.com/aircraft/show/100049776,8:45,15:59,112,"$215,975.00","$190,591.00"
MIA - DSM,51066574446,MIA-DSM-ALB 1,737-900ER,https://www.airlines-manager.com/network/showline/48487669,https://www.airlines-manager.com/network/showflight/51066574446,https://www.airlines-manager.com/aircraft/show/111064081,13:00,20:14,320,"$455,813.00","$412,784.00"
MIA - DSM,51071689612,MIA-DSM-ALB 4,737-900ER,https://www.airlines-manager.com/network/showline/48487669,https://www.airlines-manager.com/network/showflight/51071689612,https://www.airlines-manager.com/aircraft/show/113101228,16:00,23:14,320,"$455,813.00","$412,784.00"
MIA - DSM,51082169794,MIA-DSM-ALB 3,737-900ER,https://www.airlines-manager.com/network/showline/48487669,https://www.airlines-manager.com/network/showflight/51082169794,https://www.airlines-manager.com/aircraft/show/113101233,20:15,3:29,320,"$455,813.00","$412,784.00"
MIA - DSS,51043595277,MIA 84B-6 E2,777-300,https://www.airlines-manager.com/network/showline/43220462,https://www.airlines-manager.com/network/showflight/51043595277,https://www.airlines-manager.com/aircraft/show/106676230,0:00,16:59,962,"$2,843,856.00","$2,597,844.00"
MIA - DSS,51060918989,MIA 84B-2 E2,777-300,https://www.airlines-manager.com/network/showline/43220462,https://www.airlines-manager.com/network/showflight/51060918989,https://www.airlines-manager.com/aircraft/show/106676226,12:00,4:59,962,"$2,843,856.00","$2,597,844.00"
MIA - DTW,51043595526,MIA-PDX-DTW 3,737-900ER,https://www.airlines-manager.com/network/showline/44313712,https://www.airlines-manager.com/network/showflight/51043595526,https://www.airlines-manager.com/aircraft/show/89943713,1:30,7:59,320,"$410,497.00","$358,175.00"
MIA - DTW,51043595527,MIA-PDX-DTW 4,737-900ER,https://www.airlines-manager.com/network/showline/44313712,https://www.airlines-manager.com/network/showflight/51043595527,https://www.airlines-manager.com/aircraft/show/89943712,2:30,8:59,320,"$410,497.00","$358,175.00"
MIA - DTW,51054795079,MIA-PDX-DTW 2,737-900ER,https://www.airlines-manager.com/network/showline/44313712,https://www.airlines-manager.com/network/showflight/51054795079,https://www.airlines-manager.com/aircraft/show/89943714,10:00,16:29,320,"$410,497.00","$358,175.00"
MIA - DTW,51066574477,MIA-PDX-DTW 5,737-900ER,https://www.airlines-manager.com/network/showline/44313712,https://www.airlines-manager.com/network/showflight/51066574477,https://www.airlines-manager.com/aircraft/show/89943711,14:00,20:29,320,"$410,497.00","$358,175.00"
MIA - DTW,51082169908,MIA CARGO 1,737-700,https://www.airlines-manager.com/network/showline/44313712,https://www.airlines-manager.com/network/showflight/51082169908,https://www.airlines-manager.com/aircraft/show/107577220,21:45,4:14,0,"$108,731.00","$76,609.00"
MIA - DTW,51086540961,MIA-PDX-DTW 1,737-900ER,https://www.airlines-manager.com/network/showline/44313712,https://www.airlines-manager.com/network/showflight/51086540961,https://www.airlines-manager.com/aircraft/show/89943715,22:30,4:59,320,"$410,497.00","$358,175.00"
MIA - ELP,51054794995,MIA-ELP-MCI 5 B,A319-100,https://www.airlines-manager.com/network/showline/46040732,https://www.airlines-manager.com/network/showflight/51054794995,https://www.airlines-manager.com/aircraft/show/105093924,8:15,16:44,198,"$400,573.00","$364,562.00"
MIA - ELP,51054794996,MIA-ELP-MCI 1,737-900ER,https://www.airlines-manager.com/network/showline/46040732,https://www.airlines-manager.com/network/showflight/51054794996,https://www.airlines-manager.com/aircraft/show/91806234,10:00,18:29,320,"$530,950.00","$480,841.00"
MIA - ELP,51071689639,MIA-ELP-MCI 3,737-900ER,https://www.airlines-manager.com/network/showline/46040732,https://www.airlines-manager.com/network/showflight/51071689639,https://www.airlines-manager.com/aircraft/show/91806232,16:15,0:44,320,"$530,950.00","$480,841.00"
MIA - ELP,51071689640,MIA-ELP-MCI 4,737-900ER,https://www.airlines-manager.com/network/showline/46040732,https://www.airlines-manager.com/network/showflight/51071689640,https://www.airlines-manager.com/aircraft/show/91806231,17:00,1:29,320,"$530,950.00","$480,841.00"
MIA - ELP,51086541041,MIA-ELP-MCI 2,737-900ER,https://www.airlines-manager.com/network/showline/46040732,https://www.airlines-manager.com/network/showflight/51086541041,https://www.airlines-manager.com/aircraft/show/91806235,23:15,7:44,320,"$530,950.00","$480,841.00"
MIA - FAR,51043595434,MIA-FAR-TUL 3,737-900ER,https://www.airlines-manager.com/network/showline/47780421,https://www.airlines-manager.com/network/showflight/51043595434,https://www.airlines-manager.com/aircraft/show/110883161,0:45,9:29,320,"$545,388.00","$496,566.00"
MIA - FAR,51054794930,MIA-FAR-TUL 4,737-900ER,https://www.airlines-manager.com/network/showline/47780421,https://www.airlines-manager.com/network/showflight/51054794930,https://www.airlines-manager.com/aircraft/show/110883162,7:15,15:59,320,"$545,388.00","$496,566.00"
MIA - FAR,51060918870,MIA-FAR-TUL 1,737-900ER,https://www.airlines-manager.com/network/showline/47780421,https://www.airlines-manager.com/network/showflight/51060918870,https://www.airlines-manager.com/aircraft/show/110883159,11:00,19:44,320,"$545,388.00","$496,566.00"
MIA - FAR,51071689594,MIA-FAR-TUL 2,737-900ER,https://www.airlines-manager.com/network/showline/47780421,https://www.airlines-manager.com/network/showflight/51071689594,https://www.airlines-manager.com/aircraft/show/110883160,16:00,0:44,320,"$545,388.00","$496,566.00"
MIA - FAR,51077491443,MIA-FAR-TUL 5,ERJ-175,https://www.airlines-manager.com/network/showline/47780421,https://www.airlines-manager.com/network/showflight/51077491443,https://www.airlines-manager.com/aircraft/show/87169421,18:15,2:59,112,"$257,277.00","$227,863.00"
MIA - FAT,51054795011,MIA-FAT-MSO 4,737-900ER,https://www.airlines-manager.com/network/showline/48487645,https://www.airlines-manager.com/network/showflight/51054795011,https://www.airlines-manager.com/aircraft/show/113101232,8:30,19:59,320,"$722,139.00","$661,925.00"
MIA - FAT,51060918864,MIA-FAT-MSO 1,737-900ER,https://www.airlines-manager.com/network/showline/48487645,https://www.airlines-manager.com/network/showflight/51060918864,https://www.airlines-manager.com/aircraft/show/113101229,11:00,22:29,320,"$722,139.00","$661,925.00"
MIA - FAT,51077491519,MIA-FAT-MSO 2,737-900ER,https://www.airlines-manager.com/network/showline/48487645,https://www.airlines-manager.com/network/showflight/51077491519,https://www.airlines-manager.com/aircraft/show/113101231,19:00,6:29,320,"$722,139.00","$661,925.00"
MIA - FAT,51082169947,MIA-FAT-MSO 3,737-900ER,https://www.airlines-manager.com/network/showline/48487645,https://www.airlines-manager.com/network/showflight/51082169947,https://www.airlines-manager.com/aircraft/show/113101234,22:15,9:44,320,"$722,139.00","$661,925.00"
MIA - FPO,51043595368,MIA-BGI-CUR 2,737-900ER,https://www.airlines-manager.com/network/showline/46704495,https://www.airlines-manager.com/network/showflight/51043595368,https://www.airlines-manager.com/aircraft/show/107121796,0:15,2:44,320,"$83,924.00","$59,283.00"
MIA - FPO,51043595369,MIA-BGI-CUR 5,737-900ER,https://www.airlines-manager.com/network/showline/46704495,https://www.airlines-manager.com/network/showflight/51043595369,https://www.airlines-manager.com/aircraft/show/107121799,4:15,6:44,320,"$83,924.00","$59,283.00"
MIA - FPO,51054795053,MIA-BGI-CUR 1,737-900ER,https://www.airlines-manager.com/network/showline/46704495,https://www.airlines-manager.com/network/showflight/51054795053,https://www.airlines-manager.com/aircraft/show/107121795,9:30,11:59,320,"$83,924.00","$59,283.00"
MIA - FPO,51060918888,MIA-BGI-CUR 4,737-900ER,https://www.airlines-manager.com/network/showline/46704495,https://www.airlines-manager.com/network/showflight/51060918888,https://www.airlines-manager.com/aircraft/show/107121798,11:00,13:29,320,"$83,924.00","$59,283.00"
MIA - FPO,51077491365,MIA-BGI-CUR 3,737-900ER,https://www.airlines-manager.com/network/showline/46704495,https://www.airlines-manager.com/network/showflight/51077491365,https://www.airlines-manager.com/aircraft/show/107121797,17:30,19:59,202,"$60,596.00","$36,357.00"
MIA - FSD,51043595445,MIA-OKC-FSD 1,A321-200,https://www.airlines-manager.com/network/showline/47780568,https://www.airlines-manager.com/network/showflight/51043595445,https://www.airlines-manager.com/aircraft/show/110883110,1:00,8:59,310,"$501,136.00","$459,803.00"
MIA - FSD,51043595446,MIA-OKC-FSD 4,A321-200,https://www.airlines-manager.com/network/showline/47780568,https://www.airlines-manager.com/network/showflight/51043595446,https://www.airlines-manager.com/aircraft/show/110883113,2:45,10:44,310,"$501,136.00","$459,803.00"
MIA - FSD,51066574490,MIA-OKC-FSD 3,A321-200,https://www.airlines-manager.com/network/showline/47780568,https://www.airlines-manager.com/network/showflight/51066574490,https://www.airlines-manager.com/aircraft/show/110883112,14:00,21:59,310,"$501,136.00","$459,803.00"
MIA - FSD,51071689641,MIA-OKC-FSD 2,A321-200,https://www.airlines-manager.com/network/showline/47780568,https://www.airlines-manager.com/network/showflight/51071689641,https://www.airlines-manager.com/aircraft/show/110883111,16:15,0:14,310,"$501,136.00","$459,803.00"
MIA - FSD,51082169924,MIA-OKC-FSD 5,ERJ-175,https://www.airlines-manager.com/network/showline/47780568,https://www.airlines-manager.com/network/showflight/51082169924,https://www.airlines-manager.com/aircraft/show/104353572,22:00,5:59,94,"$219,205.00","$192,914.00"
MIA - HAV,51043595792,MIA-PDX-DTW 1,737-900ER,https://www.airlines-manager.com/network/showline/44313701,https://www.airlines-manager.com/network/showflight/51043595792,https://www.airlines-manager.com/aircraft/show/89943715,5:00,7:59,320,"$130,830.00","$101,023.00"
MIA - HAV,51054795030,MIA-PDX-DTW 4,737-900ER,https://www.airlines-manager.com/network/showline/44313701,https://www.airlines-manager.com/network/showflight/51054795030,https://www.airlines-manager.com/aircraft/show/89943712,9:00,11:59,320,"$130,830.00","$101,023.00"
MIA - HAV,51054795031,MIA-PDX-DTW 3,737-900ER,https://www.airlines-manager.com/network/showline/44313701,https://www.airlines-manager.com/network/showflight/51054795031,https://www.airlines-manager.com/aircraft/show/89943713,10:00,12:59,320,"$130,830.00","$101,023.00"
MIA - HAV,51071689648,MIA-PDX-DTW 2,737-900ER,https://www.airlines-manager.com/network/showline/44313701,https://www.airlines-manager.com/network/showflight/51071689648,https://www.airlines-manager.com/aircraft/show/89943714,16:30,19:29,320,"$130,830.00","$101,023.00"
MIA - HAV,51082169823,MIA-PDX-DTW 5,737-900ER,https://www.airlines-manager.com/network/showline/44313701,https://www.airlines-manager.com/network/showflight/51082169823,https://www.airlines-manager.com/aircraft/show/89943711,20:30,23:29,289,"$119,605.00","$90,043.00"
MIA - IAD,51043595753,MIA-IAD-TUS 2,A321-200,https://www.airlines-manager.com/network/showline/44372817,https://www.airlines-manager.com/network/showflight/51043595753,https://www.airlines-manager.com/aircraft/show/97556720,4:15,9:59,310,"$360,124.00","$320,823.00"
MIA - IAD,51054794926,MIA-IAD-TUS 5,A321-200,https://www.airlines-manager.com/network/showline/44372817,https://www.airlines-manager.com/network/showflight/51054794926,https://www.airlines-manager.com/aircraft/show/97556716,7:15,12:59,310,"$360,124.00","$320,823.00"
MIA - IAD,51054794927,MIA-IAD-TUS 1,A321-200,https://www.airlines-manager.com/network/showline/44372817,https://www.airlines-manager.com/network/showflight/51054794927,https://www.airlines-manager.com/aircraft/show/97556721,10:00,15:44,310,"$360,124.00","$320,823.00"
MIA - IAD,51066574285,MIA-IAD-TUS 4,A321-200,https://www.airlines-manager.com/network/showline/44372817,https://www.airlines-manager.com/network/showflight/51066574285,https://www.airlines-manager.com/aircraft/show/97556718,13:00,18:44,310,"$360,124.00","$320,823.00"
MIA - IAD,51077491482,MIA-IAD-TUS 3,A321-200,https://www.airlines-manager.com/network/showline/44372817,https://www.airlines-manager.com/network/showflight/51077491482,https://www.airlines-manager.com/aircraft/show/97556719,18:45,0:29,310,"$360,124.00","$320,823.00"
MIA - IAD,51082169900,MIA CARGO 2,737-700,https://www.airlines-manager.com/network/showline/44372817,https://www.airlines-manager.com/network/showflight/51082169900,https://www.airlines-manager.com/aircraft/show/107527976,21:30,3:14,0,"$96,107.00","$68,808.00"
MIA - ICT,51043595618,MIA-FAR-TUL 1,737-900ER,https://www.airlines-manager.com/network/showline/47780462,https://www.airlines-manager.com/network/showflight/51043595618,https://www.airlines-manager.com/aircraft/show/110883159,2:30,9:29,320,"$446,634.00","$403,317.00"
MIA - ICT,51054795041,MIA-FAR-TUL 2,737-900ER,https://www.airlines-manager.com/network/showline/47780462,https://www.airlines-manager.com/network/showflight/51054795041,https://www.airlines-manager.com/aircraft/show/110883160,9:00,15:59,320,"$446,634.00","$403,317.00"
MIA - ICT,51060918868,MIA-FAR-TUL 5,ERJ-175,https://www.airlines-manager.com/network/showline/47780462,https://www.airlines-manager.com/network/showflight/51060918868,https://www.airlines-manager.com/aircraft/show/87169421,11:00,18:14,112,"$212,343.00","$186,912.00"
MIA - ICT,51077491373,MIA-FAR-TUL 3,737-900ER,https://www.airlines-manager.com/network/showline/47780462,https://www.airlines-manager.com/network/showflight/51077491373,https://www.airlines-manager.com/aircraft/show/110883161,17:45,0:44,320,"$446,634.00","$403,317.00"
MIA - ICT,51086540991,MIA-FAR-TUL 4,737-900ER,https://www.airlines-manager.com/network/showline/47780462,https://www.airlines-manager.com/network/showflight/51086540991,https://www.airlines-manager.com/aircraft/show/110883162,22:45,5:44,320,"$446,634.00","$403,317.00"
MIA - IND,51043595623,MIA-AUS-PIT 5,ERJ-175,https://www.airlines-manager.com/network/showline/44971944,https://www.airlines-manager.com/network/showflight/51043595623,https://www.airlines-manager.com/aircraft/show/82323689,2:30,8:29,112,"$180,711.00","$157,023.00"
MIA - IND,51043595624,MIA-AUS-PIT 4,737-900ER,https://www.airlines-manager.com/network/showline/44971944,https://www.airlines-manager.com/network/showflight/51043595624,https://www.airlines-manager.com/aircraft/show/99920623,3:15,9:14,320,"$382,229.00","$340,810.00"
MIA - IND,51054795089,MIA-AUS-PIT 3,737-900ER,https://www.airlines-manager.com/network/showline/44971944,https://www.airlines-manager.com/network/showflight/51054795089,https://www.airlines-manager.com/aircraft/show/99920624,10:00,15:59,320,"$382,229.00","$340,810.00"
MIA - IND,51071689626,MIA-AUS-PIT 2,737-900ER,https://www.airlines-manager.com/network/showline/44971944,https://www.airlines-manager.com/network/showflight/51071689626,https://www.airlines-manager.com/aircraft/show/99920625,16:00,21:59,320,"$382,229.00","$340,810.00"
MIA - IND,51086540975,MIA-AUS-PIT 1,737-900ER,https://www.airlines-manager.com/network/showline/44971944,https://www.airlines-manager.com/network/showflight/51086540975,https://www.airlines-manager.com/aircraft/show/99920626,22:30,4:29,320,"$382,229.00","$340,810.00"
MIA - JAX,51043595680,MIA-COS-CVG 2,737-900ER,https://www.airlines-manager.com/network/showline/45553086,https://www.airlines-manager.com/network/showflight/51043595680,https://www.airlines-manager.com/aircraft/show/103684631,3:00,6:29,320,"$173,327.00","$144,288.00"
MIA - JAX,51060918847,MIA-COS-CVG 1,737-900ER,https://www.airlines-manager.com/network/showline/45553086,https://www.airlines-manager.com/network/showflight/51060918847,https://www.airlines-manager.com/aircraft/show/103684630,10:30,13:59,320,"$173,327.00","$144,288.00"
MIA - JAX,51066574605,MIA-COS-CVG 4,737-900ER,https://www.airlines-manager.com/network/showline/45553086,https://www.airlines-manager.com/network/showflight/51066574605,https://www.airlines-manager.com/aircraft/show/103365574,14:00,17:29,320,"$173,327.00","$144,288.00"
MIA - JAX,51077491525,MIA-COS-CVG 3,737-900ER,https://www.airlines-manager.com/network/showline/45553086,https://www.airlines-manager.com/network/showflight/51077491525,https://www.airlines-manager.com/aircraft/show/103684632,19:15,22:44,320,"$173,327.00","$144,288.00"
MIA - JAX,51082169944,MIA-ORD-BOI-JAX B,A319-100,https://www.airlines-manager.com/network/showline/45553086,https://www.airlines-manager.com/network/showflight/51082169944,https://www.airlines-manager.com/aircraft/show/106339154,22:15,1:44,198,"$131,647.00","$111,751.00"
MIA - JFK,51043595808,MIA-JFK-PHX 1,A321neo,https://www.airlines-manager.com/network/showline/42216500,https://www.airlines-manager.com/network/showflight/51043595808,https://www.airlines-manager.com/aircraft/show/105308264,5:45,11:59,338,"$428,222.00","$375,746.00"
MIA - JFK,51054794902,MIA-JFK-PHX 6,ERJ-175,https://www.airlines-manager.com/network/showline/42216500,https://www.airlines-manager.com/network/showflight/51054794902,https://www.airlines-manager.com/aircraft/show/82683137,6:45,12:59,112,"$186,800.00","$152,590.00"
MIA - JFK,51054794903,MIA-JFK-PHX 4,A321neo,https://www.airlines-manager.com/network/showline/42216500,https://www.airlines-manager.com/network/showflight/51054794903,https://www.airlines-manager.com/aircraft/show/105308267,10:00,16:14,338,"$428,222.00","$375,746.00"
MIA - JFK,51060918993,MIA-JFK-PHX 2,A321neo,https://www.airlines-manager.com/network/showline/42216500,https://www.airlines-manager.com/network/showflight/51060918993,https://www.airlines-manager.com/aircraft/show/105308265,12:00,18:14,338,"$428,222.00","$375,746.00"
MIA - JFK,51077491429,MIA-JFK-PHX 3,A321neo,https://www.airlines-manager.com/network/showline/42216500,https://www.airlines-manager.com/network/showflight/51077491429,https://www.airlines-manager.com/aircraft/show/105308266,18:00,0:14,338,"$428,222.00","$375,746.00"
MIA - JFK,51082169838,MIA-JFK-PHX 5,A321neo,https://www.airlines-manager.com/network/showline/42216500,https://www.airlines-manager.com/network/showflight/51082169838,https://www.airlines-manager.com/aircraft/show/105308268,20:45,2:59,338,"$428,222.00","$375,746.00"
MIA - JNB,51043595304,MIA 84A-3 E,747-400,https://www.airlines-manager.com/network/showline/42990947,https://www.airlines-manager.com/network/showflight/51043595304,https://www.airlines-manager.com/aircraft/show/93686967,0:00,6:44,1048,"$5,790,148.00","$5,356,516.00"
MIA - JNB,51066574449,MIA 84A-6 E,747-400,https://www.airlines-manager.com/network/showline/42990947,https://www.airlines-manager.com/network/showflight/51066574449,https://www.airlines-manager.com/aircraft/show/93731916,13:00,19:44,1048,"$5,790,148.00","$5,356,516.00"
MIA - LAS,51043595514,MIA-LAS-SEA 5,A321neo,https://www.airlines-manager.com/network/showline/42449486,https://www.airlines-manager.com/network/showflight/51043595514,https://www.airlines-manager.com/aircraft/show/105093929,1:30,11:59,338,"$716,938.00","$649,762.00"
MIA - LAS,51054795067,MIA-LAS-SEA 1,A321neo,https://www.airlines-manager.com/network/showline/42449486,https://www.airlines-manager.com/network/showflight/51054795067,https://www.airlines-manager.com/aircraft/show/105093925,10:00,20:29,338,"$716,938.00","$649,762.00"
MIA - LAS,51060919001,MIA-LAS-SEA 6 B,A319-100,https://www.airlines-manager.com/network/showline/42449486,https://www.airlines-manager.com/network/showflight/51060919001,https://www.airlines-manager.com/aircraft/show/113251304,12:00,22:29,198,"$497,086.00","$441,082.00"
MIA - LAS,51066574430,MIA-LAS-SEA 2,A321neo,https://www.airlines-manager.com/network/showline/42449486,https://www.airlines-manager.com/network/showflight/51066574430,https://www.airlines-manager.com/aircraft/show/105093926,13:00,23:29,338,"$716,938.00","$649,762.00"
MIA - LAS,51071689513,MIA-LAS-SEA 3,A321neo,https://www.airlines-manager.com/network/showline/42449486,https://www.airlines-manager.com/network/showflight/51071689513,https://www.airlines-manager.com/aircraft/show/105093927,15:00,1:29,338,"$716,938.00","$649,762.00"
MIA - LAS,51086540967,MIA-LAS-SEA 4,A321neo,https://www.airlines-manager.com/network/showline/42449486,https://www.airlines-manager.com/network/showflight/51086540967,https://www.airlines-manager.com/aircraft/show/105093928,22:30,8:59,338,"$716,938.00","$649,762.00"
MIA - LAX,51043595319,MIA-LAX-DEN 1,757-300,https://www.airlines-manager.com/network/showline/42216509,https://www.airlines-manager.com/network/showflight/51043595319,https://www.airlines-manager.com/aircraft/show/91126649,0:00,10:59,400,"$899,540.00","$806,068.00"
MIA - LAX,51043595320,MIA-LAX-DEN 2,757-300,https://www.airlines-manager.com/network/showline/42216509,https://www.airlines-manager.com/network/showflight/51043595320,https://www.airlines-manager.com/aircraft/show/91126650,2:00,12:59,400,"$899,540.00","$806,068.00"
MIA - LAX,51054795063,MIA-LAX-DEN 3,757-300,https://www.airlines-manager.com/network/showline/42216509,https://www.airlines-manager.com/network/showflight/51054795063,https://www.airlines-manager.com/aircraft/show/91126651,10:00,20:59,400,"$899,540.00","$806,068.00"
MIA - LAX,51060918939,MIA-LAX-DEN 5,757-300,https://www.airlines-manager.com/network/showline/42216509,https://www.airlines-manager.com/network/showflight/51060918939,https://www.airlines-manager.com/aircraft/show/91126653,11:00,21:59,400,"$899,540.00","$806,068.00"
MIA - LAX,51071689653,MIA-LAX-DEN 4,757-300,https://www.airlines-manager.com/network/showline/42216509,https://www.airlines-manager.com/network/showflight/51071689653,https://www.airlines-manager.com/aircraft/show/91126652,16:30,3:29,400,"$899,540.00","$806,068.00"
MIA - LIT,51043595610,MIA-SDF-PWM 1,A321-200,https://www.airlines-manager.com/network/showline/46376132,https://www.airlines-manager.com/network/showflight/51043595610,https://www.airlines-manager.com/aircraft/show/96692674,2:15,7:59,310,"$360,235.00","$327,848.00"
MIA - LIT,51043595611,MIA-SDF-PWM 5,ERJ-175,https://www.airlines-manager.com/network/showline/46376132,https://www.airlines-manager.com/network/showflight/51043595611,https://www.airlines-manager.com/aircraft/show/105601657,4:15,9:59,112,"$170,874.00","$149,799.00"
MIA - LIT,51054794993,MIA-SDF-PWM 4,A321-200,https://www.airlines-manager.com/network/showline/46376132,https://www.airlines-manager.com/network/showflight/51054794993,https://www.airlines-manager.com/aircraft/show/94886625,8:15,13:59,310,"$360,235.00","$327,848.00"
MIA - LIT,51071689505,MIA-SDF-PWM 3,A321-200,https://www.airlines-manager.com/network/showline/46376132,https://www.airlines-manager.com/network/showflight/51071689505,https://www.airlines-manager.com/aircraft/show/94886629,15:00,20:44,310,"$360,235.00","$327,848.00"
MIA - LIT,51082169897,MIA-SDF-PWM 2,A321-200,https://www.airlines-manager.com/network/showline/46376132,https://www.airlines-manager.com/network/showflight/51082169897,https://www.airlines-manager.com/aircraft/show/94886626,21:30,3:14,304,"$356,125.00","$323,893.00"
MIA - LOS,51054794887,MIA 84A-4 E,747-400,https://www.airlines-manager.com/network/showline/42959909,https://www.airlines-manager.com/network/showflight/51054794887,https://www.airlines-manager.com/aircraft/show/93686966,6:45,4:59,1048,"$4,100,644.00","$3,801,197.00"
MIA - LOS,51077491557,MIA 84A-7 E,747-400,https://www.airlines-manager.com/network/showline/42959909,https://www.airlines-manager.com/network/showflight/51077491557,https://www.airlines-manager.com/aircraft/show/93776641,19:45,17:59,1048,"$4,100,644.00","$3,801,197.00"
MIA - MBJ,51043595427,MIA-PUJ-BDA 4 S,A319-100,https://www.airlines-manager.com/network/showline/42193777,https://www.airlines-manager.com/network/showflight/51043595427,https://www.airlines-manager.com/aircraft/show/104034460,0:45,4:59,228,"$191,427.00","$170,101.00"
MIA - MBJ,51043595428,MIA-PUJ-BDA 5 S,A319-100,https://www.airlines-manager.com/network/showline/42193777,https://www.airlines-manager.com/network/showflight/51043595428,https://www.airlines-manager.com/aircraft/show/104034461,5:00,9:14,228,"$191,427.00","$170,101.00"
MIA - MBJ,51054795033,MIA CARGO 1,737-700,https://www.airlines-manager.com/network/showline/42193777,https://www.airlines-manager.com/network/showflight/51054795033,https://www.airlines-manager.com/aircraft/show/107577220,9:00,13:14,0,"$65,571.00","$47,483.00"
MIA - MBJ,51054795034,MIA-PUJ-BDA 3 S,A319-100,https://www.airlines-manager.com/network/showline/42193777,https://www.airlines-manager.com/network/showflight/51054795034,https://www.airlines-manager.com/aircraft/show/104034459,10:00,14:14,228,"$191,427.00","$170,101.00"
MIA - MBJ,51066574280,MIA-PUJ-BDA 1 S,A319-100,https://www.airlines-manager.com/network/showline/42193777,https://www.airlines-manager.com/network/showflight/51066574280,https://www.airlines-manager.com/aircraft/show/104034457,12:45,16:59,228,"$191,427.00","$170,101.00"
MIA - MBJ,51071689668,MIA-PUJ-BDA 2 S,A319-100,https://www.airlines-manager.com/network/showline/42193777,https://www.airlines-manager.com/network/showflight/51071689668,https://www.airlines-manager.com/aircraft/show/104034458,17:00,21:14,228,"$191,427.00","$170,101.00"
MIA - MBJ,51086541024,MIA-PUJ-BDA 6 S,A319-100,https://www.airlines-manager.com/network/showline/42193777,https://www.airlines-manager.com/network/showflight/51086541024,https://www.airlines-manager.com/aircraft/show/99326789,23:00,3:14,228,"$191,427.00","$170,101.00"
MIA - MCI,51043595432,MIA-ELP-MCI 3,737-900ER,https://www.airlines-manager.com/network/showline/46040757,https://www.airlines-manager.com/network/showflight/51043595432,https://www.airlines-manager.com/aircraft/show/91806232,0:45,7:44,320,"$445,993.00","$400,410.00"
MIA - MCI,51043595433,MIA-ELP-MCI 4,737-900ER,https://www.airlines-manager.com/network/showline/46040757,https://www.airlines-manager.com/network/showflight/51043595433,https://www.airlines-manager.com/aircraft/show/91806231,1:30,8:29,320,"$445,993.00","$400,410.00"
MIA - MCI,51054795065,MIA-ELP-MCI 2,737-900ER,https://www.airlines-manager.com/network/showline/46040757,https://www.airlines-manager.com/network/showflight/51054795065,https://www.airlines-manager.com/aircraft/show/91806235,10:00,16:59,320,"$445,993.00","$400,410.00"
MIA - MCI,51077491467,MIA-ELP-MCI 1,737-900ER,https://www.airlines-manager.com/network/showline/46040757,https://www.airlines-manager.com/network/showflight/51077491467,https://www.airlines-manager.com/aircraft/show/91806234,18:30,1:29,320,"$445,993.00","$400,410.00"
MIA - MCI,51077491468,MIA-ELP-MCI 5 B,A319-100,https://www.airlines-manager.com/network/showline/46040757,https://www.airlines-manager.com/network/showflight/51077491468,https://www.airlines-manager.com/aircraft/show/105093924,19:00,1:59,198,"$337,110.00","$304,718.00"
MIA - MCO,51043595370,MIA-BDL-SAT 2,737-900ER,https://www.airlines-manager.com/network/showline/46909528,https://www.airlines-manager.com/network/showflight/51043595370,https://www.airlines-manager.com/aircraft/show/107763565,0:15,2:59,320,"$121,880.00","$84,658.00"
MIA - MCO,51043595371,MIA-BDL-SAT 5,ERJ-175,https://www.airlines-manager.com/network/showline/46909528,https://www.airlines-manager.com/network/showflight/51043595371,https://www.airlines-manager.com/aircraft/show/107467213,4:00,6:44,112,"$54,775.00","$35,603.00"
MIA - MCO,51043595372,MIA-BOI-BNA 5,ERJ-175,https://www.airlines-manager.com/network/showline/46909528,https://www.airlines-manager.com/network/showflight/51043595372,https://www.airlines-manager.com/aircraft/show/103534663,6:00,8:44,112,"$54,775.00","$35,603.00"
MIA - MCO,51054795047,MIA-BOI-BNA 5,ERJ-175,https://www.airlines-manager.com/network/showline/46909528,https://www.airlines-manager.com/network/showflight/51054795047,https://www.airlines-manager.com/aircraft/show/103534663,9:15,11:59,112,"$54,775.00","$35,603.00"
MIA - MCO,51054795048,MIA-BDL-SAT 1,737-900ER,https://www.airlines-manager.com/network/showline/46909528,https://www.airlines-manager.com/network/showflight/51054795048,https://www.airlines-manager.com/aircraft/show/107763566,10:00,12:44,320,"$121,880.00","$84,658.00"
MIA - MCO,51060918885,MIA-BDL-SAT 4,737-900ER,https://www.airlines-manager.com/network/showline/46909528,https://www.airlines-manager.com/network/showflight/51060918885,https://www.airlines-manager.com/aircraft/show/107763561,11:00,13:44,320,"$121,880.00","$84,658.00"
MIA - MCO,51077491376,MIA-BDL-SAT 3,737-900ER,https://www.airlines-manager.com/network/showline/46909528,https://www.airlines-manager.com/network/showflight/51077491376,https://www.airlines-manager.com/aircraft/show/107763562,17:45,20:29,320,"$121,880.00","$84,658.00"
MIA - MEM,51043595280,MIA-MKE-CMH 5 B,A319-100,https://www.airlines-manager.com/network/showline/46160502,https://www.airlines-manager.com/network/showflight/51043595280,https://www.airlines-manager.com/aircraft/show/110582842,0:00,5:29,198,"$261,796.00","$234,027.00"
MIA - MEM,51043595281,MIA-MKE-CMH 1,737-900ER,https://www.airlines-manager.com/network/showline/46160502,https://www.airlines-manager.com/network/showflight/51043595281,https://www.airlines-manager.com/aircraft/show/88239556,3:00,8:29,320,"$344,721.00","$305,132.00"
MIA - MEM,51054794966,MIA-MKE-CMH 4,737-900ER,https://www.airlines-manager.com/network/showline/46160502,https://www.airlines-manager.com/network/showflight/51054794966,https://www.airlines-manager.com/aircraft/show/88494374,7:45,13:14,320,"$344,721.00","$305,132.00"
MIA - MEM,51066574588,MIA-MKE-CMH 3,737-900ER,https://www.airlines-manager.com/network/showline/46160502,https://www.airlines-manager.com/network/showflight/51066574588,https://www.airlines-manager.com/aircraft/show/88494378,14:00,19:29,320,"$344,721.00","$305,132.00"
MIA - MEM,51077491570,MIA-MKE-CMH 2,737-900ER,https://www.airlines-manager.com/network/showline/46160502,https://www.airlines-manager.com/network/showflight/51077491570,https://www.airlines-manager.com/aircraft/show/91806233,20:00,1:29,320,"$344,721.00","$305,132.00"
MIA - MKE,51043595364,MIA-MKE-CMH 3,737-900ER,https://www.airlines-manager.com/network/showline/46201956,https://www.airlines-manager.com/network/showflight/51043595364,https://www.airlines-manager.com/aircraft/show/88494378,0:15,7:14,320,"$446,017.00","$401,890.00"
MIA - MKE,51043595365,MIA-MKE-CMH 2,737-900ER,https://www.airlines-manager.com/network/showline/46201956,https://www.airlines-manager.com/network/showflight/51043595365,https://www.airlines-manager.com/aircraft/show/91806233,6:15,13:14,320,"$446,017.00","$401,890.00"
MIA - MKE,51060918872,MIA-MKE-CMH 5 B,A319-100,https://www.airlines-manager.com/network/showline/46201956,https://www.airlines-manager.com/network/showflight/51060918872,https://www.airlines-manager.com/aircraft/show/110582842,11:00,17:59,198,"$337,304.00","$305,869.00"
MIA - MKE,51066574590,MIA-MKE-CMH 1,737-900ER,https://www.airlines-manager.com/network/showline/46201956,https://www.airlines-manager.com/network/showflight/51066574590,https://www.airlines-manager.com/aircraft/show/88239556,14:00,20:59,320,"$446,017.00","$401,890.00"
MIA - MKE,51077491496,MIA-MKE-CMH 4,737-900ER,https://www.airlines-manager.com/network/showline/46201956,https://www.airlines-manager.com/network/showflight/51077491496,https://www.airlines-manager.com/aircraft/show/88494374,18:45,1:44,320,"$446,017.00","$401,890.00"
MIA - MSO,51054794963,MIA-FAT-MSO 2,737-900ER,https://www.airlines-manager.com/network/showline/48487660,https://www.airlines-manager.com/network/showflight/51054794963,https://www.airlines-manager.com/aircraft/show/113101231,7:45,18:59,320,"$697,028.00","$638,049.00"
MIA - MSO,51060918863,MIA-FAT-MSO 3,737-900ER,https://www.airlines-manager.com/network/showline/48487660,https://www.airlines-manager.com/network/showflight/51060918863,https://www.airlines-manager.com/aircraft/show/113101234,11:00,22:14,320,"$697,028.00","$638,049.00"
MIA - MSO,51077491572,MIA-FAT-MSO 4,737-900ER,https://www.airlines-manager.com/network/showline/48487660,https://www.airlines-manager.com/network/showflight/51077491572,https://www.airlines-manager.com/aircraft/show/113101232,20:00,7:14,320,"$697,028.00","$638,049.00"
MIA - MSO,51086540973,MIA-FAT-MSO 1,737-900ER,https://www.airlines-manager.com/network/showline/48487660,https://www.airlines-manager.com/network/showflight/51086540973,https://www.airlines-manager.com/aircraft/show/113101229,22:30,9:44,320,"$697,028.00","$638,049.00"
MIA - MSP,51043595603,MIA-JFK-PHX 4,A321neo,https://www.airlines-manager.com/network/showline/42288078,https://www.airlines-manager.com/network/showflight/51043595603,https://www.airlines-manager.com/aircraft/show/105308267,2:00,9:59,338,"$540,944.00","$492,262.00"
MIA - MSP,51043595604,MIA-JFK-PHX 5,A321neo,https://www.airlines-manager.com/network/showline/42288078,https://www.airlines-manager.com/network/showflight/51043595604,https://www.airlines-manager.com/aircraft/show/105308268,3:00,10:59,338,"$540,944.00","$492,262.00"
MIA - MSP,51054795096,MIA-JFK-PHX 3,A321neo,https://www.airlines-manager.com/network/showline/42288078,https://www.airlines-manager.com/network/showflight/51054795096,https://www.airlines-manager.com/aircraft/show/105308266,10:00,17:59,338,"$540,944.00","$492,262.00"
MIA - MSP,51066574451,MIA-JFK-PHX 6,ERJ-175,https://www.airlines-manager.com/network/showline/42288078,https://www.airlines-manager.com/network/showflight/51066574451,https://www.airlines-manager.com/aircraft/show/82683137,13:00,20:59,112,"$235,728.00","$202,770.00"
MIA - MSP,51077491442,MIA-JFK-PHX 2,A321neo,https://www.airlines-manager.com/network/showline/42288078,https://www.airlines-manager.com/network/showflight/51077491442,https://www.airlines-manager.com/aircraft/show/105308265,18:15,2:14,338,"$540,944.00","$492,262.00"
MIA - MSP,51082169905,MIA-JFK-PHX 1,A321neo,https://www.airlines-manager.com/network/showline/42288078,https://www.airlines-manager.com/network/showflight/51082169905,https://www.airlines-manager.com/aircraft/show/105308264,21:45,5:44,338,"$540,944.00","$492,262.00"
MIA - MSY,51043595520,MIA-MKE-CMH 2,737-900ER,https://www.airlines-manager.com/network/showline/46160486,https://www.airlines-manager.com/network/showflight/51043595520,https://www.airlines-manager.com/aircraft/show/91806233,1:30,6:14,320,"$299,623.00","$264,500.00"
MIA - MSY,51043595521,MIA-MKE-CMH 5 B,A319-100,https://www.airlines-manager.com/network/showline/46160486,https://www.airlines-manager.com/network/showflight/51043595521,https://www.airlines-manager.com/aircraft/show/110582842,5:30,10:14,198,"$228,460.00","$203,967.00"
MIA - MSY,51054795001,MIA-MKE-CMH 1,737-900ER,https://www.airlines-manager.com/network/showline/46160486,https://www.airlines-manager.com/network/showflight/51054795001,https://www.airlines-manager.com/aircraft/show/88239556,8:30,13:14,320,"$299,623.00","$264,500.00"
MIA - MSY,51066574592,MIA-MKE-CMH 4,737-900ER,https://www.airlines-manager.com/network/showline/46160486,https://www.airlines-manager.com/network/showflight/51066574592,https://www.airlines-manager.com/aircraft/show/88494374,14:00,18:44,320,"$299,623.00","$264,500.00"
MIA - MSY,51077491546,MIA-MKE-CMH 3,737-900ER,https://www.airlines-manager.com/network/showline/46160486,https://www.airlines-manager.com/network/showflight/51077491546,https://www.airlines-manager.com/aircraft/show/88494378,19:30,0:14,320,"$299,623.00","$264,500.00"
MIA - NAS,51043595615,MIA-PUJ-BDA 5 S,A319-100,https://www.airlines-manager.com/network/showline/42193695,https://www.airlines-manager.com/network/showflight/51043595615,https://www.airlines-manager.com/aircraft/show/104034461,2:15,4:59,228,"$78,388.00","$60,417.00"
MIA - NAS,51054794952,MIA-PUJ-BDA 6 S,A319-100,https://www.airlines-manager.com/network/showline/42193695,https://www.airlines-manager.com/network/showflight/51054794952,https://www.airlines-manager.com/aircraft/show/99326789,7:30,10:14,228,"$78,388.00","$60,417.00"
MIA - NAS,51054794953,MIA-PUJ-BDA 1 S,A319-100,https://www.airlines-manager.com/network/showline/42193695,https://www.airlines-manager.com/network/showflight/51054794953,https://www.airlines-manager.com/aircraft/show/104034457,10:00,12:44,228,"$78,388.00","$60,417.00"
MIA - NAS,51066574463,MIA CARGO 1,737-700,https://www.airlines-manager.com/network/showline/42193695,https://www.airlines-manager.com/network/showflight/51066574463,https://www.airlines-manager.com/aircraft/show/107577220,13:15,15:59,0,"$33,882.00","$19,673.00"
MIA - NAS,51066574464,MIA-PUJ-BDA 2 S,A319-100,https://www.airlines-manager.com/network/showline/42193695,https://www.airlines-manager.com/network/showflight/51066574464,https://www.airlines-manager.com/aircraft/show/104034458,14:15,16:59,228,"$78,388.00","$60,417.00"
MIA - NAS,51077491469,MIA-PUJ-BDA 3 S,A319-100,https://www.airlines-manager.com/network/showline/42193695,https://www.airlines-manager.com/network/showflight/51077491469,https://www.airlines-manager.com/aircraft/show/104034459,18:30,21:14,228,"$78,388.00","$60,417.00"
MIA - NAS,51082169916,MIA-PUJ-BDA 4 S,A319-100,https://www.airlines-manager.com/network/showline/42193695,https://www.airlines-manager.com/network/showflight/51082169916,https://www.airlines-manager.com/aircraft/show/104034460,22:00,0:44,228,"$78,388.00","$60,417.00"
MIA - OAK,51043595439,MIA-OAK-SMF 5,737-900ER,https://www.airlines-manager.com/network/showline/46079209,https://www.airlines-manager.com/network/showflight/51043595439,https://www.airlines-manager.com/aircraft/show/91198617,1:00,12:59,320,"$736,351.00","$670,459.00"
MIA - OAK,51060918920,MIA-OAK-SMF 1,737-900ER,https://www.airlines-manager.com/network/showline/46079209,https://www.airlines-manager.com/network/showflight/51060918920,https://www.airlines-manager.com/aircraft/show/91198615,11:00,22:59,320,"$736,351.00","$670,459.00"
MIA - OAK,51066574433,MIA-OAK-SMF 2,737-900ER,https://www.airlines-manager.com/network/showline/46079209,https://www.airlines-manager.com/network/showflight/51066574433,https://www.airlines-manager.com/aircraft/show/91198619,13:00,0:59,320,"$736,351.00","$670,459.00"
MIA - OAK,51071689520,MIA-OAK-SMF 3,737-900ER,https://www.airlines-manager.com/network/showline/46079209,https://www.airlines-manager.com/network/showflight/51071689520,https://www.airlines-manager.com/aircraft/show/91198616,15:00,2:59,320,"$736,351.00","$670,459.00"
MIA - OAK,51086541008,MIA-OAK-SMF 4,737-900ER,https://www.airlines-manager.com/network/showline/46079209,https://www.airlines-manager.com/network/showflight/51086541008,https://www.airlines-manager.com/aircraft/show/91198618,23:00,10:59,320,"$736,351.00","$670,459.00"
MIA - OKC,51043595547,MIA-OKC-FSD 3,A321-200,https://www.airlines-manager.com/network/showline/47780556,https://www.airlines-manager.com/network/showflight/51043595547,https://www.airlines-manager.com/aircraft/show/110883112,1:45,8:29,310,"$429,682.00","$392,051.00"
MIA - OKC,51043595548,MIA-OKC-FSD 2,A321-200,https://www.airlines-manager.com/network/showline/47780556,https://www.airlines-manager.com/network/showflight/51043595548,https://www.airlines-manager.com/aircraft/show/110883111,4:00,10:44,310,"$429,682.00","$392,051.00"
MIA - OKC,51054795103,MIA-OKC-FSD 5,ERJ-175,https://www.airlines-manager.com/network/showline/47780556,https://www.airlines-manager.com/network/showflight/51054795103,https://www.airlines-manager.com/aircraft/show/104353572,10:00,16:44,112,"$202,107.00","$177,396.00"
MIA - OKC,51066574341,MIA-OKC-FSD 1,A321-200,https://www.airlines-manager.com/network/showline/47780556,https://www.airlines-manager.com/network/showflight/51066574341,https://www.airlines-manager.com/aircraft/show/110883110,13:00,19:44,310,"$429,682.00","$392,051.00"
MIA - OKC,51066574342,MIA-OKC-FSD 4,A321-200,https://www.airlines-manager.com/network/showline/47780556,https://www.airlines-manager.com/network/showflight/51066574342,https://www.airlines-manager.com/aircraft/show/110883113,14:45,21:29,310,"$429,682.00","$392,051.00"
MIA - OMA,51043595621,MIA-BOI-BNA 1,737-900ER,https://www.airlines-manager.com/network/showline/45701875,https://www.airlines-manager.com/network/showflight/51043595621,https://www.airlines-manager.com/aircraft/show/104133006,2:30,9:59,320,"$476,720.00","$431,642.00"
MIA - OMA,51043595622,MIA-BOI-BNA 4,737-900ER,https://www.airlines-manager.com/network/showline/45701875,https://www.airlines-manager.com/network/showflight/51043595622,https://www.airlines-manager.com/aircraft/show/103775657,6:30,13:59,320,"$476,720.00","$431,642.00"
MIA - OMA,51054795069,MIA-BOI-BNA 3,737-900ER,https://www.airlines-manager.com/network/showline/45701875,https://www.airlines-manager.com/network/showflight/51054795069,https://www.airlines-manager.com/aircraft/show/104020880,10:00,17:29,320,"$476,720.00","$431,642.00"
MIA - OMA,51071689555,MIA-BOI-BNA 2,737-900ER,https://www.airlines-manager.com/network/showline/45701875,https://www.airlines-manager.com/network/showflight/51071689555,https://www.airlines-manager.com/aircraft/show/104022609,15:15,22:44,320,"$476,720.00","$431,642.00"
MIA - OMA,51077491286,MIA-BOI-BNA 5,ERJ-175,https://www.airlines-manager.com/network/showline/45701875,https://www.airlines-manager.com/network/showflight/51077491286,https://www.airlines-manager.com/aircraft/show/103534663,17:15,0:44,112,"$225,148.00","$198,549.00"
MIA - ONT,51043595402,MIA-RNO-ONT 2,737-900ER,https://www.airlines-manager.com/network/showline/46280191,https://www.airlines-manager.com/network/showflight/51043595402,https://www.airlines-manager.com/aircraft/show/90489722,0:30,11:29,320,"$690,092.00","$628,484.00"
MIA - ONT,51043595403,MIA-RNO-ONT 3,737-900ER,https://www.airlines-manager.com/network/showline/46280191,https://www.airlines-manager.com/network/showflight/51043595403,https://www.airlines-manager.com/aircraft/show/86238756,2:30,13:29,320,"$690,092.00","$628,484.00"
MIA - ONT,51060918904,MIA-RNO-ONT 4,737-900ER,https://www.airlines-manager.com/network/showline/46280191,https://www.airlines-manager.com/network/showflight/51060918904,https://www.airlines-manager.com/aircraft/show/90489723,11:00,21:59,320,"$690,092.00","$628,484.00"
MIA - ONT,51066574507,MIA-RNO-ONT 5 B,A319-100,https://www.airlines-manager.com/network/showline/46280191,https://www.airlines-manager.com/network/showflight/51066574507,https://www.airlines-manager.com/aircraft/show/105223010,14:00,0:59,198,"$518,326.00","$473,586.00"
MIA - ONT,51086540957,MIA-RNO-ONT 1,737-900ER,https://www.airlines-manager.com/network/showline/46280191,https://www.airlines-manager.com/network/showflight/51086540957,https://www.airlines-manager.com/aircraft/show/86238755,22:30,9:29,320,"$690,092.00","$628,484.00"
MIA - ORD,51043595698,MIA-ORD-DFW 1,A321-200,https://www.airlines-manager.com/network/showline/42216504,https://www.airlines-manager.com/network/showflight/51043595698,https://www.airlines-manager.com/aircraft/show/91600935,3:15,9:59,310,"$423,389.00","$363,584.00"
MIA - ORD,51043595699,MIA-ORD-DFW 4,A321-200,https://www.airlines-manager.com/network/showline/42216504,https://www.airlines-manager.com/network/showflight/51043595699,https://www.airlines-manager.com/aircraft/show/91600938,4:15,10:59,310,"$423,389.00","$363,584.00"
MIA - ORD,51054795035,MIA-ORD-DFW 6,ERJ-175,https://www.airlines-manager.com/network/showline/42216504,https://www.airlines-manager.com/network/showflight/51054795035,https://www.airlines-manager.com/aircraft/show/82543123,9:00,15:44,112,"$198,920.00","$160,943.00"
MIA - ORD,51060918941,MIA-ORD-DFW 5,A321-200,https://www.airlines-manager.com/network/showline/42216504,https://www.airlines-manager.com/network/showflight/51060918941,https://www.airlines-manager.com/aircraft/show/91600937,11:00,17:44,310,"$423,389.00","$363,584.00"
MIA - ORD,51066574630,MIA-ORD-DFW 3,A321-200,https://www.airlines-manager.com/network/showline/42216504,https://www.airlines-manager.com/network/showflight/51066574630,https://www.airlines-manager.com/aircraft/show/91600939,14:45,21:29,310,"$423,389.00","$363,584.00"
MIA - ORD,51071689567,MIA-ORD-BOI-JAX B,A319-100,https://www.airlines-manager.com/network/showline/42216504,https://www.airlines-manager.com/network/showflight/51071689567,https://www.airlines-manager.com/aircraft/show/106339154,15:30,22:14,198,"$319,346.00","$271,450.00"
MIA - ORD,51082169828,MIA-ORD-DFW 2,A321-200,https://www.airlines-manager.com/network/showline/42216504,https://www.airlines-manager.com/network/showflight/51082169828,https://www.airlines-manager.com/aircraft/show/91600936,20:45,3:29,310,"$423,389.00","$363,584.00"
MIA - PDX,51054795080,MIA-PDX-DTW 1,737-900ER,https://www.airlines-manager.com/network/showline/44322115,https://www.airlines-manager.com/network/showflight/51054795080,https://www.airlines-manager.com/aircraft/show/89943715,10:00,22:29,320,"$769,986.00","$699,669.00"
MIA - PDX,51066574434,MIA-PDX-DTW 3,737-900ER,https://www.airlines-manager.com/network/showline/44322115,https://www.airlines-manager.com/network/showflight/51066574434,https://www.airlines-manager.com/aircraft/show/89943713,13:00,1:29,320,"$769,986.00","$699,669.00"
MIA - PDX,51066574435,MIA-PDX-DTW 4,737-900ER,https://www.airlines-manager.com/network/showline/44322115,https://www.airlines-manager.com/network/showflight/51066574435,https://www.airlines-manager.com/aircraft/show/89943712,14:00,2:29,320,"$769,986.00","$699,669.00"
MIA - PDX,51077491551,MIA-PDX-DTW 2,737-900ER,https://www.airlines-manager.com/network/showline/44322115,https://www.airlines-manager.com/network/showflight/51077491551,https://www.airlines-manager.com/aircraft/show/89943714,19:30,7:59,320,"$769,986.00","$699,669.00"
MIA - PDX,51086541046,MIA-PDX-DTW 5,737-900ER,https://www.airlines-manager.com/network/showline/44322115,https://www.airlines-manager.com/network/showflight/51086541046,https://www.airlines-manager.com/aircraft/show/89943711,23:30,11:59,320,"$769,986.00","$699,669.00"
MIA - PHL,51043595731,MIA-ORD-DFW 3,A321-200,https://www.airlines-manager.com/network/showline/42384835,https://www.airlines-manager.com/network/showflight/51043595731,https://www.airlines-manager.com/aircraft/show/91600939,4:00,9:59,310,"$379,365.00","$337,590.00"
MIA - PHL,51043595732,MIA-ORD-DFW 5,A321-200,https://www.airlines-manager.com/network/showline/42384835,https://www.airlines-manager.com/network/showflight/51043595732,https://www.airlines-manager.com/aircraft/show/91600937,5:00,10:59,310,"$379,365.00","$337,590.00"
MIA - PHL,51054795108,MIA-ORD-DFW 2,A321-200,https://www.airlines-manager.com/network/showline/42384835,https://www.airlines-manager.com/network/showflight/51054795108,https://www.airlines-manager.com/aircraft/show/91600936,10:00,15:59,310,"$379,365.00","$337,590.00"
MIA - PHL,51071689645,MIA-ORD-DFW 1,A321-200,https://www.airlines-manager.com/network/showline/42384835,https://www.airlines-manager.com/network/showflight/51071689645,https://www.airlines-manager.com/aircraft/show/91600935,16:30,22:29,310,"$379,365.00","$337,590.00"
MIA - PHL,51077491334,MIA-ORD-DFW 4,A321-200,https://www.airlines-manager.com/network/showline/42384835,https://www.airlines-manager.com/network/showflight/51077491334,https://www.airlines-manager.com/aircraft/show/91600938,17:30,23:29,310,"$379,365.00","$337,590.00"
MIA - PHL,51082169939,MIA-ORD-DFW 6,ERJ-175,https://www.airlines-manager.com/network/showline/42384835,https://www.airlines-manager.com/network/showflight/51082169939,https://www.airlines-manager.com/aircraft/show/82543123,22:15,4:14,112,"$179,338.00","$152,500.00"
MIA - PHX,51043595340,MIA-JFK-PHX 3,A321neo,https://www.airlines-manager.com/network/showline/42288076,https://www.airlines-manager.com/network/showflight/51043595340,https://www.airlines-manager.com/aircraft/show/105308266,0:15,9:59,338,"$669,633.00","$610,928.00"
MIA - PHX,51043595341,MIA-JFK-PHX 2,A321neo,https://www.airlines-manager.com/network/showline/42288076,https://www.airlines-manager.com/network/showflight/51043595341,https://www.airlines-manager.com/aircraft/show/105308265,2:15,11:59,338,"$669,633.00","$610,928.00"
MIA - PHX,51060918913,MIA-JFK-PHX 5,A321neo,https://www.airlines-manager.com/network/showline/42288076,https://www.airlines-manager.com/network/showflight/51060918913,https://www.airlines-manager.com/aircraft/show/105308268,11:00,20:44,338,"$669,633.00","$610,928.00"
MIA - PHX,51060918914,MIA-JFK-PHX 1,A321neo,https://www.airlines-manager.com/network/showline/42288076,https://www.airlines-manager.com/network/showflight/51060918914,https://www.airlines-manager.com/aircraft/show/105308264,12:00,21:44,338,"$669,633.00","$610,928.00"
MIA - PHX,51071689637,MIA-JFK-PHX 4,A321neo,https://www.airlines-manager.com/network/showline/42288076,https://www.airlines-manager.com/network/showflight/51071689637,https://www.airlines-manager.com/aircraft/show/105308267,16:15,1:59,338,"$669,633.00","$610,928.00"
MIA - PHX,51082169861,MIA-JFK-PHX 6,ERJ-175,https://www.airlines-manager.com/network/showline/42288076,https://www.airlines-manager.com/network/showflight/51082169861,https://www.airlines-manager.com/aircraft/show/82683137,21:00,6:44,112,"$289,734.00","$249,597.00"
MIA - PIT,51043595702,MIA-AUS-PIT 3,737-900ER,https://www.airlines-manager.com/network/showline/44971957,https://www.airlines-manager.com/network/showflight/51043595702,https://www.airlines-manager.com/aircraft/show/99920624,3:15,9:14,320,"$380,890.00","$339,214.00"
MIA - PIT,51054795090,MIA-AUS-PIT 2,737-900ER,https://www.airlines-manager.com/network/showline/44971957,https://www.airlines-manager.com/network/showflight/51054795090,https://www.airlines-manager.com/aircraft/show/99920625,10:00,15:59,320,"$380,890.00","$339,214.00"
MIA - PIT,51071689656,MIA-AUS-PIT 1,737-900ER,https://www.airlines-manager.com/network/showline/44971957,https://www.airlines-manager.com/network/showflight/51071689656,https://www.airlines-manager.com/aircraft/show/99920626,16:30,22:29,320,"$380,890.00","$339,214.00"
MIA - PIT,51082169811,MIA-AUS-PIT 5,ERJ-175,https://www.airlines-manager.com/network/showline/44971957,https://www.airlines-manager.com/network/showflight/51082169811,https://www.airlines-manager.com/aircraft/show/82323689,20:30,2:29,112,"$180,066.00","$156,270.00"
MIA - PIT,51082169812,MIA-AUS-PIT 4,737-900ER,https://www.airlines-manager.com/network/showline/44971957,https://www.airlines-manager.com/network/showflight/51082169812,https://www.airlines-manager.com/aircraft/show/99920623,21:15,3:14,320,"$380,890.00","$339,214.00"
MIA - PLS,51043595695,MIA-PUJ-BDA 6 S,A319-100,https://www.airlines-manager.com/network/showline/42193793,https://www.airlines-manager.com/network/showflight/51043595695,https://www.airlines-manager.com/aircraft/show/99326789,3:15,7:29,228,"$205,163.00","$184,070.00"
MIA - PLS,51043595696,MIA-PUJ-BDA 4 S,A319-100,https://www.airlines-manager.com/network/showline/42193793,https://www.airlines-manager.com/network/showflight/51043595696,https://www.airlines-manager.com/aircraft/show/104034460,5:00,9:14,228,"$205,163.00","$184,070.00"
MIA - PLS,51054795071,MIA-PUJ-BDA 2 S,A319-100,https://www.airlines-manager.com/network/showline/42193793,https://www.airlines-manager.com/network/showflight/51054795071,https://www.airlines-manager.com/aircraft/show/104034458,10:00,14:14,228,"$205,163.00","$184,070.00"
MIA - PLS,51066574617,MIA-PUJ-BDA 3 S,A319-100,https://www.airlines-manager.com/network/showline/42193793,https://www.airlines-manager.com/network/showflight/51066574617,https://www.airlines-manager.com/aircraft/show/104034459,14:15,18:29,228,"$205,163.00","$184,070.00"
MIA - PLS,51071689671,MIA-PUJ-BDA 1 S,A319-100,https://www.airlines-manager.com/network/showline/42193793,https://www.airlines-manager.com/network/showflight/51071689671,https://www.airlines-manager.com/aircraft/show/104034457,17:00,21:14,228,"$205,163.00","$184,070.00"
MIA - PLS,51082169915,MIA-PUJ-BDA 5 S,A319-100,https://www.airlines-manager.com/network/showline/42193793,https://www.airlines-manager.com/network/showflight/51082169915,https://www.airlines-manager.com/aircraft/show/104034461,22:00,2:14,228,"$205,163.00","$184,070.00"
MIA - POS,51066574273,MIA 84B-7 E2,777-300,https://www.airlines-manager.com/network/showline/46538394,https://www.airlines-manager.com/network/showflight/51066574273,https://www.airlines-manager.com/aircraft/show/106676231,12:30,20:29,962,"$1,334,700.00","$1,217,593.00"
MIA - POS,51071689593,MIA 84B-5 E2,777-300,https://www.airlines-manager.com/network/showline/46538394,https://www.airlines-manager.com/network/showflight/51071689593,https://www.airlines-manager.com/aircraft/show/106676229,16:00,23:59,729,"$1,100,436.00","$996,115.00"
MIA - PUJ,51043595708,MIA-PUJ-BDA 2 S,A319-100,https://www.airlines-manager.com/network/showline/42193830,https://www.airlines-manager.com/network/showflight/51043595708,https://www.airlines-manager.com/aircraft/show/104034458,3:30,9:14,228,"$275,428.00","$248,808.00"
MIA - PUJ,51054795118,MIA-PUJ-BDA 5 S,A319-100,https://www.airlines-manager.com/network/showline/42193830,https://www.airlines-manager.com/network/showflight/51054795118,https://www.airlines-manager.com/aircraft/show/104034461,10:00,15:44,228,"$275,428.00","$248,808.00"
MIA - PUJ,51071689629,MIA CARGO 1,737-700,https://www.airlines-manager.com/network/showline/42193830,https://www.airlines-manager.com/network/showflight/51071689629,https://www.airlines-manager.com/aircraft/show/107577220,16:00,21:44,0,"$94,547.00","$70,952.00"
MIA - PUJ,51071689630,MIA-PUJ-BDA 4 S,A319-100,https://www.airlines-manager.com/network/showline/42193830,https://www.airlines-manager.com/network/showflight/51071689630,https://www.airlines-manager.com/aircraft/show/104034460,16:15,21:59,228,"$275,428.00","$248,808.00"
MIA - PUJ,51077491254,MIA-PUJ-BDA 6 S,A319-100,https://www.airlines-manager.com/network/showline/42193830,https://www.airlines-manager.com/network/showflight/51077491254,https://www.airlines-manager.com/aircraft/show/99326789,17:15,22:59,228,"$275,428.00","$248,808.00"
MIA - PUJ,51082169879,MIA-PUJ-BDA 1 S,A319-100,https://www.airlines-manager.com/network/showline/42193830,https://www.airlines-manager.com/network/showflight/51082169879,https://www.airlines-manager.com/aircraft/show/104034457,21:15,2:59,228,"$275,428.00","$248,808.00"
MIA - PUJ,51082169880,MIA-PUJ-BDA 3 S,A319-100,https://www.airlines-manager.com/network/showline/42193830,https://www.airlines-manager.com/network/showflight/51082169880,https://www.airlines-manager.com/aircraft/show/104034459,22:00,3:44,228,"$275,428.00","$248,808.00"
MIA - PVD,51043595506,MIA-BUR-PVD 3,A321-200,https://www.airlines-manager.com/network/showline/47218382,https://www.airlines-manager.com/network/showflight/51043595506,https://www.airlines-manager.com/aircraft/show/108834805,1:15,7:59,310,"$425,198.00","$388,969.00"
MIA - PVD,51054794929,MIA-BUR-PVD 5 B,A319-100,https://www.airlines-manager.com/network/showline/47218382,https://www.airlines-manager.com/network/showflight/51054794929,https://www.airlines-manager.com/aircraft/show/108834807,7:15,13:59,198,"$320,950.00","$291,915.00"
MIA - PVD,51060918881,MIA-BUR-PVD 2,A321-200,https://www.airlines-manager.com/network/showline/47218382,https://www.airlines-manager.com/network/showflight/51060918881,https://www.airlines-manager.com/aircraft/show/108834804,11:00,17:44,310,"$425,198.00","$388,969.00"
MIA - PVD,51071689667,MIA-BUR-PVD 4,A321-200,https://www.airlines-manager.com/network/showline/47218382,https://www.airlines-manager.com/network/showflight/51071689667,https://www.airlines-manager.com/aircraft/show/108834806,17:00,23:44,310,"$425,198.00","$388,969.00"
MIA - PVD,51082169940,MIA-BUR-PVD 1,A321-200,https://www.airlines-manager.com/network/showline/47218382,https://www.airlines-manager.com/network/showflight/51082169940,https://www.airlines-manager.com/aircraft/show/108834803,22:15,4:59,310,"$425,198.00","$388,969.00"
MIA - PWM,51054794943,MIA-SDF-PWM 3,A321-200,https://www.airlines-manager.com/network/showline/46376143,https://www.airlines-manager.com/network/showflight/51054794943,https://www.airlines-manager.com/aircraft/show/94886629,7:30,14:59,310,"$465,418.00","$427,494.00"
MIA - PWM,51066574506,MIA-SDF-PWM 2,A321-200,https://www.airlines-manager.com/network/showline/46376143,https://www.airlines-manager.com/network/showflight/51066574506,https://www.airlines-manager.com/aircraft/show/94886626,14:00,21:29,310,"$465,418.00","$427,494.00"
MIA - PWM,51077491484,MIA-SDF-PWM 1,A321-200,https://www.airlines-manager.com/network/showline/46376143,https://www.airlines-manager.com/network/showflight/51077491484,https://www.airlines-manager.com/aircraft/show/96692674,18:45,2:14,310,"$465,418.00","$427,494.00"
MIA - PWM,51082169826,MIA-SDF-PWM 5,ERJ-175,https://www.airlines-manager.com/network/showline/46376143,https://www.airlines-manager.com/network/showflight/51082169826,https://www.airlines-manager.com/aircraft/show/105601657,20:45,4:14,112,"$219,801.00","$194,681.00"
MIA - PWM,51086541067,MIA-SDF-PWM 4,A321-200,https://www.airlines-manager.com/network/showline/46376143,https://www.airlines-manager.com/network/showflight/51086541067,https://www.airlines-manager.com/aircraft/show/94886625,23:45,7:14,310,"$465,418.00","$427,494.00"
MIA - RDU,51043595772,MIA-AUS-PIT 1,737-900ER,https://www.airlines-manager.com/network/showline/44971928,https://www.airlines-manager.com/network/showflight/51043595772,https://www.airlines-manager.com/aircraft/show/99920626,4:30,9:14,320,"$309,045.00","$272,869.00"
MIA - RDU,51054795016,MIA-AUS-PIT 5,ERJ-175,https://www.airlines-manager.com/network/showline/44971928,https://www.airlines-manager.com/network/showflight/51054795016,https://www.airlines-manager.com/aircraft/show/82323689,8:30,13:14,112,"$147,216.00","$127,083.00"
MIA - RDU,51054795017,MIA-AUS-PIT 4,737-900ER,https://www.airlines-manager.com/network/showline/44971928,https://www.airlines-manager.com/network/showflight/51054795017,https://www.airlines-manager.com/aircraft/show/99920623,10:00,14:44,320,"$309,045.00","$272,869.00"
MIA - RDU,51071689592,MIA-AUS-PIT 3,737-900ER,https://www.airlines-manager.com/network/showline/44971928,https://www.airlines-manager.com/network/showflight/51071689592,https://www.airlines-manager.com/aircraft/show/99920624,16:00,20:44,320,"$309,045.00","$272,869.00"
MIA - RDU,51082169920,MIA-AUS-PIT 2,737-900ER,https://www.airlines-manager.com/network/showline/44971928,https://www.airlines-manager.com/network/showflight/51082169920,https://www.airlines-manager.com/aircraft/show/99920625,22:00,2:44,320,"$309,045.00","$272,869.00"
MIA - RIC,51054795014,MIA-OKC-FSD 3,A321-200,https://www.airlines-manager.com/network/showline/47780585,https://www.airlines-manager.com/network/showflight/51054795014,https://www.airlines-manager.com/aircraft/show/110883112,8:30,13:44,310,"$335,164.00","$303,882.00"
MIA - RIC,51060918874,MIA-OKC-FSD 2,A321-200,https://www.airlines-manager.com/network/showline/47780585,https://www.airlines-manager.com/network/showflight/51060918874,https://www.airlines-manager.com/aircraft/show/110883111,11:00,16:14,310,"$335,164.00","$303,882.00"
MIA - RIC,51071689664,MIA-OKC-FSD 5,ERJ-175,https://www.airlines-manager.com/network/showline/47780585,https://www.airlines-manager.com/network/showflight/51071689664,https://www.airlines-manager.com/aircraft/show/104353572,16:45,21:59,112,"$159,315.00","$139,101.00"
MIA - RIC,51077491555,MIA-OKC-FSD 1,A321-200,https://www.airlines-manager.com/network/showline/47780585,https://www.airlines-manager.com/network/showflight/51077491555,https://www.airlines-manager.com/aircraft/show/110883110,19:45,0:59,310,"$335,164.00","$303,882.00"
MIA - RIC,51082169894,MIA-OKC-FSD 4,A321-200,https://www.airlines-manager.com/network/showline/47780585,https://www.airlines-manager.com/network/showflight/51082169894,https://www.airlines-manager.com/aircraft/show/110883113,21:30,2:44,310,"$335,164.00","$303,882.00"
MIA - RNO,51043595447,MIA-RNO-ONT 5 B,A319-100,https://www.airlines-manager.com/network/showline/46280187,https://www.airlines-manager.com/network/showflight/51043595447,https://www.airlines-manager.com/aircraft/show/105223010,1:00,12:44,198,"$542,924.00","$497,087.00"
MIA - RNO,51060918905,MIA-RNO-ONT 1,737-900ER,https://www.airlines-manager.com/network/showline/46280187,https://www.airlines-manager.com/network/showflight/51060918905,https://www.airlines-manager.com/aircraft/show/86238755,11:00,22:29,320,"$720,599.00","$657,748.00"
MIA - RNO,51066574452,MIA-RNO-ONT 2,737-900ER,https://www.airlines-manager.com/network/showline/46280187,https://www.airlines-manager.com/network/showflight/51066574452,https://www.airlines-manager.com/aircraft/show/90489722,13:00,0:29,320,"$720,599.00","$657,748.00"
MIA - RNO,51071689509,MIA-RNO-ONT 3,737-900ER,https://www.airlines-manager.com/network/showline/46280187,https://www.airlines-manager.com/network/showflight/51071689509,https://www.airlines-manager.com/aircraft/show/86238756,15:00,2:29,320,"$720,599.00","$657,748.00"
MIA - RNO,51082169932,MIA-RNO-ONT 4,737-900ER,https://www.airlines-manager.com/network/showline/46280187,https://www.airlines-manager.com/network/showflight/51082169932,https://www.airlines-manager.com/aircraft/show/90489723,22:00,9:29,320,"$720,599.00","$657,748.00"
MIA - RSW,51043595743,MIA-ANU-SXM 3 S,A319-100,https://www.airlines-manager.com/network/showline/47559657,https://www.airlines-manager.com/network/showflight/51043595743,https://www.airlines-manager.com/aircraft/show/110114297,4:00,6:29,228,"$65,477.00","$47,224.00"
MIA - RSW,51054795046,MIA-ANU-SXM 1 S,A319-100,https://www.airlines-manager.com/network/showline/47559657,https://www.airlines-manager.com/network/showflight/51054795046,https://www.airlines-manager.com/aircraft/show/110114295,9:15,11:44,228,"$65,477.00","$47,224.00"
MIA - RSW,51060918832,MIA-ANU-SXM 2 S,A319-100,https://www.airlines-manager.com/network/showline/47559657,https://www.airlines-manager.com/network/showflight/51060918832,https://www.airlines-manager.com/aircraft/show/110114296,10:15,12:44,228,"$65,477.00","$47,224.00"
MIA - RSW,51066574493,MIA-ANU-SXM 6 S,A319-100,https://www.airlines-manager.com/network/showline/47559657,https://www.airlines-manager.com/network/showflight/51066574493,https://www.airlines-manager.com/aircraft/show/110114300,14:00,16:29,228,"$65,477.00","$47,224.00"
MIA - RSW,51082169847,MIA-ANU-SXM 5 S,A319-100,https://www.airlines-manager.com/network/showline/47559657,https://www.airlines-manager.com/network/showflight/51082169847,https://www.airlines-manager.com/aircraft/show/110114299,21:00,23:29,228,"$65,477.00","$47,224.00"
MIA - RSW,51086541023,MIA-ANU-SXM 4 S,A319-100,https://www.airlines-manager.com/network/showline/47559657,https://www.airlines-manager.com/network/showflight/51086541023,https://www.airlines-manager.com/aircraft/show/110114298,23:00,1:29,228,"$65,477.00","$47,224.00"
MIA - SAN,51043595575,MIA-BWI-YYZ 2,A321-200,https://www.airlines-manager.com/network/showline/42608092,https://www.airlines-manager.com/network/showflight/51043595575,https://www.airlines-manager.com/aircraft/show/92153440,1:45,12:44,310,"$684,960.00","$628,161.00"
MIA - SAN,51054795105,MIA-BWI-YYZ 3,A321-200,https://www.airlines-manager.com/network/showline/42608092,https://www.airlines-manager.com/network/showflight/51054795105,https://www.airlines-manager.com/aircraft/show/92153441,10:00,20:59,310,"$684,960.00","$628,161.00"
MIA - SAN,51060918963,MIA-BWI-YYZ 6 S,ERJ-175,https://www.airlines-manager.com/network/showline/42608092,https://www.airlines-manager.com/network/showflight/51060918963,https://www.airlines-manager.com/aircraft/show/92137503,12:00,22:59,136,"$299,119.00","$265,380.00"
MIA - SAN,51071689686,MIA-BWI-YYZ 4,A321-200,https://www.airlines-manager.com/network/showline/42608092,https://www.airlines-manager.com/network/showflight/51071689686,https://www.airlines-manager.com/aircraft/show/92153442,17:00,3:59,310,"$684,960.00","$628,161.00"
MIA - SAN,51077491505,MIA-BWI-YYZ 5,A321-200,https://www.airlines-manager.com/network/showline/42608092,https://www.airlines-manager.com/network/showflight/51077491505,https://www.airlines-manager.com/aircraft/show/92153439,19:00,5:59,310,"$684,960.00","$628,161.00"
MIA - SAN,51086540993,MIA-BWI-YYZ 1,A321-200,https://www.airlines-manager.com/network/showline/42608092,https://www.airlines-manager.com/network/showflight/51086540993,https://www.airlines-manager.com/aircraft/show/92153443,22:45,9:44,310,"$684,960.00","$628,161.00"
MIA - SAT,51043595697,MIA-BDL-SAT 3,737-900ER,https://www.airlines-manager.com/network/showline/46909516,https://www.airlines-manager.com/network/showflight/51043595697,https://www.airlines-manager.com/aircraft/show/107763562,3:15,9:44,320,"$409,642.00","$368,358.00"
MIA - SAT,51060918884,MIA-BDL-SAT 2,737-900ER,https://www.airlines-manager.com/network/showline/46909516,https://www.airlines-manager.com/network/showflight/51060918884,https://www.airlines-manager.com/aircraft/show/107763565,11:00,17:29,320,"$409,642.00","$368,358.00"
MIA - SAT,51066574631,MIA-BDL-SAT 5,ERJ-175,https://www.airlines-manager.com/network/showline/46909516,https://www.airlines-manager.com/network/showflight/51066574631,https://www.airlines-manager.com/aircraft/show/107467213,14:45,21:14,112,"$193,333.00","$169,367.00"
MIA - SAT,51082169816,MIA-BDL-SAT 4,737-900ER,https://www.airlines-manager.com/network/showline/46909516,https://www.airlines-manager.com/network/showflight/51082169816,https://www.airlines-manager.com/aircraft/show/107763561,20:30,2:59,320,"$409,642.00","$368,358.00"
MIA - SAT,51082169817,MIA-BDL-SAT 1,737-900ER,https://www.airlines-manager.com/network/showline/46909516,https://www.airlines-manager.com/network/showflight/51082169817,https://www.airlines-manager.com/aircraft/show/107763566,20:45,3:14,320,"$409,642.00","$368,358.00"
MIA - SAV,51043595330,MIA-OKC-FSD 2,A321-200,https://www.airlines-manager.com/network/showline/47780592,https://www.airlines-manager.com/network/showflight/51043595330,https://www.airlines-manager.com/aircraft/show/110883111,0:15,3:59,310,"$214,362.00","$189,091.00"
MIA - SAV,51043595331,MIA-OKC-FSD 5,ERJ-175,https://www.airlines-manager.com/network/showline/47780592,https://www.airlines-manager.com/network/showflight/51043595331,https://www.airlines-manager.com/aircraft/show/104353572,6:00,9:44,112,"$100,092.00","$84,159.00"
MIA - SAV,51054795029,MIA-OKC-FSD 1,A321-200,https://www.airlines-manager.com/network/showline/47780592,https://www.airlines-manager.com/network/showflight/51054795029,https://www.airlines-manager.com/aircraft/show/110883110,9:00,12:44,310,"$214,362.00","$189,091.00"
MIA - SAV,51060918873,MIA-OKC-FSD 4,A321-200,https://www.airlines-manager.com/network/showline/47780592,https://www.airlines-manager.com/network/showflight/51060918873,https://www.airlines-manager.com/aircraft/show/110883113,11:00,14:44,310,"$214,362.00","$189,091.00"
MIA - SAV,51082169918,MIA-OKC-FSD 3,A321-200,https://www.airlines-manager.com/network/showline/47780592,https://www.airlines-manager.com/network/showflight/51082169918,https://www.airlines-manager.com/aircraft/show/110883112,22:00,1:44,269,"$197,680.00","$172,905.00"
MIA - SDF,51043595419,MIA-SDF-PWM 3,A321-200,https://www.airlines-manager.com/network/showline/46415148,https://www.airlines-manager.com/network/showflight/51043595419,https://www.airlines-manager.com/aircraft/show/94886629,0:45,6:29,310,"$354,305.00","$319,939.00"
MIA - SDF,51054794994,MIA-SDF-PWM 2,A321-200,https://www.airlines-manager.com/network/showline/46415148,https://www.airlines-manager.com/network/showflight/51054794994,https://www.airlines-manager.com/aircraft/show/94886626,8:15,13:59,310,"$354,305.00","$319,939.00"
MIA - SDF,51066574448,MIA-SDF-PWM 1,A321-200,https://www.airlines-manager.com/network/showline/46415148,https://www.airlines-manager.com/network/showflight/51066574448,https://www.airlines-manager.com/aircraft/show/96692674,13:00,18:44,310,"$354,305.00","$319,939.00"
MIA - SDF,51071689488,MIA-SDF-PWM 5,ERJ-175,https://www.airlines-manager.com/network/showline/46415148,https://www.airlines-manager.com/network/showflight/51071689488,https://www.airlines-manager.com/aircraft/show/105601657,15:00,20:44,112,"$167,438.00","$145,225.00"
MIA - SDF,51071689489,MIA CARGO 2,737-700,https://www.airlines-manager.com/network/showline/46415148,https://www.airlines-manager.com/network/showflight/51071689489,https://www.airlines-manager.com/aircraft/show/107527976,15:45,21:29,0,"$94,178.00","$69,883.00"
MIA - SDF,51077491439,MIA-SDF-PWM 4,A321-200,https://www.airlines-manager.com/network/showline/46415148,https://www.airlines-manager.com/network/showflight/51077491439,https://www.airlines-manager.com/aircraft/show/94886625,18:00,23:44,310,"$346,354.00","$313,489.00"
MIA - SEA,51043595513,MIA-LAS-SEA 3,A321neo,https://www.airlines-manager.com/network/showline/42449491,https://www.airlines-manager.com/network/showflight/51043595513,https://www.airlines-manager.com/aircraft/show/105093927,1:30,13:59,338,"$830,955.00","$762,906.00"
MIA - SEA,51054795066,MIA-LAS-SEA 4,A321neo,https://www.airlines-manager.com/network/showline/42449491,https://www.airlines-manager.com/network/showflight/51054795066,https://www.airlines-manager.com/aircraft/show/105093928,10:00,22:29,338,"$830,955.00","$762,906.00"
MIA - SEA,51066574429,MIA-LAS-SEA 5,A321neo,https://www.airlines-manager.com/network/showline/42449491,https://www.airlines-manager.com/network/showflight/51066574429,https://www.airlines-manager.com/aircraft/show/105093929,13:00,1:29,338,"$830,955.00","$762,906.00"
MIA - SEA,51082169818,MIA-LAS-SEA 1,A321neo,https://www.airlines-manager.com/network/showline/42449491,https://www.airlines-manager.com/network/showflight/51082169818,https://www.airlines-manager.com/aircraft/show/105093925,20:30,8:59,338,"$830,955.00","$762,906.00"
MIA - SEA,51086540951,MIA-LAS-SEA 6 B,A319-100,https://www.airlines-manager.com/network/showline/42449491,https://www.airlines-manager.com/network/showflight/51086540951,https://www.airlines-manager.com/aircraft/show/113251304,22:30,11:14,198,"$575,677.00","$518,400.00"
MIA - SEA,51086540952,MIA-LAS-SEA 2,A321neo,https://www.airlines-manager.com/network/showline/42449491,https://www.airlines-manager.com/network/showflight/51086540952,https://www.airlines-manager.com/aircraft/show/105093926,23:30,11:59,338,"$830,955.00","$762,906.00"
MIA - SJC,51043595551,MIA-SJC-YYC 5,737-900ER,https://www.airlines-manager.com/network/showline/46909498,https://www.airlines-manager.com/network/showflight/51043595551,https://www.airlines-manager.com/aircraft/show/107763563,1:45,13:44,320,"$730,204.00","$664,037.00"
MIA - SJC,51060918974,MIA-SJC-YYC 1,737-900ER,https://www.airlines-manager.com/network/showline/46909498,https://www.airlines-manager.com/network/showflight/51060918974,https://www.airlines-manager.com/aircraft/show/107763569,12:00,23:59,320,"$730,204.00","$664,037.00"
MIA - SJC,51066574500,MIA-SJC-YYC 2,737-900ER,https://www.airlines-manager.com/network/showline/46909498,https://www.airlines-manager.com/network/showflight/51066574500,https://www.airlines-manager.com/aircraft/show/107763568,14:00,1:59,320,"$730,204.00","$664,037.00"
MIA - SJC,51071689622,MIA-SJC-YYC 3,737-900ER,https://www.airlines-manager.com/network/showline/46909498,https://www.airlines-manager.com/network/showflight/51071689622,https://www.airlines-manager.com/aircraft/show/107763567,16:00,3:59,320,"$730,204.00","$664,037.00"
MIA - SJC,51086541063,MIA-SJC-YYC 4,737-900ER,https://www.airlines-manager.com/network/showline/46909498,https://www.airlines-manager.com/network/showflight/51086541063,https://www.airlines-manager.com/aircraft/show/107763564,23:45,11:44,320,"$730,204.00","$664,037.00"
MIA - SJU,51043595692,MIA-SJU-BOS 6 B,A319-100,https://www.airlines-manager.com/network/showline/42305291,https://www.airlines-manager.com/network/showflight/51043595692,https://www.airlines-manager.com/aircraft/show/110582841,3:15,9:29,198,"$286,433.00","$257,368.00"
MIA - SJU,51060918830,MIA-SJU-BOS 2,A321-200,https://www.airlines-manager.com/network/showline/42305291,https://www.airlines-manager.com/network/showflight/51060918830,https://www.airlines-manager.com/aircraft/show/91352062,10:15,16:29,310,"$379,598.00","$343,323.00"
MIA - SJU,51060918831,MIA-SJU-BOS 3,A321-200,https://www.airlines-manager.com/network/showline/42305291,https://www.airlines-manager.com/network/showflight/51060918831,https://www.airlines-manager.com/aircraft/show/91352061,12:15,18:29,310,"$379,598.00","$343,323.00"
MIA - SJU,51077491448,MIA-SJU-BOS 4,A321-200,https://www.airlines-manager.com/network/showline/42305291,https://www.airlines-manager.com/network/showflight/51077491448,https://www.airlines-manager.com/aircraft/show/91352060,18:15,0:29,310,"$379,598.00","$343,323.00"
MIA - SJU,51077491449,MIA-SJU-BOS 5,A321-200,https://www.airlines-manager.com/network/showline/42305291,https://www.airlines-manager.com/network/showflight/51077491449,https://www.airlines-manager.com/aircraft/show/91352059,19:15,1:29,310,"$379,598.00","$343,323.00"
MIA - SJU,51086540985,MIA-SJU-BOS 1,A321-200,https://www.airlines-manager.com/network/showline/42305291,https://www.airlines-manager.com/network/showflight/51086540985,https://www.airlines-manager.com/aircraft/show/91352063,22:45,4:59,273,"$339,357.00","$304,407.00"
MIA - SKB,51043595537,MIA-ANU-SXM 4 S,A319-100,https://www.airlines-manager.com/network/showline/47559665,https://www.airlines-manager.com/network/showflight/51043595537,https://www.airlines-manager.com/aircraft/show/110114298,1:30,8:29,228,"$343,281.00","$313,752.00"
MIA - SKB,51043595538,MIA-ANU-SXM 1 S,A319-100,https://www.airlines-manager.com/network/showline/47559665,https://www.airlines-manager.com/network/showflight/51043595538,https://www.airlines-manager.com/aircraft/show/110114295,2:15,9:14,228,"$343,281.00","$313,752.00"
MIA - SKB,51043595539,MIA-ANU-SXM 2 S,A319-100,https://www.airlines-manager.com/network/showline/47559665,https://www.airlines-manager.com/network/showflight/51043595539,https://www.airlines-manager.com/aircraft/show/110114296,3:15,10:14,228,"$343,281.00","$313,752.00"
MIA - SKB,51054794899,MIA-ANU-SXM 6 S,A319-100,https://www.airlines-manager.com/network/showline/47559665,https://www.airlines-manager.com/network/showflight/51054794899,https://www.airlines-manager.com/aircraft/show/110114300,6:45,13:44,228,"$343,281.00","$313,752.00"
MIA - SKB,51066574494,MIA-ANU-SXM 5 S,A319-100,https://www.airlines-manager.com/network/showline/47559665,https://www.airlines-manager.com/network/showflight/51066574494,https://www.airlines-manager.com/aircraft/show/110114299,14:00,20:59,228,"$343,281.00","$313,752.00"
MIA - SKB,51082169846,MIA-ANU-SXM 3 S,A319-100,https://www.airlines-manager.com/network/showline/47559665,https://www.airlines-manager.com/network/showflight/51082169846,https://www.airlines-manager.com/aircraft/show/110114297,21:00,3:59,228,"$343,281.00","$313,752.00"
MIA - SLC,51043595282,MIA-SJU-BOS 2,A321-200,https://www.airlines-manager.com/network/showline/42307240,https://www.airlines-manager.com/network/showflight/51043595282,https://www.airlines-manager.com/aircraft/show/91352062,0:00,10:14,310,"$640,084.00","$582,498.00"
MIA - SLC,51043595283,MIA-SJU-BOS 4,A321-200,https://www.airlines-manager.com/network/showline/42307240,https://www.airlines-manager.com/network/showflight/51043595283,https://www.airlines-manager.com/aircraft/show/91352060,1:00,11:14,310,"$640,084.00","$582,498.00"
MIA - SLC,51043595284,MIA-SJU-BOS 3,A321-200,https://www.airlines-manager.com/network/showline/42307240,https://www.airlines-manager.com/network/showflight/51043595284,https://www.airlines-manager.com/aircraft/show/91352061,2:00,12:14,310,"$640,084.00","$582,498.00"
MIA - SLC,51054795038,MIA-SJU-BOS 5,A321-200,https://www.airlines-manager.com/network/showline/42307240,https://www.airlines-manager.com/network/showflight/51054795038,https://www.airlines-manager.com/aircraft/show/91352059,9:00,19:14,310,"$640,084.00","$582,498.00"
MIA - SLC,51054795039,MIA-SJU-BOS 6 B,A319-100,https://www.airlines-manager.com/network/showline/42307240,https://www.airlines-manager.com/network/showflight/51054795039,https://www.airlines-manager.com/aircraft/show/110582841,10:00,20:14,198,"$481,136.00","$434,977.00"
MIA - SLC,51060918976,MIA-SJU-BOS 1,A321-200,https://www.airlines-manager.com/network/showline/42307240,https://www.airlines-manager.com/network/showflight/51060918976,https://www.airlines-manager.com/aircraft/show/91352063,12:00,22:14,310,"$640,084.00","$582,498.00"
MIA - SMF,51043595440,MIA-OAK-SMF 2,737-900ER,https://www.airlines-manager.com/network/showline/46079200,https://www.airlines-manager.com/network/showflight/51043595440,https://www.airlines-manager.com/aircraft/show/91198619,1:00,12:59,320,"$730,283.00","$666,251.00"
MIA - SMF,51043595441,MIA-OAK-SMF 3,737-900ER,https://www.airlines-manager.com/network/showline/46079200,https://www.airlines-manager.com/network/showflight/51043595441,https://www.airlines-manager.com/aircraft/show/91198616,3:00,14:59,320,"$730,283.00","$666,251.00"
MIA - SMF,51060918919,MIA-OAK-SMF 4,737-900ER,https://www.airlines-manager.com/network/showline/46079200,https://www.airlines-manager.com/network/showflight/51060918919,https://www.airlines-manager.com/aircraft/show/91198618,11:00,22:59,320,"$730,283.00","$666,251.00"
MIA - SMF,51066574432,MIA-OAK-SMF 5,737-900ER,https://www.airlines-manager.com/network/showline/46079200,https://www.airlines-manager.com/network/showflight/51066574432,https://www.airlines-manager.com/aircraft/show/91198617,13:00,0:59,320,"$730,283.00","$666,251.00"
MIA - SMF,51086541018,MIA-OAK-SMF 1,737-900ER,https://www.airlines-manager.com/network/showline/46079200,https://www.airlines-manager.com/network/showflight/51086541018,https://www.airlines-manager.com/aircraft/show/91198615,23:00,10:59,320,"$730,283.00","$666,251.00"
MIA - STL,51043595515,MIA-ELP-MCI 1,737-900ER,https://www.airlines-manager.com/network/showline/46040769,https://www.airlines-manager.com/network/showflight/51043595515,https://www.airlines-manager.com/aircraft/show/91806234,1:30,7:44,320,"$390,675.00","$347,102.00"
MIA - STL,51043595516,MIA-ELP-MCI 5 B,A319-100,https://www.airlines-manager.com/network/showline/46040769,https://www.airlines-manager.com/network/showflight/51043595516,https://www.airlines-manager.com/aircraft/show/105093924,2:00,8:14,198,"$295,684.00","$264,925.00"
MIA - STL,51043595517,MIA CARGO 2,737-700,https://www.airlines-manager.com/network/showline/46040769,https://www.airlines-manager.com/network/showflight/51043595517,https://www.airlines-manager.com/aircraft/show/107527976,3:15,9:29,0,"$102,366.00","$75,025.00"
MIA - STL,51054795008,MIA-ELP-MCI 4,737-900ER,https://www.airlines-manager.com/network/showline/46040769,https://www.airlines-manager.com/network/showflight/51054795008,https://www.airlines-manager.com/aircraft/show/91806231,8:30,14:44,320,"$390,675.00","$347,102.00"
MIA - STL,51054795009,MIA-ELP-MCI 3,737-900ER,https://www.airlines-manager.com/network/showline/46040769,https://www.airlines-manager.com/network/showflight/51054795009,https://www.airlines-manager.com/aircraft/show/91806232,10:00,16:14,320,"$390,675.00","$347,102.00"
MIA - STL,51071689670,MIA-ELP-MCI 2,737-900ER,https://www.airlines-manager.com/network/showline/46040769,https://www.airlines-manager.com/network/showflight/51071689670,https://www.airlines-manager.com/aircraft/show/91806235,17:00,23:14,320,"$390,675.00","$347,102.00"
MIA - SXM,51054794898,MIA-ANU-SXM 5 S,A319-100,https://www.airlines-manager.com/network/showline/47559751,https://www.airlines-manager.com/network/showflight/51054794898,https://www.airlines-manager.com/aircraft/show/110114299,6:45,13:44,228,"$332,916.00","$304,110.00"
MIA - SXM,51066574495,MIA-ANU-SXM 3 S,A319-100,https://www.airlines-manager.com/network/showline/47559751,https://www.airlines-manager.com/network/showflight/51066574495,https://www.airlines-manager.com/aircraft/show/110114297,14:00,20:59,228,"$332,916.00","$304,110.00"
MIA - SXM,51071689633,MIA-ANU-SXM 4 S,A319-100,https://www.airlines-manager.com/network/showline/47559751,https://www.airlines-manager.com/network/showflight/51071689633,https://www.airlines-manager.com/aircraft/show/110114298,16:00,22:59,228,"$332,916.00","$304,110.00"
MIA - SXM,51077491526,MIA-ANU-SXM 1 S,A319-100,https://www.airlines-manager.com/network/showline/47559751,https://www.airlines-manager.com/network/showflight/51077491526,https://www.airlines-manager.com/aircraft/show/110114295,19:15,2:14,228,"$332,916.00","$304,110.00"
MIA - SXM,51082169784,MIA-ANU-SXM 2 S,A319-100,https://www.airlines-manager.com/network/showline/47559751,https://www.airlines-manager.com/network/showflight/51082169784,https://www.airlines-manager.com/aircraft/show/110114296,20:15,3:14,228,"$332,916.00","$304,110.00"
MIA - SXM,51086541059,MIA-ANU-SXM 6 S,A319-100,https://www.airlines-manager.com/network/showline/47559751,https://www.airlines-manager.com/network/showflight/51086541059,https://www.airlines-manager.com/aircraft/show/110114300,23:45,6:44,228,"$332,916.00","$304,110.00"
MIA - TPA,51043595787,MIA-BUR-PVD 1,A321-200,https://www.airlines-manager.com/network/showline/47218374,https://www.airlines-manager.com/network/showflight/51043595787,https://www.airlines-manager.com/aircraft/show/108834803,5:00,7:59,310,"$127,494.00","$101,478.00"
MIA - TPA,51060918880,MIA-BUR-PVD 3,A321-200,https://www.airlines-manager.com/network/showline/47218374,https://www.airlines-manager.com/network/showflight/51060918880,https://www.airlines-manager.com/aircraft/show/108834805,11:00,13:59,310,"$127,494.00","$101,478.00"
MIA - TPA,51071689675,MIA-BUR-PVD 5 B,A319-100,https://www.airlines-manager.com/network/showline/47218374,https://www.airlines-manager.com/network/showflight/51071689675,https://www.airlines-manager.com/aircraft/show/108834807,17:00,19:59,198,"$95,117.00","$74,296.00"
MIA - TPA,51077491375,MIA-BUR-PVD 2,A321-200,https://www.airlines-manager.com/network/showline/47218374,https://www.airlines-manager.com/network/showflight/51077491375,https://www.airlines-manager.com/aircraft/show/108834804,17:45,20:44,310,"$127,494.00","$101,478.00"
MIA - TPA,51086541057,MIA-BUR-PVD 4,A321-200,https://www.airlines-manager.com/network/showline/47218374,https://www.airlines-manager.com/network/showflight/51086541057,https://www.airlines-manager.com/aircraft/show/108834806,23:45,2:44,310,"$127,494.00","$101,478.00"
MIA - TUL,51043595411,MIA-FAR-TUL 2,737-900ER,https://www.airlines-manager.com/network/showline/47780432,https://www.airlines-manager.com/network/showflight/51043595411,https://www.airlines-manager.com/aircraft/show/110883160,0:45,7:29,320,"$415,238.00","$373,797.00"
MIA - TUL,51043595412,MIA-FAR-TUL 5,ERJ-175,https://www.airlines-manager.com/network/showline/47780432,https://www.airlines-manager.com/network/showflight/51043595412,https://www.airlines-manager.com/aircraft/show/87169421,3:00,9:44,112,"$195,935.00","$171,811.00"
MIA - TUL,51060918869,MIA-FAR-TUL 3,737-900ER,https://www.airlines-manager.com/network/showline/47780432,https://www.airlines-manager.com/network/showflight/51060918869,https://www.airlines-manager.com/aircraft/show/110883161,11:00,17:44,320,"$415,238.00","$373,797.00"
MIA - TUL,51071689595,MIA-FAR-TUL 4,737-900ER,https://www.airlines-manager.com/network/showline/47780432,https://www.airlines-manager.com/network/showflight/51071689595,https://www.airlines-manager.com/aircraft/show/110883162,16:00,22:44,320,"$415,238.00","$373,797.00"
MIA - TUL,51077491556,MIA-FAR-TUL 1,737-900ER,https://www.airlines-manager.com/network/showline/47780432,https://www.airlines-manager.com/network/showflight/51077491556,https://www.airlines-manager.com/aircraft/show/110883159,19:45,2:29,320,"$415,238.00","$373,797.00"
MIA - TUS,51043595377,MIA-IAD-TUS 3,A321-200,https://www.airlines-manager.com/network/showline/44372840,https://www.airlines-manager.com/network/showflight/51043595377,https://www.airlines-manager.com/aircraft/show/97556719,0:30,9:59,310,"$590,299.00","$541,694.00"
MIA - TUS,51054795098,MIA-IAD-TUS 2,A321-200,https://www.airlines-manager.com/network/showline/44372840,https://www.airlines-manager.com/network/showflight/51054795098,https://www.airlines-manager.com/aircraft/show/97556720,10:00,19:29,310,"$590,299.00","$541,694.00"
MIA - TUS,51066574304,MIA-IAD-TUS 5,A321-200,https://www.airlines-manager.com/network/showline/44372840,https://www.airlines-manager.com/network/showflight/51066574304,https://www.airlines-manager.com/aircraft/show/97556716,13:00,22:29,310,"$590,299.00","$541,694.00"
MIA - TUS,51071689576,MIA-IAD-TUS 1,A321-200,https://www.airlines-manager.com/network/showline/44372840,https://www.airlines-manager.com/network/showflight/51071689576,https://www.airlines-manager.com/aircraft/show/97556721,15:45,1:14,310,"$590,299.00","$541,694.00"
MIA - TUS,51077491480,MIA-IAD-TUS 4,A321-200,https://www.airlines-manager.com/network/showline/44372840,https://www.airlines-manager.com/network/showflight/51077491480,https://www.airlines-manager.com/aircraft/show/97556718,18:45,4:14,310,"$590,299.00","$541,694.00"
MIA - YUL,51043595818,MIA-YVR-YUL-2,757-300,https://www.airlines-manager.com/network/showline/48487803,https://www.airlines-manager.com/network/showflight/51043595818,https://www.airlines-manager.com/aircraft/show/113101225,6:30,13:59,400,"$628,064.00","$573,757.00"
MIA - YUL,51060918865,MIA-YVR-YUL-3,757-300,https://www.airlines-manager.com/network/showline/48487803,https://www.airlines-manager.com/network/showflight/51060918865,https://www.airlines-manager.com/aircraft/show/113101226,11:00,18:29,400,"$628,064.00","$573,757.00"
MIA - YUL,51071689485,MIA-YVR-YUL-4,757-300,https://www.airlines-manager.com/network/showline/48487803,https://www.airlines-manager.com/network/showflight/51071689485,https://www.airlines-manager.com/aircraft/show/113101227,15:00,22:29,400,"$628,064.00","$573,757.00"
MIA - YUL,51086541053,MIA-YVR-YUL-1,757-300,https://www.airlines-manager.com/network/showline/48487803,https://www.airlines-manager.com/network/showflight/51086541053,https://www.airlines-manager.com/aircraft/show/113101224,23:45,7:14,400,"$628,064.00","$573,757.00"
MIA - YVR,51060918866,MIA-YVR-YUL-1,757-300,https://www.airlines-manager.com/network/showline/48487816,https://www.airlines-manager.com/network/showflight/51060918866,https://www.airlines-manager.com/aircraft/show/113101224,11:00,23:44,400,"$1,044,111.00","$959,465.00"
MIA - YVR,51066574480,MIA-YVR-YUL-2,757-300,https://www.airlines-manager.com/network/showline/48487816,https://www.airlines-manager.com/network/showflight/51066574480,https://www.airlines-manager.com/aircraft/show/113101225,14:00,2:44,400,"$1,044,111.00","$959,465.00"
MIA - YVR,51077491461,MIA-YVR-YUL-3,757-300,https://www.airlines-manager.com/network/showline/48487816,https://www.airlines-manager.com/network/showflight/51077491461,https://www.airlines-manager.com/aircraft/show/113101226,18:30,7:14,400,"$1,044,111.00","$959,465.00"
MIA - YVR,51086540972,MIA-YVR-YUL-4,757-300,https://www.airlines-manager.com/network/showline/48487816,https://www.airlines-manager.com/network/showflight/51086540972,https://www.airlines-manager.com/aircraft/show/113101227,22:30,11:14,400,"$1,044,111.00","$959,465.00"
MIA - YYC,51043595261,MIA-SJC-YYC 1,737-900ER,https://www.airlines-manager.com/network/showline/46936719,https://www.airlines-manager.com/network/showflight/51043595261,https://www.airlines-manager.com/aircraft/show/107763569,0:00,11:44,320,"$728,799.00","$660,203.00"
MIA - YYC,51043595262,MIA-SJC-YYC 2,737-900ER,https://www.airlines-manager.com/network/showline/46936719,https://www.airlines-manager.com/network/showflight/51043595262,https://www.airlines-manager.com/aircraft/show/107763568,2:00,13:44,320,"$728,799.00","$660,203.00"
MIA - YYC,51043595263,MIA-SJC-YYC 3,737-900ER,https://www.airlines-manager.com/network/showline/46936719,https://www.airlines-manager.com/network/showflight/51043595263,https://www.airlines-manager.com/aircraft/show/107763567,4:00,15:44,320,"$728,799.00","$660,203.00"
MIA - YYC,51060918973,MIA-SJC-YYC 4,737-900ER,https://www.airlines-manager.com/network/showline/46936719,https://www.airlines-manager.com/network/showflight/51060918973,https://www.airlines-manager.com/aircraft/show/107763564,12:00,23:44,320,"$728,799.00","$660,203.00"
MIA - YYC,51066574499,MIA-SJC-YYC 5,737-900ER,https://www.airlines-manager.com/network/showline/46936719,https://www.airlines-manager.com/network/showflight/51066574499,https://www.airlines-manager.com/aircraft/show/107763563,14:00,1:44,320,"$728,799.00","$660,203.00"
MIA - YYZ,51043595641,MIA-BWI-YYZ 3,A321-200,https://www.airlines-manager.com/network/showline/42608081,https://www.airlines-manager.com/network/showflight/51043595641,https://www.airlines-manager.com/aircraft/show/92153441,2:45,9:44,310,"$440,671.00","$393,931.00"
MIA - YYZ,51043595642,MIA-BWI-YYZ 6 S,ERJ-175,https://www.airlines-manager.com/network/showline/42608081,https://www.airlines-manager.com/network/showflight/51043595642,https://www.airlines-manager.com/aircraft/show/92137503,4:45,11:44,136,"$190,936.00","$163,078.00"
MIA - YYZ,51054795106,MIA-BWI-YYZ 4,A321-200,https://www.airlines-manager.com/network/showline/42608081,https://www.airlines-manager.com/network/showflight/51054795106,https://www.airlines-manager.com/aircraft/show/92153442,10:00,16:59,310,"$440,671.00","$393,931.00"
MIA - YYZ,51060918968,MIA-BWI-YYZ 5,A321-200,https://www.airlines-manager.com/network/showline/42608081,https://www.airlines-manager.com/network/showflight/51060918968,https://www.airlines-manager.com/aircraft/show/92153439,12:00,18:59,310,"$440,671.00","$393,931.00"
MIA - YYZ,51071689583,MIA-BWI-YYZ 1,A321-200,https://www.airlines-manager.com/network/showline/42608081,https://www.airlines-manager.com/network/showflight/51071689583,https://www.airlines-manager.com/aircraft/show/92153443,15:45,22:44,310,"$440,671.00","$393,931.00"
MIA - YYZ,51077491490,MIA-BWI-YYZ 2,A321-200,https://www.airlines-manager.com/network/showline/42608081,https://www.airlines-manager.com/network/showflight/51077491490,https://www.airlines-manager.com/aircraft/show/92153440,18:45,1:44,310,"$440,671.00","$393,931.00"
SFO - ABQ,51054795023,SFO-MCI-OMA 5 B,A319-100,https://www.airlines-manager.com/network/showline/46129446,https://www.airlines-manager.com/network/showflight/51054795023,https://www.airlines-manager.com/aircraft/show/105223003,8:45,14:14,198,"$265,385.00","$237,255.00"
SFO - ABQ,51054795024,SFO-MCI-OMA 1,737-900ER,https://www.airlines-manager.com/network/showline/46129446,https://www.airlines-manager.com/network/showflight/51054795024,https://www.airlines-manager.com/aircraft/show/88239553,8:45,14:14,320,"$349,395.00","$309,344.00"
SFO - ABQ,51060918853,SFO-MCI-OMA 4,737-900ER,https://www.airlines-manager.com/network/showline/46129446,https://www.airlines-manager.com/network/showflight/51060918853,https://www.airlines-manager.com/aircraft/show/88239557,10:30,15:59,320,"$349,395.00","$309,344.00"
SFO - ABQ,51071689514,SFO-MCI-OMA 3,737-900ER,https://www.airlines-manager.com/network/showline/46129446,https://www.airlines-manager.com/network/showflight/51071689514,https://www.airlines-manager.com/aircraft/show/88239555,15:00,20:29,320,"$349,395.00","$309,344.00"
SFO - ABQ,51086540996,SFO-MCI-OMA 2,737-900ER,https://www.airlines-manager.com/network/showline/46129446,https://www.airlines-manager.com/network/showflight/51086540996,https://www.airlines-manager.com/aircraft/show/88239554,22:45,4:14,320,"$349,395.00","$309,344.00"
SFO - ALB,51043595375,SFO-ALB-CAK 3,A321-200,https://www.airlines-manager.com/network/showline/48344109,https://www.airlines-manager.com/network/showflight/51043595375,https://www.airlines-manager.com/aircraft/show/112650097,0:30,12:29,310,"$733,570.00","$677,406.00"
SFO - ALB,51043595376,SFO-ALB-CAK 4,A321-200,https://www.airlines-manager.com/network/showline/48344109,https://www.airlines-manager.com/network/showflight/51043595376,https://www.airlines-manager.com/aircraft/show/112650096,5:30,17:29,310,"$733,570.00","$677,406.00"
SFO - ALB,51054794944,SFO-ALB-CAK 5 B,A319-100,https://www.airlines-manager.com/network/showline/48344109,https://www.airlines-manager.com/network/showflight/51054794944,https://www.airlines-manager.com/aircraft/show/112650090,7:30,19:29,198,"$548,816.00","$503,775.00"
SFO - ALB,51066574483,SFO-ALB-CAK 1,A321-200,https://www.airlines-manager.com/network/showline/48344109,https://www.airlines-manager.com/network/showflight/51066574483,https://www.airlines-manager.com/aircraft/show/112650099,14:00,1:59,310,"$733,570.00","$677,406.00"
SFO - ALB,51077491406,SFO-ALB-CAK 2,A321-200,https://www.airlines-manager.com/network/showline/48344109,https://www.airlines-manager.com/network/showflight/51077491406,https://www.airlines-manager.com/aircraft/show/112650098,18:00,5:59,310,"$733,570.00","$677,406.00"
SFO - ANC,51043595633,SFO-BWI-ANC 4,A321neo,https://www.airlines-manager.com/network/showline/43539143,https://www.airlines-manager.com/network/showflight/51043595633,https://www.airlines-manager.com/aircraft/show/106255848,2:30,12:14,338,"$661,700.00","$613,656.00"
SFO - ANC,51043595634,SFO-BWI-ANC 5,A321neo,https://www.airlines-manager.com/network/showline/43539143,https://www.airlines-manager.com/network/showflight/51043595634,https://www.airlines-manager.com/aircraft/show/106255849,3:30,13:14,338,"$661,700.00","$613,656.00"
SFO - ANC,51077491511,SFO-BWI-ANC 1,A321neo,https://www.airlines-manager.com/network/showline/43539143,https://www.airlines-manager.com/network/showflight/51077491511,https://www.airlines-manager.com/aircraft/show/106255845,19:00,4:44,338,"$661,700.00","$613,656.00"
SFO - ANC,51077491512,SFO-BWI-ANC 2,A321neo,https://www.airlines-manager.com/network/showline/43539143,https://www.airlines-manager.com/network/showflight/51077491512,https://www.airlines-manager.com/aircraft/show/106255846,20:00,5:44,338,"$661,700.00","$613,656.00"
SFO - ANC,51082169854,SFO-BWI-ANC 3,A321neo,https://www.airlines-manager.com/network/showline/43539143,https://www.airlines-manager.com/network/showflight/51082169854,https://www.airlines-manager.com/aircraft/show/106255847,21:00,6:44,338,"$661,700.00","$613,656.00"
SFO - ATL,51054794897,SFO 84A-5 E1,777-300,https://www.airlines-manager.com/network/showline/40852416,https://www.airlines-manager.com/network/showflight/51054794897,https://www.airlines-manager.com/aircraft/show/85537213,6:45,16:29,932,"$1,615,354.00","$1,419,086.00"
SFO - ATL,51071689501,SFO-ATL-DFW S,A321-200,https://www.airlines-manager.com/network/showline/40852416,https://www.airlines-manager.com/network/showflight/51071689501,https://www.airlines-manager.com/aircraft/show/106766698,15:00,1:29,232,"$627,976.00","$547,236.00"
SFO - ATL,51077491474,SFO 84A-1 E1,777-300,https://www.airlines-manager.com/network/showline/40852416,https://www.airlines-manager.com/network/showflight/51077491474,https://www.airlines-manager.com/aircraft/show/86776212,18:30,4:14,856,"$1,521,418.00","$1,330,632.00"
SFO - ATL,51077491475,SFO-ATL-CLE,ERJ-175,https://www.airlines-manager.com/network/showline/40852416,https://www.airlines-manager.com/network/showflight/51077491475,https://www.airlines-manager.com/aircraft/show/107467212,20:00,6:29,56,"$233,091.00","$185,826.00"
SFO - AUS,51043595413,SFO-OGG-AUS 1,A321-200,https://www.airlines-manager.com/network/showline/45270795,https://www.airlines-manager.com/network/showflight/51043595413,https://www.airlines-manager.com/aircraft/show/92773481,0:45,8:44,310,"$500,252.00","$455,999.00"
SFO - AUS,51043595414,SFO-OGG-AUS 2,A321-200,https://www.airlines-manager.com/network/showline/45270795,https://www.airlines-manager.com/network/showflight/51043595414,https://www.airlines-manager.com/aircraft/show/92773480,2:45,10:44,310,"$500,252.00","$455,999.00"
SFO - AUS,51066574468,SFO-OGG-AUS 3,A321-200,https://www.airlines-manager.com/network/showline/45270795,https://www.airlines-manager.com/network/showflight/51066574468,https://www.airlines-manager.com/aircraft/show/92773479,13:30,21:29,310,"$500,252.00","$455,999.00"
SFO - AUS,51071689563,SFO-OGG-AUS 4,A321-200,https://www.airlines-manager.com/network/showline/45270795,https://www.airlines-manager.com/network/showflight/51071689563,https://www.airlines-manager.com/aircraft/show/92773478,15:30,23:29,310,"$500,252.00","$455,999.00"
SFO - AUS,51077491472,SFO-OGG-AUS 5,A321-200,https://www.airlines-manager.com/network/showline/45270795,https://www.airlines-manager.com/network/showflight/51077491472,https://www.airlines-manager.com/aircraft/show/92773477,18:30,2:29,310,"$500,252.00","$455,999.00"
SFO - BDL,51043595782,SFO-RSW-BDL 1,737-900ER,https://www.airlines-manager.com/network/showline/47540540,https://www.airlines-manager.com/network/showflight/51043595782,https://www.airlines-manager.com/aircraft/show/84915098,4:45,16:59,320,"$740,444.00","$676,326.00"
SFO - BDL,51054794900,SFO-RSW-BDL 2,737-900ER,https://www.airlines-manager.com/network/showline/47540540,https://www.airlines-manager.com/network/showflight/51054794900,https://www.airlines-manager.com/aircraft/show/84915099,6:45,18:59,320,"$740,444.00","$676,326.00"
SFO - BDL,51054794901,SFO-RSW-BDL 5,737-900ER,https://www.airlines-manager.com/network/showline/47540540,https://www.airlines-manager.com/network/showflight/51054794901,https://www.airlines-manager.com/aircraft/show/84915102,8:45,20:59,320,"$740,444.00","$676,326.00"
SFO - BDL,51071689688,SFO-RSW-BDL 3,737-900ER,https://www.airlines-manager.com/network/showline/47540540,https://www.airlines-manager.com/network/showflight/51071689688,https://www.airlines-manager.com/aircraft/show/84915100,17:00,5:14,320,"$740,444.00","$676,326.00"
SFO - BDL,51077491504,SFO-RSW-BDL 4,737-900ER,https://www.airlines-manager.com/network/showline/47540540,https://www.airlines-manager.com/network/showflight/51077491504,https://www.airlines-manager.com/aircraft/show/84915101,19:00,7:14,320,"$740,444.00","$676,326.00"
SFO - BNA,51043595503,SFO-BNA-CMH 4,737-900ER,https://www.airlines-manager.com/network/showline/45364406,https://www.airlines-manager.com/network/showflight/51043595503,https://www.airlines-manager.com/aircraft/show/103365580,1:15,10:59,320,"$604,687.00","$548,410.00"
SFO - BNA,51043595504,SFO-BNA-CMH 6,ERJ-175,https://www.airlines-manager.com/network/showline/45364406,https://www.airlines-manager.com/network/showflight/51043595504,https://www.airlines-manager.com/aircraft/show/82323681,6:00,15:44,112,"$284,635.00","$250,775.00"
SFO - BNA,51066574290,SFO-BNA-CMH 1,737-900ER,https://www.airlines-manager.com/network/showline/45364406,https://www.airlines-manager.com/network/showflight/51066574290,https://www.airlines-manager.com/aircraft/show/103365583,13:00,22:44,320,"$604,687.00","$548,410.00"
SFO - BNA,51071689530,SFO-BNA-CMH 2,737-900ER,https://www.airlines-manager.com/network/showline/45364406,https://www.airlines-manager.com/network/showflight/51071689530,https://www.airlines-manager.com/aircraft/show/103365582,15:00,0:44,320,"$604,687.00","$548,410.00"
SFO - BNA,51071689531,SFO-BNA-CMH 5,737-900ER,https://www.airlines-manager.com/network/showline/45364406,https://www.airlines-manager.com/network/showflight/51071689531,https://www.airlines-manager.com/aircraft/show/103365579,15:45,1:29,320,"$604,687.00","$548,410.00"
SFO - BNA,51086541039,SFO-BNA-CMH 3,737-900ER,https://www.airlines-manager.com/network/showline/45364406,https://www.airlines-manager.com/network/showflight/51086541039,https://www.airlines-manager.com/aircraft/show/103365581,23:15,8:59,320,"$604,687.00","$548,410.00"
SFO - BOI,51043595490,SFO-CLE-MKE 2,737-900ER,https://www.airlines-manager.com/network/showline/45950031,https://www.airlines-manager.com/network/showflight/51043595490,https://www.airlines-manager.com/aircraft/show/92519369,1:15,5:29,320,"$242,870.00","$212,135.00"
SFO - BOI,51043595491,SFO-CLE-MKE 5,737-900ER,https://www.airlines-manager.com/network/showline/45950031,https://www.airlines-manager.com/network/showflight/51043595491,https://www.airlines-manager.com/aircraft/show/92519370,3:15,7:29,320,"$242,870.00","$212,135.00"
SFO - BOI,51054795058,SFO-CLE-MKE 1,737-900ER,https://www.airlines-manager.com/network/showline/45950031,https://www.airlines-manager.com/network/showflight/51054795058,https://www.airlines-manager.com/aircraft/show/92519368,9:45,13:59,320,"$242,870.00","$212,135.00"
SFO - BOI,51066574634,SFO-CLE-MKE 4,737-900ER,https://www.airlines-manager.com/network/showline/45950031,https://www.airlines-manager.com/network/showflight/51066574634,https://www.airlines-manager.com/aircraft/show/92519371,14:45,18:59,320,"$242,870.00","$212,135.00"
SFO - BOI,51071689605,SFO-CLE-MKE 3,737-900ER,https://www.airlines-manager.com/network/showline/45950031,https://www.airlines-manager.com/network/showflight/51071689605,https://www.airlines-manager.com/aircraft/show/92519367,16:00,20:14,140,"$159,870.00","$131,664.00"
SFO - BOS,51043595348,SFO-BOS-PHX 5,A321neo,https://www.airlines-manager.com/network/showline/40229885,https://www.airlines-manager.com/network/showflight/51043595348,https://www.airlines-manager.com/aircraft/show/104864961,0:15,12:44,338,"$836,431.00","$773,074.00"
SFO - BOS,51060918978,SFO CARGO 2,737-700,https://www.airlines-manager.com/network/showline/40229885,https://www.airlines-manager.com/network/showflight/51060918978,https://www.airlines-manager.com/aircraft/show/107573128,12:00,0:29,0,"$211,523.00","$160,620.00"
SFO - BOS,51066574437,SFO-BOS-PHX 1,A321neo,https://www.airlines-manager.com/network/showline/40229885,https://www.airlines-manager.com/network/showflight/51066574437,https://www.airlines-manager.com/aircraft/show/104901564,13:00,1:29,338,"$836,431.00","$773,074.00"
SFO - BOS,51066574438,SFO-BOS-PHX 4,A321neo,https://www.airlines-manager.com/network/showline/40229885,https://www.airlines-manager.com/network/showflight/51066574438,https://www.airlines-manager.com/aircraft/show/104870960,14:00,2:29,338,"$836,431.00","$773,074.00"
SFO - BOS,51071689578,SFO-BOS-PHX 3,A321neo,https://www.airlines-manager.com/network/showline/40229885,https://www.airlines-manager.com/network/showflight/51071689578,https://www.airlines-manager.com/aircraft/show/104874465,15:45,4:14,338,"$836,431.00","$773,074.00"
SFO - BOS,51082169782,SFO-BOS-PHX 2,A321neo,https://www.airlines-manager.com/network/showline/40229885,https://www.airlines-manager.com/network/showflight/51082169782,https://www.airlines-manager.com/aircraft/show/104901544,20:15,8:44,338,"$836,431.00","$773,074.00"
SFO - BTV,51043595302,SFO-BTV-LEX 4,A321-200,https://www.airlines-manager.com/network/showline/48344140,https://www.airlines-manager.com/network/showflight/51043595302,https://www.airlines-manager.com/aircraft/show/112650092,0:00,11:59,310,"$729,754.00","$673,769.00"
SFO - BTV,51043595303,SFO-BTV-LEX 5 B,A319-100,https://www.airlines-manager.com/network/showline/48344140,https://www.airlines-manager.com/network/showflight/51043595303,https://www.airlines-manager.com/aircraft/show/112650089,6:00,17:59,198,"$546,558.00","$501,659.00"
SFO - BTV,51066574485,SFO-BTV-LEX 1,A321-200,https://www.airlines-manager.com/network/showline/48344140,https://www.airlines-manager.com/network/showflight/51066574485,https://www.airlines-manager.com/aircraft/show/112650095,14:00,1:59,310,"$729,754.00","$673,769.00"
SFO - BTV,51077491430,SFO-BTV-LEX 2,A321-200,https://www.airlines-manager.com/network/showline/48344140,https://www.airlines-manager.com/network/showflight/51077491430,https://www.airlines-manager.com/aircraft/show/112650094,18:00,5:59,310,"$729,754.00","$673,769.00"
SFO - BTV,51077491431,SFO-BTV-LEX 3,A321-200,https://www.airlines-manager.com/network/showline/48344140,https://www.airlines-manager.com/network/showflight/51077491431,https://www.airlines-manager.com/aircraft/show/112650093,20:00,7:59,310,"$729,754.00","$673,769.00"
SFO - BUF,51043595533,SFO-PVD-BUF 1,A321-200,https://www.airlines-manager.com/network/showline/48344051,https://www.airlines-manager.com/network/showflight/51043595533,https://www.airlines-manager.com/aircraft/show/112650108,1:30,12:29,310,"$686,968.00","$633,510.00"
SFO - BUF,51043595534,SFO-PVD-BUF 2,A321-200,https://www.airlines-manager.com/network/showline/48344051,https://www.airlines-manager.com/network/showflight/51043595534,https://www.airlines-manager.com/aircraft/show/112650107,5:30,16:29,310,"$686,968.00","$633,510.00"
SFO - BUF,51054794948,SFO-PVD-BUF 3,A321-200,https://www.airlines-manager.com/network/showline/48344051,https://www.airlines-manager.com/network/showflight/51054794948,https://www.airlines-manager.com/aircraft/show/112650106,7:30,18:29,310,"$686,968.00","$633,510.00"
SFO - BUF,51066574292,SFO-PVD-BUF 4,A321-200,https://www.airlines-manager.com/network/showline/48344051,https://www.airlines-manager.com/network/showflight/51066574292,https://www.airlines-manager.com/aircraft/show/112650105,13:00,23:59,310,"$686,968.00","$633,510.00"
SFO - BUF,51077491403,SFO-PVD-BUF 5,A321-200,https://www.airlines-manager.com/network/showline/48344051,https://www.airlines-manager.com/network/showflight/51077491403,https://www.airlines-manager.com/aircraft/show/112650104,18:00,4:59,310,"$686,968.00","$633,510.00"
SFO - BWI,51043595385,SFO CARGO 2,737-700,https://www.airlines-manager.com/network/showline/40230066,https://www.airlines-manager.com/network/showflight/51043595385,https://www.airlines-manager.com/aircraft/show/107573128,0:30,11:59,0,"$197,154.00","$150,415.00"
SFO - BWI,51043595386,SFO-BWI-ANC 1,A321neo,https://www.airlines-manager.com/network/showline/40230066,https://www.airlines-manager.com/network/showflight/51043595386,https://www.airlines-manager.com/aircraft/show/106255845,4:45,16:14,338,"$783,882.00","$725,499.00"
SFO - BWI,51043595387,SFO-BWI-ANC 2,A321neo,https://www.airlines-manager.com/network/showline/40230066,https://www.airlines-manager.com/network/showflight/51043595387,https://www.airlines-manager.com/aircraft/show/106255846,5:45,17:14,338,"$783,882.00","$725,499.00"
SFO - BWI,51054794882,SFO-BWI-ANC 3,A321neo,https://www.airlines-manager.com/network/showline/40230066,https://www.airlines-manager.com/network/showflight/51054794882,https://www.airlines-manager.com/aircraft/show/106255847,6:45,18:14,338,"$783,882.00","$725,499.00"
SFO - BWI,51071689506,SFO-BWI-ANC 4,A321neo,https://www.airlines-manager.com/network/showline/40230066,https://www.airlines-manager.com/network/showflight/51071689506,https://www.airlines-manager.com/aircraft/show/106255848,15:00,2:29,338,"$783,882.00","$725,499.00"
SFO - BWI,51071689507,SFO-BWI-ANC 5,A321neo,https://www.airlines-manager.com/network/showline/40230066,https://www.airlines-manager.com/network/showflight/51071689507,https://www.airlines-manager.com/aircraft/show/106255849,16:00,3:29,338,"$783,882.00","$725,499.00"
SFO - CAK,51043595581,SFO-ALB-CAK 1,A321-200,https://www.airlines-manager.com/network/showline/48344107,https://www.airlines-manager.com/network/showflight/51043595581,https://www.airlines-manager.com/aircraft/show/112650099,2:00,12:29,310,"$657,790.00","$607,616.00"
SFO - CAK,51043595582,SFO-ALB-CAK 2,A321-200,https://www.airlines-manager.com/network/showline/48344107,https://www.airlines-manager.com/network/showflight/51043595582,https://www.airlines-manager.com/aircraft/show/112650098,6:00,16:29,310,"$657,790.00","$607,616.00"
SFO - CAK,51066574482,SFO-ALB-CAK 3,A321-200,https://www.airlines-manager.com/network/showline/48344107,https://www.airlines-manager.com/network/showflight/51066574482,https://www.airlines-manager.com/aircraft/show/112650097,14:00,0:29,310,"$657,790.00","$607,616.00"
SFO - CAK,51077491508,SFO-ALB-CAK 4,A321-200,https://www.airlines-manager.com/network/showline/48344107,https://www.airlines-manager.com/network/showflight/51077491508,https://www.airlines-manager.com/aircraft/show/112650096,19:00,5:29,310,"$657,790.00","$607,616.00"
SFO - CAK,51082169855,SFO-ALB-CAK 5 B,A319-100,https://www.airlines-manager.com/network/showline/48344107,https://www.airlines-manager.com/network/showflight/51082169855,https://www.airlines-manager.com/aircraft/show/112650090,21:00,7:29,198,"$494,209.00","$453,976.00"
SFO - CLE,51043595800,SFO-CLE-MKE 2,737-900ER,https://www.airlines-manager.com/network/showline/45959453,https://www.airlines-manager.com/network/showflight/51043595800,https://www.airlines-manager.com/aircraft/show/92519369,5:30,15:59,320,"$649,596.00","$591,877.00"
SFO - CLE,51043595801,SFO-ATL-CLE,ERJ-175,https://www.airlines-manager.com/network/showline/45959453,https://www.airlines-manager.com/network/showflight/51043595801,https://www.airlines-manager.com/aircraft/show/107467212,6:30,16:59,112,"$305,361.00","$270,220.00"
SFO - CLE,51054794960,SFO-CLE-MKE 5,737-900ER,https://www.airlines-manager.com/network/showline/45959453,https://www.airlines-manager.com/network/showflight/51054794960,https://www.airlines-manager.com/aircraft/show/92519370,7:30,17:59,320,"$649,596.00","$591,877.00"
SFO - CLE,51066574593,SFO-CLE-MKE 1,737-900ER,https://www.airlines-manager.com/network/showline/45959453,https://www.airlines-manager.com/network/showflight/51066574593,https://www.airlines-manager.com/aircraft/show/92519368,14:00,0:29,320,"$649,596.00","$591,877.00"
SFO - CLE,51077491509,SFO-CLE-MKE 4,737-900ER,https://www.airlines-manager.com/network/showline/45959453,https://www.airlines-manager.com/network/showflight/51077491509,https://www.airlines-manager.com/aircraft/show/92519371,19:00,5:29,320,"$649,596.00","$591,877.00"
SFO - CLE,51082169799,SFO-CLE-MKE 3,737-900ER,https://www.airlines-manager.com/network/showline/45959453,https://www.airlines-manager.com/network/showflight/51082169799,https://www.airlines-manager.com/aircraft/show/92519367,20:15,6:44,320,"$649,596.00","$591,877.00"
SFO - CLT,51043595298,SFO-IAD-CLT 3,757-300,https://www.airlines-manager.com/network/showline/43894395,https://www.airlines-manager.com/network/showflight/51043595298,https://www.airlines-manager.com/aircraft/show/96135563,0:00,10:44,400,"$887,593.00","$807,628.00"
SFO - CLT,51043595299,SFO-IAD-CLT 4,757-300,https://www.airlines-manager.com/network/showline/43894395,https://www.airlines-manager.com/network/showflight/51043595299,https://www.airlines-manager.com/aircraft/show/96135562,6:00,16:44,400,"$887,593.00","$807,628.00"
SFO - CLT,51066574455,SFO-IAD-CLT 1,757-300,https://www.airlines-manager.com/network/showline/43894395,https://www.airlines-manager.com/network/showflight/51066574455,https://www.airlines-manager.com/aircraft/show/96135565,13:15,23:59,400,"$887,593.00","$807,628.00"
SFO - CLT,51071689556,SFO-IAD-CLT 5,757-300,https://www.airlines-manager.com/network/showline/43894395,https://www.airlines-manager.com/network/showflight/51071689556,https://www.airlines-manager.com/aircraft/show/96135561,15:15,1:59,400,"$887,593.00","$807,628.00"
SFO - CLT,51077491301,SFO-IAD-CLT 2,757-300,https://www.airlines-manager.com/network/showline/43894395,https://www.airlines-manager.com/network/showflight/51077491301,https://www.airlines-manager.com/aircraft/show/96135564,17:15,3:59,400,"$887,593.00","$807,628.00"
SFO - CMH,51043595421,SFO-BNA-CMH 2,737-900ER,https://www.airlines-manager.com/network/showline/45364394,https://www.airlines-manager.com/network/showflight/51043595421,https://www.airlines-manager.com/aircraft/show/103365582,0:45,10:59,320,"$634,783.00","$577,486.00"
SFO - CMH,51043595422,SFO-BNA-CMH 5,737-900ER,https://www.airlines-manager.com/network/showline/45364394,https://www.airlines-manager.com/network/showflight/51043595422,https://www.airlines-manager.com/aircraft/show/103365579,5:30,15:44,320,"$634,783.00","$577,486.00"
SFO - CMH,51066574289,SFO-BNA-CMH 3,737-900ER,https://www.airlines-manager.com/network/showline/45364394,https://www.airlines-manager.com/network/showflight/51066574289,https://www.airlines-manager.com/aircraft/show/103365581,13:00,23:14,320,"$634,783.00","$577,486.00"
SFO - CMH,51071689534,SFO-BNA-CMH 4,737-900ER,https://www.airlines-manager.com/network/showline/45364394,https://www.airlines-manager.com/network/showflight/51071689534,https://www.airlines-manager.com/aircraft/show/103365580,15:00,1:14,320,"$634,783.00","$577,486.00"
SFO - CMH,51071689535,SFO-BNA-CMH 6,ERJ-175,https://www.airlines-manager.com/network/showline/45364394,https://www.airlines-manager.com/network/showflight/51071689535,https://www.airlines-manager.com/aircraft/show/82323681,15:45,1:59,112,"$298,947.00","$264,137.00"
SFO - CMH,51086540992,SFO-BNA-CMH 1,737-900ER,https://www.airlines-manager.com/network/showline/45364394,https://www.airlines-manager.com/network/showflight/51086540992,https://www.airlines-manager.com/aircraft/show/103365583,22:45,8:59,320,"$634,783.00","$577,486.00"
SFO - CVG,51043595793,SFO-IND-CVG 3,A321-200,https://www.airlines-manager.com/network/showline/44892288,https://www.airlines-manager.com/network/showflight/51043595793,https://www.airlines-manager.com/aircraft/show/99316504,5:00,14:59,310,"$626,343.00","$573,316.00"
SFO - CVG,51054794907,SFO-IND-CVG 5,A321-200,https://www.airlines-manager.com/network/showline/44892288,https://www.airlines-manager.com/network/showflight/51054794907,https://www.airlines-manager.com/aircraft/show/99316502,7:00,16:59,310,"$626,343.00","$573,316.00"
SFO - CVG,51066574307,SFO-IND-CVG 2,A321-200,https://www.airlines-manager.com/network/showline/44892288,https://www.airlines-manager.com/network/showflight/51066574307,https://www.airlines-manager.com/aircraft/show/99316505,13:00,22:59,310,"$626,343.00","$573,316.00"
SFO - CVG,51071689542,SFO-IND-CVG 4,A321-200,https://www.airlines-manager.com/network/showline/44892288,https://www.airlines-manager.com/network/showflight/51071689542,https://www.airlines-manager.com/aircraft/show/99316503,15:00,0:59,310,"$626,343.00","$573,316.00"
SFO - CVG,51071689543,SFO-IND-CVG 6,ERJ-175,https://www.airlines-manager.com/network/showline/44892288,https://www.airlines-manager.com/network/showflight/51071689543,https://www.airlines-manager.com/aircraft/show/99174346,17:00,2:59,112,"$293,737.00","$258,374.00"
SFO - CVG,51086540981,SFO-IND-CVG 1,A321-200,https://www.airlines-manager.com/network/showline/44892288,https://www.airlines-manager.com/network/showflight/51086540981,https://www.airlines-manager.com/aircraft/show/99316506,22:45,8:44,310,"$626,343.00","$573,316.00"
SFO - DEL,51043595326,SFO 168B-7 B,747-400,https://www.airlines-manager.com/network/showline/41242837,https://www.airlines-manager.com/network/showflight/51043595326,https://www.airlines-manager.com/aircraft/show/86823556,0:00,5:29,1046,"$5,770,663.00","$5,352,094.00"
SFO - DEL,51043595327,SFO 168A-7 B,747-400,https://www.airlines-manager.com/network/showline/41242837,https://www.airlines-manager.com/network/showflight/51043595327,https://www.airlines-manager.com/aircraft/show/88032835,2:00,7:29,1046,"$5,770,663.00","$5,352,094.00"
SFO - DEN,51043595359,SFO-IAH-MEX 5,757-300,https://www.airlines-manager.com/network/showline/40738405,https://www.airlines-manager.com/network/showflight/51043595359,https://www.airlines-manager.com/aircraft/show/101045335,0:15,5:59,400,"$472,585.00","$404,621.00"
SFO - DEN,51043595360,SFO-IAH-MEX 1,757-300,https://www.airlines-manager.com/network/showline/40738405,https://www.airlines-manager.com/network/showflight/51043595360,https://www.airlines-manager.com/aircraft/show/101045339,6:30,12:14,400,"$472,585.00","$404,621.00"
SFO - DEN,51054795015,SFO-IAH-MEX 4,757-300,https://www.airlines-manager.com/network/showline/40738405,https://www.airlines-manager.com/network/showflight/51054795015,https://www.airlines-manager.com/aircraft/show/101045336,8:30,14:14,400,"$472,585.00","$404,621.00"
SFO - DEN,51066574301,SFO-IAH-MEX 3,757-300,https://www.airlines-manager.com/network/showline/40738405,https://www.airlines-manager.com/network/showflight/51066574301,https://www.airlines-manager.com/aircraft/show/101045337,13:00,18:44,400,"$472,585.00","$404,621.00"
SFO - DEN,51082169942,SFO-IAH-MEX 2,757-300,https://www.airlines-manager.com/network/showline/40738405,https://www.airlines-manager.com/network/showflight/51082169942,https://www.airlines-manager.com/aircraft/show/101045338,22:15,3:59,378,"$457,276.00","$389,863.00"
SFO - DFW,51043595512,SFO-ATL-DFW S,A321-200,https://www.airlines-manager.com/network/showline/40852421,https://www.airlines-manager.com/network/showflight/51043595512,https://www.airlines-manager.com/aircraft/show/106766698,1:30,9:14,232,"$480,391.00","$419,158.00"
SFO - DFW,51071689643,SFO 84A-5 E1,777-300,https://www.airlines-manager.com/network/showline/40852421,https://www.airlines-manager.com/network/showflight/51071689643,https://www.airlines-manager.com/aircraft/show/85537213,16:30,23:59,932,"$1,226,561.00","$1,081,466.00"
SFO - DFW,51086541040,SFO 84A-4 E1,777-300,https://www.airlines-manager.com/network/showline/40852421,https://www.airlines-manager.com/network/showflight/51086541040,https://www.airlines-manager.com/aircraft/show/86776213,23:15,6:44,739,"$1,046,711.00","$911,149.00"
SFO - DSM,51043595775,SFO-TUL-DSM 3,737-900ER,https://www.airlines-manager.com/network/showline/47065667,https://www.airlines-manager.com/network/showflight/51043595775,https://www.airlines-manager.com/aircraft/show/108410858,4:30,12:29,320,"$505,714.00","$459,876.00"
SFO - DSM,51066574336,SFO-TUL-DSM 2,737-900ER,https://www.airlines-manager.com/network/showline/47065667,https://www.airlines-manager.com/network/showflight/51066574336,https://www.airlines-manager.com/aircraft/show/108410857,13:00,20:59,320,"$505,714.00","$459,876.00"
SFO - DSM,51071689490,SFO-TUL-DSM,ERJ-175,https://www.airlines-manager.com/network/showline/47065667,https://www.airlines-manager.com/network/showflight/51071689490,https://www.airlines-manager.com/aircraft/show/108466264,15:00,23:14,112,"$239,606.00","$212,185.00"
SFO - DSM,51086541002,SFO-TUL-DSM 1,737-900ER,https://www.airlines-manager.com/network/showline/47065667,https://www.airlines-manager.com/network/showflight/51086541002,https://www.airlines-manager.com/aircraft/show/108410856,22:45,6:44,320,"$505,714.00","$459,876.00"
SFO - DSM,51086541003,SFO-TUL-DSM 4,737-900ER,https://www.airlines-manager.com/network/showline/47065667,https://www.airlines-manager.com/network/showflight/51086541003,https://www.airlines-manager.com/aircraft/show/108410859,23:30,7:29,320,"$505,714.00","$459,876.00"
SFO - DTW,51043595770,SFO-ORD-DTW 4,757-300,https://www.airlines-manager.com/network/showline/42739130,https://www.airlines-manager.com/network/showflight/51043595770,https://www.airlines-manager.com/aircraft/show/101045331,4:30,14:29,400,"$818,049.00","$742,926.00"
SFO - DTW,51043595771,SFO-ORD-DTW 3,757-300,https://www.airlines-manager.com/network/showline/42739130,https://www.airlines-manager.com/network/showflight/51043595771,https://www.airlines-manager.com/aircraft/show/101045332,5:00,14:59,400,"$818,049.00","$742,926.00"
SFO - DTW,51071689538,SFO-ORD-DTW 2,757-300,https://www.airlines-manager.com/network/showline/42739130,https://www.airlines-manager.com/network/showflight/51071689538,https://www.airlines-manager.com/aircraft/show/101045333,15:00,0:59,400,"$818,049.00","$742,926.00"
SFO - DTW,51071689539,SFO-ORD-DTW 5,757-300,https://www.airlines-manager.com/network/showline/42739130,https://www.airlines-manager.com/network/showflight/51071689539,https://www.airlines-manager.com/aircraft/show/101045330,17:00,2:59,400,"$818,049.00","$742,926.00"
SFO - DTW,51082169917,SFO-ORD-DTW 1,757-300,https://www.airlines-manager.com/network/showline/42739130,https://www.airlines-manager.com/network/showflight/51082169917,https://www.airlines-manager.com/aircraft/show/101045334,22:00,7:59,400,"$818,049.00","$742,926.00"
SFO - DXB,51043595807,SFO 168B-1 B,747-400,https://www.airlines-manager.com/network/showline/41150917,https://www.airlines-manager.com/network/showflight/51043595807,https://www.airlines-manager.com/aircraft/show/86832727,5:30,12:29,1046,"$5,973,258.00","$5,508,070.00"
SFO - DXB,51054794946,SFO 168A-1 B,747-400,https://www.airlines-manager.com/network/showline/41150917,https://www.airlines-manager.com/network/showflight/51054794946,https://www.airlines-manager.com/aircraft/show/86969602,7:30,14:29,1046,"$5,973,258.00","$5,508,070.00"
SFO - FAT,51043595602,SFO-TUL-DSM 2,737-900ER,https://www.airlines-manager.com/network/showline/47065660,https://www.airlines-manager.com/network/showflight/51043595602,https://www.airlines-manager.com/aircraft/show/108410857,2:00,4:44,320,"$95,249.00","$71,053.00"
SFO - FAT,51060918960,SFO-TUL-DSM 1,737-900ER,https://www.airlines-manager.com/network/showline/47065660,https://www.airlines-manager.com/network/showflight/51060918960,https://www.airlines-manager.com/aircraft/show/108410856,11:45,14:29,320,"$95,249.00","$71,053.00"
SFO - FAT,51066574334,SFO-TUL-DSM 4,737-900ER,https://www.airlines-manager.com/network/showline/47065660,https://www.airlines-manager.com/network/showflight/51066574334,https://www.airlines-manager.com/aircraft/show/108410859,13:00,15:44,320,"$95,249.00","$71,053.00"
SFO - FAT,51077491397,SFO-TUL-DSM 3,737-900ER,https://www.airlines-manager.com/network/showline/47065660,https://www.airlines-manager.com/network/showflight/51077491397,https://www.airlines-manager.com/aircraft/show/108410858,18:00,20:44,320,"$95,249.00","$71,053.00"
SFO - FAT,51086541029,SFO-TUL-DSM,ERJ-175,https://www.airlines-manager.com/network/showline/47065660,https://www.airlines-manager.com/network/showflight/51086541029,https://www.airlines-manager.com/aircraft/show/108466264,23:15,1:59,67,"$33,416.00","$21,165.00"
SFO - FLL,51043595351,SFO-FLL-TPA 2,737-900ER,https://www.airlines-manager.com/network/showline/44448463,https://www.airlines-manager.com/network/showflight/51043595351,https://www.airlines-manager.com/aircraft/show/97955543,0:15,12:14,320,"$735,023.00","$666,995.00"
SFO - FLL,51043595352,SFO-FLL-TPA 4,737-900ER,https://www.airlines-manager.com/network/showline/44448463,https://www.airlines-manager.com/network/showflight/51043595352,https://www.airlines-manager.com/aircraft/show/97955541,4:15,16:14,320,"$735,023.00","$666,995.00"
SFO - FLL,51054794959,SFO-FLL-TPA 6 B,A319-100,https://www.airlines-manager.com/network/showline/44448463,https://www.airlines-manager.com/network/showflight/51054794959,https://www.airlines-manager.com/aircraft/show/97900729,7:30,19:44,198,"$552,865.00","$503,386.00"
SFO - FLL,51066574306,SFO-FLL-TPA 1,737-900ER,https://www.airlines-manager.com/network/showline/44448463,https://www.airlines-manager.com/network/showflight/51066574306,https://www.airlines-manager.com/aircraft/show/97955544,13:00,0:59,320,"$735,023.00","$666,995.00"
SFO - FLL,51071689694,SFO-FLL-TPA 3,737-900ER,https://www.airlines-manager.com/network/showline/44448463,https://www.airlines-manager.com/network/showflight/51071689694,https://www.airlines-manager.com/aircraft/show/97955542,17:00,4:59,320,"$735,023.00","$666,995.00"
SFO - FLL,51077491583,SFO-FLL-TPA 5,737-900ER,https://www.airlines-manager.com/network/showline/44448463,https://www.airlines-manager.com/network/showflight/51077491583,https://www.airlines-manager.com/aircraft/show/97955540,20:00,7:59,320,"$735,023.00","$666,995.00"
SFO - FSD,51043595380,SFO-OKC-FSD 1,737-900ER,https://www.airlines-manager.com/network/showline/46719662,https://www.airlines-manager.com/network/showflight/51043595380,https://www.airlines-manager.com/aircraft/show/107160378,0:30,7:59,320,"$469,452.00","$426,170.00"
SFO - FSD,51043595381,SFO-OKC-FSD 5,ERJ-175,https://www.airlines-manager.com/network/showline/46719662,https://www.airlines-manager.com/network/showflight/51043595381,https://www.airlines-manager.com/aircraft/show/107132310,2:00,9:29,112,"$222,192.00","$196,473.00"
SFO - FSD,51043595382,SFO-OKC-FSD 4,737-900ER,https://www.airlines-manager.com/network/showline/46719662,https://www.airlines-manager.com/network/showflight/51043595382,https://www.airlines-manager.com/aircraft/show/107160381,3:00,10:29,320,"$469,452.00","$426,170.00"
SFO - FSD,51054794975,SFO-OKC-FSD 3,737-900ER,https://www.airlines-manager.com/network/showline/46719662,https://www.airlines-manager.com/network/showflight/51054794975,https://www.airlines-manager.com/aircraft/show/107160380,8:00,15:29,320,"$469,452.00","$426,170.00"
SFO - FSD,51071689617,SFO-OKC-FSD 2,737-900ER,https://www.airlines-manager.com/network/showline/46719662,https://www.airlines-manager.com/network/showflight/51071689617,https://www.airlines-manager.com/aircraft/show/107160379,16:00,23:29,285,"$437,823.00","$395,860.00"
SFO - HKG,51082169877,SFO 168B-5 B,747-400,https://www.airlines-manager.com/network/showline/40783037,https://www.airlines-manager.com/network/showflight/51082169877,https://www.airlines-manager.com/aircraft/show/87933799,21:15,23:59,1046,"$5,246,099.00","$4,847,510.00"
SFO - HKG,51086541025,SFO 168A-5 B,747-400,https://www.airlines-manager.com/network/showline/40783037,https://www.airlines-manager.com/network/showflight/51086541025,https://www.airlines-manager.com/aircraft/show/86808589,23:15,1:59,1046,"$5,246,099.00","$4,847,510.00"
SFO - IAD,51043595293,SFO-IAD-CLT 1,757-300,https://www.airlines-manager.com/network/showline/43924778,https://www.airlines-manager.com/network/showflight/51043595293,https://www.airlines-manager.com/aircraft/show/96135565,0:00,11:14,400,"$906,409.00","$828,391.00"
SFO - IAD,51043595294,SFO-IAD-CLT 5,757-300,https://www.airlines-manager.com/network/showline/43924778,https://www.airlines-manager.com/network/showflight/51043595294,https://www.airlines-manager.com/aircraft/show/96135561,4:00,15:14,400,"$906,409.00","$828,391.00"
SFO - IAD,51043595295,SFO-IAD-CLT 2,757-300,https://www.airlines-manager.com/network/showline/43924778,https://www.airlines-manager.com/network/showflight/51043595295,https://www.airlines-manager.com/aircraft/show/96135564,6:00,17:14,400,"$906,409.00","$828,391.00"
SFO - IAD,51066574279,SFO-IAD-CLT 3,757-300,https://www.airlines-manager.com/network/showline/43924778,https://www.airlines-manager.com/network/showflight/51066574279,https://www.airlines-manager.com/aircraft/show/96135563,12:45,23:59,400,"$906,409.00","$828,391.00"
SFO - IAD,51071689663,SFO-IAD-CLT 4,757-300,https://www.airlines-manager.com/network/showline/43924778,https://www.airlines-manager.com/network/showflight/51071689663,https://www.airlines-manager.com/aircraft/show/96135562,16:45,3:59,400,"$906,409.00","$828,391.00"
SFO - IAH,51043595783,SFO-IAH-MEX 2,757-300,https://www.airlines-manager.com/network/showline/40762091,https://www.airlines-manager.com/network/showflight/51043595783,https://www.airlines-manager.com/aircraft/show/101045338,4:45,12:59,400,"$690,443.00","$620,635.00"
SFO - IAH,51054794891,SFO-IAH-MEX 5,757-300,https://www.airlines-manager.com/network/showline/40762091,https://www.airlines-manager.com/network/showflight/51054794891,https://www.airlines-manager.com/aircraft/show/101045335,6:45,14:59,400,"$690,443.00","$620,635.00"
SFO - IAH,51066574303,SFO-IAH-MEX 1,757-300,https://www.airlines-manager.com/network/showline/40762091,https://www.airlines-manager.com/network/showflight/51066574303,https://www.airlines-manager.com/aircraft/show/101045339,13:00,21:14,400,"$690,443.00","$620,635.00"
SFO - IAH,51071689540,SFO-IAH-MEX 4,757-300,https://www.airlines-manager.com/network/showline/40762091,https://www.airlines-manager.com/network/showflight/51071689540,https://www.airlines-manager.com/aircraft/show/101045336,15:00,23:14,400,"$690,443.00","$620,635.00"
SFO - IAH,51077491542,SFO-IAH-MEX 3,757-300,https://www.airlines-manager.com/network/showline/40762091,https://www.airlines-manager.com/network/showflight/51077491542,https://www.airlines-manager.com/aircraft/show/101045337,19:30,3:44,400,"$690,443.00","$620,635.00"
SFO - ICN,51043595353,SFO 84A-4 E1,777-300,https://www.airlines-manager.com/network/showline/40609625,https://www.airlines-manager.com/network/showflight/51043595353,https://www.airlines-manager.com/aircraft/show/86776213,0:15,22:44,932,"$3,796,586.00","$3,446,563.00"
SFO - ICN,51077491577,SFO 84A-7 E1,777-300,https://www.airlines-manager.com/network/showline/40609625,https://www.airlines-manager.com/network/showflight/51077491577,https://www.airlines-manager.com/aircraft/show/85806656,20:00,18:29,932,"$3,796,586.00","$3,446,563.00"
SFO - IND,51043595796,SFO-IND-CVG 4,A321-200,https://www.airlines-manager.com/network/showline/44876694,https://www.airlines-manager.com/network/showflight/51043595796,https://www.airlines-manager.com/aircraft/show/99316503,5:15,14:59,310,"$601,784.00","$551,734.00"
SFO - IND,51054794936,SFO-IND-CVG 6,ERJ-175,https://www.airlines-manager.com/network/showline/44876694,https://www.airlines-manager.com/network/showflight/51054794936,https://www.airlines-manager.com/aircraft/show/99174346,7:15,16:59,112,"$282,593.00","$249,179.00"
SFO - IND,51066574314,SFO-IND-CVG 1,A321-200,https://www.airlines-manager.com/network/showline/44876694,https://www.airlines-manager.com/network/showflight/51066574314,https://www.airlines-manager.com/aircraft/show/99316506,13:00,22:44,310,"$601,784.00","$551,734.00"
SFO - IND,51071689544,SFO-IND-CVG 3,A321-200,https://www.airlines-manager.com/network/showline/44876694,https://www.airlines-manager.com/network/showflight/51071689544,https://www.airlines-manager.com/aircraft/show/99316504,15:00,0:44,310,"$601,784.00","$551,734.00"
SFO - IND,51071689545,SFO-IND-CVG 5,A321-200,https://www.airlines-manager.com/network/showline/44876694,https://www.airlines-manager.com/network/showflight/51071689545,https://www.airlines-manager.com/aircraft/show/99316502,17:00,2:44,310,"$601,784.00","$551,734.00"
SFO - IND,51086541019,SFO-IND-CVG 2,A321-200,https://www.airlines-manager.com/network/showline/44876694,https://www.airlines-manager.com/network/showflight/51086541019,https://www.airlines-manager.com/aircraft/show/99316505,23:00,8:44,310,"$601,784.00","$551,734.00"
SFO - JAX,51043595815,SFO-JAX-SAT 5,A321-200,https://www.airlines-manager.com/network/showline/45303043,https://www.airlines-manager.com/network/showflight/51043595815,https://www.airlines-manager.com/aircraft/show/86377315,6:00,17:14,310,"$700,332.00","$645,263.00"
SFO - JAX,51066574299,SFO-JAX-SAT 1,A321-200,https://www.airlines-manager.com/network/showline/45303043,https://www.airlines-manager.com/network/showflight/51066574299,https://www.airlines-manager.com/aircraft/show/86375568,13:00,0:14,310,"$700,332.00","$645,263.00"
SFO - JAX,51071689533,SFO-JAX-SAT 2,A321-200,https://www.airlines-manager.com/network/showline/45303043,https://www.airlines-manager.com/network/showflight/51071689533,https://www.airlines-manager.com/aircraft/show/86371267,15:00,2:14,310,"$700,332.00","$645,263.00"
SFO - JAX,51082169845,SFO-JAX-SAT 3,A321-200,https://www.airlines-manager.com/network/showline/45303043,https://www.airlines-manager.com/network/showflight/51082169845,https://www.airlines-manager.com/aircraft/show/86385102,21:00,8:14,310,"$700,332.00","$645,263.00"
SFO - JAX,51086541022,SFO-JAX-SAT 4,A321-200,https://www.airlines-manager.com/network/showline/45303043,https://www.airlines-manager.com/network/showflight/51086541022,https://www.airlines-manager.com/aircraft/show/86378760,23:00,10:14,310,"$700,332.00","$645,263.00"
SFO - JFK,51043595456,SFO-MIA-JFK 4,757-300,https://www.airlines-manager.com/network/showline/40228411,https://www.airlines-manager.com/network/showflight/51043595456,https://www.airlines-manager.com/aircraft/show/89233034,1:00,12:59,400,"$959,074.00","$860,576.00"
SFO - JFK,51054794906,SFO-MIA-JFK 5,757-300,https://www.airlines-manager.com/network/showline/40228411,https://www.airlines-manager.com/network/showflight/51054794906,https://www.airlines-manager.com/aircraft/show/89233035,7:00,18:59,400,"$959,074.00","$860,576.00"
SFO - JFK,51066574447,SFO-MIA-JFK 1,757-300,https://www.airlines-manager.com/network/showline/40228411,https://www.airlines-manager.com/network/showflight/51066574447,https://www.airlines-manager.com/aircraft/show/89233032,13:00,0:59,400,"$959,074.00","$860,576.00"
SFO - JFK,51071689601,SFO-MIA-JFK 2,757-300,https://www.airlines-manager.com/network/showline/40228411,https://www.airlines-manager.com/network/showflight/51071689601,https://www.airlines-manager.com/aircraft/show/84622093,16:00,3:59,400,"$959,074.00","$860,576.00"
SFO - JFK,51077491498,SFO-MIA-JFK 3,757-300,https://www.airlines-manager.com/network/showline/40228411,https://www.airlines-manager.com/network/showflight/51077491498,https://www.airlines-manager.com/aircraft/show/89233031,19:00,6:59,400,"$959,074.00","$860,576.00"
SFO - KOA,51043595656,SFO-KOA-PWM 3,A321-200,https://www.airlines-manager.com/network/showline/48344087,https://www.airlines-manager.com/network/showflight/51043595656,https://www.airlines-manager.com/aircraft/show/112650101,2:45,13:59,310,"$702,433.00","$647,561.00"
SFO - KOA,51043595657,SFO-KOA-PWM 4,A321-200,https://www.airlines-manager.com/network/showline/48344087,https://www.airlines-manager.com/network/showflight/51043595657,https://www.airlines-manager.com/aircraft/show/112650100,4:45,15:59,310,"$702,433.00","$647,561.00"
SFO - KOA,51066574288,SFO-KOA-PWM 5 B,A319-100,https://www.airlines-manager.com/network/showline/48344087,https://www.airlines-manager.com/network/showflight/51066574288,https://www.airlines-manager.com/aircraft/show/112650091,13:00,0:14,198,"$527,256.00","$483,257.00"
SFO - KOA,51071689690,SFO-KOA-PWM 1,A321-200,https://www.airlines-manager.com/network/showline/48344087,https://www.airlines-manager.com/network/showflight/51071689690,https://www.airlines-manager.com/aircraft/show/112650103,17:00,4:14,310,"$702,433.00","$647,561.00"
SFO - KOA,51077491569,SFO-KOA-PWM 2,A321-200,https://www.airlines-manager.com/network/showline/48344087,https://www.airlines-manager.com/network/showflight/51077491569,https://www.airlines-manager.com/aircraft/show/112650102,20:00,7:14,310,"$702,433.00","$647,561.00"
SFO - LAS,51043595812,SFO-BOS-PHX 1,A321neo,https://www.airlines-manager.com/network/showline/40459405,https://www.airlines-manager.com/network/showflight/51043595812,https://www.airlines-manager.com/aircraft/show/104901564,6:00,9:44,338,"$216,797.00","$178,104.00"
SFO - LAS,51054794918,SFO-BOS-PHX 4,A321neo,https://www.airlines-manager.com/network/showline/40459405,https://www.airlines-manager.com/network/showflight/51054794918,https://www.airlines-manager.com/aircraft/show/104870960,7:00,10:44,338,"$216,797.00","$178,104.00"
SFO - LAS,51060918965,SFO-BOS-PHX 3,A321neo,https://www.airlines-manager.com/network/showline/40459405,https://www.airlines-manager.com/network/showflight/51060918965,https://www.airlines-manager.com/aircraft/show/104874465,12:00,15:44,338,"$216,797.00","$178,104.00"
SFO - LAS,51060918966,SFO CARGO 1,737-700,https://www.airlines-manager.com/network/showline/40459405,https://www.airlines-manager.com/network/showflight/51060918966,https://www.airlines-manager.com/aircraft/show/107343113,12:00,15:44,0,"$55,652.00","$30,462.00"
SFO - LAS,51071689654,SFO-BOS-PHX 2,A321neo,https://www.airlines-manager.com/network/showline/40459405,https://www.airlines-manager.com/network/showflight/51071689654,https://www.airlines-manager.com/aircraft/show/104901544,16:30,20:14,338,"$216,797.00","$178,104.00"
SFO - LAS,51082169814,SFO-BOS-PHX 5,A321neo,https://www.airlines-manager.com/network/showline/40459405,https://www.airlines-manager.com/network/showflight/51082169814,https://www.airlines-manager.com/aircraft/show/104864961,20:30,0:14,338,"$216,797.00","$178,104.00"
SFO - LAX,51043595589,SFO-PHL-SEA 6 B,A319-100,https://www.airlines-manager.com/network/showline/41084093,https://www.airlines-manager.com/network/showflight/51043595589,https://www.airlines-manager.com/aircraft/show/97900730,2:00,5:29,198,"$133,122.00","$101,108.00"
SFO - LAX,51043595590,SFO-PHL-SEA 1,737-900ER,https://www.airlines-manager.com/network/showline/41084093,https://www.airlines-manager.com/network/showflight/51043595590,https://www.airlines-manager.com/aircraft/show/92390872,4:30,7:59,320,"$175,539.00","$128,328.00"
SFO - LAX,51054794954,SFO-PHL-SEA 5,737-900ER,https://www.airlines-manager.com/network/showline/41084093,https://www.airlines-manager.com/network/showflight/51054794954,https://www.airlines-manager.com/aircraft/show/92390869,7:30,10:59,320,"$175,539.00","$128,328.00"
SFO - LAX,51054794955,SFO-PHL-SEA 4,737-900ER,https://www.airlines-manager.com/network/showline/41084093,https://www.airlines-manager.com/network/showflight/51054794955,https://www.airlines-manager.com/aircraft/show/92390870,8:15,11:44,320,"$175,539.00","$128,328.00"
SFO - LAX,51060918992,SFO-PHL-SEA 3,737-900ER,https://www.airlines-manager.com/network/showline/41084093,https://www.airlines-manager.com/network/showflight/51060918992,https://www.airlines-manager.com/aircraft/show/92390873,12:00,15:29,320,"$175,539.00","$128,328.00"
SFO - LAX,51071689658,SFO-PHL-SEA 2,737-900ER,https://www.airlines-manager.com/network/showline/41084093,https://www.airlines-manager.com/network/showflight/51071689658,https://www.airlines-manager.com/aircraft/show/92390871,16:45,20:14,320,"$175,539.00","$128,328.00"
SFO - LEX,51043595591,SFO-BTV-LEX 1,A321-200,https://www.airlines-manager.com/network/showline/48344124,https://www.airlines-manager.com/network/showflight/51043595591,https://www.airlines-manager.com/aircraft/show/112650095,2:00,11:59,310,"$622,649.00","$575,201.00"
SFO - LEX,51043595592,SFO-BTV-LEX 2,A321-200,https://www.airlines-manager.com/network/showline/48344124,https://www.airlines-manager.com/network/showflight/51043595592,https://www.airlines-manager.com/aircraft/show/112650094,6:00,15:59,310,"$622,649.00","$575,201.00"
SFO - LEX,51054794967,SFO-BTV-LEX 3,A321-200,https://www.airlines-manager.com/network/showline/48344124,https://www.airlines-manager.com/network/showflight/51054794967,https://www.airlines-manager.com/aircraft/show/112650093,8:00,17:59,310,"$622,649.00","$575,201.00"
SFO - LEX,51066574481,SFO-BTV-LEX 4,A321-200,https://www.airlines-manager.com/network/showline/48344124,https://www.airlines-manager.com/network/showflight/51066574481,https://www.airlines-manager.com/aircraft/show/112650092,14:00,23:59,310,"$622,649.00","$575,201.00"
SFO - LEX,51077491564,SFO-BTV-LEX 5 B,A319-100,https://www.airlines-manager.com/network/showline/48344124,https://www.airlines-manager.com/network/showflight/51077491564,https://www.airlines-manager.com/aircraft/show/112650089,20:00,5:59,198,"$468,448.00","$430,402.00"
SFO - LIT,51043595608,SFO-SDF-LIT 3,A321-200,https://www.airlines-manager.com/network/showline/46472621,https://www.airlines-manager.com/network/showflight/51043595608,https://www.airlines-manager.com/aircraft/show/94886627,2:15,10:59,310,"$539,568.00","$496,540.00"
SFO - LIT,51043595609,SFO-SDF-LIT 5,A321-200,https://www.airlines-manager.com/network/showline/46472621,https://www.airlines-manager.com/network/showflight/51043595609,https://www.airlines-manager.com/aircraft/show/106453498,3:15,11:59,310,"$539,568.00","$496,540.00"
SFO - LIT,51066574503,SFO-SDF-LIT 2,A321-200,https://www.airlines-manager.com/network/showline/46472621,https://www.airlines-manager.com/network/showflight/51066574503,https://www.airlines-manager.com/aircraft/show/94886628,14:00,22:44,310,"$539,568.00","$496,540.00"
SFO - LIT,51071689503,SFO-SDF-LIT 4,A321-200,https://www.airlines-manager.com/network/showline/46472621,https://www.airlines-manager.com/network/showflight/51071689503,https://www.airlines-manager.com/aircraft/show/106453500,15:00,23:44,310,"$539,568.00","$496,540.00"
SFO - LIT,51086541054,SFO-SDF-LIT 1,A321-200,https://www.airlines-manager.com/network/showline/46472621,https://www.airlines-manager.com/network/showflight/51086541054,https://www.airlines-manager.com/aircraft/show/106453499,23:45,8:29,310,"$539,568.00","$496,540.00"
SFO - MCI,51054794905,SFO-MCI-OMA 2,737-900ER,https://www.airlines-manager.com/network/showline/46129471,https://www.airlines-manager.com/network/showflight/51054794905,https://www.airlines-manager.com/aircraft/show/88239554,7:00,14:59,320,"$504,223.00","$455,297.00"
SFO - MCI,51071689673,SFO-MCI-OMA 1,737-900ER,https://www.airlines-manager.com/network/showline/46129471,https://www.airlines-manager.com/network/showflight/51071689673,https://www.airlines-manager.com/aircraft/show/88239553,17:00,0:59,320,"$504,223.00","$455,297.00"
SFO - MCI,51071689674,SFO-MCI-OMA 5 B,A319-100,https://www.airlines-manager.com/network/showline/46129471,https://www.airlines-manager.com/network/showflight/51071689674,https://www.airlines-manager.com/aircraft/show/105223003,17:00,0:59,198,"$380,381.00","$345,373.00"
SFO - MCI,51077491479,SFO-MCI-OMA 4,737-900ER,https://www.airlines-manager.com/network/showline/46129471,https://www.airlines-manager.com/network/showflight/51077491479,https://www.airlines-manager.com/aircraft/show/88239557,18:45,2:44,320,"$504,223.00","$455,297.00"
SFO - MCI,51086541033,SFO-MCI-OMA 3,737-900ER,https://www.airlines-manager.com/network/showline/46129471,https://www.airlines-manager.com/network/showflight/51086541033,https://www.airlines-manager.com/aircraft/show/88239555,23:15,7:14,320,"$504,223.00","$455,297.00"
SFO - MCO,51043595706,SFO-MCO-MSP 2,A321neo,https://www.airlines-manager.com/network/showline/41349629,https://www.airlines-manager.com/network/showflight/51043595706,https://www.airlines-manager.com/aircraft/show/105367367,3:30,14:59,338,"$790,497.00","$725,528.00"
SFO - MCO,51043595707,SFO-MCO-MSP 5,A321neo,https://www.airlines-manager.com/network/showline/41349629,https://www.airlines-manager.com/network/showflight/51043595707,https://www.airlines-manager.com/aircraft/show/105367364,4:30,15:59,338,"$790,497.00","$725,528.00"
SFO - MCO,51071689515,SFO-MCO-MSP 1,A321neo,https://www.airlines-manager.com/network/showline/41349629,https://www.airlines-manager.com/network/showflight/51071689515,https://www.airlines-manager.com/aircraft/show/105367368,15:00,2:29,338,"$790,497.00","$725,528.00"
SFO - MCO,51071689516,SFO-MCO-MSP 4,A321neo,https://www.airlines-manager.com/network/showline/41349629,https://www.airlines-manager.com/network/showflight/51071689516,https://www.airlines-manager.com/aircraft/show/105367365,17:00,4:29,338,"$790,497.00","$725,528.00"
SFO - MCO,51077491527,SFO-MCO-MSP 3,A321neo,https://www.airlines-manager.com/network/showline/41349629,https://www.airlines-manager.com/network/showflight/51077491527,https://www.airlines-manager.com/aircraft/show/105367366,19:15,6:44,338,"$790,497.00","$725,528.00"
SFO - MCO,51082169804,SFO CARGO 1,737-700,https://www.airlines-manager.com/network/showline/41349629,https://www.airlines-manager.com/network/showflight/51082169804,https://www.airlines-manager.com/aircraft/show/107343113,20:30,7:59,0,"$198,320.00","$147,673.00"
SFO - MEM,51043595662,SFO-MEM-PIT 4,A321-200,https://www.airlines-manager.com/network/showline/44710521,https://www.airlines-manager.com/network/showflight/51043595662,https://www.airlines-manager.com/aircraft/show/98788934,2:45,11:59,310,"$573,538.00","$524,814.00"
SFO - MEM,51043595663,SFO-MEM-PIT 6,ERJ-175,https://www.airlines-manager.com/network/showline/44710521,https://www.airlines-manager.com/network/showflight/51043595663,https://www.airlines-manager.com/aircraft/show/98675305,5:45,14:59,112,"$269,307.00","$236,925.00"
SFO - MEM,51066574316,SFO-MEM-PIT 1,A321-200,https://www.airlines-manager.com/network/showline/44710521,https://www.airlines-manager.com/network/showflight/51066574316,https://www.airlines-manager.com/aircraft/show/98788937,13:00,22:14,310,"$573,538.00","$524,814.00"
SFO - MEM,51071689603,SFO-MEM-PIT 3,A321-200,https://www.airlines-manager.com/network/showline/44710521,https://www.airlines-manager.com/network/showflight/51071689603,https://www.airlines-manager.com/aircraft/show/98788935,16:00,1:14,310,"$573,538.00","$524,814.00"
SFO - MEM,51077491518,SFO-MEM-PIT 5,A321-200,https://www.airlines-manager.com/network/showline/44710521,https://www.airlines-manager.com/network/showflight/51077491518,https://www.airlines-manager.com/aircraft/show/98788933,19:00,4:14,310,"$573,538.00","$524,814.00"
SFO - MEM,51086541060,SFO-MEM-PIT 2,A321-200,https://www.airlines-manager.com/network/showline/44710521,https://www.airlines-manager.com/network/showflight/51086541060,https://www.airlines-manager.com/aircraft/show/98788936,23:45,8:59,310,"$573,538.00","$524,814.00"
SFO - MEX,51043595727,SFO-IAH-MEX 3,757-300,https://www.airlines-manager.com/network/showline/42730810,https://www.airlines-manager.com/network/showflight/51043595727,https://www.airlines-manager.com/aircraft/show/101045337,3:45,12:59,400,"$768,723.00","$697,856.00"
SFO - MEX,51066574302,SFO-IAH-MEX 2,757-300,https://www.airlines-manager.com/network/showline/42730810,https://www.airlines-manager.com/network/showflight/51066574302,https://www.airlines-manager.com/aircraft/show/101045338,13:00,22:14,400,"$768,723.00","$697,856.00"
SFO - MEX,51071689541,SFO-IAH-MEX 5,757-300,https://www.airlines-manager.com/network/showline/42730810,https://www.airlines-manager.com/network/showflight/51071689541,https://www.airlines-manager.com/aircraft/show/101045335,15:00,0:14,400,"$768,723.00","$697,856.00"
SFO - MEX,51082169873,SFO-IAH-MEX 1,757-300,https://www.airlines-manager.com/network/showline/42730810,https://www.airlines-manager.com/network/showflight/51082169873,https://www.airlines-manager.com/aircraft/show/101045339,21:15,6:29,400,"$768,723.00","$697,856.00"
SFO - MEX,51086541026,SFO-IAH-MEX 4,757-300,https://www.airlines-manager.com/network/showline/42730810,https://www.airlines-manager.com/network/showflight/51086541026,https://www.airlines-manager.com/aircraft/show/101045336,23:15,8:29,370,"$720,296.00","$651,260.00"
SFO - MIA,51043595457,SFO-MIA-JFK 1,757-300,https://www.airlines-manager.com/network/showline/40228416,https://www.airlines-manager.com/network/showflight/51043595457,https://www.airlines-manager.com/aircraft/show/89233032,1:00,12:59,400,"$952,597.00","$862,754.00"
SFO - MIA,51043595458,SFO-MIA-JFK 2,757-300,https://www.airlines-manager.com/network/showline/40228416,https://www.airlines-manager.com/network/showflight/51043595458,https://www.airlines-manager.com/aircraft/show/84622093,4:00,15:59,400,"$952,597.00","$862,754.00"
SFO - MIA,51054794916,SFO-MIA-JFK 3,757-300,https://www.airlines-manager.com/network/showline/40228416,https://www.airlines-manager.com/network/showflight/51054794916,https://www.airlines-manager.com/aircraft/show/89233031,7:00,18:59,400,"$952,597.00","$862,754.00"
SFO - MIA,51066574436,SFO-MIA-JFK 4,757-300,https://www.airlines-manager.com/network/showline/40228416,https://www.airlines-manager.com/network/showflight/51066574436,https://www.airlines-manager.com/aircraft/show/89233034,13:00,0:59,400,"$952,597.00","$862,754.00"
SFO - MIA,51077491510,SFO-MIA-JFK 5,757-300,https://www.airlines-manager.com/network/showline/40228416,https://www.airlines-manager.com/network/showflight/51077491510,https://www.airlines-manager.com/aircraft/show/89233035,19:00,6:59,400,"$952,597.00","$862,754.00"
SFO - MKE,51043595400,SFO-CLE-MKE 1,737-900ER,https://www.airlines-manager.com/network/showline/45951021,https://www.airlines-manager.com/network/showflight/51043595400,https://www.airlines-manager.com/aircraft/show/92519368,0:30,9:44,320,"$582,470.00","$529,702.00"
SFO - MKE,51043595401,SFO-CLE-MKE 4,737-900ER,https://www.airlines-manager.com/network/showline/45951021,https://www.airlines-manager.com/network/showflight/51043595401,https://www.airlines-manager.com/aircraft/show/92519371,5:30,14:44,320,"$582,470.00","$529,702.00"
SFO - MKE,51054794881,SFO-CLE-MKE 3,737-900ER,https://www.airlines-manager.com/network/showline/45951021,https://www.airlines-manager.com/network/showflight/51054794881,https://www.airlines-manager.com/aircraft/show/92519367,6:45,15:59,320,"$582,470.00","$529,702.00"
SFO - MKE,51071689606,SFO-CLE-MKE 2,737-900ER,https://www.airlines-manager.com/network/showline/45951021,https://www.airlines-manager.com/network/showflight/51071689606,https://www.airlines-manager.com/aircraft/show/92519369,16:00,1:14,320,"$582,470.00","$529,702.00"
SFO - MKE,51077491387,SFO-CLE-MKE 5,737-900ER,https://www.airlines-manager.com/network/showline/45951021,https://www.airlines-manager.com/network/showflight/51077491387,https://www.airlines-manager.com/aircraft/show/92519370,18:00,3:14,320,"$582,470.00","$529,702.00"
SFO - MSO,51043595586,SFO-TUL-DSM,ERJ-175,https://www.airlines-manager.com/network/showline/47065671,https://www.airlines-manager.com/network/showflight/51043595586,https://www.airlines-manager.com/aircraft/show/108466264,2:00,6:59,112,"$151,287.00","$132,192.00"
SFO - MSO,51054794892,SFO-TUL-DSM 1,737-900ER,https://www.airlines-manager.com/network/showline/47065671,https://www.airlines-manager.com/network/showflight/51054794892,https://www.airlines-manager.com/aircraft/show/108410856,6:45,11:44,320,"$318,016.00","$284,305.00"
SFO - MSO,51054794893,SFO-TUL-DSM 4,737-900ER,https://www.airlines-manager.com/network/showline/47065671,https://www.airlines-manager.com/network/showflight/51054794893,https://www.airlines-manager.com/aircraft/show/108410859,7:30,12:29,320,"$318,016.00","$284,305.00"
SFO - MSO,51066574335,SFO-TUL-DSM 3,737-900ER,https://www.airlines-manager.com/network/showline/47065671,https://www.airlines-manager.com/network/showflight/51066574335,https://www.airlines-manager.com/aircraft/show/108410858,13:00,17:59,320,"$318,016.00","$284,305.00"
SFO - MSO,51082169850,SFO-TUL-DSM 2,737-900ER,https://www.airlines-manager.com/network/showline/47065671,https://www.airlines-manager.com/network/showflight/51082169850,https://www.airlines-manager.com/aircraft/show/108410857,21:00,1:59,211,"$251,867.00","$220,411.00"
SFO - MSP,51043595625,SFO-MCO-MSP 1,A321neo,https://www.airlines-manager.com/network/showline/42708322,https://www.airlines-manager.com/network/showflight/51043595625,https://www.airlines-manager.com/aircraft/show/105367368,2:30,10:44,338,"$569,501.00","$520,063.00"
SFO - MSP,51043595626,SFO-MCO-MSP 4,A321neo,https://www.airlines-manager.com/network/showline/42708322,https://www.airlines-manager.com/network/showflight/51043595626,https://www.airlines-manager.com/aircraft/show/105367365,4:30,12:44,338,"$569,501.00","$520,063.00"
SFO - MSP,51054794883,SFO-MCO-MSP 3,A321neo,https://www.airlines-manager.com/network/showline/42708322,https://www.airlines-manager.com/network/showflight/51054794883,https://www.airlines-manager.com/aircraft/show/105367366,6:45,14:59,338,"$569,501.00","$520,063.00"
SFO - MSP,51071689518,SFO-MCO-MSP 2,A321neo,https://www.airlines-manager.com/network/showline/42708322,https://www.airlines-manager.com/network/showflight/51071689518,https://www.airlines-manager.com/aircraft/show/105367367,15:00,23:14,338,"$569,501.00","$520,063.00"
SFO - MSP,51071689519,SFO-MCO-MSP 5,A321neo,https://www.airlines-manager.com/network/showline/42708322,https://www.airlines-manager.com/network/showflight/51071689519,https://www.airlines-manager.com/aircraft/show/105367364,16:00,0:14,338,"$569,501.00","$520,063.00"
SFO - MSY,51043595669,SFO-MSY-STL 6,ERJ-175,https://www.airlines-manager.com/network/showline/44531521,https://www.airlines-manager.com/network/showflight/51043595669,https://www.airlines-manager.com/aircraft/show/103534666,3:00,12:29,112,"$277,978.00","$245,304.00"
SFO - MSY,51043595670,SFO-MSY-STL 2,737-900ER,https://www.airlines-manager.com/network/showline/44531521,https://www.airlines-manager.com/network/showflight/51043595670,https://www.airlines-manager.com/aircraft/show/98075266,6:00,15:29,320,"$590,010.00","$535,776.00"
SFO - MSY,51054794971,SFO-MSY-STL 4,737-900ER,https://www.airlines-manager.com/network/showline/44531521,https://www.airlines-manager.com/network/showflight/51054794971,https://www.airlines-manager.com/aircraft/show/98075264,8:00,17:29,320,"$590,010.00","$535,776.00"
SFO - MSY,51066574321,SFO-MSY-STL 1,737-900ER,https://www.airlines-manager.com/network/showline/44531521,https://www.airlines-manager.com/network/showflight/51066574321,https://www.airlines-manager.com/aircraft/show/98075267,13:00,22:29,320,"$590,010.00","$535,776.00"
SFO - MSY,51082169872,SFO-MSY-STL 3,737-900ER,https://www.airlines-manager.com/network/showline/44531521,https://www.airlines-manager.com/network/showflight/51082169872,https://www.airlines-manager.com/aircraft/show/98075265,21:15,6:44,320,"$590,010.00","$535,776.00"
SFO - MSY,51086541032,SFO-MSY-STL 5,737-900ER,https://www.airlines-manager.com/network/showline/44531521,https://www.airlines-manager.com/network/showflight/51086541032,https://www.airlines-manager.com/aircraft/show/98075263,23:15,8:44,320,"$590,010.00","$535,776.00"
SFO - NRT,51043595312,SFO 84A-6 E1,777-300,https://www.airlines-manager.com/network/showline/40456655,https://www.airlines-manager.com/network/showflight/51043595312,https://www.airlines-manager.com/aircraft/show/85806724,0:00,20:29,932,"$3,427,724.00","$3,103,068.00"
SFO - NRT,51043595313,SFO 84A-2 E1,777-300,https://www.airlines-manager.com/network/showline/40456655,https://www.airlines-manager.com/network/showflight/51043595313,https://www.airlines-manager.com/aircraft/show/86776211,4:15,0:44,932,"$3,427,724.00","$3,103,068.00"
SFO - OGG,51043595630,SFO-OGG-AUS 5,A321-200,https://www.airlines-manager.com/network/showline/45270812,https://www.airlines-manager.com/network/showflight/51043595630,https://www.airlines-manager.com/aircraft/show/92773477,2:30,13:44,310,"$693,574.00","$641,012.00"
SFO - OGG,51066574466,SFO-OGG-AUS 1,A321-200,https://www.airlines-manager.com/network/showline/45270812,https://www.airlines-manager.com/network/showflight/51066574466,https://www.airlines-manager.com/aircraft/show/92773481,13:30,0:44,310,"$693,574.00","$641,012.00"
SFO - OGG,51071689564,SFO-OGG-AUS 2,A321-200,https://www.airlines-manager.com/network/showline/45270812,https://www.airlines-manager.com/network/showflight/51071689564,https://www.airlines-manager.com/aircraft/show/92773480,15:30,2:44,310,"$693,574.00","$641,012.00"
SFO - OGG,51082169899,SFO-OGG-AUS 3,A321-200,https://www.airlines-manager.com/network/showline/45270812,https://www.airlines-manager.com/network/showflight/51082169899,https://www.airlines-manager.com/aircraft/show/92773479,21:30,8:44,310,"$693,574.00","$641,012.00"
SFO - OGG,51086541051,SFO-OGG-AUS 4,A321-200,https://www.airlines-manager.com/network/showline/45270812,https://www.airlines-manager.com/network/showflight/51086541051,https://www.airlines-manager.com/aircraft/show/92773478,23:30,10:44,310,"$693,574.00","$641,012.00"
SFO - OKC,51043595399,SFO-OKC-FSD 3,737-900ER,https://www.airlines-manager.com/network/showline/46719700,https://www.airlines-manager.com/network/showflight/51043595399,https://www.airlines-manager.com/aircraft/show/107160380,0:30,7:59,320,"$473,517.00","$429,275.00"
SFO - OKC,51054794978,SFO-OKC-FSD 2,737-900ER,https://www.airlines-manager.com/network/showline/46719700,https://www.airlines-manager.com/network/showflight/51054794978,https://www.airlines-manager.com/aircraft/show/107160379,8:00,15:29,320,"$473,517.00","$429,275.00"
SFO - OKC,51071689692,SFO-OKC-FSD 1,737-900ER,https://www.airlines-manager.com/network/showline/46719700,https://www.airlines-manager.com/network/showflight/51071689692,https://www.airlines-manager.com/aircraft/show/107160378,17:00,0:29,320,"$473,517.00","$429,275.00"
SFO - OKC,51077491459,SFO-OKC-FSD 5,ERJ-175,https://www.airlines-manager.com/network/showline/46719700,https://www.airlines-manager.com/network/showflight/51077491459,https://www.airlines-manager.com/aircraft/show/107132310,18:30,1:59,112,"$223,700.00","$197,557.00"
SFO - OKC,51077491460,SFO-OKC-FSD 4,737-900ER,https://www.airlines-manager.com/network/showline/46719700,https://www.airlines-manager.com/network/showflight/51077491460,https://www.airlines-manager.com/aircraft/show/107160381,19:30,2:59,320,"$473,517.00","$429,275.00"
SFO - OMA,51043595463,SFO-MCI-OMA 1,737-900ER,https://www.airlines-manager.com/network/showline/46129452,https://www.airlines-manager.com/network/showflight/51043595463,https://www.airlines-manager.com/aircraft/show/88239553,1:00,8:44,320,"$481,982.00","$436,910.00"
SFO - OMA,51043595464,SFO-MCI-OMA 5 B,A319-100,https://www.airlines-manager.com/network/showline/46129452,https://www.airlines-manager.com/network/showflight/51043595464,https://www.airlines-manager.com/aircraft/show/105223003,1:00,8:44,198,"$364,575.00","$332,240.00"
SFO - OMA,51043595465,SFO-MCI-OMA 4,737-900ER,https://www.airlines-manager.com/network/showline/46129452,https://www.airlines-manager.com/network/showflight/51043595465,https://www.airlines-manager.com/aircraft/show/88239557,2:45,10:29,320,"$481,982.00","$436,910.00"
SFO - OMA,51054794934,SFO-MCI-OMA 3,737-900ER,https://www.airlines-manager.com/network/showline/46129452,https://www.airlines-manager.com/network/showflight/51054794934,https://www.airlines-manager.com/aircraft/show/88239555,7:15,14:59,320,"$481,982.00","$436,910.00"
SFO - OMA,51071689521,SFO-MCI-OMA 2,737-900ER,https://www.airlines-manager.com/network/showline/46129452,https://www.airlines-manager.com/network/showflight/51071689521,https://www.airlines-manager.com/aircraft/show/88239554,15:00,22:44,320,"$481,982.00","$436,910.00"
SFO - ONT,51043595769,SFO-OKC-FSD 2,737-900ER,https://www.airlines-manager.com/network/showline/46719649,https://www.airlines-manager.com/network/showflight/51043595769,https://www.airlines-manager.com/aircraft/show/107160379,4:30,7:59,320,"$179,473.00","$149,340.00"
SFO - ONT,51066574325,SFO-OKC-FSD 1,737-900ER,https://www.airlines-manager.com/network/showline/46719649,https://www.airlines-manager.com/network/showflight/51066574325,https://www.airlines-manager.com/aircraft/show/107160378,13:00,16:29,320,"$179,473.00","$149,340.00"
SFO - ONT,51071689497,SFO-OKC-FSD 5,ERJ-175,https://www.airlines-manager.com/network/showline/46719649,https://www.airlines-manager.com/network/showflight/51071689497,https://www.airlines-manager.com/aircraft/show/107132310,15:00,18:29,112,"$82,865.00","$66,742.00"
SFO - ONT,51071689498,SFO-OKC-FSD 4,737-900ER,https://www.airlines-manager.com/network/showline/46719649,https://www.airlines-manager.com/network/showflight/51071689498,https://www.airlines-manager.com/aircraft/show/107160381,16:00,19:29,320,"$179,473.00","$149,340.00"
SFO - ONT,51082169849,SFO-OKC-FSD 3,737-900ER,https://www.airlines-manager.com/network/showline/46719649,https://www.airlines-manager.com/network/showflight/51082169849,https://www.airlines-manager.com/aircraft/show/107160380,21:00,0:29,320,"$179,473.00","$149,340.00"
SFO - ORD,51043595811,SFO-ORD-DTW 2,757-300,https://www.airlines-manager.com/network/showline/40736837,https://www.airlines-manager.com/network/showflight/51043595811,https://www.airlines-manager.com/aircraft/show/101045333,6:00,14:59,400,"$755,764.00","$668,363.00"
SFO - ORD,51054794956,SFO-ORD-DTW 5,757-300,https://www.airlines-manager.com/network/showline/40736837,https://www.airlines-manager.com/network/showflight/51054794956,https://www.airlines-manager.com/aircraft/show/101045330,7:30,16:29,400,"$755,764.00","$668,363.00"
SFO - ORD,51066574300,SFO-ORD-DTW 1,757-300,https://www.airlines-manager.com/network/showline/40736837,https://www.airlines-manager.com/network/showflight/51066574300,https://www.airlines-manager.com/aircraft/show/101045334,13:00,21:59,400,"$755,764.00","$668,363.00"
SFO - ORD,51071689536,SFO-ORD-DTW 4,757-300,https://www.airlines-manager.com/network/showline/40736837,https://www.airlines-manager.com/network/showflight/51071689536,https://www.airlines-manager.com/aircraft/show/101045331,15:00,23:59,400,"$755,764.00","$668,363.00"
SFO - ORD,51077491566,SFO-ORD-DTW 3,757-300,https://www.airlines-manager.com/network/showline/40736837,https://www.airlines-manager.com/network/showflight/51077491566,https://www.airlines-manager.com/aircraft/show/101045332,20:00,4:59,400,"$755,764.00","$668,363.00"
SFO - ORF,51043595804,SFO-ORF-RIC 3,A321-200,https://www.airlines-manager.com/network/showline/47065515,https://www.airlines-manager.com/network/showflight/51043595804,https://www.airlines-manager.com/aircraft/show/108328836,5:30,17:29,310,"$728,043.00","$671,931.00"
SFO - ORF,51054794947,SFO-ORF-RIC 4,A321-200,https://www.airlines-manager.com/network/showline/47065515,https://www.airlines-manager.com/network/showflight/51054794947,https://www.airlines-manager.com/aircraft/show/108328837,7:30,19:29,310,"$728,043.00","$671,931.00"
SFO - ORF,51077491436,SFO-ORF-RIC 1,A321-200,https://www.airlines-manager.com/network/showline/47065515,https://www.airlines-manager.com/network/showflight/51077491436,https://www.airlines-manager.com/aircraft/show/108328834,18:00,5:59,310,"$728,043.00","$671,931.00"
SFO - ORF,51077491437,SFO-ORF-RIC 2,A321-200,https://www.airlines-manager.com/network/showline/47065515,https://www.airlines-manager.com/network/showflight/51077491437,https://www.airlines-manager.com/aircraft/show/108328835,20:00,7:59,310,"$728,043.00","$671,931.00"
SFO - ORF,51082169933,SFO-ORF-RIC 5 B,A319-100,https://www.airlines-manager.com/network/showline/47065515,https://www.airlines-manager.com/network/showflight/51082169933,https://www.airlines-manager.com/aircraft/show/108328833,22:00,9:59,198,"$544,587.00","$499,588.00"
SFO - PBI,51043595754,SFO-PBI-RDU 3,737-900ER,https://www.airlines-manager.com/network/showline/45099085,https://www.airlines-manager.com/network/showflight/51043595754,https://www.airlines-manager.com/aircraft/show/100301186,4:15,16:14,320,"$729,469.00","$665,138.00"
SFO - PBI,51043595755,SFO-PBI-RDU 4,737-900ER,https://www.airlines-manager.com/network/showline/45099085,https://www.airlines-manager.com/network/showflight/51043595755,https://www.airlines-manager.com/aircraft/show/100301185,6:15,18:14,320,"$729,469.00","$665,138.00"
SFO - PBI,51071689682,SFO-PBI-RDU 1,737-900ER,https://www.airlines-manager.com/network/showline/45099085,https://www.airlines-manager.com/network/showflight/51071689682,https://www.airlines-manager.com/aircraft/show/100301188,17:00,4:59,320,"$729,469.00","$665,138.00"
SFO - PBI,51077491502,SFO-PBI-RDU 2,737-900ER,https://www.airlines-manager.com/network/showline/45099085,https://www.airlines-manager.com/network/showflight/51077491502,https://www.airlines-manager.com/aircraft/show/100301187,19:00,6:59,320,"$729,469.00","$665,138.00"
SFO - PBI,51082169866,SFO-PBI-RDU 5,737-900ER,https://www.airlines-manager.com/network/showline/45099085,https://www.airlines-manager.com/network/showflight/51082169866,https://www.airlines-manager.com/aircraft/show/100301184,21:00,8:59,320,"$729,469.00","$665,138.00"
SFO - PDX,51043595361,SFO-MCO-MSP 5,A321neo,https://www.airlines-manager.com/network/showline/42708309,https://www.airlines-manager.com/network/showflight/51043595361,https://www.airlines-manager.com/aircraft/show/105367364,0:15,4:29,338,"$271,010.00","$241,613.00"
SFO - PDX,51060918857,SFO-MCO-MSP 1,A321neo,https://www.airlines-manager.com/network/showline/42708309,https://www.airlines-manager.com/network/showflight/51060918857,https://www.airlines-manager.com/aircraft/show/105367368,10:45,14:59,338,"$271,010.00","$241,613.00"
SFO - PDX,51066574278,SFO-MCO-MSP 4,A321neo,https://www.airlines-manager.com/network/showline/42708309,https://www.airlines-manager.com/network/showflight/51066574278,https://www.airlines-manager.com/aircraft/show/105367365,12:45,16:59,338,"$271,010.00","$241,613.00"
SFO - PDX,51071689517,SFO-MCO-MSP 3,A321neo,https://www.airlines-manager.com/network/showline/42708309,https://www.airlines-manager.com/network/showflight/51071689517,https://www.airlines-manager.com/aircraft/show/105367366,15:00,19:14,338,"$271,010.00","$241,613.00"
SFO - PDX,51086541037,SFO-MCO-MSP 2,A321neo,https://www.airlines-manager.com/network/showline/42708309,https://www.airlines-manager.com/network/showflight/51086541037,https://www.airlines-manager.com/aircraft/show/105367367,23:15,3:29,271,"$239,266.00","$210,711.00"
SFO - PEK,51043595420,SFO 84A-3 E1,777-300,https://www.airlines-manager.com/network/showline/40333487,https://www.airlines-manager.com/network/showflight/51043595420,https://www.airlines-manager.com/aircraft/show/86776210,0:45,0:14,932,"$3,788,313.00","$3,386,806.00"
SFO - PEK,51071689693,SFO-PEK E,787-10,https://www.airlines-manager.com/network/showline/40333487,https://www.airlines-manager.com/network/showflight/51071689693,https://www.airlines-manager.com/aircraft/show/106813006,17:00,15:59,648,"$2,820,554.00","$2,585,978.00"
SFO - PEK,51082169809,SFO 84A-6 E1,777-300,https://www.airlines-manager.com/network/showline/40333487,https://www.airlines-manager.com/network/showflight/51082169809,https://www.airlines-manager.com/aircraft/show/85806724,20:30,19:59,932,"$3,788,313.00","$3,386,806.00"
SFO - PHL,51043595323,SFO-PHL-SEA 2,737-900ER,https://www.airlines-manager.com/network/showline/40229890,https://www.airlines-manager.com/network/showflight/51043595323,https://www.airlines-manager.com/aircraft/show/92390871,0:00,11:44,320,"$726,312.00","$653,760.00"
SFO - PHL,51060918995,SFO-PHL-SEA 1,737-900ER,https://www.airlines-manager.com/network/showline/40229890,https://www.airlines-manager.com/network/showflight/51060918995,https://www.airlines-manager.com/aircraft/show/92390872,12:00,23:44,320,"$726,312.00","$653,760.00"
SFO - PHL,51066574615,SFO-PHL-SEA 6 B,A319-100,https://www.airlines-manager.com/network/showline/40229890,https://www.airlines-manager.com/network/showflight/51066574615,https://www.airlines-manager.com/aircraft/show/97900730,14:00,1:59,198,"$545,716.00","$493,324.00"
SFO - PHL,51071689551,SFO-PHL-SEA 5,737-900ER,https://www.airlines-manager.com/network/showline/40229890,https://www.airlines-manager.com/network/showflight/51071689551,https://www.airlines-manager.com/aircraft/show/92390869,15:00,2:44,320,"$726,312.00","$653,760.00"
SFO - PHL,51071689552,SFO-PHL-SEA 4,737-900ER,https://www.airlines-manager.com/network/showline/40229890,https://www.airlines-manager.com/network/showflight/51071689552,https://www.airlines-manager.com/aircraft/show/92390870,15:45,3:29,320,"$726,312.00","$653,760.00"
SFO - PHL,51077491536,SFO-PHL-SEA 3,737-900ER,https://www.airlines-manager.com/network/showline/40229890,https://www.airlines-manager.com/network/showflight/51077491536,https://www.airlines-manager.com/aircraft/show/92390873,19:15,6:59,320,"$726,312.00","$653,760.00"
SFO - PHX,51043595530,SFO-BOS-PHX 1,A321neo,https://www.airlines-manager.com/network/showline/42635167,https://www.airlines-manager.com/network/showflight/51043595530,https://www.airlines-manager.com/aircraft/show/104901564,1:30,5:59,338,"$320,201.00","$282,143.00"
SFO - PHX,51043595531,SFO-BOS-PHX 4,A321neo,https://www.airlines-manager.com/network/showline/42635167,https://www.airlines-manager.com/network/showflight/51043595531,https://www.airlines-manager.com/aircraft/show/104870960,2:30,6:59,338,"$320,201.00","$282,143.00"
SFO - PHX,51043595532,SFO-BOS-PHX 3,A321neo,https://www.airlines-manager.com/network/showline/42635167,https://www.airlines-manager.com/network/showflight/51043595532,https://www.airlines-manager.com/aircraft/show/104874465,4:15,8:44,338,"$320,201.00","$282,143.00"
SFO - PHX,51060918967,SFO-BOS-PHX 2,A321neo,https://www.airlines-manager.com/network/showline/42635167,https://www.airlines-manager.com/network/showflight/51060918967,https://www.airlines-manager.com/aircraft/show/104901544,12:00,16:29,338,"$320,201.00","$282,143.00"
SFO - PHX,51071689579,SFO CARGO 1,737-700,https://www.airlines-manager.com/network/showline/42635167,https://www.airlines-manager.com/network/showflight/51071689579,https://www.airlines-manager.com/aircraft/show/107343113,15:45,20:29,0,"$78,123.00","$52,183.00"
SFO - PHX,51071689580,SFO-BOS-PHX 5,A321neo,https://www.airlines-manager.com/network/showline/42635167,https://www.airlines-manager.com/network/showflight/51071689580,https://www.airlines-manager.com/aircraft/show/104864961,16:00,20:29,338,"$320,201.00","$282,143.00"
SFO - PIT,51043595486,SFO-MEM-PIT 3,A321-200,https://www.airlines-manager.com/network/showline/44710524,https://www.airlines-manager.com/network/showflight/51043595486,https://www.airlines-manager.com/aircraft/show/98788935,1:15,11:59,310,"$672,443.00","$617,287.00"
SFO - PIT,51043595487,SFO-MEM-PIT 5,A321-200,https://www.airlines-manager.com/network/showline/44710524,https://www.airlines-manager.com/network/showflight/51043595487,https://www.airlines-manager.com/aircraft/show/98788933,4:15,14:59,310,"$672,443.00","$617,287.00"
SFO - PIT,51066574315,SFO-MEM-PIT 2,A321-200,https://www.airlines-manager.com/network/showline/44710524,https://www.airlines-manager.com/network/showflight/51066574315,https://www.airlines-manager.com/aircraft/show/98788936,13:00,23:44,310,"$672,443.00","$617,287.00"
SFO - PIT,51071689604,SFO-MEM-PIT 4,A321-200,https://www.airlines-manager.com/network/showline/44710524,https://www.airlines-manager.com/network/showflight/51071689604,https://www.airlines-manager.com/aircraft/show/98788934,16:00,2:44,310,"$672,443.00","$617,287.00"
SFO - PIT,51077491517,SFO-MEM-PIT 6,ERJ-175,https://www.airlines-manager.com/network/showline/44710524,https://www.airlines-manager.com/network/showflight/51077491517,https://www.airlines-manager.com/aircraft/show/98675305,19:00,5:44,112,"$315,336.00","$278,317.00"
SFO - PIT,51082169936,SFO-MEM-PIT 1,A321-200,https://www.airlines-manager.com/network/showline/44710524,https://www.airlines-manager.com/network/showflight/51082169936,https://www.airlines-manager.com/aircraft/show/98788937,22:15,8:59,310,"$672,443.00","$617,287.00"
SFO - PVD,51043595324,SFO-PVD-BUF 4,A321-200,https://www.airlines-manager.com/network/showline/48344018,https://www.airlines-manager.com/network/showflight/51043595324,https://www.airlines-manager.com/aircraft/show/112650105,0:00,12:29,310,"$759,892.00","$702,225.00"
SFO - PVD,51043595325,SFO-PVD-BUF 5,A321-200,https://www.airlines-manager.com/network/showline/48344018,https://www.airlines-manager.com/network/showflight/51043595325,https://www.airlines-manager.com/aircraft/show/112650104,5:00,17:29,310,"$759,892.00","$702,225.00"
SFO - PVD,51066574294,SFO-PVD-BUF 1,A321-200,https://www.airlines-manager.com/network/showline/48344018,https://www.airlines-manager.com/network/showflight/51066574294,https://www.airlines-manager.com/aircraft/show/112650108,13:00,1:29,310,"$759,892.00","$702,225.00"
SFO - PVD,51071689696,SFO-PVD-BUF 2,A321-200,https://www.airlines-manager.com/network/showline/48344018,https://www.airlines-manager.com/network/showflight/51071689696,https://www.airlines-manager.com/aircraft/show/112650107,17:00,5:29,310,"$759,892.00","$702,225.00"
SFO - PVD,51077491520,SFO-PVD-BUF 3,A321-200,https://www.airlines-manager.com/network/showline/48344018,https://www.airlines-manager.com/network/showflight/51077491520,https://www.airlines-manager.com/aircraft/show/112650106,19:00,7:29,310,"$759,892.00","$702,225.00"
SFO - PWM,51043595362,SFO-KOA-PWM 5 B,A319-100,https://www.airlines-manager.com/network/showline/48344081,https://www.airlines-manager.com/network/showflight/51043595362,https://www.airlines-manager.com/aircraft/show/112650091,0:15,12:59,198,"$574,346.00","$528,149.00"
SFO - PWM,51043595363,SFO-KOA-PWM 1,A321-200,https://www.airlines-manager.com/network/showline/48344081,https://www.airlines-manager.com/network/showflight/51043595363,https://www.airlines-manager.com/aircraft/show/112650103,4:15,16:59,310,"$767,438.00","$709,838.00"
SFO - PWM,51054794935,SFO-KOA-PWM 2,A321-200,https://www.airlines-manager.com/network/showline/48344081,https://www.airlines-manager.com/network/showflight/51054794935,https://www.airlines-manager.com/aircraft/show/112650102,7:15,19:59,310,"$767,438.00","$709,838.00"
SFO - PWM,51066574484,SFO-KOA-PWM 3,A321-200,https://www.airlines-manager.com/network/showline/48344081,https://www.airlines-manager.com/network/showflight/51066574484,https://www.airlines-manager.com/aircraft/show/112650101,14:00,2:44,310,"$767,438.00","$709,838.00"
SFO - PWM,51071689618,SFO-KOA-PWM 4,A321-200,https://www.airlines-manager.com/network/showline/48344081,https://www.airlines-manager.com/network/showflight/51071689618,https://www.airlines-manager.com/aircraft/show/112650100,16:00,4:44,310,"$767,438.00","$709,838.00"
SFO - RDU,51043595794,SFO-PBI-RDU 1,737-900ER,https://www.airlines-manager.com/network/showline/45099094,https://www.airlines-manager.com/network/showflight/51043595794,https://www.airlines-manager.com/aircraft/show/100301188,5:00,16:14,320,"$708,356.00","$645,633.00"
SFO - RDU,51054794909,SFO-PBI-RDU 2,737-900ER,https://www.airlines-manager.com/network/showline/45099094,https://www.airlines-manager.com/network/showflight/51054794909,https://www.airlines-manager.com/aircraft/show/100301187,7:00,18:14,320,"$708,356.00","$645,633.00"
SFO - RDU,51054794910,SFO-PBI-RDU 5,737-900ER,https://www.airlines-manager.com/network/showline/45099094,https://www.airlines-manager.com/network/showflight/51054794910,https://www.airlines-manager.com/aircraft/show/100301184,9:00,20:14,320,"$708,356.00","$645,633.00"
SFO - RDU,51071689684,SFO-PBI-RDU 3,737-900ER,https://www.airlines-manager.com/network/showline/45099094,https://www.airlines-manager.com/network/showflight/51071689684,https://www.airlines-manager.com/aircraft/show/100301186,17:00,4:14,320,"$708,356.00","$645,633.00"
SFO - RDU,51077491501,SFO-PBI-RDU 4,737-900ER,https://www.airlines-manager.com/network/showline/45099094,https://www.airlines-manager.com/network/showflight/51077491501,https://www.airlines-manager.com/aircraft/show/100301185,19:00,6:14,320,"$708,356.00","$645,633.00"
SFO - RIC,51043595813,SFO-ORF-RIC 1,A321-200,https://www.airlines-manager.com/network/showline/47065521,https://www.airlines-manager.com/network/showflight/51043595813,https://www.airlines-manager.com/aircraft/show/108328834,6:00,17:29,310,"$722,308.00","$667,274.00"
SFO - RIC,51054794972,SFO-ORF-RIC 2,A321-200,https://www.airlines-manager.com/network/showline/47065521,https://www.airlines-manager.com/network/showflight/51054794972,https://www.airlines-manager.com/aircraft/show/108328835,8:00,19:29,310,"$722,308.00","$667,274.00"
SFO - RIC,51054794973,SFO-ORF-RIC 5 B,A319-100,https://www.airlines-manager.com/network/showline/47065521,https://www.airlines-manager.com/network/showflight/51054794973,https://www.airlines-manager.com/aircraft/show/108328833,10:00,21:29,198,"$541,863.00","$497,731.00"
SFO - RIC,51077491427,SFO-ORF-RIC 3,A321-200,https://www.airlines-manager.com/network/showline/47065521,https://www.airlines-manager.com/network/showflight/51077491427,https://www.airlines-manager.com/aircraft/show/108328836,18:00,5:29,310,"$722,308.00","$667,274.00"
SFO - RIC,51077491428,SFO-ORF-RIC 4,A321-200,https://www.airlines-manager.com/network/showline/47065521,https://www.airlines-manager.com/network/showflight/51077491428,https://www.airlines-manager.com/aircraft/show/108328837,20:00,7:29,310,"$722,308.00","$667,274.00"
SFO - RNO,51043595756,SFO-MCI-OMA 2,737-900ER,https://www.airlines-manager.com/network/showline/46129438,https://www.airlines-manager.com/network/showflight/51043595756,https://www.airlines-manager.com/aircraft/show/88239554,4:15,6:59,320,"$118,923.00","$92,603.00"
SFO - RNO,51066574618,SFO-MCI-OMA 1,737-900ER,https://www.airlines-manager.com/network/showline/46129438,https://www.airlines-manager.com/network/showflight/51066574618,https://www.airlines-manager.com/aircraft/show/88239553,14:15,16:59,320,"$118,923.00","$92,603.00"
SFO - RNO,51066574619,SFO-MCI-OMA 5 B,A319-100,https://www.airlines-manager.com/network/showline/46129438,https://www.airlines-manager.com/network/showflight/51066574619,https://www.airlines-manager.com/aircraft/show/105223003,14:15,16:59,198,"$90,023.00","$72,171.00"
SFO - RNO,51071689598,SFO-MCI-OMA 4,737-900ER,https://www.airlines-manager.com/network/showline/46129438,https://www.airlines-manager.com/network/showflight/51071689598,https://www.airlines-manager.com/aircraft/show/88239557,16:00,18:44,320,"$118,923.00","$92,603.00"
SFO - RNO,51082169803,SFO-MCI-OMA 3,737-900ER,https://www.airlines-manager.com/network/showline/46129438,https://www.airlines-manager.com/network/showflight/51082169803,https://www.airlines-manager.com/aircraft/show/88239555,20:30,23:14,320,"$118,923.00","$92,603.00"
SFO - RSW,51043595795,SFO-RSW-BDL 3,737-900ER,https://www.airlines-manager.com/network/showline/47540536,https://www.airlines-manager.com/network/showflight/51043595795,https://www.airlines-manager.com/aircraft/show/84915100,5:15,16:59,320,"$725,729.00","$660,915.00"
SFO - RSW,51054794933,SFO-RSW-BDL 4,737-900ER,https://www.airlines-manager.com/network/showline/47540536,https://www.airlines-manager.com/network/showflight/51054794933,https://www.airlines-manager.com/aircraft/show/84915101,7:15,18:59,320,"$725,729.00","$660,915.00"
SFO - RSW,51071689683,SFO-RSW-BDL 1,737-900ER,https://www.airlines-manager.com/network/showline/47540536,https://www.airlines-manager.com/network/showflight/51071689683,https://www.airlines-manager.com/aircraft/show/84915098,17:00,4:44,320,"$725,729.00","$660,915.00"
SFO - RSW,51077491503,SFO-RSW-BDL 2,737-900ER,https://www.airlines-manager.com/network/showline/47540536,https://www.airlines-manager.com/network/showflight/51077491503,https://www.airlines-manager.com/aircraft/show/84915099,19:00,6:44,320,"$725,729.00","$660,915.00"
SFO - RSW,51082169851,SFO-RSW-BDL 5,737-900ER,https://www.airlines-manager.com/network/showline/47540536,https://www.airlines-manager.com/network/showflight/51082169851,https://www.airlines-manager.com/aircraft/show/84915102,21:00,8:44,320,"$725,729.00","$660,915.00"
SFO - SAN,51054794977,SFO-PHL-SEA 1,737-900ER,https://www.airlines-manager.com/network/showline/42627058,https://www.airlines-manager.com/network/showflight/51054794977,https://www.airlines-manager.com/aircraft/show/92390872,8:00,11:44,320,"$216,273.00","$183,434.00"
SFO - SAN,51060918935,SFO-PHL-SEA 5,737-900ER,https://www.airlines-manager.com/network/showline/42627058,https://www.airlines-manager.com/network/showflight/51060918935,https://www.airlines-manager.com/aircraft/show/92390869,11:00,14:44,320,"$216,273.00","$183,434.00"
SFO - SAN,51060918936,SFO-PHL-SEA 4,737-900ER,https://www.airlines-manager.com/network/showline/42627058,https://www.airlines-manager.com/network/showflight/51060918936,https://www.airlines-manager.com/aircraft/show/92390870,12:00,15:44,320,"$216,273.00","$183,434.00"
SFO - SAN,51071689570,SFO-PHL-SEA 3,737-900ER,https://www.airlines-manager.com/network/showline/42627058,https://www.airlines-manager.com/network/showflight/51071689570,https://www.airlines-manager.com/aircraft/show/92390873,15:30,19:14,320,"$216,273.00","$183,434.00"
SFO - SAN,51082169791,SFO-PHL-SEA 2,737-900ER,https://www.airlines-manager.com/network/showline/42627058,https://www.airlines-manager.com/network/showflight/51082169791,https://www.airlines-manager.com/aircraft/show/92390871,20:15,23:59,316,"$214,638.00","$181,847.00"
SFO - SAT,51043595349,SFO-JAX-SAT 1,A321-200,https://www.airlines-manager.com/network/showline/45303038,https://www.airlines-manager.com/network/showflight/51043595349,https://www.airlines-manager.com/aircraft/show/86375568,0:15,8:14,310,"$495,508.00","$454,238.00"
SFO - SAT,51043595350,SFO-JAX-SAT 2,A321-200,https://www.airlines-manager.com/network/showline/45303038,https://www.airlines-manager.com/network/showflight/51043595350,https://www.airlines-manager.com/aircraft/show/86371267,2:15,10:14,310,"$495,508.00","$454,238.00"
SFO - SAT,51066574298,SFO-JAX-SAT 3,A321-200,https://www.airlines-manager.com/network/showline/45303038,https://www.airlines-manager.com/network/showflight/51066574298,https://www.airlines-manager.com/aircraft/show/86385102,13:00,20:59,310,"$495,508.00","$454,238.00"
SFO - SAT,51071689532,SFO-JAX-SAT 4,A321-200,https://www.airlines-manager.com/network/showline/45303038,https://www.airlines-manager.com/network/showflight/51071689532,https://www.airlines-manager.com/aircraft/show/86378760,15:00,22:59,310,"$495,508.00","$454,238.00"
SFO - SAT,51077491288,SFO-JAX-SAT 5,A321-200,https://www.airlines-manager.com/network/showline/45303038,https://www.airlines-manager.com/network/showflight/51077491288,https://www.airlines-manager.com/aircraft/show/86377315,17:15,1:14,310,"$495,508.00","$454,238.00"
SFO - SDF,51043595498,SFO-SDF-LIT 2,A321-200,https://www.airlines-manager.com/network/showline/46473760,https://www.airlines-manager.com/network/showflight/51043595498,https://www.airlines-manager.com/aircraft/show/94886628,1:15,10:59,310,"$610,940.00","$560,697.00"
SFO - SDF,51043595499,SFO-SDF-LIT 4,A321-200,https://www.airlines-manager.com/network/showline/46473760,https://www.airlines-manager.com/network/showflight/51043595499,https://www.airlines-manager.com/aircraft/show/106453500,2:15,11:59,310,"$610,940.00","$560,697.00"
SFO - SDF,51066574504,SFO-SDF-LIT 1,A321-200,https://www.airlines-manager.com/network/showline/46473760,https://www.airlines-manager.com/network/showflight/51066574504,https://www.airlines-manager.com/aircraft/show/106453499,14:00,23:44,310,"$610,940.00","$560,697.00"
SFO - SDF,51071689646,SFO-SDF-LIT 3,A321-200,https://www.airlines-manager.com/network/showline/46473760,https://www.airlines-manager.com/network/showflight/51071689646,https://www.airlines-manager.com/aircraft/show/94886627,16:30,2:14,310,"$610,940.00","$560,697.00"
SFO - SDF,51077491367,SFO-SDF-LIT 5,A321-200,https://www.airlines-manager.com/network/showline/46473760,https://www.airlines-manager.com/network/showflight/51077491367,https://www.airlines-manager.com/aircraft/show/106453498,17:30,3:14,310,"$610,940.00","$560,697.00"
SFO - SEA,51043595644,SFO-PHL-SEA 5,737-900ER,https://www.airlines-manager.com/network/showline/41349632,https://www.airlines-manager.com/network/showflight/51043595644,https://www.airlines-manager.com/aircraft/show/92390869,2:45,7:29,320,"$299,921.00","$256,313.00"
SFO - SEA,51043595645,SFO-PHL-SEA 4,737-900ER,https://www.airlines-manager.com/network/showline/41349632,https://www.airlines-manager.com/network/showflight/51043595645,https://www.airlines-manager.com/aircraft/show/92390870,3:30,8:14,320,"$299,921.00","$256,313.00"
SFO - SEA,51043595646,SFO-PHL-SEA 6 B,A319-100,https://www.airlines-manager.com/network/showline/41349632,https://www.airlines-manager.com/network/showflight/51043595646,https://www.airlines-manager.com/aircraft/show/97900730,5:30,10:14,198,"$228,666.00","$198,508.00"
SFO - SEA,51054794914,SFO-PHL-SEA 3,737-900ER,https://www.airlines-manager.com/network/showline/41349632,https://www.airlines-manager.com/network/showflight/51054794914,https://www.airlines-manager.com/aircraft/show/92390873,7:00,11:44,320,"$299,921.00","$256,313.00"
SFO - SEA,51060918994,SFO-PHL-SEA 2,737-900ER,https://www.airlines-manager.com/network/showline/41349632,https://www.airlines-manager.com/network/showflight/51060918994,https://www.airlines-manager.com/aircraft/show/92390871,12:00,16:44,320,"$299,921.00","$256,313.00"
SFO - SEA,51086541064,SFO-PHL-SEA 1,737-900ER,https://www.airlines-manager.com/network/showline/41349632,https://www.airlines-manager.com/network/showflight/51086541064,https://www.airlines-manager.com/aircraft/show/92390872,23:45,4:29,299,"$288,035.00","$244,811.00"
SFO - SHA,51077491574,SFO 168B-3 B,747-400,https://www.airlines-manager.com/network/showline/44204901,https://www.airlines-manager.com/network/showflight/51077491574,https://www.airlines-manager.com/aircraft/show/87566902,20:00,19:59,1046,"$4,621,430.00","$4,285,897.00"
SFO - SHA,51082169930,SFO 168A-3 B,747-400,https://www.airlines-manager.com/network/showline/44204901,https://www.airlines-manager.com/network/showflight/51082169930,https://www.airlines-manager.com/aircraft/show/86483501,22:00,21:59,1046,"$4,621,430.00","$4,285,897.00"
SFO - SLC,51043595265,SFO-ORD-DTW 4,757-300,https://www.airlines-manager.com/network/showline/42739134,https://www.airlines-manager.com/network/showflight/51043595265,https://www.airlines-manager.com/aircraft/show/101045331,0:00,4:29,400,"$352,295.00","$311,394.00"
SFO - SLC,51043595266,SFO-ORD-DTW 2,757-300,https://www.airlines-manager.com/network/showline/42739134,https://www.airlines-manager.com/network/showflight/51043595266,https://www.airlines-manager.com/aircraft/show/101045333,1:00,5:29,400,"$352,295.00","$311,394.00"
SFO - SLC,51043595267,SFO-ORD-DTW 5,757-300,https://www.airlines-manager.com/network/showline/42739134,https://www.airlines-manager.com/network/showflight/51043595267,https://www.airlines-manager.com/aircraft/show/101045330,3:00,7:29,400,"$352,295.00","$311,394.00"
SFO - SLC,51054794983,SFO-ORD-DTW 1,757-300,https://www.airlines-manager.com/network/showline/42739134,https://www.airlines-manager.com/network/showflight/51054794983,https://www.airlines-manager.com/aircraft/show/101045334,8:00,12:29,400,"$352,295.00","$311,394.00"
SFO - SLC,51071689537,SFO-ORD-DTW 3,757-300,https://www.airlines-manager.com/network/showline/42739134,https://www.airlines-manager.com/network/showflight/51071689537,https://www.airlines-manager.com/aircraft/show/101045332,15:00,19:29,217,"$253,047.00","$215,055.00"
SFO - SMF,51054795005,SFO-SDF-LIT 1,A321-200,https://www.airlines-manager.com/network/showline/46503390,https://www.airlines-manager.com/network/showflight/51054795005,https://www.airlines-manager.com/aircraft/show/106453499,8:30,10:59,310,"$82,525.00","$61,943.00"
SFO - SMF,51066574502,SFO-SDF-LIT 3,A321-200,https://www.airlines-manager.com/network/showline/46503390,https://www.airlines-manager.com/network/showflight/51066574502,https://www.airlines-manager.com/aircraft/show/94886627,14:00,16:29,310,"$82,525.00","$61,943.00"
SFO - SMF,51071689502,SFO-SDF-LIT 5,A321-200,https://www.airlines-manager.com/network/showline/46503390,https://www.airlines-manager.com/network/showflight/51071689502,https://www.airlines-manager.com/aircraft/show/106453498,15:00,17:29,310,"$82,525.00","$61,943.00"
SFO - SMF,51086540978,SFO-SDF-LIT 2,A321-200,https://www.airlines-manager.com/network/showline/46503390,https://www.airlines-manager.com/network/showflight/51086540978,https://www.airlines-manager.com/aircraft/show/94886628,22:45,1:14,310,"$82,525.00","$61,943.00"
SFO - SMF,51086540979,SFO-SDF-LIT 4,A321-200,https://www.airlines-manager.com/network/showline/46503390,https://www.airlines-manager.com/network/showflight/51086540979,https://www.airlines-manager.com/aircraft/show/106453500,23:45,2:14,310,"$82,525.00","$61,943.00"
SFO - STL,51054794888,SFO-MSY-STL 3,737-900ER,https://www.airlines-manager.com/network/showline/44531548,https://www.airlines-manager.com/network/showflight/51054794888,https://www.airlines-manager.com/aircraft/show/98075265,6:45,15:29,320,"$553,929.00","$500,175.00"
SFO - STL,51054794889,SFO-MSY-STL 5,737-900ER,https://www.airlines-manager.com/network/showline/44531548,https://www.airlines-manager.com/network/showflight/51054794889,https://www.airlines-manager.com/aircraft/show/98075263,8:45,17:29,320,"$553,929.00","$500,175.00"
SFO - STL,51066574305,SFO-MSY-STL 6,ERJ-175,https://www.airlines-manager.com/network/showline/44531548,https://www.airlines-manager.com/network/showflight/51066574305,https://www.airlines-manager.com/aircraft/show/103534666,13:00,21:44,112,"$260,880.00","$228,958.00"
SFO - STL,51071689623,SFO-MSY-STL 2,737-900ER,https://www.airlines-manager.com/network/showline/44531548,https://www.airlines-manager.com/network/showflight/51071689623,https://www.airlines-manager.com/aircraft/show/98075266,16:00,0:44,320,"$553,929.00","$500,175.00"
SFO - STL,51077491388,SFO-MSY-STL 4,737-900ER,https://www.airlines-manager.com/network/showline/44531548,https://www.airlines-manager.com/network/showflight/51077491388,https://www.airlines-manager.com/aircraft/show/98075264,18:00,2:44,320,"$553,929.00","$500,175.00"
SFO - STL,51086540955,SFO-MSY-STL 1,737-900ER,https://www.airlines-manager.com/network/showline/44531548,https://www.airlines-manager.com/network/showflight/51086540955,https://www.airlines-manager.com/aircraft/show/98075267,22:30,7:14,320,"$553,929.00","$500,175.00"
SFO - TFU,51066574268,SFO 168B-2 B,747-400,https://www.airlines-manager.com/network/showline/45364033,https://www.airlines-manager.com/network/showflight/51066574268,https://www.airlines-manager.com/aircraft/show/87566901,12:30,14:59,1046,"$5,201,506.00","$4,793,847.00"
SFO - TFU,51066574269,SFO 168A-2 B,747-400,https://www.airlines-manager.com/network/showline/45364033,https://www.airlines-manager.com/network/showflight/51066574269,https://www.airlines-manager.com/aircraft/show/86596991,14:30,16:59,1046,"$5,201,506.00","$4,793,847.00"
SFO - TPA,51043595459,SFO-FLL-TPA 1,737-900ER,https://www.airlines-manager.com/network/showline/44446761,https://www.airlines-manager.com/network/showflight/51043595459,https://www.airlines-manager.com/aircraft/show/97955544,1:00,12:14,320,"$700,033.00","$633,982.00"
SFO - TPA,51043595460,SFO-FLL-TPA 3,737-900ER,https://www.airlines-manager.com/network/showline/44446761,https://www.airlines-manager.com/network/showflight/51043595460,https://www.airlines-manager.com/aircraft/show/97955542,5:00,16:14,320,"$700,033.00","$633,982.00"
SFO - TPA,51054794985,SFO-FLL-TPA 5,737-900ER,https://www.airlines-manager.com/network/showline/44446761,https://www.airlines-manager.com/network/showflight/51054794985,https://www.airlines-manager.com/aircraft/show/97955540,8:00,19:14,320,"$700,033.00","$633,982.00"
SFO - TPA,51066574323,SFO-FLL-TPA 2,737-900ER,https://www.airlines-manager.com/network/showline/44446761,https://www.airlines-manager.com/network/showflight/51066574323,https://www.airlines-manager.com/aircraft/show/97955543,13:00,0:14,320,"$700,033.00","$633,982.00"
SFO - TPA,51071689669,SFO-FLL-TPA 4,737-900ER,https://www.airlines-manager.com/network/showline/44446761,https://www.airlines-manager.com/network/showflight/51071689669,https://www.airlines-manager.com/aircraft/show/97955541,17:00,4:14,320,"$700,033.00","$633,982.00"
SFO - TPA,51077491585,SFO-FLL-TPA 6 B,A319-100,https://www.airlines-manager.com/network/showline/44446761,https://www.airlines-manager.com/network/showflight/51077491585,https://www.airlines-manager.com/aircraft/show/97900729,20:00,7:29,198,"$528,505.00","$480,649.00"
SFO - TPE,51077491565,SFO 168B-4 B,747-400,https://www.airlines-manager.com/network/showline/40932049,https://www.airlines-manager.com/network/showflight/51077491565,https://www.airlines-manager.com/aircraft/show/87933798,20:00,21:14,1046,"$4,752,603.00","$4,402,577.00"
SFO - TPE,51082169929,SFO 168A-4 B,747-400,https://www.airlines-manager.com/network/showline/40932049,https://www.airlines-manager.com/network/showflight/51082169929,https://www.airlines-manager.com/aircraft/show/86817628,22:00,23:14,1029,"$4,698,552.00","$4,351,932.00"
SFO - TUL,51043595780,SFO-TUL-DSM 2,737-900ER,https://www.airlines-manager.com/network/showline/47065674,https://www.airlines-manager.com/network/showflight/51043595780,https://www.airlines-manager.com/aircraft/show/108410857,4:45,12:29,320,"$490,970.00","$445,472.00"
SFO - TUL,51054794917,SFO-TUL-DSM,ERJ-175,https://www.airlines-manager.com/network/showline/47065674,https://www.airlines-manager.com/network/showflight/51054794917,https://www.airlines-manager.com/aircraft/show/108466264,7:00,14:44,112,"$231,827.00","$204,819.00"
SFO - TUL,51071689491,SFO-TUL-DSM 1,737-900ER,https://www.airlines-manager.com/network/showline/47065674,https://www.airlines-manager.com/network/showflight/51071689491,https://www.airlines-manager.com/aircraft/show/108410856,15:00,22:44,320,"$490,970.00","$445,472.00"
SFO - TUL,51071689492,SFO-TUL-DSM 4,737-900ER,https://www.airlines-manager.com/network/showline/47065674,https://www.airlines-manager.com/network/showflight/51071689492,https://www.airlines-manager.com/aircraft/show/108410859,15:45,23:29,320,"$490,970.00","$445,472.00"
SFO - TUL,51082169829,SFO-TUL-DSM 3,737-900ER,https://www.airlines-manager.com/network/showline/47065674,https://www.airlines-manager.com/network/showflight/51082169829,https://www.airlines-manager.com/aircraft/show/108410858,20:45,4:29,320,"$490,970.00","$445,472.00"
SFO - TUS,51054794979,SFO-OKC-FSD 1,737-900ER,https://www.airlines-manager.com/network/showline/46719652,https://www.airlines-manager.com/network/showflight/51054794979,https://www.airlines-manager.com/aircraft/show/107160378,8:00,12:59,320,"$317,409.00","$282,248.00"
SFO - TUS,51054794980,SFO-OKC-FSD 5,ERJ-175,https://www.airlines-manager.com/network/showline/46719652,https://www.airlines-manager.com/network/showflight/51054794980,https://www.airlines-manager.com/aircraft/show/107132310,9:30,14:29,112,"$151,295.00","$131,528.00"
SFO - TUS,51060918846,SFO-OKC-FSD 4,737-900ER,https://www.airlines-manager.com/network/showline/46719652,https://www.airlines-manager.com/network/showflight/51060918846,https://www.airlines-manager.com/aircraft/show/107160381,10:30,15:29,320,"$317,409.00","$282,248.00"
SFO - TUS,51071689609,SFO-OKC-FSD 3,737-900ER,https://www.airlines-manager.com/network/showline/46719652,https://www.airlines-manager.com/network/showflight/51071689609,https://www.airlines-manager.com/aircraft/show/107160380,16:00,20:59,320,"$317,409.00","$282,248.00"
SFO - TUS,51086541045,SFO-OKC-FSD 2,737-900ER,https://www.airlines-manager.com/network/showline/46719652,https://www.airlines-manager.com/network/showflight/51086541045,https://www.airlines-manager.com/aircraft/show/107160379,23:30,4:29,320,"$317,409.00","$282,248.00"
SFO - YVR,51043595437,SFO-MSY-STL 2,737-900ER,https://www.airlines-manager.com/network/showline/44531535,https://www.airlines-manager.com/network/showflight/51043595437,https://www.airlines-manager.com/aircraft/show/98075266,0:45,5:59,320,"$329,614.00","$288,651.00"
SFO - YVR,51043595438,SFO-MSY-STL 4,737-900ER,https://www.airlines-manager.com/network/showline/44531535,https://www.airlines-manager.com/network/showflight/51043595438,https://www.airlines-manager.com/aircraft/show/98075264,2:45,7:59,320,"$329,614.00","$288,651.00"
SFO - YVR,51054794925,SFO-MSY-STL 1,737-900ER,https://www.airlines-manager.com/network/showline/44531535,https://www.airlines-manager.com/network/showflight/51054794925,https://www.airlines-manager.com/aircraft/show/98075267,7:15,12:29,320,"$329,614.00","$288,651.00"
SFO - YVR,51071689628,SFO-MSY-STL 3,737-900ER,https://www.airlines-manager.com/network/showline/44531535,https://www.airlines-manager.com/network/showflight/51071689628,https://www.airlines-manager.com/aircraft/show/98075265,16:00,21:14,320,"$329,614.00","$288,651.00"
SFO - YVR,51077491394,SFO-MSY-STL 5,737-900ER,https://www.airlines-manager.com/network/showline/44531535,https://www.airlines-manager.com/network/showflight/51077491394,https://www.airlines-manager.com/aircraft/show/98075263,18:00,23:14,320,"$329,614.00","$288,651.00"
SFO - YVR,51082169911,SFO-MSY-STL 6,ERJ-175,https://www.airlines-manager.com/network/showline/44531535,https://www.airlines-manager.com/network/showflight/51082169911,https://www.airlines-manager.com/aircraft/show/103534666,21:45,2:59,112,"$156,262.00","$133,448.00"`;