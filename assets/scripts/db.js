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
		city: 'Saint John\'s, Antigua and Barbuda 🇦🇬',
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
		city: 'Hamilton, Bermuda 🇧🇲',
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
		city: 'Christ Church, Barbados 🇧🇧',
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
		name: 'Brasília International Airport (BSB)',
		city: 'Brasília, Brazil 🇧🇷',
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
		name: 'Cancún International Airport (CUN)',
		city: 'Cancún, Mexico 🇲🇽',
		pos: [21.04198345163572, -86.87396332895656],
		hubs: ['ewr', 'iah'],
		tz: 'America/Cancun'
	},
	{
		name: 'Curaçao International Airport (CUR)',
		city: 'Willemstad, Curaçao 🇨🇼',
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
		city: 'Dubai, United Arab Emirates 🇦🇪',
		pos: [25.25309661391826, 55.36567275706557],
		hubs: ['sfo'],
		tz: 'Asia/Dubai'
	},
	{
		name: 'Edinburgh Airport (EDI)',
		city: 'Edinburgh, United Kingdom 🇬🇧',
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
		name: 'São Paulo/Guarulhos International Airport (GRU)',
		city: 'São Paulo, Brazil 🇧🇷',
		pos: [-23.4301397120531, -46.47291429752642],
		hubs: ['iah'],
		tz: 'Brazil/East'
	},
	{
		name: 'Antonio B. Won Pat International Airport (GUM)',
		city: 'Guam 🇬🇺, US Territories',
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
		name: 'Keflavík International Airport (KEF)',
		city: 'Reykjavík, Iceland 🇮🇸',
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
		city: 'London, United Kingdom 🇬🇧',
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
		city: 'Pago Pago, American Samoa 🇦🇸, US Territories',
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
		city: 'Basseterre, Saint Kitts & Nevis 🇰🇳',
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
		city: 'Sint Maarten 🇸🇽',
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
		city: 'San José del Cabo, Mexico 🇲🇽',
		pos: [23.1456048417308, -109.71832014651572],
		hubs: ['iah'],
		tz: 'Mexico/BajaSur'
	},
	{
		name: 'Luis Munoz Marin International Airport (SJU)',
		city: 'San Juan, Puerto Rico 🇵🇷, US Territories',
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
		city: 'Taipei, Taiwan 🇹🇼',
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
		city: 'Ottawa, Canada 🇨🇦',
		pos: [45.31923461124119, -75.66914374429483],
		hubs: ['ewr', 'iah'],
		tz: 'Canada/Eastern'
	},
	{
		name: 'Montreal-Pierre Elliott Trudeau International Airport (YUL)',
		city: 'Montreal, Canada 🇨🇦',
		pos: [45.461698664876224, -73.7478869554127],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'Canada/Eastern'
	},
	{
		name: 'Calgary International Airport (YYC)',
		city: 'Calgary, Canada 🇨🇦',
		pos: [51.12150310000004, -114.00819495762246],
		hubs: ['ewr', 'iah', 'mia'],
		tz: 'Canada/Mountain'
	},
	{
		name: 'Vancouver International Airport (YVR)',
		city: 'Vancouver, Canada 🇨🇦',
		pos: [49.19675521104217, -123.18147272578588],
		hubs: ['ewr', 'sfo', 'iah', 'mia', 'hnl'],
		tz: 'Canada/Pacific'
	},
	{
		name: 'Toronto Pearson International Airport (YYZ)',
		city: 'Toronto, Canada 🇨🇦',
		pos: [43.67779523959123, -79.6247972173393],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
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
EWR - ABQ,51335558200,EWR-ABQ-AUS 2,A321-200,https://www.airlines-manager.com/network/showline/43845061,https://www.airlines-manager.com/network/showflight/51335558200,https://www.airlines-manager.com/aircraft/show/90717078,0:45,9:59,310,"$572,422.00","$526,446.00"
EWR - ABQ,51335558201,EWR-ABQ-AUS 5,A321-200,https://www.airlines-manager.com/network/showline/43845061,https://www.airlines-manager.com/network/showflight/51335558201,https://www.airlines-manager.com/aircraft/show/95950199,2:45,11:59,310,"$572,422.00","$526,446.00"
EWR - ABQ,51347850939,EWR-ABQ-AUS 1,A321-200,https://www.airlines-manager.com/network/showline/43845061,https://www.airlines-manager.com/network/showflight/51347850939,https://www.airlines-manager.com/aircraft/show/90717079,10:00,19:14,310,"$572,422.00","$526,446.00"
EWR - ABQ,51363387439,EWR-ABQ-AUS 3,A321-200,https://www.airlines-manager.com/network/showline/43845061,https://www.airlines-manager.com/network/showflight/51363387439,https://www.airlines-manager.com/aircraft/show/90717077,16:45,1:59,310,"$572,422.00","$526,446.00"
EWR - ABQ,51363387440,EWR-ABQ-AUS 4,A321-200,https://www.airlines-manager.com/network/showline/43845061,https://www.airlines-manager.com/network/showflight/51363387440,https://www.airlines-manager.com/aircraft/show/90717076,17:45,2:59,310,"$572,422.00","$526,446.00"
EWR - AMS,51347851223,EWR 56B-5 B1,777-300,https://www.airlines-manager.com/network/showline/42008197,https://www.airlines-manager.com/network/showflight/51347851223,https://www.airlines-manager.com/aircraft/show/94521253,11:30,2:44,748,"$2,314,855.00","$2,070,029.00"
EWR - AMS,51355083317,EWR 56B-3 B1,777-300,https://www.airlines-manager.com/network/showline/42008197,https://www.airlines-manager.com/network/showflight/51355083317,https://www.airlines-manager.com/aircraft/show/90656555,13:15,4:29,748,"$2,314,855.00","$2,070,029.00"
EWR - AMS,51355083318,EWR 56B-1 B1,777-300,https://www.airlines-manager.com/network/showline/42008197,https://www.airlines-manager.com/network/showflight/51355083318,https://www.airlines-manager.com/aircraft/show/94521251,15:00,6:14,748,"$2,073,637.00","$1,890,446.00"
EWR - ANC,51335558588,EWR CARGO 1,A321neo-LR,https://www.airlines-manager.com/network/showline/44793460,https://www.airlines-manager.com/network/showflight/51335558588,https://www.airlines-manager.com/aircraft/show/103406580,4:00,18:59,0,"$313,356.00","$249,502.00"
EWR - ANC,51347851001,EWR-STL-PIT 3,737-900ER,https://www.airlines-manager.com/network/showline/44793460,https://www.airlines-manager.com/network/showflight/51347851001,https://www.airlines-manager.com/aircraft/show/98936169,10:00,0:59,320,"$926,056.00","$853,165.00"
EWR - ANC,51355083312,EWR-STL-PIT 2,737-900ER,https://www.airlines-manager.com/network/showline/44793460,https://www.airlines-manager.com/network/showflight/51355083312,https://www.airlines-manager.com/aircraft/show/98936170,13:15,4:14,320,"$926,056.00","$853,165.00"
EWR - ANC,51363387597,EWR-STL-PIT 1,737-900ER,https://www.airlines-manager.com/network/showline/44793460,https://www.airlines-manager.com/network/showflight/51363387597,https://www.airlines-manager.com/aircraft/show/98936171,18:45,9:44,320,"$926,056.00","$853,165.00"
EWR - ANC,51370307113,EWR-STL-PIT 4,737-900ER,https://www.airlines-manager.com/network/showline/44793460,https://www.airlines-manager.com/network/showflight/51370307113,https://www.airlines-manager.com/aircraft/show/98936168,21:45,12:44,320,"$837,183.00","$773,340.00"
EWR - ATH,51335558084,EWR 84A-1 B2,777-300,https://www.airlines-manager.com/network/showline/39747655,https://www.airlines-manager.com/network/showflight/51335558084,https://www.airlines-manager.com/aircraft/show/90656554,0:00,19:59,852,"$3,228,020.00","$2,935,727.00"
EWR - ATH,51370306940,EWR 84A-5 B2,777-300,https://www.airlines-manager.com/network/showline/39747655,https://www.airlines-manager.com/network/showflight/51370306940,https://www.airlines-manager.com/aircraft/show/94521250,19:45,15:44,852,"$3,228,020.00","$2,935,727.00"
EWR - ATL,51347850920,EWR-DFW-ATL 1,737-900ER,https://www.airlines-manager.com/network/showline/39256202,https://www.airlines-manager.com/network/showflight/51347850920,https://www.airlines-manager.com/aircraft/show/90489724,10:00,14:59,320,"$315,832.00","$254,515.00"
EWR - ATL,51355083399,EWR-DFW-ATL 3,737-900ER,https://www.airlines-manager.com/network/showline/39256202,https://www.airlines-manager.com/network/showflight/51355083399,https://www.airlines-manager.com/aircraft/show/90489726,14:15,19:14,320,"$315,832.00","$254,515.00"
EWR - ATL,51363387520,EWR-DFW-ATL 2,737-900ER,https://www.airlines-manager.com/network/showline/39256202,https://www.airlines-manager.com/network/showflight/51363387520,https://www.airlines-manager.com/aircraft/show/90489725,17:30,22:29,320,"$315,832.00","$254,515.00"
EWR - ATL,51363387521,EWR-DFW-ATL 6 B,A319-100,https://www.airlines-manager.com/network/showline/39256202,https://www.airlines-manager.com/network/showflight/51363387521,https://www.airlines-manager.com/aircraft/show/105222360,18:30,23:29,198,"$240,625.00","$198,555.00"
EWR - ATL,51370306931,EWR-DFW-ATL 5,737-900ER,https://www.airlines-manager.com/network/showline/39256202,https://www.airlines-manager.com/network/showflight/51370306931,https://www.airlines-manager.com/aircraft/show/86238752,19:45,0:44,320,"$315,832.00","$254,515.00"
EWR - ATL,51370306932,EWR-DFW-ATL 4,737-900ER,https://www.airlines-manager.com/network/showline/39256202,https://www.airlines-manager.com/network/showflight/51370306932,https://www.airlines-manager.com/aircraft/show/86238753,22:15,3:14,320,"$315,832.00","$254,515.00"
EWR - AUS,51335558427,EWR-ABQ-AUS 3,A321-200,https://www.airlines-manager.com/network/showline/43845077,https://www.airlines-manager.com/network/showflight/51335558427,https://www.airlines-manager.com/aircraft/show/90717077,2:00,9:59,310,"$498,452.00","$457,208.00"
EWR - AUS,51335558428,EWR-ABQ-AUS 4,A321-200,https://www.airlines-manager.com/network/showline/43845077,https://www.airlines-manager.com/network/showflight/51335558428,https://www.airlines-manager.com/aircraft/show/90717076,3:00,10:59,310,"$498,452.00","$457,208.00"
EWR - AUS,51347850940,EWR-ABQ-AUS 2,A321-200,https://www.airlines-manager.com/network/showline/43845077,https://www.airlines-manager.com/network/showflight/51347850940,https://www.airlines-manager.com/aircraft/show/90717078,10:00,17:59,310,"$498,452.00","$457,208.00"
EWR - AUS,51347850941,EWR-ABQ-AUS 5,A321-200,https://www.airlines-manager.com/network/showline/43845077,https://www.airlines-manager.com/network/showflight/51347850941,https://www.airlines-manager.com/aircraft/show/95950199,12:00,19:59,310,"$498,452.00","$457,208.00"
EWR - AUS,51363387611,EWR-ABQ-AUS 1,A321-200,https://www.airlines-manager.com/network/showline/43845077,https://www.airlines-manager.com/network/showflight/51363387611,https://www.airlines-manager.com/aircraft/show/90717079,19:15,3:14,310,"$498,452.00","$457,208.00"
EWR - BCN,51363387251,EWR 84A-6 B2,777-300,https://www.airlines-manager.com/network/showline/39983692,https://www.airlines-manager.com/network/showflight/51363387251,https://www.airlines-manager.com/aircraft/show/90656552,15:45,7:44,852,"$2,610,020.00","$2,367,723.00"
EWR - BCN,51370306985,EWR 84A-3 B2,777-300,https://www.airlines-manager.com/network/showline/39983692,https://www.airlines-manager.com/network/showflight/51370306985,https://www.airlines-manager.com/aircraft/show/90656553,20:00,11:59,852,"$2,610,020.00","$2,367,723.00"
EWR - BDL,51335558247,EWR-COS-ICT 4,A321-200,https://www.airlines-manager.com/network/showline/47218149,https://www.airlines-manager.com/network/showflight/51335558247,https://www.airlines-manager.com/aircraft/show/108834811,1:00,3:29,310,"$89,172.00","$70,844.00"
EWR - BDL,51347850861,EWR-COS-ICT 5,ERJ-175,https://www.airlines-manager.com/network/showline/47218149,https://www.airlines-manager.com/network/showflight/51347850861,https://www.airlines-manager.com/aircraft/show/108466265,9:30,11:59,112,"$38,296.00","$27,098.00"
EWR - BDL,51355083346,EWR-COS-ICT 3,A321-200,https://www.airlines-manager.com/network/showline/47218149,https://www.airlines-manager.com/network/showflight/51355083346,https://www.airlines-manager.com/aircraft/show/108834810,14:00,16:29,310,"$89,172.00","$70,844.00"
EWR - BDL,51363387275,EWR-COS-ICT 2,A321-200,https://www.airlines-manager.com/network/showline/47218149,https://www.airlines-manager.com/network/showflight/51363387275,https://www.airlines-manager.com/aircraft/show/108834809,16:00,18:29,310,"$89,172.00","$70,844.00"
EWR - BDL,51374354741,EWR-COS-ICT 1,A321-200,https://www.airlines-manager.com/network/showline/47218149,https://www.airlines-manager.com/network/showflight/51374354741,https://www.airlines-manager.com/aircraft/show/108834808,23:00,1:29,310,"$89,172.00","$70,844.00"
EWR - BNA,51335558546,EWR-BNA-JAX 3,A321-200,https://www.airlines-manager.com/network/showline/45849233,https://www.airlines-manager.com/network/showflight/51335558546,https://www.airlines-manager.com/aircraft/show/104610408,3:15,8:14,310,"$321,328.00","$291,988.00"
EWR - BNA,51335558547,EWR-BNA-JAX 2,A321-200,https://www.airlines-manager.com/network/showline/45849233,https://www.airlines-manager.com/network/showflight/51335558547,https://www.airlines-manager.com/aircraft/show/104610409,8:30,13:29,310,"$321,328.00","$291,988.00"
EWR - BNA,51355083286,EWR-BNA-JAX 1,A321-200,https://www.airlines-manager.com/network/showline/45849233,https://www.airlines-manager.com/network/showflight/51355083286,https://www.airlines-manager.com/aircraft/show/104610410,13:00,17:59,310,"$321,328.00","$291,988.00"
EWR - BNA,51363387465,EWR-BNA-JAX 5,ERJ-175,https://www.airlines-manager.com/network/showline/45849233,https://www.airlines-manager.com/network/showflight/51363387465,https://www.airlines-manager.com/aircraft/show/96421247,17:00,21:59,112,"$152,562.00","$133,656.00"
EWR - BNA,51370307086,EWR-BNA-JAX 4,A321-200,https://www.airlines-manager.com/network/showline/45849233,https://www.airlines-manager.com/network/showflight/51370307086,https://www.airlines-manager.com/aircraft/show/104610407,21:15,2:14,310,"$321,328.00","$291,988.00"
EWR - BOI,51335558350,EWR-BOI-PBI 5 B,A319-100,https://www.airlines-manager.com/network/showline/45805680,https://www.airlines-manager.com/network/showflight/51335558350,https://www.airlines-manager.com/aircraft/show/110582846,1:30,11:59,198,"$489,770.00","$451,528.00"
EWR - BOI,51347850987,EWR-BOI-PBI 1,A321-200,https://www.airlines-manager.com/network/showline/45805680,https://www.airlines-manager.com/network/showflight/51347850987,https://www.airlines-manager.com/aircraft/show/104418460,10:00,20:29,310,"$652,062.00","$604,375.00"
EWR - BOI,51355083418,EWR-BOI-PBI 4,A321-200,https://www.airlines-manager.com/network/showline/45805680,https://www.airlines-manager.com/network/showflight/51355083418,https://www.airlines-manager.com/aircraft/show/104418463,15:00,1:29,310,"$652,062.00","$604,375.00"
EWR - BOI,51363387394,EWR-BOI-PBI 3,A321-200,https://www.airlines-manager.com/network/showline/45805680,https://www.airlines-manager.com/network/showflight/51363387394,https://www.airlines-manager.com/aircraft/show/104418462,16:30,2:59,310,"$652,062.00","$604,375.00"
EWR - BOI,51374354772,EWR-BOI-PBI 2,A321-200,https://www.airlines-manager.com/network/showline/45805680,https://www.airlines-manager.com/network/showflight/51374354772,https://www.airlines-manager.com/aircraft/show/104418461,23:30,9:59,310,"$652,062.00","$604,375.00"
EWR - BOS,51335558522,EWR-BWI-BOS 3 E,A319-100,https://www.airlines-manager.com/network/showline/42865564,https://www.airlines-manager.com/network/showflight/51335558522,https://www.airlines-manager.com/aircraft/show/104034464,3:00,5:59,216,"$93,673.00","$73,887.00"
EWR - BOS,51347850975,EWR-BWI-BOS 2 E,A319-100,https://www.airlines-manager.com/network/showline/42865564,https://www.airlines-manager.com/network/showflight/51347850975,https://www.airlines-manager.com/aircraft/show/104034463,10:00,12:59,216,"$93,673.00","$73,887.00"
EWR - BOS,51355083191,EWR-BWI-BOS 1 E,A319-100,https://www.airlines-manager.com/network/showline/42865564,https://www.airlines-manager.com/network/showflight/51355083191,https://www.airlines-manager.com/aircraft/show/104034462,12:45,15:44,216,"$93,673.00","$73,887.00"
EWR - BOS,51355083192,EWR-BWI-BOS 4 E,A319-100,https://www.airlines-manager.com/network/showline/42865564,https://www.airlines-manager.com/network/showflight/51355083192,https://www.airlines-manager.com/aircraft/show/99316501,13:45,16:44,216,"$93,673.00","$73,887.00"
EWR - BOS,51363387468,EWR-BWI-BOS 3 E,A319-100,https://www.airlines-manager.com/network/showline/42865564,https://www.airlines-manager.com/network/showflight/51363387468,https://www.airlines-manager.com/aircraft/show/104034464,17:00,19:59,216,"$93,673.00","$73,887.00"
EWR - BOS,51370306964,EWR-BWI-BOS 2 E,A319-100,https://www.airlines-manager.com/network/showline/42865564,https://www.airlines-manager.com/network/showflight/51370306964,https://www.airlines-manager.com/aircraft/show/104034463,20:00,22:59,216,"$93,673.00","$73,887.00"
EWR - BOS,51374354703,EWR-BWI-BOS 1 E,A319-100,https://www.airlines-manager.com/network/showline/42865564,https://www.airlines-manager.com/network/showflight/51374354703,https://www.airlines-manager.com/aircraft/show/104034462,22:45,1:44,216,"$93,673.00","$73,887.00"
EWR - BOS,51374354704,EWR-BWI-BOS 4 E,A319-100,https://www.airlines-manager.com/network/showline/42865564,https://www.airlines-manager.com/network/showflight/51374354704,https://www.airlines-manager.com/aircraft/show/99316501,23:45,2:44,216,"$93,673.00","$73,887.00"
EWR - BUF,51335558672,EWR-IND-RDU 5,ERJ-175,https://www.airlines-manager.com/network/showline/46242100,https://www.airlines-manager.com/network/showflight/51335558672,https://www.airlines-manager.com/aircraft/show/106104450,5:30,8:44,112,"$70,402.00","$57,598.00"
EWR - BUF,51347851164,EWR-IND-RDU 4,737-900ER,https://www.airlines-manager.com/network/showline/46242100,https://www.airlines-manager.com/network/showflight/51347851164,https://www.airlines-manager.com/aircraft/show/105731236,11:00,14:14,320,"$153,680.00","$129,710.00"
EWR - BUF,51355083413,EWR-IND-RDU 3,737-900ER,https://www.airlines-manager.com/network/showline/46242100,https://www.airlines-manager.com/network/showflight/51355083413,https://www.airlines-manager.com/aircraft/show/88494376,14:45,17:59,320,"$153,680.00","$129,710.00"
EWR - BUF,51363387581,EWR-IND-RDU 2,737-900ER,https://www.airlines-manager.com/network/showline/46242100,https://www.airlines-manager.com/network/showflight/51363387581,https://www.airlines-manager.com/aircraft/show/88494377,18:30,21:44,320,"$153,680.00","$129,710.00"
EWR - BUF,51374354738,EWR-IND-RDU 1,737-900ER,https://www.airlines-manager.com/network/showline/46242100,https://www.airlines-manager.com/network/showflight/51374354738,https://www.airlines-manager.com/aircraft/show/88494375,23:00,2:14,320,"$153,680.00","$129,710.00"
EWR - BWI,51335558117,EWR-BWI-BOS 3 E,A319-100,https://www.airlines-manager.com/network/showline/40109052,https://www.airlines-manager.com/network/showflight/51335558117,https://www.airlines-manager.com/aircraft/show/104034464,0:15,2:59,216,"$74,422.00","$55,852.00"
EWR - BWI,51335558118,EWR-BWI-BOS 2 E,A319-100,https://www.airlines-manager.com/network/showline/40109052,https://www.airlines-manager.com/network/showflight/51335558118,https://www.airlines-manager.com/aircraft/show/104034463,3:15,5:59,216,"$74,422.00","$55,852.00"
EWR - BWI,51347850957,EWR-BWI-BOS 1 E,A319-100,https://www.airlines-manager.com/network/showline/40109052,https://www.airlines-manager.com/network/showflight/51347850957,https://www.airlines-manager.com/aircraft/show/104034462,10:00,12:44,216,"$74,422.00","$55,852.00"
EWR - BWI,51347850959,EWR-BWI-BOS 4 E,A319-100,https://www.airlines-manager.com/network/showline/40109052,https://www.airlines-manager.com/network/showflight/51347850959,https://www.airlines-manager.com/aircraft/show/99316501,11:00,13:44,216,"$74,422.00","$55,852.00"
EWR - BWI,51355083396,EWR-BWI-BOS 3 E,A319-100,https://www.airlines-manager.com/network/showline/40109052,https://www.airlines-manager.com/network/showflight/51355083396,https://www.airlines-manager.com/aircraft/show/104034464,14:15,16:59,216,"$74,422.00","$55,852.00"
EWR - BWI,51363387505,EWR-BWI-BOS 2 E,A319-100,https://www.airlines-manager.com/network/showline/40109052,https://www.airlines-manager.com/network/showflight/51363387505,https://www.airlines-manager.com/aircraft/show/104034463,17:15,19:59,216,"$74,422.00","$55,852.00"
EWR - BWI,51370306962,EWR-BWI-BOS 1 E,A319-100,https://www.airlines-manager.com/network/showline/40109052,https://www.airlines-manager.com/network/showflight/51370306962,https://www.airlines-manager.com/aircraft/show/104034462,20:00,22:44,216,"$74,422.00","$55,852.00"
EWR - BWI,51370306963,EWR-BWI-BOS 4 E,A319-100,https://www.airlines-manager.com/network/showline/40109052,https://www.airlines-manager.com/network/showflight/51370306963,https://www.airlines-manager.com/aircraft/show/99316501,21:00,23:44,216,"$74,422.00","$55,852.00"
EWR - CDG,51335558502,EWR 56A-6 B1,777-300,https://www.airlines-manager.com/network/showline/40043578,https://www.airlines-manager.com/network/showflight/51335558502,https://www.airlines-manager.com/aircraft/show/106813012,3:00,18:14,748,"$2,326,318.00","$2,065,887.00"
EWR - CDG,51347850752,EWR 56A-7 B1,777-300,https://www.airlines-manager.com/network/showline/40043578,https://www.airlines-manager.com/network/showflight/51347850752,https://www.airlines-manager.com/aircraft/show/106813013,8:45,23:59,748,"$2,326,318.00","$2,065,887.00"
EWR - CDG,51363387606,EWR 56A-3 B1,777-300,https://www.airlines-manager.com/network/showline/40043578,https://www.airlines-manager.com/network/showflight/51363387606,https://www.airlines-manager.com/aircraft/show/106813009,19:00,10:14,560,"$1,742,985.00","$1,565,974.00"
EWR - CHS,51335558721,EWR-TUL-DSM 1,A321-200,https://www.airlines-manager.com/network/showline/47540556,https://www.airlines-manager.com/network/showflight/51335558721,https://www.airlines-manager.com/aircraft/show/110044463,8:30,12:59,310,"$288,364.00","$263,420.00"
EWR - CHS,51347851257,EWR-TUL-DSM 5,ERJ-175,https://www.airlines-manager.com/network/showline/47540556,https://www.airlines-manager.com/network/showflight/51347851257,https://www.airlines-manager.com/aircraft/show/110113039,12:00,16:29,112,"$137,652.00","$121,589.00"
EWR - CHS,51355083406,EWR-TUL-DSM 4,A321-200,https://www.airlines-manager.com/network/showline/47540556,https://www.airlines-manager.com/network/showflight/51355083406,https://www.airlines-manager.com/aircraft/show/110044466,14:15,18:44,310,"$288,364.00","$263,420.00"
EWR - CHS,51370307089,EWR-TUL-DSM 3,A321-200,https://www.airlines-manager.com/network/showline/47540556,https://www.airlines-manager.com/network/showflight/51370307089,https://www.airlines-manager.com/aircraft/show/110044465,21:15,1:44,310,"$288,364.00","$263,420.00"
EWR - CHS,51374354734,EWR-TUL-DSM 2,A321-200,https://www.airlines-manager.com/network/showline/47540556,https://www.airlines-manager.com/network/showflight/51374354734,https://www.airlines-manager.com/aircraft/show/110044464,23:00,3:29,279,"$271,521.00","$247,111.00"
EWR - CLE,51335558365,EWR-IND-RDU 5,ERJ-175,https://www.airlines-manager.com/network/showline/46250227,https://www.airlines-manager.com/network/showflight/51335558365,https://www.airlines-manager.com/aircraft/show/106104450,1:45,5:29,112,"$91,694.00","$77,115.00"
EWR - CLE,51335558366,EWR-IND-RDU 4,737-900ER,https://www.airlines-manager.com/network/showline/46250227,https://www.airlines-manager.com/network/showflight/51335558366,https://www.airlines-manager.com/aircraft/show/105731236,5:00,8:44,320,"$197,548.00","$170,734.00"
EWR - CLE,51347851157,EWR-IND-RDU 3,737-900ER,https://www.airlines-manager.com/network/showline/46250227,https://www.airlines-manager.com/network/showflight/51347851157,https://www.airlines-manager.com/aircraft/show/88494376,11:00,14:44,320,"$197,548.00","$170,734.00"
EWR - CLE,51355083411,EWR-IND-RDU 2,737-900ER,https://www.airlines-manager.com/network/showline/46250227,https://www.airlines-manager.com/network/showflight/51355083411,https://www.airlines-manager.com/aircraft/show/88494377,14:45,18:29,320,"$197,548.00","$170,734.00"
EWR - CLE,51363387621,EWR-IND-RDU 1,737-900ER,https://www.airlines-manager.com/network/showline/46250227,https://www.airlines-manager.com/network/showflight/51363387621,https://www.airlines-manager.com/aircraft/show/88494375,19:15,22:59,320,"$197,548.00","$170,734.00"
EWR - CLT,51335558368,EWR-BWI-BOS 1 E,A319-100,https://www.airlines-manager.com/network/showline/39273490,https://www.airlines-manager.com/network/showflight/51335558368,https://www.airlines-manager.com/aircraft/show/104034462,1:45,5:59,216,"$189,113.00","$162,602.00"
EWR - CLT,51335558369,EWR-BWI-BOS 4 E,A319-100,https://www.airlines-manager.com/network/showline/39273490,https://www.airlines-manager.com/network/showflight/51335558369,https://www.airlines-manager.com/aircraft/show/99316501,2:45,6:59,216,"$189,113.00","$162,602.00"
EWR - CLT,51347850977,EWR-BWI-BOS 3 E,A319-100,https://www.airlines-manager.com/network/showline/39273490,https://www.airlines-manager.com/network/showflight/51347850977,https://www.airlines-manager.com/aircraft/show/104034464,10:00,14:14,216,"$189,113.00","$162,602.00"
EWR - CLT,51355083293,EWR-BWI-BOS 2 E,A319-100,https://www.airlines-manager.com/network/showline/39273490,https://www.airlines-manager.com/network/showflight/51355083293,https://www.airlines-manager.com/aircraft/show/104034463,13:00,17:14,216,"$189,113.00","$162,602.00"
EWR - CLT,51363387259,EWR-BWI-BOS 1 E,A319-100,https://www.airlines-manager.com/network/showline/39273490,https://www.airlines-manager.com/network/showflight/51363387259,https://www.airlines-manager.com/aircraft/show/104034462,15:45,19:59,216,"$189,113.00","$162,602.00"
EWR - CLT,51363387260,EWR-BWI-BOS 4 E,A319-100,https://www.airlines-manager.com/network/showline/39273490,https://www.airlines-manager.com/network/showflight/51363387260,https://www.airlines-manager.com/aircraft/show/99316501,16:45,20:59,216,"$189,113.00","$162,602.00"
EWR - CLT,51370306965,EWR-BWI-BOS 3 E,A319-100,https://www.airlines-manager.com/network/showline/39273490,https://www.airlines-manager.com/network/showflight/51370306965,https://www.airlines-manager.com/aircraft/show/104034464,20:00,0:14,216,"$189,113.00","$162,602.00"
EWR - CLT,51374354730,EWR-BWI-BOS 2 E,A319-100,https://www.airlines-manager.com/network/showline/39273490,https://www.airlines-manager.com/network/showflight/51374354730,https://www.airlines-manager.com/aircraft/show/104034463,23:00,3:14,216,"$189,113.00","$162,602.00"
EWR - CMH,51335558627,EWR-BNA-JAX 2,A321-200,https://www.airlines-manager.com/network/showline/45849199,https://www.airlines-manager.com/network/showflight/51335558627,https://www.airlines-manager.com/aircraft/show/104610409,4:30,8:29,310,"$222,475.00","$198,321.00"
EWR - CMH,51335558628,EWR-BNA-JAX 1,A321-200,https://www.airlines-manager.com/network/showline/45849199,https://www.airlines-manager.com/network/showflight/51335558628,https://www.airlines-manager.com/aircraft/show/104610410,8:30,12:29,310,"$222,475.00","$198,321.00"
EWR - CMH,51355083288,EWR-BNA-JAX 5,ERJ-175,https://www.airlines-manager.com/network/showline/45849199,https://www.airlines-manager.com/network/showflight/51355083288,https://www.airlines-manager.com/aircraft/show/96421247,13:00,16:59,112,"$103,627.00","$88,330.00"
EWR - CMH,51363387504,EWR-BNA-JAX 4,A321-200,https://www.airlines-manager.com/network/showline/45849199,https://www.airlines-manager.com/network/showflight/51363387504,https://www.airlines-manager.com/aircraft/show/104610407,17:15,21:14,310,"$222,475.00","$198,321.00"
EWR - CMH,51374354757,EWR-BNA-JAX 3,A321-200,https://www.airlines-manager.com/network/showline/45849199,https://www.airlines-manager.com/network/showflight/51374354757,https://www.airlines-manager.com/aircraft/show/104610408,23:15,3:14,310,"$222,475.00","$198,321.00"
EWR - COS,51335558342,EWR-COS-ICT 1,A321-200,https://www.airlines-manager.com/network/showline/47218134,https://www.airlines-manager.com/network/showflight/51335558342,https://www.airlines-manager.com/aircraft/show/108834808,1:30,9:59,310,"$532,516.00","$490,864.00"
EWR - COS,51335558343,EWR-COS-ICT 4,A321-200,https://www.airlines-manager.com/network/showline/47218134,https://www.airlines-manager.com/network/showflight/51335558343,https://www.airlines-manager.com/aircraft/show/108834811,3:30,11:59,310,"$532,516.00","$490,864.00"
EWR - COS,51355083225,EWR-COS-ICT 5,ERJ-175,https://www.airlines-manager.com/network/showline/47218134,https://www.airlines-manager.com/network/showflight/51355083225,https://www.airlines-manager.com/aircraft/show/108466265,13:00,21:29,112,"$250,187.00","$222,369.00"
EWR - COS,51363387379,EWR-COS-ICT 3,A321-200,https://www.airlines-manager.com/network/showline/47218134,https://www.airlines-manager.com/network/showflight/51363387379,https://www.airlines-manager.com/aircraft/show/108834810,16:30,0:59,310,"$532,516.00","$490,864.00"
EWR - COS,51363387380,EWR-COS-ICT 2,A321-200,https://www.airlines-manager.com/network/showline/47218134,https://www.airlines-manager.com/network/showflight/51363387380,https://www.airlines-manager.com/aircraft/show/108834809,18:30,2:59,310,"$532,516.00","$490,864.00"
EWR - CUN,51335558198,EWR-CUN-SJU 3,737-900ER,https://www.airlines-manager.com/network/showline/46524825,https://www.airlines-manager.com/network/showflight/51335558198,https://www.airlines-manager.com/aircraft/show/106581306,0:45,8:44,320,"$519,725.00","$471,949.00"
EWR - CUN,51335558199,EWR-CUN-SJU 2,737-900ER,https://www.airlines-manager.com/network/showline/46524825,https://www.airlines-manager.com/network/showflight/51335558199,https://www.airlines-manager.com/aircraft/show/106581305,2:15,10:14,320,"$519,725.00","$471,949.00"
EWR - CUN,51355083247,EWR-CUN-SJU 1,737-900ER,https://www.airlines-manager.com/network/showline/46524825,https://www.airlines-manager.com/network/showflight/51355083247,https://www.airlines-manager.com/aircraft/show/106581304,13:00,20:59,320,"$519,725.00","$471,949.00"
EWR - CUN,51355083248,EWR-CUN-SJU 4,737-900ER,https://www.airlines-manager.com/network/showline/46524825,https://www.airlines-manager.com/network/showflight/51355083248,https://www.airlines-manager.com/aircraft/show/106581307,14:30,22:29,320,"$519,725.00","$471,949.00"
EWR - CUN,51370307153,EWR-CUN-SJU 5,737-900ER,https://www.airlines-manager.com/network/showline/46524825,https://www.airlines-manager.com/network/showflight/51370307153,https://www.airlines-manager.com/aircraft/show/86238754,22:15,6:14,320,"$519,725.00","$471,949.00"
EWR - CVG,51335558146,EWR-BNA-JAX 2,A321-200,https://www.airlines-manager.com/network/showline/45849223,https://www.airlines-manager.com/network/showflight/51335558146,https://www.airlines-manager.com/aircraft/show/104610409,0:15,4:29,310,"$269,325.00","$241,600.00"
EWR - CVG,51335558147,EWR-BNA-JAX 1,A321-200,https://www.airlines-manager.com/network/showline/45849223,https://www.airlines-manager.com/network/showflight/51335558147,https://www.airlines-manager.com/aircraft/show/104610410,4:15,8:29,310,"$269,325.00","$241,600.00"
EWR - CVG,51335558148,EWR-BNA-JAX 5,ERJ-175,https://www.airlines-manager.com/network/showline/45849223,https://www.airlines-manager.com/network/showflight/51335558148,https://www.airlines-manager.com/aircraft/show/96421247,8:15,12:29,112,"$127,234.00","$109,608.00"
EWR - CVG,51347850835,EWR CARGO 2,737-700,https://www.airlines-manager.com/network/showline/45849223,https://www.airlines-manager.com/network/showflight/51347850835,https://www.airlines-manager.com/aircraft/show/107576645,9:00,13:14,0,"$68,907.00","$49,985.00"
EWR - CVG,51355083289,EWR-BNA-JAX 4,A321-200,https://www.airlines-manager.com/network/showline/45849223,https://www.airlines-manager.com/network/showflight/51355083289,https://www.airlines-manager.com/aircraft/show/104610407,13:00,17:14,310,"$269,325.00","$241,600.00"
EWR - CVG,51363387605,EWR-BNA-JAX 3,A321-200,https://www.airlines-manager.com/network/showline/45849223,https://www.airlines-manager.com/network/showflight/51363387605,https://www.airlines-manager.com/aircraft/show/104610408,19:00,23:14,310,"$269,325.00","$241,600.00"
EWR - DEN,51335558396,EWR-DEN-SLC 1,A321-200,https://www.airlines-manager.com/network/showline/39261033,https://www.airlines-manager.com/network/showflight/51335558396,https://www.airlines-manager.com/aircraft/show/86270785,1:45,9:59,310,"$528,111.00","$464,005.00"
EWR - DEN,51335558397,EWR-DEN-SLC 4,A321-200,https://www.airlines-manager.com/network/showline/39261033,https://www.airlines-manager.com/network/showflight/51335558397,https://www.airlines-manager.com/aircraft/show/90452835,2:45,10:59,310,"$528,111.00","$464,005.00"
EWR - DEN,51347850925,EWR-DEN-SLC 2,A321-200,https://www.airlines-manager.com/network/showline/39261033,https://www.airlines-manager.com/network/showflight/51347850925,https://www.airlines-manager.com/aircraft/show/87153196,10:00,18:14,310,"$528,111.00","$464,005.00"
EWR - DEN,51347850927,EWR-DEN-SLC 3,A321-200,https://www.airlines-manager.com/network/showline/39261033,https://www.airlines-manager.com/network/showflight/51347850927,https://www.airlines-manager.com/aircraft/show/86270783,11:00,19:14,310,"$528,111.00","$464,005.00"
EWR - DEN,51363387286,EWR-DEN-SLC 5,A321-200,https://www.airlines-manager.com/network/showline/39261033,https://www.airlines-manager.com/network/showflight/51363387286,https://www.airlines-manager.com/aircraft/show/90452833,16:00,0:14,310,"$528,111.00","$464,005.00"
EWR - DEN,51363387287,EWR-DEN-SLC 6 B,A319-100,https://www.airlines-manager.com/network/showline/39261033,https://www.airlines-manager.com/network/showflight/51363387287,https://www.airlines-manager.com/aircraft/show/105223076,17:00,1:14,198,"$397,864.00","$346,510.00"
EWR - DFW,51335558463,EWR-DFW-ATL 1,737-900ER,https://www.airlines-manager.com/network/showline/39279932,https://www.airlines-manager.com/network/showflight/51335558463,https://www.airlines-manager.com/aircraft/show/90489724,2:30,9:59,320,"$472,448.00","$407,333.00"
EWR - DFW,51335558464,EWR-DFW-ATL 4,737-900ER,https://www.airlines-manager.com/network/showline/39279932,https://www.airlines-manager.com/network/showflight/51335558464,https://www.airlines-manager.com/aircraft/show/86238753,3:30,10:59,320,"$472,448.00","$407,333.00"
EWR - DFW,51347850997,EWR-DFW-ATL 2,737-900ER,https://www.airlines-manager.com/network/showline/39279932,https://www.airlines-manager.com/network/showflight/51347850997,https://www.airlines-manager.com/aircraft/show/90489725,10:00,17:29,320,"$472,448.00","$407,333.00"
EWR - DFW,51347850998,EWR-DFW-ATL 6 B,A319-100,https://www.airlines-manager.com/network/showline/39279932,https://www.airlines-manager.com/network/showflight/51347850998,https://www.airlines-manager.com/aircraft/show/105222360,11:00,18:29,198,"$357,260.00","$311,658.00"
EWR - DFW,51347850999,EWR-DFW-ATL 5,737-900ER,https://www.airlines-manager.com/network/showline/39279932,https://www.airlines-manager.com/network/showflight/51347850999,https://www.airlines-manager.com/aircraft/show/86238752,12:15,19:44,320,"$472,448.00","$407,333.00"
EWR - DFW,51363387612,EWR-DFW-ATL 3,737-900ER,https://www.airlines-manager.com/network/showline/39279932,https://www.airlines-manager.com/network/showflight/51363387612,https://www.airlines-manager.com/aircraft/show/90489726,19:15,2:44,320,"$472,448.00","$407,333.00"
EWR - DSM,51335558400,EWR-TUL-DSM 5,ERJ-175,https://www.airlines-manager.com/network/showline/47540558,https://www.airlines-manager.com/network/showflight/51335558400,https://www.airlines-manager.com/aircraft/show/110113039,2:00,7:59,112,"$177,241.00","$157,201.00"
EWR - DSM,51335558401,EWR-TUL-DSM 4,A321-200,https://www.airlines-manager.com/network/showline/47540558,https://www.airlines-manager.com/network/showflight/51335558401,https://www.airlines-manager.com/aircraft/show/110044466,4:15,10:14,310,"$374,811.00","$344,361.00"
EWR - DSM,51347851255,EWR-TUL-DSM 3,A321-200,https://www.airlines-manager.com/network/showline/47540558,https://www.airlines-manager.com/network/showflight/51347851255,https://www.airlines-manager.com/aircraft/show/110044465,12:00,17:59,310,"$374,811.00","$344,361.00"
EWR - DSM,51355083326,EWR-TUL-DSM 2,A321-200,https://www.airlines-manager.com/network/showline/47540558,https://www.airlines-manager.com/network/showflight/51355083326,https://www.airlines-manager.com/aircraft/show/110044464,13:45,19:44,310,"$374,811.00","$344,361.00"
EWR - DSM,51374354674,EWR-TUL-DSM 1,A321-200,https://www.airlines-manager.com/network/showline/47540558,https://www.airlines-manager.com/network/showflight/51374354674,https://www.airlines-manager.com/aircraft/show/110044463,22:30,4:29,274,"$348,977.00","$319,527.00"
EWR - DTW,51335558557,EWR-DTW-YYZ 5,737-900ER,https://www.airlines-manager.com/network/showline/42493159,https://www.airlines-manager.com/network/showflight/51335558557,https://www.airlines-manager.com/aircraft/show/92003921,3:30,7:29,320,"$225,671.00","$188,424.00"
EWR - DTW,51347851076,EWR-DTW-YYZ 1,737-900ER,https://www.airlines-manager.com/network/showline/42493159,https://www.airlines-manager.com/network/showflight/51347851076,https://www.airlines-manager.com/aircraft/show/92003925,10:00,13:59,320,"$225,671.00","$188,424.00"
EWR - DTW,51355083324,EWR-DTW-YYZ 2,737-900ER,https://www.airlines-manager.com/network/showline/42493159,https://www.airlines-manager.com/network/showflight/51355083324,https://www.airlines-manager.com/aircraft/show/92003924,13:30,17:29,320,"$225,671.00","$188,424.00"
EWR - DTW,51370307110,EWR-DTW-YYZ 3,737-900ER,https://www.airlines-manager.com/network/showline/42493159,https://www.airlines-manager.com/network/showflight/51370307110,https://www.airlines-manager.com/aircraft/show/92003923,21:45,1:44,320,"$225,671.00","$188,424.00"
EWR - DTW,51370307111,EWR-DTW-YYZ 4,737-900ER,https://www.airlines-manager.com/network/showline/42493159,https://www.airlines-manager.com/network/showflight/51370307111,https://www.airlines-manager.com/aircraft/show/92003922,22:15,2:14,320,"$225,671.00","$188,424.00"
EWR - DTW,51374354701,EWR CARGO 1,A321neo-LR,https://www.airlines-manager.com/network/showline/42493159,https://www.airlines-manager.com/network/showflight/51374354701,https://www.airlines-manager.com/aircraft/show/103406580,22:45,2:44,0,"$77,012.00","$45,858.00"
EWR - DUB,51335558549,EWR 56C-3 F,787-10,https://www.airlines-manager.com/network/showline/46569727,https://www.airlines-manager.com/network/showflight/51335558549,https://www.airlines-manager.com/aircraft/show/106721558,3:30,16:59,598,"$1,651,220.00","$1,539,956.00"
EWR - DUB,51335558550,EWR 56C-5 F,787-10,https://www.airlines-manager.com/network/showline/46569727,https://www.airlines-manager.com/network/showflight/51335558550,https://www.airlines-manager.com/aircraft/show/106721560,5:15,18:44,598,"$1,651,220.00","$1,539,956.00"
EWR - DUB,51347851120,EWR 56C-7 F,787-10,https://www.airlines-manager.com/network/showline/46569727,https://www.airlines-manager.com/network/showflight/51347851120,https://www.airlines-manager.com/aircraft/show/106721562,10:30,23:59,598,"$1,651,220.00","$1,539,956.00"
EWR - EDI,51335558610,EWR 56C-4 F,787-10,https://www.airlines-manager.com/network/showline/46569734,https://www.airlines-manager.com/network/showflight/51335558610,https://www.airlines-manager.com/aircraft/show/106721559,4:15,17:59,598,"$1,636,319.00","$1,529,028.00"
EWR - EDI,51335558611,EWR 56C-6 F,787-10,https://www.airlines-manager.com/network/showline/46569734,https://www.airlines-manager.com/network/showflight/51335558611,https://www.airlines-manager.com/aircraft/show/106721561,6:00,19:44,598,"$1,636,319.00","$1,529,028.00"
EWR - EDI,51370306937,EWR 56C-6 F,787-10,https://www.airlines-manager.com/network/showline/46569734,https://www.airlines-manager.com/network/showflight/51370306937,https://www.airlines-manager.com/aircraft/show/106721561,19:45,9:29,598,"$1,636,319.00","$1,529,028.00"
EWR - ELP,51335558157,EWR-ELP-SAT 2,737-900ER,https://www.airlines-manager.com/network/showline/45334027,https://www.airlines-manager.com/network/showflight/51335558157,https://www.airlines-manager.com/aircraft/show/103365577,0:30,9:59,320,"$589,315.00","$539,533.00"
EWR - ELP,51335558158,EWR-ELP-SAT 5 B,A319-100,https://www.airlines-manager.com/network/showline/45334027,https://www.airlines-manager.com/network/showflight/51335558158,https://www.airlines-manager.com/aircraft/show/110582847,2:30,11:59,198,"$444,188.00","$407,985.00"
EWR - ELP,51347850873,EWR-ELP-SAT 1,737-900ER,https://www.airlines-manager.com/network/showline/45334027,https://www.airlines-manager.com/network/showflight/51347850873,https://www.airlines-manager.com/aircraft/show/103365578,10:00,19:29,320,"$589,315.00","$539,533.00"
EWR - ELP,51347850874,EWR-ELP-SAT 4,737-900ER,https://www.airlines-manager.com/network/showline/45334027,https://www.airlines-manager.com/network/showflight/51347850874,https://www.airlines-manager.com/aircraft/show/103365575,12:00,21:29,320,"$589,315.00","$539,533.00"
EWR - ELP,51363387360,EWR-ELP-SAT 3,737-900ER,https://www.airlines-manager.com/network/showline/45334027,https://www.airlines-manager.com/network/showflight/51363387360,https://www.airlines-manager.com/aircraft/show/103365576,16:15,1:44,320,"$589,315.00","$539,533.00"
EWR - FAR,51335558380,EWR-LIT-FAR 4,A321-200,https://www.airlines-manager.com/network/showline/48530160,https://www.airlines-manager.com/network/showflight/51335558380,https://www.airlines-manager.com/aircraft/show/86270784,1:45,8:29,310,"$423,689.00","$390,722.00"
EWR - FAR,51335558381,EWR-LIT-FAR 3,A321-200,https://www.airlines-manager.com/network/showline/48530160,https://www.airlines-manager.com/network/showflight/51335558381,https://www.airlines-manager.com/aircraft/show/86270786,5:00,11:44,310,"$423,689.00","$390,722.00"
EWR - FAR,51355083438,EWR-LIT-FAR 2,A321-200,https://www.airlines-manager.com/network/showline/48530160,https://www.airlines-manager.com/network/showflight/51355083438,https://www.airlines-manager.com/aircraft/show/86270787,15:00,21:44,310,"$423,689.00","$390,722.00"
EWR - FAR,51363387617,EWR-LIT-FAR 1,A321-200,https://www.airlines-manager.com/network/showline/48530160,https://www.airlines-manager.com/network/showflight/51363387617,https://www.airlines-manager.com/aircraft/show/90452834,19:15,1:59,309,"$422,877.00","$389,943.00"
EWR - FCO,51335558457,EWR 84A-3 B2,777-300,https://www.airlines-manager.com/network/showline/39865842,https://www.airlines-manager.com/network/showflight/51335558457,https://www.airlines-manager.com/aircraft/show/90656553,2:30,19:59,852,"$2,894,813.00","$2,620,899.00"
EWR - FCO,51347851230,EWR 84A-4 B2,777-300,https://www.airlines-manager.com/network/showline/39865842,https://www.airlines-manager.com/network/showflight/51347851230,https://www.airlines-manager.com/aircraft/show/90656551,12:00,5:29,852,"$2,894,813.00","$2,620,899.00"
EWR - FLL,51335558305,EWR CARGO 2,737-700,https://www.airlines-manager.com/network/showline/42503825,https://www.airlines-manager.com/network/showflight/51335558305,https://www.airlines-manager.com/aircraft/show/107576645,1:15,7:29,0,"$102,588.00","$77,040.00"
EWR - FLL,51335558306,EWR-DTW-YYZ 2,737-900ER,https://www.airlines-manager.com/network/showline/42503825,https://www.airlines-manager.com/network/showflight/51335558306,https://www.airlines-manager.com/aircraft/show/92003924,3:45,9:59,320,"$388,513.00","$348,500.00"
EWR - FLL,51335558307,EWR-DTW-YYZ 4,737-900ER,https://www.airlines-manager.com/network/showline/42503825,https://www.airlines-manager.com/network/showflight/51335558307,https://www.airlines-manager.com/aircraft/show/92003922,5:45,11:59,320,"$388,513.00","$348,500.00"
EWR - FLL,51347851205,EWR-DTW-YYZ 5,737-900ER,https://www.airlines-manager.com/network/showline/42503825,https://www.airlines-manager.com/network/showflight/51347851205,https://www.airlines-manager.com/aircraft/show/92003921,11:00,17:14,320,"$388,513.00","$348,500.00"
EWR - FLL,51347851206,EWR-DTW-YYZ 3,737-900ER,https://www.airlines-manager.com/network/showline/42503825,https://www.airlines-manager.com/network/showflight/51347851206,https://www.airlines-manager.com/aircraft/show/92003923,12:00,18:14,320,"$388,513.00","$348,500.00"
EWR - FLL,51363387515,EWR-DTW-YYZ 1,737-900ER,https://www.airlines-manager.com/network/showline/42503825,https://www.airlines-manager.com/network/showflight/51363387515,https://www.airlines-manager.com/aircraft/show/92003925,17:30,23:44,320,"$388,513.00","$348,500.00"
EWR - FRA,51335558489,EWR 56B-6 B1,777-300,https://www.airlines-manager.com/network/showline/39908990,https://www.airlines-manager.com/network/showflight/51335558489,https://www.airlines-manager.com/aircraft/show/94521248,2:45,18:44,748,"$2,436,227.00","$2,171,323.00"
EWR - FRA,51335558490,EWR 56B-4 B1,777-300,https://www.airlines-manager.com/network/showline/39908990,https://www.airlines-manager.com/network/showflight/51335558490,https://www.airlines-manager.com/aircraft/show/94521247,4:30,20:29,748,"$2,436,227.00","$2,171,323.00"
EWR - FRA,51335558491,EWR 56B-2 B1,777-300,https://www.airlines-manager.com/network/showline/39908990,https://www.airlines-manager.com/network/showflight/51335558491,https://www.airlines-manager.com/aircraft/show/90656556,6:15,22:14,748,"$2,198,646.00","$1,997,654.00"
EWR - FSD,51335558603,EWR-OKC-FSD 3,A321-200,https://www.airlines-manager.com/network/showline/46719736,https://www.airlines-manager.com/network/showflight/51335558603,https://www.airlines-manager.com/aircraft/show/107161240,4:15,10:59,310,"$410,970.00","$378,489.00"
EWR - FSD,51347850833,EWR-OKC-FSD 5,ERJ-175,https://www.airlines-manager.com/network/showline/46719736,https://www.airlines-manager.com/network/showflight/51347850833,https://www.airlines-manager.com/aircraft/show/86782214,9:00,15:44,112,"$193,671.00","$172,141.00"
EWR - FSD,51347850834,EWR-OKC-FSD 2,A321-200,https://www.airlines-manager.com/network/showline/46719736,https://www.airlines-manager.com/network/showflight/51347850834,https://www.airlines-manager.com/aircraft/show/107161239,11:00,17:44,310,"$410,970.00","$378,489.00"
EWR - FSD,51363387214,EWR-OKC-FSD 4,A321-200,https://www.airlines-manager.com/network/showline/46719736,https://www.airlines-manager.com/network/showflight/51363387214,https://www.airlines-manager.com/aircraft/show/107161241,15:15,21:59,310,"$410,970.00","$378,489.00"
EWR - FSD,51363387215,EWR-OKC-FSD 1,A321-200,https://www.airlines-manager.com/network/showline/46719736,https://www.airlines-manager.com/network/showflight/51363387215,https://www.airlines-manager.com/aircraft/show/107161238,18:15,0:59,280,"$387,316.00","$355,797.00"
EWR - IAH,51335558558,EWR-IAH-LAS 3,A321neo,https://www.airlines-manager.com/network/showline/39422884,https://www.airlines-manager.com/network/showflight/51335558558,https://www.airlines-manager.com/aircraft/show/105859512,3:30,10:59,338,"$516,616.00","$468,754.00"
EWR - IAH,51335558559,EWR-IAH-LAS 5,A321neo,https://www.airlines-manager.com/network/showline/39422884,https://www.airlines-manager.com/network/showflight/51335558559,https://www.airlines-manager.com/aircraft/show/105859514,4:30,11:59,338,"$516,616.00","$468,754.00"
EWR - IAH,51335558560,EWR-IAH-LAS 1,A321neo,https://www.airlines-manager.com/network/showline/39422884,https://www.airlines-manager.com/network/showflight/51335558560,https://www.airlines-manager.com/aircraft/show/105859510,7:30,14:59,338,"$516,616.00","$468,754.00"
EWR - IAH,51347851166,EWR-IAH-LAS 2,A321neo,https://www.airlines-manager.com/network/showline/39422884,https://www.airlines-manager.com/network/showflight/51347851166,https://www.airlines-manager.com/aircraft/show/105859511,11:00,18:29,338,"$516,616.00","$468,754.00"
EWR - IAH,51347851167,EWR-IAH-LAS 4,A321neo,https://www.airlines-manager.com/network/showline/39422884,https://www.airlines-manager.com/network/showflight/51347851167,https://www.airlines-manager.com/aircraft/show/105859513,12:00,19:29,338,"$516,616.00","$468,754.00"
EWR - IAH,51363387593,EWR-IAH-LAS 6,ERJ-175,https://www.airlines-manager.com/network/showline/39422884,https://www.airlines-manager.com/network/showflight/51363387593,https://www.airlines-manager.com/aircraft/show/105864236,18:45,2:14,112,"$225,215.00","$193,008.00"
EWR - ICT,51335558277,EWR-COS-ICT 3,A321-200,https://www.airlines-manager.com/network/showline/47218155,https://www.airlines-manager.com/network/showflight/51335558277,https://www.airlines-manager.com/aircraft/show/108834810,1:00,7:59,310,"$440,336.00","$405,636.00"
EWR - ICT,51335558278,EWR-COS-ICT 2,A321-200,https://www.airlines-manager.com/network/showline/47218155,https://www.airlines-manager.com/network/showflight/51335558278,https://www.airlines-manager.com/aircraft/show/108834809,3:00,9:59,310,"$440,336.00","$405,636.00"
EWR - ICT,51347851181,EWR-COS-ICT 1,A321-200,https://www.airlines-manager.com/network/showline/47218155,https://www.airlines-manager.com/network/showflight/51347851181,https://www.airlines-manager.com/aircraft/show/108834808,11:00,17:59,310,"$440,336.00","$405,636.00"
EWR - ICT,51355083224,EWR-COS-ICT 4,A321-200,https://www.airlines-manager.com/network/showline/47218155,https://www.airlines-manager.com/network/showflight/51355083224,https://www.airlines-manager.com/aircraft/show/108834811,13:00,19:59,310,"$440,336.00","$405,636.00"
EWR - ICT,51370307096,EWR-COS-ICT 5,ERJ-175,https://www.airlines-manager.com/network/showline/47218155,https://www.airlines-manager.com/network/showflight/51370307096,https://www.airlines-manager.com/aircraft/show/108466265,21:30,4:29,112,"$208,487.00","$185,467.00"
EWR - IND,51335558162,EWR-IND-RDU 3,737-900ER,https://www.airlines-manager.com/network/showline/46255763,https://www.airlines-manager.com/network/showflight/51335558162,https://www.airlines-manager.com/aircraft/show/88494376,0:30,4:59,320,"$293,817.00","$262,249.00"
EWR - IND,51335558163,EWR-IND-RDU 2,737-900ER,https://www.airlines-manager.com/network/showline/46255763,https://www.airlines-manager.com/network/showflight/51335558163,https://www.airlines-manager.com/aircraft/show/88494377,4:15,8:44,320,"$293,817.00","$262,249.00"
EWR - IND,51347851143,EWR-IND-RDU 1,737-900ER,https://www.airlines-manager.com/network/showline/46255763,https://www.airlines-manager.com/network/showflight/51347851143,https://www.airlines-manager.com/aircraft/show/88494375,11:00,15:29,320,"$293,817.00","$262,249.00"
EWR - IND,51363387511,EWR-IND-RDU 5,ERJ-175,https://www.airlines-manager.com/network/showline/46255763,https://www.airlines-manager.com/network/showflight/51363387511,https://www.airlines-manager.com/aircraft/show/106104450,17:30,21:59,112,"$140,286.00","$122,631.00"
EWR - IND,51370307038,EWR-IND-RDU 4,737-900ER,https://www.airlines-manager.com/network/showline/46255763,https://www.airlines-manager.com/network/showflight/51370307038,https://www.airlines-manager.com/aircraft/show/105731236,20:45,1:14,320,"$293,817.00","$262,249.00"
EWR - JAN,51335558405,EWR-LIT-FAR 1,A321-200,https://www.airlines-manager.com/network/showline/48530163,https://www.airlines-manager.com/network/showflight/51335558405,https://www.airlines-manager.com/aircraft/show/90452834,2:00,8:14,310,"$387,602.00","$356,921.00"
EWR - JAN,51335558406,EWR-LIT-FAR 4,A321-200,https://www.airlines-manager.com/network/showline/48530163,https://www.airlines-manager.com/network/showflight/51335558406,https://www.airlines-manager.com/aircraft/show/86270784,8:30,14:44,310,"$387,602.00","$356,921.00"
EWR - JAN,51347851248,EWR-LIT-FAR 3,A321-200,https://www.airlines-manager.com/network/showline/48530163,https://www.airlines-manager.com/network/showflight/51347851248,https://www.airlines-manager.com/aircraft/show/86270786,12:00,18:14,310,"$387,602.00","$356,921.00"
EWR - JAN,51370307112,EWR-LIT-FAR 2,A321-200,https://www.airlines-manager.com/network/showline/48530163,https://www.airlines-manager.com/network/showflight/51370307112,https://www.airlines-manager.com/aircraft/show/86270787,21:45,3:59,310,"$387,602.00","$356,921.00"
EWR - JAX,51335558443,EWR-BNA-JAX 4,A321-200,https://www.airlines-manager.com/network/showline/45849204,https://www.airlines-manager.com/network/showflight/51335558443,https://www.airlines-manager.com/aircraft/show/104610407,2:15,7:29,310,"$335,996.00","$306,973.00"
EWR - JAX,51335558444,EWR-BNA-JAX 3,A321-200,https://www.airlines-manager.com/network/showline/45849204,https://www.airlines-manager.com/network/showflight/51335558444,https://www.airlines-manager.com/aircraft/show/104610408,8:15,13:29,310,"$335,996.00","$306,973.00"
EWR - JAX,51355083384,EWR-BNA-JAX 2,A321-200,https://www.airlines-manager.com/network/showline/45849204,https://www.airlines-manager.com/network/showflight/51355083384,https://www.airlines-manager.com/aircraft/show/104610409,14:00,19:14,310,"$335,996.00","$306,973.00"
EWR - JAX,51363387556,EWR-BNA-JAX 1,A321-200,https://www.airlines-manager.com/network/showline/45849204,https://www.airlines-manager.com/network/showflight/51363387556,https://www.airlines-manager.com/aircraft/show/104610410,18:00,23:14,310,"$335,996.00","$306,973.00"
EWR - JAX,51370307127,EWR-BNA-JAX 5,ERJ-175,https://www.airlines-manager.com/network/showline/45849204,https://www.airlines-manager.com/network/showflight/51370307127,https://www.airlines-manager.com/aircraft/show/96421247,22:00,3:14,112,"$159,525.00","$140,679.00"
EWR - KEF,51363387484,EWR 56C-3 F,787-10,https://www.airlines-manager.com/network/showline/46569722,https://www.airlines-manager.com/network/showflight/51363387484,https://www.airlines-manager.com/aircraft/show/106721558,17:00,4:14,598,"$1,334,396.00","$1,245,385.00"
EWR - KEF,51363387485,EWR 56C-4 F,787-10,https://www.airlines-manager.com/network/showline/46569722,https://www.airlines-manager.com/network/showflight/51363387485,https://www.airlines-manager.com/aircraft/show/106721559,18:00,5:14,598,"$1,334,396.00","$1,245,385.00"
EWR - KEF,51363387486,EWR 56C-5 F,787-10,https://www.airlines-manager.com/network/showline/46569722,https://www.airlines-manager.com/network/showflight/51363387486,https://www.airlines-manager.com/aircraft/show/106721560,18:45,5:59,598,"$1,334,396.00","$1,245,385.00"
EWR - LAS,51335558123,EWR-IAH-LAS 2,A321neo,https://www.airlines-manager.com/network/showline/39279941,https://www.airlines-manager.com/network/showflight/51335558123,https://www.airlines-manager.com/aircraft/show/105859511,0:15,10:59,338,"$733,483.00","$669,319.00"
EWR - LAS,51335558124,EWR-IAH-LAS 4,A321neo,https://www.airlines-manager.com/network/showline/39279941,https://www.airlines-manager.com/network/showflight/51335558124,https://www.airlines-manager.com/aircraft/show/105859513,1:15,11:59,338,"$733,483.00","$669,319.00"
EWR - LAS,51335558125,EWR-IAH-LAS 6,ERJ-175,https://www.airlines-manager.com/network/showline/39279941,https://www.airlines-manager.com/network/showflight/51335558125,https://www.airlines-manager.com/aircraft/show/105864236,2:15,12:59,112,"$316,943.00","$272,898.00"
EWR - LAS,51347851229,EWR-IAH-LAS 5,A321neo,https://www.airlines-manager.com/network/showline/39279941,https://www.airlines-manager.com/network/showflight/51347851229,https://www.airlines-manager.com/aircraft/show/105859514,12:00,22:44,338,"$733,483.00","$669,319.00"
EWR - LAS,51355083423,EWR-IAH-LAS 1,A321neo,https://www.airlines-manager.com/network/showline/39279941,https://www.airlines-manager.com/network/showflight/51355083423,https://www.airlines-manager.com/aircraft/show/105859510,15:00,1:44,338,"$733,483.00","$669,319.00"
EWR - LAS,51363387443,EWR-IAH-LAS 3,A321neo,https://www.airlines-manager.com/network/showline/39279941,https://www.airlines-manager.com/network/showflight/51363387443,https://www.airlines-manager.com/aircraft/show/105859512,16:45,3:29,338,"$733,483.00","$669,319.00"
EWR - LAX,51335558039,EWR-SFO-LAX 4,757-300,https://www.airlines-manager.com/network/showline/39254373,https://www.airlines-manager.com/network/showflight/51335558039,https://www.airlines-manager.com/aircraft/show/89233030,0:00,11:29,400,"$931,727.00","$840,504.00"
EWR - LAX,51335558040,EWR-SFO-LAX 5,757-300,https://www.airlines-manager.com/network/showline/39254373,https://www.airlines-manager.com/network/showflight/51335558040,https://www.airlines-manager.com/aircraft/show/89233027,2:00,13:29,400,"$931,727.00","$840,504.00"
EWR - LAX,51355083180,EWR-SFO-LAX 1,757-300,https://www.airlines-manager.com/network/showline/39254373,https://www.airlines-manager.com/network/showflight/51355083180,https://www.airlines-manager.com/aircraft/show/83716137,12:30,23:59,400,"$931,727.00","$840,504.00"
EWR - LAX,51355083181,EWR-SFO-LAX 2,757-300,https://www.airlines-manager.com/network/showline/39254373,https://www.airlines-manager.com/network/showflight/51355083181,https://www.airlines-manager.com/aircraft/show/89233028,14:00,1:29,400,"$931,727.00","$840,504.00"
EWR - LAX,51363387226,EWR-SFO-LAX 3,757-300,https://www.airlines-manager.com/network/showline/39254373,https://www.airlines-manager.com/network/showflight/51363387226,https://www.airlines-manager.com/aircraft/show/89233029,15:30,2:59,400,"$931,727.00","$840,504.00"
EWR - LHR,51335558447,EWR 56A-2 B1,777-300,https://www.airlines-manager.com/network/showline/40098745,https://www.airlines-manager.com/network/showflight/51335558447,https://www.airlines-manager.com/aircraft/show/106813008,2:15,16:44,748,"$2,216,229.00","$1,964,626.00"
EWR - LHR,51355083179,EWR 56A-5 B1,777-300,https://www.airlines-manager.com/network/showline/40098745,https://www.airlines-manager.com/network/showflight/51355083179,https://www.airlines-manager.com/aircraft/show/106813011,12:30,2:59,748,"$2,216,229.00","$1,964,626.00"
EWR - LHR,51363387560,EWR 56A-6 B1,777-300,https://www.airlines-manager.com/network/showline/40098745,https://www.airlines-manager.com/network/showflight/51363387560,https://www.airlines-manager.com/aircraft/show/106813012,18:15,8:44,748,"$2,000,651.00","$1,806,291.00"
EWR - LIS,51335558669,EWR 84A-5 B2,777-300,https://www.airlines-manager.com/network/showline/46601012,https://www.airlines-manager.com/network/showflight/51335558669,https://www.airlines-manager.com/aircraft/show/94521250,5:30,19:44,852,"$2,324,489.00","$2,116,154.00"
EWR - LIS,51347851262,EWR 84A-2 B2,777-300,https://www.airlines-manager.com/network/showline/46601012,https://www.airlines-manager.com/network/showflight/51347851262,https://www.airlines-manager.com/aircraft/show/94521252,12:15,2:29,852,"$2,324,489.00","$2,116,154.00"
EWR - LIT,51335558724,EWR-LIT-FAR 2,A321-200,https://www.airlines-manager.com/network/showline/48530155,https://www.airlines-manager.com/network/showflight/51335558724,https://www.airlines-manager.com/aircraft/show/86270787,8:30,14:44,310,"$393,314.00","$362,357.00"
EWR - LIT,51355083194,EWR-LIT-FAR 1,A321-200,https://www.airlines-manager.com/network/showline/48530155,https://www.airlines-manager.com/network/showflight/51355083194,https://www.airlines-manager.com/aircraft/show/90452834,13:00,19:14,310,"$393,314.00","$362,357.00"
EWR - LIT,51363387627,EWR-LIT-FAR 4,A321-200,https://www.airlines-manager.com/network/showline/48530155,https://www.airlines-manager.com/network/showflight/51363387627,https://www.airlines-manager.com/aircraft/show/86270784,19:30,1:44,310,"$393,314.00","$362,357.00"
EWR - LIT,51374354709,EWR-LIT-FAR 3,A321-200,https://www.airlines-manager.com/network/showline/48530155,https://www.airlines-manager.com/network/showflight/51374354709,https://www.airlines-manager.com/aircraft/show/86270786,22:45,4:59,310,"$393,314.00","$362,357.00"
EWR - MAD,51335558044,EWR 56B-1 B1,777-300,https://www.airlines-manager.com/network/showline/42007979,https://www.airlines-manager.com/network/showflight/51335558044,https://www.airlines-manager.com/aircraft/show/94521251,0:00,14:59,748,"$2,285,364.00","$2,032,405.00"
EWR - MAD,51370307023,EWR 56B-4 B1,777-300,https://www.airlines-manager.com/network/showline/42007979,https://www.airlines-manager.com/network/showflight/51370307023,https://www.airlines-manager.com/aircraft/show/94521247,20:30,11:29,748,"$2,285,364.00","$2,032,405.00"
EWR - MAD,51370307024,EWR 56B-2 B1,777-300,https://www.airlines-manager.com/network/showline/42007979,https://www.airlines-manager.com/network/showflight/51370307024,https://www.airlines-manager.com/aircraft/show/90656556,22:15,13:14,748,"$2,062,126.00","$1,868,735.00"
EWR - MCI,51335558574,EWR-ELP-SAT 1,737-900ER,https://www.airlines-manager.com/network/showline/45356715,https://www.airlines-manager.com/network/showflight/51335558574,https://www.airlines-manager.com/aircraft/show/103365578,3:45,9:59,320,"$392,599.00","$353,623.00"
EWR - MCI,51335558575,EWR-ELP-SAT 4,737-900ER,https://www.airlines-manager.com/network/showline/45356715,https://www.airlines-manager.com/network/showflight/51335558575,https://www.airlines-manager.com/aircraft/show/103365575,5:45,11:59,320,"$392,599.00","$353,623.00"
EWR - MCI,51347850961,EWR-ELP-SAT 3,737-900ER,https://www.airlines-manager.com/network/showline/45356715,https://www.airlines-manager.com/network/showflight/51347850961,https://www.airlines-manager.com/aircraft/show/103365576,10:00,16:14,320,"$392,599.00","$353,623.00"
EWR - MCI,51355083308,EWR CARGO 2,737-700,https://www.airlines-manager.com/network/showline/45356715,https://www.airlines-manager.com/network/showflight/51355083308,https://www.airlines-manager.com/aircraft/show/107576645,13:15,19:29,0,"$102,729.00","$77,582.00"
EWR - MCI,51363387561,EWR-ELP-SAT 2,737-900ER,https://www.airlines-manager.com/network/showline/45356715,https://www.airlines-manager.com/network/showflight/51363387561,https://www.airlines-manager.com/aircraft/show/103365577,18:15,0:29,320,"$392,599.00","$353,623.00"
EWR - MCI,51370307000,EWR-ELP-SAT 5 B,A319-100,https://www.airlines-manager.com/network/showline/45356715,https://www.airlines-manager.com/network/showflight/51370307000,https://www.airlines-manager.com/aircraft/show/110582847,20:15,2:29,198,"$297,231.00","$269,504.00"
EWR - MCO,51335558367,EWR-IAH-LAS 1,A321neo,https://www.airlines-manager.com/network/showline/40395708,https://www.airlines-manager.com/network/showflight/51335558367,https://www.airlines-manager.com/aircraft/show/105859510,1:45,7:29,338,"$389,287.00","$349,992.00"
EWR - MCO,51347851165,EWR-IAH-LAS 3,A321neo,https://www.airlines-manager.com/network/showline/40395708,https://www.airlines-manager.com/network/showflight/51347851165,https://www.airlines-manager.com/aircraft/show/105859512,11:00,16:44,338,"$389,287.00","$349,992.00"
EWR - MCO,51355083263,EWR-IAH-LAS 6,ERJ-175,https://www.airlines-manager.com/network/showline/40395708,https://www.airlines-manager.com/network/showflight/51355083263,https://www.airlines-manager.com/aircraft/show/105864236,13:00,18:44,112,"$170,572.00","$144,654.00"
EWR - MCO,51363387577,EWR-IAH-LAS 2,A321neo,https://www.airlines-manager.com/network/showline/40395708,https://www.airlines-manager.com/network/showflight/51363387577,https://www.airlines-manager.com/aircraft/show/105859511,18:30,0:14,338,"$389,287.00","$349,992.00"
EWR - MCO,51363387578,EWR-IAH-LAS 4,A321neo,https://www.airlines-manager.com/network/showline/40395708,https://www.airlines-manager.com/network/showflight/51363387578,https://www.airlines-manager.com/aircraft/show/105859513,19:30,1:14,338,"$389,287.00","$349,992.00"
EWR - MCO,51374354719,EWR-IAH-LAS 5,A321neo,https://www.airlines-manager.com/network/showline/40395708,https://www.airlines-manager.com/network/showflight/51374354719,https://www.airlines-manager.com/aircraft/show/105859514,22:45,4:29,336,"$387,919.00","$348,667.00"
EWR - MEM,51335558317,EWR-RNO-MEM 4,737-900ER,https://www.airlines-manager.com/network/showline/45056241,https://www.airlines-manager.com/network/showflight/51335558317,https://www.airlines-manager.com/aircraft/show/99920619,1:15,6:59,320,"$361,184.00","$324,126.00"
EWR - MEM,51335558318,EWR-RNO-MEM 3,737-900ER,https://www.airlines-manager.com/network/showline/45056241,https://www.airlines-manager.com/network/showflight/51335558318,https://www.airlines-manager.com/aircraft/show/99920620,3:45,9:29,320,"$361,184.00","$324,126.00"
EWR - MEM,51347851111,EWR-RNO-MEM 2,737-900ER,https://www.airlines-manager.com/network/showline/45056241,https://www.airlines-manager.com/network/showflight/51347851111,https://www.airlines-manager.com/aircraft/show/99920621,10:15,15:59,320,"$361,184.00","$324,126.00"
EWR - MEM,51363387628,EWR CARGO 2,737-700,https://www.airlines-manager.com/network/showline/45056241,https://www.airlines-manager.com/network/showflight/51363387628,https://www.airlines-manager.com/aircraft/show/107576645,19:30,1:14,0,"$96,157.00","$72,722.00"
EWR - MEM,51370307002,EWR-RNO-MEM 5 B,A319-100,https://www.airlines-manager.com/network/showline/45056241,https://www.airlines-manager.com/network/showflight/51370307002,https://www.airlines-manager.com/aircraft/show/100096560,20:15,1:59,198,"$273,914.00","$247,698.00"
EWR - MEM,51370307003,EWR-RNO-MEM 1,737-900ER,https://www.airlines-manager.com/network/showline/45056241,https://www.airlines-manager.com/network/showflight/51370307003,https://www.airlines-manager.com/aircraft/show/99920622,21:30,3:14,320,"$361,184.00","$324,126.00"
EWR - MEX,51335558361,EWR-DTW-YYZ 3,737-900ER,https://www.airlines-manager.com/network/showline/42538129,https://www.airlines-manager.com/network/showflight/51335558361,https://www.airlines-manager.com/aircraft/show/92003923,1:45,11:59,320,"$638,062.00","$574,462.00"
EWR - MEX,51347850989,EWR-DTW-YYZ 6 E,A319-100,https://www.airlines-manager.com/network/showline/42538129,https://www.airlines-manager.com/network/showflight/51347850989,https://www.airlines-manager.com/aircraft/show/104258433,10:00,20:14,216,"$485,869.00","$439,364.00"
EWR - MEX,51347850991,EWR-DTW-YYZ 4,737-900ER,https://www.airlines-manager.com/network/showline/42538129,https://www.airlines-manager.com/network/showflight/51347850991,https://www.airlines-manager.com/aircraft/show/92003922,12:00,22:14,320,"$638,062.00","$574,462.00"
EWR - MEX,51363387502,EWR-DTW-YYZ 5,737-900ER,https://www.airlines-manager.com/network/showline/42538129,https://www.airlines-manager.com/network/showflight/51363387502,https://www.airlines-manager.com/aircraft/show/92003921,17:15,3:29,320,"$638,062.00","$574,462.00"
EWR - MEX,51363387503,EWR-DTW-YYZ 2,737-900ER,https://www.airlines-manager.com/network/showline/42538129,https://www.airlines-manager.com/network/showflight/51363387503,https://www.airlines-manager.com/aircraft/show/92003924,17:30,3:44,320,"$638,062.00","$574,462.00"
EWR - MEX,51370306994,EWR-DTW-YYZ 6 E,A319-100,https://www.airlines-manager.com/network/showline/42538129,https://www.airlines-manager.com/network/showflight/51370306994,https://www.airlines-manager.com/aircraft/show/104258433,20:15,6:29,216,"$485,869.00","$439,364.00"
EWR - MEX,51374354788,EWR-DTW-YYZ 1,737-900ER,https://www.airlines-manager.com/network/showline/42538129,https://www.airlines-manager.com/network/showflight/51374354788,https://www.airlines-manager.com/aircraft/show/92003925,23:45,9:59,298,"$599,946.00","$537,884.00"
EWR - MIA,51335558460,EWR-MIA-ORD 5,A321neo,https://www.airlines-manager.com/network/showline/39256188,https://www.airlines-manager.com/network/showflight/51335558460,https://www.airlines-manager.com/aircraft/show/113251309,2:30,8:44,338,"$429,739.00","$386,653.00"
EWR - MIA,51335558461,EWR-MIA-ORD 1,A321neo,https://www.airlines-manager.com/network/showline/39256188,https://www.airlines-manager.com/network/showflight/51335558461,https://www.airlines-manager.com/aircraft/show/113251305,4:00,10:14,338,"$429,739.00","$386,653.00"
EWR - MIA,51347850963,EWR-MIA-ORD 2,A321neo,https://www.airlines-manager.com/network/showline/39256188,https://www.airlines-manager.com/network/showflight/51347850963,https://www.airlines-manager.com/aircraft/show/113251306,10:00,16:14,338,"$429,739.00","$386,653.00"
EWR - MIA,51347850965,EWR-MIA-ORD 4,A321neo,https://www.airlines-manager.com/network/showline/39256188,https://www.airlines-manager.com/network/showflight/51347850965,https://www.airlines-manager.com/aircraft/show/113251308,11:00,17:14,338,"$429,739.00","$386,653.00"
EWR - MIA,51363387364,EWR-MIA-ORD 3,A321neo,https://www.airlines-manager.com/network/showline/39256188,https://www.airlines-manager.com/network/showflight/51363387364,https://www.airlines-manager.com/aircraft/show/113251307,16:30,22:44,338,"$429,739.00","$386,653.00"
EWR - MKE,51335558537,EWR-BNA-JAX 5,ERJ-175,https://www.airlines-manager.com/network/showline/45849213,https://www.airlines-manager.com/network/showflight/51335558537,https://www.airlines-manager.com/aircraft/show/96421247,3:15,8:14,112,"$149,666.00","$131,674.00"
EWR - MKE,51335558538,EWR-BNA-JAX 4,A321-200,https://www.airlines-manager.com/network/showline/45849213,https://www.airlines-manager.com/network/showflight/51335558538,https://www.airlines-manager.com/aircraft/show/104610407,7:30,12:29,310,"$314,914.00","$287,029.00"
EWR - MKE,51355083383,EWR-BNA-JAX 3,A321-200,https://www.airlines-manager.com/network/showline/45849213,https://www.airlines-manager.com/network/showflight/51355083383,https://www.airlines-manager.com/aircraft/show/104610408,14:00,18:59,310,"$314,914.00","$287,029.00"
EWR - MKE,51363387615,EWR-BNA-JAX 2,A321-200,https://www.airlines-manager.com/network/showline/45849213,https://www.airlines-manager.com/network/showflight/51363387615,https://www.airlines-manager.com/aircraft/show/104610409,19:15,0:14,310,"$314,914.00","$287,029.00"
EWR - MKE,51374354763,EWR-BNA-JAX 1,A321-200,https://www.airlines-manager.com/network/showline/45849213,https://www.airlines-manager.com/network/showflight/51374354763,https://www.airlines-manager.com/aircraft/show/104610410,23:15,4:14,310,"$314,914.00","$287,029.00"
EWR - MSO,51335558268,EWR-OKC-FSD 1,A321-200,https://www.airlines-manager.com/network/showline/46719716,https://www.airlines-manager.com/network/showflight/51335558268,https://www.airlines-manager.com/aircraft/show/107161238,1:00,10:59,310,"$614,414.00","$569,467.00"
EWR - MSO,51347851154,EWR-OKC-FSD 3,A321-200,https://www.airlines-manager.com/network/showline/46719716,https://www.airlines-manager.com/network/showflight/51347851154,https://www.airlines-manager.com/aircraft/show/107161240,11:00,20:59,310,"$614,414.00","$569,467.00"
EWR - MSO,51363387257,EWR-OKC-FSD 5,ERJ-175,https://www.airlines-manager.com/network/showline/46719716,https://www.airlines-manager.com/network/showflight/51363387257,https://www.airlines-manager.com/aircraft/show/86782214,15:45,1:44,112,"$288,621.00","$258,138.00"
EWR - MSO,51363387258,EWR-OKC-FSD 2,A321-200,https://www.airlines-manager.com/network/showline/46719716,https://www.airlines-manager.com/network/showflight/51363387258,https://www.airlines-manager.com/aircraft/show/107161239,17:45,3:44,310,"$614,414.00","$569,467.00"
EWR - MSO,51370307123,EWR-OKC-FSD 4,A321-200,https://www.airlines-manager.com/network/showline/46719716,https://www.airlines-manager.com/network/showflight/51370307123,https://www.airlines-manager.com/aircraft/show/107161241,22:00,7:59,310,"$614,414.00","$569,467.00"
EWR - MSP,51335558650,EWR-DEN-SLC 3,A321-200,https://www.airlines-manager.com/network/showline/40395806,https://www.airlines-manager.com/network/showflight/51335558650,https://www.airlines-manager.com/aircraft/show/86270783,5:00,10:59,310,"$373,828.00","$334,593.00"
EWR - MSP,51347850928,EWR-DEN-SLC 5,A321-200,https://www.airlines-manager.com/network/showline/40395806,https://www.airlines-manager.com/network/showflight/51347850928,https://www.airlines-manager.com/aircraft/show/90452833,10:00,15:59,310,"$373,828.00","$334,593.00"
EWR - MSP,51347850929,EWR-DEN-SLC 6 B,A319-100,https://www.airlines-manager.com/network/showline/40395806,https://www.airlines-manager.com/network/showflight/51347850929,https://www.airlines-manager.com/aircraft/show/105223076,11:00,16:59,198,"$283,416.00","$251,985.00"
EWR - MSP,51363387567,EWR-DEN-SLC 2,A321-200,https://www.airlines-manager.com/network/showline/40395806,https://www.airlines-manager.com/network/showflight/51363387567,https://www.airlines-manager.com/aircraft/show/87153196,18:15,0:14,310,"$373,828.00","$334,593.00"
EWR - MSP,51370306935,EWR-DEN-SLC 1,A321-200,https://www.airlines-manager.com/network/showline/40395806,https://www.airlines-manager.com/network/showflight/51370306935,https://www.airlines-manager.com/aircraft/show/86270785,19:45,1:44,310,"$373,828.00","$334,593.00"
EWR - MSP,51370306936,EWR-DEN-SLC 4,A321-200,https://www.airlines-manager.com/network/showline/40395806,https://www.airlines-manager.com/network/showflight/51370306936,https://www.airlines-manager.com/aircraft/show/90452835,20:45,2:44,310,"$373,828.00","$334,593.00"
EWR - MSY,51335558539,EWR-ABQ-AUS 1,A321-200,https://www.airlines-manager.com/network/showline/43857268,https://www.airlines-manager.com/network/showflight/51335558539,https://www.airlines-manager.com/aircraft/show/90717079,3:15,9:59,310,"$414,028.00","$379,277.00"
EWR - MSY,51347850942,EWR-ABQ-AUS 3,A321-200,https://www.airlines-manager.com/network/showline/43857268,https://www.airlines-manager.com/network/showflight/51347850942,https://www.airlines-manager.com/aircraft/show/90717077,10:00,16:44,310,"$414,028.00","$379,277.00"
EWR - MSY,51347850943,EWR-ABQ-AUS 4,A321-200,https://www.airlines-manager.com/network/showline/43857268,https://www.airlines-manager.com/network/showflight/51347850943,https://www.airlines-manager.com/aircraft/show/90717076,11:00,17:44,310,"$414,028.00","$379,277.00"
EWR - MSY,51363387559,EWR-ABQ-AUS 2,A321-200,https://www.airlines-manager.com/network/showline/43857268,https://www.airlines-manager.com/network/showflight/51363387559,https://www.airlines-manager.com/aircraft/show/90717078,18:00,0:44,310,"$414,028.00","$379,277.00"
EWR - MSY,51370306976,EWR-ABQ-AUS 5,A321-200,https://www.airlines-manager.com/network/showline/43857268,https://www.airlines-manager.com/network/showflight/51370306976,https://www.airlines-manager.com/aircraft/show/95950199,20:00,2:44,310,"$414,028.00","$379,277.00"
EWR - MUC,51335558106,EWR 56C-1 F,787-10,https://www.airlines-manager.com/network/showline/46569718,https://www.airlines-manager.com/network/showflight/51335558106,https://www.airlines-manager.com/aircraft/show/106721556,0:00,16:29,598,"$2,035,381.00","$1,885,310.00"
EWR - MUC,51347851190,EWR 56C-2 F,787-10,https://www.airlines-manager.com/network/showline/46569718,https://www.airlines-manager.com/network/showflight/51347851190,https://www.airlines-manager.com/aircraft/show/106721557,11:00,3:29,598,"$2,035,381.00","$1,885,310.00"
EWR - MUC,51363387574,EWR 56C-1 F,787-10,https://www.airlines-manager.com/network/showline/46569718,https://www.airlines-manager.com/network/showflight/51363387574,https://www.airlines-manager.com/aircraft/show/106721556,18:30,10:59,598,"$2,035,381.00","$1,885,310.00"
EWR - NAS,51335558659,EWR-TUS-TPA 1,A321-200,https://www.airlines-manager.com/network/showline/44584392,https://www.airlines-manager.com/network/showflight/51335558659,https://www.airlines-manager.com/aircraft/show/98379319,5:15,11:44,310,"$395,013.00","$362,012.00"
EWR - NAS,51355083274,EWR-TUS-TPA 3,A321-200,https://www.airlines-manager.com/network/showline/44584392,https://www.airlines-manager.com/network/showflight/51355083274,https://www.airlines-manager.com/aircraft/show/98379317,13:00,19:29,310,"$395,013.00","$362,012.00"
EWR - NAS,51363387541,EWR-TUS-TPA 4,A321-200,https://www.airlines-manager.com/network/showline/44584392,https://www.airlines-manager.com/network/showflight/51363387541,https://www.airlines-manager.com/aircraft/show/98379316,18:00,0:29,310,"$395,013.00","$362,012.00"
EWR - NAS,51363387542,EWR-TUS-TPA 2,A321-200,https://www.airlines-manager.com/network/showline/44584392,https://www.airlines-manager.com/network/showflight/51363387542,https://www.airlines-manager.com/aircraft/show/98379318,19:00,1:29,310,"$395,013.00","$362,012.00"
EWR - NAS,51370307072,EWR-TUS-TPA 5,A321-200,https://www.airlines-manager.com/network/showline/44584392,https://www.airlines-manager.com/network/showflight/51370307072,https://www.airlines-manager.com/aircraft/show/98379315,21:00,3:29,289,"$371,504.00","$339,293.00"
EWR - NRT,51335558102,EWR 56A-1 B1,777-300,https://www.airlines-manager.com/network/showline/46601007,https://www.airlines-manager.com/network/showflight/51335558102,https://www.airlines-manager.com/aircraft/show/106813007,0:00,2:14,748,"$3,973,241.00","$3,574,539.00"
EWR - NRT,51347851097,EWR 56A-4 B1,777-300,https://www.airlines-manager.com/network/showline/46601007,https://www.airlines-manager.com/network/showflight/51347851097,https://www.airlines-manager.com/aircraft/show/106813010,10:15,12:29,748,"$3,947,501.00","$3,557,882.00"
EWR - NRT,51363387442,EWR 56A-2 B1,777-300,https://www.airlines-manager.com/network/showline/46601007,https://www.airlines-manager.com/network/showflight/51363387442,https://www.airlines-manager.com/aircraft/show/106813008,16:45,18:59,748,"$3,551,373.00","$3,266,207.00"
EWR - OAK,51335558239,EWR-OAK-SJC 5,A321-200,https://www.airlines-manager.com/network/showline/39907187,https://www.airlines-manager.com/network/showflight/51335558239,https://www.airlines-manager.com/aircraft/show/104717239,1:00,12:59,310,"$734,680.00","$679,106.00"
EWR - OAK,51347850904,EWR-OAK-SJC 1,A321-200,https://www.airlines-manager.com/network/showline/39907187,https://www.airlines-manager.com/network/showflight/51347850904,https://www.airlines-manager.com/aircraft/show/104717243,10:00,21:59,310,"$734,680.00","$679,106.00"
EWR - OAK,51347850906,EWR-OAK-SJC 2,A321-200,https://www.airlines-manager.com/network/showline/39907187,https://www.airlines-manager.com/network/showflight/51347850906,https://www.airlines-manager.com/aircraft/show/104717242,12:00,23:59,310,"$734,680.00","$679,106.00"
EWR - OAK,51355083370,EWR-OAK-SJC 3,A321-200,https://www.airlines-manager.com/network/showline/39907187,https://www.airlines-manager.com/network/showflight/51355083370,https://www.airlines-manager.com/aircraft/show/104717241,14:00,1:59,310,"$734,680.00","$679,106.00"
EWR - OAK,51374354683,EWR-OAK-SJC 4,A321-200,https://www.airlines-manager.com/network/showline/39907187,https://www.airlines-manager.com/network/showflight/51374354683,https://www.airlines-manager.com/aircraft/show/104717240,22:30,10:29,310,"$734,680.00","$679,106.00"
EWR - OKC,51335558371,EWR-OKC-FSD 5,ERJ-175,https://www.airlines-manager.com/network/showline/46719742,https://www.airlines-manager.com/network/showflight/51335558371,https://www.airlines-manager.com/aircraft/show/86782214,1:45,8:59,112,"$217,241.00","$193,495.00"
EWR - OKC,51335558372,EWR-OKC-FSD 2,A321-200,https://www.airlines-manager.com/network/showline/46719742,https://www.airlines-manager.com/network/showflight/51335558372,https://www.airlines-manager.com/aircraft/show/107161239,3:45,10:59,310,"$460,171.00","$424,442.00"
EWR - OKC,51335558373,EWR-OKC-FSD 4,A321-200,https://www.airlines-manager.com/network/showline/46719742,https://www.airlines-manager.com/network/showflight/51335558373,https://www.airlines-manager.com/aircraft/show/107161241,8:00,15:14,310,"$460,171.00","$424,442.00"
EWR - OKC,51347851186,EWR-OKC-FSD 1,A321-200,https://www.airlines-manager.com/network/showline/46719742,https://www.airlines-manager.com/network/showflight/51347851186,https://www.airlines-manager.com/aircraft/show/107161238,11:00,18:14,310,"$460,171.00","$424,442.00"
EWR - OKC,51370307068,EWR-OKC-FSD 3,A321-200,https://www.airlines-manager.com/network/showline/46719742,https://www.airlines-manager.com/network/showflight/51370307068,https://www.airlines-manager.com/aircraft/show/107161240,21:00,4:14,310,"$460,171.00","$424,442.00"
EWR - OMA,51335558458,EWR-BOI-PBI 1,A321-200,https://www.airlines-manager.com/network/showline/45805662,https://www.airlines-manager.com/network/showflight/51335558458,https://www.airlines-manager.com/aircraft/show/104418460,2:30,8:59,310,"$401,509.00","$368,534.00"
EWR - OMA,51335558459,EWR-BOI-PBI 4,A321-200,https://www.airlines-manager.com/network/showline/45805662,https://www.airlines-manager.com/network/showflight/51335558459,https://www.airlines-manager.com/aircraft/show/104418463,7:30,13:59,310,"$401,509.00","$368,534.00"
EWR - OMA,51347850985,EWR-BOI-PBI 3,A321-200,https://www.airlines-manager.com/network/showline/45805662,https://www.airlines-manager.com/network/showflight/51347850985,https://www.airlines-manager.com/aircraft/show/104418462,10:00,16:29,310,"$401,509.00","$368,534.00"
EWR - OMA,51363387480,EWR-BOI-PBI 2,A321-200,https://www.airlines-manager.com/network/showline/45805662,https://www.airlines-manager.com/network/showflight/51363387480,https://www.airlines-manager.com/aircraft/show/104418461,17:00,23:29,310,"$401,509.00","$368,534.00"
EWR - OMA,51363387481,EWR-BOI-PBI 5 B,A319-100,https://www.airlines-manager.com/network/showline/45805662,https://www.airlines-manager.com/network/showflight/51363387481,https://www.airlines-manager.com/aircraft/show/110582846,19:00,1:29,194,"$300,639.00","$274,353.00"
EWR - ONT,51335558074,EWR-SMF-ONT 4,737-900ER,https://www.airlines-manager.com/network/showline/48619155,https://www.airlines-manager.com/network/showflight/51335558074,https://www.airlines-manager.com/aircraft/show/94889153,0:00,11:29,320,"$702,968.00","$644,264.00"
EWR - ONT,51335558075,EWR-SMF-ONT 5,737-900ER,https://www.airlines-manager.com/network/showline/48619155,https://www.airlines-manager.com/network/showflight/51335558075,https://www.airlines-manager.com/aircraft/show/94889154,2:00,13:29,320,"$702,968.00","$644,264.00"
EWR - ONT,51347851227,EWR-SMF-ONT 1,737-900ER,https://www.airlines-manager.com/network/showline/48619155,https://www.airlines-manager.com/network/showflight/51347851227,https://www.airlines-manager.com/aircraft/show/94889150,11:45,23:14,320,"$702,968.00","$644,264.00"
EWR - ONT,51355083306,EWR-SMF-ONT 2,737-900ER,https://www.airlines-manager.com/network/showline/48619155,https://www.airlines-manager.com/network/showflight/51355083306,https://www.airlines-manager.com/aircraft/show/94889151,13:15,0:44,320,"$702,968.00","$644,264.00"
EWR - ONT,51355083307,EWR-SMF-ONT 3,737-900ER,https://www.airlines-manager.com/network/showline/48619155,https://www.airlines-manager.com/network/showflight/51355083307,https://www.airlines-manager.com/aircraft/show/94889152,14:45,2:14,298,"$673,078.00","$615,797.00"
EWR - ORD,51335558651,EWR-MIA-ORD 2,A321neo,https://www.airlines-manager.com/network/showline/39259370,https://www.airlines-manager.com/network/showflight/51335558651,https://www.airlines-manager.com/aircraft/show/113251306,5:00,9:59,338,"$340,482.00","$293,447.00"
EWR - ORD,51347851093,EWR-MIA-ORD 1,A321neo,https://www.airlines-manager.com/network/showline/39259370,https://www.airlines-manager.com/network/showflight/51347851093,https://www.airlines-manager.com/aircraft/show/113251305,10:15,15:14,338,"$340,482.00","$293,447.00"
EWR - ORD,51347851095,EWR-MIA-ORD 3,A321neo,https://www.airlines-manager.com/network/showline/39259370,https://www.airlines-manager.com/network/showflight/51347851095,https://www.airlines-manager.com/aircraft/show/113251307,11:30,16:29,338,"$340,482.00","$293,447.00"
EWR - ORD,51363387499,EWR-MIA-ORD 4,A321neo,https://www.airlines-manager.com/network/showline/39259370,https://www.airlines-manager.com/network/showflight/51363387499,https://www.airlines-manager.com/aircraft/show/113251308,17:15,22:14,338,"$340,482.00","$293,447.00"
EWR - ORD,51370307105,EWR-MIA-ORD 5,A321neo,https://www.airlines-manager.com/network/showline/39259370,https://www.airlines-manager.com/network/showflight/51370307105,https://www.airlines-manager.com/aircraft/show/113251309,21:30,2:29,337,"$339,538.00","$292,524.00"
EWR - ORF,51335558433,EWR-IND-RDU 1,737-900ER,https://www.airlines-manager.com/network/showline/46250219,https://www.airlines-manager.com/network/showflight/51335558433,https://www.airlines-manager.com/aircraft/show/88494375,2:15,5:29,320,"$153,055.00","$129,505.00"
EWR - ORF,51347851139,EWR-IND-RDU 5,ERJ-175,https://www.airlines-manager.com/network/showline/46250219,https://www.airlines-manager.com/network/showflight/51347851139,https://www.airlines-manager.com/aircraft/show/106104450,11:00,14:14,112,"$70,205.00","$57,603.00"
EWR - ORF,51355083402,EWR-IND-RDU 4,737-900ER,https://www.airlines-manager.com/network/showline/46250219,https://www.airlines-manager.com/network/showflight/51355083402,https://www.airlines-manager.com/aircraft/show/105731236,14:15,17:29,320,"$153,055.00","$129,505.00"
EWR - ORF,51363387554,EWR-IND-RDU 3,737-900ER,https://www.airlines-manager.com/network/showline/46250219,https://www.airlines-manager.com/network/showflight/51363387554,https://www.airlines-manager.com/aircraft/show/88494376,18:00,21:14,320,"$153,055.00","$129,505.00"
EWR - ORF,51370307114,EWR-IND-RDU 2,737-900ER,https://www.airlines-manager.com/network/showline/46250219,https://www.airlines-manager.com/network/showflight/51370307114,https://www.airlines-manager.com/aircraft/show/88494377,21:45,0:59,320,"$153,055.00","$129,505.00"
EWR - PBI,51335558359,EWR-BOI-PBI 4,A321-200,https://www.airlines-manager.com/network/showline/45805644,https://www.airlines-manager.com/network/showflight/51335558359,https://www.airlines-manager.com/aircraft/show/104418463,1:30,7:29,310,"$378,718.00","$346,277.00"
EWR - PBI,51335558360,EWR-BOI-PBI 3,A321-200,https://www.airlines-manager.com/network/showline/45805644,https://www.airlines-manager.com/network/showflight/51335558360,https://www.airlines-manager.com/aircraft/show/104418462,3:00,8:59,310,"$378,718.00","$346,277.00"
EWR - PBI,51347851200,EWR-BOI-PBI 2,A321-200,https://www.airlines-manager.com/network/showline/45805644,https://www.airlines-manager.com/network/showflight/51347851200,https://www.airlines-manager.com/aircraft/show/104418461,11:00,16:59,310,"$378,718.00","$346,277.00"
EWR - PBI,51355083218,EWR-BOI-PBI 5 B,A319-100,https://www.airlines-manager.com/network/showline/45805644,https://www.airlines-manager.com/network/showflight/51355083218,https://www.airlines-manager.com/aircraft/show/110582846,13:00,18:59,198,"$286,787.00","$260,791.00"
EWR - PBI,51370307021,EWR-BOI-PBI 1,A321-200,https://www.airlines-manager.com/network/showline/45805644,https://www.airlines-manager.com/network/showflight/51370307021,https://www.airlines-manager.com/aircraft/show/104418460,20:30,2:29,310,"$378,718.00","$346,277.00"
EWR - PDX,51335558060,EWR-PHX-PDX 3,A321neo,https://www.airlines-manager.com/network/showline/39259269,https://www.airlines-manager.com/network/showflight/51335558060,https://www.airlines-manager.com/aircraft/show/113595213,0:00,11:29,338,"$757,734.00","$705,027.00"
EWR - PDX,51335558061,EWR-PHX-PDX 4,A321neo,https://www.airlines-manager.com/network/showline/39259269,https://www.airlines-manager.com/network/showflight/51335558061,https://www.airlines-manager.com/aircraft/show/113595214,2:00,13:29,338,"$757,734.00","$705,027.00"
EWR - PDX,51335558062,EWR-PHX-PDX 5,A321neo,https://www.airlines-manager.com/network/showline/39259269,https://www.airlines-manager.com/network/showflight/51335558062,https://www.airlines-manager.com/aircraft/show/113595215,5:00,16:29,338,"$757,734.00","$705,027.00"
EWR - PDX,51335558063,EWR-PHX-PDX 6 B,A319-100,https://www.airlines-manager.com/network/showline/39259269,https://www.airlines-manager.com/network/showflight/51335558063,https://www.airlines-manager.com/aircraft/show/99219630,6:30,17:59,198,"$526,441.00","$481,744.00"
EWR - PDX,51347851088,EWR-PHX-PDX 1,A321neo,https://www.airlines-manager.com/network/showline/39259269,https://www.airlines-manager.com/network/showflight/51347851088,https://www.airlines-manager.com/aircraft/show/113595211,10:15,21:44,338,"$757,734.00","$705,027.00"
EWR - PDX,51347851091,EWR-PHX-PDX 2,A321neo,https://www.airlines-manager.com/network/showline/39259269,https://www.airlines-manager.com/network/showflight/51347851091,https://www.airlines-manager.com/aircraft/show/113595212,12:15,23:44,305,"$712,539.00","$661,659.00"
EWR - PHX,51335558064,EWR-PHX-PDX 1,A321neo,https://www.airlines-manager.com/network/showline/39338280,https://www.airlines-manager.com/network/showflight/51335558064,https://www.airlines-manager.com/aircraft/show/113595211,0:00,10:14,338,"$704,208.00","$646,838.00"
EWR - PHX,51335558065,EWR-PHX-PDX 2,A321neo,https://www.airlines-manager.com/network/showline/39338280,https://www.airlines-manager.com/network/showflight/51335558065,https://www.airlines-manager.com/aircraft/show/113595212,2:00,12:14,338,"$704,208.00","$646,838.00"
EWR - PHX,51347851222,EWR-PHX-PDX 3,A321neo,https://www.airlines-manager.com/network/showline/39338280,https://www.airlines-manager.com/network/showflight/51347851222,https://www.airlines-manager.com/aircraft/show/113595213,11:30,21:44,338,"$704,208.00","$646,838.00"
EWR - PHX,51355083322,EWR-PHX-PDX 4,A321neo,https://www.airlines-manager.com/network/showline/39338280,https://www.airlines-manager.com/network/showflight/51355083322,https://www.airlines-manager.com/aircraft/show/113595214,13:30,23:44,338,"$704,208.00","$646,838.00"
EWR - PHX,51363387361,EWR-PHX-PDX 5,A321neo,https://www.airlines-manager.com/network/showline/39338280,https://www.airlines-manager.com/network/showflight/51363387361,https://www.airlines-manager.com/aircraft/show/113595215,16:30,2:44,338,"$704,208.00","$646,838.00"
EWR - PHX,51363387363,EWR-PHX-PDX 6 B,A319-100,https://www.airlines-manager.com/network/showline/39338280,https://www.airlines-manager.com/network/showflight/51363387363,https://www.airlines-manager.com/aircraft/show/99219630,18:00,4:29,197,"$488,400.00","$440,352.00"
EWR - PIT,51335558528,EWR-STL-PIT 5,ERJ-175,https://www.airlines-manager.com/network/showline/44778351,https://www.airlines-manager.com/network/showflight/51335558528,https://www.airlines-manager.com/aircraft/show/98887257,3:15,6:29,112,"$77,854.00","$63,494.00"
EWR - PIT,51335558529,EWR-STL-PIT 3,737-900ER,https://www.airlines-manager.com/network/showline/44778351,https://www.airlines-manager.com/network/showflight/51335558529,https://www.airlines-manager.com/aircraft/show/98936169,6:30,9:44,320,"$168,516.00","$141,648.00"
EWR - PIT,51347851000,EWR-STL-PIT 2,737-900ER,https://www.airlines-manager.com/network/showline/44778351,https://www.airlines-manager.com/network/showflight/51347851000,https://www.airlines-manager.com/aircraft/show/98936170,10:00,13:14,320,"$168,516.00","$141,648.00"
EWR - PIT,51355083285,EWR-STL-PIT 4,737-900ER,https://www.airlines-manager.com/network/showline/44778351,https://www.airlines-manager.com/network/showflight/51355083285,https://www.airlines-manager.com/aircraft/show/98936168,13:00,16:14,320,"$168,516.00","$141,648.00"
EWR - PIT,51363387223,EWR-STL-PIT 1,737-900ER,https://www.airlines-manager.com/network/showline/44778351,https://www.airlines-manager.com/network/showflight/51363387223,https://www.airlines-manager.com/aircraft/show/98936171,15:30,18:44,320,"$168,516.00","$141,648.00"
EWR - PIT,51363387224,EWR-STL-PIT 5,ERJ-175,https://www.airlines-manager.com/network/showline/44778351,https://www.airlines-manager.com/network/showflight/51363387224,https://www.airlines-manager.com/aircraft/show/98887257,18:30,21:44,112,"$77,854.00","$63,494.00"
EWR - PVD,51335558349,EWR-TUL-DSM 4,A321-200,https://www.airlines-manager.com/network/showline/47540547,https://www.airlines-manager.com/network/showflight/51335558349,https://www.airlines-manager.com/aircraft/show/110044466,1:30,4:14,310,"$98,870.00","$81,235.00"
EWR - PVD,51347850843,EWR-TUL-DSM 3,A321-200,https://www.airlines-manager.com/network/showline/47540547,https://www.airlines-manager.com/network/showflight/51347850843,https://www.airlines-manager.com/aircraft/show/110044465,9:15,11:59,310,"$98,870.00","$81,235.00"
EWR - PVD,51347850844,EWR-TUL-DSM 2,A321-200,https://www.airlines-manager.com/network/showline/47540547,https://www.airlines-manager.com/network/showflight/51347850844,https://www.airlines-manager.com/aircraft/show/110044464,11:00,13:44,310,"$98,870.00","$81,235.00"
EWR - PVD,51370306942,EWR-TUL-DSM 1,A321-200,https://www.airlines-manager.com/network/showline/47540547,https://www.airlines-manager.com/network/showflight/51370306942,https://www.airlines-manager.com/aircraft/show/110044463,19:45,22:29,310,"$98,870.00","$81,235.00"
EWR - PVD,51374354759,EWR-TUL-DSM 5,ERJ-175,https://www.airlines-manager.com/network/showline/47540547,https://www.airlines-manager.com/network/showflight/51374354759,https://www.airlines-manager.com/aircraft/show/110113039,23:15,1:59,112,"$42,428.00","$31,570.00"
EWR - PWM,51335558625,EWR-TUL-DSM 1,A321-200,https://www.airlines-manager.com/network/showline/47540554,https://www.airlines-manager.com/network/showflight/51335558625,https://www.airlines-manager.com/aircraft/show/110044463,4:30,7:44,310,"$153,986.00","$134,936.00"
EWR - PWM,51347850763,EWR-TUL-DSM 5,ERJ-175,https://www.airlines-manager.com/network/showline/47540554,https://www.airlines-manager.com/network/showflight/51347850763,https://www.airlines-manager.com/aircraft/show/110113039,8:45,11:59,112,"$69,973.00","$58,047.00"
EWR - PWM,51347850766,EWR-TUL-DSM 4,A321-200,https://www.airlines-manager.com/network/showline/47540554,https://www.airlines-manager.com/network/showflight/51347850766,https://www.airlines-manager.com/aircraft/show/110044466,11:00,14:14,310,"$153,986.00","$134,936.00"
EWR - PWM,51363387552,EWR-TUL-DSM 3,A321-200,https://www.airlines-manager.com/network/showline/47540554,https://www.airlines-manager.com/network/showflight/51363387552,https://www.airlines-manager.com/aircraft/show/110044465,18:00,21:14,310,"$153,986.00","$134,936.00"
EWR - PWM,51370306930,EWR-TUL-DSM 2,A321-200,https://www.airlines-manager.com/network/showline/47540554,https://www.airlines-manager.com/network/showflight/51370306930,https://www.airlines-manager.com/aircraft/show/110044464,19:45,22:59,299,"$150,793.00","$131,828.00"
EWR - RDU,51335558315,EWR-IND-RDU 4,737-900ER,https://www.airlines-manager.com/network/showline/46258935,https://www.airlines-manager.com/network/showflight/51335558315,https://www.airlines-manager.com/aircraft/show/105731236,1:15,4:59,320,"$200,277.00","$172,309.00"
EWR - RDU,51335558316,EWR-IND-RDU 3,737-900ER,https://www.airlines-manager.com/network/showline/46258935,https://www.airlines-manager.com/network/showflight/51335558316,https://www.airlines-manager.com/aircraft/show/88494376,5:00,8:44,320,"$200,277.00","$172,309.00"
EWR - RDU,51347851163,EWR-IND-RDU 2,737-900ER,https://www.airlines-manager.com/network/showline/46258935,https://www.airlines-manager.com/network/showflight/51347851163,https://www.airlines-manager.com/aircraft/show/88494377,11:00,14:44,320,"$200,277.00","$172,309.00"
EWR - RDU,51363387235,EWR-IND-RDU 1,737-900ER,https://www.airlines-manager.com/network/showline/46258935,https://www.airlines-manager.com/network/showflight/51363387235,https://www.airlines-manager.com/aircraft/show/88494375,15:30,19:14,320,"$200,277.00","$172,309.00"
EWR - RDU,51370307133,EWR-IND-RDU 5,ERJ-175,https://www.airlines-manager.com/network/showline/46258935,https://www.airlines-manager.com/network/showflight/51370307133,https://www.airlines-manager.com/aircraft/show/106104450,22:00,1:44,112,"$92,910.00","$77,713.00"
EWR - RIC,51335558255,EWR-IND-RDU 2,737-900ER,https://www.airlines-manager.com/network/showline/46242111,https://www.airlines-manager.com/network/showflight/51335558255,https://www.airlines-manager.com/aircraft/show/88494377,1:00,4:14,320,"$138,896.00","$115,475.00"
EWR - RIC,51335558256,EWR-IND-RDU 1,737-900ER,https://www.airlines-manager.com/network/showline/46242111,https://www.airlines-manager.com/network/showflight/51335558256,https://www.airlines-manager.com/aircraft/show/88494375,5:30,8:44,320,"$138,896.00","$115,475.00"
EWR - RIC,51355083404,EWR-IND-RDU 5,ERJ-175,https://www.airlines-manager.com/network/showline/46242111,https://www.airlines-manager.com/network/showflight/51355083404,https://www.airlines-manager.com/aircraft/show/106104450,14:15,17:29,112,"$62,552.00","$50,035.00"
EWR - RIC,51363387507,EWR-IND-RDU 4,737-900ER,https://www.airlines-manager.com/network/showline/46242111,https://www.airlines-manager.com/network/showflight/51363387507,https://www.airlines-manager.com/aircraft/show/105731236,17:30,20:44,320,"$138,896.00","$115,475.00"
EWR - RIC,51370307082,EWR-IND-RDU 3,737-900ER,https://www.airlines-manager.com/network/showline/46242111,https://www.airlines-manager.com/network/showflight/51370307082,https://www.airlines-manager.com/aircraft/show/88494376,21:15,0:29,320,"$138,896.00","$115,475.00"
EWR - RNO,51335558399,EWR-RNO-MEM 5 B,A319-100,https://www.airlines-manager.com/network/showline/45056255,https://www.airlines-manager.com/network/showflight/51335558399,https://www.airlines-manager.com/aircraft/show/100096560,2:00,13:29,198,"$529,149.00","$487,362.00"
EWR - RNO,51347851112,EWR-RNO-MEM 1,737-900ER,https://www.airlines-manager.com/network/showline/45056255,https://www.airlines-manager.com/network/showflight/51347851112,https://www.airlines-manager.com/aircraft/show/99920622,10:15,21:29,320,"$701,693.00","$644,733.00"
EWR - RNO,51355083379,EWR-RNO-MEM 4,737-900ER,https://www.airlines-manager.com/network/showline/45056255,https://www.airlines-manager.com/network/showflight/51355083379,https://www.airlines-manager.com/aircraft/show/99920619,14:00,1:14,320,"$701,693.00","$644,733.00"
EWR - RNO,51363387389,EWR-RNO-MEM 3,737-900ER,https://www.airlines-manager.com/network/showline/45056255,https://www.airlines-manager.com/network/showflight/51363387389,https://www.airlines-manager.com/aircraft/show/99920620,16:30,3:44,320,"$701,693.00","$644,733.00"
EWR - RNO,51370307140,EWR-RNO-MEM 2,737-900ER,https://www.airlines-manager.com/network/showline/45056255,https://www.airlines-manager.com/network/showflight/51370307140,https://www.airlines-manager.com/aircraft/show/99920621,22:15,9:29,320,"$701,693.00","$644,733.00"
EWR - RSW,51335558530,EWR-RNO-MEM 1,737-900ER,https://www.airlines-manager.com/network/showline/45056246,https://www.airlines-manager.com/network/showflight/51335558530,https://www.airlines-manager.com/aircraft/show/99920622,3:15,9:29,320,"$388,206.00","$349,436.00"
EWR - RSW,51335558531,EWR-RNO-MEM 4,737-900ER,https://www.airlines-manager.com/network/showline/45056246,https://www.airlines-manager.com/network/showflight/51335558531,https://www.airlines-manager.com/aircraft/show/99920619,7:00,13:14,320,"$388,206.00","$349,436.00"
EWR - RSW,51347851085,EWR-RNO-MEM 3,737-900ER,https://www.airlines-manager.com/network/showline/45056246,https://www.airlines-manager.com/network/showflight/51347851085,https://www.airlines-manager.com/aircraft/show/99920620,10:15,16:29,320,"$388,206.00","$349,436.00"
EWR - RSW,51355083369,EWR-RNO-MEM 5 B,A319-100,https://www.airlines-manager.com/network/showline/45056246,https://www.airlines-manager.com/network/showflight/51355083369,https://www.airlines-manager.com/aircraft/show/100096560,14:00,20:14,198,"$294,435.00","$266,876.00"
EWR - RSW,51363387272,EWR-RNO-MEM 2,737-900ER,https://www.airlines-manager.com/network/showline/45056246,https://www.airlines-manager.com/network/showflight/51363387272,https://www.airlines-manager.com/aircraft/show/99920621,16:00,22:14,320,"$388,206.00","$349,436.00"
EWR - SAN,51335558038,EWR-MIA-ORD 3,A321neo,https://www.airlines-manager.com/network/showline/39319598,https://www.airlines-manager.com/network/showflight/51335558038,https://www.airlines-manager.com/aircraft/show/113251307,0:00,11:29,338,"$775,604.00","$723,308.00"
EWR - SAN,51347850996,EWR-MIA-ORD 5,A321neo,https://www.airlines-manager.com/network/showline/39319598,https://www.airlines-manager.com/network/showflight/51347850996,https://www.airlines-manager.com/aircraft/show/113251309,10:00,21:29,338,"$775,604.00","$723,308.00"
EWR - SAN,51363387219,EWR-MIA-ORD 1,A321neo,https://www.airlines-manager.com/network/showline/39319598,https://www.airlines-manager.com/network/showflight/51363387219,https://www.airlines-manager.com/aircraft/show/113251305,15:15,2:44,338,"$775,604.00","$723,308.00"
EWR - SAN,51363387220,EWR-MIA-ORD 2,A321neo,https://www.airlines-manager.com/network/showline/39319598,https://www.airlines-manager.com/network/showflight/51363387220,https://www.airlines-manager.com/aircraft/show/113251306,16:15,3:44,338,"$775,604.00","$723,308.00"
EWR - SAN,51370307145,EWR-MIA-ORD 4,A321neo,https://www.airlines-manager.com/network/showline/39319598,https://www.airlines-manager.com/network/showflight/51370307145,https://www.airlines-manager.com/aircraft/show/113251308,22:15,9:44,338,"$775,604.00","$723,308.00"
EWR - SAT,51335558362,EWR-ELP-SAT 3,737-900ER,https://www.airlines-manager.com/network/showline/45356722,https://www.airlines-manager.com/network/showflight/51335558362,https://www.airlines-manager.com/aircraft/show/103365576,1:45,9:59,320,"$517,034.00","$473,240.00"
EWR - SAT,51347850875,EWR-ELP-SAT 2,737-900ER,https://www.airlines-manager.com/network/showline/45356722,https://www.airlines-manager.com/network/showflight/51347850875,https://www.airlines-manager.com/aircraft/show/103365577,10:00,18:14,320,"$517,034.00","$473,240.00"
EWR - SAT,51347850876,EWR-ELP-SAT 5 B,A319-100,https://www.airlines-manager.com/network/showline/45356722,https://www.airlines-manager.com/network/showflight/51347850876,https://www.airlines-manager.com/aircraft/show/110582847,12:00,20:14,198,"$390,297.00","$358,593.00"
EWR - SAT,51363387633,EWR-ELP-SAT 1,737-900ER,https://www.airlines-manager.com/network/showline/45356722,https://www.airlines-manager.com/network/showflight/51363387633,https://www.airlines-manager.com/aircraft/show/103365578,19:30,3:44,320,"$517,034.00","$473,240.00"
EWR - SAT,51370307106,EWR-ELP-SAT 4,737-900ER,https://www.airlines-manager.com/network/showline/45356722,https://www.airlines-manager.com/network/showflight/51370307106,https://www.airlines-manager.com/aircraft/show/103365575,21:30,5:44,320,"$517,034.00","$473,240.00"
EWR - SAV,51335558626,EWR-COS-ICT 5,ERJ-175,https://www.airlines-manager.com/network/showline/47218122,https://www.airlines-manager.com/network/showflight/51335558626,https://www.airlines-manager.com/aircraft/show/108466265,4:30,9:29,112,"$146,144.00","$129,227.00"
EWR - SAV,51347850808,EWR-COS-ICT 3,A321-200,https://www.airlines-manager.com/network/showline/47218122,https://www.airlines-manager.com/network/showflight/51347850808,https://www.airlines-manager.com/aircraft/show/108834810,9:00,13:59,310,"$307,285.00","$281,150.00"
EWR - SAV,51347850809,EWR-COS-ICT 2,A321-200,https://www.airlines-manager.com/network/showline/47218122,https://www.airlines-manager.com/network/showflight/51347850809,https://www.airlines-manager.com/aircraft/show/108834809,11:00,15:59,310,"$307,285.00","$281,150.00"
EWR - SAV,51363387543,EWR-COS-ICT 1,A321-200,https://www.airlines-manager.com/network/showline/47218122,https://www.airlines-manager.com/network/showflight/51363387543,https://www.airlines-manager.com/aircraft/show/108834808,18:00,22:59,310,"$307,285.00","$281,150.00"
EWR - SAV,51370306961,EWR-COS-ICT 4,A321-200,https://www.airlines-manager.com/network/showline/47218122,https://www.airlines-manager.com/network/showflight/51370306961,https://www.airlines-manager.com/aircraft/show/108834811,20:00,0:59,258,"$277,144.00","$252,018.00"
EWR - SDF,51335558594,EWR-LIT-FAR 2,A321-200,https://www.airlines-manager.com/network/showline/48530172,https://www.airlines-manager.com/network/showflight/51335558594,https://www.airlines-manager.com/aircraft/show/86270787,4:00,8:29,310,"$295,484.00","$268,391.00"
EWR - SDF,51335558595,EWR-LIT-FAR 1,A321-200,https://www.airlines-manager.com/network/showline/48530172,https://www.airlines-manager.com/network/showflight/51335558595,https://www.airlines-manager.com/aircraft/show/90452834,8:15,12:44,310,"$295,484.00","$268,391.00"
EWR - SDF,51355083440,EWR-LIT-FAR 4,A321-200,https://www.airlines-manager.com/network/showline/48530172,https://www.airlines-manager.com/network/showflight/51355083440,https://www.airlines-manager.com/aircraft/show/86270784,15:00,19:29,310,"$295,484.00","$268,391.00"
EWR - SDF,51363387568,EWR-LIT-FAR 3,A321-200,https://www.airlines-manager.com/network/showline/48530172,https://www.airlines-manager.com/network/showflight/51363387568,https://www.airlines-manager.com/aircraft/show/86270786,18:15,22:44,309,"$294,592.00","$267,521.00"
EWR - SEA,51335558259,EWR-DFW-ATL 5,737-900ER,https://www.airlines-manager.com/network/showline/39259211,https://www.airlines-manager.com/network/showflight/51335558259,https://www.airlines-manager.com/aircraft/show/86238752,1:00,12:14,320,"$708,680.00","$639,611.00"
EWR - SEA,51335558260,EWR-DFW-ATL 3,737-900ER,https://www.airlines-manager.com/network/showline/39259211,https://www.airlines-manager.com/network/showflight/51335558260,https://www.airlines-manager.com/aircraft/show/90489726,3:00,14:14,320,"$708,680.00","$639,611.00"
EWR - SEA,51347851208,EWR-DFW-ATL 4,737-900ER,https://www.airlines-manager.com/network/showline/39259211,https://www.airlines-manager.com/network/showflight/51347851208,https://www.airlines-manager.com/aircraft/show/86238753,11:00,22:14,320,"$708,680.00","$639,611.00"
EWR - SEA,51355083439,EWR-DFW-ATL 1,737-900ER,https://www.airlines-manager.com/network/showline/39259211,https://www.airlines-manager.com/network/showflight/51355083439,https://www.airlines-manager.com/aircraft/show/90489724,15:00,2:14,320,"$708,680.00","$639,611.00"
EWR - SEA,51374354707,EWR-DFW-ATL 2,737-900ER,https://www.airlines-manager.com/network/showline/39259211,https://www.airlines-manager.com/network/showflight/51374354707,https://www.airlines-manager.com/aircraft/show/90489725,22:45,9:59,320,"$708,680.00","$639,611.00"
EWR - SEA,51374354708,EWR-DFW-ATL 6 B,A319-100,https://www.airlines-manager.com/network/showline/39259211,https://www.airlines-manager.com/network/showflight/51374354708,https://www.airlines-manager.com/aircraft/show/105222360,23:30,10:59,198,"$534,187.00","$484,309.00"
EWR - SFO,51335558051,EWR-SFO-LAX 1,757-300,https://www.airlines-manager.com/network/showline/39254584,https://www.airlines-manager.com/network/showflight/51335558051,https://www.airlines-manager.com/aircraft/show/83716137,0:00,11:44,400,"$942,980.00","$858,371.00"
EWR - SFO,51335558052,EWR-SFO-LAX 2,757-300,https://www.airlines-manager.com/network/showline/39254584,https://www.airlines-manager.com/network/showflight/51335558052,https://www.airlines-manager.com/aircraft/show/89233028,1:30,13:14,400,"$942,980.00","$858,371.00"
EWR - SFO,51335558053,EWR-SFO-LAX 3,757-300,https://www.airlines-manager.com/network/showline/39254584,https://www.airlines-manager.com/network/showflight/51335558053,https://www.airlines-manager.com/aircraft/show/89233029,3:00,14:44,400,"$942,980.00","$858,371.00"
EWR - SFO,51347851261,EWR-SFO-LAX 4,757-300,https://www.airlines-manager.com/network/showline/39254584,https://www.airlines-manager.com/network/showflight/51347851261,https://www.airlines-manager.com/aircraft/show/89233030,12:15,23:59,400,"$942,980.00","$858,371.00"
EWR - SFO,51355083397,EWR-SFO-LAX 5,757-300,https://www.airlines-manager.com/network/showline/39254584,https://www.airlines-manager.com/network/showflight/51355083397,https://www.airlines-manager.com/aircraft/show/89233027,14:15,1:59,400,"$942,980.00","$858,371.00"
EWR - SJC,51335558069,EWR-OAK-SJC 2,A321-200,https://www.airlines-manager.com/network/showline/45881921,https://www.airlines-manager.com/network/showflight/51335558069,https://www.airlines-manager.com/aircraft/show/104717242,0:00,11:59,310,"$731,687.00","$675,737.00"
EWR - SJC,51335558070,EWR-OAK-SJC 3,A321-200,https://www.airlines-manager.com/network/showline/45881921,https://www.airlines-manager.com/network/showflight/51335558070,https://www.airlines-manager.com/aircraft/show/104717241,2:00,13:59,310,"$731,687.00","$675,737.00"
EWR - SJC,51347851116,EWR-OAK-SJC 4,A321-200,https://www.airlines-manager.com/network/showline/45881921,https://www.airlines-manager.com/network/showflight/51347851116,https://www.airlines-manager.com/aircraft/show/104717240,10:30,22:29,310,"$731,687.00","$675,737.00"
EWR - SJC,51355083287,EWR-OAK-SJC 5,A321-200,https://www.airlines-manager.com/network/showline/45881921,https://www.airlines-manager.com/network/showflight/51355083287,https://www.airlines-manager.com/aircraft/show/104717239,13:00,0:59,310,"$731,687.00","$675,737.00"
EWR - SJC,51370307126,EWR-OAK-SJC 1,A321-200,https://www.airlines-manager.com/network/showline/45881921,https://www.airlines-manager.com/network/showflight/51370307126,https://www.airlines-manager.com/aircraft/show/104717243,22:00,9:59,310,"$731,687.00","$675,737.00"
EWR - SJU,51335558173,EWR-CUN-SJU 1,737-900ER,https://www.airlines-manager.com/network/showline/46524807,https://www.airlines-manager.com/network/showflight/51335558173,https://www.airlines-manager.com/aircraft/show/106581304,0:30,8:44,320,"$525,884.00","$479,987.00"
EWR - SJU,51335558174,EWR-CUN-SJU 4,737-900ER,https://www.airlines-manager.com/network/showline/46524807,https://www.airlines-manager.com/network/showflight/51335558174,https://www.airlines-manager.com/aircraft/show/106581307,2:00,10:14,320,"$525,884.00","$479,987.00"
EWR - SJU,51335558175,EWR-CUN-SJU 5,737-900ER,https://www.airlines-manager.com/network/showline/46524807,https://www.airlines-manager.com/network/showflight/51335558175,https://www.airlines-manager.com/aircraft/show/86238754,7:00,15:14,320,"$525,884.00","$479,987.00"
EWR - SJU,51355083245,EWR-CUN-SJU 3,737-900ER,https://www.airlines-manager.com/network/showline/46524807,https://www.airlines-manager.com/network/showflight/51355083245,https://www.airlines-manager.com/aircraft/show/106581306,13:00,21:14,320,"$525,884.00","$479,987.00"
EWR - SJU,51355083246,EWR-CUN-SJU 2,737-900ER,https://www.airlines-manager.com/network/showline/46524807,https://www.airlines-manager.com/network/showflight/51355083246,https://www.airlines-manager.com/aircraft/show/106581305,14:30,22:44,320,"$525,884.00","$479,987.00"
EWR - SLC,51335558132,EWR-DEN-SLC 5,A321-200,https://www.airlines-manager.com/network/showline/42046650,https://www.airlines-manager.com/network/showflight/51335558132,https://www.airlines-manager.com/aircraft/show/90452833,0:15,9:59,310,"$610,496.00","$558,567.00"
EWR - SLC,51335558133,EWR-DEN-SLC 2,A321-200,https://www.airlines-manager.com/network/showline/42046650,https://www.airlines-manager.com/network/showflight/51335558133,https://www.airlines-manager.com/aircraft/show/87153196,0:15,9:59,310,"$610,496.00","$558,567.00"
EWR - SLC,51335558134,EWR-DEN-SLC 6 B,A319-100,https://www.airlines-manager.com/network/showline/42046650,https://www.airlines-manager.com/network/showflight/51335558134,https://www.airlines-manager.com/aircraft/show/105223076,1:15,10:59,198,"$459,244.00","$417,617.00"
EWR - SLC,51347850922,EWR-DEN-SLC 1,A321-200,https://www.airlines-manager.com/network/showline/42046650,https://www.airlines-manager.com/network/showflight/51347850922,https://www.airlines-manager.com/aircraft/show/86270785,10:00,19:44,310,"$610,496.00","$558,567.00"
EWR - SLC,51347850924,EWR-DEN-SLC 4,A321-200,https://www.airlines-manager.com/network/showline/42046650,https://www.airlines-manager.com/network/showflight/51347850924,https://www.airlines-manager.com/aircraft/show/90452835,11:00,20:44,310,"$610,496.00","$558,567.00"
EWR - SLC,51363387623,EWR-DEN-SLC 3,A321-200,https://www.airlines-manager.com/network/showline/42046650,https://www.airlines-manager.com/network/showflight/51363387623,https://www.airlines-manager.com/aircraft/show/86270783,19:15,4:59,310,"$610,496.00","$558,567.00"
EWR - SMF,51335558078,EWR-SMF-ONT 1,737-900ER,https://www.airlines-manager.com/network/showline/48619145,https://www.airlines-manager.com/network/showflight/51335558078,https://www.airlines-manager.com/aircraft/show/94889150,0:00,11:44,320,"$717,456.00","$659,009.00"
EWR - SMF,51335558079,EWR-SMF-ONT 2,737-900ER,https://www.airlines-manager.com/network/showline/48619145,https://www.airlines-manager.com/network/showflight/51335558079,https://www.airlines-manager.com/aircraft/show/94889151,1:30,13:14,320,"$717,456.00","$659,009.00"
EWR - SMF,51335558080,EWR-SMF-ONT 3,737-900ER,https://www.airlines-manager.com/network/showline/48619145,https://www.airlines-manager.com/network/showflight/51335558080,https://www.airlines-manager.com/aircraft/show/94889152,3:00,14:44,320,"$717,456.00","$659,009.00"
EWR - SMF,51347851217,EWR-SMF-ONT 4,737-900ER,https://www.airlines-manager.com/network/showline/48619145,https://www.airlines-manager.com/network/showflight/51347851217,https://www.airlines-manager.com/aircraft/show/94889153,11:30,23:14,320,"$717,456.00","$659,009.00"
EWR - SMF,51355083321,EWR-SMF-ONT 5,737-900ER,https://www.airlines-manager.com/network/showline/48619145,https://www.airlines-manager.com/network/showflight/51355083321,https://www.airlines-manager.com/aircraft/show/94889154,13:30,1:14,320,"$717,456.00","$659,009.00"
EWR - SNN,51347851121,EWR 56B-7 B1,777-300,https://www.airlines-manager.com/network/showline/46604244,https://www.airlines-manager.com/network/showflight/51347851121,https://www.airlines-manager.com/aircraft/show/89124072,10:45,23:59,748,"$2,076,240.00","$1,892,979.00"
EWR - SNN,51363387589,EWR 56B-6 B1,777-300,https://www.airlines-manager.com/network/showline/46604244,https://www.airlines-manager.com/network/showflight/51363387589,https://www.airlines-manager.com/aircraft/show/94521248,18:45,7:59,748,"$1,986,856.00","$1,830,726.00"
EWR - STL,51335558279,EWR-STL-PIT 3,737-900ER,https://www.airlines-manager.com/network/showline/44784449,https://www.airlines-manager.com/network/showflight/51335558279,https://www.airlines-manager.com/aircraft/show/98936169,1:00,6:29,320,"$345,919.00","$309,451.00"
EWR - STL,51335558280,EWR-STL-PIT 2,737-900ER,https://www.airlines-manager.com/network/showline/44784449,https://www.airlines-manager.com/network/showflight/51335558280,https://www.airlines-manager.com/aircraft/show/98936170,4:15,9:44,320,"$345,919.00","$309,451.00"
EWR - STL,51347850992,EWR-STL-PIT 1,737-900ER,https://www.airlines-manager.com/network/showline/44784449,https://www.airlines-manager.com/network/showflight/51347850992,https://www.airlines-manager.com/aircraft/show/98936171,10:00,15:29,320,"$345,919.00","$309,451.00"
EWR - STL,51355083260,EWR-STL-PIT 5,ERJ-175,https://www.airlines-manager.com/network/showline/44784449,https://www.airlines-manager.com/network/showflight/51355083260,https://www.airlines-manager.com/aircraft/show/98887257,13:00,18:29,112,"$164,140.00","$143,373.00"
EWR - STL,51363387354,EWR-STL-PIT 4,737-900ER,https://www.airlines-manager.com/network/showline/44784449,https://www.airlines-manager.com/network/showflight/51363387354,https://www.airlines-manager.com/aircraft/show/98936168,16:15,21:44,320,"$345,919.00","$309,451.00"
EWR - STL,51370307119,EWR-STL-PIT 5,ERJ-175,https://www.airlines-manager.com/network/showline/44784449,https://www.airlines-manager.com/network/showflight/51370307119,https://www.airlines-manager.com/aircraft/show/98887257,21:45,3:14,112,"$164,140.00","$143,373.00"
EWR - TLS,51335558098,Charter 2,747-300,https://www.airlines-manager.com/network/showline/48907589,https://www.airlines-manager.com/network/showflight/51335558098,https://www.airlines-manager.com/aircraft/show/112787252,0:00,15:14,828,"$2,632,374.00","$2,453,729.00"
EWR - TLS,51347851252,Charter 1,747-300,https://www.airlines-manager.com/network/showline/48907589,https://www.airlines-manager.com/network/showflight/51347851252,https://www.airlines-manager.com/aircraft/show/110577510,12:00,3:14,827,"$2,630,426.00","$2,451,891.00"
EWR - TLV,51335558524,EWR-TLV 2 S,777-300,https://www.airlines-manager.com/network/showline/39655245,https://www.airlines-manager.com/network/showflight/51335558524,https://www.airlines-manager.com/aircraft/show/89124073,3:00,1:29,884,"$3,645,690.00","$3,326,341.00"
EWR - TLV,51370307049,EWR-TLV 1 S,777-300,https://www.airlines-manager.com/network/showline/39655245,https://www.airlines-manager.com/network/showflight/51370307049,https://www.airlines-manager.com/aircraft/show/93429385,21:00,19:29,884,"$3,645,690.00","$3,326,341.00"
EWR - TPA,51335558683,EWR-TUS-TPA 3,A321-200,https://www.airlines-manager.com/network/showline/44584397,https://www.airlines-manager.com/network/showflight/51335558683,https://www.airlines-manager.com/aircraft/show/98379317,5:45,11:44,310,"$375,612.00","$340,431.00"
EWR - TPA,51347851128,EWR-TUS-TPA 4,A321-200,https://www.airlines-manager.com/network/showline/44584397,https://www.airlines-manager.com/network/showflight/51347851128,https://www.airlines-manager.com/aircraft/show/98379316,10:45,16:44,310,"$375,612.00","$340,431.00"
EWR - TPA,51355083270,EWR-TUS-TPA 2,A321-200,https://www.airlines-manager.com/network/showline/44584397,https://www.airlines-manager.com/network/showflight/51355083270,https://www.airlines-manager.com/aircraft/show/98379318,13:00,18:59,310,"$375,612.00","$340,431.00"
EWR - TPA,51355083271,EWR-TUS-TPA 5,A321-200,https://www.airlines-manager.com/network/showline/44584397,https://www.airlines-manager.com/network/showflight/51355083271,https://www.airlines-manager.com/aircraft/show/98379315,15:00,20:59,310,"$375,612.00","$340,431.00"
EWR - TPA,51374354751,EWR-TUS-TPA 1,A321-200,https://www.airlines-manager.com/network/showline/44584397,https://www.airlines-manager.com/network/showflight/51374354751,https://www.airlines-manager.com/aircraft/show/98379319,23:15,5:14,310,"$375,612.00","$340,431.00"
EWR - TUL,51335558376,EWR-TUL-DSM 3,A321-200,https://www.airlines-manager.com/network/showline/47540564,https://www.airlines-manager.com/network/showflight/51335558376,https://www.airlines-manager.com/aircraft/show/110044465,1:45,8:29,310,"$426,097.00","$391,996.00"
EWR - TUL,51335558377,EWR-TUL-DSM 2,A321-200,https://www.airlines-manager.com/network/showline/47540564,https://www.airlines-manager.com/network/showflight/51335558377,https://www.airlines-manager.com/aircraft/show/110044464,3:30,10:14,310,"$426,097.00","$391,996.00"
EWR - TUL,51355083223,EWR-TUL-DSM 1,A321-200,https://www.airlines-manager.com/network/showline/47540564,https://www.airlines-manager.com/network/showflight/51355083223,https://www.airlines-manager.com/aircraft/show/110044463,13:00,19:44,310,"$426,097.00","$391,996.00"
EWR - TUL,51363387376,EWR-TUL-DSM 5,ERJ-175,https://www.airlines-manager.com/network/showline/47540564,https://www.airlines-manager.com/network/showflight/51363387376,https://www.airlines-manager.com/aircraft/show/110113039,16:30,23:14,112,"$200,572.00","$177,995.00"
EWR - TUL,51363387377,EWR-TUL-DSM 4,A321-200,https://www.airlines-manager.com/network/showline/47540564,https://www.airlines-manager.com/network/showflight/51363387377,https://www.airlines-manager.com/aircraft/show/110044466,18:45,1:29,310,"$426,097.00","$391,996.00"
EWR - TUS,51335558164,EWR-TUS-TPA 4,A321-200,https://www.airlines-manager.com/network/showline/44592944,https://www.airlines-manager.com/network/showflight/51335558164,https://www.airlines-manager.com/aircraft/show/98379316,0:30,10:44,310,"$637,910.00","$589,816.00"
EWR - TUS,51335558165,EWR-TUS-TPA 2,A321-200,https://www.airlines-manager.com/network/showline/44592944,https://www.airlines-manager.com/network/showflight/51335558165,https://www.airlines-manager.com/aircraft/show/98379318,1:30,11:44,310,"$637,910.00","$589,816.00"
EWR - TUS,51335558166,EWR-TUS-TPA 5,A321-200,https://www.airlines-manager.com/network/showline/44592944,https://www.airlines-manager.com/network/showflight/51335558166,https://www.airlines-manager.com/aircraft/show/98379315,3:30,13:44,310,"$637,910.00","$589,816.00"
EWR - TUS,51355083265,EWR-TUS-TPA 1,A321-200,https://www.airlines-manager.com/network/showline/44592944,https://www.airlines-manager.com/network/showflight/51355083265,https://www.airlines-manager.com/aircraft/show/98379319,13:00,23:14,310,"$637,910.00","$589,816.00"
EWR - TUS,51363387631,EWR-TUS-TPA 3,A321-200,https://www.airlines-manager.com/network/showline/44592944,https://www.airlines-manager.com/network/showflight/51363387631,https://www.airlines-manager.com/aircraft/show/98379317,19:30,5:44,310,"$637,910.00","$589,816.00"
EWR - YOW,51347850855,EWR-CUN-SJU 1,737-900ER,https://www.airlines-manager.com/network/showline/46524768,https://www.airlines-manager.com/network/showflight/51347850855,https://www.airlines-manager.com/aircraft/show/106581304,9:30,12:59,320,"$170,425.00","$145,094.00"
EWR - YOW,51347850856,EWR-CUN-SJU 4,737-900ER,https://www.airlines-manager.com/network/showline/46524768,https://www.airlines-manager.com/network/showflight/51347850856,https://www.airlines-manager.com/aircraft/show/106581307,11:00,14:29,320,"$170,425.00","$145,094.00"
EWR - YOW,51363387600,EWR-CUN-SJU 5,737-900ER,https://www.airlines-manager.com/network/showline/46524768,https://www.airlines-manager.com/network/showflight/51363387600,https://www.airlines-manager.com/aircraft/show/86238754,18:45,22:14,320,"$170,425.00","$145,094.00"
EWR - YOW,51370307093,EWR-CUN-SJU 3,737-900ER,https://www.airlines-manager.com/network/showline/46524768,https://www.airlines-manager.com/network/showflight/51370307093,https://www.airlines-manager.com/aircraft/show/106581306,21:15,0:44,320,"$170,425.00","$145,094.00"
EWR - YOW,51374354711,EWR-CUN-SJU 2,737-900ER,https://www.airlines-manager.com/network/showline/46524768,https://www.airlines-manager.com/network/showflight/51374354711,https://www.airlines-manager.com/aircraft/show/106581305,22:45,2:14,290,"$160,689.00","$135,623.00"
EWR - YUL,51347850853,EWR-CUN-SJU 3,737-900ER,https://www.airlines-manager.com/network/showline/46524780,https://www.airlines-manager.com/network/showflight/51347850853,https://www.airlines-manager.com/aircraft/show/106581306,9:30,12:59,320,"$173,622.00","$145,464.00"
EWR - YUL,51347850854,EWR-CUN-SJU 2,737-900ER,https://www.airlines-manager.com/network/showline/46524780,https://www.airlines-manager.com/network/showflight/51347850854,https://www.airlines-manager.com/aircraft/show/106581305,11:00,14:29,320,"$173,622.00","$145,464.00"
EWR - YUL,51363387221,EWR-CUN-SJU 5,737-900ER,https://www.airlines-manager.com/network/showline/46524780,https://www.airlines-manager.com/network/showflight/51363387221,https://www.airlines-manager.com/aircraft/show/86238754,15:15,18:44,320,"$173,622.00","$145,464.00"
EWR - YUL,51370307053,EWR-CUN-SJU 1,737-900ER,https://www.airlines-manager.com/network/showline/46524780,https://www.airlines-manager.com/network/showflight/51370307053,https://www.airlines-manager.com/aircraft/show/106581304,21:00,0:29,320,"$173,622.00","$145,464.00"
EWR - YUL,51374354681,EWR-CUN-SJU 4,737-900ER,https://www.airlines-manager.com/network/showline/46524780,https://www.airlines-manager.com/network/showflight/51374354681,https://www.airlines-manager.com/aircraft/show/106581307,22:30,1:59,320,"$173,622.00","$145,464.00"
EWR - YVR,51335558057,EWR-YVR-YYC 1,757-300,https://www.airlines-manager.com/network/showline/39297576,https://www.airlines-manager.com/network/showflight/51335558057,https://www.airlines-manager.com/aircraft/show/113681636,0:00,11:14,400,"$908,637.00","$836,259.00"
EWR - YVR,51335558058,EWR-YVR-YYC 2,757-300,https://www.airlines-manager.com/network/showline/39297576,https://www.airlines-manager.com/network/showflight/51335558058,https://www.airlines-manager.com/aircraft/show/113681637,1:30,12:44,400,"$908,637.00","$836,259.00"
EWR - YVR,51335558059,EWR-YVR-YYC 3,757-300,https://www.airlines-manager.com/network/showline/39297576,https://www.airlines-manager.com/network/showflight/51335558059,https://www.airlines-manager.com/aircraft/show/113681638,3:00,14:14,400,"$908,637.00","$836,259.00"
EWR - YVR,51347851216,EWR-YVR-YYC 4,757-300,https://www.airlines-manager.com/network/showline/39297576,https://www.airlines-manager.com/network/showflight/51347851216,https://www.airlines-manager.com/aircraft/show/113681639,11:15,22:29,400,"$908,637.00","$836,259.00"
EWR - YVR,51355083193,EWR-YVR-YYC 5,757-300,https://www.airlines-manager.com/network/showline/39297576,https://www.airlines-manager.com/network/showflight/51355083193,https://www.airlines-manager.com/aircraft/show/113681640,12:45,23:59,398,"$905,826.00","$833,574.00"
EWR - YYC,51335558322,EWR-YVR-YYC 4,757-300,https://www.airlines-manager.com/network/showline/48643425,https://www.airlines-manager.com/network/showflight/51335558322,https://www.airlines-manager.com/aircraft/show/113681639,1:30,11:14,400,"$787,946.00","$724,393.00"
EWR - YYC,51335558323,EWR-YVR-YYC 5,757-300,https://www.airlines-manager.com/network/showline/48643425,https://www.airlines-manager.com/network/showflight/51335558323,https://www.airlines-manager.com/aircraft/show/113681640,3:00,12:44,400,"$787,946.00","$724,393.00"
EWR - YYC,51347851214,EWR-YVR-YYC 1,757-300,https://www.airlines-manager.com/network/showline/48643425,https://www.airlines-manager.com/network/showflight/51347851214,https://www.airlines-manager.com/aircraft/show/113681636,11:15,20:59,400,"$787,946.00","$724,393.00"
EWR - YYC,51355083185,EWR-YVR-YYC 2,757-300,https://www.airlines-manager.com/network/showline/48643425,https://www.airlines-manager.com/network/showflight/51355083185,https://www.airlines-manager.com/aircraft/show/113681637,12:45,22:29,400,"$787,946.00","$724,393.00"
EWR - YYC,51355083186,EWR-YVR-YYC 3,757-300,https://www.airlines-manager.com/network/showline/48643425,https://www.airlines-manager.com/network/showflight/51355083186,https://www.airlines-manager.com/aircraft/show/113681638,14:15,23:59,399,"$786,244.00","$722,757.00"
EWR - YYZ,51335558431,EWR-DTW-YYZ 4,737-900ER,https://www.airlines-manager.com/network/showline/42503817,https://www.airlines-manager.com/network/showflight/51335558431,https://www.airlines-manager.com/aircraft/show/92003922,2:15,5:44,320,"$178,373.00","$144,035.00"
EWR - YYZ,51335558432,EWR-DTW-YYZ 5,737-900ER,https://www.airlines-manager.com/network/showline/42503817,https://www.airlines-manager.com/network/showflight/51335558432,https://www.airlines-manager.com/aircraft/show/92003921,7:30,10:59,320,"$178,373.00","$144,035.00"
EWR - YYZ,51347850967,EWR-DTW-YYZ 2,737-900ER,https://www.airlines-manager.com/network/showline/42503817,https://www.airlines-manager.com/network/showflight/51347850967,https://www.airlines-manager.com/aircraft/show/92003924,10:00,13:29,320,"$178,373.00","$144,035.00"
EWR - YYZ,51355083381,EWR-DTW-YYZ 1,737-900ER,https://www.airlines-manager.com/network/showline/42503817,https://www.airlines-manager.com/network/showflight/51355083381,https://www.airlines-manager.com/aircraft/show/92003925,14:00,17:29,320,"$178,373.00","$144,035.00"
EWR - YYZ,51363387572,EWR-DTW-YYZ 3,737-900ER,https://www.airlines-manager.com/network/showline/42503817,https://www.airlines-manager.com/network/showflight/51363387572,https://www.airlines-manager.com/aircraft/show/92003923,18:15,21:44,320,"$178,373.00","$144,035.00"
EWR - YYZ,51363387573,EWR CARGO 1,A321neo-LR,https://www.airlines-manager.com/network/showline/42503817,https://www.airlines-manager.com/network/showflight/51363387573,https://www.airlines-manager.com/aircraft/show/103406580,19:15,22:44,0,"$63,855.00","$35,078.00"
EWR - ZRH,51335558713,EWR 84A-7 B2,777-300,https://www.airlines-manager.com/network/showline/42022972,https://www.airlines-manager.com/network/showflight/51335558713,https://www.airlines-manager.com/aircraft/show/94521249,7:45,23:59,852,"$2,623,328.00","$2,380,639.00"
EWR - ZRH,51370306957,EWR 84A-1 B2,777-300,https://www.airlines-manager.com/network/showline/42022972,https://www.airlines-manager.com/network/showflight/51370306957,https://www.airlines-manager.com/aircraft/show/90656554,20:00,12:14,852,"$2,623,328.00","$2,380,639.00"
HNL - AKL,51363387320,HNL 84B-3 F,777-300,https://www.airlines-manager.com/network/showline/44044097,https://www.airlines-manager.com/network/showflight/51363387320,https://www.airlines-manager.com/aircraft/show/96807091,16:00,9:59,832,"$2,898,943.00","$2,648,267.00"
HNL - AKL,51374354732,HNL 84B-7 F,777-300,https://www.airlines-manager.com/network/showline/44044097,https://www.airlines-manager.com/network/showflight/51374354732,https://www.airlines-manager.com/aircraft/show/96807087,23:00,16:59,832,"$2,859,925.00","$2,622,650.00"
HNL - ATL,51335558639,HNL 56B-3 B,787-10,https://www.airlines-manager.com/network/showline/47262358,https://www.airlines-manager.com/network/showflight/51335558639,https://www.airlines-manager.com/aircraft/show/109187500,4:45,22:44,592,"$2,186,990.00","$2,001,135.00"
HNL - ATL,51363387273,HNL 56B-5 B,787-10,https://www.airlines-manager.com/network/showline/47262358,https://www.airlines-manager.com/network/showflight/51363387273,https://www.airlines-manager.com/aircraft/show/109187502,16:00,9:59,592,"$2,186,990.00","$2,001,135.00"
HNL - ATL,51374354720,HNL 56B-3 B,787-10,https://www.airlines-manager.com/network/showline/47262358,https://www.airlines-manager.com/network/showflight/51374354720,https://www.airlines-manager.com/aircraft/show/109187500,22:45,16:44,592,"$2,186,990.00","$2,001,135.00"
HNL - BNE,51335558596,HNL 84B-7 F,777-300,https://www.airlines-manager.com/network/showline/45391394,https://www.airlines-manager.com/network/showflight/51335558596,https://www.airlines-manager.com/aircraft/show/96807087,4:00,22:59,832,"$3,040,599.00","$2,771,750.00"
HNL - BNE,51347850872,HNL 84B-4 F,777-300,https://www.airlines-manager.com/network/showline/45391394,https://www.airlines-manager.com/network/showflight/51347850872,https://www.airlines-manager.com/aircraft/show/96807090,10:00,4:59,832,"$3,022,210.00","$2,759,707.00"
HNL - CLT,51335558630,HNL 56D-4 B,787-10,https://www.airlines-manager.com/network/showline/48149169,https://www.airlines-manager.com/network/showflight/51335558630,https://www.airlines-manager.com/aircraft/show/112066135,4:30,23:14,592,"$2,250,194.00","$2,094,495.00"
HNL - CLT,51335558631,HNL 56D-6 B,787-10,https://www.airlines-manager.com/network/showline/48149169,https://www.airlines-manager.com/network/showflight/51335558631,https://www.airlines-manager.com/aircraft/show/112066137,5:30,0:14,592,"$2,250,194.00","$2,094,495.00"
HNL - CLT,51374354755,HNL 56D-4 B,787-10,https://www.airlines-manager.com/network/showline/48149169,https://www.airlines-manager.com/network/showflight/51374354755,https://www.airlines-manager.com/aircraft/show/112066135,23:15,17:59,592,"$2,250,194.00","$2,094,495.00"
HNL - CXI,51335558568,HNL CARGO 2,737-700,https://www.airlines-manager.com/network/showline/43541576,https://www.airlines-manager.com/network/showflight/51335558568,https://www.airlines-manager.com/aircraft/show/107563068,3:45,10:59,0,"$121,088.00","$97,422.00"
HNL - CXI,51335558569,HNL-CXI S,A321-200,https://www.airlines-manager.com/network/showline/43541576,https://www.airlines-manager.com/network/showflight/51335558569,https://www.airlines-manager.com/aircraft/show/90717080,5:30,12:44,388,"$489,381.00","$458,873.00"
HNL - CXI,51355083434,HNL-CXI S,A321-200,https://www.airlines-manager.com/network/showline/43541576,https://www.airlines-manager.com/network/showflight/51355083434,https://www.airlines-manager.com/aircraft/show/90717080,15:00,22:14,388,"$489,381.00","$458,873.00"
HNL - CXI,51370307142,HNL-CXI S,A321-200,https://www.airlines-manager.com/network/showline/43541576,https://www.airlines-manager.com/network/showflight/51370307142,https://www.airlines-manager.com/aircraft/show/90717080,22:15,5:29,388,"$489,381.00","$458,873.00"
HNL - EWR,51335558608,HNL 56A-1 B,787-10,https://www.airlines-manager.com/network/showline/43560815,https://www.airlines-manager.com/network/showflight/51335558608,https://www.airlines-manager.com/aircraft/show/95351592,4:15,23:59,592,"$2,357,004.00","$2,195,089.00"
HNL - EWR,51335558609,HNL 56A-7 B,787-10,https://www.airlines-manager.com/network/showline/43560815,https://www.airlines-manager.com/network/showflight/51335558609,https://www.airlines-manager.com/aircraft/show/95351586,6:00,1:44,592,"$2,357,004.00","$2,195,089.00"
HNL - EWR,51370306938,HNL 56A-4 B,787-10,https://www.airlines-manager.com/network/showline/43560815,https://www.airlines-manager.com/network/showflight/51370306938,https://www.airlines-manager.com/aircraft/show/95351589,19:45,15:29,592,"$2,357,004.00","$2,195,089.00"
HNL - GUM,51335558055,HNL-GUM B,787-10,https://www.airlines-manager.com/network/showline/43718411,https://www.airlines-manager.com/network/showflight/51335558055,https://www.airlines-manager.com/aircraft/show/110213648,0:00,15:29,592,"$1,868,666.00","$1,754,294.00"
HNL - GUM,51335558056,HNL 84A-4 F,777-300,https://www.airlines-manager.com/network/showline/43718411,https://www.airlines-manager.com/network/showflight/51335558056,https://www.airlines-manager.com/aircraft/show/95818923,4:45,20:29,807,"$2,402,145.00","$2,204,925.00"
HNL - IAD,51335558543,HNL 56C-4 B,787-10,https://www.airlines-manager.com/network/showline/48011873,https://www.airlines-manager.com/network/showflight/51335558543,https://www.airlines-manager.com/aircraft/show/111639416,3:15,22:14,592,"$2,264,780.00","$2,112,053.00"
HNL - IAD,51347850848,HNL 56C-6 B,787-10,https://www.airlines-manager.com/network/showline/48011873,https://www.airlines-manager.com/network/showflight/51347850848,https://www.airlines-manager.com/aircraft/show/111639418,9:15,4:14,592,"$2,264,780.00","$2,112,053.00"
HNL - IAD,51370306953,HNL 56C-1 B,787-10,https://www.airlines-manager.com/network/showline/48011873,https://www.airlines-manager.com/network/showflight/51370306953,https://www.airlines-manager.com/aircraft/show/111639413,20:00,14:59,592,"$2,264,780.00","$2,112,053.00"
HNL - IAH,51335558048,HNL 56A-2 B,787-10,https://www.airlines-manager.com/network/showline/43568404,https://www.airlines-manager.com/network/showflight/51335558048,https://www.airlines-manager.com/aircraft/show/95351591,0:00,15:59,592,"$1,922,679.00","$1,782,368.00"
HNL - IAH,51335558049,HNL 56A-4 B,787-10,https://www.airlines-manager.com/network/showline/43568404,https://www.airlines-manager.com/network/showflight/51335558049,https://www.airlines-manager.com/aircraft/show/95351589,3:45,19:44,592,"$1,922,679.00","$1,782,368.00"
HNL - IAH,51363387321,HNL 56A-2 B,787-10,https://www.airlines-manager.com/network/showline/43568404,https://www.airlines-manager.com/network/showflight/51363387321,https://www.airlines-manager.com/aircraft/show/95351591,16:00,7:59,592,"$1,922,679.00","$1,782,368.00"
HNL - ITO,51335558389,HNL Interisland 4,717-200,https://www.airlines-manager.com/network/showline/43516658,https://www.airlines-manager.com/network/showflight/51335558389,https://www.airlines-manager.com/aircraft/show/94803593,1:45,4:44,170,"$76,964.00","$66,437.00"
HNL - ITO,51335558390,HNL Interisland 1,717-200,https://www.airlines-manager.com/network/showline/43516658,https://www.airlines-manager.com/network/showflight/51335558390,https://www.airlines-manager.com/aircraft/show/94803596,3:15,6:14,170,"$76,964.00","$66,437.00"
HNL - ITO,51335558391,HNL Interisland 2,717-200,https://www.airlines-manager.com/network/showline/43516658,https://www.airlines-manager.com/network/showflight/51335558391,https://www.airlines-manager.com/aircraft/show/94803595,6:00,8:59,170,"$76,964.00","$66,437.00"
HNL - ITO,51347850857,HNL Interisland 3,717-200,https://www.airlines-manager.com/network/showline/43516658,https://www.airlines-manager.com/network/showflight/51347850857,https://www.airlines-manager.com/aircraft/show/94803594,9:30,12:29,170,"$76,964.00","$66,437.00"
HNL - ITO,51355083415,HNL Interisland 4,717-200,https://www.airlines-manager.com/network/showline/43516658,https://www.airlines-manager.com/network/showflight/51355083415,https://www.airlines-manager.com/aircraft/show/94803593,15:00,17:59,170,"$76,964.00","$66,437.00"
HNL - ITO,51363387371,HNL Interisland 1,717-200,https://www.airlines-manager.com/network/showline/43516658,https://www.airlines-manager.com/network/showflight/51363387371,https://www.airlines-manager.com/aircraft/show/94803596,16:30,19:29,170,"$76,964.00","$66,437.00"
HNL - ITO,51363387373,HNL Interisland 2,717-200,https://www.airlines-manager.com/network/showline/43516658,https://www.airlines-manager.com/network/showflight/51363387373,https://www.airlines-manager.com/aircraft/show/94803595,19:15,22:14,170,"$76,964.00","$66,437.00"
HNL - ITO,51374354721,HNL Interisland 3,717-200,https://www.airlines-manager.com/network/showline/43516658,https://www.airlines-manager.com/network/showflight/51374354721,https://www.airlines-manager.com/aircraft/show/94803594,22:45,1:44,125,"$65,129.00","$55,081.00"
HNL - JFK,51335558514,HNL 56B-7 B,787-10,https://www.airlines-manager.com/network/showline/47262348,https://www.airlines-manager.com/network/showflight/51335558514,https://www.airlines-manager.com/aircraft/show/109187504,3:00,22:44,592,"$2,389,751.00","$2,207,311.00"
HNL - JFK,51347850799,HNL 56B-2 B,787-10,https://www.airlines-manager.com/network/showline/47262348,https://www.airlines-manager.com/network/showflight/51347850799,https://www.airlines-manager.com/aircraft/show/109187499,9:00,4:44,592,"$2,389,751.00","$2,207,311.00"
HNL - JFK,51363387469,HNL 56B-4 B,787-10,https://www.airlines-manager.com/network/showline/47262348,https://www.airlines-manager.com/network/showflight/51363387469,https://www.airlines-manager.com/aircraft/show/109187501,17:00,12:44,592,"$2,393,855.00","$2,211,415.00"
HNL - KOA,51335558211,HNL Interisland 2,717-200,https://www.airlines-manager.com/network/showline/43516655,https://www.airlines-manager.com/network/showflight/51335558211,https://www.airlines-manager.com/aircraft/show/94803595,0:45,3:29,170,"$58,646.00","$48,268.00"
HNL - KOA,51335558212,HNL Interisland 3,717-200,https://www.airlines-manager.com/network/showline/43516655,https://www.airlines-manager.com/network/showflight/51335558212,https://www.airlines-manager.com/aircraft/show/94803594,4:15,6:59,170,"$58,646.00","$48,268.00"
HNL - KOA,51335558213,HNL Interisland 4,717-200,https://www.airlines-manager.com/network/showline/43516655,https://www.airlines-manager.com/network/showflight/51335558213,https://www.airlines-manager.com/aircraft/show/94803593,7:15,9:59,170,"$58,646.00","$48,268.00"
HNL - KOA,51347850775,HNL Interisland 1,717-200,https://www.airlines-manager.com/network/showline/43516655,https://www.airlines-manager.com/network/showflight/51347850775,https://www.airlines-manager.com/aircraft/show/94803596,8:45,11:29,170,"$58,646.00","$48,268.00"
HNL - KOA,51355083332,HNL Interisland 2,717-200,https://www.airlines-manager.com/network/showline/43516655,https://www.airlines-manager.com/network/showflight/51355083332,https://www.airlines-manager.com/aircraft/show/94803595,14:00,16:44,170,"$58,646.00","$48,268.00"
HNL - KOA,51363387508,HNL Interisland 3,717-200,https://www.airlines-manager.com/network/showline/43516655,https://www.airlines-manager.com/network/showflight/51363387508,https://www.airlines-manager.com/aircraft/show/94803594,17:30,20:14,170,"$58,646.00","$48,268.00"
HNL - KOA,51370307026,HNL Interisland 4,717-200,https://www.airlines-manager.com/network/showline/43516655,https://www.airlines-manager.com/network/showflight/51370307026,https://www.airlines-manager.com/aircraft/show/94803593,20:30,23:14,170,"$58,646.00","$48,268.00"
HNL - KOA,51370307027,HNL Interisland 1,717-200,https://www.airlines-manager.com/network/showline/43516655,https://www.airlines-manager.com/network/showflight/51370307027,https://www.airlines-manager.com/aircraft/show/94803596,22:00,0:44,170,"$58,646.00","$48,268.00"
HNL - LAS,51335558696,HNL 84A-6 F,777-300,https://www.airlines-manager.com/network/showline/45390240,https://www.airlines-manager.com/network/showflight/51335558696,https://www.airlines-manager.com/aircraft/show/95818921,6:30,18:29,832,"$1,927,512.00","$1,740,884.00"
HNL - LAS,51370307029,HNL 84A-4 F,777-300,https://www.airlines-manager.com/network/showline/45390240,https://www.airlines-manager.com/network/showflight/51370307029,https://www.airlines-manager.com/aircraft/show/95818923,20:30,8:29,801,"$1,880,914.00","$1,697,177.00"
HNL - LAX,51335558709,HNL-SFO-LAX 3,A321neo,https://www.airlines-manager.com/network/showline/43538953,https://www.airlines-manager.com/network/showflight/51335558709,https://www.airlines-manager.com/aircraft/show/110044460,7:00,18:59,338,"$785,134.00","$716,862.00"
HNL - LAX,51347850812,HNL-SFO-LAX 4,A321neo,https://www.airlines-manager.com/network/showline/43538953,https://www.airlines-manager.com/network/showflight/51347850812,https://www.airlines-manager.com/aircraft/show/110044461,9:00,20:59,338,"$785,134.00","$716,862.00"
HNL - LAX,51347850813,HNL-SFO-LAX 6 B,A319-100,https://www.airlines-manager.com/network/showline/43538953,https://www.airlines-manager.com/network/showflight/51347850813,https://www.airlines-manager.com/aircraft/show/106106389,10:00,21:59,198,"$543,529.00","$486,249.00"
HNL - LAX,51363387569,HNL-SFO-LAX 1,A321neo,https://www.airlines-manager.com/network/showline/43538953,https://www.airlines-manager.com/network/showflight/51363387569,https://www.airlines-manager.com/aircraft/show/110044458,18:15,6:14,338,"$785,134.00","$716,862.00"
HNL - LAX,51370307006,HNL-SFO-LAX 2,A321neo,https://www.airlines-manager.com/network/showline/43538953,https://www.airlines-manager.com/network/showflight/51370307006,https://www.airlines-manager.com/aircraft/show/110044459,20:15,8:14,338,"$785,134.00","$716,862.00"
HNL - LAX,51370307007,HNL-SFO-LAX 5,A321neo,https://www.airlines-manager.com/network/showline/43538953,https://www.airlines-manager.com/network/showflight/51370307007,https://www.airlines-manager.com/aircraft/show/110044462,21:45,9:44,338,"$785,134.00","$716,862.00"
HNL - LIH,51335558229,HNL Interisland 1,717-200,https://www.airlines-manager.com/network/showline/43516646,https://www.airlines-manager.com/network/showflight/51335558229,https://www.airlines-manager.com/aircraft/show/94803596,0:45,3:14,170,"$50,772.00","$42,352.00"
HNL - LIH,51335558230,HNL Interisland 2,717-200,https://www.airlines-manager.com/network/showline/43516646,https://www.airlines-manager.com/network/showflight/51335558230,https://www.airlines-manager.com/aircraft/show/94803595,3:30,5:59,170,"$50,772.00","$42,352.00"
HNL - LIH,51335558231,HNL Interisland 3,717-200,https://www.airlines-manager.com/network/showline/43516646,https://www.airlines-manager.com/network/showflight/51335558231,https://www.airlines-manager.com/aircraft/show/94803594,7:00,9:29,170,"$50,772.00","$42,352.00"
HNL - LIH,51347850902,HNL Interisland 4,717-200,https://www.airlines-manager.com/network/showline/43516646,https://www.airlines-manager.com/network/showflight/51347850902,https://www.airlines-manager.com/aircraft/show/94803593,10:00,12:29,170,"$50,772.00","$42,352.00"
HNL - LIH,51355083343,HNL Interisland 1,717-200,https://www.airlines-manager.com/network/showline/43516646,https://www.airlines-manager.com/network/showflight/51355083343,https://www.airlines-manager.com/aircraft/show/94803596,14:00,16:29,170,"$50,772.00","$42,352.00"
HNL - LIH,51363387445,HNL Interisland 2,717-200,https://www.airlines-manager.com/network/showline/43516646,https://www.airlines-manager.com/network/showflight/51363387445,https://www.airlines-manager.com/aircraft/show/94803595,16:45,19:14,170,"$50,772.00","$42,352.00"
HNL - LIH,51370306999,HNL Interisland 3,717-200,https://www.airlines-manager.com/network/showline/43516646,https://www.airlines-manager.com/network/showflight/51370306999,https://www.airlines-manager.com/aircraft/show/94803594,20:15,22:44,170,"$50,772.00","$42,352.00"
HNL - LIH,51374354752,HNL Interisland 4,717-200,https://www.airlines-manager.com/network/showline/43516646,https://www.airlines-manager.com/network/showflight/51374354752,https://www.airlines-manager.com/aircraft/show/94803593,23:15,1:44,170,"$50,772.00","$42,352.00"
HNL - LNY,51335558269,HNL-LNY,Q-400,https://www.airlines-manager.com/network/showline/43516637,https://www.airlines-manager.com/network/showflight/51335558269,https://www.airlines-manager.com/aircraft/show/106107514,1:00,3:29,116,"$30,198.00","$25,191.00"
HNL - LNY,51335558270,HNL-LNY,Q-400,https://www.airlines-manager.com/network/showline/43516637,https://www.airlines-manager.com/network/showflight/51335558270,https://www.airlines-manager.com/aircraft/show/106107514,3:30,5:59,116,"$30,198.00","$25,191.00"
HNL - LNY,51335558271,HNL-LNY,Q-400,https://www.airlines-manager.com/network/showline/43516637,https://www.airlines-manager.com/network/showflight/51335558271,https://www.airlines-manager.com/aircraft/show/106107514,6:00,8:29,116,"$30,198.00","$25,191.00"
HNL - LNY,51335558272,HNL-LNY,Q-400,https://www.airlines-manager.com/network/showline/43516637,https://www.airlines-manager.com/network/showflight/51335558272,https://www.airlines-manager.com/aircraft/show/106107514,8:30,10:59,116,"$30,198.00","$25,191.00"
HNL - LNY,51355083425,HNL-LNY,Q-400,https://www.airlines-manager.com/network/showline/43516637,https://www.airlines-manager.com/network/showflight/51355083425,https://www.airlines-manager.com/aircraft/show/106107514,15:00,17:29,116,"$30,198.00","$25,191.00"
HNL - LNY,51363387512,HNL-LNY,Q-400,https://www.airlines-manager.com/network/showline/43516637,https://www.airlines-manager.com/network/showflight/51363387512,https://www.airlines-manager.com/aircraft/show/106107514,17:30,19:59,116,"$30,198.00","$25,191.00"
HNL - LNY,51370306988,HNL-LNY,Q-400,https://www.airlines-manager.com/network/showline/43516637,https://www.airlines-manager.com/network/showflight/51370306988,https://www.airlines-manager.com/aircraft/show/106107514,20:00,22:29,116,"$30,198.00","$25,191.00"
HNL - LNY,51374354691,HNL-LNY,Q-400,https://www.airlines-manager.com/network/showline/43516637,https://www.airlines-manager.com/network/showflight/51374354691,https://www.airlines-manager.com/aircraft/show/106107514,22:30,0:59,116,"$30,198.00","$25,191.00"
HNL - MCO,51335558234,HNL 56C-1 B,787-10,https://www.airlines-manager.com/network/showline/48011877,https://www.airlines-manager.com/network/showflight/51335558234,https://www.airlines-manager.com/aircraft/show/111639413,1:00,19:59,592,"$2,274,563.00","$2,114,464.00"
HNL - MCO,51335558235,HNL 56C-7 B,787-10,https://www.airlines-manager.com/network/showline/48011877,https://www.airlines-manager.com/network/showflight/51335558235,https://www.airlines-manager.com/aircraft/show/111639419,4:15,23:14,592,"$2,274,563.00","$2,114,464.00"
HNL - MCO,51335558236,HNL 56C-3 B,787-10,https://www.airlines-manager.com/network/showline/48011877,https://www.airlines-manager.com/network/showflight/51335558236,https://www.airlines-manager.com/aircraft/show/111639415,8:15,3:14,592,"$2,274,563.00","$2,114,464.00"
HNL - MEL,51335558720,HNL 84A-5 F,777-300,https://www.airlines-manager.com/network/showline/45395143,https://www.airlines-manager.com/network/showflight/51335558720,https://www.airlines-manager.com/aircraft/show/95818922,8:30,6:29,832,"$3,522,198.00","$3,220,816.00"
HNL - MEL,51370306968,HNL 84A-1 F,777-300,https://www.airlines-manager.com/network/showline/45395143,https://www.airlines-manager.com/network/showflight/51370306968,https://www.airlines-manager.com/aircraft/show/95818926,20:00,17:59,832,"$3,522,198.00","$3,220,816.00"
HNL - MIA,51335558722,HNL 56A-3 B,787-10,https://www.airlines-manager.com/network/showline/43560807,https://www.airlines-manager.com/network/showflight/51335558722,https://www.airlines-manager.com/aircraft/show/95351590,8:30,3:44,592,"$2,318,372.00","$2,152,111.00"
HNL - MIA,51347851122,HNL 56A-6 B,787-10,https://www.airlines-manager.com/network/showline/43560807,https://www.airlines-manager.com/network/showflight/51347851122,https://www.airlines-manager.com/aircraft/show/95351587,10:45,5:59,592,"$2,318,372.00","$2,152,111.00"
HNL - MIA,51363387236,HNL 56A-5 B,787-10,https://www.airlines-manager.com/network/showline/43560807,https://www.airlines-manager.com/network/showflight/51363387236,https://www.airlines-manager.com/aircraft/show/95351588,15:30,10:44,592,"$2,318,372.00","$2,152,111.00"
HNL - MNL,51335558710,HNL 84A-3 F,777-300,https://www.airlines-manager.com/network/showline/43762944,https://www.airlines-manager.com/network/showflight/51335558710,https://www.airlines-manager.com/aircraft/show/95818924,7:30,4:44,832,"$3,444,461.00","$3,155,164.00"
HNL - MNL,51363387587,HNL 84A-6 F,777-300,https://www.airlines-manager.com/network/showline/43762944,https://www.airlines-manager.com/network/showflight/51363387587,https://www.airlines-manager.com/aircraft/show/95818921,18:30,15:44,832,"$3,444,461.00","$3,155,164.00"
HNL - MSP,51363387303,HNL 56C-2 B,787-10,https://www.airlines-manager.com/network/showline/48011881,https://www.airlines-manager.com/network/showflight/51363387303,https://www.airlines-manager.com/aircraft/show/111639414,16:00,8:14,592,"$1,937,167.00","$1,802,794.00"
HNL - MSP,51363387304,HNL 56C-5 B,787-10,https://www.airlines-manager.com/network/showline/48011881,https://www.airlines-manager.com/network/showflight/51363387304,https://www.airlines-manager.com/aircraft/show/111639417,17:00,9:14,592,"$1,937,167.00","$1,802,794.00"
HNL - MSP,51370307144,HNL 56C-4 B,787-10,https://www.airlines-manager.com/network/showline/48011881,https://www.airlines-manager.com/network/showflight/51370307144,https://www.airlines-manager.com/aircraft/show/111639416,22:15,14:29,592,"$1,937,167.00","$1,802,794.00"
HNL - NAN,51335558573,HNL 84A-1 F,777-300,https://www.airlines-manager.com/network/showline/43541571,https://www.airlines-manager.com/network/showflight/51335558573,https://www.airlines-manager.com/aircraft/show/95818926,3:45,17:14,832,"$2,061,916.00","$1,890,710.00"
HNL - NAN,51363387557,HNL 84A-2 F,777-300,https://www.airlines-manager.com/network/showline/43541571,https://www.airlines-manager.com/network/showflight/51363387557,https://www.airlines-manager.com/aircraft/show/95818925,18:00,7:29,832,"$2,032,954.00","$1,871,402.00"
HNL - OGG,51335558386,HNL Interisland 3,717-200,https://www.airlines-manager.com/network/showline/43516648,https://www.airlines-manager.com/network/showflight/51335558386,https://www.airlines-manager.com/aircraft/show/94803594,1:45,4:14,170,"$51,536.00","$42,738.00"
HNL - OGG,51335558387,HNL Interisland 4,717-200,https://www.airlines-manager.com/network/showline/43516648,https://www.airlines-manager.com/network/showflight/51335558387,https://www.airlines-manager.com/aircraft/show/94803593,4:45,7:14,170,"$51,536.00","$42,738.00"
HNL - OGG,51335558388,HNL Interisland 1,717-200,https://www.airlines-manager.com/network/showline/43516648,https://www.airlines-manager.com/network/showflight/51335558388,https://www.airlines-manager.com/aircraft/show/94803596,6:15,8:44,170,"$51,536.00","$42,738.00"
HNL - OGG,51347850836,HNL Interisland 2,717-200,https://www.airlines-manager.com/network/showline/43516648,https://www.airlines-manager.com/network/showflight/51347850836,https://www.airlines-manager.com/aircraft/show/94803595,9:00,11:29,170,"$51,536.00","$42,738.00"
HNL - OGG,51355083416,HNL Interisland 3,717-200,https://www.airlines-manager.com/network/showline/43516648,https://www.airlines-manager.com/network/showflight/51355083416,https://www.airlines-manager.com/aircraft/show/94803594,15:00,17:29,170,"$51,536.00","$42,738.00"
HNL - OGG,51363387546,HNL Interisland 4,717-200,https://www.airlines-manager.com/network/showline/43516648,https://www.airlines-manager.com/network/showflight/51363387546,https://www.airlines-manager.com/aircraft/show/94803593,18:00,20:29,170,"$51,536.00","$42,738.00"
HNL - OGG,51363387547,HNL Interisland 1,717-200,https://www.airlines-manager.com/network/showline/43516648,https://www.airlines-manager.com/network/showflight/51363387547,https://www.airlines-manager.com/aircraft/show/94803596,19:30,21:59,170,"$51,536.00","$42,738.00"
HNL - OGG,51370307149,HNL Interisland 2,717-200,https://www.airlines-manager.com/network/showline/43516648,https://www.airlines-manager.com/network/showflight/51370307149,https://www.airlines-manager.com/aircraft/show/94803595,22:15,0:44,170,"$51,536.00","$42,738.00"
HNL - ORD,51347850947,HNL 56B-6 B,787-10,https://www.airlines-manager.com/network/showline/43560795,https://www.airlines-manager.com/network/showflight/51347850947,https://www.airlines-manager.com/aircraft/show/109187503,10:00,2:59,592,"$2,075,541.00","$1,906,081.00"
HNL - ORD,51363387274,HNL 56B-1 B,787-10,https://www.airlines-manager.com/network/showline/43560795,https://www.airlines-manager.com/network/showflight/51363387274,https://www.airlines-manager.com/aircraft/show/109187498,16:00,8:59,592,"$2,075,541.00","$1,906,081.00"
HNL - ORD,51374354726,HNL 56B-7 B,787-10,https://www.airlines-manager.com/network/showline/43560795,https://www.airlines-manager.com/network/showflight/51374354726,https://www.airlines-manager.com/aircraft/show/109187504,22:45,15:44,592,"$2,075,541.00","$1,906,081.00"
HNL - PHX,51335558555,HNL 56D-1 B,787-10,https://www.airlines-manager.com/network/showline/43718390,https://www.airlines-manager.com/network/showflight/51335558555,https://www.airlines-manager.com/aircraft/show/112066132,3:30,15:59,592,"$1,511,576.00","$1,400,441.00"
HNL - PHX,51355083435,HNL 56D-7 B,787-10,https://www.airlines-manager.com/network/showline/43718390,https://www.airlines-manager.com/network/showflight/51355083435,https://www.airlines-manager.com/aircraft/show/112066138,15:00,3:29,592,"$1,511,576.00","$1,400,441.00"
HNL - PHX,51363387331,HNL 56D-3 B,787-10,https://www.airlines-manager.com/network/showline/43718390,https://www.airlines-manager.com/network/showflight/51363387331,https://www.airlines-manager.com/aircraft/show/112066134,16:00,4:29,592,"$1,511,576.00","$1,400,441.00"
HNL - PPG,51335558434,HNL CARGO 1,737-700,https://www.airlines-manager.com/network/showline/43998032,https://www.airlines-manager.com/network/showflight/51335558434,https://www.airlines-manager.com/aircraft/show/107564830,2:15,14:29,0,"$205,880.00","$165,405.00"
HNL - PPG,51335558435,HNL-TRW-PPG 1 S,A321-200,https://www.airlines-manager.com/network/showline/43998032,https://www.airlines-manager.com/network/showflight/51335558435,https://www.airlines-manager.com/aircraft/show/88725599,3:30,15:44,380,"$784,357.00","$734,755.00"
HNL - PPG,51363387298,HNL-TRW-PPG 2 S,A321-200,https://www.airlines-manager.com/network/showline/43998032,https://www.airlines-manager.com/network/showflight/51363387298,https://www.airlines-manager.com/aircraft/show/88725598,16:00,4:14,380,"$784,357.00","$734,755.00"
HNL - PPG,51363387299,HNL-TRW-PPG 3 S,A321-200,https://www.airlines-manager.com/network/showline/43998032,https://www.airlines-manager.com/network/showflight/51363387299,https://www.airlines-manager.com/aircraft/show/88725597,18:00,6:14,380,"$784,357.00","$734,755.00"
HNL - PPT,51335558542,HNL-PPT,A321-200,https://www.airlines-manager.com/network/showline/43719628,https://www.airlines-manager.com/network/showflight/51335558542,https://www.airlines-manager.com/aircraft/show/88725600,3:15,15:59,310,"$765,067.00","$712,100.00"
HNL - PPT,51355083431,HNL CARGO 2,737-700,https://www.airlines-manager.com/network/showline/43719628,https://www.airlines-manager.com/network/showflight/51355083431,https://www.airlines-manager.com/aircraft/show/107563068,15:00,3:44,0,"$210,714.00","$167,878.00"
HNL - PPT,51363387240,HNL 84A-7 F,777-300,https://www.airlines-manager.com/network/showline/43719628,https://www.airlines-manager.com/network/showflight/51363387240,https://www.airlines-manager.com/aircraft/show/95818920,15:45,3:44,832,"$1,832,588.00","$1,696,344.00"
HNL - PPT,51363387241,HNL-PPT,A321-200,https://www.airlines-manager.com/network/showline/43719628,https://www.airlines-manager.com/network/showflight/51363387241,https://www.airlines-manager.com/aircraft/show/88725600,16:00,4:44,310,"$687,427.00","$641,982.00"
HNL - SEA,51335558576,HNL 56D-2 B,787-10,https://www.airlines-manager.com/network/showline/48149157,https://www.airlines-manager.com/network/showflight/51335558576,https://www.airlines-manager.com/aircraft/show/112066133,3:45,15:14,592,"$1,410,760.00","$1,309,087.00"
HNL - SEA,51363387300,HNL 56D-2 B,787-10,https://www.airlines-manager.com/network/showline/48149157,https://www.airlines-manager.com/network/showflight/51363387300,https://www.airlines-manager.com/aircraft/show/112066133,16:00,3:29,592,"$1,410,760.00","$1,309,087.00"
HNL - SEA,51363387301,HNL 56D-5 B,787-10,https://www.airlines-manager.com/network/showline/48149157,https://www.airlines-manager.com/network/showflight/51363387301,https://www.airlines-manager.com/aircraft/show/112066136,18:00,5:29,592,"$1,410,760.00","$1,309,087.00"
HNL - SFO,51335558707,HNL-SFO-LAX 1,A321neo,https://www.airlines-manager.com/network/showline/43557863,https://www.airlines-manager.com/network/showflight/51335558707,https://www.airlines-manager.com/aircraft/show/110044458,7:00,18:14,338,"$754,269.00","$695,785.00"
HNL - SFO,51347850795,HNL-SFO-LAX 2,A321neo,https://www.airlines-manager.com/network/showline/43557863,https://www.airlines-manager.com/network/showflight/51347850795,https://www.airlines-manager.com/aircraft/show/110044459,9:00,20:14,338,"$754,269.00","$695,785.00"
HNL - SFO,51347850797,HNL-SFO-LAX 5,A321neo,https://www.airlines-manager.com/network/showline/43557863,https://www.airlines-manager.com/network/showflight/51347850797,https://www.airlines-manager.com/aircraft/show/110044462,10:30,21:44,338,"$754,269.00","$695,785.00"
HNL - SFO,51363387607,HNL-SFO-LAX 3,A321neo,https://www.airlines-manager.com/network/showline/43557863,https://www.airlines-manager.com/network/showflight/51363387607,https://www.airlines-manager.com/aircraft/show/110044460,19:00,6:14,338,"$754,269.00","$695,785.00"
HNL - SFO,51370307055,HNL-SFO-LAX 4,A321neo,https://www.airlines-manager.com/network/showline/43557863,https://www.airlines-manager.com/network/showflight/51370307055,https://www.airlines-manager.com/aircraft/show/110044461,21:00,8:14,338,"$754,269.00","$695,785.00"
HNL - SFO,51370307056,HNL-SFO-LAX 6 B,A319-100,https://www.airlines-manager.com/network/showline/43557863,https://www.airlines-manager.com/network/showflight/51370307056,https://www.airlines-manager.com/aircraft/show/106106389,22:00,9:29,198,"$525,393.00","$476,106.00"
HNL - SIN,51335558658,HNL 84B-5 F,777-300,https://www.airlines-manager.com/network/showline/44044115,https://www.airlines-manager.com/network/showflight/51335558658,https://www.airlines-manager.com/aircraft/show/96807089,5:15,7:29,832,"$4,299,232.00","$3,901,010.00"
HNL - SIN,51363387448,HNL 84B-1 F,777-300,https://www.airlines-manager.com/network/showline/44044115,https://www.airlines-manager.com/network/showflight/51363387448,https://www.airlines-manager.com/aircraft/show/96807093,17:00,19:14,832,"$4,299,232.00","$3,901,010.00"
HNL - SYD,51335558711,HNL 84B-6 F,777-300,https://www.airlines-manager.com/network/showline/43719642,https://www.airlines-manager.com/network/showflight/51335558711,https://www.airlines-manager.com/aircraft/show/96807088,7:30,3:59,832,"$3,324,591.00","$3,017,560.00"
HNL - SYD,51363387616,HNL 84B-2 F,777-300,https://www.airlines-manager.com/network/showline/43719642,https://www.airlines-manager.com/network/showflight/51363387616,https://www.airlines-manager.com/aircraft/show/96807092,19:15,15:44,832,"$3,324,591.00","$3,017,560.00"
HNL - TRW,51335558618,HNL-TRW-PPG 2 S,A321-200,https://www.airlines-manager.com/network/showline/43998029,https://www.airlines-manager.com/network/showflight/51335558618,https://www.airlines-manager.com/aircraft/show/88725598,4:15,15:44,380,"$763,465.00","$718,834.00"
HNL - TRW,51335558619,HNL-TRW-PPG 3 S,A321-200,https://www.airlines-manager.com/network/showline/43998029,https://www.airlines-manager.com/network/showflight/51335558619,https://www.airlines-manager.com/aircraft/show/88725597,6:15,17:44,380,"$763,465.00","$718,834.00"
HNL - TRW,51355083432,HNL CARGO 1,737-700,https://www.airlines-manager.com/network/showline/43998029,https://www.airlines-manager.com/network/showflight/51355083432,https://www.airlines-manager.com/aircraft/show/107564830,15:00,2:14,0,"$192,166.00","$155,600.00"
HNL - TRW,51363387293,HNL-TRW-PPG 1 S,A321-200,https://www.airlines-manager.com/network/showline/43998029,https://www.airlines-manager.com/network/showflight/51363387293,https://www.airlines-manager.com/aircraft/show/88725599,16:00,3:29,380,"$763,465.00","$718,834.00"
HNL - YVR,51335558153,HNL 56D-7 B,787-10,https://www.airlines-manager.com/network/showline/48149164,https://www.airlines-manager.com/network/showflight/51335558153,https://www.airlines-manager.com/aircraft/show/112066138,0:15,11:59,592,"$1,413,733.00","$1,318,327.00"
HNL - YVR,51335558154,HNL 56D-3 B,787-10,https://www.airlines-manager.com/network/showline/48149164,https://www.airlines-manager.com/network/showflight/51335558154,https://www.airlines-manager.com/aircraft/show/112066134,3:30,15:14,592,"$1,413,733.00","$1,318,327.00"
HNL - YVR,51363387302,HNL 56D-1 B,787-10,https://www.airlines-manager.com/network/showline/48149164,https://www.airlines-manager.com/network/showflight/51363387302,https://www.airlines-manager.com/aircraft/show/112066132,16:00,3:44,592,"$1,413,733.00","$1,318,327.00"
IAH - ABQ,51335558273,IAH-CLE-STL 1,A321-200,https://www.airlines-manager.com/network/showline/45490320,https://www.airlines-manager.com/network/showflight/51335558273,https://www.airlines-manager.com/aircraft/show/103600700,1:00,5:59,310,"$316,364.00","$283,047.00"
IAH - ABQ,51335558274,IAH-CLE-STL 5 B,A319-100,https://www.airlines-manager.com/network/showline/45490320,https://www.airlines-manager.com/network/showflight/51335558274,https://www.airlines-manager.com/aircraft/show/110582844,2:30,7:29,198,"$240,460.00","$213,774.00"
IAH - ABQ,51335558275,IAH-CLE-STL 4,A321-200,https://www.airlines-manager.com/network/showline/45490320,https://www.airlines-manager.com/network/showflight/51335558275,https://www.airlines-manager.com/aircraft/show/88725601,6:00,10:59,310,"$316,364.00","$283,047.00"
IAH - ABQ,51355083301,IAH-CLE-STL 3,A321-200,https://www.airlines-manager.com/network/showline/45490320,https://www.airlines-manager.com/network/showflight/51355083301,https://www.airlines-manager.com/aircraft/show/103600702,13:00,17:59,310,"$316,364.00","$283,047.00"
IAH - ABQ,51363387594,IAH-CLE-STL 2,A321-200,https://www.airlines-manager.com/network/showline/45490320,https://www.airlines-manager.com/network/showflight/51363387594,https://www.airlines-manager.com/aircraft/show/103600701,18:45,23:44,310,"$316,364.00","$283,047.00"
IAH - ALB,51335558136,IAH-MHT-ALB 2,737-900ER,https://www.airlines-manager.com/network/showline/48841855,https://www.airlines-manager.com/network/showflight/51335558136,https://www.airlines-manager.com/aircraft/show/114266976,0:15,7:59,320,"$495,266.00","$449,812.00"
IAH - ALB,51335558137,IAH-MHT-ALB 5,ERJ-175,https://www.airlines-manager.com/network/showline/48841855,https://www.airlines-manager.com/network/showflight/51335558137,https://www.airlines-manager.com/aircraft/show/92800067,2:00,9:59,112,"$234,409.00","$207,369.00"
IAH - ALB,51347851244,IAH-MHT-ALB 3,737-900ER,https://www.airlines-manager.com/network/showline/48841855,https://www.airlines-manager.com/network/showflight/51347851244,https://www.airlines-manager.com/aircraft/show/114266971,12:00,19:44,320,"$495,266.00","$449,812.00"
IAH - ALB,51355083437,IAH-MHT-ALB 4,737-900ER,https://www.airlines-manager.com/network/showline/48841855,https://www.airlines-manager.com/network/showflight/51355083437,https://www.airlines-manager.com/aircraft/show/114266970,15:00,22:44,320,"$495,266.00","$449,812.00"
IAH - ALB,51370307004,IAH-MHT-ALB 1,737-900ER,https://www.airlines-manager.com/network/showline/48841855,https://www.airlines-manager.com/network/showflight/51370307004,https://www.airlines-manager.com/aircraft/show/114266972,20:15,3:59,320,"$495,266.00","$449,812.00"
IAH - ANC,51347851237,IAH-ANC-ONT 1,A321-200,https://www.airlines-manager.com/network/showline/47054828,https://www.airlines-manager.com/network/showflight/51347851237,https://www.airlines-manager.com/aircraft/show/108258010,12:00,2:44,310,"$895,397.00","$825,173.00"
IAH - ANC,51355083353,IAH-ANC-ONT 2,A321-200,https://www.airlines-manager.com/network/showline/47054828,https://www.airlines-manager.com/network/showflight/51355083353,https://www.airlines-manager.com/aircraft/show/108258011,14:00,4:44,310,"$895,397.00","$825,173.00"
IAH - ANC,51363387620,IAH-ANC-ONT 3,A321-200,https://www.airlines-manager.com/network/showline/47054828,https://www.airlines-manager.com/network/showflight/51363387620,https://www.airlines-manager.com/aircraft/show/108258012,19:15,9:59,310,"$895,397.00","$825,173.00"
IAH - ANC,51370307083,IAH-ANC-ONT 4,A321-200,https://www.airlines-manager.com/network/showline/47054828,https://www.airlines-manager.com/network/showflight/51370307083,https://www.airlines-manager.com/aircraft/show/108089220,21:15,11:59,310,"$895,397.00","$825,173.00"
IAH - ANC,51374354748,IAH-ANC-ONT 5 B,A319-100,https://www.airlines-manager.com/network/showline/47054828,https://www.airlines-manager.com/network/showflight/51374354748,https://www.airlines-manager.com/aircraft/show/108286957,23:15,13:59,198,"$668,398.00","$612,078.00"
IAH - ATL,51335558135,IAH-LAS-ATL 6,ERJ-175,https://www.airlines-manager.com/network/showline/41475893,https://www.airlines-manager.com/network/showflight/51335558135,https://www.airlines-manager.com/aircraft/show/82323704,0:15,4:59,112,"$145,966.00","$111,925.00"
IAH - ATL,51347850953,IAH-LAS-ATL 5,737-900ER,https://www.airlines-manager.com/network/showline/41475893,https://www.airlines-manager.com/network/showflight/51347850953,https://www.airlines-manager.com/aircraft/show/95894466,10:00,14:44,320,"$306,331.00","$242,256.00"
IAH - ATL,51347850955,IAH-LAS-ATL 1,737-900ER,https://www.airlines-manager.com/network/showline/41475893,https://www.airlines-manager.com/network/showflight/51347850955,https://www.airlines-manager.com/aircraft/show/96256511,10:45,15:29,320,"$306,331.00","$242,256.00"
IAH - ATL,51363387308,IAH-LAS-ATL 3,737-900ER,https://www.airlines-manager.com/network/showline/41475893,https://www.airlines-manager.com/network/showflight/51363387308,https://www.airlines-manager.com/aircraft/show/96183549,16:00,20:44,320,"$306,331.00","$242,256.00"
IAH - ATL,51363387309,IAH-LAS-ATL 4,737-900ER,https://www.airlines-manager.com/network/showline/41475893,https://www.airlines-manager.com/network/showflight/51363387309,https://www.airlines-manager.com/aircraft/show/96177955,17:45,22:29,320,"$306,331.00","$242,256.00"
IAH - ATL,51374354787,IAH-LAS-ATL 2,737-900ER,https://www.airlines-manager.com/network/showline/41475893,https://www.airlines-manager.com/network/showflight/51374354787,https://www.airlines-manager.com/aircraft/show/96250652,23:45,4:29,320,"$306,331.00","$242,256.00"
IAH - AUS,51335558612,IAH-BWI-PHL 2,A321neo,https://www.airlines-manager.com/network/showline/44227440,https://www.airlines-manager.com/network/showflight/51335558612,https://www.airlines-manager.com/aircraft/show/106007214,4:15,6:59,338,"$100,421.00","$76,820.00"
IAH - AUS,51347851195,IAH-BWI-PHL 1,A321neo,https://www.airlines-manager.com/network/showline/44227440,https://www.airlines-manager.com/network/showflight/51347851195,https://www.airlines-manager.com/aircraft/show/106007213,11:00,13:44,338,"$100,421.00","$76,820.00"
IAH - AUS,51347851196,IAH-BWI-PHL 5,A321neo,https://www.airlines-manager.com/network/showline/44227440,https://www.airlines-manager.com/network/showflight/51347851196,https://www.airlines-manager.com/aircraft/show/106007217,12:00,14:44,338,"$100,421.00","$76,820.00"
IAH - AUS,51363387565,IAH-BWI-PHL 4,A321neo,https://www.airlines-manager.com/network/showline/44227440,https://www.airlines-manager.com/network/showflight/51363387565,https://www.airlines-manager.com/aircraft/show/106007216,18:15,20:59,338,"$100,421.00","$76,820.00"
IAH - AUS,51370307100,IAH-BWI-PHL 3,A321neo,https://www.airlines-manager.com/network/showline/44227440,https://www.airlines-manager.com/network/showflight/51370307100,https://www.airlines-manager.com/aircraft/show/106007215,21:30,0:14,267,"$88,024.00","$64,649.00"
IAH - BDL,51335558690,IAH-CLE-STL 1,A321-200,https://www.airlines-manager.com/network/showline/45495448,https://www.airlines-manager.com/network/showflight/51335558690,https://www.airlines-manager.com/aircraft/show/103600700,6:00,13:59,310,"$497,384.00","$455,044.00"
IAH - BDL,51335558691,IAH-CLE-STL 5 B,A319-100,https://www.airlines-manager.com/network/showline/45495448,https://www.airlines-manager.com/network/showflight/51335558691,https://www.airlines-manager.com/aircraft/show/110582844,7:30,15:29,198,"$374,946.00","$341,009.00"
IAH - BDL,51347851203,IAH-CLE-STL 4,A321-200,https://www.airlines-manager.com/network/showline/45495448,https://www.airlines-manager.com/network/showflight/51347851203,https://www.airlines-manager.com/aircraft/show/88725601,11:00,18:59,310,"$497,384.00","$455,044.00"
IAH - BDL,51363387544,IAH-CLE-STL 3,A321-200,https://www.airlines-manager.com/network/showline/45495448,https://www.airlines-manager.com/network/showflight/51363387544,https://www.airlines-manager.com/aircraft/show/103600702,18:00,1:59,310,"$497,384.00","$455,044.00"
IAH - BDL,51370306948,IAH-DFW-STL,ERJ-175,https://www.airlines-manager.com/network/showline/45495448,https://www.airlines-manager.com/network/showflight/51370306948,https://www.airlines-manager.com/aircraft/show/96990010,19:45,3:44,112,"$234,146.00","$206,113.00"
IAH - BDL,51374354780,IAH-CLE-STL 2,A321-200,https://www.airlines-manager.com/network/showline/45495448,https://www.airlines-manager.com/network/showflight/51374354780,https://www.airlines-manager.com/aircraft/show/103600701,23:45,7:44,310,"$497,384.00","$455,044.00"
IAH - BFF,51335558587,IAH-MHT-ALB 1,737-900ER,https://www.airlines-manager.com/network/showline/48841858,https://www.airlines-manager.com/network/showflight/51335558587,https://www.airlines-manager.com/aircraft/show/114266972,4:00,9:44,320,"$365,462.00","$327,584.00"
IAH - BFF,51347851106,IAH-MHT-ALB 2,737-900ER,https://www.airlines-manager.com/network/showline/48841858,https://www.airlines-manager.com/network/showflight/51347851106,https://www.airlines-manager.com/aircraft/show/114266976,10:15,15:59,320,"$365,462.00","$327,584.00"
IAH - BFF,51347851108,IAH-MHT-ALB 5,ERJ-175,https://www.airlines-manager.com/network/showline/48841858,https://www.airlines-manager.com/network/showflight/51347851108,https://www.airlines-manager.com/aircraft/show/92800067,12:00,17:44,112,"$173,194.00","$151,513.00"
IAH - BFF,51370306945,IAH-MHT-ALB 3,737-900ER,https://www.airlines-manager.com/network/showline/48841858,https://www.airlines-manager.com/network/showflight/51370306945,https://www.airlines-manager.com/aircraft/show/114266971,19:45,1:29,320,"$365,462.00","$327,584.00"
IAH - BFF,51374354718,IAH-MHT-ALB 4,737-900ER,https://www.airlines-manager.com/network/showline/48841858,https://www.airlines-manager.com/network/showflight/51374354718,https://www.airlines-manager.com/aircraft/show/114266970,22:45,4:29,320,"$365,462.00","$327,584.00"
IAH - BNA,51335558593,IAH-BOI-BNA 4,A321-200,https://www.airlines-manager.com/network/showline/45737509,https://www.airlines-manager.com/network/showflight/51335558593,https://www.airlines-manager.com/aircraft/show/104258214,4:00,8:44,310,"$301,470.00","$270,261.00"
IAH - BNA,51347850839,IAH-BOI-BNA 3,A321-200,https://www.airlines-manager.com/network/showline/45737509,https://www.airlines-manager.com/network/showflight/51347850839,https://www.airlines-manager.com/aircraft/show/104258213,9:15,13:59,310,"$301,470.00","$270,261.00"
IAH - BNA,51355083417,IAH-BOI-BNA 2,A321-200,https://www.airlines-manager.com/network/showline/45737509,https://www.airlines-manager.com/network/showflight/51355083417,https://www.airlines-manager.com/aircraft/show/104258212,15:00,19:44,310,"$301,470.00","$270,261.00"
IAH - BNA,51370307129,IAH-BOI-BNA 1,A321-200,https://www.airlines-manager.com/network/showline/45737509,https://www.airlines-manager.com/network/showflight/51370307129,https://www.airlines-manager.com/aircraft/show/104258211,22:00,2:44,310,"$301,470.00","$270,261.00"
IAH - BNA,51374354735,IAH-BOI-BNA 5,ERJ-175,https://www.airlines-manager.com/network/showline/45737509,https://www.airlines-manager.com/network/showflight/51374354735,https://www.airlines-manager.com/aircraft/show/103534664,23:00,3:44,112,"$143,306.00","$123,435.00"
IAH - BOG,51335558684,IAH 56A-5 B,787-10,https://www.airlines-manager.com/network/showline/41798688,https://www.airlines-manager.com/network/showflight/51335558684,https://www.airlines-manager.com/aircraft/show/106676236,6:00,15:59,648,"$1,298,463.00","$1,206,171.00"
IAH - BOG,51355083382,IAH 56A-7 B,787-10,https://www.airlines-manager.com/network/showline/41798688,https://www.airlines-manager.com/network/showflight/51355083382,https://www.airlines-manager.com/aircraft/show/106676238,14:00,23:59,648,"$1,298,463.00","$1,206,171.00"
IAH - BOG,51370306951,IAH 56A-2 B,787-10,https://www.airlines-manager.com/network/showline/41798688,https://www.airlines-manager.com/network/showflight/51370306951,https://www.airlines-manager.com/aircraft/show/106676233,20:00,5:59,648,"$1,298,463.00","$1,206,171.00"
IAH - BOI,51335558294,IAH-BOI-BNA 3,A321-200,https://www.airlines-manager.com/network/showline/45737517,https://www.airlines-manager.com/network/showflight/51335558294,https://www.airlines-manager.com/aircraft/show/104258213,1:15,9:14,310,"$499,891.00","$458,264.00"
IAH - BOI,51335558295,IAH-BOI-BNA 2,A321-200,https://www.airlines-manager.com/network/showline/45737517,https://www.airlines-manager.com/network/showflight/51335558295,https://www.airlines-manager.com/aircraft/show/104258212,7:00,14:59,310,"$499,891.00","$458,264.00"
IAH - BOI,51355083367,IAH-BOI-BNA 1,A321-200,https://www.airlines-manager.com/network/showline/45737517,https://www.airlines-manager.com/network/showflight/51355083367,https://www.airlines-manager.com/aircraft/show/104258211,14:00,21:59,310,"$499,891.00","$458,264.00"
IAH - BOI,51355083368,IAH-BOI-BNA 5,ERJ-175,https://www.airlines-manager.com/network/showline/45737517,https://www.airlines-manager.com/network/showflight/51355083368,https://www.airlines-manager.com/aircraft/show/103534664,15:00,22:59,112,"$235,307.00","$207,745.00"
IAH - BOI,51370306986,IAH-BOI-BNA 4,A321-200,https://www.airlines-manager.com/network/showline/45737517,https://www.airlines-manager.com/network/showflight/51370306986,https://www.airlines-manager.com/aircraft/show/104258214,20:00,3:59,310,"$499,891.00","$458,264.00"
IAH - BOS,51335558370,IAH-JFK-LAX 3,757-300,https://www.airlines-manager.com/network/showline/41429011,https://www.airlines-manager.com/network/showflight/51335558370,https://www.airlines-manager.com/aircraft/show/88400800,1:45,9:59,400,"$665,277.00","$603,473.00"
IAH - BOS,51347851209,IAH-JFK-LAX 2,757-300,https://www.airlines-manager.com/network/showline/41429011,https://www.airlines-manager.com/network/showflight/51347851209,https://www.airlines-manager.com/aircraft/show/88400799,11:00,19:14,400,"$665,277.00","$603,473.00"
IAH - BOS,51347851210,IAH-JFK-LAX 4,757-300,https://www.airlines-manager.com/network/showline/41429011,https://www.airlines-manager.com/network/showflight/51347851210,https://www.airlines-manager.com/aircraft/show/88400801,12:00,20:14,400,"$665,277.00","$603,473.00"
IAH - BOS,51363387533,IAH-JFK-LAX 5,757-300,https://www.airlines-manager.com/network/showline/41429011,https://www.airlines-manager.com/network/showflight/51363387533,https://www.airlines-manager.com/aircraft/show/89233038,17:45,1:59,400,"$665,277.00","$603,473.00"
IAH - BOS,51363387534,IAH-JFK-LAX 1,757-300,https://www.airlines-manager.com/network/showline/41429011,https://www.airlines-manager.com/network/showflight/51363387534,https://www.airlines-manager.com/aircraft/show/88400798,18:30,2:44,378,"$643,438.00","$582,545.00"
IAH - BSB,51347851213,IAH 84A-4 E1,777-300,https://www.airlines-manager.com/network/showline/41559619,https://www.airlines-manager.com/network/showflight/51347851213,https://www.airlines-manager.com/aircraft/show/89124075,11:15,5:29,932,"$3,048,352.00","$2,780,418.00"
IAH - BSB,51370307008,IAH 84A-1 E1,777-300,https://www.airlines-manager.com/network/showline/41559619,https://www.airlines-manager.com/network/showflight/51370307008,https://www.airlines-manager.com/aircraft/show/89439131,20:15,14:29,932,"$3,048,352.00","$2,780,418.00"
IAH - BTV,51335558099,IAH-BTV-CAK 3,A321-200,https://www.airlines-manager.com/network/showline/48841709,https://www.airlines-manager.com/network/showflight/51335558099,https://www.airlines-manager.com/aircraft/show/86385103,0:00,8:14,310,"$515,456.00","$473,729.00"
IAH - BTV,51335558100,IAH-BTV-CAK 5,ERJ-175,https://www.airlines-manager.com/network/showline/48841709,https://www.airlines-manager.com/network/showflight/51335558100,https://www.airlines-manager.com/aircraft/show/82543907,4:15,12:29,112,"$242,896.00","$215,121.00"
IAH - BTV,51335558101,IAH-BTV-CAK 2,A321-200,https://www.airlines-manager.com/network/showline/48841709,https://www.airlines-manager.com/network/showflight/51335558101,https://www.airlines-manager.com/aircraft/show/114373409,7:15,15:29,310,"$515,456.00","$473,729.00"
IAH - BTV,51355083390,IAH-BTV-CAK 1,A321-200,https://www.airlines-manager.com/network/showline/48841709,https://www.airlines-manager.com/network/showflight/51355083390,https://www.airlines-manager.com/aircraft/show/114373410,14:00,22:14,310,"$515,456.00","$473,729.00"
IAH - BTV,51363387595,IAH-BTV-CAK 4,A321-200,https://www.airlines-manager.com/network/showline/48841709,https://www.airlines-manager.com/network/showflight/51363387595,https://www.airlines-manager.com/aircraft/show/113994196,18:45,2:59,309,"$512,511.00","$470,849.00"
IAH - BUF,51335558298,IAH-PVD-BUF 4,A321-200,https://www.airlines-manager.com/network/showline/46824184,https://www.airlines-manager.com/network/showflight/51335558298,https://www.airlines-manager.com/aircraft/show/107467127,1:15,8:14,310,"$451,437.00","$412,770.00"
IAH - BUF,51335558299,IAH-PVD-BUF 3,A321-200,https://www.airlines-manager.com/network/showline/46824184,https://www.airlines-manager.com/network/showflight/51335558299,https://www.airlines-manager.com/aircraft/show/107467128,4:00,10:59,310,"$451,437.00","$412,770.00"
IAH - BUF,51355083237,IAH-PVD-BUF 2,A321-200,https://www.airlines-manager.com/network/showline/46824184,https://www.airlines-manager.com/network/showflight/51355083237,https://www.airlines-manager.com/aircraft/show/107467129,13:00,19:59,310,"$451,437.00","$412,770.00"
IAH - BUF,51363387477,IAH-PVD-BUF 5 B,A319-100,https://www.airlines-manager.com/network/showline/46824184,https://www.airlines-manager.com/network/showflight/51363387477,https://www.airlines-manager.com/aircraft/show/110582843,17:00,23:59,198,"$340,837.00","$309,849.00"
IAH - BUF,51370307077,IAH-PVD-BUF 1,A321-200,https://www.airlines-manager.com/network/showline/46824184,https://www.airlines-manager.com/network/showflight/51370307077,https://www.airlines-manager.com/aircraft/show/107467130,21:15,4:14,310,"$451,437.00","$412,770.00"
IAH - BWI,51335558149,IAH-BWI-PHL 3,A321neo,https://www.airlines-manager.com/network/showline/44225049,https://www.airlines-manager.com/network/showflight/51335558149,https://www.airlines-manager.com/aircraft/show/106007215,0:15,6:59,338,"$465,613.00","$424,242.00"
IAH - BWI,51335558150,IAH CARGO 1,737-700,https://www.airlines-manager.com/network/showline/44225049,https://www.airlines-manager.com/network/showflight/51335558150,https://www.airlines-manager.com/aircraft/show/107543798,4:45,11:44,0,"$114,774.00","$84,056.00"
IAH - BWI,51347851194,IAH-BWI-PHL 2,A321neo,https://www.airlines-manager.com/network/showline/44225049,https://www.airlines-manager.com/network/showflight/51347851194,https://www.airlines-manager.com/aircraft/show/106007214,11:00,17:44,338,"$465,613.00","$424,242.00"
IAH - BWI,51355083327,IAH-BWI-PHL 1,A321neo,https://www.airlines-manager.com/network/showline/44225049,https://www.airlines-manager.com/network/showflight/51355083327,https://www.airlines-manager.com/aircraft/show/106007213,13:45,20:29,338,"$465,613.00","$424,242.00"
IAH - BWI,51355083328,IAH-BWI-PHL 5,A321neo,https://www.airlines-manager.com/network/showline/44225049,https://www.airlines-manager.com/network/showflight/51355083328,https://www.airlines-manager.com/aircraft/show/106007217,14:45,21:29,338,"$465,613.00","$424,242.00"
IAH - BWI,51370307057,IAH-BWI-PHL 4,A321neo,https://www.airlines-manager.com/network/showline/44225049,https://www.airlines-manager.com/network/showflight/51370307057,https://www.airlines-manager.com/aircraft/show/106007216,21:00,3:44,338,"$465,613.00","$424,242.00"
IAH - CAK,51335558503,IAH-BTV-CAK 4,A321-200,https://www.airlines-manager.com/network/showline/48841720,https://www.airlines-manager.com/network/showflight/51335558503,https://www.airlines-manager.com/aircraft/show/113994196,3:00,9:14,310,"$391,705.00","$357,270.00"
IAH - CAK,51335558504,IAH-BTV-CAK 3,A321-200,https://www.airlines-manager.com/network/showline/48841720,https://www.airlines-manager.com/network/showflight/51335558504,https://www.airlines-manager.com/aircraft/show/86385103,8:15,14:29,310,"$391,705.00","$357,270.00"
IAH - CAK,51355083208,IAH-BTV-CAK 5,ERJ-175,https://www.airlines-manager.com/network/showline/48841720,https://www.airlines-manager.com/network/showflight/51355083208,https://www.airlines-manager.com/aircraft/show/82543907,13:00,19:14,112,"$185,120.00","$162,566.00"
IAH - CAK,51363387338,IAH-BTV-CAK 2,A321-200,https://www.airlines-manager.com/network/showline/48841720,https://www.airlines-manager.com/network/showflight/51363387338,https://www.airlines-manager.com/aircraft/show/114373409,16:00,22:14,310,"$391,705.00","$357,270.00"
IAH - CAK,51370307141,IAH-BTV-CAK 1,A321-200,https://www.airlines-manager.com/network/showline/48841720,https://www.airlines-manager.com/network/showflight/51370307141,https://www.airlines-manager.com/aircraft/show/114373410,22:15,4:29,290,"$375,170.00","$341,344.00"
IAH - CHS,51335558340,IAH-RIC-SDF 5,ERJ-175,https://www.airlines-manager.com/network/showline/46824157,https://www.airlines-manager.com/network/showflight/51335558340,https://www.airlines-manager.com/aircraft/show/107467211,1:30,7:14,112,"$169,505.00","$148,348.00"
IAH - CHS,51335558341,IAH-RIC-SDF 4,A321-200,https://www.airlines-manager.com/network/showline/46824157,https://www.airlines-manager.com/network/showflight/51335558341,https://www.airlines-manager.com/aircraft/show/107467131,3:30,9:14,310,"$357,336.00","$324,760.00"
IAH - CHS,51347851234,IAH-RIC-SDF 3,A321-200,https://www.airlines-manager.com/network/showline/46824157,https://www.airlines-manager.com/network/showflight/51347851234,https://www.airlines-manager.com/aircraft/show/107467132,12:00,17:44,310,"$357,336.00","$324,760.00"
IAH - CHS,51363387500,IAH-RIC-SDF 2,A321-200,https://www.airlines-manager.com/network/showline/46824157,https://www.airlines-manager.com/network/showflight/51363387500,https://www.airlines-manager.com/aircraft/show/107467133,17:15,22:59,310,"$357,336.00","$324,760.00"
IAH - CHS,51374354778,IAH-RIC-SDF 1,A321-200,https://www.airlines-manager.com/network/showline/46824157,https://www.airlines-manager.com/network/showflight/51374354778,https://www.airlines-manager.com/aircraft/show/107467134,23:45,5:29,310,"$357,336.00","$324,760.00"
IAH - CLE,51335558411,IAH-CLE-STL 3,A321-200,https://www.airlines-manager.com/network/showline/45495444,https://www.airlines-manager.com/network/showflight/51335558411,https://www.airlines-manager.com/aircraft/show/103600702,2:00,8:14,310,"$398,902.00","$362,191.00"
IAH - CLE,51335558412,IAH-CLE-STL 2,A321-200,https://www.airlines-manager.com/network/showline/45495444,https://www.airlines-manager.com/network/showflight/51335558412,https://www.airlines-manager.com/aircraft/show/103600701,7:45,13:59,310,"$398,902.00","$362,191.00"
IAH - CLE,51355083378,IAH-CLE-STL 1,A321-200,https://www.airlines-manager.com/network/showline/45495444,https://www.airlines-manager.com/network/showflight/51355083378,https://www.airlines-manager.com/aircraft/show/103600700,14:00,20:14,310,"$398,902.00","$362,191.00"
IAH - CLE,51363387230,IAH-CLE-STL 5 B,A319-100,https://www.airlines-manager.com/network/showline/45495444,https://www.airlines-manager.com/network/showflight/51363387230,https://www.airlines-manager.com/aircraft/show/110582844,15:30,21:44,198,"$301,307.00","$271,891.00"
IAH - CLE,51363387231,IAH-CLE-STL 4,A321-200,https://www.airlines-manager.com/network/showline/45495444,https://www.airlines-manager.com/network/showflight/51363387231,https://www.airlines-manager.com/aircraft/show/88725601,19:00,1:14,310,"$398,902.00","$362,191.00"
IAH - CLT,51335558570,IAH-SLC-CLT 3,A321-200,https://www.airlines-manager.com/network/showline/42897996,https://www.airlines-manager.com/network/showflight/51335558570,https://www.airlines-manager.com/aircraft/show/93094697,3:45,9:29,310,"$359,869.00","$317,569.00"
IAH - CLT,51347850936,IAH-SLC-CLT 2,A321-200,https://www.airlines-manager.com/network/showline/42897996,https://www.airlines-manager.com/network/showflight/51347850936,https://www.airlines-manager.com/aircraft/show/93094698,10:00,15:44,310,"$359,869.00","$317,569.00"
IAH - CLT,51347850937,IAH-SLC-CLT 6,ERJ-175,https://www.airlines-manager.com/network/showline/42897996,https://www.airlines-manager.com/network/showflight/51347850937,https://www.airlines-manager.com/aircraft/show/93100455,12:00,17:44,112,"$170,327.00","$143,356.00"
IAH - CLT,51363387398,IAH-SLC-CLT 1,A321-200,https://www.airlines-manager.com/network/showline/42897996,https://www.airlines-manager.com/network/showflight/51363387398,https://www.airlines-manager.com/aircraft/show/93094699,16:45,22:29,310,"$359,869.00","$317,569.00"
IAH - CLT,51363387434,IAH-SLC-CLT 5,A321-200,https://www.airlines-manager.com/network/showline/42897996,https://www.airlines-manager.com/network/showflight/51363387434,https://www.airlines-manager.com/aircraft/show/93094695,18:45,0:29,310,"$359,869.00","$317,569.00"
IAH - CLT,51370307125,IAH-SLC-CLT 4,A321-200,https://www.airlines-manager.com/network/showline/42897996,https://www.airlines-manager.com/network/showflight/51370307125,https://www.airlines-manager.com/aircraft/show/93094696,22:00,3:44,310,"$359,869.00","$317,569.00"
IAH - CMH,51335558708,IAH-RNO-MCI 1,A321-200,https://www.airlines-manager.com/network/showline/45594509,https://www.airlines-manager.com/network/showflight/51335558708,https://www.airlines-manager.com/aircraft/show/103882355,7:00,12:59,310,"$377,259.00","$341,992.00"
IAH - CMH,51347851201,IAH-RNO-MCI 4,A321-200,https://www.airlines-manager.com/network/showline/45594509,https://www.airlines-manager.com/network/showflight/51347851201,https://www.airlines-manager.com/aircraft/show/103882358,11:00,16:59,310,"$377,259.00","$341,992.00"
IAH - CMH,51347851202,IAH-RNO-MCI 5,ERJ-175,https://www.airlines-manager.com/network/showline/45594509,https://www.airlines-manager.com/network/showflight/51347851202,https://www.airlines-manager.com/aircraft/show/105099861,12:00,17:59,112,"$178,275.00","$155,395.00"
IAH - CMH,51363387625,IAH-RNO-MCI 3,A321-200,https://www.airlines-manager.com/network/showline/45594509,https://www.airlines-manager.com/network/showflight/51363387625,https://www.airlines-manager.com/aircraft/show/103882357,19:15,1:14,310,"$377,259.00","$341,992.00"
IAH - CMH,51374354731,IAH-RNO-MCI 2,A321-200,https://www.airlines-manager.com/network/showline/45594509,https://www.airlines-manager.com/network/showflight/51374354731,https://www.airlines-manager.com/aircraft/show/103882356,23:00,4:59,310,"$377,259.00","$341,992.00"
IAH - COS,51335558363,IAH-RNO-MCI 1,A321-200,https://www.airlines-manager.com/network/showline/45594506,https://www.airlines-manager.com/network/showflight/51335558363,https://www.airlines-manager.com/aircraft/show/103882355,1:45,6:59,310,"$330,287.00","$297,372.00"
IAH - COS,51335558364,IAH-RNO-MCI 4,A321-200,https://www.airlines-manager.com/network/showline/45594506,https://www.airlines-manager.com/network/showflight/51335558364,https://www.airlines-manager.com/aircraft/show/103882358,5:45,10:59,310,"$330,287.00","$297,372.00"
IAH - COS,51355083385,IAH-RNO-MCI 3,A321-200,https://www.airlines-manager.com/network/showline/45594506,https://www.airlines-manager.com/network/showflight/51355083385,https://www.airlines-manager.com/aircraft/show/103882357,14:00,19:14,310,"$330,287.00","$297,372.00"
IAH - COS,51363387531,IAH-RNO-MCI 2,A321-200,https://www.airlines-manager.com/network/showline/45594506,https://www.airlines-manager.com/network/showflight/51363387531,https://www.airlines-manager.com/aircraft/show/103882356,17:45,22:59,310,"$330,287.00","$297,372.00"
IAH - COS,51374354716,IAH-RNO-MCI 5,ERJ-175,https://www.airlines-manager.com/network/showline/45594506,https://www.airlines-manager.com/network/showflight/51374354716,https://www.airlines-manager.com/aircraft/show/105099861,22:45,3:59,111,"$156,409.00","$135,283.00"
IAH - CUN,51335558254,IAH 56A-5 B,787-10,https://www.airlines-manager.com/network/showline/41805427,https://www.airlines-manager.com/network/showflight/51335558254,https://www.airlines-manager.com/aircraft/show/106676236,1:00,5:59,648,"$622,330.00","$569,221.00"
IAH - CUN,51355083182,IAH 56A-6 B,787-10,https://www.airlines-manager.com/network/showline/41805427,https://www.airlines-manager.com/network/showflight/51355083182,https://www.airlines-manager.com/aircraft/show/106676237,12:30,17:29,648,"$622,330.00","$569,221.00"
IAH - CUN,51370307034,IAH 56A-1 B,787-10,https://www.airlines-manager.com/network/showline/41805427,https://www.airlines-manager.com/network/showflight/51370307034,https://www.airlines-manager.com/aircraft/show/106676232,20:30,1:29,648,"$622,330.00","$569,221.00"
IAH - CVG,51335558143,IAH-SMF-CVG 4,737-900ER,https://www.airlines-manager.com/network/showline/44841050,https://www.airlines-manager.com/network/showflight/51335558143,https://www.airlines-manager.com/aircraft/show/99093332,0:15,5:44,320,"$346,138.00","$305,437.00"
IAH - CVG,51335558144,IAH-SMF-CVG 3,737-900ER,https://www.airlines-manager.com/network/showline/44841050,https://www.airlines-manager.com/network/showflight/51335558144,https://www.airlines-manager.com/aircraft/show/99093333,4:00,9:29,320,"$346,138.00","$305,437.00"
IAH - CVG,51335558145,IAH-SMF-CVG 2,737-900ER,https://www.airlines-manager.com/network/showline/44841050,https://www.airlines-manager.com/network/showflight/51335558145,https://www.airlines-manager.com/aircraft/show/99093334,8:00,13:29,320,"$346,138.00","$305,437.00"
IAH - CVG,51355083373,IAH-SMF-CVG 1,737-900ER,https://www.airlines-manager.com/network/showline/44841050,https://www.airlines-manager.com/network/showflight/51355083373,https://www.airlines-manager.com/aircraft/show/99093335,14:00,19:29,320,"$346,138.00","$305,437.00"
IAH - CVG,51363387255,IAH CARGO 2,A320-200,https://www.airlines-manager.com/network/showline/44841050,https://www.airlines-manager.com/network/showflight/51363387255,https://www.airlines-manager.com/aircraft/show/101412921,15:45,21:14,0,"$107,998.00","$73,817.00"
IAH - CVG,51363387256,IAH-SMF-CVG 5 B,A319-100,https://www.airlines-manager.com/network/showline/44841050,https://www.airlines-manager.com/network/showflight/51363387256,https://www.airlines-manager.com/aircraft/show/106499070,16:00,21:29,198,"$262,645.00","$234,118.00"
IAH - DEN,51347851245,IAH-SEA-DEN 5,A321neo,https://www.airlines-manager.com/network/showline/41444690,https://www.airlines-manager.com/network/showflight/51347851245,https://www.airlines-manager.com/aircraft/show/105562975,12:00,17:29,338,"$376,616.00","$323,382.00"
IAH - DEN,51355083268,IAH-SEA-DEN 1,A321neo,https://www.airlines-manager.com/network/showline/41444690,https://www.airlines-manager.com/network/showflight/51355083268,https://www.airlines-manager.com/aircraft/show/105562971,13:00,18:29,338,"$376,616.00","$323,382.00"
IAH - DEN,51374354684,IAH-SEA-DEN 2,A321neo,https://www.airlines-manager.com/network/showline/41444690,https://www.airlines-manager.com/network/showflight/51374354684,https://www.airlines-manager.com/aircraft/show/105562972,22:30,3:59,338,"$376,616.00","$323,382.00"
IAH - DEN,51374354685,IAH-SEA-DEN 3,A321neo,https://www.airlines-manager.com/network/showline/41444690,https://www.airlines-manager.com/network/showflight/51374354685,https://www.airlines-manager.com/aircraft/show/105562973,23:00,4:29,338,"$376,616.00","$323,382.00"
IAH - DEN,51374354686,IAH CARGO 1,737-700,https://www.airlines-manager.com/network/showline/41444690,https://www.airlines-manager.com/network/showflight/51374354686,https://www.airlines-manager.com/aircraft/show/107543798,23:15,4:44,0,"$93,110.00","$57,053.00"
IAH - DEN,51374354687,IAH-SEA-DEN 4,A321neo,https://www.airlines-manager.com/network/showline/41444690,https://www.airlines-manager.com/network/showflight/51374354687,https://www.airlines-manager.com/aircraft/show/105562974,23:30,4:59,338,"$376,616.00","$323,382.00"
IAH - DFW,51335558284,IAH-SMF-CVG 3,737-900ER,https://www.airlines-manager.com/network/showline/41920952,https://www.airlines-manager.com/network/showflight/51335558284,https://www.airlines-manager.com/aircraft/show/99093333,1:00,3:59,320,"$130,428.00","$82,834.00"
IAH - DFW,51335558285,IAH-SMF-CVG 2,737-900ER,https://www.airlines-manager.com/network/showline/41920952,https://www.airlines-manager.com/network/showflight/51335558285,https://www.airlines-manager.com/aircraft/show/99093334,5:00,7:59,320,"$130,428.00","$82,834.00"
IAH - DFW,51347851175,IAH-SMF-CVG 1,737-900ER,https://www.airlines-manager.com/network/showline/41920952,https://www.airlines-manager.com/network/showflight/51347851175,https://www.airlines-manager.com/aircraft/show/99093335,11:00,13:59,320,"$130,428.00","$82,834.00"
IAH - DFW,51347851176,IAH-DFW-STL,ERJ-175,https://www.airlines-manager.com/network/showline/41920952,https://www.airlines-manager.com/network/showflight/51347851176,https://www.airlines-manager.com/aircraft/show/96990010,12:00,14:59,112,"$58,259.00","$33,809.00"
IAH - DFW,51355083240,IAH CARGO 1,737-700,https://www.airlines-manager.com/network/showline/41920952,https://www.airlines-manager.com/network/showflight/51355083240,https://www.airlines-manager.com/aircraft/show/107543798,13:00,15:59,0,"$39,182.00","$14,220.00"
IAH - DFW,51355083241,IAH-SMF-CVG 5 B,A319-100,https://www.airlines-manager.com/network/showline/41920952,https://www.airlines-manager.com/network/showflight/51355083241,https://www.airlines-manager.com/aircraft/show/106499070,13:00,15:59,198,"$98,047.00","$65,959.00"
IAH - DFW,51370307091,IAH-SMF-CVG 4,737-900ER,https://www.airlines-manager.com/network/showline/41920952,https://www.airlines-manager.com/network/showflight/51370307091,https://www.airlines-manager.com/aircraft/show/99093332,21:15,0:14,320,"$130,428.00","$82,834.00"
IAH - DSM,51335558534,IAH-FAT-SAV 1,737-900ER,https://www.airlines-manager.com/network/showline/47654556,https://www.airlines-manager.com/network/showflight/51335558534,https://www.airlines-manager.com/aircraft/show/110424761,3:15,8:29,320,"$331,460.00","$296,530.00"
IAH - DSM,51347850792,IAH-FAT-SAV 4,737-900ER,https://www.airlines-manager.com/network/showline/47654556,https://www.airlines-manager.com/network/showflight/51347850792,https://www.airlines-manager.com/aircraft/show/110424758,8:45,13:59,320,"$331,460.00","$296,530.00"
IAH - DSM,51355083340,IAH-FAT-SAV 3,737-900ER,https://www.airlines-manager.com/network/showline/47654556,https://www.airlines-manager.com/network/showflight/51355083340,https://www.airlines-manager.com/aircraft/show/110424759,14:00,19:14,320,"$331,460.00","$296,530.00"
IAH - DSM,51363387575,IAH-FAT-SAV 2,737-900ER,https://www.airlines-manager.com/network/showline/47654556,https://www.airlines-manager.com/network/showflight/51363387575,https://www.airlines-manager.com/aircraft/show/110424760,18:30,23:44,320,"$331,460.00","$296,530.00"
IAH - DTW,51335558159,IAH-MIA-ORD 1,A321-200,https://www.airlines-manager.com/network/showline/41960920,https://www.airlines-manager.com/network/showflight/51335558159,https://www.airlines-manager.com/aircraft/show/90183184,0:30,6:44,310,"$393,702.00","$348,945.00"
IAH - DTW,51335558160,IAH-MIA-ORD 5,A321-200,https://www.airlines-manager.com/network/showline/41960920,https://www.airlines-manager.com/network/showflight/51335558160,https://www.airlines-manager.com/aircraft/show/90183180,2:30,8:44,310,"$393,702.00","$348,945.00"
IAH - DTW,51335558161,IAH-MIA-ORD 4,A321-200,https://www.airlines-manager.com/network/showline/41960920,https://www.airlines-manager.com/network/showflight/51335558161,https://www.airlines-manager.com/aircraft/show/90183181,6:00,12:14,310,"$393,702.00","$348,945.00"
IAH - DTW,51355083234,IAH-MIA-ORD 3,A321-200,https://www.airlines-manager.com/network/showline/41960920,https://www.airlines-manager.com/network/showflight/51355083234,https://www.airlines-manager.com/aircraft/show/90183182,13:00,19:14,310,"$393,702.00","$348,945.00"
IAH - DTW,51363387591,IAH-MIA-ORD 2,A321-200,https://www.airlines-manager.com/network/showline/41960920,https://www.airlines-manager.com/network/showflight/51363387591,https://www.airlines-manager.com/aircraft/show/90183183,18:45,0:59,310,"$393,702.00","$348,945.00"
IAH - DTW,51370307040,IAH-MIA-ORD 6 S,ERJ-175,https://www.airlines-manager.com/network/showline/41960920,https://www.airlines-manager.com/network/showflight/51370307040,https://www.airlines-manager.com/aircraft/show/90140936,20:45,2:59,136,"$187,242.00","$158,696.00"
IAH - ELP,51335558548,IAH-PBI-RSW 3,A321-200,https://www.airlines-manager.com/network/showline/45920394,https://www.airlines-manager.com/network/showflight/51335558548,https://www.airlines-manager.com/aircraft/show/104717245,3:30,8:14,310,"$299,097.00","$268,740.00"
IAH - ELP,51347851172,IAH-PBI-RSW 2,A321-200,https://www.airlines-manager.com/network/showline/45920394,https://www.airlines-manager.com/network/showflight/51347851172,https://www.airlines-manager.com/aircraft/show/104717246,11:00,15:44,310,"$299,097.00","$268,740.00"
IAH - ELP,51363387437,IAH-PBI-RSW 1,A321-200,https://www.airlines-manager.com/network/showline/45920394,https://www.airlines-manager.com/network/showflight/51363387437,https://www.airlines-manager.com/aircraft/show/104717247,16:45,21:29,310,"$299,097.00","$268,740.00"
IAH - ELP,51363387438,IAH-PBI-RSW 5,ERJ-175,https://www.airlines-manager.com/network/showline/45920394,https://www.airlines-manager.com/network/showflight/51363387438,https://www.airlines-manager.com/aircraft/show/104743902,19:00,23:44,112,"$142,558.00","$123,181.00"
IAH - ELP,51370307124,IAH-PBI-RSW 4,A321-200,https://www.airlines-manager.com/network/showline/45920394,https://www.airlines-manager.com/network/showflight/51370307124,https://www.airlines-manager.com/aircraft/show/104717244,22:00,2:44,310,"$299,097.00","$268,740.00"
IAH - EZE,51335558598,IAH 84A-3 E1,777-300,https://www.airlines-manager.com/network/showline/41556672,https://www.airlines-manager.com/network/showflight/51335558598,https://www.airlines-manager.com/aircraft/show/89124076,4:00,0:29,932,"$3,357,892.00","$3,060,630.00"
IAH - EZE,51335558599,IAH 84A-5 E1,777-300,https://www.airlines-manager.com/network/showline/41556672,https://www.airlines-manager.com/network/showflight/51335558599,https://www.airlines-manager.com/aircraft/show/89124074,5:30,1:59,932,"$3,357,892.00","$3,060,630.00"
IAH - FAR,51335558344,IAH-MSO-FAR 4,737-900ER,https://www.airlines-manager.com/network/showline/47654615,https://www.airlines-manager.com/network/showflight/51335558344,https://www.airlines-manager.com/aircraft/show/110424754,1:30,8:14,320,"$416,723.00","$376,276.00"
IAH - FAR,51335558345,IAH-MSO-FAR 3,737-900ER,https://www.airlines-manager.com/network/showline/47654615,https://www.airlines-manager.com/network/showflight/51335558345,https://www.airlines-manager.com/aircraft/show/110424755,4:15,10:59,320,"$416,723.00","$376,276.00"
IAH - FAR,51347851239,IAH-MSO-FAR 2,737-900ER,https://www.airlines-manager.com/network/showline/47654615,https://www.airlines-manager.com/network/showflight/51347851239,https://www.airlines-manager.com/aircraft/show/110424756,12:00,18:44,320,"$416,723.00","$376,276.00"
IAH - FAR,51370307137,IAH-MSO-FAR 1,737-900ER,https://www.airlines-manager.com/network/showline/47654615,https://www.airlines-manager.com/network/showflight/51370307137,https://www.airlines-manager.com/aircraft/show/110424757,22:00,4:44,320,"$416,723.00","$376,276.00"
IAH - FAT,51335558586,IAH-FAT-SAV 2,737-900ER,https://www.airlines-manager.com/network/showline/47654561,https://www.airlines-manager.com/network/showflight/51335558586,https://www.airlines-manager.com/aircraft/show/110424760,4:00,11:44,320,"$496,239.00","$450,786.00"
IAH - FAT,51355083341,IAH-FAT-SAV 1,737-900ER,https://www.airlines-manager.com/network/showline/47654561,https://www.airlines-manager.com/network/showflight/51355083341,https://www.airlines-manager.com/aircraft/show/110424761,14:00,21:44,320,"$496,239.00","$450,786.00"
IAH - FAT,51363387562,IAH-FAT-SAV 4,737-900ER,https://www.airlines-manager.com/network/showline/47654561,https://www.airlines-manager.com/network/showflight/51363387562,https://www.airlines-manager.com/aircraft/show/110424758,18:15,1:59,320,"$496,239.00","$450,786.00"
IAH - FAT,51374354766,IAH-FAT-SAV 3,737-900ER,https://www.airlines-manager.com/network/showline/47654561,https://www.airlines-manager.com/network/showflight/51374354766,https://www.airlines-manager.com/aircraft/show/110424759,23:30,7:14,320,"$496,239.00","$450,786.00"
IAH - FLL,51335558169,IAH-SLC-CLT 5,A321-200,https://www.airlines-manager.com/network/showline/42890581,https://www.airlines-manager.com/network/showflight/51335558169,https://www.airlines-manager.com/aircraft/show/93094695,0:30,6:14,310,"$366,539.00","$329,311.00"
IAH - FLL,51335558170,IAH-SLC-CLT 4,A321-200,https://www.airlines-manager.com/network/showline/42890581,https://www.airlines-manager.com/network/showflight/51335558170,https://www.airlines-manager.com/aircraft/show/93094696,3:45,9:29,310,"$366,539.00","$329,311.00"
IAH - FLL,51347850995,IAH-SLC-CLT 3,A321-200,https://www.airlines-manager.com/network/showline/42890581,https://www.airlines-manager.com/network/showflight/51347850995,https://www.airlines-manager.com/aircraft/show/93094697,10:00,15:44,310,"$366,539.00","$329,311.00"
IAH - FLL,51363387247,IAH-SLC-CLT 2,A321-200,https://www.airlines-manager.com/network/showline/42890581,https://www.airlines-manager.com/network/showflight/51363387247,https://www.airlines-manager.com/aircraft/show/93094698,15:45,21:29,310,"$366,539.00","$329,311.00"
IAH - FLL,51363387248,IAH-SLC-CLT 6,ERJ-175,https://www.airlines-manager.com/network/showline/42890581,https://www.airlines-manager.com/network/showflight/51363387248,https://www.airlines-manager.com/aircraft/show/93100455,17:45,23:29,112,"$173,913.00","$149,893.00"
IAH - FLL,51374354675,IAH-SLC-CLT 1,A321-200,https://www.airlines-manager.com/network/showline/42890581,https://www.airlines-manager.com/network/showflight/51374354675,https://www.airlines-manager.com/aircraft/show/93094699,22:30,4:14,310,"$366,539.00","$329,311.00"
IAH - FSD,51335558635,IAH-MSO-FAR 1,737-900ER,https://www.airlines-manager.com/network/showline/47654619,https://www.airlines-manager.com/network/showflight/51335558635,https://www.airlines-manager.com/aircraft/show/110424757,4:45,10:29,320,"$361,497.00","$324,662.00"
IAH - FSD,51335558636,IAH-MSO-FAR 4,737-900ER,https://www.airlines-manager.com/network/showline/47654619,https://www.airlines-manager.com/network/showflight/51335558636,https://www.airlines-manager.com/aircraft/show/110424754,8:15,13:59,320,"$361,497.00","$324,662.00"
IAH - FSD,51347851156,IAH-MSO-FAR 3,737-900ER,https://www.airlines-manager.com/network/showline/47654619,https://www.airlines-manager.com/network/showflight/51347851156,https://www.airlines-manager.com/aircraft/show/110424755,11:00,16:44,320,"$361,497.00","$324,662.00"
IAH - FSD,51363387599,IAH-MSO-FAR 2,737-900ER,https://www.airlines-manager.com/network/showline/47654619,https://www.airlines-manager.com/network/showflight/51363387599,https://www.airlines-manager.com/aircraft/show/110424756,18:45,0:29,280,"$334,061.00","$298,241.00"
IAH - GDL,51335558644,IAH-YYC-YUL 1,757-300,https://www.airlines-manager.com/network/showline/48842057,https://www.airlines-manager.com/network/showflight/51335558644,https://www.airlines-manager.com/aircraft/show/114266977,4:45,9:59,400,"$437,939.00","$395,426.00"
IAH - GDL,51347851123,IAH-YYC-YUL 4,757-300,https://www.airlines-manager.com/network/showline/48842057,https://www.airlines-manager.com/network/showflight/51347851123,https://www.airlines-manager.com/aircraft/show/114266980,10:45,15:59,400,"$437,939.00","$395,426.00"
IAH - GDL,51347851125,IAH-YYC-YUL 3,757-300,https://www.airlines-manager.com/network/showline/48842057,https://www.airlines-manager.com/network/showflight/51347851125,https://www.airlines-manager.com/aircraft/show/114266979,12:00,17:14,400,"$437,939.00","$395,426.00"
IAH - GDL,51370306978,IAH-YYC-YUL 2,757-300,https://www.airlines-manager.com/network/showline/48842057,https://www.airlines-manager.com/network/showflight/51370306978,https://www.airlines-manager.com/aircraft/show/114266978,20:00,1:14,354,"$394,146.00","$352,857.00"
IAH - GIG,51335558096,IAH 84A-1 E1,777-300,https://www.airlines-manager.com/network/showline/41556659,https://www.airlines-manager.com/network/showflight/51335558096,https://www.airlines-manager.com/aircraft/show/89439131,0:00,20:14,932,"$3,368,144.00","$3,065,499.00"
IAH - GIG,51335558097,IAH 84A-6 E1,777-300,https://www.airlines-manager.com/network/showline/41556659,https://www.airlines-manager.com/network/showflight/51335558097,https://www.airlines-manager.com/aircraft/show/88905141,2:00,22:14,932,"$3,368,144.00","$3,065,499.00"
IAH - GRU,51335558276,IAH 56A-1 B,787-10,https://www.airlines-manager.com/network/showline/41769042,https://www.airlines-manager.com/network/showflight/51335558276,https://www.airlines-manager.com/aircraft/show/106676232,1:00,20:29,648,"$2,471,276.00","$2,301,634.00"
IAH - GRU,51347851189,IAH 56A-3 B,787-10,https://www.airlines-manager.com/network/showline/41769042,https://www.airlines-manager.com/network/showflight/51347851189,https://www.airlines-manager.com/aircraft/show/106676234,11:00,6:29,648,"$2,471,276.00","$2,301,634.00"
IAH - GRU,51363387479,IAH 56A-5 B,787-10,https://www.airlines-manager.com/network/showline/41769042,https://www.airlines-manager.com/network/showflight/51363387479,https://www.airlines-manager.com/aircraft/show/106676236,17:00,12:29,648,"$2,471,276.00","$2,301,634.00"
IAH - IAD,51335558563,IAH-IAD-SAN 6,ERJ-175,https://www.airlines-manager.com/network/showline/44653691,https://www.airlines-manager.com/network/showflight/51335558563,https://www.airlines-manager.com/aircraft/show/105400635,3:30,10:14,112,"$198,618.00","$170,364.00"
IAH - IAD,51335558564,IAH-IAD-SAN 2,737-900ER,https://www.airlines-manager.com/network/showline/44653691,https://www.airlines-manager.com/network/showflight/51335558564,https://www.airlines-manager.com/aircraft/show/98578923,6:45,13:29,320,"$421,272.00","$371,688.00"
IAH - IAD,51347850866,IAH-IAD-SAN 5,737-900ER,https://www.airlines-manager.com/network/showline/44653691,https://www.airlines-manager.com/network/showflight/51347850866,https://www.airlines-manager.com/aircraft/show/98578920,9:45,16:29,320,"$421,272.00","$371,688.00"
IAH - IAD,51355083275,IAH-IAD-SAN 1,737-900ER,https://www.airlines-manager.com/network/showline/44653691,https://www.airlines-manager.com/network/showflight/51355083275,https://www.airlines-manager.com/aircraft/show/98578924,13:00,19:44,320,"$421,272.00","$371,688.00"
IAH - IAD,51363387535,IAH-IAD-SAN 4,737-900ER,https://www.airlines-manager.com/network/showline/44653691,https://www.airlines-manager.com/network/showflight/51363387535,https://www.airlines-manager.com/aircraft/show/98578921,18:00,0:44,320,"$421,272.00","$371,688.00"
IAH - IAD,51370307095,IAH-IAD-SAN 3,737-900ER,https://www.airlines-manager.com/network/showline/44653691,https://www.airlines-manager.com/network/showflight/51370307095,https://www.airlines-manager.com/aircraft/show/98578922,21:30,4:14,320,"$421,272.00","$371,688.00"
IAH - ICT,51347850865,IAH-FAT-SAV 1,737-900ER,https://www.airlines-manager.com/network/showline/47654551,https://www.airlines-manager.com/network/showflight/51347850865,https://www.airlines-manager.com/aircraft/show/110424761,9:45,13:59,320,"$249,753.00","$218,169.00"
IAH - ICT,51355083339,IAH-FAT-SAV 4,737-900ER,https://www.airlines-manager.com/network/showline/47654551,https://www.airlines-manager.com/network/showflight/51355083339,https://www.airlines-manager.com/aircraft/show/110424758,14:00,18:14,320,"$249,753.00","$218,169.00"
IAH - ICT,51363387613,IAH-FAT-SAV 3,737-900ER,https://www.airlines-manager.com/network/showline/47654551,https://www.airlines-manager.com/network/showflight/51363387613,https://www.airlines-manager.com/aircraft/show/110424759,19:15,23:29,320,"$249,753.00","$218,169.00"
IAH - ICT,51374354784,IAH-FAT-SAV 2,737-900ER,https://www.airlines-manager.com/network/showline/47654551,https://www.airlines-manager.com/network/showflight/51374354784,https://www.airlines-manager.com/aircraft/show/110424760,23:45,3:59,314,"$246,933.00","$215,437.00"
IAH - IND,51335558071,IAH-PIT-RDU 1,A321-200,https://www.airlines-manager.com/network/showline/45170732,https://www.airlines-manager.com/network/showflight/51335558071,https://www.airlines-manager.com/aircraft/show/100684074,0:00,5:29,310,"$342,563.00","$308,697.00"
IAH - IND,51335558072,IAH-PIT-RDU 5 B,A319-100,https://www.airlines-manager.com/network/showline/45170732,https://www.airlines-manager.com/network/showflight/51335558072,https://www.airlines-manager.com/aircraft/show/110582845,4:45,10:14,198,"$259,749.00","$232,620.00"
IAH - IND,51335558073,IAH-PIT-RDU 4,A321-200,https://www.airlines-manager.com/network/showline/45170732,https://www.airlines-manager.com/network/showflight/51335558073,https://www.airlines-manager.com/aircraft/show/100684071,6:00,11:29,310,"$342,563.00","$308,697.00"
IAH - IND,51347851221,IAH-PIT-RDU 3,A321-200,https://www.airlines-manager.com/network/showline/45170732,https://www.airlines-manager.com/network/showflight/51347851221,https://www.airlines-manager.com/aircraft/show/100684072,11:30,16:59,310,"$342,563.00","$308,697.00"
IAH - IND,51363387524,IAH-PIT-RDU 2,A321-200,https://www.airlines-manager.com/network/showline/45170732,https://www.airlines-manager.com/network/showflight/51363387524,https://www.airlines-manager.com/aircraft/show/100684073,17:45,23:14,310,"$342,563.00","$308,697.00"
IAH - JAN,51335558172,IAH-MSO-FAR 2,737-900ER,https://www.airlines-manager.com/network/showline/47654614,https://www.airlines-manager.com/network/showflight/51335558172,https://www.airlines-manager.com/aircraft/show/110424756,0:30,3:59,320,"$176,739.00","$149,288.00"
IAH - JAN,51347851115,IAH-MSO-FAR 1,737-900ER,https://www.airlines-manager.com/network/showline/47654614,https://www.airlines-manager.com/network/showflight/51347851115,https://www.airlines-manager.com/aircraft/show/110424757,10:30,13:59,320,"$176,739.00","$149,288.00"
IAH - JAN,51355083345,IAH-MSO-FAR 4,737-900ER,https://www.airlines-manager.com/network/showline/47654614,https://www.airlines-manager.com/network/showflight/51355083345,https://www.airlines-manager.com/aircraft/show/110424754,14:00,17:29,320,"$176,739.00","$149,288.00"
IAH - JAN,51363387446,IAH-MSO-FAR 3,737-900ER,https://www.airlines-manager.com/network/showline/47654614,https://www.airlines-manager.com/network/showflight/51363387446,https://www.airlines-manager.com/aircraft/show/110424755,16:45,20:14,305,"$171,721.00","$144,411.00"
IAH - JAX,51335558505,IAH-PBI-RSW 1,A321-200,https://www.airlines-manager.com/network/showline/45920385,https://www.airlines-manager.com/network/showflight/51335558505,https://www.airlines-manager.com/aircraft/show/104717247,3:00,8:14,310,"$336,348.00","$304,120.00"
IAH - JAX,51335558506,IAH-PBI-RSW 5,ERJ-175,https://www.airlines-manager.com/network/showline/45920385,https://www.airlines-manager.com/network/showflight/51335558506,https://www.airlines-manager.com/aircraft/show/104743902,8:00,13:14,112,"$159,544.00","$138,784.00"
IAH - JAX,51347851198,IAH-PBI-RSW 4,A321-200,https://www.airlines-manager.com/network/showline/45920385,https://www.airlines-manager.com/network/showflight/51347851198,https://www.airlines-manager.com/aircraft/show/104717244,11:00,16:14,310,"$336,348.00","$304,120.00"
IAH - JAX,51363387388,IAH-PBI-RSW 3,A321-200,https://www.airlines-manager.com/network/showline/45920385,https://www.airlines-manager.com/network/showflight/51363387388,https://www.airlines-manager.com/aircraft/show/104717245,16:30,21:44,310,"$336,348.00","$304,120.00"
IAH - JAX,51370307090,IAH-PBI-RSW 2,A321-200,https://www.airlines-manager.com/network/showline/45920385,https://www.airlines-manager.com/network/showflight/51370307090,https://www.airlines-manager.com/aircraft/show/104717246,21:15,2:29,310,"$336,348.00","$304,120.00"
IAH - JFK,51335558398,IAH-JFK-LAX 5,757-300,https://www.airlines-manager.com/network/showline/41429004,https://www.airlines-manager.com/network/showflight/51335558398,https://www.airlines-manager.com/aircraft/show/89233038,2:00,9:29,400,"$619,322.00","$546,013.00"
IAH - JFK,51347851211,IAH-JFK-LAX 1,757-300,https://www.airlines-manager.com/network/showline/41429004,https://www.airlines-manager.com/network/showflight/51347851211,https://www.airlines-manager.com/aircraft/show/88400798,11:00,18:29,400,"$619,322.00","$546,013.00"
IAH - JFK,51363387563,IAH-JFK-LAX 3,757-300,https://www.airlines-manager.com/network/showline/41429004,https://www.airlines-manager.com/network/showflight/51363387563,https://www.airlines-manager.com/aircraft/show/88400800,18:15,1:44,400,"$619,322.00","$546,013.00"
IAH - JFK,51363387564,IAH-JFK-LAX 2,757-300,https://www.airlines-manager.com/network/showline/41429004,https://www.airlines-manager.com/network/showflight/51363387564,https://www.airlines-manager.com/aircraft/show/88400799,19:15,2:44,400,"$619,322.00","$546,013.00"
IAH - JFK,51370307085,IAH-JFK-LAX 4,757-300,https://www.airlines-manager.com/network/showline/41429004,https://www.airlines-manager.com/network/showflight/51370307085,https://www.airlines-manager.com/aircraft/show/88400801,21:15,4:44,400,"$619,322.00","$546,013.00"
IAH - LAS,51335558582,IAH-LAS-ATL 1,737-900ER,https://www.airlines-manager.com/network/showline/41475884,https://www.airlines-manager.com/network/showflight/51335558582,https://www.airlines-manager.com/aircraft/show/96256511,4:00,10:44,320,"$427,825.00","$366,344.00"
IAH - LAS,51335558583,IAH-LAS-ATL 2,737-900ER,https://www.airlines-manager.com/network/showline/41475884,https://www.airlines-manager.com/network/showflight/51335558583,https://www.airlines-manager.com/aircraft/show/96250652,5:00,11:44,320,"$427,825.00","$366,344.00"
IAH - LAS,51335558584,IAH-DFW-STL,ERJ-175,https://www.airlines-manager.com/network/showline/41475884,https://www.airlines-manager.com/network/showflight/51335558584,https://www.airlines-manager.com/aircraft/show/96990010,5:15,11:59,112,"$201,346.00","$167,052.00"
IAH - LAS,51347851204,IAH-LAS-ATL 4,737-900ER,https://www.airlines-manager.com/network/showline/41475884,https://www.airlines-manager.com/network/showflight/51347851204,https://www.airlines-manager.com/aircraft/show/96177955,11:00,17:44,320,"$427,825.00","$366,344.00"
IAH - LAS,51355083410,IAH-LAS-ATL 5,737-900ER,https://www.airlines-manager.com/network/showline/41475884,https://www.airlines-manager.com/network/showflight/51355083410,https://www.airlines-manager.com/aircraft/show/95894466,14:45,21:29,320,"$427,825.00","$366,344.00"
IAH - LAS,51363387506,IAH-LAS-ATL 6,ERJ-175,https://www.airlines-manager.com/network/showline/41475884,https://www.airlines-manager.com/network/showflight/51363387506,https://www.airlines-manager.com/aircraft/show/82323704,17:30,0:14,112,"$201,346.00","$167,052.00"
IAH - LAS,51370307044,IAH-LAS-ATL 3,737-900ER,https://www.airlines-manager.com/network/showline/41475884,https://www.airlines-manager.com/network/showflight/51370307044,https://www.airlines-manager.com/aircraft/show/96183549,20:45,3:29,320,"$427,825.00","$366,344.00"
IAH - LAX,51335558483,IAH-JFK-LAX 2,757-300,https://www.airlines-manager.com/network/showline/41429006,https://www.airlines-manager.com/network/showflight/51335558483,https://www.airlines-manager.com/aircraft/show/88400799,2:45,9:59,400,"$606,964.00","$534,791.00"
IAH - LAX,51335558484,IAH-JFK-LAX 1,757-300,https://www.airlines-manager.com/network/showline/41429006,https://www.airlines-manager.com/network/showflight/51335558484,https://www.airlines-manager.com/aircraft/show/88400798,3:45,10:59,400,"$606,964.00","$534,791.00"
IAH - LAX,51335558485,IAH-JFK-LAX 4,757-300,https://www.airlines-manager.com/network/showline/41429006,https://www.airlines-manager.com/network/showflight/51335558485,https://www.airlines-manager.com/aircraft/show/88400801,4:45,11:59,400,"$606,964.00","$534,791.00"
IAH - LAX,51347851117,IAH-JFK-LAX 5,757-300,https://www.airlines-manager.com/network/showline/41429006,https://www.airlines-manager.com/network/showflight/51347851117,https://www.airlines-manager.com/aircraft/show/89233038,10:30,17:44,400,"$606,964.00","$534,791.00"
IAH - LAX,51347851118,IAH-JFK-LAX 3,757-300,https://www.airlines-manager.com/network/showline/41429006,https://www.airlines-manager.com/network/showflight/51347851118,https://www.airlines-manager.com/aircraft/show/88400800,11:00,18:14,400,"$606,964.00","$534,791.00"
IAH - LEX,51335558622,IAH-BTV-CAK 1,A321-200,https://www.airlines-manager.com/network/showline/48841727,https://www.airlines-manager.com/network/showflight/51335558622,https://www.airlines-manager.com/aircraft/show/114373410,4:30,9:44,310,"$333,424.00","$303,446.00"
IAH - LEX,51347850850,IAH-BTV-CAK 4,A321-200,https://www.airlines-manager.com/network/showline/48841727,https://www.airlines-manager.com/network/showflight/51347850850,https://www.airlines-manager.com/aircraft/show/113994196,9:15,14:29,310,"$333,424.00","$303,446.00"
IAH - LEX,51355083441,IAH-BTV-CAK 3,A321-200,https://www.airlines-manager.com/network/showline/48841727,https://www.airlines-manager.com/network/showflight/51355083441,https://www.airlines-manager.com/aircraft/show/86385103,15:00,20:14,310,"$333,424.00","$303,446.00"
IAH - LEX,51363387618,IAH-BTV-CAK 5,ERJ-175,https://www.airlines-manager.com/network/showline/48841727,https://www.airlines-manager.com/network/showflight/51363387618,https://www.airlines-manager.com/aircraft/show/82543907,19:15,0:29,112,"$158,427.00","$138,994.00"
IAH - LEX,51370307151,IAH-BTV-CAK 2,A321-200,https://www.airlines-manager.com/network/showline/48841727,https://www.airlines-manager.com/network/showflight/51370307151,https://www.airlines-manager.com/aircraft/show/114373409,22:15,3:29,263,"$303,620.00","$274,708.00"
IAH - LIM,51355083408,IAH 84A-2 E1,777-300,https://www.airlines-manager.com/network/showline/41559632,https://www.airlines-manager.com/network/showflight/51355083408,https://www.airlines-manager.com/aircraft/show/89439130,14:30,3:59,932,"$2,245,065.00","$2,045,220.00"
IAH - LIM,51374354783,IAH 84A-6 E1,777-300,https://www.airlines-manager.com/network/showline/41559632,https://www.airlines-manager.com/network/showflight/51374354783,https://www.airlines-manager.com/aircraft/show/88905141,23:45,13:14,932,"$2,245,065.00","$2,045,220.00"
IAH - LIT,51335558571,IAH-SJC-PWM 1,A321-200,https://www.airlines-manager.com/network/showline/46351097,https://www.airlines-manager.com/network/showflight/51335558571,https://www.airlines-manager.com/aircraft/show/96692491,3:45,7:14,310,"$188,142.00","$164,136.00"
IAH - LIT,51347851136,IAH-SJC-PWM 3,A321-200,https://www.airlines-manager.com/network/showline/46351097,https://www.airlines-manager.com/network/showflight/51347851136,https://www.airlines-manager.com/aircraft/show/96692343,11:00,14:29,310,"$188,142.00","$164,136.00"
IAH - LIT,51363387629,IAH-SJC-PWM 2,A321-200,https://www.airlines-manager.com/network/showline/46351097,https://www.airlines-manager.com/network/showflight/51363387629,https://www.airlines-manager.com/aircraft/show/96691558,19:30,22:59,310,"$188,142.00","$164,136.00"
IAH - LIT,51370306966,IAH-SJC-PWM 5 B,A319-100,https://www.airlines-manager.com/network/showline/46351097,https://www.airlines-manager.com/network/showflight/51370306966,https://www.airlines-manager.com/aircraft/show/106014350,20:00,23:29,198,"$141,962.00","$122,741.00"
IAH - LIT,51374354769,IAH-SJC-PWM 4,A321-200,https://www.airlines-manager.com/network/showline/46351097,https://www.airlines-manager.com/network/showflight/51374354769,https://www.airlines-manager.com/aircraft/show/96694086,23:30,2:59,271,"$174,181.00","$150,575.00"
IAH - MCI,51335558286,IAH-RNO-MCI 4,A321-200,https://www.airlines-manager.com/network/showline/45594512,https://www.airlines-manager.com/network/showflight/51335558286,https://www.airlines-manager.com/aircraft/show/103882358,1:00,5:44,310,"$297,925.00","$266,767.00"
IAH - MCI,51347850840,IAH-RNO-MCI 3,A321-200,https://www.airlines-manager.com/network/showline/45594512,https://www.airlines-manager.com/network/showflight/51347850840,https://www.airlines-manager.com/aircraft/show/103882357,9:15,13:59,310,"$297,925.00","$266,767.00"
IAH - MCI,51355083298,IAH-RNO-MCI 2,A321-200,https://www.airlines-manager.com/network/showline/45594512,https://www.airlines-manager.com/network/showflight/51355083298,https://www.airlines-manager.com/aircraft/show/103882356,13:00,17:44,310,"$297,925.00","$266,767.00"
IAH - MCI,51363387555,IAH-RNO-MCI 5,ERJ-175,https://www.airlines-manager.com/network/showline/45594512,https://www.airlines-manager.com/network/showflight/51363387555,https://www.airlines-manager.com/aircraft/show/105099861,18:00,22:44,112,"$141,110.00","$121,290.00"
IAH - MCI,51370307069,IAH-RNO-MCI 1,A321-200,https://www.airlines-manager.com/network/showline/45594512,https://www.airlines-manager.com/network/showflight/51370307069,https://www.airlines-manager.com/aircraft/show/103882355,21:00,1:44,310,"$297,925.00","$266,767.00"
IAH - MCI,51370307070,IAH CARGO 2,A320-200,https://www.airlines-manager.com/network/showline/45594512,https://www.airlines-manager.com/network/showflight/51370307070,https://www.airlines-manager.com/aircraft/show/101412921,21:15,1:59,0,"$90,492.00","$60,393.00"
IAH - MCO,51335558265,IAH-MIA-ORD 2,A321-200,https://www.airlines-manager.com/network/showline/41856116,https://www.airlines-manager.com/network/showflight/51335558265,https://www.airlines-manager.com/aircraft/show/90183183,1:00,6:29,310,"$344,958.00","$302,564.00"
IAH - MCO,51335558266,IAH-MIA-ORD 6 S,ERJ-175,https://www.airlines-manager.com/network/showline/41856116,https://www.airlines-manager.com/network/showflight/51335558266,https://www.airlines-manager.com/aircraft/show/90140936,3:00,8:29,136,"$164,259.00","$137,481.00"
IAH - MCO,51335558267,IAH-MIA-ORD 1,A321-200,https://www.airlines-manager.com/network/showline/41856116,https://www.airlines-manager.com/network/showflight/51335558267,https://www.airlines-manager.com/aircraft/show/90183184,6:45,12:14,310,"$344,958.00","$302,564.00"
IAH - MCO,51347850772,IAH-MIA-ORD 5,A321-200,https://www.airlines-manager.com/network/showline/41856116,https://www.airlines-manager.com/network/showflight/51347850772,https://www.airlines-manager.com/aircraft/show/90183180,8:45,14:14,310,"$344,958.00","$302,564.00"
IAH - MCO,51355083235,IAH-MIA-ORD 4,A321-200,https://www.airlines-manager.com/network/showline/41856116,https://www.airlines-manager.com/network/showflight/51355083235,https://www.airlines-manager.com/aircraft/show/90183181,13:00,18:29,310,"$344,958.00","$302,564.00"
IAH - MCO,51363387619,IAH-MIA-ORD 3,A321-200,https://www.airlines-manager.com/network/showline/41856116,https://www.airlines-manager.com/network/showflight/51363387619,https://www.airlines-manager.com/aircraft/show/90183182,19:15,0:44,310,"$344,958.00","$302,564.00"
IAH - MEM,51335558414,IAH CARGO 2,A320-200,https://www.airlines-manager.com/network/showline/44833769,https://www.airlines-manager.com/network/showflight/51335558414,https://www.airlines-manager.com/aircraft/show/101412921,2:00,5:59,0,"$71,747.00","$43,804.00"
IAH - MEM,51335558415,IAH-SMF-CVG 4,737-900ER,https://www.airlines-manager.com/network/showline/44833769,https://www.airlines-manager.com/network/showflight/51335558415,https://www.airlines-manager.com/aircraft/show/99093332,5:45,9:44,320,"$221,531.00","$188,169.00"
IAH - MEM,51347850858,IAH-SMF-CVG 3,737-900ER,https://www.airlines-manager.com/network/showline/44833769,https://www.airlines-manager.com/network/showflight/51347850858,https://www.airlines-manager.com/aircraft/show/99093333,9:30,13:29,320,"$221,531.00","$188,169.00"
IAH - MEM,51355083356,IAH-SMF-CVG 2,737-900ER,https://www.airlines-manager.com/network/showline/44833769,https://www.airlines-manager.com/network/showflight/51355083356,https://www.airlines-manager.com/aircraft/show/99093334,14:00,17:59,320,"$221,531.00","$188,169.00"
IAH - MEM,51363387630,IAH-SMF-CVG 1,737-900ER,https://www.airlines-manager.com/network/showline/44833769,https://www.airlines-manager.com/network/showflight/51363387630,https://www.airlines-manager.com/aircraft/show/99093335,19:30,23:29,320,"$221,531.00","$188,169.00"
IAH - MEM,51370307102,IAH-SMF-CVG 5 B,A319-100,https://www.airlines-manager.com/network/showline/44833769,https://www.airlines-manager.com/network/showflight/51370307102,https://www.airlines-manager.com/aircraft/show/106499070,21:30,1:29,198,"$168,142.00","$145,152.00"
IAH - MEX,51335558392,IAH-MEX-YYZ 6 S,ERJ-175,https://www.airlines-manager.com/network/showline/41979990,https://www.airlines-manager.com/network/showflight/51335558392,https://www.airlines-manager.com/aircraft/show/97026605,1:45,6:44,136,"$153,236.00","$128,335.00"
IAH - MEX,51335558393,IAH-MEX-YYZ 2,757-300,https://www.airlines-manager.com/network/showline/41979990,https://www.airlines-manager.com/network/showflight/51335558393,https://www.airlines-manager.com/aircraft/show/97076945,5:30,10:29,400,"$413,583.00","$365,240.00"
IAH - MEX,51335558394,IAH-MEX-YYZ 5,757-300,https://www.airlines-manager.com/network/showline/41979990,https://www.airlines-manager.com/network/showflight/51335558394,https://www.airlines-manager.com/aircraft/show/97076942,8:30,13:29,400,"$413,583.00","$365,240.00"
IAH - MEX,51355083239,IAH-MEX-YYZ 1,757-300,https://www.airlines-manager.com/network/showline/41979990,https://www.airlines-manager.com/network/showflight/51355083239,https://www.airlines-manager.com/aircraft/show/97076946,13:00,17:59,400,"$413,583.00","$365,240.00"
IAH - MEX,51363387312,IAH-MEX-YYZ 4,757-300,https://www.airlines-manager.com/network/showline/41979990,https://www.airlines-manager.com/network/showflight/51363387312,https://www.airlines-manager.com/aircraft/show/97076943,16:00,20:59,391,"$405,318.00","$357,199.00"
IAH - MEX,51374354692,IAH-MEX-YYZ 3,757-300,https://www.airlines-manager.com/network/showline/41979990,https://www.airlines-manager.com/network/showflight/51374354692,https://www.airlines-manager.com/aircraft/show/97076944,22:30,3:29,284,"$307,063.00","$261,601.00"
IAH - MHT,51335558329,IAH-MHT-ALB 3,737-900ER,https://www.airlines-manager.com/network/showline/48841849,https://www.airlines-manager.com/network/showflight/51335558329,https://www.airlines-manager.com/aircraft/show/114266971,1:30,9:44,320,"$523,320.00","$475,464.00"
IAH - MHT,51335558330,IAH-MHT-ALB 4,737-900ER,https://www.airlines-manager.com/network/showline/48841849,https://www.airlines-manager.com/network/showflight/51335558330,https://www.airlines-manager.com/aircraft/show/114266970,6:45,14:59,320,"$523,320.00","$475,464.00"
IAH - MHT,51347851247,IAH-MHT-ALB 1,737-900ER,https://www.airlines-manager.com/network/showline/48841849,https://www.airlines-manager.com/network/showflight/51347851247,https://www.airlines-manager.com/aircraft/show/114266972,12:00,20:14,320,"$523,320.00","$475,464.00"
IAH - MHT,51363387294,IAH-MHT-ALB 2,737-900ER,https://www.airlines-manager.com/network/showline/48841849,https://www.airlines-manager.com/network/showflight/51363387294,https://www.airlines-manager.com/aircraft/show/114266976,16:00,0:14,320,"$523,320.00","$475,464.00"
IAH - MHT,51363387295,IAH-MHT-ALB 5,ERJ-175,https://www.airlines-manager.com/network/showline/48841849,https://www.airlines-manager.com/network/showflight/51363387295,https://www.airlines-manager.com/aircraft/show/92800067,17:45,1:59,112,"$246,686.00","$218,119.00"
IAH - MIA,51335558202,IAH-MIA-ORD 3,A321-200,https://www.airlines-manager.com/network/showline/41856105,https://www.airlines-manager.com/network/showflight/51335558202,https://www.airlines-manager.com/aircraft/show/90183182,0:45,6:29,310,"$369,528.00","$323,771.00"
IAH - MIA,51335558203,IAH-MIA-ORD 2,A321-200,https://www.airlines-manager.com/network/showline/41856105,https://www.airlines-manager.com/network/showflight/51335558203,https://www.airlines-manager.com/aircraft/show/90183183,6:30,12:14,310,"$369,528.00","$323,771.00"
IAH - MIA,51335558204,IAH-MIA-ORD 6 S,ERJ-175,https://www.airlines-manager.com/network/showline/41856105,https://www.airlines-manager.com/network/showflight/51335558204,https://www.airlines-manager.com/aircraft/show/90140936,8:30,14:14,136,"$175,970.00","$147,002.00"
IAH - MIA,51355083230,IAH-MIA-ORD 1,A321-200,https://www.airlines-manager.com/network/showline/41856105,https://www.airlines-manager.com/network/showflight/51355083230,https://www.airlines-manager.com/aircraft/show/90183184,13:00,18:44,310,"$369,528.00","$323,771.00"
IAH - MIA,51355083231,IAH-MIA-ORD 5,A321-200,https://www.airlines-manager.com/network/showline/41856105,https://www.airlines-manager.com/network/showflight/51355083231,https://www.airlines-manager.com/aircraft/show/90183180,15:00,20:44,310,"$369,528.00","$323,771.00"
IAH - MIA,51363387582,IAH-MIA-ORD 4,A321-200,https://www.airlines-manager.com/network/showline/41856105,https://www.airlines-manager.com/network/showflight/51363387582,https://www.airlines-manager.com/aircraft/show/90183181,18:30,0:14,310,"$369,528.00","$323,771.00"
IAH - MKE,51335558261,IAH-BOI-BNA 2,A321-200,https://www.airlines-manager.com/network/showline/45748027,https://www.airlines-manager.com/network/showflight/51335558261,https://www.airlines-manager.com/aircraft/show/104258212,1:00,6:59,310,"$378,367.00","$343,233.00"
IAH - MKE,51335558262,IAH-BOI-BNA 1,A321-200,https://www.airlines-manager.com/network/showline/45748027,https://www.airlines-manager.com/network/showflight/51335558262,https://www.airlines-manager.com/aircraft/show/104258211,8:00,13:59,310,"$378,367.00","$343,233.00"
IAH - MKE,51347850819,IAH-BOI-BNA 5,ERJ-175,https://www.airlines-manager.com/network/showline/45748027,https://www.airlines-manager.com/network/showflight/51347850819,https://www.airlines-manager.com/aircraft/show/103534664,9:00,14:59,112,"$178,739.00","$155,939.00"
IAH - MKE,51355083361,IAH-BOI-BNA 4,A321-200,https://www.airlines-manager.com/network/showline/45748027,https://www.airlines-manager.com/network/showflight/51355083361,https://www.airlines-manager.com/aircraft/show/104258214,14:00,19:59,310,"$378,367.00","$343,233.00"
IAH - MKE,51363387614,IAH-BOI-BNA 3,A321-200,https://www.airlines-manager.com/network/showline/45748027,https://www.airlines-manager.com/network/showflight/51363387614,https://www.airlines-manager.com/aircraft/show/104258213,19:15,1:14,310,"$378,367.00","$343,233.00"
IAH - MSO,51335558597,IAH-MSO-FAR 2,737-900ER,https://www.airlines-manager.com/network/showline/47654624,https://www.airlines-manager.com/network/showflight/51335558597,https://www.airlines-manager.com/aircraft/show/110424756,4:00,11:59,320,"$506,098.00","$459,665.00"
IAH - MSO,51355083338,IAH-MSO-FAR 1,737-900ER,https://www.airlines-manager.com/network/showline/47654624,https://www.airlines-manager.com/network/showflight/51355083338,https://www.airlines-manager.com/aircraft/show/110424757,14:00,21:59,320,"$506,098.00","$459,665.00"
IAH - MSO,51363387509,IAH-MSO-FAR 4,737-900ER,https://www.airlines-manager.com/network/showline/47654624,https://www.airlines-manager.com/network/showflight/51363387509,https://www.airlines-manager.com/aircraft/show/110424754,17:30,1:29,320,"$506,098.00","$459,665.00"
IAH - MSO,51370306998,IAH-MSO-FAR 3,737-900ER,https://www.airlines-manager.com/network/showline/47654624,https://www.airlines-manager.com/network/showflight/51370306998,https://www.airlines-manager.com/aircraft/show/110424755,20:15,4:14,320,"$506,098.00","$459,665.00"
IAH - MSP,51335558580,IAH-LAS-ATL 5,737-900ER,https://www.airlines-manager.com/network/showline/41475907,https://www.airlines-manager.com/network/showflight/51335558580,https://www.airlines-manager.com/aircraft/show/95894466,4:00,9:59,320,"$382,731.00","$333,435.00"
IAH - MSP,51335558581,IAH-LAS-ATL 6,ERJ-175,https://www.airlines-manager.com/network/showline/41475907,https://www.airlines-manager.com/network/showflight/51335558581,https://www.airlines-manager.com/aircraft/show/82323704,5:00,11:14,112,"$181,789.00","$154,124.00"
IAH - MSP,51347850983,IAH-LAS-ATL 3,737-900ER,https://www.airlines-manager.com/network/showline/41475907,https://www.airlines-manager.com/network/showflight/51347850983,https://www.airlines-manager.com/aircraft/show/96183549,10:00,15:59,320,"$382,731.00","$333,435.00"
IAH - MSP,51363387532,IAH-LAS-ATL 2,737-900ER,https://www.airlines-manager.com/network/showline/41475907,https://www.airlines-manager.com/network/showflight/51363387532,https://www.airlines-manager.com/aircraft/show/96250652,17:45,23:44,320,"$382,731.00","$333,435.00"
IAH - MSP,51370307108,IAH-LAS-ATL 1,737-900ER,https://www.airlines-manager.com/network/showline/41475907,https://www.airlines-manager.com/network/showflight/51370307108,https://www.airlines-manager.com/aircraft/show/96256511,21:30,3:29,320,"$382,731.00","$333,435.00"
IAH - MSP,51374354695,IAH-LAS-ATL 4,737-900ER,https://www.airlines-manager.com/network/showline/41475907,https://www.airlines-manager.com/network/showflight/51374354695,https://www.airlines-manager.com/aircraft/show/96177955,22:30,4:29,320,"$382,731.00","$333,435.00"
IAH - MSY,51335558577,IAH-BWI-PHL 4,A321neo,https://www.airlines-manager.com/network/showline/44236349,https://www.airlines-manager.com/network/showflight/51335558577,https://www.airlines-manager.com/aircraft/show/106007216,3:45,6:59,338,"$170,205.00","$145,558.00"
IAH - MSY,51335558578,IAH-BWI-PHL 5,A321neo,https://www.airlines-manager.com/network/showline/44236349,https://www.airlines-manager.com/network/showflight/51335558578,https://www.airlines-manager.com/aircraft/show/106007217,4:45,7:59,338,"$170,205.00","$145,558.00"
IAH - MSY,51347851171,IAH-BWI-PHL 3,A321neo,https://www.airlines-manager.com/network/showline/44236349,https://www.airlines-manager.com/network/showflight/51347851171,https://www.airlines-manager.com/aircraft/show/106007215,11:00,14:14,338,"$170,205.00","$145,558.00"
IAH - MSY,51363387526,IAH-BWI-PHL 2,A321neo,https://www.airlines-manager.com/network/showline/44236349,https://www.airlines-manager.com/network/showflight/51363387526,https://www.airlines-manager.com/aircraft/show/106007214,17:45,20:59,338,"$170,205.00","$145,558.00"
IAH - MSY,51370307031,IAH-BWI-PHL 1,A321neo,https://www.airlines-manager.com/network/showline/44236349,https://www.airlines-manager.com/network/showflight/51370307031,https://www.airlines-manager.com/aircraft/show/106007213,20:30,23:44,264,"$148,056.00","$123,922.00"
IAH - MTY,51335558554,IAH-YOW-SJD 1,737-900ER,https://www.airlines-manager.com/network/showline/48842088,https://www.airlines-manager.com/network/showflight/51335558554,https://www.airlines-manager.com/aircraft/show/114266974,3:30,7:14,320,"$202,445.00","$171,928.00"
IAH - MTY,51347850849,IAH-YOW-SJD 5,ERJ-175,https://www.airlines-manager.com/network/showline/48842088,https://www.airlines-manager.com/network/showflight/51347850849,https://www.airlines-manager.com/aircraft/show/105099862,9:15,12:59,112,"$92,515.00","$76,060.00"
IAH - MTY,51355083380,IAH-YOW-SJD 4,737-900ER,https://www.airlines-manager.com/network/showline/48842088,https://www.airlines-manager.com/network/showflight/51355083380,https://www.airlines-manager.com/aircraft/show/114266975,14:00,17:44,320,"$202,445.00","$171,928.00"
IAH - MTY,51363387516,IAH-YOW-SJD 3,737-900ER,https://www.airlines-manager.com/network/showline/48842088,https://www.airlines-manager.com/network/showflight/51363387516,https://www.airlines-manager.com/aircraft/show/113250059,17:30,21:14,320,"$202,445.00","$171,928.00"
IAH - MTY,51374354770,IAH-YOW-SJD 2,737-900ER,https://www.airlines-manager.com/network/showline/48842088,https://www.airlines-manager.com/network/showflight/51374354770,https://www.airlines-manager.com/aircraft/show/113114108,23:30,3:14,320,"$202,445.00","$171,928.00"
IAH - OAK,51335558310,IAH-IAD-SAN 5,737-900ER,https://www.airlines-manager.com/network/showline/44653700,https://www.airlines-manager.com/network/showflight/51335558310,https://www.airlines-manager.com/aircraft/show/98578920,1:15,9:44,320,"$527,893.00","$477,070.00"
IAH - OAK,51335558311,IAH-IAD-SAN 1,737-900ER,https://www.airlines-manager.com/network/showline/44653700,https://www.airlines-manager.com/network/showflight/51335558311,https://www.airlines-manager.com/aircraft/show/98578924,3:00,11:29,320,"$527,893.00","$477,070.00"
IAH - OAK,51335558312,IAH-IAD-SAN 4,737-900ER,https://www.airlines-manager.com/network/showline/44653700,https://www.airlines-manager.com/network/showflight/51335558312,https://www.airlines-manager.com/aircraft/show/98578921,8:00,16:29,320,"$527,893.00","$477,070.00"
IAH - OAK,51355083252,IAH-IAD-SAN 3,737-900ER,https://www.airlines-manager.com/network/showline/44653700,https://www.airlines-manager.com/network/showflight/51355083252,https://www.airlines-manager.com/aircraft/show/98578922,13:00,21:29,320,"$527,893.00","$477,070.00"
IAH - OAK,51363387602,IAH-IAD-SAN 6,ERJ-175,https://www.airlines-manager.com/network/showline/44653700,https://www.airlines-manager.com/network/showflight/51363387602,https://www.airlines-manager.com/aircraft/show/105400635,19:00,3:29,112,"$249,006.00","$218,859.00"
IAH - OAK,51370307143,IAH-IAD-SAN 2,737-900ER,https://www.airlines-manager.com/network/showline/44653700,https://www.airlines-manager.com/network/showflight/51370307143,https://www.airlines-manager.com/aircraft/show/98578923,22:15,6:44,320,"$527,893.00","$477,070.00"
IAH - OKC,51335558664,IAH-RIC-SDF 1,A321-200,https://www.airlines-manager.com/network/showline/46824165,https://www.airlines-manager.com/network/showflight/51335558664,https://www.airlines-manager.com/aircraft/show/107467134,5:30,9:14,310,"$196,102.00","$170,841.00"
IAH - OKC,51347850867,IAH-RIC-SDF 5,ERJ-175,https://www.airlines-manager.com/network/showline/46824165,https://www.airlines-manager.com/network/showflight/51347850867,https://www.airlines-manager.com/aircraft/show/107467211,10:00,13:44,112,"$90,553.00","$74,706.00"
IAH - OKC,51347850868,IAH-RIC-SDF 4,A321-200,https://www.airlines-manager.com/network/showline/46824165,https://www.airlines-manager.com/network/showflight/51347850868,https://www.airlines-manager.com/aircraft/show/107467131,12:00,15:44,310,"$196,102.00","$170,841.00"
IAH - OKC,51363387527,IAH-RIC-SDF 3,A321-200,https://www.airlines-manager.com/network/showline/46824165,https://www.airlines-manager.com/network/showflight/51363387527,https://www.airlines-manager.com/aircraft/show/107467132,17:45,21:29,310,"$196,102.00","$170,841.00"
IAH - OKC,51374354733,IAH-RIC-SDF 2,A321-200,https://www.airlines-manager.com/network/showline/46824165,https://www.airlines-manager.com/network/showflight/51374354733,https://www.airlines-manager.com/aircraft/show/107467133,23:00,2:44,310,"$196,102.00","$170,841.00"
IAH - OMA,51335558494,IAH-BOI-BNA 1,A321-200,https://www.airlines-manager.com/network/showline/45737497,https://www.airlines-manager.com/network/showflight/51335558494,https://www.airlines-manager.com/aircraft/show/104258211,2:45,7:59,310,"$328,245.00","$297,102.00"
IAH - OMA,51335558495,IAH-BOI-BNA 5,ERJ-175,https://www.airlines-manager.com/network/showline/45737497,https://www.airlines-manager.com/network/showflight/51335558495,https://www.airlines-manager.com/aircraft/show/103534664,3:45,8:59,112,"$155,796.00","$135,745.00"
IAH - OMA,51347850760,IAH-BOI-BNA 4,A321-200,https://www.airlines-manager.com/network/showline/45737497,https://www.airlines-manager.com/network/showflight/51347850760,https://www.airlines-manager.com/aircraft/show/104258214,8:45,13:59,310,"$328,245.00","$297,102.00"
IAH - OMA,51355083363,IAH-BOI-BNA 3,A321-200,https://www.airlines-manager.com/network/showline/45737497,https://www.airlines-manager.com/network/showflight/51355083363,https://www.airlines-manager.com/aircraft/show/104258213,14:00,19:14,310,"$328,245.00","$297,102.00"
IAH - OMA,51370306939,IAH-BOI-BNA 2,A321-200,https://www.airlines-manager.com/network/showline/45737497,https://www.airlines-manager.com/network/showflight/51370306939,https://www.airlines-manager.com/aircraft/show/104258212,19:45,0:59,310,"$328,245.00","$297,102.00"
IAH - ONT,51335558467,IAH-ANC-ONT 1,A321-200,https://www.airlines-manager.com/network/showline/47054836,https://www.airlines-manager.com/network/showflight/51335558467,https://www.airlines-manager.com/aircraft/show/108258010,2:45,9:59,310,"$462,895.00","$421,729.00"
IAH - ONT,51335558468,IAH-ANC-ONT 2,A321-200,https://www.airlines-manager.com/network/showline/47054836,https://www.airlines-manager.com/network/showflight/51335558468,https://www.airlines-manager.com/aircraft/show/108258011,4:45,11:59,310,"$462,895.00","$421,729.00"
IAH - ONT,51347851238,IAH-ANC-ONT 3,A321-200,https://www.airlines-manager.com/network/showline/47054836,https://www.airlines-manager.com/network/showflight/51347851238,https://www.airlines-manager.com/aircraft/show/108258012,12:00,19:14,310,"$462,895.00","$421,729.00"
IAH - ONT,51355083352,IAH-ANC-ONT 4,A321-200,https://www.airlines-manager.com/network/showline/47054836,https://www.airlines-manager.com/network/showflight/51355083352,https://www.airlines-manager.com/aircraft/show/108089220,14:00,21:14,310,"$462,895.00","$421,729.00"
IAH - ONT,51363387318,IAH-ANC-ONT 5 B,A319-100,https://www.airlines-manager.com/network/showline/47054836,https://www.airlines-manager.com/network/showflight/51363387318,https://www.airlines-manager.com/aircraft/show/108286957,16:00,23:14,198,"$349,421.00","$316,431.00"
IAH - ORD,51335558121,IAH-MIA-ORD 4,A321-200,https://www.airlines-manager.com/network/showline/41856090,https://www.airlines-manager.com/network/showflight/51335558121,https://www.airlines-manager.com/aircraft/show/90183181,0:15,5:59,310,"$362,600.00","$307,634.00"
IAH - ORD,51335558122,IAH-MIA-ORD 3,A321-200,https://www.airlines-manager.com/network/showline/41856090,https://www.airlines-manager.com/network/showflight/51335558122,https://www.airlines-manager.com/aircraft/show/90183182,6:30,12:14,310,"$362,600.00","$307,634.00"
IAH - ORD,51347851069,IAH CARGO 2,A320-200,https://www.airlines-manager.com/network/showline/41856090,https://www.airlines-manager.com/network/showflight/51347851069,https://www.airlines-manager.com/aircraft/show/101412921,10:00,15:44,0,"$114,005.00","$60,561.00"
IAH - ORD,51355083232,IAH-MIA-ORD 2,A321-200,https://www.airlines-manager.com/network/showline/41856090,https://www.airlines-manager.com/network/showflight/51355083232,https://www.airlines-manager.com/aircraft/show/90183183,13:00,18:44,310,"$362,600.00","$307,634.00"
IAH - ORD,51355083233,IAH-MIA-ORD 6 S,ERJ-175,https://www.airlines-manager.com/network/showline/41856090,https://www.airlines-manager.com/network/showflight/51355083233,https://www.airlines-manager.com/aircraft/show/90140936,15:00,20:44,136,"$172,323.00","$137,887.00"
IAH - ORD,51363387588,IAH-MIA-ORD 1,A321-200,https://www.airlines-manager.com/network/showline/41856090,https://www.airlines-manager.com/network/showflight/51363387588,https://www.airlines-manager.com/aircraft/show/90183184,18:45,0:29,310,"$362,600.00","$307,634.00"
IAH - ORD,51370307042,IAH-MIA-ORD 5,A321-200,https://www.airlines-manager.com/network/showline/41856090,https://www.airlines-manager.com/network/showflight/51370307042,https://www.airlines-manager.com/aircraft/show/90183180,20:45,2:29,310,"$362,600.00","$307,634.00"
IAH - ORF,51335558081,IAH-PVD-BUF 5 B,A319-100,https://www.airlines-manager.com/network/showline/46824197,https://www.airlines-manager.com/network/showflight/51335558081,https://www.airlines-manager.com/aircraft/show/110582843,0:00,6:44,198,"$319,174.00","$289,521.00"
IAH - ORF,51335558082,IAH-PVD-BUF 1,A321-200,https://www.airlines-manager.com/network/showline/46824197,https://www.airlines-manager.com/network/showflight/51335558082,https://www.airlines-manager.com/aircraft/show/107467130,4:15,10:59,310,"$422,781.00","$385,779.00"
IAH - ORF,51335558083,IAH-PVD-BUF 4,A321-200,https://www.airlines-manager.com/network/showline/46824197,https://www.airlines-manager.com/network/showflight/51335558083,https://www.airlines-manager.com/aircraft/show/107467127,8:15,14:59,310,"$422,781.00","$385,779.00"
IAH - ORF,51355083236,IAH-PVD-BUF 3,A321-200,https://www.airlines-manager.com/network/showline/46824197,https://www.airlines-manager.com/network/showflight/51355083236,https://www.airlines-manager.com/aircraft/show/107467128,13:00,19:44,310,"$422,781.00","$385,779.00"
IAH - ORF,51370306952,IAH-PVD-BUF 2,A321-200,https://www.airlines-manager.com/network/showline/46824197,https://www.airlines-manager.com/network/showflight/51370306952,https://www.airlines-manager.com/aircraft/show/107467129,20:00,2:44,310,"$422,781.00","$385,779.00"
IAH - PBI,51335558448,IAH-PBI-RSW 2,A321-200,https://www.airlines-manager.com/network/showline/45920408,https://www.airlines-manager.com/network/showflight/51335558448,https://www.airlines-manager.com/aircraft/show/104717246,2:30,8:14,310,"$368,724.00","$333,988.00"
IAH - PBI,51347851174,IAH-PBI-RSW 1,A321-200,https://www.airlines-manager.com/network/showline/45920408,https://www.airlines-manager.com/network/showflight/51347851174,https://www.airlines-manager.com/aircraft/show/104717247,11:00,16:44,310,"$368,724.00","$333,988.00"
IAH - PBI,51355083311,IAH-PBI-RSW 5,ERJ-175,https://www.airlines-manager.com/network/showline/45920408,https://www.airlines-manager.com/network/showflight/51355083311,https://www.airlines-manager.com/aircraft/show/104743902,13:15,18:59,112,"$174,469.00","$151,963.00"
IAH - PBI,51363387358,IAH-PBI-RSW 4,A321-200,https://www.airlines-manager.com/network/showline/45920408,https://www.airlines-manager.com/network/showflight/51363387358,https://www.airlines-manager.com/aircraft/show/104717244,16:15,21:59,310,"$368,724.00","$333,988.00"
IAH - PBI,51370307115,IAH-PBI-RSW 3,A321-200,https://www.airlines-manager.com/network/showline/45920408,https://www.airlines-manager.com/network/showflight/51370307115,https://www.airlines-manager.com/aircraft/show/104717245,21:45,3:29,310,"$368,724.00","$333,988.00"
IAH - PDX,51335558496,IAH-SEA-DEN 5,A321neo,https://www.airlines-manager.com/network/showline/41444686,https://www.airlines-manager.com/network/showflight/51335558496,https://www.airlines-manager.com/aircraft/show/105562975,2:45,11:44,338,"$618,758.00","$570,656.00"
IAH - PDX,51335558497,IAH-SEA-DEN 2,A321neo,https://www.airlines-manager.com/network/showline/41444686,https://www.airlines-manager.com/network/showflight/51335558497,https://www.airlines-manager.com/aircraft/show/105562972,4:00,12:59,338,"$618,758.00","$570,656.00"
IAH - PDX,51335558498,IAH-SEA-DEN 4,A321neo,https://www.airlines-manager.com/network/showline/41444686,https://www.airlines-manager.com/network/showflight/51335558498,https://www.airlines-manager.com/aircraft/show/105562974,5:00,13:59,338,"$618,758.00","$570,656.00"
IAH - PDX,51347851228,IAH-SEA-DEN 6,ERJ-175,https://www.airlines-manager.com/network/showline/41444686,https://www.airlines-manager.com/network/showflight/51347851228,https://www.airlines-manager.com/aircraft/show/105601215,12:00,21:14,112,"$269,513.00","$236,102.00"
IAH - PDX,51355083337,IAH-SEA-DEN 3,A321neo,https://www.airlines-manager.com/network/showline/41444686,https://www.airlines-manager.com/network/showflight/51355083337,https://www.airlines-manager.com/aircraft/show/105562973,14:00,22:59,338,"$618,758.00","$570,656.00"
IAH - PDX,51363387576,IAH-SEA-DEN 1,A321neo,https://www.airlines-manager.com/network/showline/41444686,https://www.airlines-manager.com/network/showflight/51363387576,https://www.airlines-manager.com/aircraft/show/105562971,18:30,3:29,338,"$618,758.00","$570,656.00"
IAH - PHL,51347851193,IAH-BWI-PHL 4,A321neo,https://www.airlines-manager.com/network/showline/44225058,https://www.airlines-manager.com/network/showflight/51347851193,https://www.airlines-manager.com/aircraft/show/106007216,11:00,18:14,338,"$500,569.00","$455,387.00"
IAH - PHL,51355083398,IAH-BWI-PHL 3,A321neo,https://www.airlines-manager.com/network/showline/44225058,https://www.airlines-manager.com/network/showflight/51355083398,https://www.airlines-manager.com/aircraft/show/106007215,14:15,21:29,338,"$500,569.00","$455,387.00"
IAH - PHL,51363387271,IAH CARGO 1,737-700,https://www.airlines-manager.com/network/showline/44225058,https://www.airlines-manager.com/network/showflight/51363387271,https://www.airlines-manager.com/aircraft/show/107543798,16:00,23:14,0,"$122,361.00","$88,930.00"
IAH - PHL,51370307058,IAH-BWI-PHL 2,A321neo,https://www.airlines-manager.com/network/showline/44225058,https://www.airlines-manager.com/network/showflight/51370307058,https://www.airlines-manager.com/aircraft/show/106007214,21:00,4:14,338,"$500,569.00","$455,387.00"
IAH - PHL,51370307059,IAH-BWI-PHL 5,A321neo,https://www.airlines-manager.com/network/showline/44225058,https://www.airlines-manager.com/network/showflight/51370307059,https://www.airlines-manager.com/aircraft/show/106007217,21:30,4:44,338,"$500,569.00","$455,387.00"
IAH - PHL,51374354790,IAH-BWI-PHL 1,A321neo,https://www.airlines-manager.com/network/showline/44225058,https://www.airlines-manager.com/network/showflight/51374354790,https://www.airlines-manager.com/aircraft/show/106007213,23:45,6:59,338,"$500,569.00","$455,387.00"
IAH - PHX,51335558589,IAH-LAS-ATL 3,737-900ER,https://www.airlines-manager.com/network/showline/41475904,https://www.airlines-manager.com/network/showflight/51335558589,https://www.airlines-manager.com/aircraft/show/96183549,4:00,9:59,320,"$378,569.00","$326,535.00"
IAH - PHX,51335558590,IAH-LAS-ATL 4,737-900ER,https://www.airlines-manager.com/network/showline/41475904,https://www.airlines-manager.com/network/showflight/51335558590,https://www.airlines-manager.com/aircraft/show/96177955,5:00,10:59,320,"$378,569.00","$326,535.00"
IAH - PHX,51347851218,IAH-LAS-ATL 6,ERJ-175,https://www.airlines-manager.com/network/showline/41475904,https://www.airlines-manager.com/network/showflight/51347851218,https://www.airlines-manager.com/aircraft/show/82323704,11:30,17:29,112,"$179,122.00","$150,171.00"
IAH - PHX,51347851219,IAH-LAS-ATL 2,737-900ER,https://www.airlines-manager.com/network/showline/41475904,https://www.airlines-manager.com/network/showflight/51347851219,https://www.airlines-manager.com/aircraft/show/96250652,11:45,17:44,320,"$378,569.00","$326,535.00"
IAH - PHX,51363387222,IAH-LAS-ATL 1,737-900ER,https://www.airlines-manager.com/network/showline/41475904,https://www.airlines-manager.com/network/showflight/51363387222,https://www.airlines-manager.com/aircraft/show/96256511,15:30,21:29,320,"$378,569.00","$326,535.00"
IAH - PHX,51370307107,IAH-LAS-ATL 5,737-900ER,https://www.airlines-manager.com/network/showline/41475904,https://www.airlines-manager.com/network/showflight/51370307107,https://www.airlines-manager.com/aircraft/show/95894466,21:30,3:29,320,"$378,569.00","$326,535.00"
IAH - PIT,51335558652,IAH-PIT-RDU 2,A321-200,https://www.airlines-manager.com/network/showline/45172092,https://www.airlines-manager.com/network/showflight/51335558652,https://www.airlines-manager.com/aircraft/show/100684073,5:00,11:29,310,"$404,568.00","$366,204.00"
IAH - PIT,51347851212,IAH-PIT-RDU 1,A321-200,https://www.airlines-manager.com/network/showline/45172092,https://www.airlines-manager.com/network/showflight/51347851212,https://www.airlines-manager.com/aircraft/show/100684074,11:15,17:44,310,"$404,568.00","$366,204.00"
IAH - PIT,51363387335,IAH-PIT-RDU 5 B,A319-100,https://www.airlines-manager.com/network/showline/45172092,https://www.airlines-manager.com/network/showflight/51363387335,https://www.airlines-manager.com/aircraft/show/110582845,16:00,22:29,198,"$305,688.00","$274,949.00"
IAH - PIT,51363387336,IAH-PIT-RDU 4,A321-200,https://www.airlines-manager.com/network/showline/45172092,https://www.airlines-manager.com/network/showflight/51363387336,https://www.airlines-manager.com/aircraft/show/100684071,17:15,23:44,310,"$404,568.00","$366,204.00"
IAH - PIT,51374354710,IAH-PIT-RDU 3,A321-200,https://www.airlines-manager.com/network/showline/45172092,https://www.airlines-manager.com/network/showflight/51374354710,https://www.airlines-manager.com/aircraft/show/100684072,22:45,5:14,310,"$404,568.00","$366,204.00"
IAH - PVD,51335558471,IAH-PVD-BUF 2,A321-200,https://www.airlines-manager.com/network/showline/46824173,https://www.airlines-manager.com/network/showflight/51335558471,https://www.airlines-manager.com/aircraft/show/107467129,2:45,10:59,310,"$515,484.00","$473,974.00"
IAH - PVD,51335558472,IAH-PVD-BUF 5 B,A319-100,https://www.airlines-manager.com/network/showline/46824173,https://www.airlines-manager.com/network/showflight/51335558472,https://www.airlines-manager.com/aircraft/show/110582843,6:45,14:59,198,"$388,564.00","$355,289.00"
IAH - PVD,51355083238,IAH-PVD-BUF 1,A321-200,https://www.airlines-manager.com/network/showline/46824173,https://www.airlines-manager.com/network/showflight/51355083238,https://www.airlines-manager.com/aircraft/show/107467130,13:00,21:14,310,"$515,484.00","$473,974.00"
IAH - PVD,51363387464,IAH-PVD-BUF 4,A321-200,https://www.airlines-manager.com/network/showline/46824173,https://www.airlines-manager.com/network/showflight/51363387464,https://www.airlines-manager.com/aircraft/show/107467127,17:00,1:14,310,"$515,484.00","$473,974.00"
IAH - PVD,51370306941,IAH-PVD-BUF 3,A321-200,https://www.airlines-manager.com/network/showline/46824173,https://www.airlines-manager.com/network/showflight/51370306941,https://www.airlines-manager.com/aircraft/show/107467128,19:45,3:59,310,"$515,484.00","$473,974.00"
IAH - PVR,51335558509,IAH-YOW-SJD 5,ERJ-175,https://www.airlines-manager.com/network/showline/48842082,https://www.airlines-manager.com/network/showflight/51335558509,https://www.airlines-manager.com/aircraft/show/105099862,3:00,8:29,112,"$166,500.00","$145,086.00"
IAH - PVR,51335558510,IAH-YOW-SJD 4,737-900ER,https://www.airlines-manager.com/network/showline/48842082,https://www.airlines-manager.com/network/showflight/51335558510,https://www.airlines-manager.com/aircraft/show/114266975,8:30,13:59,320,"$355,651.00","$318,017.00"
IAH - PVR,51347851250,IAH-YOW-SJD 3,737-900ER,https://www.airlines-manager.com/network/showline/48842082,https://www.airlines-manager.com/network/showflight/51347851250,https://www.airlines-manager.com/aircraft/show/113250059,12:00,17:29,320,"$355,651.00","$318,017.00"
IAH - PVR,51363387545,IAH-YOW-SJD 2,737-900ER,https://www.airlines-manager.com/network/showline/48842082,https://www.airlines-manager.com/network/showflight/51363387545,https://www.airlines-manager.com/aircraft/show/113114108,18:00,23:29,320,"$355,651.00","$318,017.00"
IAH - PVR,51370307130,IAH-YOW-SJD 1,737-900ER,https://www.airlines-manager.com/network/showline/48842082,https://www.airlines-manager.com/network/showflight/51370307130,https://www.airlines-manager.com/aircraft/show/114266974,22:00,3:29,320,"$355,651.00","$318,017.00"
IAH - PWM,51335558715,IAH-SJC-PWM 5 B,A319-100,https://www.airlines-manager.com/network/showline/46335442,https://www.airlines-manager.com/network/showflight/51335558715,https://www.airlines-manager.com/aircraft/show/106014350,7:45,16:14,198,"$405,997.00","$371,813.00"
IAH - PWM,51347851191,IAH-SJC-PWM 2,A321-200,https://www.airlines-manager.com/network/showline/46335442,https://www.airlines-manager.com/network/showflight/51347851191,https://www.airlines-manager.com/aircraft/show/96691558,11:00,19:29,310,"$539,111.00","$496,470.00"
IAH - PWM,51355083424,IAH-SJC-PWM 4,A321-200,https://www.airlines-manager.com/network/showline/46335442,https://www.airlines-manager.com/network/showflight/51355083424,https://www.airlines-manager.com/aircraft/show/96694086,15:00,23:29,310,"$539,111.00","$496,470.00"
IAH - PWM,51363387622,IAH-SJC-PWM 1,A321-200,https://www.airlines-manager.com/network/showline/46335442,https://www.airlines-manager.com/network/showflight/51363387622,https://www.airlines-manager.com/aircraft/show/96692491,19:15,3:44,310,"$539,111.00","$496,470.00"
IAH - PWM,51374354705,IAH-SJC-PWM 3,A321-200,https://www.airlines-manager.com/network/showline/46335442,https://www.airlines-manager.com/network/showflight/51374354705,https://www.airlines-manager.com/aircraft/show/96692343,22:45,7:14,310,"$539,111.00","$496,470.00"
IAH - RDU,51335558660,IAH-PIT-RDU 3,A321-200,https://www.airlines-manager.com/network/showline/45172096,https://www.airlines-manager.com/network/showflight/51335558660,https://www.airlines-manager.com/aircraft/show/100684072,5:15,11:29,310,"$388,147.00","$351,343.00"
IAH - RDU,51347851224,IAH-PIT-RDU 2,A321-200,https://www.airlines-manager.com/network/showline/45172096,https://www.airlines-manager.com/network/showflight/51347851224,https://www.airlines-manager.com/aircraft/show/100684073,11:30,17:44,310,"$388,147.00","$351,343.00"
IAH - RDU,51363387523,IAH-PIT-RDU 1,A321-200,https://www.airlines-manager.com/network/showline/45172096,https://www.airlines-manager.com/network/showflight/51363387523,https://www.airlines-manager.com/aircraft/show/100684074,17:45,23:59,310,"$388,147.00","$351,343.00"
IAH - RDU,51374354679,IAH-PIT-RDU 5 B,A319-100,https://www.airlines-manager.com/network/showline/45172096,https://www.airlines-manager.com/network/showflight/51374354679,https://www.airlines-manager.com/aircraft/show/110582845,22:30,4:44,198,"$293,404.00","$263,915.00"
IAH - RDU,51374354680,IAH-PIT-RDU 4,A321-200,https://www.airlines-manager.com/network/showline/45172096,https://www.airlines-manager.com/network/showflight/51374354680,https://www.airlines-manager.com/aircraft/show/100684071,23:45,5:59,310,"$388,147.00","$351,343.00"
IAH - RIC,51335558486,IAH-RIC-SDF 2,A321-200,https://www.airlines-manager.com/network/showline/46824134,https://www.airlines-manager.com/network/showflight/51335558486,https://www.airlines-manager.com/aircraft/show/107467133,2:45,9:14,310,"$415,802.00","$379,488.00"
IAH - RIC,51347851233,IAH-RIC-SDF 1,A321-200,https://www.airlines-manager.com/network/showline/46824134,https://www.airlines-manager.com/network/showflight/51347851233,https://www.airlines-manager.com/aircraft/show/107467134,12:00,18:29,310,"$415,802.00","$379,488.00"
IAH - RIC,51355083325,IAH-RIC-SDF 5,ERJ-175,https://www.airlines-manager.com/network/showline/46824134,https://www.airlines-manager.com/network/showflight/51355083325,https://www.airlines-manager.com/aircraft/show/107467211,13:45,20:14,112,"$195,658.00","$171,852.00"
IAH - RIC,51363387249,IAH-RIC-SDF 4,A321-200,https://www.airlines-manager.com/network/showline/46824134,https://www.airlines-manager.com/network/showflight/51363387249,https://www.airlines-manager.com/aircraft/show/107467131,15:45,22:14,310,"$415,802.00","$379,488.00"
IAH - RIC,51370307104,IAH-RIC-SDF 3,A321-200,https://www.airlines-manager.com/network/showline/46824134,https://www.airlines-manager.com/network/showflight/51370307104,https://www.airlines-manager.com/aircraft/show/107467132,21:30,3:59,310,"$415,802.00","$379,488.00"
IAH - RNO,51335558291,IAH-RNO-MCI 3,A321-200,https://www.airlines-manager.com/network/showline/45594514,https://www.airlines-manager.com/network/showflight/51335558291,https://www.airlines-manager.com/aircraft/show/103882357,1:15,9:14,310,"$511,357.00","$468,249.00"
IAH - RNO,51335558292,IAH-RNO-MCI 5,ERJ-175,https://www.airlines-manager.com/network/showline/45594514,https://www.airlines-manager.com/network/showflight/51335558292,https://www.airlines-manager.com/aircraft/show/105099861,4:00,11:59,112,"$240,650.00","$212,118.00"
IAH - RNO,51335558293,IAH-RNO-MCI 2,A321-200,https://www.airlines-manager.com/network/showline/45594514,https://www.airlines-manager.com/network/showflight/51335558293,https://www.airlines-manager.com/aircraft/show/103882356,5:00,12:59,310,"$511,357.00","$468,249.00"
IAH - RNO,51355083299,IAH-RNO-MCI 1,A321-200,https://www.airlines-manager.com/network/showline/45594514,https://www.airlines-manager.com/network/showflight/51355083299,https://www.airlines-manager.com/aircraft/show/103882355,13:00,20:59,310,"$511,357.00","$468,249.00"
IAH - RNO,51363387470,IAH-RNO-MCI 4,A321-200,https://www.airlines-manager.com/network/showline/45594514,https://www.airlines-manager.com/network/showflight/51363387470,https://www.airlines-manager.com/aircraft/show/103882358,17:00,0:59,310,"$511,357.00","$468,249.00"
IAH - RSW,51335558473,IAH-PBI-RSW 4,A321-200,https://www.airlines-manager.com/network/showline/45920413,https://www.airlines-manager.com/network/showflight/51335558473,https://www.airlines-manager.com/aircraft/show/104717244,2:45,8:14,310,"$348,866.00","$314,308.00"
IAH - RSW,51347851199,IAH-PBI-RSW 3,A321-200,https://www.airlines-manager.com/network/showline/45920413,https://www.airlines-manager.com/network/showflight/51347851199,https://www.airlines-manager.com/aircraft/show/104717245,11:00,16:29,310,"$348,866.00","$314,308.00"
IAH - RSW,51363387237,IAH-PBI-RSW 2,A321-200,https://www.airlines-manager.com/network/showline/45920413,https://www.airlines-manager.com/network/showflight/51363387237,https://www.airlines-manager.com/aircraft/show/104717246,15:45,21:14,310,"$348,866.00","$314,308.00"
IAH - RSW,51370307101,IAH-PBI-RSW 1,A321-200,https://www.airlines-manager.com/network/showline/45920413,https://www.airlines-manager.com/network/showflight/51370307101,https://www.airlines-manager.com/aircraft/show/104717247,21:30,2:59,310,"$348,866.00","$314,308.00"
IAH - RSW,51374354777,IAH-PBI-RSW 5,ERJ-175,https://www.airlines-manager.com/network/showline/45920413,https://www.airlines-manager.com/network/showflight/51374354777,https://www.airlines-manager.com/aircraft/show/104743902,23:45,5:14,112,"$165,168.00","$142,932.00"
IAH - SAN,51335558221,IAH-IAD-SAN 4,737-900ER,https://www.airlines-manager.com/network/showline/44653695,https://www.airlines-manager.com/network/showflight/51335558221,https://www.airlines-manager.com/aircraft/show/98578921,0:45,7:59,320,"$451,855.00","$404,514.00"
IAH - SAN,51335558222,IAH-IAD-SAN 3,737-900ER,https://www.airlines-manager.com/network/showline/44653695,https://www.airlines-manager.com/network/showflight/51335558222,https://www.airlines-manager.com/aircraft/show/98578922,4:15,11:29,320,"$451,855.00","$404,514.00"
IAH - SAN,51347851083,IAH-IAD-SAN 6,ERJ-175,https://www.airlines-manager.com/network/showline/44653695,https://www.airlines-manager.com/network/showflight/51347851083,https://www.airlines-manager.com/aircraft/show/105400635,10:15,17:29,112,"$214,043.00","$186,584.00"
IAH - SAN,51355083429,IAH-IAD-SAN 2,737-900ER,https://www.airlines-manager.com/network/showline/44653695,https://www.airlines-manager.com/network/showflight/51355083429,https://www.airlines-manager.com/aircraft/show/98578923,15:00,22:14,320,"$451,855.00","$404,514.00"
IAH - SAN,51363387558,IAH-IAD-SAN 5,737-900ER,https://www.airlines-manager.com/network/showline/44653695,https://www.airlines-manager.com/network/showflight/51363387558,https://www.airlines-manager.com/aircraft/show/98578920,18:00,1:14,320,"$451,855.00","$404,514.00"
IAH - SAN,51370306946,IAH-IAD-SAN 1,737-900ER,https://www.airlines-manager.com/network/showline/44653695,https://www.airlines-manager.com/network/showflight/51370306946,https://www.airlines-manager.com/aircraft/show/98578924,19:45,2:59,320,"$451,855.00","$404,514.00"
IAH - SAT,51335558351,IAH-SMF-CVG 5 B,A319-100,https://www.airlines-manager.com/network/showline/44833765,https://www.airlines-manager.com/network/showflight/51335558351,https://www.airlines-manager.com/aircraft/show/106499070,1:30,4:14,198,"$89,981.00","$72,102.00"
IAH - SAT,51335558352,IAH CARGO 2,A320-200,https://www.airlines-manager.com/network/showline/44833765,https://www.airlines-manager.com/network/showflight/51335558352,https://www.airlines-manager.com/aircraft/show/101412921,6:00,8:44,0,"$42,956.00","$20,929.00"
IAH - SAT,51347850863,IAH-SMF-CVG 4,737-900ER,https://www.airlines-manager.com/network/showline/44833765,https://www.airlines-manager.com/network/showflight/51347850863,https://www.airlines-manager.com/aircraft/show/99093332,9:45,12:29,320,"$119,074.00","$92,710.00"
IAH - SAT,51355083364,IAH-SMF-CVG 3,737-900ER,https://www.airlines-manager.com/network/showline/44833765,https://www.airlines-manager.com/network/showflight/51355083364,https://www.airlines-manager.com/aircraft/show/99093333,14:00,16:44,320,"$119,074.00","$92,710.00"
IAH - SAT,51363387537,IAH-SMF-CVG 2,737-900ER,https://www.airlines-manager.com/network/showline/44833765,https://www.airlines-manager.com/network/showflight/51363387537,https://www.airlines-manager.com/aircraft/show/99093334,18:00,20:44,320,"$119,074.00","$92,710.00"
IAH - SAT,51374354774,IAH-SMF-CVG 1,737-900ER,https://www.airlines-manager.com/network/showline/44833765,https://www.airlines-manager.com/network/showflight/51374354774,https://www.airlines-manager.com/aircraft/show/99093335,23:30,2:14,320,"$119,074.00","$92,710.00"
IAH - SAV,51335558407,IAH-FAT-SAV 4,737-900ER,https://www.airlines-manager.com/network/showline/47654558,https://www.airlines-manager.com/network/showflight/51335558407,https://www.airlines-manager.com/aircraft/show/110424758,2:00,7:29,320,"$342,072.00","$306,266.00"
IAH - SAV,51335558408,IAH-FAT-SAV 3,737-900ER,https://www.airlines-manager.com/network/showline/47654558,https://www.airlines-manager.com/network/showflight/51335558408,https://www.airlines-manager.com/aircraft/show/110424759,8:30,13:59,320,"$342,072.00","$306,266.00"
IAH - SAV,51355083221,IAH-FAT-SAV 2,737-900ER,https://www.airlines-manager.com/network/showline/47654558,https://www.airlines-manager.com/network/showflight/51355083221,https://www.airlines-manager.com/aircraft/show/110424760,13:00,18:29,320,"$342,072.00","$306,266.00"
IAH - SAV,51370307117,IAH-FAT-SAV 1,737-900ER,https://www.airlines-manager.com/network/showline/47654558,https://www.airlines-manager.com/network/showflight/51370307117,https://www.airlines-manager.com/aircraft/show/110424761,21:45,3:14,320,"$342,072.00","$306,266.00"
IAH - SCL,51335558333,IAH 56A-2 B,787-10,https://www.airlines-manager.com/network/showline/41776795,https://www.airlines-manager.com/network/showflight/51335558333,https://www.airlines-manager.com/aircraft/show/106676233,1:30,19:59,648,"$2,283,510.00","$2,127,394.00"
IAH - SCL,51335558334,IAH 56A-4 B,787-10,https://www.airlines-manager.com/network/showline/41776795,https://www.airlines-manager.com/network/showflight/51335558334,https://www.airlines-manager.com/aircraft/show/106676235,6:30,0:59,648,"$2,283,510.00","$2,127,394.00"
IAH - SCL,51363387519,IAH 56A-6 B,787-10,https://www.airlines-manager.com/network/showline/41776795,https://www.airlines-manager.com/network/showflight/51363387519,https://www.airlines-manager.com/aircraft/show/106676237,17:30,11:59,648,"$2,283,510.00","$2,127,394.00"
IAH - SDF,51335558579,IAH-RIC-SDF 3,A321-200,https://www.airlines-manager.com/network/showline/46824149,https://www.airlines-manager.com/network/showflight/51335558579,https://www.airlines-manager.com/aircraft/show/107467132,4:00,9:14,310,"$328,479.00","$295,926.00"
IAH - SDF,51347851253,IAH-RIC-SDF 2,A321-200,https://www.airlines-manager.com/network/showline/46824149,https://www.airlines-manager.com/network/showflight/51347851253,https://www.airlines-manager.com/aircraft/show/107467133,12:00,17:14,310,"$328,479.00","$295,926.00"
IAH - SDF,51363387583,IAH-RIC-SDF 1,A321-200,https://www.airlines-manager.com/network/showline/46824149,https://www.airlines-manager.com/network/showflight/51363387583,https://www.airlines-manager.com/aircraft/show/107467134,18:30,23:44,310,"$328,479.00","$295,926.00"
IAH - SDF,51370306990,IAH-RIC-SDF 5,ERJ-175,https://www.airlines-manager.com/network/showline/46824149,https://www.airlines-manager.com/network/showflight/51370306990,https://www.airlines-manager.com/aircraft/show/107467211,20:15,1:29,112,"$156,003.00","$135,096.00"
IAH - SDF,51370306991,IAH-RIC-SDF 4,A321-200,https://www.airlines-manager.com/network/showline/46824149,https://www.airlines-manager.com/network/showflight/51370306991,https://www.airlines-manager.com/aircraft/show/107467131,22:15,3:29,310,"$328,479.00","$295,926.00"
IAH - SEA,51335558561,IAH-SEA-DEN 1,A321neo,https://www.airlines-manager.com/network/showline/41444678,https://www.airlines-manager.com/network/showflight/51335558561,https://www.airlines-manager.com/aircraft/show/105562971,3:30,12:44,338,"$642,884.00","$587,526.00"
IAH - SEA,51335558562,IAH-SEA-DEN 3,A321neo,https://www.airlines-manager.com/network/showline/41444678,https://www.airlines-manager.com/network/showflight/51335558562,https://www.airlines-manager.com/aircraft/show/105562973,4:30,13:44,338,"$642,884.00","$587,526.00"
IAH - SEA,51355083266,IAH-SEA-DEN 2,A321neo,https://www.airlines-manager.com/network/showline/41444678,https://www.airlines-manager.com/network/showflight/51355083266,https://www.airlines-manager.com/aircraft/show/105562972,13:00,22:14,338,"$642,884.00","$587,526.00"
IAH - SEA,51355083267,IAH-SEA-DEN 4,A321neo,https://www.airlines-manager.com/network/showline/41444678,https://www.airlines-manager.com/network/showflight/51355083267,https://www.airlines-manager.com/aircraft/show/105562974,14:00,23:14,338,"$642,884.00","$587,526.00"
IAH - SEA,51363387517,IAH-SEA-DEN 5,A321neo,https://www.airlines-manager.com/network/showline/41444678,https://www.airlines-manager.com/network/showflight/51363387517,https://www.airlines-manager.com/aircraft/show/105562975,17:30,2:44,338,"$642,884.00","$587,526.00"
IAH - SEA,51370307075,IAH-SEA-DEN 6,ERJ-175,https://www.airlines-manager.com/network/showline/41444678,https://www.airlines-manager.com/network/showflight/51370307075,https://www.airlines-manager.com/aircraft/show/105601215,21:15,6:44,112,"$279,011.00","$241,123.00"
IAH - SJC,51335558513,IAH-SJC-PWM 4,A321-200,https://www.airlines-manager.com/network/showline/46335448,https://www.airlines-manager.com/network/showflight/51335558513,https://www.airlines-manager.com/aircraft/show/96694086,3:00,11:14,310,"$530,569.00","$484,940.00"
IAH - SJC,51347851192,IAH-SJC-PWM 1,A321-200,https://www.airlines-manager.com/network/showline/46335448,https://www.airlines-manager.com/network/showflight/51347851192,https://www.airlines-manager.com/aircraft/show/96692491,11:00,19:14,310,"$530,569.00","$484,940.00"
IAH - SJC,51355083407,IAH-SJC-PWM 3,A321-200,https://www.airlines-manager.com/network/showline/46335448,https://www.airlines-manager.com/network/showflight/51355083407,https://www.airlines-manager.com/aircraft/show/96692343,14:30,22:44,310,"$530,569.00","$484,940.00"
IAH - SJC,51374354736,IAH-SJC-PWM 2,A321-200,https://www.airlines-manager.com/network/showline/46335448,https://www.airlines-manager.com/network/showflight/51374354736,https://www.airlines-manager.com/aircraft/show/96691558,23:00,7:14,310,"$530,569.00","$484,940.00"
IAH - SJC,51374354737,IAH-SJC-PWM 5 B,A319-100,https://www.airlines-manager.com/network/showline/46335448,https://www.airlines-manager.com/network/showflight/51374354737,https://www.airlines-manager.com/aircraft/show/106014350,23:30,7:44,198,"$399,293.00","$362,721.00"
IAH - SJD,51335558378,IAH-YOW-SJD 4,737-900ER,https://www.airlines-manager.com/network/showline/48842079,https://www.airlines-manager.com/network/showflight/51335558378,https://www.airlines-manager.com/aircraft/show/114266975,1:45,7:44,320,"$380,891.00","$342,053.00"
IAH - SJD,51335558379,IAH-YOW-SJD 3,737-900ER,https://www.airlines-manager.com/network/showline/48842079,https://www.airlines-manager.com/network/showflight/51335558379,https://www.airlines-manager.com/aircraft/show/113250059,5:15,11:14,320,"$380,891.00","$342,053.00"
IAH - SJD,51347851249,IAH-YOW-SJD 2,737-900ER,https://www.airlines-manager.com/network/showline/48842079,https://www.airlines-manager.com/network/showflight/51347851249,https://www.airlines-manager.com/aircraft/show/113114108,12:00,17:59,320,"$380,891.00","$342,053.00"
IAH - SJD,51363387290,IAH-YOW-SJD 1,737-900ER,https://www.airlines-manager.com/network/showline/48842079,https://www.airlines-manager.com/network/showflight/51363387290,https://www.airlines-manager.com/aircraft/show/114266974,16:00,21:59,320,"$380,891.00","$342,053.00"
IAH - SJD,51370307062,IAH-YOW-SJD 5,ERJ-175,https://www.airlines-manager.com/network/showline/48842079,https://www.airlines-manager.com/network/showflight/51370307062,https://www.airlines-manager.com/aircraft/show/105099862,21:00,2:59,108,"$173,444.00","$151,315.00"
IAH - SLC,51335558477,IAH-SLC-CLT 2,A321-200,https://www.airlines-manager.com/network/showline/42839462,https://www.airlines-manager.com/network/showflight/51335558477,https://www.airlines-manager.com/aircraft/show/93094698,2:45,9:29,310,"$423,730.00","$380,243.00"
IAH - SLC,51335558478,IAH-SLC-CLT 6,ERJ-175,https://www.airlines-manager.com/network/showline/42839462,https://www.airlines-manager.com/network/showflight/51335558478,https://www.airlines-manager.com/aircraft/show/93100455,4:45,11:29,112,"$199,385.00","$171,208.00"
IAH - SLC,51347850934,IAH-SLC-CLT 1,A321-200,https://www.airlines-manager.com/network/showline/42839462,https://www.airlines-manager.com/network/showflight/51347850934,https://www.airlines-manager.com/aircraft/show/93094699,10:00,16:44,310,"$423,730.00","$380,243.00"
IAH - SLC,51347850935,IAH-SLC-CLT 5,A321-200,https://www.airlines-manager.com/network/showline/42839462,https://www.airlines-manager.com/network/showflight/51347850935,https://www.airlines-manager.com/aircraft/show/93094695,12:00,18:44,310,"$423,730.00","$380,243.00"
IAH - SLC,51363387218,IAH-SLC-CLT 4,A321-200,https://www.airlines-manager.com/network/showline/42839462,https://www.airlines-manager.com/network/showflight/51363387218,https://www.airlines-manager.com/aircraft/show/93094696,15:15,21:59,310,"$423,730.00","$380,243.00"
IAH - SLC,51370307073,IAH-SLC-CLT 3,A321-200,https://www.airlines-manager.com/network/showline/42839462,https://www.airlines-manager.com/network/showflight/51370307073,https://www.airlines-manager.com/aircraft/show/93094697,21:00,3:44,310,"$423,730.00","$380,243.00"
IAH - SMF,51335558439,IAH-SMF-CVG 1,737-900ER,https://www.airlines-manager.com/network/showline/44844654,https://www.airlines-manager.com/network/showflight/51335558439,https://www.airlines-manager.com/aircraft/show/99093335,2:15,10:29,320,"$529,052.00","$479,823.00"
IAH - SMF,51335558440,IAH-SMF-CVG 5 B,A319-100,https://www.airlines-manager.com/network/showline/44844654,https://www.airlines-manager.com/network/showflight/51335558440,https://www.airlines-manager.com/aircraft/show/106499070,4:15,12:29,198,"$398,648.00","$363,259.00"
IAH - SMF,51355083290,IAH-SMF-CVG 4,737-900ER,https://www.airlines-manager.com/network/showline/44844654,https://www.airlines-manager.com/network/showflight/51355083290,https://www.airlines-manager.com/aircraft/show/99093332,13:00,21:14,320,"$529,052.00","$479,823.00"
IAH - SMF,51363387444,IAH-SMF-CVG 3,737-900ER,https://www.airlines-manager.com/network/showline/44844654,https://www.airlines-manager.com/network/showflight/51363387444,https://www.airlines-manager.com/aircraft/show/99093333,16:45,0:59,320,"$529,052.00","$479,823.00"
IAH - SMF,51370307046,IAH-SMF-CVG 2,737-900ER,https://www.airlines-manager.com/network/showline/44844654,https://www.airlines-manager.com/network/showflight/51370307046,https://www.airlines-manager.com/aircraft/show/99093334,20:45,4:59,320,"$529,052.00","$479,823.00"
IAH - STL,51335558289,IAH-CLE-STL 4,A321-200,https://www.airlines-manager.com/network/showline/45490332,https://www.airlines-manager.com/network/showflight/51335558289,https://www.airlines-manager.com/aircraft/show/88725601,1:15,5:59,310,"$299,346.00","$267,075.00"
IAH - STL,51335558290,IAH-CLE-STL 3,A321-200,https://www.airlines-manager.com/network/showline/45490332,https://www.airlines-manager.com/network/showflight/51335558290,https://www.airlines-manager.com/aircraft/show/103600702,8:15,12:59,310,"$299,346.00","$267,075.00"
IAH - STL,51355083391,IAH-CLE-STL 2,A321-200,https://www.airlines-manager.com/network/showline/45490332,https://www.airlines-manager.com/network/showflight/51355083391,https://www.airlines-manager.com/aircraft/show/103600701,14:00,18:44,310,"$299,346.00","$267,075.00"
IAH - STL,51355083392,IAH-DFW-STL,ERJ-175,https://www.airlines-manager.com/network/showline/45490332,https://www.airlines-manager.com/network/showflight/51355083392,https://www.airlines-manager.com/aircraft/show/96990010,15:00,19:44,112,"$142,348.00","$121,818.00"
IAH - STL,51370306996,IAH-CLE-STL 1,A321-200,https://www.airlines-manager.com/network/showline/45490332,https://www.airlines-manager.com/network/showflight/51370306996,https://www.airlines-manager.com/aircraft/show/103600700,20:15,0:59,310,"$299,346.00","$267,075.00"
IAH - STL,51370306997,IAH-CLE-STL 5 B,A319-100,https://www.airlines-manager.com/network/showline/45490332,https://www.airlines-manager.com/network/showflight/51370306997,https://www.airlines-manager.com/aircraft/show/110582844,21:45,2:29,198,"$227,489.00","$201,643.00"
IAH - TPA,51335558605,IAH-SLC-CLT 1,A321-200,https://www.airlines-manager.com/network/showline/42874411,https://www.airlines-manager.com/network/showflight/51335558605,https://www.airlines-manager.com/aircraft/show/93094699,4:15,9:29,310,"$326,085.00","$290,863.00"
IAH - TPA,51335558606,IAH-SLC-CLT 5,A321-200,https://www.airlines-manager.com/network/showline/42874411,https://www.airlines-manager.com/network/showflight/51335558606,https://www.airlines-manager.com/aircraft/show/93094695,6:15,11:29,310,"$326,085.00","$290,863.00"
IAH - TPA,51347851078,IAH-SLC-CLT 4,A321-200,https://www.airlines-manager.com/network/showline/42874411,https://www.airlines-manager.com/network/showflight/51347851078,https://www.airlines-manager.com/aircraft/show/93094696,10:00,15:14,310,"$326,085.00","$290,863.00"
IAH - TPA,51363387252,IAH-SLC-CLT 3,A321-200,https://www.airlines-manager.com/network/showline/42874411,https://www.airlines-manager.com/network/showflight/51363387252,https://www.airlines-manager.com/aircraft/show/93094697,15:45,20:59,310,"$326,085.00","$290,863.00"
IAH - TPA,51370307094,IAH-SLC-CLT 2,A321-200,https://www.airlines-manager.com/network/showline/42874411,https://www.airlines-manager.com/network/showflight/51370307094,https://www.airlines-manager.com/aircraft/show/93094698,21:30,2:44,310,"$326,085.00","$290,863.00"
IAH - TPA,51374354764,IAH-SLC-CLT 6,ERJ-175,https://www.airlines-manager.com/network/showline/42874411,https://www.airlines-manager.com/network/showflight/51374354764,https://www.airlines-manager.com/aircraft/show/93100455,23:30,4:44,108,"$152,582.00","$130,212.00"
IAH - TUL,51335558167,IAH-BTV-CAK 5,ERJ-175,https://www.airlines-manager.com/network/showline/48841734,https://www.airlines-manager.com/network/showflight/51335558167,https://www.airlines-manager.com/aircraft/show/82543907,0:30,4:14,112,"$93,634.00","$77,420.00"
IAH - TUL,51335558168,IAH-BTV-CAK 2,A321-200,https://www.airlines-manager.com/network/showline/48841734,https://www.airlines-manager.com/network/showflight/51335558168,https://www.airlines-manager.com/aircraft/show/114373409,3:30,7:14,310,"$202,736.00","$176,965.00"
IAH - TUL,51347850864,IAH-BTV-CAK 1,A321-200,https://www.airlines-manager.com/network/showline/48841734,https://www.airlines-manager.com/network/showflight/51347850864,https://www.airlines-manager.com/aircraft/show/114373410,9:45,13:29,310,"$202,736.00","$176,965.00"
IAH - TUL,51355083442,IAH-BTV-CAK 4,A321-200,https://www.airlines-manager.com/network/showline/48841734,https://www.airlines-manager.com/network/showflight/51355083442,https://www.airlines-manager.com/aircraft/show/113994196,15:00,18:44,310,"$202,736.00","$176,965.00"
IAH - TUL,51370306993,IAH-BTV-CAK 3,A321-200,https://www.airlines-manager.com/network/showline/48841734,https://www.airlines-manager.com/network/showflight/51370306993,https://www.airlines-manager.com/aircraft/show/86385103,20:15,23:59,310,"$202,736.00","$176,965.00"
IAH - TUS,51335558663,IAH-PIT-RDU 1,A321-200,https://www.airlines-manager.com/network/showline/45170727,https://www.airlines-manager.com/network/showflight/51335558663,https://www.airlines-manager.com/aircraft/show/100684074,5:30,11:14,310,"$358,303.00","$324,224.00"
IAH - TUS,51347851100,IAH-PIT-RDU 5 B,A319-100,https://www.airlines-manager.com/network/showline/45170727,https://www.airlines-manager.com/network/showflight/51347851100,https://www.airlines-manager.com/aircraft/show/110582845,10:15,15:59,198,"$271,744.00","$244,441.00"
IAH - TUS,51347851103,IAH-PIT-RDU 4,A321-200,https://www.airlines-manager.com/network/showline/45170727,https://www.airlines-manager.com/network/showflight/51347851103,https://www.airlines-manager.com/aircraft/show/100684071,11:30,17:14,310,"$358,303.00","$324,224.00"
IAH - TUS,51363387494,IAH-PIT-RDU 3,A321-200,https://www.airlines-manager.com/network/showline/45170727,https://www.airlines-manager.com/network/showflight/51363387494,https://www.airlines-manager.com/aircraft/show/100684072,17:00,22:44,310,"$358,303.00","$324,224.00"
IAH - TUS,51374354749,IAH-PIT-RDU 2,A321-200,https://www.airlines-manager.com/network/showline/45170727,https://www.airlines-manager.com/network/showflight/51374354749,https://www.airlines-manager.com/aircraft/show/100684073,23:15,4:59,310,"$358,303.00","$324,224.00"
IAH - UIO,51335558195,IAH 84A-4 E1,777-300,https://www.airlines-manager.com/network/showline/41572544,https://www.airlines-manager.com/network/showflight/51335558195,https://www.airlines-manager.com/aircraft/show/89124075,0:30,11:14,932,"$1,792,178.00","$1,636,784.00"
IAH - UIO,51355083314,IAH 84A-7 E1,777-300,https://www.airlines-manager.com/network/showline/41572544,https://www.airlines-manager.com/network/showflight/51355083314,https://www.airlines-manager.com/aircraft/show/88905140,13:15,23:59,932,"$1,792,178.00","$1,636,784.00"
IAH - YOW,51335558540,IAH-YOW-SJD 2,737-900ER,https://www.airlines-manager.com/network/showline/48842072,https://www.airlines-manager.com/network/showflight/51335558540,https://www.airlines-manager.com/aircraft/show/113114108,3:15,11:14,320,"$508,952.00","$461,295.00"
IAH - YOW,51335558541,IAH-YOW-SJD 1,737-900ER,https://www.airlines-manager.com/network/showline/48842072,https://www.airlines-manager.com/network/showflight/51335558541,https://www.airlines-manager.com/aircraft/show/114266974,8:00,15:59,320,"$508,952.00","$461,295.00"
IAH - YOW,51355083210,IAH-YOW-SJD 5,ERJ-175,https://www.airlines-manager.com/network/showline/48842072,https://www.airlines-manager.com/network/showflight/51355083210,https://www.airlines-manager.com/aircraft/show/105099862,13:00,20:59,112,"$238,576.00","$210,371.00"
IAH - YOW,51363387530,IAH-YOW-SJD 4,737-900ER,https://www.airlines-manager.com/network/showline/48842072,https://www.airlines-manager.com/network/showflight/51363387530,https://www.airlines-manager.com/aircraft/show/114266975,17:45,1:44,320,"$508,952.00","$461,295.00"
IAH - YOW,51370307087,IAH-YOW-SJD 3,737-900ER,https://www.airlines-manager.com/network/showline/48842072,https://www.airlines-manager.com/network/showflight/51370307087,https://www.airlines-manager.com/aircraft/show/113250059,21:15,5:14,318,"$506,479.00","$458,913.00"
IAH - YUL,51335558225,IAH-YYC-YUL 4,757-300,https://www.airlines-manager.com/network/showline/48842047,https://www.airlines-manager.com/network/showflight/51335558225,https://www.airlines-manager.com/aircraft/show/114266980,0:45,8:44,400,"$682,526.00","$624,585.00"
IAH - YUL,51335558226,IAH-YYC-YUL 3,757-300,https://www.airlines-manager.com/network/showline/48842047,https://www.airlines-manager.com/network/showflight/51335558226,https://www.airlines-manager.com/aircraft/show/114266979,2:00,9:59,400,"$682,526.00","$624,585.00"
IAH - YUL,51347851246,IAH-YYC-YUL 2,757-300,https://www.airlines-manager.com/network/showline/48842047,https://www.airlines-manager.com/network/showflight/51347851246,https://www.airlines-manager.com/aircraft/show/114266978,12:00,19:59,400,"$682,526.00","$624,585.00"
IAH - YUL,51370307043,IAH-YYC-YUL 1,757-300,https://www.airlines-manager.com/network/showline/48842047,https://www.airlines-manager.com/network/showflight/51370307043,https://www.airlines-manager.com/aircraft/show/114266977,20:45,4:44,398,"$678,631.00","$620,792.00"
IAH - YVR,51335558263,IAH-MEX-YYZ 1,757-300,https://www.airlines-manager.com/network/showline/41988815,https://www.airlines-manager.com/network/showflight/51335558263,https://www.airlines-manager.com/aircraft/show/97076946,1:00,10:29,400,"$772,534.00","$704,472.00"
IAH - YVR,51335558264,IAH-MEX-YYZ 4,757-300,https://www.airlines-manager.com/network/showline/41988815,https://www.airlines-manager.com/network/showflight/51335558264,https://www.airlines-manager.com/aircraft/show/97076943,4:00,13:29,400,"$772,534.00","$704,472.00"
IAH - YVR,51355083249,IAH-MEX-YYZ 3,757-300,https://www.airlines-manager.com/network/showline/41988815,https://www.airlines-manager.com/network/showflight/51355083249,https://www.airlines-manager.com/aircraft/show/97076944,13:00,22:29,400,"$772,534.00","$704,472.00"
IAH - YVR,51363387269,IAH-MEX-YYZ 6 S,ERJ-175,https://www.airlines-manager.com/network/showline/41988815,https://www.airlines-manager.com/network/showflight/51363387269,https://www.airlines-manager.com/aircraft/show/97026605,16:00,1:44,136,"$285,256.00","$249,348.00"
IAH - YVR,51370306958,IAH-MEX-YYZ 2,757-300,https://www.airlines-manager.com/network/showline/41988815,https://www.airlines-manager.com/network/showflight/51370306958,https://www.airlines-manager.com/aircraft/show/97076945,20:00,5:29,400,"$772,534.00","$704,472.00"
IAH - YVR,51374354728,IAH-MEX-YYZ 5,757-300,https://www.airlines-manager.com/network/showline/41988815,https://www.airlines-manager.com/network/showflight/51374354728,https://www.airlines-manager.com/aircraft/show/97076942,23:00,8:29,400,"$772,534.00","$704,472.00"
IAH - YYC,51335558300,IAH-YYC-YUL 2,757-300,https://www.airlines-manager.com/network/showline/48842030,https://www.airlines-manager.com/network/showflight/51335558300,https://www.airlines-manager.com/aircraft/show/114266978,1:15,9:59,400,"$742,661.00","$679,909.00"
IAH - YYC,51347851243,IAH-YYC-YUL 1,757-300,https://www.airlines-manager.com/network/showline/48842030,https://www.airlines-manager.com/network/showflight/51347851243,https://www.airlines-manager.com/aircraft/show/114266977,12:00,20:44,400,"$742,661.00","$679,909.00"
IAH - YYC,51363387291,IAH-YYC-YUL 4,757-300,https://www.airlines-manager.com/network/showline/48842030,https://www.airlines-manager.com/network/showflight/51363387291,https://www.airlines-manager.com/aircraft/show/114266980,16:00,0:44,400,"$742,661.00","$679,909.00"
IAH - YYC,51363387292,IAH-YYC-YUL 3,757-300,https://www.airlines-manager.com/network/showline/48842030,https://www.airlines-manager.com/network/showflight/51363387292,https://www.airlines-manager.com/aircraft/show/114266979,17:15,1:59,400,"$742,661.00","$679,909.00"
IAH - YYZ,51335558566,IAH-MEX-YYZ 3,757-300,https://www.airlines-manager.com/network/showline/41856128,https://www.airlines-manager.com/network/showflight/51335558566,https://www.airlines-manager.com/aircraft/show/97076944,3:30,10:29,400,"$571,272.00","$512,624.00"
IAH - YYZ,51335558567,IAH-MEX-YYZ 6 S,ERJ-175,https://www.airlines-manager.com/network/showline/41856128,https://www.airlines-manager.com/network/showflight/51335558567,https://www.airlines-manager.com/aircraft/show/97026605,6:45,13:44,136,"$211,051.00","$180,508.00"
IAH - YYZ,51355083244,IAH-MEX-YYZ 2,757-300,https://www.airlines-manager.com/network/showline/41856128,https://www.airlines-manager.com/network/showflight/51355083244,https://www.airlines-manager.com/aircraft/show/97076945,13:00,19:59,400,"$571,272.00","$512,624.00"
IAH - YYZ,51363387313,IAH-MEX-YYZ 5,757-300,https://www.airlines-manager.com/network/showline/41856128,https://www.airlines-manager.com/network/showflight/51363387313,https://www.airlines-manager.com/aircraft/show/97076942,16:00,22:59,400,"$571,272.00","$512,624.00"
IAH - YYZ,51363387314,IAH-MEX-YYZ 1,757-300,https://www.airlines-manager.com/network/showline/41856128,https://www.airlines-manager.com/network/showflight/51363387314,https://www.airlines-manager.com/aircraft/show/97076946,18:00,0:59,400,"$571,272.00","$512,624.00"
IAH - YYZ,51370307060,IAH-MEX-YYZ 4,757-300,https://www.airlines-manager.com/network/showline/41856128,https://www.airlines-manager.com/network/showflight/51370307060,https://www.airlines-manager.com/aircraft/show/97076943,21:00,3:59,400,"$571,272.00","$512,624.00"
MIA - ABQ,51335558313,MIA-IAD-TUS 1,A321-200,https://www.airlines-manager.com/network/showline/44372807,https://www.airlines-manager.com/network/showflight/51335558313,https://www.airlines-manager.com/aircraft/show/97556721,1:15,9:59,310,"$546,501.00","$498,660.00"
MIA - ABQ,51335558314,MIA-IAD-TUS 4,A321-200,https://www.airlines-manager.com/network/showline/44372807,https://www.airlines-manager.com/network/showflight/51335558314,https://www.airlines-manager.com/aircraft/show/97556718,4:15,12:59,310,"$546,501.00","$498,660.00"
MIA - ABQ,51347850949,MIA-IAD-TUS 3,A321-200,https://www.airlines-manager.com/network/showline/44372807,https://www.airlines-manager.com/network/showflight/51347850949,https://www.airlines-manager.com/aircraft/show/97556719,10:00,18:44,310,"$546,501.00","$498,660.00"
MIA - ABQ,51363387634,MIA-IAD-TUS 2,A321-200,https://www.airlines-manager.com/network/showline/44372807,https://www.airlines-manager.com/network/showflight/51363387634,https://www.airlines-manager.com/aircraft/show/97556720,19:30,4:14,310,"$546,501.00","$498,660.00"
MIA - ABQ,51374354689,MIA-IAD-TUS 5,A321-200,https://www.airlines-manager.com/network/showline/44372807,https://www.airlines-manager.com/network/showflight/51374354689,https://www.airlines-manager.com/aircraft/show/97556716,22:30,7:14,310,"$546,501.00","$498,660.00"
MIA - ACC,51355083403,MIA 84B-3 E2,777-300,https://www.airlines-manager.com/network/showline/43186738,https://www.airlines-manager.com/network/showflight/51355083403,https://www.airlines-manager.com/aircraft/show/106676227,14:15,11:59,962,"$3,557,573.00","$3,247,260.00"
MIA - ACC,51374354722,MIA 84B-5 E2,777-300,https://www.airlines-manager.com/network/showline/43186738,https://www.airlines-manager.com/network/showflight/51374354722,https://www.airlines-manager.com/aircraft/show/106676229,22:45,20:29,962,"$3,557,573.00","$3,247,260.00"
MIA - ALB,51335558565,MIA-DSM-ALB 3,737-900ER,https://www.airlines-manager.com/network/showline/48487680,https://www.airlines-manager.com/network/showflight/51335558565,https://www.airlines-manager.com/aircraft/show/113101233,3:30,10:14,320,"$427,571.00","$386,197.00"
MIA - ALB,51355083196,MIA-DSM-ALB 2,737-900ER,https://www.airlines-manager.com/network/showline/48487680,https://www.airlines-manager.com/network/showflight/51355083196,https://www.airlines-manager.com/aircraft/show/113101230,13:00,19:44,320,"$427,571.00","$386,197.00"
MIA - ALB,51363387296,MIA-DSM-ALB 5,ERJ-175,https://www.airlines-manager.com/network/showline/48487680,https://www.airlines-manager.com/network/showflight/51363387296,https://www.airlines-manager.com/aircraft/show/100049776,16:00,22:59,112,"$202,234.00","$177,971.00"
MIA - ALB,51370306989,MIA-DSM-ALB 1,737-900ER,https://www.airlines-manager.com/network/showline/48487680,https://www.airlines-manager.com/network/showflight/51370306989,https://www.airlines-manager.com/aircraft/show/111064081,20:15,2:59,320,"$427,571.00","$386,197.00"
MIA - ALB,51374354756,MIA-DSM-ALB 4,737-900ER,https://www.airlines-manager.com/network/showline/48487680,https://www.airlines-manager.com/network/showflight/51374354756,https://www.airlines-manager.com/aircraft/show/113101228,23:15,5:59,320,"$427,571.00","$386,197.00"
MIA - ALG,51363387478,MIA 84B-1 E2,777-300,https://www.airlines-manager.com/network/showline/46538378,https://www.airlines-manager.com/network/showflight/51363387478,https://www.airlines-manager.com/aircraft/show/106676225,17:00,12:29,962,"$3,230,543.00","$2,945,011.00"
MIA - ALG,51370307030,MIA 84B-6 E2,777-300,https://www.airlines-manager.com/network/showline/46538378,https://www.airlines-manager.com/network/showflight/51370307030,https://www.airlines-manager.com/aircraft/show/106676230,20:30,15:59,962,"$3,230,543.00","$2,945,011.00"
MIA - ANU,51335558697,MIA-ANU-SXM 3 S,A319-100,https://www.airlines-manager.com/network/showline/47559658,https://www.airlines-manager.com/network/showflight/51335558697,https://www.airlines-manager.com/aircraft/show/110114297,6:30,13:44,228,"$354,785.00","$324,102.00"
MIA - ANU,51335558698,MIA-ANU-SXM 4 S,A319-100,https://www.airlines-manager.com/network/showline/47559658,https://www.airlines-manager.com/network/showflight/51335558698,https://www.airlines-manager.com/aircraft/show/110114298,8:30,15:44,228,"$354,785.00","$324,102.00"
MIA - ANU,51347851256,MIA-ANU-SXM 1 S,A319-100,https://www.airlines-manager.com/network/showline/47559658,https://www.airlines-manager.com/network/showflight/51347851256,https://www.airlines-manager.com/aircraft/show/110114295,12:00,19:14,228,"$354,785.00","$324,102.00"
MIA - ANU,51355083222,MIA-ANU-SXM 2 S,A319-100,https://www.airlines-manager.com/network/showline/47559658,https://www.airlines-manager.com/network/showflight/51355083222,https://www.airlines-manager.com/aircraft/show/110114296,13:00,20:14,228,"$354,785.00","$324,102.00"
MIA - ANU,51363387395,MIA-ANU-SXM 6 S,A319-100,https://www.airlines-manager.com/network/showline/47559658,https://www.airlines-manager.com/network/showflight/51363387395,https://www.airlines-manager.com/aircraft/show/110114300,16:30,23:44,228,"$354,785.00","$324,102.00"
MIA - ANU,51374354771,MIA-ANU-SXM 5 S,A319-100,https://www.airlines-manager.com/network/showline/47559658,https://www.airlines-manager.com/network/showflight/51374354771,https://www.airlines-manager.com/aircraft/show/110114299,23:30,6:44,228,"$354,785.00","$324,102.00"
MIA - ATL,51335558700,MIA-LAX-DEN 5,757-300,https://www.airlines-manager.com/network/showline/42257954,https://www.airlines-manager.com/network/showflight/51335558700,https://www.airlines-manager.com/aircraft/show/91126653,6:30,10:59,400,"$353,815.00","$289,570.00"
MIA - ATL,51347851242,MIA-LAX-DEN 4,757-300,https://www.airlines-manager.com/network/showline/42257954,https://www.airlines-manager.com/network/showflight/51347851242,https://www.airlines-manager.com/aircraft/show/91126652,12:00,16:29,400,"$353,815.00","$289,570.00"
MIA - ATL,51355083212,MIA-LAX-DEN 2,757-300,https://www.airlines-manager.com/network/showline/42257954,https://www.airlines-manager.com/network/showflight/51355083212,https://www.airlines-manager.com/aircraft/show/91126650,13:00,17:29,400,"$353,815.00","$289,570.00"
MIA - ATL,51363387636,MIA-LAX-DEN 1,757-300,https://www.airlines-manager.com/network/showline/42257954,https://www.airlines-manager.com/network/showflight/51363387636,https://www.airlines-manager.com/aircraft/show/91126649,19:30,23:59,400,"$353,815.00","$289,570.00"
MIA - ATL,51370307061,MIA-LAX-DEN 3,757-300,https://www.airlines-manager.com/network/showline/42257954,https://www.airlines-manager.com/network/showflight/51370307061,https://www.airlines-manager.com/aircraft/show/91126651,21:00,1:29,345,"$325,520.00","$262,126.00"
MIA - AUA,51335558500,MIA-BGI-CUR 1,737-900ER,https://www.airlines-manager.com/network/showline/46704488,https://www.airlines-manager.com/network/showflight/51335558500,https://www.airlines-manager.com/aircraft/show/107121795,3:00,9:29,320,"$403,121.00","$363,301.00"
MIA - AUA,51335558501,MIA-BGI-CUR 4,737-900ER,https://www.airlines-manager.com/network/showline/46704488,https://www.airlines-manager.com/network/showflight/51335558501,https://www.airlines-manager.com/aircraft/show/107121798,4:30,10:59,320,"$403,121.00","$363,301.00"
MIA - AUA,51347851187,MIA-BGI-CUR 3,737-900ER,https://www.airlines-manager.com/network/showline/46704488,https://www.airlines-manager.com/network/showflight/51347851187,https://www.airlines-manager.com/aircraft/show/107121797,11:00,17:29,320,"$403,121.00","$363,301.00"
MIA - AUA,51363387528,MIA-BGI-CUR 2,737-900ER,https://www.airlines-manager.com/network/showline/46704488,https://www.airlines-manager.com/network/showflight/51363387528,https://www.airlines-manager.com/aircraft/show/107121796,17:45,0:14,320,"$403,121.00","$363,301.00"
MIA - AUA,51370307116,MIA-BGI-CUR 5,737-900ER,https://www.airlines-manager.com/network/showline/46704488,https://www.airlines-manager.com/network/showflight/51370307116,https://www.airlines-manager.com/aircraft/show/107121799,21:45,4:14,241,"$312,887.00","$276,086.00"
MIA - AUS,51335558474,MIA-AUS-PIT 2,737-900ER,https://www.airlines-manager.com/network/showline/44971964,https://www.airlines-manager.com/network/showflight/51335558474,https://www.airlines-manager.com/aircraft/show/99920625,2:45,9:14,320,"$401,516.00","$357,817.00"
MIA - AUS,51347850951,MIA-AUS-PIT 1,737-900ER,https://www.airlines-manager.com/network/showline/44971964,https://www.airlines-manager.com/network/showflight/51347850951,https://www.airlines-manager.com/aircraft/show/99920626,10:00,16:29,320,"$401,516.00","$357,817.00"
MIA - AUS,51355083393,MIA-AUS-PIT 5,ERJ-175,https://www.airlines-manager.com/network/showline/44971964,https://www.airlines-manager.com/network/showflight/51355083393,https://www.airlines-manager.com/aircraft/show/82323689,14:00,20:29,112,"$189,575.00","$164,516.00"
MIA - AUS,51355083394,MIA-AUS-PIT 4,737-900ER,https://www.airlines-manager.com/network/showline/44971964,https://www.airlines-manager.com/network/showflight/51355083394,https://www.airlines-manager.com/aircraft/show/99920623,14:45,21:14,320,"$401,516.00","$357,817.00"
MIA - AUS,51370307035,MIA-AUS-PIT 3,737-900ER,https://www.airlines-manager.com/network/showline/44971964,https://www.airlines-manager.com/network/showflight/51370307035,https://www.airlines-manager.com/aircraft/show/99920624,20:45,3:14,320,"$402,200.00","$358,501.00"
MIA - BDA,51335558520,MIA-PUJ-BDA 1 S,A319-100,https://www.airlines-manager.com/network/showline/42193835,https://www.airlines-manager.com/network/showflight/51335558520,https://www.airlines-manager.com/aircraft/show/104034457,3:00,9:14,228,"$294,602.00","$267,076.00"
MIA - BDA,51335558521,MIA-PUJ-BDA 3 S,A319-100,https://www.airlines-manager.com/network/showline/42193835,https://www.airlines-manager.com/network/showflight/51335558521,https://www.airlines-manager.com/aircraft/show/104034459,3:45,9:59,228,"$294,602.00","$267,076.00"
MIA - BDA,51347850892,MIA-PUJ-BDA 4 S,A319-100,https://www.airlines-manager.com/network/showline/42193835,https://www.airlines-manager.com/network/showflight/51347850892,https://www.airlines-manager.com/aircraft/show/104034460,10:00,16:14,228,"$294,602.00","$267,076.00"
MIA - BDA,51347850895,MIA-PUJ-BDA 6 S,A319-100,https://www.airlines-manager.com/network/showline/42193835,https://www.airlines-manager.com/network/showflight/51347850895,https://www.airlines-manager.com/aircraft/show/99326789,11:00,17:14,228,"$294,602.00","$267,076.00"
MIA - BDA,51363387250,MIA-PUJ-BDA 5 S,A319-100,https://www.airlines-manager.com/network/showline/42193835,https://www.airlines-manager.com/network/showflight/51363387250,https://www.airlines-manager.com/aircraft/show/104034461,15:45,21:59,228,"$294,602.00","$267,076.00"
MIA - BDA,51370307078,MIA-PUJ-BDA 2 S,A319-100,https://www.airlines-manager.com/network/showline/42193835,https://www.airlines-manager.com/network/showflight/51370307078,https://www.airlines-manager.com/aircraft/show/104034458,21:15,3:29,228,"$294,602.00","$267,076.00"
MIA - BDL,51335558511,MIA-BDL-SAT 2,737-900ER,https://www.airlines-manager.com/network/showline/46909505,https://www.airlines-manager.com/network/showflight/51335558511,https://www.airlines-manager.com/aircraft/show/107763565,3:00,9:44,320,"$425,506.00","$383,225.00"
MIA - BDL,51335558512,MIA-BDL-SAT 5,ERJ-175,https://www.airlines-manager.com/network/showline/46909505,https://www.airlines-manager.com/network/showflight/51335558512,https://www.airlines-manager.com/aircraft/show/107467213,8:00,14:44,112,"$200,320.00","$175,693.00"
MIA - BDL,51355083329,MIA-BDL-SAT 4,737-900ER,https://www.airlines-manager.com/network/showline/46909505,https://www.airlines-manager.com/network/showflight/51355083329,https://www.airlines-manager.com/aircraft/show/107763561,13:45,20:29,320,"$425,506.00","$383,225.00"
MIA - BDL,51355083330,MIA-BDL-SAT 1,737-900ER,https://www.airlines-manager.com/network/showline/46909505,https://www.airlines-manager.com/network/showflight/51355083330,https://www.airlines-manager.com/aircraft/show/107763566,14:00,20:44,320,"$425,506.00","$383,225.00"
MIA - BDL,51370307018,MIA-BDL-SAT 3,737-900ER,https://www.airlines-manager.com/network/showline/46909505,https://www.airlines-manager.com/network/showflight/51370307018,https://www.airlines-manager.com/aircraft/show/107763562,20:30,3:14,320,"$425,506.00","$383,225.00"
MIA - BGI,51335558487,MIA-BGI-CUR 2,737-900ER,https://www.airlines-manager.com/network/showline/46704471,https://www.airlines-manager.com/network/showflight/51335558487,https://www.airlines-manager.com/aircraft/show/107121796,2:45,10:59,320,"$515,000.00","$466,176.00"
MIA - BGI,51335558488,MIA-BGI-CUR 5,737-900ER,https://www.airlines-manager.com/network/showline/46704471,https://www.airlines-manager.com/network/showflight/51335558488,https://www.airlines-manager.com/aircraft/show/107121799,6:45,14:59,320,"$515,000.00","$466,176.00"
MIA - BGI,51347851260,MIA-BGI-CUR 1,737-900ER,https://www.airlines-manager.com/network/showline/46704471,https://www.airlines-manager.com/network/showflight/51347851260,https://www.airlines-manager.com/aircraft/show/107121795,12:00,20:14,320,"$515,000.00","$466,176.00"
MIA - BGI,51355083320,MIA-BGI-CUR 4,737-900ER,https://www.airlines-manager.com/network/showline/46704471,https://www.airlines-manager.com/network/showflight/51355083320,https://www.airlines-manager.com/aircraft/show/107121798,13:30,21:44,320,"$515,000.00","$466,176.00"
MIA - BGI,51370306987,MIA-BGI-CUR 3,737-900ER,https://www.airlines-manager.com/network/showline/46704471,https://www.airlines-manager.com/network/showflight/51370306987,https://www.airlines-manager.com/aircraft/show/107121797,20:00,4:14,320,"$515,000.00","$466,176.00"
MIA - BNA,51335558218,MIA-BOI-BNA 5,ERJ-175,https://www.airlines-manager.com/network/showline/45701836,https://www.airlines-manager.com/network/showflight/51335558218,https://www.airlines-manager.com/aircraft/show/103534663,0:45,5:59,112,"$156,995.00","$135,517.00"
MIA - BNA,51335558219,MIA-BOI-BNA 4,737-900ER,https://www.airlines-manager.com/network/showline/45701836,https://www.airlines-manager.com/network/showflight/51335558219,https://www.airlines-manager.com/aircraft/show/103775657,1:15,6:29,320,"$330,251.00","$292,000.00"
MIA - BNA,51335558220,MIA-BOI-BNA 3,737-900ER,https://www.airlines-manager.com/network/showline/45701836,https://www.airlines-manager.com/network/showflight/51335558220,https://www.airlines-manager.com/aircraft/show/104020880,4:45,9:59,320,"$330,251.00","$292,000.00"
MIA - BNA,51347850897,MIA-BOI-BNA 2,737-900ER,https://www.airlines-manager.com/network/showline/45701836,https://www.airlines-manager.com/network/showflight/51347850897,https://www.airlines-manager.com/aircraft/show/104022609,10:00,15:14,320,"$330,251.00","$292,000.00"
MIA - BNA,51347850899,MIA-BOI-BNA 5,ERJ-175,https://www.airlines-manager.com/network/showline/45701836,https://www.airlines-manager.com/network/showflight/51347850899,https://www.airlines-manager.com/aircraft/show/103534663,12:00,17:14,112,"$156,995.00","$135,517.00"
MIA - BNA,51370307084,MIA-BOI-BNA 1,737-900ER,https://www.airlines-manager.com/network/showline/45701836,https://www.airlines-manager.com/network/showflight/51370307084,https://www.airlines-manager.com/aircraft/show/104133006,21:15,2:29,320,"$330,251.00","$292,000.00"
MIA - BOI,51335558374,MIA-ORD-BOI-JAX B,A319-100,https://www.airlines-manager.com/network/showline/45701907,https://www.airlines-manager.com/network/showflight/51335558374,https://www.airlines-manager.com/aircraft/show/106339154,1:45,12:59,198,"$522,418.00","$478,549.00"
MIA - BOI,51347850886,MIA-BOI-BNA 1,737-900ER,https://www.airlines-manager.com/network/showline/45701907,https://www.airlines-manager.com/network/showflight/51347850886,https://www.airlines-manager.com/aircraft/show/104133006,10:00,21:14,320,"$694,059.00","$633,907.00"
MIA - BOI,51355083347,MIA-BOI-BNA 4,737-900ER,https://www.airlines-manager.com/network/showline/45701907,https://www.airlines-manager.com/network/showflight/51355083347,https://www.airlines-manager.com/aircraft/show/103775657,14:00,1:14,320,"$694,059.00","$633,907.00"
MIA - BOI,51363387518,MIA-BOI-BNA 3,737-900ER,https://www.airlines-manager.com/network/showline/45701907,https://www.airlines-manager.com/network/showflight/51363387518,https://www.airlines-manager.com/aircraft/show/104020880,17:30,4:44,320,"$694,059.00","$633,907.00"
MIA - BOI,51374354725,MIA-BOI-BNA 2,737-900ER,https://www.airlines-manager.com/network/showline/45701907,https://www.airlines-manager.com/network/showflight/51374354725,https://www.airlines-manager.com/aircraft/show/104022609,22:45,9:59,320,"$694,059.00","$633,907.00"
MIA - BOS,51335558429,MIA-SJU-BOS 5,A321-200,https://www.airlines-manager.com/network/showline/42307221,https://www.airlines-manager.com/network/showflight/51335558429,https://www.airlines-manager.com/aircraft/show/91352059,2:00,8:59,310,"$443,334.00","$398,925.00"
MIA - BOS,51335558430,MIA-SJU-BOS 1,A321-200,https://www.airlines-manager.com/network/showline/42307221,https://www.airlines-manager.com/network/showflight/51335558430,https://www.airlines-manager.com/aircraft/show/91352063,5:00,11:59,310,"$443,334.00","$398,925.00"
MIA - BOS,51347851215,MIA-SJU-BOS 4,A321-200,https://www.airlines-manager.com/network/showline/42307221,https://www.airlines-manager.com/network/showflight/51347851215,https://www.airlines-manager.com/aircraft/show/91352060,11:15,18:14,310,"$443,334.00","$398,925.00"
MIA - BOS,51363387390,MIA-SJU-BOS 2,A321-200,https://www.airlines-manager.com/network/showline/42307221,https://www.airlines-manager.com/network/showflight/51363387390,https://www.airlines-manager.com/aircraft/show/91352062,16:30,23:29,310,"$443,334.00","$398,925.00"
MIA - BOS,51363387392,MIA-SJU-BOS 3,A321-200,https://www.airlines-manager.com/network/showline/42307221,https://www.airlines-manager.com/network/showflight/51363387392,https://www.airlines-manager.com/aircraft/show/91352061,19:00,1:59,310,"$443,334.00","$398,925.00"
MIA - BOS,51370307010,MIA-SJU-BOS 6 B,A319-100,https://www.airlines-manager.com/network/showline/42307221,https://www.airlines-manager.com/network/showflight/51370307010,https://www.airlines-manager.com/aircraft/show/110582841,20:15,3:14,198,"$335,405.00","$299,824.00"
MIA - BTV,51335558523,MIA-DSM-ALB 1,737-900ER,https://www.airlines-manager.com/network/showline/48487638,https://www.airlines-manager.com/network/showflight/51335558523,https://www.airlines-manager.com/aircraft/show/111064081,3:00,10:14,320,"$459,337.00","$416,465.00"
MIA - BTV,51347850758,MIA-DSM-ALB 4,737-900ER,https://www.airlines-manager.com/network/showline/48487638,https://www.airlines-manager.com/network/showflight/51347850758,https://www.airlines-manager.com/aircraft/show/113101228,8:45,15:59,320,"$459,337.00","$416,465.00"
MIA - BTV,51355083195,MIA-DSM-ALB 3,737-900ER,https://www.airlines-manager.com/network/showline/48487638,https://www.airlines-manager.com/network/showflight/51355083195,https://www.airlines-manager.com/aircraft/show/113101233,13:00,20:14,320,"$459,337.00","$416,465.00"
MIA - BTV,51370306933,MIA-DSM-ALB 2,737-900ER,https://www.airlines-manager.com/network/showline/48487638,https://www.airlines-manager.com/network/showflight/51370306933,https://www.airlines-manager.com/aircraft/show/113101230,19:45,2:59,320,"$459,337.00","$416,465.00"
MIA - BTV,51374354727,MIA-DSM-ALB 5,ERJ-175,https://www.airlines-manager.com/network/showline/48487638,https://www.airlines-manager.com/network/showflight/51374354727,https://www.airlines-manager.com/aircraft/show/100049776,23:00,6:29,110,"$216,516.00","$191,261.00"
MIA - BUF,51335558507,MIA-BDL-SAT 4,737-900ER,https://www.airlines-manager.com/network/showline/46909524,https://www.airlines-manager.com/network/showflight/51335558507,https://www.airlines-manager.com/aircraft/show/107763561,3:00,9:44,320,"$423,660.00","$381,845.00"
MIA - BUF,51335558508,MIA-BDL-SAT 1,737-900ER,https://www.airlines-manager.com/network/showline/46909524,https://www.airlines-manager.com/network/showflight/51335558508,https://www.airlines-manager.com/aircraft/show/107763566,3:15,9:59,320,"$423,660.00","$381,845.00"
MIA - BUF,51347851173,MIA-BDL-SAT 3,737-900ER,https://www.airlines-manager.com/network/showline/46909524,https://www.airlines-manager.com/network/showflight/51347851173,https://www.airlines-manager.com/aircraft/show/107763562,11:00,17:44,320,"$423,660.00","$381,845.00"
MIA - BUF,51363387514,MIA-BDL-SAT 2,737-900ER,https://www.airlines-manager.com/network/showline/46909524,https://www.airlines-manager.com/network/showflight/51363387514,https://www.airlines-manager.com/aircraft/show/107763565,17:30,0:14,320,"$423,660.00","$381,845.00"
MIA - BUF,51370307081,MIA-BDL-SAT 5,ERJ-175,https://www.airlines-manager.com/network/showline/46909524,https://www.airlines-manager.com/network/showflight/51370307081,https://www.airlines-manager.com/aircraft/show/107467213,21:15,3:59,112,"$199,435.00","$175,067.00"
MIA - BUR,51335558499,MIA-BUR-PVD 4,A321-200,https://www.airlines-manager.com/network/showline/46909485,https://www.airlines-manager.com/network/showflight/51335558499,https://www.airlines-manager.com/aircraft/show/108834806,2:45,13:59,310,"$700,124.00","$647,219.00"
MIA - BUR,51347851184,MIA-BUR-PVD 1,A321-200,https://www.airlines-manager.com/network/showline/46909485,https://www.airlines-manager.com/network/showflight/51347851184,https://www.airlines-manager.com/aircraft/show/108834803,11:00,22:14,310,"$700,124.00","$647,219.00"
MIA - BUR,51355083351,MIA-BUR-PVD 3,A321-200,https://www.airlines-manager.com/network/showline/46909485,https://www.airlines-manager.com/network/showflight/51355083351,https://www.airlines-manager.com/aircraft/show/108834805,14:00,1:14,310,"$700,124.00","$647,219.00"
MIA - BUR,51370306971,MIA-BUR-PVD 5 B,A319-100,https://www.airlines-manager.com/network/showline/46909485,https://www.airlines-manager.com/network/showflight/51370306971,https://www.airlines-manager.com/aircraft/show/108834807,20:00,7:14,198,"$525,255.00","$482,830.00"
MIA - BUR,51370306972,MIA-BUR-PVD 2,A321-200,https://www.airlines-manager.com/network/showline/46909485,https://www.airlines-manager.com/network/showflight/51370306972,https://www.airlines-manager.com/aircraft/show/108834804,20:45,7:59,310,"$700,124.00","$647,219.00"
MIA - BWI,51335558600,MIA-BWI-YYZ 4,A321-200,https://www.airlines-manager.com/network/showline/42608062,https://www.airlines-manager.com/network/showflight/51335558600,https://www.airlines-manager.com/aircraft/show/92153442,4:00,9:44,310,"$364,030.00","$325,721.00"
MIA - BWI,51335558601,MIA-BWI-YYZ 5,A321-200,https://www.airlines-manager.com/network/showline/42608062,https://www.airlines-manager.com/network/showflight/51335558601,https://www.airlines-manager.com/aircraft/show/92153439,6:00,11:44,310,"$364,030.00","$325,721.00"
MIA - BWI,51347850979,MIA-BWI-YYZ 1,A321-200,https://www.airlines-manager.com/network/showline/42608062,https://www.airlines-manager.com/network/showflight/51347850979,https://www.airlines-manager.com/aircraft/show/92153443,10:00,15:44,310,"$364,030.00","$325,721.00"
MIA - BWI,51355083198,MIA-BWI-YYZ 2,A321-200,https://www.airlines-manager.com/network/showline/42608062,https://www.airlines-manager.com/network/showflight/51355083198,https://www.airlines-manager.com/aircraft/show/92153440,13:00,18:44,310,"$364,030.00","$325,721.00"
MIA - BWI,51370307074,MIA-BWI-YYZ 3,A321-200,https://www.airlines-manager.com/network/showline/42608062,https://www.airlines-manager.com/network/showflight/51370307074,https://www.airlines-manager.com/aircraft/show/92153441,21:00,2:44,310,"$364,030.00","$325,721.00"
MIA - BWI,51374354742,MIA-BWI-YYZ 6 S,ERJ-175,https://www.airlines-manager.com/network/showline/42608062,https://www.airlines-manager.com/network/showflight/51374354742,https://www.airlines-manager.com/aircraft/show/92137503,23:00,4:44,85,"$120,998.00","$100,239.00"
MIA - CHS,51335558532,MIA-SDF-PWM 2,A321-200,https://www.airlines-manager.com/network/showline/46376123,https://www.airlines-manager.com/network/showflight/51335558532,https://www.airlines-manager.com/aircraft/show/94886626,3:15,7:14,310,"$224,883.00","$198,891.00"
MIA - CHS,51335558533,MIA CARGO 1,737-700,https://www.airlines-manager.com/network/showline/46376123,https://www.airlines-manager.com/network/showflight/51335558533,https://www.airlines-manager.com/aircraft/show/107577220,4:15,8:14,0,"$60,609.00","$43,037.00"
MIA - CHS,51347850810,MIA-SDF-PWM 1,A321-200,https://www.airlines-manager.com/network/showline/46376123,https://www.airlines-manager.com/network/showflight/51347850810,https://www.airlines-manager.com/aircraft/show/96692674,9:00,12:59,310,"$224,883.00","$198,891.00"
MIA - CHS,51347850811,MIA-SDF-PWM 5,ERJ-175,https://www.airlines-manager.com/network/showline/46376123,https://www.airlines-manager.com/network/showflight/51347850811,https://www.airlines-manager.com/aircraft/show/105601657,11:00,14:59,112,"$104,517.00","$88,065.00"
MIA - CHS,51355083360,MIA-SDF-PWM 4,A321-200,https://www.airlines-manager.com/network/showline/46376123,https://www.airlines-manager.com/network/showflight/51355083360,https://www.airlines-manager.com/aircraft/show/94886625,14:00,17:59,310,"$224,883.00","$198,891.00"
MIA - CHS,51370307039,MIA-SDF-PWM 3,A321-200,https://www.airlines-manager.com/network/showline/46376123,https://www.airlines-manager.com/network/showflight/51370307039,https://www.airlines-manager.com/aircraft/show/94886629,20:45,0:44,290,"$197,283.00","$172,771.00"
MIA - CLE,51335558192,MIA-COS-CVG 5,ERJ-175,https://www.airlines-manager.com/network/showline/45553091,https://www.airlines-manager.com/network/showflight/51335558192,https://www.airlines-manager.com/aircraft/show/103534665,0:30,6:44,112,"$187,754.00","$163,970.00"
MIA - CLE,51335558193,MIA-COS-CVG 1,737-900ER,https://www.airlines-manager.com/network/showline/45553091,https://www.airlines-manager.com/network/showflight/51335558193,https://www.airlines-manager.com/aircraft/show/103684630,4:15,10:29,320,"$397,759.00","$356,502.00"
MIA - CLE,51335558194,MIA-COS-CVG 4,737-900ER,https://www.airlines-manager.com/network/showline/45553091,https://www.airlines-manager.com/network/showflight/51335558194,https://www.airlines-manager.com/aircraft/show/103365574,7:45,13:59,320,"$397,759.00","$356,502.00"
MIA - CLE,51355083300,MIA-COS-CVG 3,737-900ER,https://www.airlines-manager.com/network/showline/45553091,https://www.airlines-manager.com/network/showflight/51355083300,https://www.airlines-manager.com/aircraft/show/103684632,13:00,19:14,320,"$397,759.00","$356,502.00"
MIA - CLE,51370307037,MIA-COS-CVG 2,737-900ER,https://www.airlines-manager.com/network/showline/45553091,https://www.airlines-manager.com/network/showflight/51370307037,https://www.airlines-manager.com/aircraft/show/103684631,20:45,2:59,320,"$397,759.00","$356,502.00"
MIA - CLT,51335558620,MIA-ORD-DFW 6,ERJ-175,https://www.airlines-manager.com/network/showline/42379428,https://www.airlines-manager.com/network/showflight/51335558620,https://www.airlines-manager.com/aircraft/show/82543123,4:15,8:59,112,"$142,059.00","$118,152.00"
MIA - CLT,51347850933,MIA-ORD-DFW 3,A321-200,https://www.airlines-manager.com/network/showline/42379428,https://www.airlines-manager.com/network/showflight/51347850933,https://www.airlines-manager.com/aircraft/show/91600939,10:00,14:44,310,"$298,289.00","$260,340.00"
MIA - CLT,51363387288,MIA-ORD-DFW 2,A321-200,https://www.airlines-manager.com/network/showline/42379428,https://www.airlines-manager.com/network/showflight/51363387288,https://www.airlines-manager.com/aircraft/show/91600936,16:00,20:44,310,"$298,289.00","$260,340.00"
MIA - CLT,51363387289,MIA-ORD-DFW 5,A321-200,https://www.airlines-manager.com/network/showline/42379428,https://www.airlines-manager.com/network/showflight/51363387289,https://www.airlines-manager.com/aircraft/show/91600937,17:45,22:29,310,"$298,289.00","$260,340.00"
MIA - CLT,51374354697,MIA-ORD-DFW 1,A321-200,https://www.airlines-manager.com/network/showline/42379428,https://www.airlines-manager.com/network/showflight/51374354697,https://www.airlines-manager.com/aircraft/show/91600935,22:30,3:14,310,"$298,289.00","$260,340.00"
MIA - CLT,51374354698,MIA-ORD-DFW 4,A321-200,https://www.airlines-manager.com/network/showline/42379428,https://www.airlines-manager.com/network/showflight/51374354698,https://www.airlines-manager.com/aircraft/show/91600938,23:30,4:14,310,"$298,289.00","$260,340.00"
MIA - CMH,51335558384,MIA-MKE-CMH 4,737-900ER,https://www.airlines-manager.com/network/showline/46163833,https://www.airlines-manager.com/network/showflight/51335558384,https://www.airlines-manager.com/aircraft/show/88494374,1:45,7:44,320,"$371,694.00","$331,673.00"
MIA - CMH,51335558385,MIA-MKE-CMH 3,737-900ER,https://www.airlines-manager.com/network/showline/46163833,https://www.airlines-manager.com/network/showflight/51335558385,https://www.airlines-manager.com/aircraft/show/88494378,7:15,13:14,320,"$371,694.00","$331,673.00"
MIA - CMH,51355083335,MIA-MKE-CMH 2,737-900ER,https://www.airlines-manager.com/network/showline/46163833,https://www.airlines-manager.com/network/showflight/51355083335,https://www.airlines-manager.com/aircraft/show/91806233,14:00,19:59,320,"$371,694.00","$331,673.00"
MIA - CMH,51363387551,MIA-MKE-CMH 5 B,A319-100,https://www.airlines-manager.com/network/showline/46163833,https://www.airlines-manager.com/network/showflight/51363387551,https://www.airlines-manager.com/aircraft/show/110582842,18:00,23:59,198,"$282,253.00","$253,984.00"
MIA - CMH,51370307054,MIA-MKE-CMH 1,737-900ER,https://www.airlines-manager.com/network/showline/46163833,https://www.airlines-manager.com/network/showflight/51370307054,https://www.airlines-manager.com/aircraft/show/88239556,21:00,2:59,320,"$371,694.00","$331,673.00"
MIA - CMN,51335558649,MIA 84B-5 E2,777-300,https://www.airlines-manager.com/network/showline/43186717,https://www.airlines-manager.com/network/showflight/51335558649,https://www.airlines-manager.com/aircraft/show/106676229,5:00,22:44,962,"$2,952,242.00","$2,693,573.00"
MIA - CMN,51370307017,MIA 84B-2 E2,777-300,https://www.airlines-manager.com/network/showline/43186717,https://www.airlines-manager.com/network/showflight/51370307017,https://www.airlines-manager.com/aircraft/show/106676226,20:30,14:14,962,"$2,952,242.00","$2,693,573.00"
MIA - COS,51335558701,MIA-COS-CVG 2,737-900ER,https://www.airlines-manager.com/network/showline/45553098,https://www.airlines-manager.com/network/showflight/51335558701,https://www.airlines-manager.com/aircraft/show/103684631,6:30,14:59,320,"$542,859.00","$491,469.00"
MIA - COS,51347851080,MIA-COS-CVG 5,ERJ-175,https://www.airlines-manager.com/network/showline/45553098,https://www.airlines-manager.com/network/showflight/51347851080,https://www.airlines-manager.com/aircraft/show/103534665,10:00,18:44,112,"$256,043.00","$225,462.00"
MIA - COS,51355083395,MIA-COS-CVG 1,737-900ER,https://www.airlines-manager.com/network/showline/45553098,https://www.airlines-manager.com/network/showflight/51355083395,https://www.airlines-manager.com/aircraft/show/103684630,14:00,22:29,320,"$542,859.00","$491,469.00"
MIA - COS,51363387513,MIA-COS-CVG 4,737-900ER,https://www.airlines-manager.com/network/showline/45553098,https://www.airlines-manager.com/network/showflight/51363387513,https://www.airlines-manager.com/aircraft/show/103365574,17:30,1:59,320,"$542,859.00","$491,469.00"
MIA - COS,51374354715,MIA-COS-CVG 3,737-900ER,https://www.airlines-manager.com/network/showline/45553098,https://www.airlines-manager.com/network/showflight/51374354715,https://www.airlines-manager.com/aircraft/show/103684632,22:45,7:14,320,"$542,859.00","$491,469.00"
MIA - CPT,51335558645,MIA 84A-7 E,747-400,https://www.airlines-manager.com/network/showline/43025993,https://www.airlines-manager.com/network/showflight/51335558645,https://www.airlines-manager.com/aircraft/show/93776641,5:00,10:29,1048,"$5,416,794.00","$5,022,186.00"
MIA - CPT,51363387538,MIA 84A-3 E,747-400,https://www.airlines-manager.com/network/showline/43025993,https://www.airlines-manager.com/network/showflight/51363387538,https://www.airlines-manager.com/aircraft/show/93686967,18:00,23:29,1048,"$5,416,794.00","$5,022,186.00"
MIA - CUR,51335558602,MIA-BGI-CUR 3,737-900ER,https://www.airlines-manager.com/network/showline/46704486,https://www.airlines-manager.com/network/showflight/51335558602,https://www.airlines-manager.com/aircraft/show/107121797,4:15,10:59,320,"$412,570.00","$370,557.00"
MIA - CUR,51347851188,MIA-BGI-CUR 2,737-900ER,https://www.airlines-manager.com/network/showline/46704486,https://www.airlines-manager.com/network/showflight/51347851188,https://www.airlines-manager.com/aircraft/show/107121796,11:00,17:44,320,"$412,570.00","$370,557.00"
MIA - CUR,51355083430,MIA-BGI-CUR 5,737-900ER,https://www.airlines-manager.com/network/showline/46704486,https://www.airlines-manager.com/network/showflight/51355083430,https://www.airlines-manager.com/aircraft/show/107121799,15:00,21:44,320,"$412,570.00","$370,557.00"
MIA - CUR,51370307011,MIA-BGI-CUR 1,737-900ER,https://www.airlines-manager.com/network/showline/46704486,https://www.airlines-manager.com/network/showflight/51370307011,https://www.airlines-manager.com/aircraft/show/107121795,20:15,2:59,320,"$412,570.00","$370,557.00"
MIA - CUR,51370307012,MIA-BGI-CUR 4,737-900ER,https://www.airlines-manager.com/network/showline/46704486,https://www.airlines-manager.com/network/showflight/51370307012,https://www.airlines-manager.com/aircraft/show/107121798,21:45,4:29,295,"$383,103.00","$342,095.00"
MIA - CVG,51335558409,MIA-COS-CVG 4,737-900ER,https://www.airlines-manager.com/network/showline/45553080,https://www.airlines-manager.com/network/showflight/51335558409,https://www.airlines-manager.com/aircraft/show/103365574,2:00,7:44,320,"$366,610.00","$324,729.00"
MIA - CVG,51335558410,MIA-COS-CVG 3,737-900ER,https://www.airlines-manager.com/network/showline/45553080,https://www.airlines-manager.com/network/showflight/51335558410,https://www.airlines-manager.com/aircraft/show/103684632,7:15,12:59,320,"$366,610.00","$324,729.00"
MIA - CVG,51347851004,MIA CARGO 2,737-700,https://www.airlines-manager.com/network/showline/45553080,https://www.airlines-manager.com/network/showflight/51347851004,https://www.airlines-manager.com/aircraft/show/107527976,10:00,15:44,0,"$96,465.00","$70,586.00"
MIA - CVG,51355083447,MIA-COS-CVG 2,737-900ER,https://www.airlines-manager.com/network/showline/45553080,https://www.airlines-manager.com/network/showflight/51355083447,https://www.airlines-manager.com/aircraft/show/103684631,15:00,20:44,320,"$366,610.00","$324,729.00"
MIA - CVG,51363387598,MIA-COS-CVG 5,ERJ-175,https://www.airlines-manager.com/network/showline/45553080,https://www.airlines-manager.com/network/showflight/51363387598,https://www.airlines-manager.com/aircraft/show/103534665,18:45,0:29,112,"$172,967.00","$149,258.00"
MIA - CVG,51374354677,MIA-COS-CVG 1,737-900ER,https://www.airlines-manager.com/network/showline/45553080,https://www.airlines-manager.com/network/showflight/51374354677,https://www.airlines-manager.com/aircraft/show/103684630,22:30,4:14,320,"$366,610.00","$324,729.00"
MIA - DEN,51335558331,MIA-LAX-DEN 3,757-300,https://www.airlines-manager.com/network/showline/42257962,https://www.airlines-manager.com/network/showflight/51335558331,https://www.airlines-manager.com/aircraft/show/91126651,1:30,9:59,400,"$714,293.00","$628,661.00"
MIA - DEN,51335558332,MIA-LAX-DEN 4,757-300,https://www.airlines-manager.com/network/showline/42257962,https://www.airlines-manager.com/network/showflight/51335558332,https://www.airlines-manager.com/aircraft/show/91126652,3:30,11:59,400,"$714,293.00","$628,661.00"
MIA - DEN,51347851207,MIA-LAX-DEN 1,757-300,https://www.airlines-manager.com/network/showline/42257962,https://www.airlines-manager.com/network/showflight/51347851207,https://www.airlines-manager.com/aircraft/show/91126649,11:00,19:29,400,"$714,293.00","$628,661.00"
MIA - DEN,51363387522,MIA-LAX-DEN 2,757-300,https://www.airlines-manager.com/network/showline/42257962,https://www.airlines-manager.com/network/showflight/51363387522,https://www.airlines-manager.com/aircraft/show/91126650,17:30,1:59,400,"$714,293.00","$628,661.00"
MIA - DEN,51370307132,MIA-LAX-DEN 5,757-300,https://www.airlines-manager.com/network/showline/42257962,https://www.airlines-manager.com/network/showflight/51370307132,https://www.airlines-manager.com/aircraft/show/91126653,22:00,6:29,400,"$714,293.00","$628,661.00"
MIA - DFW,51335558556,MIA-ORD-DFW 2,A321-200,https://www.airlines-manager.com/network/showline/42379416,https://www.airlines-manager.com/network/showflight/51335558556,https://www.airlines-manager.com/aircraft/show/91600936,3:30,9:59,310,"$408,074.00","$352,153.00"
MIA - DFW,51347850930,MIA-ORD-DFW 1,A321-200,https://www.airlines-manager.com/network/showline/42379416,https://www.airlines-manager.com/network/showflight/51347850930,https://www.airlines-manager.com/aircraft/show/91600935,10:00,16:29,310,"$408,074.00","$352,153.00"
MIA - DFW,51347850931,MIA-ORD-DFW 4,A321-200,https://www.airlines-manager.com/network/showline/42379416,https://www.airlines-manager.com/network/showflight/51347850931,https://www.airlines-manager.com/aircraft/show/91600938,11:00,17:29,310,"$408,074.00","$352,153.00"
MIA - DFW,51363387239,MIA-ORD-DFW 6,ERJ-175,https://www.airlines-manager.com/network/showline/42379416,https://www.airlines-manager.com/network/showflight/51363387239,https://www.airlines-manager.com/aircraft/show/82543123,15:45,22:14,112,"$192,170.00","$156,663.00"
MIA - DFW,51370307098,MIA-ORD-DFW 3,A321-200,https://www.airlines-manager.com/network/showline/42379416,https://www.airlines-manager.com/network/showflight/51370307098,https://www.airlines-manager.com/aircraft/show/91600939,21:30,3:59,310,"$408,074.00","$352,153.00"
MIA - DFW,51374354690,MIA-ORD-DFW 5,A321-200,https://www.airlines-manager.com/network/showline/42379416,https://www.airlines-manager.com/network/showflight/51374354690,https://www.airlines-manager.com/aircraft/show/91600937,22:30,4:59,310,"$408,074.00","$352,153.00"
MIA - DSM,51335558519,MIA-DSM-ALB 2,737-900ER,https://www.airlines-manager.com/network/showline/48487669,https://www.airlines-manager.com/network/showflight/51335558519,https://www.airlines-manager.com/aircraft/show/113101230,3:00,10:14,320,"$455,813.00","$412,784.00"
MIA - DSM,51347850768,MIA-DSM-ALB 5,ERJ-175,https://www.airlines-manager.com/network/showline/48487669,https://www.airlines-manager.com/network/showflight/51347850768,https://www.airlines-manager.com/aircraft/show/100049776,8:45,15:59,112,"$215,975.00","$190,591.00"
MIA - DSM,51355083197,MIA-DSM-ALB 1,737-900ER,https://www.airlines-manager.com/network/showline/48487669,https://www.airlines-manager.com/network/showflight/51355083197,https://www.airlines-manager.com/aircraft/show/111064081,13:00,20:14,320,"$455,813.00","$412,784.00"
MIA - DSM,51363387297,MIA-DSM-ALB 4,737-900ER,https://www.airlines-manager.com/network/showline/48487669,https://www.airlines-manager.com/network/showflight/51363387297,https://www.airlines-manager.com/aircraft/show/113101228,16:00,23:14,320,"$455,813.00","$412,784.00"
MIA - DSM,51370307001,MIA-DSM-ALB 3,737-900ER,https://www.airlines-manager.com/network/showline/48487669,https://www.airlines-manager.com/network/showflight/51370307001,https://www.airlines-manager.com/aircraft/show/113101233,20:15,3:29,320,"$455,813.00","$412,784.00"
MIA - DSS,51335558041,MIA 84B-1 E2,777-300,https://www.airlines-manager.com/network/showline/43220462,https://www.airlines-manager.com/network/showflight/51335558041,https://www.airlines-manager.com/aircraft/show/106676225,0:00,16:59,962,"$2,843,856.00","$2,597,844.00"
MIA - DSS,51347851259,MIA 84B-4 E2,777-300,https://www.airlines-manager.com/network/showline/43220462,https://www.airlines-manager.com/network/showflight/51347851259,https://www.airlines-manager.com/aircraft/show/106676228,12:00,4:59,962,"$2,843,856.00","$2,597,844.00"
MIA - DTW,51335558327,MIA-PDX-DTW 3,737-900ER,https://www.airlines-manager.com/network/showline/44313712,https://www.airlines-manager.com/network/showflight/51335558327,https://www.airlines-manager.com/aircraft/show/89943713,1:30,7:59,320,"$410,497.00","$358,175.00"
MIA - DTW,51335558328,MIA-PDX-DTW 4,737-900ER,https://www.airlines-manager.com/network/showline/44313712,https://www.airlines-manager.com/network/showflight/51335558328,https://www.airlines-manager.com/aircraft/show/89943712,2:30,8:59,320,"$410,497.00","$358,175.00"
MIA - DTW,51347850945,MIA-PDX-DTW 2,737-900ER,https://www.airlines-manager.com/network/showline/44313712,https://www.airlines-manager.com/network/showflight/51347850945,https://www.airlines-manager.com/aircraft/show/89943714,10:00,16:29,320,"$410,497.00","$358,175.00"
MIA - DTW,51355083389,MIA-PDX-DTW 5,737-900ER,https://www.airlines-manager.com/network/showline/44313712,https://www.airlines-manager.com/network/showflight/51355083389,https://www.airlines-manager.com/aircraft/show/89943711,14:00,20:29,320,"$410,497.00","$358,175.00"
MIA - DTW,51370307120,MIA CARGO 1,737-700,https://www.airlines-manager.com/network/showline/44313712,https://www.airlines-manager.com/network/showflight/51370307120,https://www.airlines-manager.com/aircraft/show/107577220,21:45,4:14,0,"$108,731.00","$76,609.00"
MIA - DTW,51374354682,MIA-PDX-DTW 1,737-900ER,https://www.airlines-manager.com/network/showline/44313712,https://www.airlines-manager.com/network/showflight/51374354682,https://www.airlines-manager.com/aircraft/show/89943715,22:30,4:59,320,"$410,497.00","$358,175.00"
MIA - ELP,51335558719,MIA-ELP-MCI 5 B,A319-100,https://www.airlines-manager.com/network/showline/46040732,https://www.airlines-manager.com/network/showflight/51335558719,https://www.airlines-manager.com/aircraft/show/105093924,8:15,16:44,198,"$400,573.00","$364,562.00"
MIA - ELP,51347850913,MIA-ELP-MCI 1,737-900ER,https://www.airlines-manager.com/network/showline/46040732,https://www.airlines-manager.com/network/showflight/51347850913,https://www.airlines-manager.com/aircraft/show/91806234,10:00,18:29,320,"$530,950.00","$480,841.00"
MIA - ELP,51363387351,MIA-ELP-MCI 3,737-900ER,https://www.airlines-manager.com/network/showline/46040732,https://www.airlines-manager.com/network/showflight/51363387351,https://www.airlines-manager.com/aircraft/show/91806232,16:15,0:44,320,"$530,950.00","$480,841.00"
MIA - ELP,51363387352,MIA-ELP-MCI 4,737-900ER,https://www.airlines-manager.com/network/showline/46040732,https://www.airlines-manager.com/network/showflight/51363387352,https://www.airlines-manager.com/aircraft/show/91806231,17:00,1:29,320,"$530,950.00","$480,841.00"
MIA - ELP,51374354762,MIA-ELP-MCI 2,737-900ER,https://www.airlines-manager.com/network/showline/46040732,https://www.airlines-manager.com/network/showflight/51374354762,https://www.airlines-manager.com/aircraft/show/91806235,23:15,7:44,320,"$530,950.00","$480,841.00"
MIA - FAR,51335558209,MIA-FAR-TUL 3,737-900ER,https://www.airlines-manager.com/network/showline/47780421,https://www.airlines-manager.com/network/showflight/51335558209,https://www.airlines-manager.com/aircraft/show/110883161,0:45,9:29,320,"$545,388.00","$496,566.00"
MIA - FAR,51335558210,MIA-FAR-TUL 4,737-900ER,https://www.airlines-manager.com/network/showline/47780421,https://www.airlines-manager.com/network/showflight/51335558210,https://www.airlines-manager.com/aircraft/show/110883162,7:15,15:59,320,"$545,388.00","$496,566.00"
MIA - FAR,51347851159,MIA-FAR-TUL 1,737-900ER,https://www.airlines-manager.com/network/showline/47780421,https://www.airlines-manager.com/network/showflight/51347851159,https://www.airlines-manager.com/aircraft/show/110883159,11:00,19:44,320,"$545,388.00","$496,566.00"
MIA - FAR,51363387306,MIA-FAR-TUL 2,737-900ER,https://www.airlines-manager.com/network/showline/47780421,https://www.airlines-manager.com/network/showflight/51363387306,https://www.airlines-manager.com/aircraft/show/110883160,16:00,0:44,320,"$545,388.00","$496,566.00"
MIA - FAR,51363387307,MIA-FAR-TUL 5,ERJ-175,https://www.airlines-manager.com/network/showline/47780421,https://www.airlines-manager.com/network/showflight/51363387307,https://www.airlines-manager.com/aircraft/show/87169421,18:15,2:59,112,"$257,277.00","$227,863.00"
MIA - FAT,51335558725,MIA-FAT-MSO 4,737-900ER,https://www.airlines-manager.com/network/showline/48487645,https://www.airlines-manager.com/network/showflight/51335558725,https://www.airlines-manager.com/aircraft/show/113101232,8:30,19:59,320,"$722,139.00","$661,925.00"
MIA - FAT,51347851178,MIA-FAT-MSO 1,737-900ER,https://www.airlines-manager.com/network/showline/48487645,https://www.airlines-manager.com/network/showflight/51347851178,https://www.airlines-manager.com/aircraft/show/113101229,11:00,22:29,320,"$722,139.00","$661,925.00"
MIA - FAT,51363387609,MIA-FAT-MSO 2,737-900ER,https://www.airlines-manager.com/network/showline/48487645,https://www.airlines-manager.com/network/showflight/51363387609,https://www.airlines-manager.com/aircraft/show/113101231,19:00,6:29,320,"$722,139.00","$661,925.00"
MIA - FAT,51370307148,MIA-FAT-MSO 3,737-900ER,https://www.airlines-manager.com/network/showline/48487645,https://www.airlines-manager.com/network/showflight/51370307148,https://www.airlines-manager.com/aircraft/show/113101234,22:15,9:44,320,"$722,139.00","$661,925.00"
MIA - FPO,51335558151,MIA-BGI-CUR 2,737-900ER,https://www.airlines-manager.com/network/showline/46704495,https://www.airlines-manager.com/network/showflight/51335558151,https://www.airlines-manager.com/aircraft/show/107121796,0:15,2:44,320,"$83,924.00","$59,283.00"
MIA - FPO,51335558152,MIA-BGI-CUR 5,737-900ER,https://www.airlines-manager.com/network/showline/46704495,https://www.airlines-manager.com/network/showflight/51335558152,https://www.airlines-manager.com/aircraft/show/107121799,4:15,6:44,320,"$83,924.00","$59,283.00"
MIA - FPO,51347850859,MIA-BGI-CUR 1,737-900ER,https://www.airlines-manager.com/network/showline/46704495,https://www.airlines-manager.com/network/showflight/51347850859,https://www.airlines-manager.com/aircraft/show/107121795,9:30,11:59,320,"$83,924.00","$59,283.00"
MIA - FPO,51347850860,MIA-BGI-CUR 4,737-900ER,https://www.airlines-manager.com/network/showline/46704495,https://www.airlines-manager.com/network/showflight/51347850860,https://www.airlines-manager.com/aircraft/show/107121798,11:00,13:29,320,"$83,924.00","$59,283.00"
MIA - FPO,51363387510,MIA-BGI-CUR 3,737-900ER,https://www.airlines-manager.com/network/showline/46704495,https://www.airlines-manager.com/network/showflight/51363387510,https://www.airlines-manager.com/aircraft/show/107121797,17:30,19:59,200,"$60,272.00","$36,039.00"
MIA - FSD,51335558257,MIA-OKC-FSD 1,A321-200,https://www.airlines-manager.com/network/showline/47780568,https://www.airlines-manager.com/network/showflight/51335558257,https://www.airlines-manager.com/aircraft/show/110883110,1:00,8:59,310,"$501,136.00","$459,803.00"
MIA - FSD,51335558258,MIA-OKC-FSD 4,A321-200,https://www.airlines-manager.com/network/showline/47780568,https://www.airlines-manager.com/network/showflight/51335558258,https://www.airlines-manager.com/aircraft/show/110883113,2:45,10:44,310,"$501,136.00","$459,803.00"
MIA - FSD,51355083342,MIA-OKC-FSD 3,A321-200,https://www.airlines-manager.com/network/showline/47780568,https://www.airlines-manager.com/network/showflight/51355083342,https://www.airlines-manager.com/aircraft/show/110883112,14:00,21:59,310,"$501,136.00","$459,803.00"
MIA - FSD,51363387355,MIA-OKC-FSD 2,A321-200,https://www.airlines-manager.com/network/showline/47780568,https://www.airlines-manager.com/network/showflight/51363387355,https://www.airlines-manager.com/aircraft/show/110883111,16:15,0:14,310,"$501,136.00","$459,803.00"
MIA - FSD,51370307128,MIA-OKC-FSD 5,ERJ-175,https://www.airlines-manager.com/network/showline/47780568,https://www.airlines-manager.com/network/showflight/51370307128,https://www.airlines-manager.com/aircraft/show/104353572,22:00,5:59,93,"$218,239.00","$192,014.00"
MIA - HAV,51335558653,MIA-PDX-DTW 1,737-900ER,https://www.airlines-manager.com/network/showline/44313701,https://www.airlines-manager.com/network/showflight/51335558653,https://www.airlines-manager.com/aircraft/show/89943715,5:00,7:59,320,"$130,830.00","$101,023.00"
MIA - HAV,51347850814,MIA-PDX-DTW 4,737-900ER,https://www.airlines-manager.com/network/showline/44313701,https://www.airlines-manager.com/network/showflight/51347850814,https://www.airlines-manager.com/aircraft/show/89943712,9:00,11:59,320,"$130,830.00","$101,023.00"
MIA - HAV,51347850815,MIA-PDX-DTW 3,737-900ER,https://www.airlines-manager.com/network/showline/44313701,https://www.airlines-manager.com/network/showflight/51347850815,https://www.airlines-manager.com/aircraft/show/89943713,10:00,12:59,320,"$130,830.00","$101,023.00"
MIA - HAV,51363387374,MIA-PDX-DTW 2,737-900ER,https://www.airlines-manager.com/network/showline/44313701,https://www.airlines-manager.com/network/showflight/51363387374,https://www.airlines-manager.com/aircraft/show/89943714,16:30,19:29,320,"$130,830.00","$101,023.00"
MIA - HAV,51370307028,MIA-PDX-DTW 5,737-900ER,https://www.airlines-manager.com/network/showline/44313701,https://www.airlines-manager.com/network/showflight/51370307028,https://www.airlines-manager.com/aircraft/show/89943711,20:30,23:29,288,"$119,242.00","$89,688.00"
MIA - IAD,51335558616,MIA-IAD-TUS 2,A321-200,https://www.airlines-manager.com/network/showline/44372817,https://www.airlines-manager.com/network/showflight/51335558616,https://www.airlines-manager.com/aircraft/show/97556720,4:15,9:59,310,"$360,124.00","$320,823.00"
MIA - IAD,51335558617,MIA-IAD-TUS 5,A321-200,https://www.airlines-manager.com/network/showline/44372817,https://www.airlines-manager.com/network/showflight/51335558617,https://www.airlines-manager.com/aircraft/show/97556716,7:15,12:59,310,"$360,124.00","$320,823.00"
MIA - IAD,51347850946,MIA-IAD-TUS 1,A321-200,https://www.airlines-manager.com/network/showline/44372817,https://www.airlines-manager.com/network/showflight/51347850946,https://www.airlines-manager.com/aircraft/show/97556721,10:00,15:44,310,"$360,124.00","$320,823.00"
MIA - IAD,51355083253,MIA-IAD-TUS 4,A321-200,https://www.airlines-manager.com/network/showline/44372817,https://www.airlines-manager.com/network/showflight/51355083253,https://www.airlines-manager.com/aircraft/show/97556718,13:00,18:44,310,"$360,124.00","$320,823.00"
MIA - IAD,51363387592,MIA-IAD-TUS 3,A321-200,https://www.airlines-manager.com/network/showline/44372817,https://www.airlines-manager.com/network/showflight/51363387592,https://www.airlines-manager.com/aircraft/show/97556719,18:45,0:29,310,"$360,124.00","$320,823.00"
MIA - IAD,51370307099,MIA CARGO 2,737-700,https://www.airlines-manager.com/network/showline/44372817,https://www.airlines-manager.com/network/showflight/51370307099,https://www.airlines-manager.com/aircraft/show/107527976,21:30,3:14,0,"$96,107.00","$68,808.00"
MIA - ICT,51335558462,MIA-FAR-TUL 1,737-900ER,https://www.airlines-manager.com/network/showline/47780462,https://www.airlines-manager.com/network/showflight/51335558462,https://www.airlines-manager.com/aircraft/show/110883159,2:30,9:29,320,"$446,634.00","$403,317.00"
MIA - ICT,51347850822,MIA-FAR-TUL 2,737-900ER,https://www.airlines-manager.com/network/showline/47780462,https://www.airlines-manager.com/network/showflight/51347850822,https://www.airlines-manager.com/aircraft/show/110883160,9:00,15:59,320,"$446,634.00","$403,317.00"
MIA - ICT,51347850826,MIA-FAR-TUL 5,ERJ-175,https://www.airlines-manager.com/network/showline/47780462,https://www.airlines-manager.com/network/showflight/51347850826,https://www.airlines-manager.com/aircraft/show/87169421,11:00,18:14,112,"$212,343.00","$186,912.00"
MIA - ICT,51363387525,MIA-FAR-TUL 3,737-900ER,https://www.airlines-manager.com/network/showline/47780462,https://www.airlines-manager.com/network/showflight/51363387525,https://www.airlines-manager.com/aircraft/show/110883161,17:45,0:44,320,"$446,634.00","$403,317.00"
MIA - ICT,51374354712,MIA-FAR-TUL 4,737-900ER,https://www.airlines-manager.com/network/showline/47780462,https://www.airlines-manager.com/network/showflight/51374354712,https://www.airlines-manager.com/aircraft/show/110883162,22:45,5:44,320,"$446,634.00","$403,317.00"
MIA - IND,51335558454,MIA-AUS-PIT 5,ERJ-175,https://www.airlines-manager.com/network/showline/44971944,https://www.airlines-manager.com/network/showflight/51335558454,https://www.airlines-manager.com/aircraft/show/82323689,2:30,8:29,112,"$180,711.00","$157,023.00"
MIA - IND,51335558455,MIA-AUS-PIT 4,737-900ER,https://www.airlines-manager.com/network/showline/44971944,https://www.airlines-manager.com/network/showflight/51335558455,https://www.airlines-manager.com/aircraft/show/99920623,3:15,9:14,320,"$382,229.00","$340,810.00"
MIA - IND,51347850870,MIA-AUS-PIT 3,737-900ER,https://www.airlines-manager.com/network/showline/44971944,https://www.airlines-manager.com/network/showflight/51347850870,https://www.airlines-manager.com/aircraft/show/99920624,10:00,15:59,320,"$382,229.00","$340,810.00"
MIA - IND,51363387270,MIA-AUS-PIT 2,737-900ER,https://www.airlines-manager.com/network/showline/44971944,https://www.airlines-manager.com/network/showflight/51363387270,https://www.airlines-manager.com/aircraft/show/99920625,16:00,21:59,320,"$382,229.00","$340,810.00"
MIA - IND,51374354696,MIA-AUS-PIT 1,737-900ER,https://www.airlines-manager.com/network/showline/44971944,https://www.airlines-manager.com/network/showflight/51374354696,https://www.airlines-manager.com/aircraft/show/99920626,22:30,4:29,320,"$382,229.00","$340,810.00"
MIA - JAX,51335558518,MIA-COS-CVG 2,737-900ER,https://www.airlines-manager.com/network/showline/45553086,https://www.airlines-manager.com/network/showflight/51335558518,https://www.airlines-manager.com/aircraft/show/103684631,3:00,6:29,320,"$173,327.00","$144,288.00"
MIA - JAX,51347851119,MIA-COS-CVG 1,737-900ER,https://www.airlines-manager.com/network/showline/45553086,https://www.airlines-manager.com/network/showflight/51347851119,https://www.airlines-manager.com/aircraft/show/103684630,10:30,13:59,320,"$173,327.00","$144,288.00"
MIA - JAX,51355083372,MIA-COS-CVG 4,737-900ER,https://www.airlines-manager.com/network/showline/45553086,https://www.airlines-manager.com/network/showflight/51355083372,https://www.airlines-manager.com/aircraft/show/103365574,14:00,17:29,320,"$173,327.00","$144,288.00"
MIA - JAX,51363387624,MIA-COS-CVG 3,737-900ER,https://www.airlines-manager.com/network/showline/45553086,https://www.airlines-manager.com/network/showflight/51363387624,https://www.airlines-manager.com/aircraft/show/103684632,19:15,22:44,320,"$173,327.00","$144,288.00"
MIA - JAX,51370307147,MIA-ORD-BOI-JAX B,A319-100,https://www.airlines-manager.com/network/showline/45553086,https://www.airlines-manager.com/network/showflight/51370307147,https://www.airlines-manager.com/aircraft/show/106339154,22:15,1:44,198,"$131,647.00","$111,751.00"
MIA - JFK,51335558678,MIA-JFK-PHX 1,A321neo,https://www.airlines-manager.com/network/showline/42216500,https://www.airlines-manager.com/network/showflight/51335558678,https://www.airlines-manager.com/aircraft/show/105308264,5:45,11:59,338,"$428,222.00","$375,746.00"
MIA - JFK,51335558679,MIA-JFK-PHX 6,ERJ-175,https://www.airlines-manager.com/network/showline/42216500,https://www.airlines-manager.com/network/showflight/51335558679,https://www.airlines-manager.com/aircraft/show/82683137,6:45,12:59,112,"$186,800.00","$152,590.00"
MIA - JFK,51347850969,MIA-JFK-PHX 4,A321neo,https://www.airlines-manager.com/network/showline/42216500,https://www.airlines-manager.com/network/showflight/51347850969,https://www.airlines-manager.com/aircraft/show/105308267,10:00,16:14,338,"$428,222.00","$375,746.00"
MIA - JFK,51347850970,MIA-JFK-PHX 2,A321neo,https://www.airlines-manager.com/network/showline/42216500,https://www.airlines-manager.com/network/showflight/51347850970,https://www.airlines-manager.com/aircraft/show/105308265,12:00,18:14,338,"$428,222.00","$375,746.00"
MIA - JFK,51363387539,MIA-JFK-PHX 3,A321neo,https://www.airlines-manager.com/network/showline/42216500,https://www.airlines-manager.com/network/showflight/51363387539,https://www.airlines-manager.com/aircraft/show/105308266,18:00,0:14,338,"$428,222.00","$375,746.00"
MIA - JFK,51370307047,MIA-JFK-PHX 5,A321neo,https://www.airlines-manager.com/network/showline/42216500,https://www.airlines-manager.com/network/showflight/51370307047,https://www.airlines-manager.com/aircraft/show/105308268,20:45,2:59,338,"$428,222.00","$375,746.00"
MIA - JNB,51335558054,MIA 84A-5 E,747-400,https://www.airlines-manager.com/network/showline/42990947,https://www.airlines-manager.com/network/showflight/51335558054,https://www.airlines-manager.com/aircraft/show/93704215,0:00,6:44,1048,"$5,790,148.00","$5,356,516.00"
MIA - JNB,51355083217,MIA 84A-1 E,747-400,https://www.airlines-manager.com/network/showline/42990947,https://www.airlines-manager.com/network/showflight/51355083217,https://www.airlines-manager.com/aircraft/show/93686969,13:00,19:44,1048,"$5,790,148.00","$5,356,516.00"
MIA - LAS,51335558354,MIA-LAS-SEA 5,A321neo,https://www.airlines-manager.com/network/showline/42449486,https://www.airlines-manager.com/network/showflight/51335558354,https://www.airlines-manager.com/aircraft/show/105093929,1:30,11:59,338,"$716,938.00","$649,762.00"
MIA - LAS,51347850909,MIA-LAS-SEA 1,A321neo,https://www.airlines-manager.com/network/showline/42449486,https://www.airlines-manager.com/network/showflight/51347850909,https://www.airlines-manager.com/aircraft/show/105093925,10:00,20:29,338,"$716,938.00","$649,762.00"
MIA - LAS,51347850911,MIA-LAS-SEA 6 B,A319-100,https://www.airlines-manager.com/network/showline/42449486,https://www.airlines-manager.com/network/showflight/51347850911,https://www.airlines-manager.com/aircraft/show/113251304,12:00,22:29,198,"$497,086.00","$441,082.00"
MIA - LAS,51355083272,MIA-LAS-SEA 2,A321neo,https://www.airlines-manager.com/network/showline/42449486,https://www.airlines-manager.com/network/showflight/51355083272,https://www.airlines-manager.com/aircraft/show/105093926,13:00,23:29,338,"$716,938.00","$649,762.00"
MIA - LAS,51355083273,MIA-LAS-SEA 3,A321neo,https://www.airlines-manager.com/network/showline/42449486,https://www.airlines-manager.com/network/showflight/51355083273,https://www.airlines-manager.com/aircraft/show/105093927,15:00,1:29,338,"$716,938.00","$649,762.00"
MIA - LAS,51374354688,MIA-LAS-SEA 4,A321neo,https://www.airlines-manager.com/network/showline/42449486,https://www.airlines-manager.com/network/showflight/51374354688,https://www.airlines-manager.com/aircraft/show/105093928,22:30,8:59,338,"$716,938.00","$649,762.00"
MIA - LAX,51335558042,MIA-LAX-DEN 1,757-300,https://www.airlines-manager.com/network/showline/42216509,https://www.airlines-manager.com/network/showflight/51335558042,https://www.airlines-manager.com/aircraft/show/91126649,0:00,10:59,400,"$899,540.00","$806,068.00"
MIA - LAX,51335558043,MIA-LAX-DEN 2,757-300,https://www.airlines-manager.com/network/showline/42216509,https://www.airlines-manager.com/network/showflight/51335558043,https://www.airlines-manager.com/aircraft/show/91126650,2:00,12:59,400,"$899,540.00","$806,068.00"
MIA - LAX,51347851002,MIA-LAX-DEN 3,757-300,https://www.airlines-manager.com/network/showline/42216509,https://www.airlines-manager.com/network/showflight/51347851002,https://www.airlines-manager.com/aircraft/show/91126651,10:00,20:59,400,"$899,540.00","$806,068.00"
MIA - LAX,51347851003,MIA-LAX-DEN 5,757-300,https://www.airlines-manager.com/network/showline/42216509,https://www.airlines-manager.com/network/showflight/51347851003,https://www.airlines-manager.com/aircraft/show/91126653,11:00,21:59,400,"$899,540.00","$806,068.00"
MIA - LAX,51363387397,MIA-LAX-DEN 4,757-300,https://www.airlines-manager.com/network/showline/42216509,https://www.airlines-manager.com/network/showflight/51363387397,https://www.airlines-manager.com/aircraft/show/91126652,16:30,3:29,400,"$899,540.00","$806,068.00"
MIA - LIT,51335558436,MIA-SDF-PWM 1,A321-200,https://www.airlines-manager.com/network/showline/46376132,https://www.airlines-manager.com/network/showflight/51335558436,https://www.airlines-manager.com/aircraft/show/96692674,2:15,7:59,310,"$360,235.00","$327,848.00"
MIA - LIT,51335558437,MIA-SDF-PWM 5,ERJ-175,https://www.airlines-manager.com/network/showline/46376132,https://www.airlines-manager.com/network/showflight/51335558437,https://www.airlines-manager.com/aircraft/show/105601657,4:15,9:59,112,"$170,874.00","$149,799.00"
MIA - LIT,51335558438,MIA-SDF-PWM 4,A321-200,https://www.airlines-manager.com/network/showline/46376132,https://www.airlines-manager.com/network/showflight/51335558438,https://www.airlines-manager.com/aircraft/show/94886625,8:15,13:59,310,"$360,235.00","$327,848.00"
MIA - LIT,51355083427,MIA-SDF-PWM 3,A321-200,https://www.airlines-manager.com/network/showline/46376132,https://www.airlines-manager.com/network/showflight/51355083427,https://www.airlines-manager.com/aircraft/show/94886629,15:00,20:44,310,"$360,235.00","$327,848.00"
MIA - LIT,51370307103,MIA-SDF-PWM 2,A321-200,https://www.airlines-manager.com/network/showline/46376132,https://www.airlines-manager.com/network/showflight/51370307103,https://www.airlines-manager.com/aircraft/show/94886626,21:30,3:14,303,"$355,441.00","$323,235.00"
MIA - LOS,51335558705,MIA 84A-6 E,747-400,https://www.airlines-manager.com/network/showline/42959909,https://www.airlines-manager.com/network/showflight/51335558705,https://www.airlines-manager.com/aircraft/show/93731916,6:45,4:59,1048,"$4,100,644.00","$3,801,197.00"
MIA - LOS,51370306947,MIA 84A-2 E,747-400,https://www.airlines-manager.com/network/showline/42959909,https://www.airlines-manager.com/network/showflight/51370306947,https://www.airlines-manager.com/aircraft/show/93686968,19:45,17:59,1048,"$4,100,644.00","$3,801,197.00"
MIA - MBJ,51335558227,MIA-PUJ-BDA 4 S,A319-100,https://www.airlines-manager.com/network/showline/42193777,https://www.airlines-manager.com/network/showflight/51335558227,https://www.airlines-manager.com/aircraft/show/104034460,0:45,4:59,228,"$191,427.00","$170,101.00"
MIA - MBJ,51335558228,MIA-PUJ-BDA 5 S,A319-100,https://www.airlines-manager.com/network/showline/42193777,https://www.airlines-manager.com/network/showflight/51335558228,https://www.airlines-manager.com/aircraft/show/104034461,5:00,9:14,228,"$191,427.00","$170,101.00"
MIA - MBJ,51347850837,MIA CARGO 1,737-700,https://www.airlines-manager.com/network/showline/42193777,https://www.airlines-manager.com/network/showflight/51347850837,https://www.airlines-manager.com/aircraft/show/107577220,9:00,13:14,0,"$65,571.00","$47,483.00"
MIA - MBJ,51347850838,MIA-PUJ-BDA 3 S,A319-100,https://www.airlines-manager.com/network/showline/42193777,https://www.airlines-manager.com/network/showflight/51347850838,https://www.airlines-manager.com/aircraft/show/104034459,10:00,14:14,228,"$191,427.00","$170,101.00"
MIA - MBJ,51355083188,MIA-PUJ-BDA 1 S,A319-100,https://www.airlines-manager.com/network/showline/42193777,https://www.airlines-manager.com/network/showflight/51355083188,https://www.airlines-manager.com/aircraft/show/104034457,12:45,16:59,228,"$191,427.00","$170,101.00"
MIA - MBJ,51363387496,MIA-PUJ-BDA 2 S,A319-100,https://www.airlines-manager.com/network/showline/42193777,https://www.airlines-manager.com/network/showflight/51363387496,https://www.airlines-manager.com/aircraft/show/104034458,17:00,21:14,228,"$191,427.00","$170,101.00"
MIA - MBJ,51374354745,MIA-PUJ-BDA 6 S,A319-100,https://www.airlines-manager.com/network/showline/42193777,https://www.airlines-manager.com/network/showflight/51374354745,https://www.airlines-manager.com/aircraft/show/99326789,23:00,3:14,228,"$191,427.00","$170,101.00"
MIA - MCI,51335558196,MIA-ELP-MCI 3,737-900ER,https://www.airlines-manager.com/network/showline/46040757,https://www.airlines-manager.com/network/showflight/51335558196,https://www.airlines-manager.com/aircraft/show/91806232,0:45,7:44,320,"$445,993.00","$400,410.00"
MIA - MCI,51335558197,MIA-ELP-MCI 4,737-900ER,https://www.airlines-manager.com/network/showline/46040757,https://www.airlines-manager.com/network/showflight/51335558197,https://www.airlines-manager.com/aircraft/show/91806231,1:30,8:29,320,"$445,993.00","$400,410.00"
MIA - MCI,51347850918,MIA-ELP-MCI 2,737-900ER,https://www.airlines-manager.com/network/showline/46040757,https://www.airlines-manager.com/network/showflight/51347850918,https://www.airlines-manager.com/aircraft/show/91806235,10:00,16:59,320,"$445,993.00","$400,410.00"
MIA - MCI,51363387584,MIA-ELP-MCI 1,737-900ER,https://www.airlines-manager.com/network/showline/46040757,https://www.airlines-manager.com/network/showflight/51363387584,https://www.airlines-manager.com/aircraft/show/91806234,18:30,1:29,320,"$445,993.00","$400,410.00"
MIA - MCI,51363387585,MIA-ELP-MCI 5 B,A319-100,https://www.airlines-manager.com/network/showline/46040757,https://www.airlines-manager.com/network/showflight/51363387585,https://www.airlines-manager.com/aircraft/show/105093924,19:00,1:59,198,"$337,110.00","$304,718.00"
MIA - MCO,51335558129,MIA-BDL-SAT 2,737-900ER,https://www.airlines-manager.com/network/showline/46909528,https://www.airlines-manager.com/network/showflight/51335558129,https://www.airlines-manager.com/aircraft/show/107763565,0:15,2:59,320,"$121,880.00","$84,658.00"
MIA - MCO,51335558130,MIA-BDL-SAT 5,ERJ-175,https://www.airlines-manager.com/network/showline/46909528,https://www.airlines-manager.com/network/showflight/51335558130,https://www.airlines-manager.com/aircraft/show/107467213,4:00,6:44,112,"$54,775.00","$35,603.00"
MIA - MCO,51335558131,MIA-BOI-BNA 5,ERJ-175,https://www.airlines-manager.com/network/showline/46909528,https://www.airlines-manager.com/network/showflight/51335558131,https://www.airlines-manager.com/aircraft/show/103534663,6:00,8:44,112,"$54,775.00","$35,603.00"
MIA - MCO,51347850845,MIA-BOI-BNA 5,ERJ-175,https://www.airlines-manager.com/network/showline/46909528,https://www.airlines-manager.com/network/showflight/51347850845,https://www.airlines-manager.com/aircraft/show/103534663,9:15,11:59,112,"$54,775.00","$35,603.00"
MIA - MCO,51347850846,MIA-BDL-SAT 1,737-900ER,https://www.airlines-manager.com/network/showline/46909528,https://www.airlines-manager.com/network/showflight/51347850846,https://www.airlines-manager.com/aircraft/show/107763566,10:00,12:44,320,"$121,880.00","$84,658.00"
MIA - MCO,51347850847,MIA-BDL-SAT 4,737-900ER,https://www.airlines-manager.com/network/showline/46909528,https://www.airlines-manager.com/network/showflight/51347850847,https://www.airlines-manager.com/aircraft/show/107763561,11:00,13:44,320,"$121,880.00","$84,658.00"
MIA - MCO,51363387529,MIA-BDL-SAT 3,737-900ER,https://www.airlines-manager.com/network/showline/46909528,https://www.airlines-manager.com/network/showflight/51363387529,https://www.airlines-manager.com/aircraft/show/107763562,17:45,20:29,320,"$121,880.00","$84,658.00"
MIA - MEM,51335558089,MIA-MKE-CMH 5 B,A319-100,https://www.airlines-manager.com/network/showline/46160502,https://www.airlines-manager.com/network/showflight/51335558089,https://www.airlines-manager.com/aircraft/show/110582842,0:00,5:29,198,"$261,796.00","$234,027.00"
MIA - MEM,51335558090,MIA-MKE-CMH 1,737-900ER,https://www.airlines-manager.com/network/showline/46160502,https://www.airlines-manager.com/network/showflight/51335558090,https://www.airlines-manager.com/aircraft/show/88239556,3:00,8:29,320,"$344,721.00","$305,132.00"
MIA - MEM,51335558091,MIA-MKE-CMH 4,737-900ER,https://www.airlines-manager.com/network/showline/46160502,https://www.airlines-manager.com/network/showflight/51335558091,https://www.airlines-manager.com/aircraft/show/88494374,7:45,13:14,320,"$344,721.00","$305,132.00"
MIA - MEM,51355083333,MIA-MKE-CMH 3,737-900ER,https://www.airlines-manager.com/network/showline/46160502,https://www.airlines-manager.com/network/showflight/51355083333,https://www.airlines-manager.com/aircraft/show/88494378,14:00,19:29,320,"$344,721.00","$305,132.00"
MIA - MEM,51370306956,MIA-MKE-CMH 2,737-900ER,https://www.airlines-manager.com/network/showline/46160502,https://www.airlines-manager.com/network/showflight/51370306956,https://www.airlines-manager.com/aircraft/show/91806233,20:00,1:29,320,"$344,721.00","$305,132.00"
MIA - MKE,51335558140,MIA-MKE-CMH 3,737-900ER,https://www.airlines-manager.com/network/showline/46201956,https://www.airlines-manager.com/network/showflight/51335558140,https://www.airlines-manager.com/aircraft/show/88494378,0:15,7:14,320,"$446,017.00","$401,890.00"
MIA - MKE,51335558141,MIA-MKE-CMH 2,737-900ER,https://www.airlines-manager.com/network/showline/46201956,https://www.airlines-manager.com/network/showflight/51335558141,https://www.airlines-manager.com/aircraft/show/91806233,6:15,13:14,320,"$446,017.00","$401,890.00"
MIA - MKE,51347851158,MIA-MKE-CMH 5 B,A319-100,https://www.airlines-manager.com/network/showline/46201956,https://www.airlines-manager.com/network/showflight/51347851158,https://www.airlines-manager.com/aircraft/show/110582842,11:00,17:59,198,"$337,304.00","$305,869.00"
MIA - MKE,51355083336,MIA-MKE-CMH 1,737-900ER,https://www.airlines-manager.com/network/showline/46201956,https://www.airlines-manager.com/network/showflight/51355083336,https://www.airlines-manager.com/aircraft/show/88239556,14:00,20:59,320,"$446,017.00","$401,890.00"
MIA - MKE,51363387590,MIA-MKE-CMH 4,737-900ER,https://www.airlines-manager.com/network/showline/46201956,https://www.airlines-manager.com/network/showflight/51363387590,https://www.airlines-manager.com/aircraft/show/88494374,18:45,1:44,320,"$446,017.00","$401,890.00"
MIA - MSO,51335558714,MIA-FAT-MSO 2,737-900ER,https://www.airlines-manager.com/network/showline/48487660,https://www.airlines-manager.com/network/showflight/51335558714,https://www.airlines-manager.com/aircraft/show/113101231,7:45,18:59,320,"$697,028.00","$638,049.00"
MIA - MSO,51347851177,MIA-FAT-MSO 3,737-900ER,https://www.airlines-manager.com/network/showline/48487660,https://www.airlines-manager.com/network/showflight/51347851177,https://www.airlines-manager.com/aircraft/show/113101234,11:00,22:14,320,"$697,028.00","$638,049.00"
MIA - MSO,51370306974,MIA-FAT-MSO 4,737-900ER,https://www.airlines-manager.com/network/showline/48487660,https://www.airlines-manager.com/network/showflight/51370306974,https://www.airlines-manager.com/aircraft/show/113101232,20:00,7:14,320,"$697,028.00","$638,049.00"
MIA - MSO,51374354694,MIA-FAT-MSO 1,737-900ER,https://www.airlines-manager.com/network/showline/48487660,https://www.airlines-manager.com/network/showflight/51374354694,https://www.airlines-manager.com/aircraft/show/113101229,22:30,9:44,320,"$697,028.00","$638,049.00"
MIA - MSP,51335558419,MIA-JFK-PHX 4,A321neo,https://www.airlines-manager.com/network/showline/42288078,https://www.airlines-manager.com/network/showflight/51335558419,https://www.airlines-manager.com/aircraft/show/105308267,2:00,9:59,338,"$540,944.00","$492,262.00"
MIA - MSP,51335558420,MIA-JFK-PHX 5,A321neo,https://www.airlines-manager.com/network/showline/42288078,https://www.airlines-manager.com/network/showflight/51335558420,https://www.airlines-manager.com/aircraft/show/105308268,3:00,10:59,338,"$540,944.00","$492,262.00"
MIA - MSP,51347850972,MIA-JFK-PHX 3,A321neo,https://www.airlines-manager.com/network/showline/42288078,https://www.airlines-manager.com/network/showflight/51347850972,https://www.airlines-manager.com/aircraft/show/105308266,10:00,17:59,338,"$540,944.00","$492,262.00"
MIA - MSP,51355083259,MIA-JFK-PHX 6,ERJ-175,https://www.airlines-manager.com/network/showline/42288078,https://www.airlines-manager.com/network/showflight/51355083259,https://www.airlines-manager.com/aircraft/show/82683137,13:00,20:59,112,"$235,728.00","$202,770.00"
MIA - MSP,51363387566,MIA-JFK-PHX 2,A321neo,https://www.airlines-manager.com/network/showline/42288078,https://www.airlines-manager.com/network/showflight/51363387566,https://www.airlines-manager.com/aircraft/show/105308265,18:15,2:14,338,"$540,944.00","$492,262.00"
MIA - MSP,51370307109,MIA-JFK-PHX 1,A321neo,https://www.airlines-manager.com/network/showline/42288078,https://www.airlines-manager.com/network/showflight/51370307109,https://www.airlines-manager.com/aircraft/show/105308264,21:45,5:44,338,"$540,944.00","$492,262.00"
MIA - MSY,51335558324,MIA-MKE-CMH 2,737-900ER,https://www.airlines-manager.com/network/showline/46160486,https://www.airlines-manager.com/network/showflight/51335558324,https://www.airlines-manager.com/aircraft/show/91806233,1:30,6:14,320,"$299,623.00","$264,500.00"
MIA - MSY,51335558325,MIA-MKE-CMH 5 B,A319-100,https://www.airlines-manager.com/network/showline/46160486,https://www.airlines-manager.com/network/showflight/51335558325,https://www.airlines-manager.com/aircraft/show/110582842,5:30,10:14,198,"$228,460.00","$203,967.00"
MIA - MSY,51335558326,MIA-MKE-CMH 1,737-900ER,https://www.airlines-manager.com/network/showline/46160486,https://www.airlines-manager.com/network/showflight/51335558326,https://www.airlines-manager.com/aircraft/show/88239556,8:30,13:14,320,"$299,623.00","$264,500.00"
MIA - MSY,51355083344,MIA-MKE-CMH 4,737-900ER,https://www.airlines-manager.com/network/showline/46160486,https://www.airlines-manager.com/network/showflight/51355083344,https://www.airlines-manager.com/aircraft/show/88494374,14:00,18:44,320,"$299,623.00","$264,500.00"
MIA - MSY,51363387635,MIA-MKE-CMH 3,737-900ER,https://www.airlines-manager.com/network/showline/46160486,https://www.airlines-manager.com/network/showflight/51363387635,https://www.airlines-manager.com/aircraft/show/88494378,19:30,0:14,320,"$299,623.00","$264,500.00"
MIA - NAS,51335558445,MIA-PUJ-BDA 5 S,A319-100,https://www.airlines-manager.com/network/showline/42193695,https://www.airlines-manager.com/network/showflight/51335558445,https://www.airlines-manager.com/aircraft/show/104034461,2:15,4:59,228,"$78,388.00","$60,417.00"
MIA - NAS,51335558446,MIA-PUJ-BDA 6 S,A319-100,https://www.airlines-manager.com/network/showline/42193695,https://www.airlines-manager.com/network/showflight/51335558446,https://www.airlines-manager.com/aircraft/show/99326789,7:30,10:14,228,"$78,388.00","$60,417.00"
MIA - NAS,51347850888,MIA-PUJ-BDA 1 S,A319-100,https://www.airlines-manager.com/network/showline/42193695,https://www.airlines-manager.com/network/showflight/51347850888,https://www.airlines-manager.com/aircraft/show/104034457,10:00,12:44,228,"$78,388.00","$60,417.00"
MIA - NAS,51355083309,MIA CARGO 1,737-700,https://www.airlines-manager.com/network/showline/42193695,https://www.airlines-manager.com/network/showflight/51355083309,https://www.airlines-manager.com/aircraft/show/107577220,13:15,15:59,0,"$33,882.00","$19,673.00"
MIA - NAS,51355083310,MIA-PUJ-BDA 2 S,A319-100,https://www.airlines-manager.com/network/showline/42193695,https://www.airlines-manager.com/network/showflight/51355083310,https://www.airlines-manager.com/aircraft/show/104034458,14:15,16:59,228,"$78,388.00","$60,417.00"
MIA - NAS,51363387579,MIA-PUJ-BDA 3 S,A319-100,https://www.airlines-manager.com/network/showline/42193695,https://www.airlines-manager.com/network/showflight/51363387579,https://www.airlines-manager.com/aircraft/show/104034459,18:30,21:14,228,"$78,388.00","$60,417.00"
MIA - NAS,51370307121,MIA-PUJ-BDA 4 S,A319-100,https://www.airlines-manager.com/network/showline/42193695,https://www.airlines-manager.com/network/showflight/51370307121,https://www.airlines-manager.com/aircraft/show/104034460,22:00,0:44,228,"$78,388.00","$60,417.00"
MIA - OAK,51335558248,MIA-OAK-SMF 5,737-900ER,https://www.airlines-manager.com/network/showline/46079209,https://www.airlines-manager.com/network/showflight/51335558248,https://www.airlines-manager.com/aircraft/show/91198617,1:00,12:59,320,"$736,351.00","$670,459.00"
MIA - OAK,51347851168,MIA-OAK-SMF 1,737-900ER,https://www.airlines-manager.com/network/showline/46079209,https://www.airlines-manager.com/network/showflight/51347851168,https://www.airlines-manager.com/aircraft/show/91198615,11:00,22:59,320,"$736,351.00","$670,459.00"
MIA - OAK,51355083281,MIA-OAK-SMF 2,737-900ER,https://www.airlines-manager.com/network/showline/46079209,https://www.airlines-manager.com/network/showflight/51355083281,https://www.airlines-manager.com/aircraft/show/91198619,13:00,0:59,320,"$736,351.00","$670,459.00"
MIA - OAK,51355083282,MIA-OAK-SMF 3,737-900ER,https://www.airlines-manager.com/network/showline/46079209,https://www.airlines-manager.com/network/showflight/51355083282,https://www.airlines-manager.com/aircraft/show/91198616,15:00,2:59,320,"$736,351.00","$670,459.00"
MIA - OAK,51374354729,MIA-OAK-SMF 4,737-900ER,https://www.airlines-manager.com/network/showline/46079209,https://www.airlines-manager.com/network/showflight/51374354729,https://www.airlines-manager.com/aircraft/show/91198618,23:00,10:59,320,"$736,351.00","$670,459.00"
MIA - OKC,51335558382,MIA-OKC-FSD 3,A321-200,https://www.airlines-manager.com/network/showline/47780556,https://www.airlines-manager.com/network/showflight/51335558382,https://www.airlines-manager.com/aircraft/show/110883112,1:45,8:29,310,"$429,682.00","$392,051.00"
MIA - OKC,51335558383,MIA-OKC-FSD 2,A321-200,https://www.airlines-manager.com/network/showline/47780556,https://www.airlines-manager.com/network/showflight/51335558383,https://www.airlines-manager.com/aircraft/show/110883111,4:00,10:44,310,"$429,682.00","$392,051.00"
MIA - OKC,51347850938,MIA-OKC-FSD 5,ERJ-175,https://www.airlines-manager.com/network/showline/47780556,https://www.airlines-manager.com/network/showflight/51347850938,https://www.airlines-manager.com/aircraft/show/104353572,10:00,16:44,112,"$202,107.00","$177,396.00"
MIA - OKC,51355083219,MIA-OKC-FSD 1,A321-200,https://www.airlines-manager.com/network/showline/47780556,https://www.airlines-manager.com/network/showflight/51355083219,https://www.airlines-manager.com/aircraft/show/110883110,13:00,19:44,310,"$429,682.00","$392,051.00"
MIA - OKC,51355083220,MIA-OKC-FSD 4,A321-200,https://www.airlines-manager.com/network/showline/47780556,https://www.airlines-manager.com/network/showflight/51355083220,https://www.airlines-manager.com/aircraft/show/110883113,14:45,21:29,310,"$429,682.00","$392,051.00"
MIA - OMA,51335558449,MIA-BOI-BNA 1,737-900ER,https://www.airlines-manager.com/network/showline/45701875,https://www.airlines-manager.com/network/showflight/51335558449,https://www.airlines-manager.com/aircraft/show/104133006,2:30,9:59,320,"$476,720.00","$431,642.00"
MIA - OMA,51335558450,MIA-BOI-BNA 4,737-900ER,https://www.airlines-manager.com/network/showline/45701875,https://www.airlines-manager.com/network/showflight/51335558450,https://www.airlines-manager.com/aircraft/show/103775657,6:30,13:59,320,"$476,720.00","$431,642.00"
MIA - OMA,51347850901,MIA-BOI-BNA 3,737-900ER,https://www.airlines-manager.com/network/showline/45701875,https://www.airlines-manager.com/network/showflight/51347850901,https://www.airlines-manager.com/aircraft/show/104020880,10:00,17:29,320,"$476,720.00","$431,642.00"
MIA - OMA,51363387212,MIA-BOI-BNA 2,737-900ER,https://www.airlines-manager.com/network/showline/45701875,https://www.airlines-manager.com/network/showflight/51363387212,https://www.airlines-manager.com/aircraft/show/104022609,15:15,22:44,320,"$476,720.00","$431,642.00"
MIA - OMA,51363387213,MIA-BOI-BNA 5,ERJ-175,https://www.airlines-manager.com/network/showline/45701875,https://www.airlines-manager.com/network/showflight/51363387213,https://www.airlines-manager.com/aircraft/show/103534663,17:15,0:44,112,"$225,148.00","$198,549.00"
MIA - ONT,51335558190,MIA-RNO-ONT 2,737-900ER,https://www.airlines-manager.com/network/showline/46280191,https://www.airlines-manager.com/network/showflight/51335558190,https://www.airlines-manager.com/aircraft/show/90489722,0:30,11:29,320,"$690,092.00","$628,484.00"
MIA - ONT,51335558191,MIA-RNO-ONT 3,737-900ER,https://www.airlines-manager.com/network/showline/46280191,https://www.airlines-manager.com/network/showflight/51335558191,https://www.airlines-manager.com/aircraft/show/86238756,2:30,13:29,320,"$690,092.00","$628,484.00"
MIA - ONT,51347851197,MIA-RNO-ONT 4,737-900ER,https://www.airlines-manager.com/network/showline/46280191,https://www.airlines-manager.com/network/showflight/51347851197,https://www.airlines-manager.com/aircraft/show/90489723,11:00,21:59,320,"$690,092.00","$628,484.00"
MIA - ONT,51355083371,MIA-RNO-ONT 5 B,A319-100,https://www.airlines-manager.com/network/showline/46280191,https://www.airlines-manager.com/network/showflight/51355083371,https://www.airlines-manager.com/aircraft/show/105223010,14:00,0:59,198,"$518,326.00","$473,586.00"
MIA - ONT,51374354678,MIA-RNO-ONT 1,737-900ER,https://www.airlines-manager.com/network/showline/46280191,https://www.airlines-manager.com/network/showflight/51374354678,https://www.airlines-manager.com/aircraft/show/86238755,22:30,9:29,320,"$690,092.00","$628,484.00"
MIA - ORD,51335558525,MIA-ORD-DFW 1,A321-200,https://www.airlines-manager.com/network/showline/42216504,https://www.airlines-manager.com/network/showflight/51335558525,https://www.airlines-manager.com/aircraft/show/91600935,3:15,9:59,310,"$423,389.00","$363,584.00"
MIA - ORD,51335558526,MIA-ORD-DFW 4,A321-200,https://www.airlines-manager.com/network/showline/42216504,https://www.airlines-manager.com/network/showflight/51335558526,https://www.airlines-manager.com/aircraft/show/91600938,4:15,10:59,310,"$423,389.00","$363,584.00"
MIA - ORD,51347850829,MIA-ORD-DFW 6,ERJ-175,https://www.airlines-manager.com/network/showline/42216504,https://www.airlines-manager.com/network/showflight/51347850829,https://www.airlines-manager.com/aircraft/show/82543123,9:00,15:44,112,"$198,920.00","$160,943.00"
MIA - ORD,51347850832,MIA-ORD-DFW 5,A321-200,https://www.airlines-manager.com/network/showline/42216504,https://www.airlines-manager.com/network/showflight/51347850832,https://www.airlines-manager.com/aircraft/show/91600937,11:00,17:44,310,"$423,389.00","$363,584.00"
MIA - ORD,51355083414,MIA-ORD-DFW 3,A321-200,https://www.airlines-manager.com/network/showline/42216504,https://www.airlines-manager.com/network/showflight/51355083414,https://www.airlines-manager.com/aircraft/show/91600939,14:45,21:29,310,"$423,389.00","$363,584.00"
MIA - ORD,51363387225,MIA-ORD-BOI-JAX B,A319-100,https://www.airlines-manager.com/network/showline/42216504,https://www.airlines-manager.com/network/showflight/51363387225,https://www.airlines-manager.com/aircraft/show/106339154,15:30,22:14,198,"$319,346.00","$271,450.00"
MIA - ORD,51370307045,MIA-ORD-DFW 2,A321-200,https://www.airlines-manager.com/network/showline/42216504,https://www.airlines-manager.com/network/showflight/51370307045,https://www.airlines-manager.com/aircraft/show/91600936,20:45,3:29,310,"$423,389.00","$363,584.00"
MIA - PDX,51347850944,MIA-PDX-DTW 1,737-900ER,https://www.airlines-manager.com/network/showline/44322115,https://www.airlines-manager.com/network/showflight/51347850944,https://www.airlines-manager.com/aircraft/show/89943715,10:00,22:29,320,"$769,986.00","$699,669.00"
MIA - PDX,51355083250,MIA-PDX-DTW 3,737-900ER,https://www.airlines-manager.com/network/showline/44322115,https://www.airlines-manager.com/network/showflight/51355083250,https://www.airlines-manager.com/aircraft/show/89943713,13:00,1:29,320,"$769,986.00","$699,669.00"
MIA - PDX,51355083251,MIA-PDX-DTW 4,737-900ER,https://www.airlines-manager.com/network/showline/44322115,https://www.airlines-manager.com/network/showflight/51355083251,https://www.airlines-manager.com/aircraft/show/89943712,14:00,2:29,320,"$769,986.00","$699,669.00"
MIA - PDX,51363387626,MIA-PDX-DTW 2,737-900ER,https://www.airlines-manager.com/network/showline/44322115,https://www.airlines-manager.com/network/showflight/51363387626,https://www.airlines-manager.com/aircraft/show/89943714,19:30,7:59,320,"$769,986.00","$699,669.00"
MIA - PDX,51374354768,MIA-PDX-DTW 5,737-900ER,https://www.airlines-manager.com/network/showline/44322115,https://www.airlines-manager.com/network/showflight/51374354768,https://www.airlines-manager.com/aircraft/show/89943711,23:30,11:59,320,"$769,986.00","$699,669.00"
MIA - PHL,51335558591,MIA-ORD-DFW 3,A321-200,https://www.airlines-manager.com/network/showline/42384835,https://www.airlines-manager.com/network/showflight/51335558591,https://www.airlines-manager.com/aircraft/show/91600939,4:00,9:59,310,"$379,365.00","$337,590.00"
MIA - PHL,51335558592,MIA-ORD-DFW 5,A321-200,https://www.airlines-manager.com/network/showline/42384835,https://www.airlines-manager.com/network/showflight/51335558592,https://www.airlines-manager.com/aircraft/show/91600937,5:00,10:59,310,"$379,365.00","$337,590.00"
MIA - PHL,51347850932,MIA-ORD-DFW 2,A321-200,https://www.airlines-manager.com/network/showline/42384835,https://www.airlines-manager.com/network/showflight/51347850932,https://www.airlines-manager.com/aircraft/show/91600936,10:00,15:59,310,"$379,365.00","$337,590.00"
MIA - PHL,51363387385,MIA-ORD-DFW 1,A321-200,https://www.airlines-manager.com/network/showline/42384835,https://www.airlines-manager.com/network/showflight/51363387385,https://www.airlines-manager.com/aircraft/show/91600935,16:30,22:29,310,"$379,365.00","$337,590.00"
MIA - PHL,51363387386,MIA-ORD-DFW 4,A321-200,https://www.airlines-manager.com/network/showline/42384835,https://www.airlines-manager.com/network/showflight/51363387386,https://www.airlines-manager.com/aircraft/show/91600938,17:30,23:29,310,"$379,365.00","$337,590.00"
MIA - PHL,51370307146,MIA-ORD-DFW 6,ERJ-175,https://www.airlines-manager.com/network/showline/42384835,https://www.airlines-manager.com/network/showflight/51370307146,https://www.airlines-manager.com/aircraft/show/82543123,22:15,4:14,112,"$179,338.00","$152,500.00"
MIA - PHX,51335558114,MIA-JFK-PHX 3,A321neo,https://www.airlines-manager.com/network/showline/42288076,https://www.airlines-manager.com/network/showflight/51335558114,https://www.airlines-manager.com/aircraft/show/105308266,0:15,9:59,338,"$669,633.00","$610,928.00"
MIA - PHX,51335558115,MIA-JFK-PHX 2,A321neo,https://www.airlines-manager.com/network/showline/42288076,https://www.airlines-manager.com/network/showflight/51335558115,https://www.airlines-manager.com/aircraft/show/105308265,2:15,11:59,338,"$669,633.00","$610,928.00"
MIA - PHX,51347851169,MIA-JFK-PHX 5,A321neo,https://www.airlines-manager.com/network/showline/42288076,https://www.airlines-manager.com/network/showflight/51347851169,https://www.airlines-manager.com/aircraft/show/105308268,11:00,20:44,338,"$669,633.00","$610,928.00"
MIA - PHX,51347851170,MIA-JFK-PHX 1,A321neo,https://www.airlines-manager.com/network/showline/42288076,https://www.airlines-manager.com/network/showflight/51347851170,https://www.airlines-manager.com/aircraft/show/105308264,12:00,21:44,338,"$669,633.00","$610,928.00"
MIA - PHX,51363387357,MIA-JFK-PHX 4,A321neo,https://www.airlines-manager.com/network/showline/42288076,https://www.airlines-manager.com/network/showflight/51363387357,https://www.airlines-manager.com/aircraft/show/105308267,16:15,1:59,338,"$669,633.00","$610,928.00"
MIA - PHX,51370307063,MIA-JFK-PHX 6,ERJ-175,https://www.airlines-manager.com/network/showline/42288076,https://www.airlines-manager.com/network/showflight/51370307063,https://www.airlines-manager.com/aircraft/show/82683137,21:00,6:44,112,"$289,734.00","$249,597.00"
MIA - PIT,51335558535,MIA-AUS-PIT 3,737-900ER,https://www.airlines-manager.com/network/showline/44971957,https://www.airlines-manager.com/network/showflight/51335558535,https://www.airlines-manager.com/aircraft/show/99920624,3:15,9:14,320,"$380,890.00","$339,214.00"
MIA - PIT,51347850869,MIA-AUS-PIT 2,737-900ER,https://www.airlines-manager.com/network/showline/44971957,https://www.airlines-manager.com/network/showflight/51347850869,https://www.airlines-manager.com/aircraft/show/99920625,10:00,15:59,320,"$380,890.00","$339,214.00"
MIA - PIT,51363387369,MIA-AUS-PIT 1,737-900ER,https://www.airlines-manager.com/network/showline/44971957,https://www.airlines-manager.com/network/showflight/51363387369,https://www.airlines-manager.com/aircraft/show/99920626,16:30,22:29,320,"$380,890.00","$339,214.00"
MIA - PIT,51370307015,MIA-AUS-PIT 5,ERJ-175,https://www.airlines-manager.com/network/showline/44971957,https://www.airlines-manager.com/network/showflight/51370307015,https://www.airlines-manager.com/aircraft/show/82323689,20:30,2:29,112,"$180,066.00","$156,270.00"
MIA - PIT,51370307016,MIA-AUS-PIT 4,737-900ER,https://www.airlines-manager.com/network/showline/44971957,https://www.airlines-manager.com/network/showflight/51370307016,https://www.airlines-manager.com/aircraft/show/99920623,21:15,3:14,320,"$380,890.00","$339,214.00"
MIA - PLS,51335558544,MIA-PUJ-BDA 6 S,A319-100,https://www.airlines-manager.com/network/showline/42193793,https://www.airlines-manager.com/network/showflight/51335558544,https://www.airlines-manager.com/aircraft/show/99326789,3:15,7:29,228,"$205,163.00","$184,070.00"
MIA - PLS,51335558545,MIA-PUJ-BDA 4 S,A319-100,https://www.airlines-manager.com/network/showline/42193793,https://www.airlines-manager.com/network/showflight/51335558545,https://www.airlines-manager.com/aircraft/show/104034460,5:00,9:14,228,"$205,163.00","$184,070.00"
MIA - PLS,51347850890,MIA-PUJ-BDA 2 S,A319-100,https://www.airlines-manager.com/network/showline/42193793,https://www.airlines-manager.com/network/showflight/51347850890,https://www.airlines-manager.com/aircraft/show/104034458,10:00,14:14,228,"$205,163.00","$184,070.00"
MIA - PLS,51355083405,MIA-PUJ-BDA 3 S,A319-100,https://www.airlines-manager.com/network/showline/42193793,https://www.airlines-manager.com/network/showflight/51355083405,https://www.airlines-manager.com/aircraft/show/104034459,14:15,18:29,228,"$205,163.00","$184,070.00"
MIA - PLS,51363387498,MIA-PUJ-BDA 1 S,A319-100,https://www.airlines-manager.com/network/showline/42193793,https://www.airlines-manager.com/network/showflight/51363387498,https://www.airlines-manager.com/aircraft/show/104034457,17:00,21:14,228,"$205,163.00","$184,070.00"
MIA - PLS,51370307136,MIA-PUJ-BDA 5 S,A319-100,https://www.airlines-manager.com/network/showline/42193793,https://www.airlines-manager.com/network/showflight/51370307136,https://www.airlines-manager.com/aircraft/show/104034461,22:00,2:14,228,"$205,163.00","$184,070.00"
MIA - POS,51355083178,MIA 84B-2 E2,777-300,https://www.airlines-manager.com/network/showline/46538394,https://www.airlines-manager.com/network/showflight/51355083178,https://www.airlines-manager.com/aircraft/show/106676226,12:30,20:29,962,"$1,334,700.00","$1,217,593.00"
MIA - POS,51363387330,MIA 84B-7 E2,777-300,https://www.airlines-manager.com/network/showline/46538394,https://www.airlines-manager.com/network/showflight/51363387330,https://www.airlines-manager.com/aircraft/show/106676231,16:00,23:59,728,"$1,099,431.00","$995,164.00"
MIA - PUJ,51335558551,MIA-PUJ-BDA 2 S,A319-100,https://www.airlines-manager.com/network/showline/42193830,https://www.airlines-manager.com/network/showflight/51335558551,https://www.airlines-manager.com/aircraft/show/104034458,3:30,9:14,228,"$275,428.00","$248,808.00"
MIA - PUJ,51347850883,MIA-PUJ-BDA 5 S,A319-100,https://www.airlines-manager.com/network/showline/42193830,https://www.airlines-manager.com/network/showflight/51347850883,https://www.airlines-manager.com/aircraft/show/104034461,10:00,15:44,228,"$275,428.00","$248,808.00"
MIA - PUJ,51363387282,MIA CARGO 1,737-700,https://www.airlines-manager.com/network/showline/42193830,https://www.airlines-manager.com/network/showflight/51363387282,https://www.airlines-manager.com/aircraft/show/107577220,16:00,21:44,0,"$94,547.00","$70,952.00"
MIA - PUJ,51363387283,MIA-PUJ-BDA 4 S,A319-100,https://www.airlines-manager.com/network/showline/42193830,https://www.airlines-manager.com/network/showflight/51363387283,https://www.airlines-manager.com/aircraft/show/104034460,16:15,21:59,228,"$275,428.00","$248,808.00"
MIA - PUJ,51363387284,MIA-PUJ-BDA 6 S,A319-100,https://www.airlines-manager.com/network/showline/42193830,https://www.airlines-manager.com/network/showflight/51363387284,https://www.airlines-manager.com/aircraft/show/99326789,17:15,22:59,228,"$275,428.00","$248,808.00"
MIA - PUJ,51370307079,MIA-PUJ-BDA 1 S,A319-100,https://www.airlines-manager.com/network/showline/42193830,https://www.airlines-manager.com/network/showflight/51370307079,https://www.airlines-manager.com/aircraft/show/104034457,21:15,2:59,228,"$275,428.00","$248,808.00"
MIA - PUJ,51370307080,MIA-PUJ-BDA 3 S,A319-100,https://www.airlines-manager.com/network/showline/42193830,https://www.airlines-manager.com/network/showflight/51370307080,https://www.airlines-manager.com/aircraft/show/104034459,22:00,3:44,228,"$275,428.00","$248,808.00"
MIA - PVD,51335558303,MIA-BUR-PVD 3,A321-200,https://www.airlines-manager.com/network/showline/47218382,https://www.airlines-manager.com/network/showflight/51335558303,https://www.airlines-manager.com/aircraft/show/108834805,1:15,7:59,310,"$425,198.00","$388,969.00"
MIA - PVD,51335558304,MIA-BUR-PVD 5 B,A319-100,https://www.airlines-manager.com/network/showline/47218382,https://www.airlines-manager.com/network/showflight/51335558304,https://www.airlines-manager.com/aircraft/show/108834807,7:15,13:59,198,"$320,950.00","$291,915.00"
MIA - PVD,51347851183,MIA-BUR-PVD 2,A321-200,https://www.airlines-manager.com/network/showline/47218382,https://www.airlines-manager.com/network/showflight/51347851183,https://www.airlines-manager.com/aircraft/show/108834804,11:00,17:44,310,"$425,198.00","$388,969.00"
MIA - PVD,51363387463,MIA-BUR-PVD 4,A321-200,https://www.airlines-manager.com/network/showline/47218382,https://www.airlines-manager.com/network/showflight/51363387463,https://www.airlines-manager.com/aircraft/show/108834806,17:00,23:44,310,"$425,198.00","$388,969.00"
MIA - PVD,51370307138,MIA-BUR-PVD 1,A321-200,https://www.airlines-manager.com/network/showline/47218382,https://www.airlines-manager.com/network/showflight/51370307138,https://www.airlines-manager.com/aircraft/show/108834803,22:15,4:59,310,"$425,198.00","$388,969.00"
MIA - PWM,51335558712,MIA-SDF-PWM 3,A321-200,https://www.airlines-manager.com/network/showline/46376143,https://www.airlines-manager.com/network/showflight/51335558712,https://www.airlines-manager.com/aircraft/show/94886629,7:30,14:59,310,"$465,418.00","$427,494.00"
MIA - PWM,51355083362,MIA-SDF-PWM 2,A321-200,https://www.airlines-manager.com/network/showline/46376143,https://www.airlines-manager.com/network/showflight/51355083362,https://www.airlines-manager.com/aircraft/show/94886626,14:00,21:29,310,"$465,418.00","$427,494.00"
MIA - PWM,51363387596,MIA-SDF-PWM 1,A321-200,https://www.airlines-manager.com/network/showline/46376143,https://www.airlines-manager.com/network/showflight/51363387596,https://www.airlines-manager.com/aircraft/show/96692674,18:45,2:14,310,"$465,418.00","$427,494.00"
MIA - PWM,51370307036,MIA-SDF-PWM 5,ERJ-175,https://www.airlines-manager.com/network/showline/46376143,https://www.airlines-manager.com/network/showflight/51370307036,https://www.airlines-manager.com/aircraft/show/105601657,20:45,4:14,112,"$219,801.00","$194,681.00"
MIA - PWM,51374354789,MIA-SDF-PWM 4,A321-200,https://www.airlines-manager.com/network/showline/46376143,https://www.airlines-manager.com/network/showflight/51374354789,https://www.airlines-manager.com/aircraft/show/94886625,23:45,7:14,310,"$465,418.00","$427,494.00"
MIA - RDU,51335558632,MIA-AUS-PIT 1,737-900ER,https://www.airlines-manager.com/network/showline/44971928,https://www.airlines-manager.com/network/showflight/51335558632,https://www.airlines-manager.com/aircraft/show/99920626,4:30,9:14,320,"$309,045.00","$272,869.00"
MIA - RDU,51335558633,MIA-AUS-PIT 5,ERJ-175,https://www.airlines-manager.com/network/showline/44971928,https://www.airlines-manager.com/network/showflight/51335558633,https://www.airlines-manager.com/aircraft/show/82323689,8:30,13:14,112,"$147,216.00","$127,083.00"
MIA - RDU,51347850871,MIA-AUS-PIT 4,737-900ER,https://www.airlines-manager.com/network/showline/44971928,https://www.airlines-manager.com/network/showflight/51347850871,https://www.airlines-manager.com/aircraft/show/99920623,10:00,14:44,320,"$309,045.00","$272,869.00"
MIA - RDU,51363387285,MIA-AUS-PIT 3,737-900ER,https://www.airlines-manager.com/network/showline/44971928,https://www.airlines-manager.com/network/showflight/51363387285,https://www.airlines-manager.com/aircraft/show/99920624,16:00,20:44,320,"$309,045.00","$272,869.00"
MIA - RDU,51370307135,MIA-AUS-PIT 2,737-900ER,https://www.airlines-manager.com/network/showline/44971928,https://www.airlines-manager.com/network/showflight/51370307135,https://www.airlines-manager.com/aircraft/show/99920625,22:00,2:44,320,"$309,045.00","$272,869.00"
MIA - RIC,51335558723,MIA-OKC-FSD 3,A321-200,https://www.airlines-manager.com/network/showline/47780585,https://www.airlines-manager.com/network/showflight/51335558723,https://www.airlines-manager.com/aircraft/show/110883112,8:30,13:44,310,"$335,164.00","$303,882.00"
MIA - RIC,51347851180,MIA-OKC-FSD 2,A321-200,https://www.airlines-manager.com/network/showline/47780585,https://www.airlines-manager.com/network/showflight/51347851180,https://www.airlines-manager.com/aircraft/show/110883111,11:00,16:14,310,"$335,164.00","$303,882.00"
MIA - RIC,51363387436,MIA-OKC-FSD 5,ERJ-175,https://www.airlines-manager.com/network/showline/47780585,https://www.airlines-manager.com/network/showflight/51363387436,https://www.airlines-manager.com/aircraft/show/104353572,16:45,21:59,112,"$159,315.00","$139,101.00"
MIA - RIC,51370306943,MIA-OKC-FSD 1,A321-200,https://www.airlines-manager.com/network/showline/47780585,https://www.airlines-manager.com/network/showflight/51370306943,https://www.airlines-manager.com/aircraft/show/110883110,19:45,0:59,310,"$335,164.00","$303,882.00"
MIA - RIC,51370306944,MIA-OKC-FSD 4,A321-200,https://www.airlines-manager.com/network/showline/47780585,https://www.airlines-manager.com/network/showflight/51370306944,https://www.airlines-manager.com/aircraft/show/110883113,21:30,2:44,310,"$335,164.00","$303,882.00"
MIA - RNO,51335558249,MIA-RNO-ONT 5 B,A319-100,https://www.airlines-manager.com/network/showline/46280187,https://www.airlines-manager.com/network/showflight/51335558249,https://www.airlines-manager.com/aircraft/show/105223010,1:00,12:44,198,"$542,924.00","$497,087.00"
MIA - RNO,51347851133,MIA-RNO-ONT 1,737-900ER,https://www.airlines-manager.com/network/showline/46280187,https://www.airlines-manager.com/network/showflight/51347851133,https://www.airlines-manager.com/aircraft/show/86238755,11:00,22:29,320,"$720,599.00","$657,748.00"
MIA - RNO,51355083261,MIA-RNO-ONT 2,737-900ER,https://www.airlines-manager.com/network/showline/46280187,https://www.airlines-manager.com/network/showflight/51355083261,https://www.airlines-manager.com/aircraft/show/90489722,13:00,0:29,320,"$720,599.00","$657,748.00"
MIA - RNO,51355083262,MIA-RNO-ONT 3,737-900ER,https://www.airlines-manager.com/network/showline/46280187,https://www.airlines-manager.com/network/showflight/51355083262,https://www.airlines-manager.com/aircraft/show/86238756,15:00,2:29,320,"$720,599.00","$657,748.00"
MIA - RNO,51370307122,MIA-RNO-ONT 4,737-900ER,https://www.airlines-manager.com/network/showline/46280187,https://www.airlines-manager.com/network/showflight/51370307122,https://www.airlines-manager.com/aircraft/show/90489723,22:00,9:29,320,"$720,599.00","$657,748.00"
MIA - RSW,51335558585,MIA-ANU-SXM 3 S,A319-100,https://www.airlines-manager.com/network/showline/47559657,https://www.airlines-manager.com/network/showflight/51335558585,https://www.airlines-manager.com/aircraft/show/110114297,4:00,6:29,228,"$65,477.00","$47,224.00"
MIA - RSW,51347850841,MIA-ANU-SXM 1 S,A319-100,https://www.airlines-manager.com/network/showline/47559657,https://www.airlines-manager.com/network/showflight/51347850841,https://www.airlines-manager.com/aircraft/show/110114295,9:15,11:44,228,"$65,477.00","$47,224.00"
MIA - RSW,51347850842,MIA-ANU-SXM 2 S,A319-100,https://www.airlines-manager.com/network/showline/47559657,https://www.airlines-manager.com/network/showflight/51347850842,https://www.airlines-manager.com/aircraft/show/110114296,10:15,12:44,228,"$65,477.00","$47,224.00"
MIA - RSW,51355083348,MIA-ANU-SXM 6 S,A319-100,https://www.airlines-manager.com/network/showline/47559657,https://www.airlines-manager.com/network/showflight/51355083348,https://www.airlines-manager.com/aircraft/show/110114300,14:00,16:29,228,"$65,477.00","$47,224.00"
MIA - RSW,51370307065,MIA-ANU-SXM 5 S,A319-100,https://www.airlines-manager.com/network/showline/47559657,https://www.airlines-manager.com/network/showflight/51370307065,https://www.airlines-manager.com/aircraft/show/110114299,21:00,23:29,228,"$65,477.00","$47,224.00"
MIA - RSW,51374354744,MIA-ANU-SXM 4 S,A319-100,https://www.airlines-manager.com/network/showline/47559657,https://www.airlines-manager.com/network/showflight/51374354744,https://www.airlines-manager.com/aircraft/show/110114298,23:00,1:29,228,"$65,477.00","$47,224.00"
MIA - SAN,51335558395,MIA-BWI-YYZ 2,A321-200,https://www.airlines-manager.com/network/showline/42608092,https://www.airlines-manager.com/network/showflight/51335558395,https://www.airlines-manager.com/aircraft/show/92153440,1:45,12:44,310,"$684,960.00","$628,161.00"
MIA - SAN,51347850993,MIA-BWI-YYZ 3,A321-200,https://www.airlines-manager.com/network/showline/42608092,https://www.airlines-manager.com/network/showflight/51347850993,https://www.airlines-manager.com/aircraft/show/92153441,10:00,20:59,310,"$684,960.00","$628,161.00"
MIA - SAN,51347850994,MIA-BWI-YYZ 6 S,ERJ-175,https://www.airlines-manager.com/network/showline/42608092,https://www.airlines-manager.com/network/showflight/51347850994,https://www.airlines-manager.com/aircraft/show/92137503,12:00,22:59,136,"$299,119.00","$265,380.00"
MIA - SAN,51363387449,MIA-BWI-YYZ 4,A321-200,https://www.airlines-manager.com/network/showline/42608092,https://www.airlines-manager.com/network/showflight/51363387449,https://www.airlines-manager.com/aircraft/show/92153442,17:00,3:59,310,"$684,960.00","$628,161.00"
MIA - SAN,51363387450,MIA-BWI-YYZ 5,A321-200,https://www.airlines-manager.com/network/showline/42608092,https://www.airlines-manager.com/network/showflight/51363387450,https://www.airlines-manager.com/aircraft/show/92153439,19:00,5:59,310,"$684,960.00","$628,161.00"
MIA - SAN,51374354714,MIA-BWI-YYZ 1,A321-200,https://www.airlines-manager.com/network/showline/42608092,https://www.airlines-manager.com/network/showflight/51374354714,https://www.airlines-manager.com/aircraft/show/92153443,22:45,9:44,310,"$684,960.00","$628,161.00"
MIA - SAT,51335558536,MIA-BDL-SAT 3,737-900ER,https://www.airlines-manager.com/network/showline/46909516,https://www.airlines-manager.com/network/showflight/51335558536,https://www.airlines-manager.com/aircraft/show/107763562,3:15,9:44,320,"$409,642.00","$368,358.00"
MIA - SAT,51347851185,MIA-BDL-SAT 2,737-900ER,https://www.airlines-manager.com/network/showline/46909516,https://www.airlines-manager.com/network/showflight/51347851185,https://www.airlines-manager.com/aircraft/show/107763565,11:00,17:29,320,"$409,642.00","$368,358.00"
MIA - SAT,51355083412,MIA-BDL-SAT 5,ERJ-175,https://www.airlines-manager.com/network/showline/46909516,https://www.airlines-manager.com/network/showflight/51355083412,https://www.airlines-manager.com/aircraft/show/107467213,14:45,21:14,112,"$193,333.00","$169,367.00"
MIA - SAT,51370307019,MIA-BDL-SAT 4,737-900ER,https://www.airlines-manager.com/network/showline/46909516,https://www.airlines-manager.com/network/showflight/51370307019,https://www.airlines-manager.com/aircraft/show/107763561,20:30,2:59,320,"$409,642.00","$368,358.00"
MIA - SAT,51370307020,MIA-BDL-SAT 1,737-900ER,https://www.airlines-manager.com/network/showline/46909516,https://www.airlines-manager.com/network/showflight/51370307020,https://www.airlines-manager.com/aircraft/show/107763566,20:45,3:14,320,"$409,642.00","$368,358.00"
MIA - SAV,51335558138,MIA-OKC-FSD 2,A321-200,https://www.airlines-manager.com/network/showline/47780592,https://www.airlines-manager.com/network/showflight/51335558138,https://www.airlines-manager.com/aircraft/show/110883111,0:15,3:59,310,"$214,362.00","$189,091.00"
MIA - SAV,51335558139,MIA-OKC-FSD 5,ERJ-175,https://www.airlines-manager.com/network/showline/47780592,https://www.airlines-manager.com/network/showflight/51335558139,https://www.airlines-manager.com/aircraft/show/104353572,6:00,9:44,112,"$100,092.00","$84,159.00"
MIA - SAV,51347850802,MIA-OKC-FSD 1,A321-200,https://www.airlines-manager.com/network/showline/47780592,https://www.airlines-manager.com/network/showflight/51347850802,https://www.airlines-manager.com/aircraft/show/110883110,9:00,12:44,310,"$214,362.00","$189,091.00"
MIA - SAV,51347850806,MIA-OKC-FSD 4,A321-200,https://www.airlines-manager.com/network/showline/47780592,https://www.airlines-manager.com/network/showflight/51347850806,https://www.airlines-manager.com/aircraft/show/110883113,11:00,14:44,310,"$214,362.00","$189,091.00"
MIA - SAV,51370307134,MIA-OKC-FSD 3,A321-200,https://www.airlines-manager.com/network/showline/47780592,https://www.airlines-manager.com/network/showflight/51370307134,https://www.airlines-manager.com/aircraft/show/110883112,22:00,1:44,267,"$196,867.00","$172,116.00"
MIA - SDF,51335558216,MIA-SDF-PWM 3,A321-200,https://www.airlines-manager.com/network/showline/46415148,https://www.airlines-manager.com/network/showflight/51335558216,https://www.airlines-manager.com/aircraft/show/94886629,0:45,6:29,310,"$354,305.00","$319,939.00"
MIA - SDF,51335558217,MIA-SDF-PWM 2,A321-200,https://www.airlines-manager.com/network/showline/46415148,https://www.airlines-manager.com/network/showflight/51335558217,https://www.airlines-manager.com/aircraft/show/94886626,8:15,13:59,310,"$354,305.00","$319,939.00"
MIA - SDF,51355083254,MIA-SDF-PWM 1,A321-200,https://www.airlines-manager.com/network/showline/46415148,https://www.airlines-manager.com/network/showflight/51355083254,https://www.airlines-manager.com/aircraft/show/96692674,13:00,18:44,310,"$354,305.00","$319,939.00"
MIA - SDF,51355083255,MIA-SDF-PWM 5,ERJ-175,https://www.airlines-manager.com/network/showline/46415148,https://www.airlines-manager.com/network/showflight/51355083255,https://www.airlines-manager.com/aircraft/show/105601657,15:00,20:44,112,"$167,438.00","$145,225.00"
MIA - SDF,51363387253,MIA CARGO 2,737-700,https://www.airlines-manager.com/network/showline/46415148,https://www.airlines-manager.com/network/showflight/51363387253,https://www.airlines-manager.com/aircraft/show/107527976,15:45,21:29,0,"$94,178.00","$69,883.00"
MIA - SDF,51363387254,MIA-SDF-PWM 4,A321-200,https://www.airlines-manager.com/network/showline/46415148,https://www.airlines-manager.com/network/showflight/51363387254,https://www.airlines-manager.com/aircraft/show/94886625,18:00,23:44,310,"$346,354.00","$313,489.00"
MIA - SEA,51335558353,MIA-LAS-SEA 3,A321neo,https://www.airlines-manager.com/network/showline/42449491,https://www.airlines-manager.com/network/showflight/51335558353,https://www.airlines-manager.com/aircraft/show/105093927,1:30,13:59,338,"$830,955.00","$762,906.00"
MIA - SEA,51347850915,MIA-LAS-SEA 4,A321neo,https://www.airlines-manager.com/network/showline/42449491,https://www.airlines-manager.com/network/showflight/51347850915,https://www.airlines-manager.com/aircraft/show/105093928,10:00,22:29,338,"$830,955.00","$762,906.00"
MIA - SEA,51355083269,MIA-LAS-SEA 5,A321neo,https://www.airlines-manager.com/network/showline/42449491,https://www.airlines-manager.com/network/showflight/51355083269,https://www.airlines-manager.com/aircraft/show/105093929,13:00,1:29,338,"$830,955.00","$762,906.00"
MIA - SEA,51370307032,MIA-LAS-SEA 1,A321neo,https://www.airlines-manager.com/network/showline/42449491,https://www.airlines-manager.com/network/showflight/51370307032,https://www.airlines-manager.com/aircraft/show/105093925,20:30,8:59,338,"$830,955.00","$762,906.00"
MIA - SEA,51374354672,MIA-LAS-SEA 6 B,A319-100,https://www.airlines-manager.com/network/showline/42449491,https://www.airlines-manager.com/network/showflight/51374354672,https://www.airlines-manager.com/aircraft/show/113251304,22:30,11:14,198,"$575,677.00","$518,400.00"
MIA - SEA,51374354673,MIA-LAS-SEA 2,A321neo,https://www.airlines-manager.com/network/showline/42449491,https://www.airlines-manager.com/network/showflight/51374354673,https://www.airlines-manager.com/aircraft/show/105093926,23:30,11:59,336,"$825,236.00","$757,342.00"
MIA - SJC,51335558375,MIA-SJC-YYC 5,737-900ER,https://www.airlines-manager.com/network/showline/46909498,https://www.airlines-manager.com/network/showflight/51335558375,https://www.airlines-manager.com/aircraft/show/107763563,1:45,13:44,320,"$730,204.00","$664,037.00"
MIA - SJC,51347851235,MIA-SJC-YYC 1,737-900ER,https://www.airlines-manager.com/network/showline/46909498,https://www.airlines-manager.com/network/showflight/51347851235,https://www.airlines-manager.com/aircraft/show/107763569,12:00,23:59,320,"$730,204.00","$664,037.00"
MIA - SJC,51355083355,MIA-SJC-YYC 2,737-900ER,https://www.airlines-manager.com/network/showline/46909498,https://www.airlines-manager.com/network/showflight/51355083355,https://www.airlines-manager.com/aircraft/show/107763568,14:00,1:59,320,"$730,204.00","$664,037.00"
MIA - SJC,51363387319,MIA-SJC-YYC 3,737-900ER,https://www.airlines-manager.com/network/showline/46909498,https://www.airlines-manager.com/network/showflight/51363387319,https://www.airlines-manager.com/aircraft/show/107763567,16:00,3:59,320,"$730,204.00","$664,037.00"
MIA - SJC,51374354785,MIA-SJC-YYC 4,737-900ER,https://www.airlines-manager.com/network/showline/46909498,https://www.airlines-manager.com/network/showflight/51374354785,https://www.airlines-manager.com/aircraft/show/107763564,23:45,11:44,320,"$730,204.00","$664,037.00"
MIA - SJU,51335558527,MIA-SJU-BOS 6 B,A319-100,https://www.airlines-manager.com/network/showline/42305291,https://www.airlines-manager.com/network/showflight/51335558527,https://www.airlines-manager.com/aircraft/show/110582841,3:15,9:29,198,"$286,433.00","$257,368.00"
MIA - SJU,51347851113,MIA-SJU-BOS 2,A321-200,https://www.airlines-manager.com/network/showline/42305291,https://www.airlines-manager.com/network/showflight/51347851113,https://www.airlines-manager.com/aircraft/show/91352062,10:15,16:29,310,"$379,598.00","$343,323.00"
MIA - SJU,51347851114,MIA-SJU-BOS 3,A321-200,https://www.airlines-manager.com/network/showline/42305291,https://www.airlines-manager.com/network/showflight/51347851114,https://www.airlines-manager.com/aircraft/show/91352061,12:15,18:29,310,"$379,598.00","$343,323.00"
MIA - SJU,51363387570,MIA-SJU-BOS 4,A321-200,https://www.airlines-manager.com/network/showline/42305291,https://www.airlines-manager.com/network/showflight/51363387570,https://www.airlines-manager.com/aircraft/show/91352060,18:15,0:29,310,"$379,598.00","$343,323.00"
MIA - SJU,51363387571,MIA-SJU-BOS 5,A321-200,https://www.airlines-manager.com/network/showline/42305291,https://www.airlines-manager.com/network/showflight/51363387571,https://www.airlines-manager.com/aircraft/show/91352059,19:15,1:29,310,"$379,598.00","$343,323.00"
MIA - SJU,51374354706,MIA-SJU-BOS 1,A321-200,https://www.airlines-manager.com/network/showline/42305291,https://www.airlines-manager.com/network/showflight/51374354706,https://www.airlines-manager.com/aircraft/show/91352063,22:45,4:59,272,"$338,269.00","$303,354.00"
MIA - SKB,51335558336,MIA-ANU-SXM 4 S,A319-100,https://www.airlines-manager.com/network/showline/47559665,https://www.airlines-manager.com/network/showflight/51335558336,https://www.airlines-manager.com/aircraft/show/110114298,1:30,8:29,228,"$343,281.00","$313,752.00"
MIA - SKB,51335558337,MIA-ANU-SXM 1 S,A319-100,https://www.airlines-manager.com/network/showline/47559665,https://www.airlines-manager.com/network/showflight/51335558337,https://www.airlines-manager.com/aircraft/show/110114295,2:15,9:14,228,"$343,281.00","$313,752.00"
MIA - SKB,51335558338,MIA-ANU-SXM 2 S,A319-100,https://www.airlines-manager.com/network/showline/47559665,https://www.airlines-manager.com/network/showflight/51335558338,https://www.airlines-manager.com/aircraft/show/110114296,3:15,10:14,228,"$343,281.00","$313,752.00"
MIA - SKB,51335558339,MIA-ANU-SXM 6 S,A319-100,https://www.airlines-manager.com/network/showline/47559665,https://www.airlines-manager.com/network/showflight/51335558339,https://www.airlines-manager.com/aircraft/show/110114300,6:45,13:44,228,"$343,281.00","$313,752.00"
MIA - SKB,51355083349,MIA-ANU-SXM 5 S,A319-100,https://www.airlines-manager.com/network/showline/47559665,https://www.airlines-manager.com/network/showflight/51355083349,https://www.airlines-manager.com/aircraft/show/110114299,14:00,20:59,228,"$343,281.00","$313,752.00"
MIA - SKB,51370307066,MIA-ANU-SXM 3 S,A319-100,https://www.airlines-manager.com/network/showline/47559665,https://www.airlines-manager.com/network/showflight/51370307066,https://www.airlines-manager.com/aircraft/show/110114297,21:00,3:59,228,"$343,281.00","$313,752.00"
MIA - SLC,51335558045,MIA-SJU-BOS 2,A321-200,https://www.airlines-manager.com/network/showline/42307240,https://www.airlines-manager.com/network/showflight/51335558045,https://www.airlines-manager.com/aircraft/show/91352062,0:00,10:14,310,"$640,084.00","$582,498.00"
MIA - SLC,51335558046,MIA-SJU-BOS 4,A321-200,https://www.airlines-manager.com/network/showline/42307240,https://www.airlines-manager.com/network/showflight/51335558046,https://www.airlines-manager.com/aircraft/show/91352060,1:00,11:14,310,"$640,084.00","$582,498.00"
MIA - SLC,51335558047,MIA-SJU-BOS 3,A321-200,https://www.airlines-manager.com/network/showline/42307240,https://www.airlines-manager.com/network/showflight/51335558047,https://www.airlines-manager.com/aircraft/show/91352061,2:00,12:14,310,"$640,084.00","$582,498.00"
MIA - SLC,51347850816,MIA-SJU-BOS 5,A321-200,https://www.airlines-manager.com/network/showline/42307240,https://www.airlines-manager.com/network/showflight/51347850816,https://www.airlines-manager.com/aircraft/show/91352059,9:00,19:14,310,"$640,084.00","$582,498.00"
MIA - SLC,51347850817,MIA-SJU-BOS 6 B,A319-100,https://www.airlines-manager.com/network/showline/42307240,https://www.airlines-manager.com/network/showflight/51347850817,https://www.airlines-manager.com/aircraft/show/110582841,10:00,20:14,198,"$481,136.00","$434,977.00"
MIA - SLC,51347850818,MIA-SJU-BOS 1,A321-200,https://www.airlines-manager.com/network/showline/42307240,https://www.airlines-manager.com/network/showflight/51347850818,https://www.airlines-manager.com/aircraft/show/91352063,12:00,22:14,310,"$640,084.00","$582,498.00"
MIA - SMF,51335558242,MIA-OAK-SMF 2,737-900ER,https://www.airlines-manager.com/network/showline/46079200,https://www.airlines-manager.com/network/showflight/51335558242,https://www.airlines-manager.com/aircraft/show/91198619,1:00,12:59,320,"$730,283.00","$666,251.00"
MIA - SMF,51335558243,MIA-OAK-SMF 3,737-900ER,https://www.airlines-manager.com/network/showline/46079200,https://www.airlines-manager.com/network/showflight/51335558243,https://www.airlines-manager.com/aircraft/show/91198616,3:00,14:59,320,"$730,283.00","$666,251.00"
MIA - SMF,51347851155,MIA-OAK-SMF 4,737-900ER,https://www.airlines-manager.com/network/showline/46079200,https://www.airlines-manager.com/network/showflight/51347851155,https://www.airlines-manager.com/aircraft/show/91198618,11:00,22:59,320,"$730,283.00","$666,251.00"
MIA - SMF,51355083278,MIA-OAK-SMF 5,737-900ER,https://www.airlines-manager.com/network/showline/46079200,https://www.airlines-manager.com/network/showflight/51355083278,https://www.airlines-manager.com/aircraft/show/91198617,13:00,0:59,320,"$730,283.00","$666,251.00"
MIA - SMF,51374354739,MIA-OAK-SMF 1,737-900ER,https://www.airlines-manager.com/network/showline/46079200,https://www.airlines-manager.com/network/showflight/51374354739,https://www.airlines-manager.com/aircraft/show/91198615,23:00,10:59,320,"$730,283.00","$666,251.00"
MIA - STL,51335558355,MIA-ELP-MCI 1,737-900ER,https://www.airlines-manager.com/network/showline/46040769,https://www.airlines-manager.com/network/showflight/51335558355,https://www.airlines-manager.com/aircraft/show/91806234,1:30,7:44,320,"$390,675.00","$347,102.00"
MIA - STL,51335558356,MIA-ELP-MCI 5 B,A319-100,https://www.airlines-manager.com/network/showline/46040769,https://www.airlines-manager.com/network/showflight/51335558356,https://www.airlines-manager.com/aircraft/show/105093924,2:00,8:14,198,"$295,684.00","$264,925.00"
MIA - STL,51335558357,MIA CARGO 2,737-700,https://www.airlines-manager.com/network/showline/46040769,https://www.airlines-manager.com/network/showflight/51335558357,https://www.airlines-manager.com/aircraft/show/107527976,3:15,9:29,0,"$102,366.00","$75,025.00"
MIA - STL,51335558358,MIA-ELP-MCI 4,737-900ER,https://www.airlines-manager.com/network/showline/46040769,https://www.airlines-manager.com/network/showflight/51335558358,https://www.airlines-manager.com/aircraft/show/91806231,8:30,14:44,320,"$390,675.00","$347,102.00"
MIA - STL,51347850907,MIA-ELP-MCI 3,737-900ER,https://www.airlines-manager.com/network/showline/46040769,https://www.airlines-manager.com/network/showflight/51347850907,https://www.airlines-manager.com/aircraft/show/91806232,10:00,16:14,320,"$390,675.00","$347,102.00"
MIA - STL,51363387497,MIA-ELP-MCI 2,737-900ER,https://www.airlines-manager.com/network/showline/46040769,https://www.airlines-manager.com/network/showflight/51363387497,https://www.airlines-manager.com/aircraft/show/91806235,17:00,23:14,320,"$390,675.00","$347,102.00"
MIA - SXM,51335558704,MIA-ANU-SXM 5 S,A319-100,https://www.airlines-manager.com/network/showline/47559751,https://www.airlines-manager.com/network/showflight/51335558704,https://www.airlines-manager.com/aircraft/show/110114299,6:45,13:44,228,"$332,916.00","$304,110.00"
MIA - SXM,51355083350,MIA-ANU-SXM 3 S,A319-100,https://www.airlines-manager.com/network/showline/47559751,https://www.airlines-manager.com/network/showflight/51355083350,https://www.airlines-manager.com/aircraft/show/110114297,14:00,20:59,228,"$332,916.00","$304,110.00"
MIA - SXM,51363387343,MIA-ANU-SXM 4 S,A319-100,https://www.airlines-manager.com/network/showline/47559751,https://www.airlines-manager.com/network/showflight/51363387343,https://www.airlines-manager.com/aircraft/show/110114298,16:00,22:59,228,"$332,916.00","$304,110.00"
MIA - SXM,51363387345,MIA-ANU-SXM 1 S,A319-100,https://www.airlines-manager.com/network/showline/47559751,https://www.airlines-manager.com/network/showflight/51363387345,https://www.airlines-manager.com/aircraft/show/110114295,19:15,2:14,228,"$332,916.00","$304,110.00"
MIA - SXM,51370307005,MIA-ANU-SXM 2 S,A319-100,https://www.airlines-manager.com/network/showline/47559751,https://www.airlines-manager.com/network/showflight/51370307005,https://www.airlines-manager.com/aircraft/show/110114296,20:15,3:14,228,"$332,916.00","$304,110.00"
MIA - SXM,51374354781,MIA-ANU-SXM 6 S,A319-100,https://www.airlines-manager.com/network/showline/47559751,https://www.airlines-manager.com/network/showflight/51374354781,https://www.airlines-manager.com/aircraft/show/110114300,23:45,6:44,228,"$332,916.00","$304,110.00"
MIA - TPA,51335558646,MIA-BUR-PVD 1,A321-200,https://www.airlines-manager.com/network/showline/47218374,https://www.airlines-manager.com/network/showflight/51335558646,https://www.airlines-manager.com/aircraft/show/108834803,5:00,7:59,310,"$127,494.00","$101,478.00"
MIA - TPA,51347851182,MIA-BUR-PVD 3,A321-200,https://www.airlines-manager.com/network/showline/47218374,https://www.airlines-manager.com/network/showflight/51347851182,https://www.airlines-manager.com/aircraft/show/108834805,11:00,13:59,310,"$127,494.00","$101,478.00"
MIA - TPA,51363387461,MIA-BUR-PVD 5 B,A319-100,https://www.airlines-manager.com/network/showline/47218374,https://www.airlines-manager.com/network/showflight/51363387461,https://www.airlines-manager.com/aircraft/show/108834807,17:00,19:59,198,"$95,117.00","$74,296.00"
MIA - TPA,51363387462,MIA-BUR-PVD 2,A321-200,https://www.airlines-manager.com/network/showline/47218374,https://www.airlines-manager.com/network/showflight/51363387462,https://www.airlines-manager.com/aircraft/show/108834804,17:45,20:44,310,"$127,494.00","$101,478.00"
MIA - TPA,51374354779,MIA-BUR-PVD 4,A321-200,https://www.airlines-manager.com/network/showline/47218374,https://www.airlines-manager.com/network/showflight/51374354779,https://www.airlines-manager.com/aircraft/show/108834806,23:45,2:44,310,"$127,494.00","$101,478.00"
MIA - TUL,51335558232,MIA-FAR-TUL 2,737-900ER,https://www.airlines-manager.com/network/showline/47780432,https://www.airlines-manager.com/network/showflight/51335558232,https://www.airlines-manager.com/aircraft/show/110883160,0:45,7:29,320,"$415,238.00","$373,797.00"
MIA - TUL,51335558233,MIA-FAR-TUL 5,ERJ-175,https://www.airlines-manager.com/network/showline/47780432,https://www.airlines-manager.com/network/showflight/51335558233,https://www.airlines-manager.com/aircraft/show/87169421,3:00,9:44,112,"$195,935.00","$171,811.00"
MIA - TUL,51347851160,MIA-FAR-TUL 3,737-900ER,https://www.airlines-manager.com/network/showline/47780432,https://www.airlines-manager.com/network/showflight/51347851160,https://www.airlines-manager.com/aircraft/show/110883161,11:00,17:44,320,"$415,238.00","$373,797.00"
MIA - TUL,51363387305,MIA-FAR-TUL 4,737-900ER,https://www.airlines-manager.com/network/showline/47780432,https://www.airlines-manager.com/network/showflight/51363387305,https://www.airlines-manager.com/aircraft/show/110883162,16:00,22:44,320,"$415,238.00","$373,797.00"
MIA - TUL,51370306934,MIA-FAR-TUL 1,737-900ER,https://www.airlines-manager.com/network/showline/47780432,https://www.airlines-manager.com/network/showflight/51370306934,https://www.airlines-manager.com/aircraft/show/110883159,19:45,2:29,320,"$415,238.00","$373,797.00"
MIA - TUS,51335558171,MIA-IAD-TUS 3,A321-200,https://www.airlines-manager.com/network/showline/44372840,https://www.airlines-manager.com/network/showflight/51335558171,https://www.airlines-manager.com/aircraft/show/97556719,0:30,9:59,310,"$590,299.00","$541,694.00"
MIA - TUS,51347850948,MIA-IAD-TUS 2,A321-200,https://www.airlines-manager.com/network/showline/44372840,https://www.airlines-manager.com/network/showflight/51347850948,https://www.airlines-manager.com/aircraft/show/97556720,10:00,19:29,310,"$590,299.00","$541,694.00"
MIA - TUS,51355083256,MIA-IAD-TUS 5,A321-200,https://www.airlines-manager.com/network/showline/44372840,https://www.airlines-manager.com/network/showflight/51355083256,https://www.airlines-manager.com/aircraft/show/97556716,13:00,22:29,310,"$590,299.00","$541,694.00"
MIA - TUS,51363387263,MIA-IAD-TUS 1,A321-200,https://www.airlines-manager.com/network/showline/44372840,https://www.airlines-manager.com/network/showflight/51363387263,https://www.airlines-manager.com/aircraft/show/97556721,15:45,1:14,310,"$590,299.00","$541,694.00"
MIA - TUS,51363387264,MIA-IAD-TUS 4,A321-200,https://www.airlines-manager.com/network/showline/44372840,https://www.airlines-manager.com/network/showflight/51363387264,https://www.airlines-manager.com/aircraft/show/97556718,18:45,4:14,310,"$590,299.00","$541,694.00"
MIA - YUL,51335558699,MIA-YVR-YUL-2,757-300,https://www.airlines-manager.com/network/showline/48487803,https://www.airlines-manager.com/network/showflight/51335558699,https://www.airlines-manager.com/aircraft/show/113101225,6:30,13:59,400,"$628,064.00","$573,757.00"
MIA - YUL,51347851179,MIA-YVR-YUL-3,757-300,https://www.airlines-manager.com/network/showline/48487803,https://www.airlines-manager.com/network/showflight/51347851179,https://www.airlines-manager.com/aircraft/show/113101226,11:00,18:29,400,"$628,064.00","$573,757.00"
MIA - YUL,51355083436,MIA-YVR-YUL-4,757-300,https://www.airlines-manager.com/network/showline/48487803,https://www.airlines-manager.com/network/showflight/51355083436,https://www.airlines-manager.com/aircraft/show/113101227,15:00,22:29,400,"$628,064.00","$573,757.00"
MIA - YUL,51374354775,MIA-YVR-YUL-1,757-300,https://www.airlines-manager.com/network/showline/48487803,https://www.airlines-manager.com/network/showflight/51374354775,https://www.airlines-manager.com/aircraft/show/113101224,23:45,7:14,400,"$628,064.00","$573,757.00"
MIA - YVR,51347851147,MIA-YVR-YUL-1,757-300,https://www.airlines-manager.com/network/showline/48487816,https://www.airlines-manager.com/network/showflight/51347851147,https://www.airlines-manager.com/aircraft/show/113101224,11:00,23:44,400,"$1,044,111.00","$959,465.00"
MIA - YVR,51355083374,MIA-YVR-YUL-2,757-300,https://www.airlines-manager.com/network/showline/48487816,https://www.airlines-manager.com/network/showflight/51355083374,https://www.airlines-manager.com/aircraft/show/113101225,14:00,2:44,400,"$1,044,111.00","$959,465.00"
MIA - YVR,51363387580,MIA-YVR-YUL-3,757-300,https://www.airlines-manager.com/network/showline/48487816,https://www.airlines-manager.com/network/showflight/51363387580,https://www.airlines-manager.com/aircraft/show/113101226,18:30,7:14,400,"$1,044,111.00","$959,465.00"
MIA - YVR,51374354693,MIA-YVR-YUL-4,757-300,https://www.airlines-manager.com/network/showline/48487816,https://www.airlines-manager.com/network/showflight/51374354693,https://www.airlines-manager.com/aircraft/show/113101227,22:30,11:14,400,"$1,044,111.00","$959,465.00"
MIA - YYC,51335558066,MIA-SJC-YYC 1,737-900ER,https://www.airlines-manager.com/network/showline/46936719,https://www.airlines-manager.com/network/showflight/51335558066,https://www.airlines-manager.com/aircraft/show/107763569,0:00,11:44,320,"$728,799.00","$660,203.00"
MIA - YYC,51335558067,MIA-SJC-YYC 2,737-900ER,https://www.airlines-manager.com/network/showline/46936719,https://www.airlines-manager.com/network/showflight/51335558067,https://www.airlines-manager.com/aircraft/show/107763568,2:00,13:44,320,"$728,799.00","$660,203.00"
MIA - YYC,51335558068,MIA-SJC-YYC 3,737-900ER,https://www.airlines-manager.com/network/showline/46936719,https://www.airlines-manager.com/network/showflight/51335558068,https://www.airlines-manager.com/aircraft/show/107763567,4:00,15:44,320,"$728,799.00","$660,203.00"
MIA - YYC,51347851236,MIA-SJC-YYC 4,737-900ER,https://www.airlines-manager.com/network/showline/46936719,https://www.airlines-manager.com/network/showflight/51347851236,https://www.airlines-manager.com/aircraft/show/107763564,12:00,23:44,320,"$728,799.00","$660,203.00"
MIA - YYC,51355083354,MIA-SJC-YYC 5,737-900ER,https://www.airlines-manager.com/network/showline/46936719,https://www.airlines-manager.com/network/showflight/51355083354,https://www.airlines-manager.com/aircraft/show/107763563,14:00,1:44,320,"$728,799.00","$660,203.00"
MIA - YYZ,51335558492,MIA-BWI-YYZ 3,A321-200,https://www.airlines-manager.com/network/showline/42608081,https://www.airlines-manager.com/network/showflight/51335558492,https://www.airlines-manager.com/aircraft/show/92153441,2:45,9:44,310,"$440,671.00","$393,931.00"
MIA - YYZ,51335558493,MIA-BWI-YYZ 6 S,ERJ-175,https://www.airlines-manager.com/network/showline/42608081,https://www.airlines-manager.com/network/showflight/51335558493,https://www.airlines-manager.com/aircraft/show/92137503,4:45,11:44,136,"$190,936.00","$163,078.00"
MIA - YYZ,51347850980,MIA-BWI-YYZ 4,A321-200,https://www.airlines-manager.com/network/showline/42608081,https://www.airlines-manager.com/network/showflight/51347850980,https://www.airlines-manager.com/aircraft/show/92153442,10:00,16:59,310,"$440,671.00","$393,931.00"
MIA - YYZ,51347850981,MIA-BWI-YYZ 5,A321-200,https://www.airlines-manager.com/network/showline/42608081,https://www.airlines-manager.com/network/showflight/51347850981,https://www.airlines-manager.com/aircraft/show/92153439,12:00,18:59,310,"$440,671.00","$393,931.00"
MIA - YYZ,51363387265,MIA-BWI-YYZ 1,A321-200,https://www.airlines-manager.com/network/showline/42608081,https://www.airlines-manager.com/network/showflight/51363387265,https://www.airlines-manager.com/aircraft/show/92153443,15:45,22:44,310,"$440,671.00","$393,931.00"
MIA - YYZ,51363387266,MIA-BWI-YYZ 2,A321-200,https://www.airlines-manager.com/network/showline/42608081,https://www.airlines-manager.com/network/showflight/51363387266,https://www.airlines-manager.com/aircraft/show/92153440,18:45,1:44,310,"$440,671.00","$393,931.00"
SFO - ABQ,51347850783,SFO-MCI-OMA 1,737-900ER,https://www.airlines-manager.com/network/showline/46129446,https://www.airlines-manager.com/network/showflight/51347850783,https://www.airlines-manager.com/aircraft/show/88239553,8:45,14:14,320,"$349,395.00","$309,344.00"
SFO - ABQ,51347850785,SFO-MCI-OMA 5 B,A319-100,https://www.airlines-manager.com/network/showline/46129446,https://www.airlines-manager.com/network/showflight/51347850785,https://www.airlines-manager.com/aircraft/show/105223003,8:45,14:14,198,"$265,385.00","$237,255.00"
SFO - ABQ,51347850788,SFO-MCI-OMA 4,737-900ER,https://www.airlines-manager.com/network/showline/46129446,https://www.airlines-manager.com/network/showflight/51347850788,https://www.airlines-manager.com/aircraft/show/88239557,10:30,15:59,320,"$349,395.00","$309,344.00"
SFO - ABQ,51355083422,SFO-MCI-OMA 3,737-900ER,https://www.airlines-manager.com/network/showline/46129446,https://www.airlines-manager.com/network/showflight/51355083422,https://www.airlines-manager.com/aircraft/show/88239555,15:00,20:29,320,"$349,395.00","$309,344.00"
SFO - ABQ,51374354717,SFO-MCI-OMA 2,737-900ER,https://www.airlines-manager.com/network/showline/46129446,https://www.airlines-manager.com/network/showflight/51374354717,https://www.airlines-manager.com/aircraft/show/88239554,22:45,4:14,320,"$349,395.00","$309,344.00"
SFO - ALB,51335558187,SFO-ALB-CAK 3,A321-200,https://www.airlines-manager.com/network/showline/48344109,https://www.airlines-manager.com/network/showflight/51335558187,https://www.airlines-manager.com/aircraft/show/112650097,0:30,12:29,310,"$733,570.00","$677,406.00"
SFO - ALB,51335558188,SFO-ALB-CAK 4,A321-200,https://www.airlines-manager.com/network/showline/48344109,https://www.airlines-manager.com/network/showflight/51335558188,https://www.airlines-manager.com/aircraft/show/112650096,5:30,17:29,310,"$733,570.00","$677,406.00"
SFO - ALB,51335558189,SFO-ALB-CAK 5 B,A319-100,https://www.airlines-manager.com/network/showline/48344109,https://www.airlines-manager.com/network/showflight/51335558189,https://www.airlines-manager.com/aircraft/show/112650090,7:30,19:29,198,"$548,816.00","$503,775.00"
SFO - ALB,51355083377,SFO-ALB-CAK 1,A321-200,https://www.airlines-manager.com/network/showline/48344109,https://www.airlines-manager.com/network/showflight/51355083377,https://www.airlines-manager.com/aircraft/show/112650099,14:00,1:59,310,"$733,570.00","$677,406.00"
SFO - ALB,51363387548,SFO-ALB-CAK 2,A321-200,https://www.airlines-manager.com/network/showline/48344109,https://www.airlines-manager.com/network/showflight/51363387548,https://www.airlines-manager.com/aircraft/show/112650098,18:00,5:59,310,"$733,570.00","$677,406.00"
SFO - ANC,51335558465,SFO-BWI-ANC 4,A321neo,https://www.airlines-manager.com/network/showline/43539143,https://www.airlines-manager.com/network/showflight/51335558465,https://www.airlines-manager.com/aircraft/show/106255848,2:30,12:14,338,"$661,700.00","$613,656.00"
SFO - ANC,51335558466,SFO-BWI-ANC 5,A321neo,https://www.airlines-manager.com/network/showline/43539143,https://www.airlines-manager.com/network/showflight/51335558466,https://www.airlines-manager.com/aircraft/show/106255849,3:30,13:14,338,"$661,700.00","$613,656.00"
SFO - ANC,51363387603,SFO-BWI-ANC 1,A321neo,https://www.airlines-manager.com/network/showline/43539143,https://www.airlines-manager.com/network/showflight/51363387603,https://www.airlines-manager.com/aircraft/show/106255845,19:00,4:44,338,"$661,700.00","$613,656.00"
SFO - ANC,51370306969,SFO-BWI-ANC 2,A321neo,https://www.airlines-manager.com/network/showline/43539143,https://www.airlines-manager.com/network/showflight/51370306969,https://www.airlines-manager.com/aircraft/show/106255846,20:00,5:44,338,"$661,700.00","$613,656.00"
SFO - ANC,51370306970,SFO-BWI-ANC 3,A321neo,https://www.airlines-manager.com/network/showline/43539143,https://www.airlines-manager.com/network/showflight/51370306970,https://www.airlines-manager.com/aircraft/show/106255847,21:00,6:44,338,"$661,700.00","$613,656.00"
SFO - ATL,51335558703,SFO 84A-7 E1,777-300,https://www.airlines-manager.com/network/showline/40852416,https://www.airlines-manager.com/network/showflight/51335558703,https://www.airlines-manager.com/aircraft/show/85806656,6:45,16:29,932,"$1,615,354.00","$1,419,086.00"
SFO - ATL,51355083428,SFO-ATL-DFW S,A321-200,https://www.airlines-manager.com/network/showline/40852416,https://www.airlines-manager.com/network/showflight/51355083428,https://www.airlines-manager.com/aircraft/show/106766698,15:00,1:29,232,"$627,976.00","$547,236.00"
SFO - ATL,51363387586,SFO 84A-3 E1,777-300,https://www.airlines-manager.com/network/showline/40852416,https://www.airlines-manager.com/network/showflight/51363387586,https://www.airlines-manager.com/aircraft/show/86776210,18:30,4:14,854,"$1,519,796.00","$1,329,155.00"
SFO - ATL,51370306977,SFO-ATL-CLE,ERJ-175,https://www.airlines-manager.com/network/showline/40852416,https://www.airlines-manager.com/network/showflight/51370306977,https://www.airlines-manager.com/aircraft/show/107467212,20:00,6:29,56,"$233,331.00","$186,066.00"
SFO - AUS,51335558214,SFO-OGG-AUS 1,A321-200,https://www.airlines-manager.com/network/showline/45270795,https://www.airlines-manager.com/network/showflight/51335558214,https://www.airlines-manager.com/aircraft/show/92773481,0:45,8:44,310,"$500,252.00","$455,999.00"
SFO - AUS,51335558215,SFO-OGG-AUS 2,A321-200,https://www.airlines-manager.com/network/showline/45270795,https://www.airlines-manager.com/network/showflight/51335558215,https://www.airlines-manager.com/aircraft/show/92773480,2:45,10:44,310,"$500,252.00","$455,999.00"
SFO - AUS,51355083323,SFO-OGG-AUS 3,A321-200,https://www.airlines-manager.com/network/showline/45270795,https://www.airlines-manager.com/network/showflight/51355083323,https://www.airlines-manager.com/aircraft/show/92773479,13:30,21:29,310,"$500,252.00","$455,999.00"
SFO - AUS,51363387228,SFO-OGG-AUS 4,A321-200,https://www.airlines-manager.com/network/showline/45270795,https://www.airlines-manager.com/network/showflight/51363387228,https://www.airlines-manager.com/aircraft/show/92773478,15:30,23:29,310,"$500,252.00","$455,999.00"
SFO - AUS,51363387229,SFO-OGG-AUS 5,A321-200,https://www.airlines-manager.com/network/showline/45270795,https://www.airlines-manager.com/network/showflight/51363387229,https://www.airlines-manager.com/aircraft/show/92773477,18:30,2:29,310,"$500,252.00","$455,999.00"
SFO - BDL,51335558640,SFO-RSW-BDL 1,737-900ER,https://www.airlines-manager.com/network/showline/47540540,https://www.airlines-manager.com/network/showflight/51335558640,https://www.airlines-manager.com/aircraft/show/84915098,4:45,16:59,320,"$740,444.00","$676,326.00"
SFO - BDL,51335558641,SFO-RSW-BDL 2,737-900ER,https://www.airlines-manager.com/network/showline/47540540,https://www.airlines-manager.com/network/showflight/51335558641,https://www.airlines-manager.com/aircraft/show/84915099,6:45,18:59,320,"$740,444.00","$676,326.00"
SFO - BDL,51347850778,SFO-RSW-BDL 5,737-900ER,https://www.airlines-manager.com/network/showline/47540540,https://www.airlines-manager.com/network/showflight/51347850778,https://www.airlines-manager.com/aircraft/show/84915102,8:45,20:59,320,"$740,444.00","$676,326.00"
SFO - BDL,51363387473,SFO-RSW-BDL 3,737-900ER,https://www.airlines-manager.com/network/showline/47540540,https://www.airlines-manager.com/network/showflight/51363387473,https://www.airlines-manager.com/aircraft/show/84915100,17:00,5:14,320,"$740,444.00","$676,326.00"
SFO - BDL,51363387474,SFO-RSW-BDL 4,737-900ER,https://www.airlines-manager.com/network/showline/47540540,https://www.airlines-manager.com/network/showflight/51363387474,https://www.airlines-manager.com/aircraft/show/84915101,19:00,7:14,320,"$740,444.00","$676,326.00"
SFO - BFF,51335558237,SFO-ICT-BFF 5,ERJ-175,https://www.airlines-manager.com/network/showline/49034235,https://www.airlines-manager.com/network/showflight/51335558237,https://www.airlines-manager.com/aircraft/show/114912306,1:00,7:14,112,"$183,501.00","$161,112.00"
SFO - BFF,51335558238,SFO-ICT-BFF 3,A321-200,https://www.airlines-manager.com/network/showline/49034235,https://www.airlines-manager.com/network/showflight/51335558238,https://www.airlines-manager.com/aircraft/show/114912263,8:15,14:29,310,"$389,498.00","$355,202.00"
SFO - BFF,51363387324,SFO-ICT-BFF 2,A321-200,https://www.airlines-manager.com/network/showline/49034235,https://www.airlines-manager.com/network/showflight/51363387324,https://www.airlines-manager.com/aircraft/show/114912264,16:00,22:14,310,"$389,498.00","$355,202.00"
SFO - BFF,51374354765,SFO-ICT-BFF 1,A321-200,https://www.airlines-manager.com/network/showline/49034235,https://www.airlines-manager.com/network/showflight/51374354765,https://www.airlines-manager.com/aircraft/show/114912267,23:30,5:44,310,"$389,498.00","$355,202.00"
SFO - BNA,51335558308,SFO-BNA-CMH 4,737-900ER,https://www.airlines-manager.com/network/showline/45364406,https://www.airlines-manager.com/network/showflight/51335558308,https://www.airlines-manager.com/aircraft/show/103365580,1:15,10:59,320,"$604,687.00","$548,410.00"
SFO - BNA,51335558309,SFO-BNA-CMH 6,ERJ-175,https://www.airlines-manager.com/network/showline/45364406,https://www.airlines-manager.com/network/showflight/51335558309,https://www.airlines-manager.com/aircraft/show/82323681,6:00,15:44,112,"$284,635.00","$250,775.00"
SFO - BNA,51355083296,SFO-BNA-CMH 1,737-900ER,https://www.airlines-manager.com/network/showline/45364406,https://www.airlines-manager.com/network/showflight/51355083296,https://www.airlines-manager.com/aircraft/show/103365583,13:00,22:44,320,"$604,687.00","$548,410.00"
SFO - BNA,51355083297,SFO-BNA-CMH 2,737-900ER,https://www.airlines-manager.com/network/showline/45364406,https://www.airlines-manager.com/network/showflight/51355083297,https://www.airlines-manager.com/aircraft/show/103365582,15:00,0:44,320,"$604,687.00","$548,410.00"
SFO - BNA,51363387238,SFO-BNA-CMH 5,737-900ER,https://www.airlines-manager.com/network/showline/45364406,https://www.airlines-manager.com/network/showflight/51363387238,https://www.airlines-manager.com/aircraft/show/103365579,15:45,1:29,320,"$604,687.00","$548,410.00"
SFO - BNA,51374354760,SFO-BNA-CMH 3,737-900ER,https://www.airlines-manager.com/network/showline/45364406,https://www.airlines-manager.com/network/showflight/51374354760,https://www.airlines-manager.com/aircraft/show/103365581,23:15,8:59,320,"$604,687.00","$548,410.00"
SFO - BOI,51335558296,SFO-CLE-MKE 2,737-900ER,https://www.airlines-manager.com/network/showline/45950031,https://www.airlines-manager.com/network/showflight/51335558296,https://www.airlines-manager.com/aircraft/show/92519369,1:15,5:29,320,"$242,870.00","$212,135.00"
SFO - BOI,51335558297,SFO-CLE-MKE 5,737-900ER,https://www.airlines-manager.com/network/showline/45950031,https://www.airlines-manager.com/network/showflight/51335558297,https://www.airlines-manager.com/aircraft/show/92519370,3:15,7:29,320,"$242,870.00","$212,135.00"
SFO - BOI,51347850862,SFO-CLE-MKE 1,737-900ER,https://www.airlines-manager.com/network/showline/45950031,https://www.airlines-manager.com/network/showflight/51347850862,https://www.airlines-manager.com/aircraft/show/92519368,9:45,13:59,320,"$242,870.00","$212,135.00"
SFO - BOI,51355083409,SFO-CLE-MKE 4,737-900ER,https://www.airlines-manager.com/network/showline/45950031,https://www.airlines-manager.com/network/showflight/51355083409,https://www.airlines-manager.com/aircraft/show/92519371,14:45,18:59,320,"$242,870.00","$212,135.00"
SFO - BOI,51363387278,SFO-CLE-MKE 3,737-900ER,https://www.airlines-manager.com/network/showline/45950031,https://www.airlines-manager.com/network/showflight/51363387278,https://www.airlines-manager.com/aircraft/show/92519367,16:00,20:14,138,"$158,948.00","$130,770.00"
SFO - BOS,51335558116,SFO-BOS-PHX 5,A321neo,https://www.airlines-manager.com/network/showline/40229885,https://www.airlines-manager.com/network/showflight/51335558116,https://www.airlines-manager.com/aircraft/show/104864961,0:15,12:44,338,"$836,431.00","$773,074.00"
SFO - BOS,51347851254,SFO CARGO 2,737-700,https://www.airlines-manager.com/network/showline/40229885,https://www.airlines-manager.com/network/showflight/51347851254,https://www.airlines-manager.com/aircraft/show/107573128,12:00,0:29,0,"$211,523.00","$160,620.00"
SFO - BOS,51355083283,SFO-BOS-PHX 1,A321neo,https://www.airlines-manager.com/network/showline/40229885,https://www.airlines-manager.com/network/showflight/51355083283,https://www.airlines-manager.com/aircraft/show/104901564,13:00,1:29,338,"$836,431.00","$773,074.00"
SFO - BOS,51355083284,SFO-BOS-PHX 4,A321neo,https://www.airlines-manager.com/network/showline/40229885,https://www.airlines-manager.com/network/showflight/51355083284,https://www.airlines-manager.com/aircraft/show/104870960,14:00,2:29,338,"$836,431.00","$773,074.00"
SFO - BOS,51363387261,SFO-BOS-PHX 3,A321neo,https://www.airlines-manager.com/network/showline/40229885,https://www.airlines-manager.com/network/showflight/51363387261,https://www.airlines-manager.com/aircraft/show/104874465,15:45,4:14,338,"$836,431.00","$773,074.00"
SFO - BOS,51370306992,SFO-BOS-PHX 2,A321neo,https://www.airlines-manager.com/network/showline/40229885,https://www.airlines-manager.com/network/showflight/51370306992,https://www.airlines-manager.com/aircraft/show/104901544,20:15,8:44,338,"$836,431.00","$773,074.00"
SFO - BTV,51335558092,SFO-BTV-LEX 4,A321-200,https://www.airlines-manager.com/network/showline/48344140,https://www.airlines-manager.com/network/showflight/51335558092,https://www.airlines-manager.com/aircraft/show/112650092,0:00,11:59,310,"$729,754.00","$673,769.00"
SFO - BTV,51335558093,SFO-BTV-LEX 5 B,A319-100,https://www.airlines-manager.com/network/showline/48344140,https://www.airlines-manager.com/network/showflight/51335558093,https://www.airlines-manager.com/aircraft/show/112650089,6:00,17:59,198,"$546,558.00","$501,659.00"
SFO - BTV,51355083334,SFO-BTV-LEX 1,A321-200,https://www.airlines-manager.com/network/showline/48344140,https://www.airlines-manager.com/network/showflight/51355083334,https://www.airlines-manager.com/aircraft/show/112650095,14:00,1:59,310,"$729,754.00","$673,769.00"
SFO - BTV,51363387550,SFO-BTV-LEX 2,A321-200,https://www.airlines-manager.com/network/showline/48344140,https://www.airlines-manager.com/network/showflight/51363387550,https://www.airlines-manager.com/aircraft/show/112650094,18:00,5:59,310,"$729,754.00","$673,769.00"
SFO - BTV,51370306982,SFO-BTV-LEX 3,A321-200,https://www.airlines-manager.com/network/showline/48344140,https://www.airlines-manager.com/network/showflight/51370306982,https://www.airlines-manager.com/aircraft/show/112650093,20:00,7:59,310,"$729,754.00","$673,769.00"
SFO - BUF,51335558319,SFO-PVD-BUF 1,A321-200,https://www.airlines-manager.com/network/showline/48344051,https://www.airlines-manager.com/network/showflight/51335558319,https://www.airlines-manager.com/aircraft/show/112650108,1:30,12:29,310,"$686,968.00","$633,510.00"
SFO - BUF,51335558320,SFO-PVD-BUF 2,A321-200,https://www.airlines-manager.com/network/showline/48344051,https://www.airlines-manager.com/network/showflight/51335558320,https://www.airlines-manager.com/aircraft/show/112650107,5:30,16:29,310,"$686,968.00","$633,510.00"
SFO - BUF,51335558321,SFO-PVD-BUF 3,A321-200,https://www.airlines-manager.com/network/showline/48344051,https://www.airlines-manager.com/network/showflight/51335558321,https://www.airlines-manager.com/aircraft/show/112650106,7:30,18:29,310,"$686,968.00","$633,510.00"
SFO - BUF,51355083214,SFO-PVD-BUF 4,A321-200,https://www.airlines-manager.com/network/showline/48344051,https://www.airlines-manager.com/network/showflight/51355083214,https://www.airlines-manager.com/aircraft/show/112650105,13:00,23:59,310,"$686,968.00","$633,510.00"
SFO - BUF,51363387549,SFO-PVD-BUF 5,A321-200,https://www.airlines-manager.com/network/showline/48344051,https://www.airlines-manager.com/network/showflight/51363387549,https://www.airlines-manager.com/aircraft/show/112650104,18:00,4:59,310,"$686,968.00","$633,510.00"
SFO - BUR,51335558604,SFO-SAV-JAN 4,A321-200,https://www.airlines-manager.com/network/showline/49034211,https://www.airlines-manager.com/network/showflight/51335558604,https://www.airlines-manager.com/aircraft/show/114912270,4:15,7:44,310,"$173,403.00","$150,893.00"
SFO - BUR,51347851220,SFO-SAV-JAN 5 B,A319-100,https://www.airlines-manager.com/network/showline/49034211,https://www.airlines-manager.com/network/showflight/51347851220,https://www.airlines-manager.com/aircraft/show/114917486,11:30,14:59,198,"$130,672.00","$112,650.00"
SFO - BUR,51363387233,SFO-SAV-JAN 3,A321-200,https://www.airlines-manager.com/network/showline/49034211,https://www.airlines-manager.com/network/showflight/51363387233,https://www.airlines-manager.com/aircraft/show/114912269,15:30,18:59,310,"$173,403.00","$150,893.00"
SFO - BUR,51363387234,SFO-SAV-JAN 2,A321-200,https://www.airlines-manager.com/network/showline/49034211,https://www.airlines-manager.com/network/showflight/51363387234,https://www.airlines-manager.com/aircraft/show/114912266,17:00,20:29,310,"$173,403.00","$150,893.00"
SFO - BWI,51335558176,SFO CARGO 2,737-700,https://www.airlines-manager.com/network/showline/40230066,https://www.airlines-manager.com/network/showflight/51335558176,https://www.airlines-manager.com/aircraft/show/107573128,0:30,11:59,0,"$197,154.00","$150,415.00"
SFO - BWI,51335558177,SFO-BWI-ANC 1,A321neo,https://www.airlines-manager.com/network/showline/40230066,https://www.airlines-manager.com/network/showflight/51335558177,https://www.airlines-manager.com/aircraft/show/106255845,4:45,16:14,338,"$783,882.00","$725,499.00"
SFO - BWI,51335558178,SFO-BWI-ANC 2,A321neo,https://www.airlines-manager.com/network/showline/40230066,https://www.airlines-manager.com/network/showflight/51335558178,https://www.airlines-manager.com/aircraft/show/106255846,5:45,17:14,338,"$783,882.00","$725,499.00"
SFO - BWI,51335558179,SFO-BWI-ANC 3,A321neo,https://www.airlines-manager.com/network/showline/40230066,https://www.airlines-manager.com/network/showflight/51335558179,https://www.airlines-manager.com/aircraft/show/106255847,6:45,18:14,338,"$783,882.00","$725,499.00"
SFO - BWI,51355083426,SFO-BWI-ANC 4,A321neo,https://www.airlines-manager.com/network/showline/40230066,https://www.airlines-manager.com/network/showflight/51355083426,https://www.airlines-manager.com/aircraft/show/106255848,15:00,2:29,338,"$783,882.00","$725,499.00"
SFO - BWI,51363387281,SFO-BWI-ANC 5,A321neo,https://www.airlines-manager.com/network/showline/40230066,https://www.airlines-manager.com/network/showflight/51363387281,https://www.airlines-manager.com/aircraft/show/106255849,16:00,3:29,338,"$783,882.00","$725,499.00"
SFO - CAK,51335558425,SFO-ALB-CAK 1,A321-200,https://www.airlines-manager.com/network/showline/48344107,https://www.airlines-manager.com/network/showflight/51335558425,https://www.airlines-manager.com/aircraft/show/112650099,2:00,12:29,310,"$657,790.00","$607,616.00"
SFO - CAK,51335558426,SFO-ALB-CAK 2,A321-200,https://www.airlines-manager.com/network/showline/48344107,https://www.airlines-manager.com/network/showflight/51335558426,https://www.airlines-manager.com/aircraft/show/112650098,6:00,16:29,310,"$657,790.00","$607,616.00"
SFO - CAK,51355083376,SFO-ALB-CAK 3,A321-200,https://www.airlines-manager.com/network/showline/48344107,https://www.airlines-manager.com/network/showflight/51355083376,https://www.airlines-manager.com/aircraft/show/112650097,14:00,0:29,310,"$657,790.00","$607,616.00"
SFO - CAK,51363387608,SFO-ALB-CAK 4,A321-200,https://www.airlines-manager.com/network/showline/48344107,https://www.airlines-manager.com/network/showflight/51363387608,https://www.airlines-manager.com/aircraft/show/112650096,19:00,5:29,310,"$657,790.00","$607,616.00"
SFO - CAK,51370307064,SFO-ALB-CAK 5 B,A319-100,https://www.airlines-manager.com/network/showline/48344107,https://www.airlines-manager.com/network/showflight/51370307064,https://www.airlines-manager.com/aircraft/show/112650090,21:00,7:29,198,"$494,209.00","$453,976.00"
SFO - CHS,51335558665,SFO-MHT-CHS 2,737-900ER,https://www.airlines-manager.com/network/showline/49035983,https://www.airlines-manager.com/network/showflight/51335558665,https://www.airlines-manager.com/aircraft/show/114917464,5:30,16:44,320,"$701,822.00","$642,673.00"
SFO - CHS,51335558666,SFO-MHT-CHS 5 B,A319-100,https://www.airlines-manager.com/network/showline/49035983,https://www.airlines-manager.com/network/showflight/51335558666,https://www.airlines-manager.com/aircraft/show/114912262,8:30,19:59,198,"$529,290.00","$486,033.00"
SFO - CHS,51355083206,SFO-MHT-CHS 3,737-900ER,https://www.airlines-manager.com/network/showline/49035983,https://www.airlines-manager.com/network/showflight/51355083206,https://www.airlines-manager.com/aircraft/show/114917463,13:00,0:14,320,"$701,822.00","$642,673.00"
SFO - CHS,51363387493,SFO-MHT-CHS 4,737-900ER,https://www.airlines-manager.com/network/showline/49035983,https://www.airlines-manager.com/network/showflight/51363387493,https://www.airlines-manager.com/aircraft/show/114266973,17:00,4:14,320,"$701,822.00","$642,673.00"
SFO - CLE,51335558673,SFO-CLE-MKE 2,737-900ER,https://www.airlines-manager.com/network/showline/45959453,https://www.airlines-manager.com/network/showflight/51335558673,https://www.airlines-manager.com/aircraft/show/92519369,5:30,15:59,320,"$649,596.00","$591,877.00"
SFO - CLE,51335558674,SFO-ATL-CLE,ERJ-175,https://www.airlines-manager.com/network/showline/45959453,https://www.airlines-manager.com/network/showflight/51335558674,https://www.airlines-manager.com/aircraft/show/107467212,6:30,16:59,112,"$305,361.00","$270,220.00"
SFO - CLE,51335558675,SFO-CLE-MKE 5,737-900ER,https://www.airlines-manager.com/network/showline/45959453,https://www.airlines-manager.com/network/showflight/51335558675,https://www.airlines-manager.com/aircraft/show/92519370,7:30,17:59,320,"$649,596.00","$591,877.00"
SFO - CLE,51355083386,SFO-CLE-MKE 1,737-900ER,https://www.airlines-manager.com/network/showline/45959453,https://www.airlines-manager.com/network/showflight/51355083386,https://www.airlines-manager.com/aircraft/show/92519368,14:00,0:29,320,"$649,596.00","$591,877.00"
SFO - CLE,51363387601,SFO-CLE-MKE 4,737-900ER,https://www.airlines-manager.com/network/showline/45959453,https://www.airlines-manager.com/network/showflight/51363387601,https://www.airlines-manager.com/aircraft/show/92519371,19:00,5:29,320,"$649,596.00","$591,877.00"
SFO - CLE,51370307009,SFO-CLE-MKE 3,737-900ER,https://www.airlines-manager.com/network/showline/45959453,https://www.airlines-manager.com/network/showflight/51370307009,https://www.airlines-manager.com/aircraft/show/92519367,20:15,6:44,320,"$649,596.00","$591,877.00"
SFO - CLT,51335558094,SFO-IAD-CLT 3,757-300,https://www.airlines-manager.com/network/showline/43894395,https://www.airlines-manager.com/network/showflight/51335558094,https://www.airlines-manager.com/aircraft/show/96135563,0:00,10:44,400,"$887,593.00","$807,628.00"
SFO - CLT,51335558095,SFO-IAD-CLT 4,757-300,https://www.airlines-manager.com/network/showline/43894395,https://www.airlines-manager.com/network/showflight/51335558095,https://www.airlines-manager.com/aircraft/show/96135562,6:00,16:44,400,"$887,593.00","$807,628.00"
SFO - CLT,51355083313,SFO-IAD-CLT 1,757-300,https://www.airlines-manager.com/network/showline/43894395,https://www.airlines-manager.com/network/showflight/51355083313,https://www.airlines-manager.com/aircraft/show/96135565,13:15,23:59,400,"$887,593.00","$807,628.00"
SFO - CLT,51363387216,SFO-IAD-CLT 5,757-300,https://www.airlines-manager.com/network/showline/43894395,https://www.airlines-manager.com/network/showflight/51363387216,https://www.airlines-manager.com/aircraft/show/96135561,15:15,1:59,400,"$887,593.00","$807,628.00"
SFO - CLT,51363387217,SFO-IAD-CLT 2,757-300,https://www.airlines-manager.com/network/showline/43894395,https://www.airlines-manager.com/network/showflight/51363387217,https://www.airlines-manager.com/aircraft/show/96135564,17:15,3:59,400,"$887,593.00","$807,628.00"
SFO - CMH,51335558223,SFO-BNA-CMH 2,737-900ER,https://www.airlines-manager.com/network/showline/45364394,https://www.airlines-manager.com/network/showflight/51335558223,https://www.airlines-manager.com/aircraft/show/103365582,0:45,10:59,320,"$634,783.00","$577,486.00"
SFO - CMH,51335558224,SFO-BNA-CMH 5,737-900ER,https://www.airlines-manager.com/network/showline/45364394,https://www.airlines-manager.com/network/showflight/51335558224,https://www.airlines-manager.com/aircraft/show/103365579,5:30,15:44,320,"$634,783.00","$577,486.00"
SFO - CMH,51355083294,SFO-BNA-CMH 3,737-900ER,https://www.airlines-manager.com/network/showline/45364394,https://www.airlines-manager.com/network/showflight/51355083294,https://www.airlines-manager.com/aircraft/show/103365581,13:00,23:14,320,"$634,783.00","$577,486.00"
SFO - CMH,51355083295,SFO-BNA-CMH 4,737-900ER,https://www.airlines-manager.com/network/showline/45364394,https://www.airlines-manager.com/network/showflight/51355083295,https://www.airlines-manager.com/aircraft/show/103365580,15:00,1:14,320,"$634,783.00","$577,486.00"
SFO - CMH,51363387246,SFO-BNA-CMH 6,ERJ-175,https://www.airlines-manager.com/network/showline/45364394,https://www.airlines-manager.com/network/showflight/51363387246,https://www.airlines-manager.com/aircraft/show/82323681,15:45,1:59,112,"$298,947.00","$264,137.00"
SFO - CMH,51374354713,SFO-BNA-CMH 1,737-900ER,https://www.airlines-manager.com/network/showline/45364394,https://www.airlines-manager.com/network/showflight/51374354713,https://www.airlines-manager.com/aircraft/show/103365583,22:45,8:59,320,"$634,783.00","$577,486.00"
SFO - CVG,51335558647,SFO-IND-CVG 3,A321-200,https://www.airlines-manager.com/network/showline/44892288,https://www.airlines-manager.com/network/showflight/51335558647,https://www.airlines-manager.com/aircraft/show/99316504,5:00,14:59,310,"$626,343.00","$573,316.00"
SFO - CVG,51335558648,SFO-IND-CVG 5,A321-200,https://www.airlines-manager.com/network/showline/44892288,https://www.airlines-manager.com/network/showflight/51335558648,https://www.airlines-manager.com/aircraft/show/99316502,7:00,16:59,310,"$626,343.00","$573,316.00"
SFO - CVG,51355083291,SFO-IND-CVG 2,A321-200,https://www.airlines-manager.com/network/showline/44892288,https://www.airlines-manager.com/network/showflight/51355083291,https://www.airlines-manager.com/aircraft/show/99316505,13:00,22:59,310,"$626,343.00","$573,316.00"
SFO - CVG,51355083292,SFO-IND-CVG 4,A321-200,https://www.airlines-manager.com/network/showline/44892288,https://www.airlines-manager.com/network/showflight/51355083292,https://www.airlines-manager.com/aircraft/show/99316503,15:00,0:59,310,"$626,343.00","$573,316.00"
SFO - CVG,51363387467,SFO-IND-CVG 6,ERJ-175,https://www.airlines-manager.com/network/showline/44892288,https://www.airlines-manager.com/network/showflight/51363387467,https://www.airlines-manager.com/aircraft/show/99174346,17:00,2:59,112,"$293,737.00","$258,374.00"
SFO - CVG,51374354702,SFO-IND-CVG 1,A321-200,https://www.airlines-manager.com/network/showline/44892288,https://www.airlines-manager.com/network/showflight/51374354702,https://www.airlines-manager.com/aircraft/show/99316506,22:45,8:44,310,"$626,343.00","$573,316.00"
SFO - DEL,51335558085,SFO 168B-2 B,747-400,https://www.airlines-manager.com/network/showline/41242837,https://www.airlines-manager.com/network/showflight/51335558085,https://www.airlines-manager.com/aircraft/show/87566901,0:00,5:29,1046,"$5,770,663.00","$5,352,094.00"
SFO - DEL,51335558086,SFO 168A-2 B,747-400,https://www.airlines-manager.com/network/showline/41242837,https://www.airlines-manager.com/network/showflight/51335558086,https://www.airlines-manager.com/aircraft/show/86596991,2:00,7:29,1046,"$5,770,663.00","$5,352,094.00"
SFO - DEN,51335558126,SFO-IAH-MEX 5,757-300,https://www.airlines-manager.com/network/showline/40738405,https://www.airlines-manager.com/network/showflight/51335558126,https://www.airlines-manager.com/aircraft/show/101045335,0:15,5:59,400,"$472,585.00","$404,621.00"
SFO - DEN,51335558127,SFO-IAH-MEX 1,757-300,https://www.airlines-manager.com/network/showline/40738405,https://www.airlines-manager.com/network/showflight/51335558127,https://www.airlines-manager.com/aircraft/show/101045339,6:30,12:14,400,"$472,585.00","$404,621.00"
SFO - DEN,51335558128,SFO-IAH-MEX 4,757-300,https://www.airlines-manager.com/network/showline/40738405,https://www.airlines-manager.com/network/showflight/51335558128,https://www.airlines-manager.com/aircraft/show/101045336,8:30,14:14,400,"$472,585.00","$404,621.00"
SFO - DEN,51355083205,SFO-IAH-MEX 3,757-300,https://www.airlines-manager.com/network/showline/40738405,https://www.airlines-manager.com/network/showflight/51355083205,https://www.airlines-manager.com/aircraft/show/101045337,13:00,18:44,400,"$472,585.00","$404,621.00"
SFO - DEN,51370307152,SFO-IAH-MEX 2,757-300,https://www.airlines-manager.com/network/showline/40738405,https://www.airlines-manager.com/network/showflight/51370307152,https://www.airlines-manager.com/aircraft/show/101045338,22:15,3:59,376,"$455,884.00","$388,521.00"
SFO - DFW,51335558335,SFO-ATL-DFW S,A321-200,https://www.airlines-manager.com/network/showline/40852421,https://www.airlines-manager.com/network/showflight/51335558335,https://www.airlines-manager.com/aircraft/show/106766698,1:30,9:14,232,"$480,391.00","$419,158.00"
SFO - DFW,51363387366,SFO 84A-7 E1,777-300,https://www.airlines-manager.com/network/showline/40852421,https://www.airlines-manager.com/network/showflight/51363387366,https://www.airlines-manager.com/aircraft/show/85806656,16:30,23:59,932,"$1,227,121.00","$1,082,026.00"
SFO - DFW,51374354761,SFO 84A-6 E1,777-300,https://www.airlines-manager.com/network/showline/40852421,https://www.airlines-manager.com/network/showflight/51374354761,https://www.airlines-manager.com/aircraft/show/85806724,23:15,6:44,738,"$1,046,339.00","$910,826.00"
SFO - DSM,51335558629,SFO-TUL-DSM 3,737-900ER,https://www.airlines-manager.com/network/showline/47065667,https://www.airlines-manager.com/network/showflight/51335558629,https://www.airlines-manager.com/aircraft/show/108410858,4:30,12:29,320,"$505,714.00","$459,876.00"
SFO - DSM,51355083228,SFO-TUL-DSM 2,737-900ER,https://www.airlines-manager.com/network/showline/47065667,https://www.airlines-manager.com/network/showflight/51355083228,https://www.airlines-manager.com/aircraft/show/108410857,13:00,20:59,320,"$505,714.00","$459,876.00"
SFO - DSM,51355083229,SFO-TUL-DSM,ERJ-175,https://www.airlines-manager.com/network/showline/47065667,https://www.airlines-manager.com/network/showflight/51355083229,https://www.airlines-manager.com/aircraft/show/108466264,15:00,23:14,112,"$239,606.00","$212,185.00"
SFO - DSM,51374354723,SFO-TUL-DSM 1,737-900ER,https://www.airlines-manager.com/network/showline/47065667,https://www.airlines-manager.com/network/showflight/51374354723,https://www.airlines-manager.com/aircraft/show/108410856,22:45,6:44,320,"$505,714.00","$459,876.00"
SFO - DSM,51374354724,SFO-TUL-DSM 4,737-900ER,https://www.airlines-manager.com/network/showline/47065667,https://www.airlines-manager.com/network/showflight/51374354724,https://www.airlines-manager.com/aircraft/show/108410859,23:30,7:29,320,"$505,714.00","$459,876.00"
SFO - DTW,51335558623,SFO-ORD-DTW 4,757-300,https://www.airlines-manager.com/network/showline/42739130,https://www.airlines-manager.com/network/showflight/51335558623,https://www.airlines-manager.com/aircraft/show/101045331,4:30,14:29,400,"$818,049.00","$742,926.00"
SFO - DTW,51335558624,SFO-ORD-DTW 3,757-300,https://www.airlines-manager.com/network/showline/42739130,https://www.airlines-manager.com/network/showflight/51335558624,https://www.airlines-manager.com/aircraft/show/101045332,5:00,14:59,400,"$818,049.00","$742,926.00"
SFO - DTW,51355083445,SFO-ORD-DTW 2,757-300,https://www.airlines-manager.com/network/showline/42739130,https://www.airlines-manager.com/network/showflight/51355083445,https://www.airlines-manager.com/aircraft/show/101045333,15:00,0:59,400,"$818,049.00","$742,926.00"
SFO - DTW,51363387447,SFO-ORD-DTW 5,757-300,https://www.airlines-manager.com/network/showline/42739130,https://www.airlines-manager.com/network/showflight/51363387447,https://www.airlines-manager.com/aircraft/show/101045330,17:00,2:59,400,"$818,049.00","$742,926.00"
SFO - DTW,51370307131,SFO-ORD-DTW 1,757-300,https://www.airlines-manager.com/network/showline/42739130,https://www.airlines-manager.com/network/showflight/51370307131,https://www.airlines-manager.com/aircraft/show/101045334,22:00,7:59,400,"$818,049.00","$742,926.00"
SFO - DXB,51335558670,SFO 168B-3 B,747-400,https://www.airlines-manager.com/network/showline/41150917,https://www.airlines-manager.com/network/showflight/51335558670,https://www.airlines-manager.com/aircraft/show/87566902,5:30,12:29,1046,"$5,973,258.00","$5,508,070.00"
SFO - DXB,51335558671,SFO 168A-3 B,747-400,https://www.airlines-manager.com/network/showline/41150917,https://www.airlines-manager.com/network/showflight/51335558671,https://www.airlines-manager.com/aircraft/show/86483501,7:30,14:29,1046,"$5,973,258.00","$5,508,070.00"
SFO - ELP,51335558680,SFO-ICT-BFF 1,A321-200,https://www.airlines-manager.com/network/showline/49034229,https://www.airlines-manager.com/network/showflight/51335558680,https://www.airlines-manager.com/aircraft/show/114912267,5:45,11:44,310,"$374,636.00","$339,864.00"
SFO - ELP,51335558681,SFO-ICT-BFF 5,ERJ-175,https://www.airlines-manager.com/network/showline/49034229,https://www.airlines-manager.com/network/showflight/51335558681,https://www.airlines-manager.com/aircraft/show/114912306,7:15,13:14,112,"$177,417.00","$154,823.00"
SFO - ELP,51335558682,SFO-ICT-BFF 4,A321-200,https://www.airlines-manager.com/network/showline/49034229,https://www.airlines-manager.com/network/showflight/51335558682,https://www.airlines-manager.com/aircraft/show/114912268,8:30,14:29,310,"$374,636.00","$339,864.00"
SFO - ELP,51355083444,SFO-ICT-BFF 3,A321-200,https://www.airlines-manager.com/network/showline/49034229,https://www.airlines-manager.com/network/showflight/51355083444,https://www.airlines-manager.com/aircraft/show/114912263,15:00,20:59,310,"$374,636.00","$339,864.00"
SFO - ELP,51370307139,SFO-ICT-BFF 2,A321-200,https://www.airlines-manager.com/network/showline/49034229,https://www.airlines-manager.com/network/showflight/51370307139,https://www.airlines-manager.com/aircraft/show/114912264,22:15,4:14,310,"$374,636.00","$339,864.00"
SFO - FAT,51335558413,SFO-TUL-DSM 2,737-900ER,https://www.airlines-manager.com/network/showline/47065660,https://www.airlines-manager.com/network/showflight/51335558413,https://www.airlines-manager.com/aircraft/show/108410857,2:00,4:44,320,"$95,249.00","$71,053.00"
SFO - FAT,51347851226,SFO-TUL-DSM 1,737-900ER,https://www.airlines-manager.com/network/showline/47065660,https://www.airlines-manager.com/network/showflight/51347851226,https://www.airlines-manager.com/aircraft/show/108410856,11:45,14:29,320,"$95,249.00","$71,053.00"
SFO - FAT,51355083226,SFO-TUL-DSM 4,737-900ER,https://www.airlines-manager.com/network/showline/47065660,https://www.airlines-manager.com/network/showflight/51355083226,https://www.airlines-manager.com/aircraft/show/108410859,13:00,15:44,320,"$95,249.00","$71,053.00"
SFO - FAT,51363387553,SFO-TUL-DSM 3,737-900ER,https://www.airlines-manager.com/network/showline/47065660,https://www.airlines-manager.com/network/showflight/51363387553,https://www.airlines-manager.com/aircraft/show/108410858,18:00,20:44,320,"$95,249.00","$71,053.00"
SFO - FAT,51374354750,SFO-TUL-DSM,ERJ-175,https://www.airlines-manager.com/network/showline/47065660,https://www.airlines-manager.com/network/showflight/51374354750,https://www.airlines-manager.com/aircraft/show/108466264,23:15,1:59,67,"$33,416.00","$21,165.00"
SFO - FLL,51335558108,SFO-FLL-TPA 2,737-900ER,https://www.airlines-manager.com/network/showline/44448463,https://www.airlines-manager.com/network/showflight/51335558108,https://www.airlines-manager.com/aircraft/show/97955543,0:15,12:14,320,"$735,023.00","$666,995.00"
SFO - FLL,51335558109,SFO-FLL-TPA 4,737-900ER,https://www.airlines-manager.com/network/showline/44448463,https://www.airlines-manager.com/network/showflight/51335558109,https://www.airlines-manager.com/aircraft/show/97955541,4:15,16:14,320,"$735,023.00","$666,995.00"
SFO - FLL,51335558110,SFO-FLL-TPA 6 B,A319-100,https://www.airlines-manager.com/network/showline/44448463,https://www.airlines-manager.com/network/showflight/51335558110,https://www.airlines-manager.com/aircraft/show/97900729,7:30,19:44,198,"$552,865.00","$503,386.00"
SFO - FLL,51355083257,SFO-FLL-TPA 1,737-900ER,https://www.airlines-manager.com/network/showline/44448463,https://www.airlines-manager.com/network/showflight/51355083257,https://www.airlines-manager.com/aircraft/show/97955544,13:00,0:59,320,"$735,023.00","$666,995.00"
SFO - FLL,51363387472,SFO-FLL-TPA 3,737-900ER,https://www.airlines-manager.com/network/showline/44448463,https://www.airlines-manager.com/network/showflight/51363387472,https://www.airlines-manager.com/aircraft/show/97955542,17:00,4:59,320,"$735,023.00","$666,995.00"
SFO - FLL,51370306954,SFO-FLL-TPA 5,737-900ER,https://www.airlines-manager.com/network/showline/44448463,https://www.airlines-manager.com/network/showflight/51370306954,https://www.airlines-manager.com/aircraft/show/97955540,20:00,7:59,320,"$735,023.00","$666,995.00"
SFO - FSD,51335558180,SFO-OKC-FSD 1,737-900ER,https://www.airlines-manager.com/network/showline/46719662,https://www.airlines-manager.com/network/showflight/51335558180,https://www.airlines-manager.com/aircraft/show/107160378,0:30,7:59,320,"$469,452.00","$426,170.00"
SFO - FSD,51335558181,SFO-OKC-FSD 5,ERJ-175,https://www.airlines-manager.com/network/showline/46719662,https://www.airlines-manager.com/network/showflight/51335558181,https://www.airlines-manager.com/aircraft/show/107132310,2:00,9:29,112,"$222,192.00","$196,473.00"
SFO - FSD,51335558182,SFO-OKC-FSD 4,737-900ER,https://www.airlines-manager.com/network/showline/46719662,https://www.airlines-manager.com/network/showflight/51335558182,https://www.airlines-manager.com/aircraft/show/107160381,3:00,10:29,320,"$469,452.00","$426,170.00"
SFO - FSD,51335558183,SFO-OKC-FSD 3,737-900ER,https://www.airlines-manager.com/network/showline/46719662,https://www.airlines-manager.com/network/showflight/51335558183,https://www.airlines-manager.com/aircraft/show/107160380,8:00,15:29,320,"$469,452.00","$426,170.00"
SFO - FSD,51363387349,SFO-OKC-FSD 2,737-900ER,https://www.airlines-manager.com/network/showline/46719662,https://www.airlines-manager.com/network/showflight/51363387349,https://www.airlines-manager.com/aircraft/show/107160379,16:00,23:29,284,"$436,919.00","$394,993.00"
SFO - HKG,51370307076,SFO 168B-7 B,747-400,https://www.airlines-manager.com/network/showline/40783037,https://www.airlines-manager.com/network/showflight/51370307076,https://www.airlines-manager.com/aircraft/show/86823556,21:15,23:59,1046,"$5,246,099.00","$4,847,510.00"
SFO - HKG,51374354746,SFO 168A-7 B,747-400,https://www.airlines-manager.com/network/showline/40783037,https://www.airlines-manager.com/network/showflight/51374354746,https://www.airlines-manager.com/aircraft/show/88032835,23:15,1:59,1046,"$5,246,099.00","$4,847,510.00"
SFO - IAD,51335558103,SFO-IAD-CLT 1,757-300,https://www.airlines-manager.com/network/showline/43924778,https://www.airlines-manager.com/network/showflight/51335558103,https://www.airlines-manager.com/aircraft/show/96135565,0:00,11:14,400,"$906,409.00","$828,391.00"
SFO - IAD,51335558104,SFO-IAD-CLT 5,757-300,https://www.airlines-manager.com/network/showline/43924778,https://www.airlines-manager.com/network/showflight/51335558104,https://www.airlines-manager.com/aircraft/show/96135561,4:00,15:14,400,"$906,409.00","$828,391.00"
SFO - IAD,51335558105,SFO-IAD-CLT 2,757-300,https://www.airlines-manager.com/network/showline/43924778,https://www.airlines-manager.com/network/showflight/51335558105,https://www.airlines-manager.com/aircraft/show/96135564,6:00,17:14,400,"$906,409.00","$828,391.00"
SFO - IAD,51355083187,SFO-IAD-CLT 3,757-300,https://www.airlines-manager.com/network/showline/43924778,https://www.airlines-manager.com/network/showflight/51355083187,https://www.airlines-manager.com/aircraft/show/96135563,12:45,23:59,400,"$906,409.00","$828,391.00"
SFO - IAD,51363387441,SFO-IAD-CLT 4,757-300,https://www.airlines-manager.com/network/showline/43924778,https://www.airlines-manager.com/network/showflight/51363387441,https://www.airlines-manager.com/aircraft/show/96135562,16:45,3:59,400,"$906,409.00","$828,391.00"
SFO - IAH,51335558642,SFO-IAH-MEX 2,757-300,https://www.airlines-manager.com/network/showline/40762091,https://www.airlines-manager.com/network/showflight/51335558642,https://www.airlines-manager.com/aircraft/show/101045338,4:45,12:59,400,"$690,443.00","$620,635.00"
SFO - IAH,51335558643,SFO-IAH-MEX 5,757-300,https://www.airlines-manager.com/network/showline/40762091,https://www.airlines-manager.com/network/showflight/51335558643,https://www.airlines-manager.com/aircraft/show/101045335,6:45,14:59,400,"$690,443.00","$620,635.00"
SFO - IAH,51355083199,SFO-IAH-MEX 1,757-300,https://www.airlines-manager.com/network/showline/40762091,https://www.airlines-manager.com/network/showflight/51355083199,https://www.airlines-manager.com/aircraft/show/101045339,13:00,21:14,400,"$690,443.00","$620,635.00"
SFO - IAH,51355083200,SFO-IAH-MEX 4,757-300,https://www.airlines-manager.com/network/showline/40762091,https://www.airlines-manager.com/network/showflight/51355083200,https://www.airlines-manager.com/aircraft/show/101045336,15:00,23:14,400,"$690,443.00","$620,635.00"
SFO - IAH,51363387632,SFO-IAH-MEX 3,757-300,https://www.airlines-manager.com/network/showline/40762091,https://www.airlines-manager.com/network/showflight/51363387632,https://www.airlines-manager.com/aircraft/show/101045337,19:30,3:44,400,"$690,443.00","$620,635.00"
SFO - ICN,51335558107,SFO 84A-6 E1,777-300,https://www.airlines-manager.com/network/showline/40609625,https://www.airlines-manager.com/network/showflight/51335558107,https://www.airlines-manager.com/aircraft/show/85806724,0:15,22:44,932,"$3,796,586.00","$3,446,563.00"
SFO - ICN,51370306949,SFO 84A-2 E1,777-300,https://www.airlines-manager.com/network/showline/40609625,https://www.airlines-manager.com/network/showflight/51370306949,https://www.airlines-manager.com/aircraft/show/86776211,20:00,18:29,932,"$3,803,342.00","$3,453,319.00"
SFO - ICT,51335558716,SFO-ICT-BFF 2,A321-200,https://www.airlines-manager.com/network/showline/49034224,https://www.airlines-manager.com/network/showflight/51335558716,https://www.airlines-manager.com/aircraft/show/114912264,8:00,15:29,310,"$467,215.00","$428,080.00"
SFO - ICT,51363387326,SFO-ICT-BFF 1,A321-200,https://www.airlines-manager.com/network/showline/49034224,https://www.airlines-manager.com/network/showflight/51363387326,https://www.airlines-manager.com/aircraft/show/114912267,16:00,23:29,310,"$467,215.00","$428,080.00"
SFO - ICT,51363387327,SFO-ICT-BFF 5,ERJ-175,https://www.airlines-manager.com/network/showline/49034224,https://www.airlines-manager.com/network/showflight/51363387327,https://www.airlines-manager.com/aircraft/show/114912306,17:30,0:59,112,"$220,589.00","$194,733.00"
SFO - ICT,51363387328,SFO-ICT-BFF 4,A321-200,https://www.airlines-manager.com/network/showline/49034224,https://www.airlines-manager.com/network/showflight/51363387328,https://www.airlines-manager.com/aircraft/show/114912268,18:45,2:14,310,"$467,215.00","$428,080.00"
SFO - IND,51335558661,SFO-IND-CVG 4,A321-200,https://www.airlines-manager.com/network/showline/44876694,https://www.airlines-manager.com/network/showflight/51335558661,https://www.airlines-manager.com/aircraft/show/99316503,5:15,14:59,310,"$601,784.00","$551,734.00"
SFO - IND,51335558662,SFO-IND-CVG 6,ERJ-175,https://www.airlines-manager.com/network/showline/44876694,https://www.airlines-manager.com/network/showflight/51335558662,https://www.airlines-manager.com/aircraft/show/99174346,7:15,16:59,112,"$282,593.00","$249,179.00"
SFO - IND,51355083279,SFO-IND-CVG 1,A321-200,https://www.airlines-manager.com/network/showline/44876694,https://www.airlines-manager.com/network/showflight/51355083279,https://www.airlines-manager.com/aircraft/show/99316506,13:00,22:44,310,"$601,784.00","$551,734.00"
SFO - IND,51355083280,SFO-IND-CVG 3,A321-200,https://www.airlines-manager.com/network/showline/44876694,https://www.airlines-manager.com/network/showflight/51355083280,https://www.airlines-manager.com/aircraft/show/99316504,15:00,0:44,310,"$601,784.00","$551,734.00"
SFO - IND,51363387466,SFO-IND-CVG 5,A321-200,https://www.airlines-manager.com/network/showline/44876694,https://www.airlines-manager.com/network/showflight/51363387466,https://www.airlines-manager.com/aircraft/show/99316502,17:00,2:44,310,"$601,784.00","$551,734.00"
SFO - IND,51374354740,SFO-IND-CVG 2,A321-200,https://www.airlines-manager.com/network/showline/44876694,https://www.airlines-manager.com/network/showflight/51374354740,https://www.airlines-manager.com/aircraft/show/99316505,23:00,8:44,310,"$601,784.00","$551,734.00"
SFO - JAN,51335558694,SFO-SAV-JAN 3,A321-200,https://www.airlines-manager.com/network/showline/49034208,https://www.airlines-manager.com/network/showflight/51335558694,https://www.airlines-manager.com/aircraft/show/114912269,6:15,15:29,310,"$581,463.00","$536,006.00"
SFO - JAN,51335558695,SFO-SAV-JAN 2,A321-200,https://www.airlines-manager.com/network/showline/49034208,https://www.airlines-manager.com/network/showflight/51335558695,https://www.airlines-manager.com/aircraft/show/114912266,7:45,16:59,310,"$581,463.00","$536,006.00"
SFO - JAN,51363387487,SFO-SAV-JAN 1,A321-200,https://www.airlines-manager.com/network/showline/49034208,https://www.airlines-manager.com/network/showflight/51363387487,https://www.airlines-manager.com/aircraft/show/114912265,17:00,2:14,310,"$581,463.00","$536,006.00"
SFO - JAN,51363387488,SFO-SAV-JAN 4,A321-200,https://www.airlines-manager.com/network/showline/49034208,https://www.airlines-manager.com/network/showflight/51363387488,https://www.airlines-manager.com/aircraft/show/114912270,19:00,4:14,310,"$581,463.00","$536,006.00"
SFO - JAX,51335558687,SFO-JAX-SAT 5,A321-200,https://www.airlines-manager.com/network/showline/45303043,https://www.airlines-manager.com/network/showflight/51335558687,https://www.airlines-manager.com/aircraft/show/86377315,6:00,17:14,310,"$700,332.00","$645,263.00"
SFO - JAX,51355083304,SFO-JAX-SAT 1,A321-200,https://www.airlines-manager.com/network/showline/45303043,https://www.airlines-manager.com/network/showflight/51355083304,https://www.airlines-manager.com/aircraft/show/86375568,13:00,0:14,310,"$700,332.00","$645,263.00"
SFO - JAX,51355083305,SFO-JAX-SAT 2,A321-200,https://www.airlines-manager.com/network/showline/45303043,https://www.airlines-manager.com/network/showflight/51355083305,https://www.airlines-manager.com/aircraft/show/86371267,15:00,2:14,310,"$700,332.00","$645,263.00"
SFO - JAX,51370307071,SFO-JAX-SAT 3,A321-200,https://www.airlines-manager.com/network/showline/45303043,https://www.airlines-manager.com/network/showflight/51370307071,https://www.airlines-manager.com/aircraft/show/86385102,21:00,8:14,310,"$700,332.00","$645,263.00"
SFO - JAX,51374354743,SFO-JAX-SAT 4,A321-200,https://www.airlines-manager.com/network/showline/45303043,https://www.airlines-manager.com/network/showflight/51374354743,https://www.airlines-manager.com/aircraft/show/86378760,23:00,10:14,310,"$700,332.00","$645,263.00"
SFO - JFK,51335558240,SFO-MIA-JFK 4,757-300,https://www.airlines-manager.com/network/showline/40228411,https://www.airlines-manager.com/network/showflight/51335558240,https://www.airlines-manager.com/aircraft/show/89233034,1:00,12:59,400,"$959,074.00","$860,576.00"
SFO - JFK,51335558241,SFO-MIA-JFK 5,757-300,https://www.airlines-manager.com/network/showline/40228411,https://www.airlines-manager.com/network/showflight/51335558241,https://www.airlines-manager.com/aircraft/show/89233035,7:00,18:59,400,"$959,074.00","$860,576.00"
SFO - JFK,51355083209,SFO-MIA-JFK 1,757-300,https://www.airlines-manager.com/network/showline/40228411,https://www.airlines-manager.com/network/showflight/51355083209,https://www.airlines-manager.com/aircraft/show/89233032,13:00,0:59,400,"$959,074.00","$860,576.00"
SFO - JFK,51363387310,SFO-MIA-JFK 2,757-300,https://www.airlines-manager.com/network/showline/40228411,https://www.airlines-manager.com/network/showflight/51363387310,https://www.airlines-manager.com/aircraft/show/84622093,16:00,3:59,400,"$959,074.00","$860,576.00"
SFO - JFK,51363387311,SFO-MIA-JFK 3,757-300,https://www.airlines-manager.com/network/showline/40228411,https://www.airlines-manager.com/network/showflight/51363387311,https://www.airlines-manager.com/aircraft/show/89233031,19:00,6:59,400,"$959,074.00","$860,576.00"
SFO - KOA,51335558469,SFO-KOA-PWM 3,A321-200,https://www.airlines-manager.com/network/showline/48344087,https://www.airlines-manager.com/network/showflight/51335558469,https://www.airlines-manager.com/aircraft/show/112650101,2:45,13:59,310,"$702,433.00","$647,561.00"
SFO - KOA,51335558470,SFO-KOA-PWM 4,A321-200,https://www.airlines-manager.com/network/showline/48344087,https://www.airlines-manager.com/network/showflight/51335558470,https://www.airlines-manager.com/aircraft/show/112650100,4:45,15:59,310,"$702,433.00","$647,561.00"
SFO - KOA,51355083213,SFO-KOA-PWM 5 B,A319-100,https://www.airlines-manager.com/network/showline/48344087,https://www.airlines-manager.com/network/showflight/51355083213,https://www.airlines-manager.com/aircraft/show/112650091,13:00,0:14,198,"$527,256.00","$483,257.00"
SFO - KOA,51363387482,SFO-KOA-PWM 1,A321-200,https://www.airlines-manager.com/network/showline/48344087,https://www.airlines-manager.com/network/showflight/51363387482,https://www.airlines-manager.com/aircraft/show/112650103,17:00,4:14,310,"$702,433.00","$647,561.00"
SFO - KOA,51370306979,SFO-KOA-PWM 2,A321-200,https://www.airlines-manager.com/network/showline/48344087,https://www.airlines-manager.com/network/showflight/51370306979,https://www.airlines-manager.com/aircraft/show/112650102,20:00,7:14,310,"$702,433.00","$647,561.00"
SFO - LAS,51335558688,SFO-BOS-PHX 1,A321neo,https://www.airlines-manager.com/network/showline/40459405,https://www.airlines-manager.com/network/showflight/51335558688,https://www.airlines-manager.com/aircraft/show/104901564,6:00,9:44,338,"$216,797.00","$178,104.00"
SFO - LAS,51335558689,SFO-BOS-PHX 4,A321neo,https://www.airlines-manager.com/network/showline/40459405,https://www.airlines-manager.com/network/showflight/51335558689,https://www.airlines-manager.com/aircraft/show/104870960,7:00,10:44,338,"$216,797.00","$178,104.00"
SFO - LAS,51347851231,SFO CARGO 1,737-700,https://www.airlines-manager.com/network/showline/40459405,https://www.airlines-manager.com/network/showflight/51347851231,https://www.airlines-manager.com/aircraft/show/107343113,12:00,15:44,0,"$55,652.00","$30,462.00"
SFO - LAS,51347851232,SFO-BOS-PHX 3,A321neo,https://www.airlines-manager.com/network/showline/40459405,https://www.airlines-manager.com/network/showflight/51347851232,https://www.airlines-manager.com/aircraft/show/104874465,12:00,15:44,338,"$216,797.00","$178,104.00"
SFO - LAS,51363387368,SFO-BOS-PHX 2,A321neo,https://www.airlines-manager.com/network/showline/40459405,https://www.airlines-manager.com/network/showflight/51363387368,https://www.airlines-manager.com/aircraft/show/104901544,16:30,20:14,338,"$216,797.00","$178,104.00"
SFO - LAS,51370307013,SFO-BOS-PHX 5,A321neo,https://www.airlines-manager.com/network/showline/40459405,https://www.airlines-manager.com/network/showflight/51370307013,https://www.airlines-manager.com/aircraft/show/104864961,20:30,0:14,338,"$216,797.00","$178,104.00"
SFO - LAX,51335558421,SFO-PHL-SEA 6 B,A319-100,https://www.airlines-manager.com/network/showline/41084093,https://www.airlines-manager.com/network/showflight/51335558421,https://www.airlines-manager.com/aircraft/show/97900730,2:00,5:29,198,"$133,122.00","$101,108.00"
SFO - LAX,51335558422,SFO-PHL-SEA 1,737-900ER,https://www.airlines-manager.com/network/showline/41084093,https://www.airlines-manager.com/network/showflight/51335558422,https://www.airlines-manager.com/aircraft/show/92390872,4:30,7:59,320,"$175,539.00","$128,328.00"
SFO - LAX,51335558423,SFO-PHL-SEA 5,737-900ER,https://www.airlines-manager.com/network/showline/41084093,https://www.airlines-manager.com/network/showflight/51335558423,https://www.airlines-manager.com/aircraft/show/92390869,7:30,10:59,320,"$175,539.00","$128,328.00"
SFO - LAX,51335558424,SFO-PHL-SEA 4,737-900ER,https://www.airlines-manager.com/network/showline/41084093,https://www.airlines-manager.com/network/showflight/51335558424,https://www.airlines-manager.com/aircraft/show/92390870,8:15,11:44,320,"$175,539.00","$128,328.00"
SFO - LAX,51347851240,SFO-PHL-SEA 3,737-900ER,https://www.airlines-manager.com/network/showline/41084093,https://www.airlines-manager.com/network/showflight/51347851240,https://www.airlines-manager.com/aircraft/show/92390873,12:00,15:29,320,"$175,539.00","$128,328.00"
SFO - LAX,51363387435,SFO-PHL-SEA 2,737-900ER,https://www.airlines-manager.com/network/showline/41084093,https://www.airlines-manager.com/network/showflight/51363387435,https://www.airlines-manager.com/aircraft/show/92390871,16:45,20:14,320,"$175,539.00","$128,328.00"
SFO - LEX,51335558416,SFO-BTV-LEX 1,A321-200,https://www.airlines-manager.com/network/showline/48344124,https://www.airlines-manager.com/network/showflight/51335558416,https://www.airlines-manager.com/aircraft/show/112650095,2:00,11:59,310,"$622,649.00","$575,201.00"
SFO - LEX,51335558417,SFO-BTV-LEX 2,A321-200,https://www.airlines-manager.com/network/showline/48344124,https://www.airlines-manager.com/network/showflight/51335558417,https://www.airlines-manager.com/aircraft/show/112650094,6:00,15:59,310,"$622,649.00","$575,201.00"
SFO - LEX,51335558418,SFO-BTV-LEX 3,A321-200,https://www.airlines-manager.com/network/showline/48344124,https://www.airlines-manager.com/network/showflight/51335558418,https://www.airlines-manager.com/aircraft/show/112650093,8:00,17:59,310,"$622,649.00","$575,201.00"
SFO - LEX,51355083375,SFO-BTV-LEX 4,A321-200,https://www.airlines-manager.com/network/showline/48344124,https://www.airlines-manager.com/network/showflight/51355083375,https://www.airlines-manager.com/aircraft/show/112650092,14:00,23:59,310,"$622,649.00","$575,201.00"
SFO - LEX,51370306973,SFO-BTV-LEX 5 B,A319-100,https://www.airlines-manager.com/network/showline/48344124,https://www.airlines-manager.com/network/showflight/51370306973,https://www.airlines-manager.com/aircraft/show/112650089,20:00,5:59,198,"$468,448.00","$430,402.00"
SFO - LIT,51335558441,SFO-SDF-LIT 3,A321-200,https://www.airlines-manager.com/network/showline/46472621,https://www.airlines-manager.com/network/showflight/51335558441,https://www.airlines-manager.com/aircraft/show/94886627,2:15,10:59,310,"$539,568.00","$496,540.00"
SFO - LIT,51335558442,SFO-SDF-LIT 5,A321-200,https://www.airlines-manager.com/network/showline/46472621,https://www.airlines-manager.com/network/showflight/51335558442,https://www.airlines-manager.com/aircraft/show/106453498,3:15,11:59,310,"$539,568.00","$496,540.00"
SFO - LIT,51355083357,SFO-SDF-LIT 2,A321-200,https://www.airlines-manager.com/network/showline/46472621,https://www.airlines-manager.com/network/showflight/51355083357,https://www.airlines-manager.com/aircraft/show/94886628,14:00,22:44,310,"$539,568.00","$496,540.00"
SFO - LIT,51355083358,SFO-SDF-LIT 4,A321-200,https://www.airlines-manager.com/network/showline/46472621,https://www.airlines-manager.com/network/showflight/51355083358,https://www.airlines-manager.com/aircraft/show/106453500,15:00,23:44,310,"$539,568.00","$496,540.00"
SFO - LIT,51374354776,SFO-SDF-LIT 1,A321-200,https://www.airlines-manager.com/network/showline/46472621,https://www.airlines-manager.com/network/showflight/51374354776,https://www.airlines-manager.com/aircraft/show/106453499,23:45,8:29,310,"$539,568.00","$496,540.00"
SFO - MCI,51335558706,SFO-MCI-OMA 2,737-900ER,https://www.airlines-manager.com/network/showline/46129471,https://www.airlines-manager.com/network/showflight/51335558706,https://www.airlines-manager.com/aircraft/show/88239554,7:00,14:59,320,"$504,223.00","$455,297.00"
SFO - MCI,51363387451,SFO-MCI-OMA 5 B,A319-100,https://www.airlines-manager.com/network/showline/46129471,https://www.airlines-manager.com/network/showflight/51363387451,https://www.airlines-manager.com/aircraft/show/105223003,17:00,0:59,198,"$380,381.00","$345,373.00"
SFO - MCI,51363387452,SFO-MCI-OMA 1,737-900ER,https://www.airlines-manager.com/network/showline/46129471,https://www.airlines-manager.com/network/showflight/51363387452,https://www.airlines-manager.com/aircraft/show/88239553,17:00,0:59,320,"$504,223.00","$455,297.00"
SFO - MCI,51363387453,SFO-MCI-OMA 4,737-900ER,https://www.airlines-manager.com/network/showline/46129471,https://www.airlines-manager.com/network/showflight/51363387453,https://www.airlines-manager.com/aircraft/show/88239557,18:45,2:44,320,"$504,223.00","$455,297.00"
SFO - MCI,51374354754,SFO-MCI-OMA 3,737-900ER,https://www.airlines-manager.com/network/showline/46129471,https://www.airlines-manager.com/network/showflight/51374354754,https://www.airlines-manager.com/aircraft/show/88239555,23:15,7:14,320,"$504,223.00","$455,297.00"
SFO - MCO,51335558552,SFO-MCO-MSP 2,A321neo,https://www.airlines-manager.com/network/showline/41349629,https://www.airlines-manager.com/network/showflight/51335558552,https://www.airlines-manager.com/aircraft/show/105367367,3:30,14:59,338,"$790,497.00","$725,528.00"
SFO - MCO,51335558553,SFO-MCO-MSP 5,A321neo,https://www.airlines-manager.com/network/showline/41349629,https://www.airlines-manager.com/network/showflight/51335558553,https://www.airlines-manager.com/aircraft/show/105367364,4:30,15:59,338,"$790,497.00","$725,528.00"
SFO - MCO,51355083421,SFO-MCO-MSP 1,A321neo,https://www.airlines-manager.com/network/showline/41349629,https://www.airlines-manager.com/network/showflight/51355083421,https://www.airlines-manager.com/aircraft/show/105367368,15:00,2:29,338,"$790,497.00","$725,528.00"
SFO - MCO,51363387459,SFO-MCO-MSP 4,A321neo,https://www.airlines-manager.com/network/showline/41349629,https://www.airlines-manager.com/network/showflight/51363387459,https://www.airlines-manager.com/aircraft/show/105367365,17:00,4:29,338,"$790,497.00","$725,528.00"
SFO - MCO,51363387460,SFO-MCO-MSP 3,A321neo,https://www.airlines-manager.com/network/showline/41349629,https://www.airlines-manager.com/network/showflight/51363387460,https://www.airlines-manager.com/aircraft/show/105367366,19:15,6:44,338,"$790,497.00","$725,528.00"
SFO - MCO,51370307014,SFO CARGO 1,737-700,https://www.airlines-manager.com/network/showline/41349629,https://www.airlines-manager.com/network/showflight/51370307014,https://www.airlines-manager.com/aircraft/show/107343113,20:30,7:59,0,"$198,320.00","$147,673.00"
SFO - MEM,51335558475,SFO-MEM-PIT 4,A321-200,https://www.airlines-manager.com/network/showline/44710521,https://www.airlines-manager.com/network/showflight/51335558475,https://www.airlines-manager.com/aircraft/show/98788934,2:45,11:59,310,"$573,538.00","$524,814.00"
SFO - MEM,51335558476,SFO-MEM-PIT 6,ERJ-175,https://www.airlines-manager.com/network/showline/44710521,https://www.airlines-manager.com/network/showflight/51335558476,https://www.airlines-manager.com/aircraft/show/98675305,5:45,14:59,112,"$269,307.00","$236,925.00"
SFO - MEM,51355083276,SFO-MEM-PIT 1,A321-200,https://www.airlines-manager.com/network/showline/44710521,https://www.airlines-manager.com/network/showflight/51355083276,https://www.airlines-manager.com/aircraft/show/98788937,13:00,22:14,310,"$573,538.00","$524,814.00"
SFO - MEM,51363387315,SFO-MEM-PIT 3,A321-200,https://www.airlines-manager.com/network/showline/44710521,https://www.airlines-manager.com/network/showflight/51363387315,https://www.airlines-manager.com/aircraft/show/98788935,16:00,1:14,310,"$573,538.00","$524,814.00"
SFO - MEM,51363387316,SFO-MEM-PIT 5,A321-200,https://www.airlines-manager.com/network/showline/44710521,https://www.airlines-manager.com/network/showflight/51363387316,https://www.airlines-manager.com/aircraft/show/98788933,19:00,4:14,310,"$573,538.00","$524,814.00"
SFO - MEM,51374354782,SFO-MEM-PIT 2,A321-200,https://www.airlines-manager.com/network/showline/44710521,https://www.airlines-manager.com/network/showflight/51374354782,https://www.airlines-manager.com/aircraft/show/98788936,23:45,8:59,310,"$573,538.00","$524,814.00"
SFO - MEX,51335558572,SFO-IAH-MEX 3,757-300,https://www.airlines-manager.com/network/showline/42730810,https://www.airlines-manager.com/network/showflight/51335558572,https://www.airlines-manager.com/aircraft/show/101045337,3:45,12:59,400,"$768,723.00","$697,856.00"
SFO - MEX,51355083201,SFO-IAH-MEX 2,757-300,https://www.airlines-manager.com/network/showline/42730810,https://www.airlines-manager.com/network/showflight/51355083201,https://www.airlines-manager.com/aircraft/show/101045338,13:00,22:14,400,"$768,723.00","$697,856.00"
SFO - MEX,51355083202,SFO-IAH-MEX 5,757-300,https://www.airlines-manager.com/network/showline/42730810,https://www.airlines-manager.com/network/showflight/51355083202,https://www.airlines-manager.com/aircraft/show/101045335,15:00,0:14,400,"$768,723.00","$697,856.00"
SFO - MEX,51370307092,SFO-IAH-MEX 1,757-300,https://www.airlines-manager.com/network/showline/42730810,https://www.airlines-manager.com/network/showflight/51370307092,https://www.airlines-manager.com/aircraft/show/101045339,21:15,6:29,400,"$768,723.00","$697,856.00"
SFO - MEX,51374354747,SFO-IAH-MEX 4,757-300,https://www.airlines-manager.com/network/showline/42730810,https://www.airlines-manager.com/network/showflight/51374354747,https://www.airlines-manager.com/aircraft/show/101045336,23:15,8:29,369,"$718,682.00","$649,707.00"
SFO - MHT,51335558607,SFO-MHT-CHS 4,737-900ER,https://www.airlines-manager.com/network/showline/49035982,https://www.airlines-manager.com/network/showflight/51335558607,https://www.airlines-manager.com/aircraft/show/114266973,4:15,16:44,320,"$758,618.00","$694,633.00"
SFO - MHT,51355083207,SFO-MHT-CHS 1,737-900ER,https://www.airlines-manager.com/network/showline/49035982,https://www.airlines-manager.com/network/showflight/51355083207,https://www.airlines-manager.com/aircraft/show/114917465,13:00,1:29,320,"$758,618.00","$694,633.00"
SFO - MHT,51363387495,SFO-MHT-CHS 2,737-900ER,https://www.airlines-manager.com/network/showline/49035982,https://www.airlines-manager.com/network/showflight/51363387495,https://www.airlines-manager.com/aircraft/show/114917464,17:00,5:29,320,"$758,618.00","$694,633.00"
SFO - MHT,51370306967,SFO-MHT-CHS 5 B,A319-100,https://www.airlines-manager.com/network/showline/49035982,https://www.airlines-manager.com/network/showflight/51370306967,https://www.airlines-manager.com/aircraft/show/114912262,20:00,8:29,198,"$568,682.00","$521,755.00"
SFO - MIA,51335558244,SFO-MIA-JFK 1,757-300,https://www.airlines-manager.com/network/showline/40228416,https://www.airlines-manager.com/network/showflight/51335558244,https://www.airlines-manager.com/aircraft/show/89233032,1:00,12:59,400,"$952,597.00","$862,754.00"
SFO - MIA,51335558245,SFO-MIA-JFK 2,757-300,https://www.airlines-manager.com/network/showline/40228416,https://www.airlines-manager.com/network/showflight/51335558245,https://www.airlines-manager.com/aircraft/show/84622093,4:00,15:59,400,"$952,597.00","$862,754.00"
SFO - MIA,51335558246,SFO-MIA-JFK 3,757-300,https://www.airlines-manager.com/network/showline/40228416,https://www.airlines-manager.com/network/showflight/51335558246,https://www.airlines-manager.com/aircraft/show/89233031,7:00,18:59,400,"$952,597.00","$862,754.00"
SFO - MIA,51355083211,SFO-MIA-JFK 4,757-300,https://www.airlines-manager.com/network/showline/40228416,https://www.airlines-manager.com/network/showflight/51355083211,https://www.airlines-manager.com/aircraft/show/89233034,13:00,0:59,400,"$952,597.00","$862,754.00"
SFO - MIA,51363387604,SFO-MIA-JFK 5,757-300,https://www.airlines-manager.com/network/showline/40228416,https://www.airlines-manager.com/network/showflight/51363387604,https://www.airlines-manager.com/aircraft/show/89233035,19:00,6:59,400,"$952,597.00","$862,754.00"
SFO - MKE,51335558184,SFO-CLE-MKE 1,737-900ER,https://www.airlines-manager.com/network/showline/45951021,https://www.airlines-manager.com/network/showflight/51335558184,https://www.airlines-manager.com/aircraft/show/92519368,0:30,9:44,320,"$582,470.00","$529,702.00"
SFO - MKE,51335558185,SFO-CLE-MKE 4,737-900ER,https://www.airlines-manager.com/network/showline/45951021,https://www.airlines-manager.com/network/showflight/51335558185,https://www.airlines-manager.com/aircraft/show/92519371,5:30,14:44,320,"$582,470.00","$529,702.00"
SFO - MKE,51335558186,SFO-CLE-MKE 3,737-900ER,https://www.airlines-manager.com/network/showline/45951021,https://www.airlines-manager.com/network/showflight/51335558186,https://www.airlines-manager.com/aircraft/show/92519367,6:45,15:59,320,"$582,470.00","$529,702.00"
SFO - MKE,51363387276,SFO-CLE-MKE 2,737-900ER,https://www.airlines-manager.com/network/showline/45951021,https://www.airlines-manager.com/network/showflight/51363387276,https://www.airlines-manager.com/aircraft/show/92519369,16:00,1:14,320,"$582,470.00","$529,702.00"
SFO - MKE,51363387277,SFO-CLE-MKE 5,737-900ER,https://www.airlines-manager.com/network/showline/45951021,https://www.airlines-manager.com/network/showflight/51363387277,https://www.airlines-manager.com/aircraft/show/92519370,18:00,3:14,320,"$582,470.00","$529,702.00"
SFO - MSO,51335558402,SFO-TUL-DSM,ERJ-175,https://www.airlines-manager.com/network/showline/47065671,https://www.airlines-manager.com/network/showflight/51335558402,https://www.airlines-manager.com/aircraft/show/108466264,2:00,6:59,112,"$151,287.00","$132,192.00"
SFO - MSO,51335558403,SFO-TUL-DSM 1,737-900ER,https://www.airlines-manager.com/network/showline/47065671,https://www.airlines-manager.com/network/showflight/51335558403,https://www.airlines-manager.com/aircraft/show/108410856,6:45,11:44,320,"$318,016.00","$284,305.00"
SFO - MSO,51335558404,SFO-TUL-DSM 4,737-900ER,https://www.airlines-manager.com/network/showline/47065671,https://www.airlines-manager.com/network/showflight/51335558404,https://www.airlines-manager.com/aircraft/show/108410859,7:30,12:29,320,"$318,016.00","$284,305.00"
SFO - MSO,51355083227,SFO-TUL-DSM 3,737-900ER,https://www.airlines-manager.com/network/showline/47065671,https://www.airlines-manager.com/network/showflight/51355083227,https://www.airlines-manager.com/aircraft/show/108410858,13:00,17:59,320,"$318,016.00","$284,305.00"
SFO - MSO,51370307051,SFO-TUL-DSM 2,737-900ER,https://www.airlines-manager.com/network/showline/47065671,https://www.airlines-manager.com/network/showflight/51370307051,https://www.airlines-manager.com/aircraft/show/108410857,21:00,1:59,209,"$250,653.00","$219,238.00"
SFO - MSP,51335558451,SFO-MCO-MSP 1,A321neo,https://www.airlines-manager.com/network/showline/42708322,https://www.airlines-manager.com/network/showflight/51335558451,https://www.airlines-manager.com/aircraft/show/105367368,2:30,10:44,338,"$569,501.00","$520,063.00"
SFO - MSP,51335558452,SFO-MCO-MSP 4,A321neo,https://www.airlines-manager.com/network/showline/42708322,https://www.airlines-manager.com/network/showflight/51335558452,https://www.airlines-manager.com/aircraft/show/105367365,4:30,12:44,338,"$569,501.00","$520,063.00"
SFO - MSP,51335558453,SFO-MCO-MSP 3,A321neo,https://www.airlines-manager.com/network/showline/42708322,https://www.airlines-manager.com/network/showflight/51335558453,https://www.airlines-manager.com/aircraft/show/105367366,6:45,14:59,338,"$569,501.00","$520,063.00"
SFO - MSP,51355083420,SFO-MCO-MSP 2,A321neo,https://www.airlines-manager.com/network/showline/42708322,https://www.airlines-manager.com/network/showflight/51355083420,https://www.airlines-manager.com/aircraft/show/105367367,15:00,23:14,338,"$569,501.00","$520,063.00"
SFO - MSP,51363387279,SFO-MCO-MSP 5,A321neo,https://www.airlines-manager.com/network/showline/42708322,https://www.airlines-manager.com/network/showflight/51363387279,https://www.airlines-manager.com/aircraft/show/105367364,16:00,0:14,338,"$569,501.00","$520,063.00"
SFO - MSY,51335558515,SFO-MSY-STL 6,ERJ-175,https://www.airlines-manager.com/network/showline/44531521,https://www.airlines-manager.com/network/showflight/51335558515,https://www.airlines-manager.com/aircraft/show/103534666,3:00,12:29,112,"$277,978.00","$245,304.00"
SFO - MSY,51335558516,SFO-MSY-STL 2,737-900ER,https://www.airlines-manager.com/network/showline/44531521,https://www.airlines-manager.com/network/showflight/51335558516,https://www.airlines-manager.com/aircraft/show/98075266,6:00,15:29,320,"$590,010.00","$535,776.00"
SFO - MSY,51335558517,SFO-MSY-STL 4,737-900ER,https://www.airlines-manager.com/network/showline/44531521,https://www.airlines-manager.com/network/showflight/51335558517,https://www.airlines-manager.com/aircraft/show/98075264,8:00,17:29,320,"$590,010.00","$535,776.00"
SFO - MSY,51355083264,SFO-MSY-STL 1,737-900ER,https://www.airlines-manager.com/network/showline/44531521,https://www.airlines-manager.com/network/showflight/51355083264,https://www.airlines-manager.com/aircraft/show/98075267,13:00,22:29,320,"$590,010.00","$535,776.00"
SFO - MSY,51370307088,SFO-MSY-STL 3,737-900ER,https://www.airlines-manager.com/network/showline/44531521,https://www.airlines-manager.com/network/showflight/51370307088,https://www.airlines-manager.com/aircraft/show/98075265,21:15,6:44,320,"$590,010.00","$535,776.00"
SFO - MSY,51374354753,SFO-MSY-STL 5,737-900ER,https://www.airlines-manager.com/network/showline/44531521,https://www.airlines-manager.com/network/showflight/51374354753,https://www.airlines-manager.com/aircraft/show/98075263,23:15,8:44,320,"$590,010.00","$535,776.00"
SFO - NRT,51335558087,SFO 84A-1 E1,777-300,https://www.airlines-manager.com/network/showline/40456655,https://www.airlines-manager.com/network/showflight/51335558087,https://www.airlines-manager.com/aircraft/show/86776212,0:00,20:29,932,"$3,427,724.00","$3,103,068.00"
SFO - NRT,51335558088,SFO 84A-4 E1,777-300,https://www.airlines-manager.com/network/showline/40456655,https://www.airlines-manager.com/network/showflight/51335558088,https://www.airlines-manager.com/aircraft/show/86776213,4:15,0:44,932,"$3,427,724.00","$3,103,068.00"
SFO - OGG,51335558456,SFO-OGG-AUS 5,A321-200,https://www.airlines-manager.com/network/showline/45270812,https://www.airlines-manager.com/network/showflight/51335558456,https://www.airlines-manager.com/aircraft/show/92773477,2:30,13:44,310,"$693,574.00","$641,012.00"
SFO - OGG,51355083319,SFO-OGG-AUS 1,A321-200,https://www.airlines-manager.com/network/showline/45270812,https://www.airlines-manager.com/network/showflight/51355083319,https://www.airlines-manager.com/aircraft/show/92773481,13:30,0:44,310,"$693,574.00","$641,012.00"
SFO - OGG,51363387227,SFO-OGG-AUS 2,A321-200,https://www.airlines-manager.com/network/showline/45270812,https://www.airlines-manager.com/network/showflight/51363387227,https://www.airlines-manager.com/aircraft/show/92773480,15:30,2:44,310,"$693,574.00","$641,012.00"
SFO - OGG,51370307097,SFO-OGG-AUS 3,A321-200,https://www.airlines-manager.com/network/showline/45270812,https://www.airlines-manager.com/network/showflight/51370307097,https://www.airlines-manager.com/aircraft/show/92773479,21:30,8:44,310,"$693,574.00","$641,012.00"
SFO - OGG,51374354773,SFO-OGG-AUS 4,A321-200,https://www.airlines-manager.com/network/showline/45270812,https://www.airlines-manager.com/network/showflight/51374354773,https://www.airlines-manager.com/aircraft/show/92773478,23:30,10:44,310,"$693,574.00","$641,012.00"
SFO - OKC,51335558155,SFO-OKC-FSD 3,737-900ER,https://www.airlines-manager.com/network/showline/46719700,https://www.airlines-manager.com/network/showflight/51335558155,https://www.airlines-manager.com/aircraft/show/107160380,0:30,7:59,320,"$473,517.00","$429,275.00"
SFO - OKC,51335558156,SFO-OKC-FSD 2,737-900ER,https://www.airlines-manager.com/network/showline/46719700,https://www.airlines-manager.com/network/showflight/51335558156,https://www.airlines-manager.com/aircraft/show/107160379,8:00,15:29,320,"$473,517.00","$429,275.00"
SFO - OKC,51363387456,SFO-OKC-FSD 1,737-900ER,https://www.airlines-manager.com/network/showline/46719700,https://www.airlines-manager.com/network/showflight/51363387456,https://www.airlines-manager.com/aircraft/show/107160378,17:00,0:29,320,"$473,517.00","$429,275.00"
SFO - OKC,51363387457,SFO-OKC-FSD 5,ERJ-175,https://www.airlines-manager.com/network/showline/46719700,https://www.airlines-manager.com/network/showflight/51363387457,https://www.airlines-manager.com/aircraft/show/107132310,18:30,1:59,112,"$223,700.00","$197,557.00"
SFO - OKC,51363387458,SFO-OKC-FSD 4,737-900ER,https://www.airlines-manager.com/network/showline/46719700,https://www.airlines-manager.com/network/showflight/51363387458,https://www.airlines-manager.com/aircraft/show/107160381,19:30,2:59,320,"$473,517.00","$429,275.00"
SFO - OMA,51335558250,SFO-MCI-OMA 1,737-900ER,https://www.airlines-manager.com/network/showline/46129452,https://www.airlines-manager.com/network/showflight/51335558250,https://www.airlines-manager.com/aircraft/show/88239553,1:00,8:44,320,"$481,982.00","$436,910.00"
SFO - OMA,51335558251,SFO-MCI-OMA 5 B,A319-100,https://www.airlines-manager.com/network/showline/46129452,https://www.airlines-manager.com/network/showflight/51335558251,https://www.airlines-manager.com/aircraft/show/105223003,1:00,8:44,198,"$364,575.00","$332,240.00"
SFO - OMA,51335558252,SFO-MCI-OMA 4,737-900ER,https://www.airlines-manager.com/network/showline/46129452,https://www.airlines-manager.com/network/showflight/51335558252,https://www.airlines-manager.com/aircraft/show/88239557,2:45,10:29,320,"$481,982.00","$436,910.00"
SFO - OMA,51335558253,SFO-MCI-OMA 3,737-900ER,https://www.airlines-manager.com/network/showline/46129452,https://www.airlines-manager.com/network/showflight/51335558253,https://www.airlines-manager.com/aircraft/show/88239555,7:15,14:59,320,"$481,982.00","$436,910.00"
SFO - OMA,51355083419,SFO-MCI-OMA 2,737-900ER,https://www.airlines-manager.com/network/showline/46129452,https://www.airlines-manager.com/network/showflight/51355083419,https://www.airlines-manager.com/aircraft/show/88239554,15:00,22:44,320,"$481,982.00","$436,910.00"
SFO - ONT,51335558634,SFO-OKC-FSD 2,737-900ER,https://www.airlines-manager.com/network/showline/46719649,https://www.airlines-manager.com/network/showflight/51335558634,https://www.airlines-manager.com/aircraft/show/107160379,4:30,7:59,320,"$179,473.00","$149,340.00"
SFO - ONT,51355083242,SFO-OKC-FSD 1,737-900ER,https://www.airlines-manager.com/network/showline/46719649,https://www.airlines-manager.com/network/showflight/51355083242,https://www.airlines-manager.com/aircraft/show/107160378,13:00,16:29,320,"$179,473.00","$149,340.00"
SFO - ONT,51355083243,SFO-OKC-FSD 5,ERJ-175,https://www.airlines-manager.com/network/showline/46719649,https://www.airlines-manager.com/network/showflight/51355083243,https://www.airlines-manager.com/aircraft/show/107132310,15:00,18:29,112,"$82,865.00","$66,742.00"
SFO - ONT,51363387317,SFO-OKC-FSD 4,737-900ER,https://www.airlines-manager.com/network/showline/46719649,https://www.airlines-manager.com/network/showflight/51363387317,https://www.airlines-manager.com/aircraft/show/107160381,16:00,19:29,320,"$179,473.00","$149,340.00"
SFO - ONT,51370307052,SFO-OKC-FSD 3,737-900ER,https://www.airlines-manager.com/network/showline/46719649,https://www.airlines-manager.com/network/showflight/51370307052,https://www.airlines-manager.com/aircraft/show/107160380,21:00,0:29,320,"$179,473.00","$149,340.00"
SFO - ORD,51335558685,SFO-ORD-DTW 2,757-300,https://www.airlines-manager.com/network/showline/40736837,https://www.airlines-manager.com/network/showflight/51335558685,https://www.airlines-manager.com/aircraft/show/101045333,6:00,14:59,400,"$755,764.00","$668,363.00"
SFO - ORD,51335558686,SFO-ORD-DTW 5,757-300,https://www.airlines-manager.com/network/showline/40736837,https://www.airlines-manager.com/network/showflight/51335558686,https://www.airlines-manager.com/aircraft/show/101045330,7:30,16:29,400,"$755,764.00","$668,363.00"
SFO - ORD,51355083203,SFO-ORD-DTW 1,757-300,https://www.airlines-manager.com/network/showline/40736837,https://www.airlines-manager.com/network/showflight/51355083203,https://www.airlines-manager.com/aircraft/show/101045334,13:00,21:59,400,"$755,764.00","$668,363.00"
SFO - ORD,51355083204,SFO-ORD-DTW 4,757-300,https://www.airlines-manager.com/network/showline/40736837,https://www.airlines-manager.com/network/showflight/51355083204,https://www.airlines-manager.com/aircraft/show/101045331,15:00,23:59,400,"$755,764.00","$668,363.00"
SFO - ORD,51370306975,SFO-ORD-DTW 3,757-300,https://www.airlines-manager.com/network/showline/40736837,https://www.airlines-manager.com/network/showflight/51370306975,https://www.airlines-manager.com/aircraft/show/101045332,20:00,4:59,400,"$755,764.00","$668,363.00"
SFO - ORF,51335558667,SFO-ORF-RIC 3,A321-200,https://www.airlines-manager.com/network/showline/47065515,https://www.airlines-manager.com/network/showflight/51335558667,https://www.airlines-manager.com/aircraft/show/108328836,5:30,17:29,310,"$728,043.00","$671,931.00"
SFO - ORF,51335558668,SFO-ORF-RIC 4,A321-200,https://www.airlines-manager.com/network/showline/47065515,https://www.airlines-manager.com/network/showflight/51335558668,https://www.airlines-manager.com/aircraft/show/108328837,7:30,19:29,310,"$728,043.00","$671,931.00"
SFO - ORF,51363387536,SFO-ORF-RIC 1,A321-200,https://www.airlines-manager.com/network/showline/47065515,https://www.airlines-manager.com/network/showflight/51363387536,https://www.airlines-manager.com/aircraft/show/108328834,18:00,5:59,310,"$728,043.00","$671,931.00"
SFO - ORF,51370306959,SFO-ORF-RIC 2,A321-200,https://www.airlines-manager.com/network/showline/47065515,https://www.airlines-manager.com/network/showflight/51370306959,https://www.airlines-manager.com/aircraft/show/108328835,20:00,7:59,310,"$728,043.00","$671,931.00"
SFO - ORF,51370306960,SFO-ORF-RIC 5 B,A319-100,https://www.airlines-manager.com/network/showline/47065515,https://www.airlines-manager.com/network/showflight/51370306960,https://www.airlines-manager.com/aircraft/show/108328833,22:00,9:59,198,"$544,587.00","$499,588.00"
SFO - PBI,51335558614,SFO-PBI-RDU 3,737-900ER,https://www.airlines-manager.com/network/showline/45099085,https://www.airlines-manager.com/network/showflight/51335558614,https://www.airlines-manager.com/aircraft/show/100301186,4:15,16:14,320,"$729,469.00","$665,138.00"
SFO - PBI,51335558615,SFO-PBI-RDU 4,737-900ER,https://www.airlines-manager.com/network/showline/45099085,https://www.airlines-manager.com/network/showflight/51335558615,https://www.airlines-manager.com/aircraft/show/100301185,6:15,18:14,320,"$729,469.00","$665,138.00"
SFO - PBI,51363387489,SFO-PBI-RDU 1,737-900ER,https://www.airlines-manager.com/network/showline/45099085,https://www.airlines-manager.com/network/showflight/51363387489,https://www.airlines-manager.com/aircraft/show/100301188,17:00,4:59,320,"$729,469.00","$665,138.00"
SFO - PBI,51363387490,SFO-PBI-RDU 2,737-900ER,https://www.airlines-manager.com/network/showline/45099085,https://www.airlines-manager.com/network/showflight/51363387490,https://www.airlines-manager.com/aircraft/show/100301187,19:00,6:59,320,"$729,469.00","$665,138.00"
SFO - PBI,51370307048,SFO-PBI-RDU 5,737-900ER,https://www.airlines-manager.com/network/showline/45099085,https://www.airlines-manager.com/network/showflight/51370307048,https://www.airlines-manager.com/aircraft/show/100301184,21:00,8:59,320,"$729,469.00","$665,138.00"
SFO - PDX,51335558142,SFO-MCO-MSP 5,A321neo,https://www.airlines-manager.com/network/showline/42708309,https://www.airlines-manager.com/network/showflight/51335558142,https://www.airlines-manager.com/aircraft/show/105367364,0:15,4:29,338,"$271,010.00","$241,613.00"
SFO - PDX,51347851131,SFO-MCO-MSP 1,A321neo,https://www.airlines-manager.com/network/showline/42708309,https://www.airlines-manager.com/network/showflight/51347851131,https://www.airlines-manager.com/aircraft/show/105367368,10:45,14:59,338,"$271,010.00","$241,613.00"
SFO - PDX,51355083189,SFO-MCO-MSP 4,A321neo,https://www.airlines-manager.com/network/showline/42708309,https://www.airlines-manager.com/network/showflight/51355083189,https://www.airlines-manager.com/aircraft/show/105367365,12:45,16:59,338,"$271,010.00","$241,613.00"
SFO - PDX,51355083190,SFO-MCO-MSP 3,A321neo,https://www.airlines-manager.com/network/showline/42708309,https://www.airlines-manager.com/network/showflight/51355083190,https://www.airlines-manager.com/aircraft/show/105367366,15:00,19:14,338,"$271,010.00","$241,613.00"
SFO - PDX,51374354758,SFO-MCO-MSP 2,A321neo,https://www.airlines-manager.com/network/showline/42708309,https://www.airlines-manager.com/network/showflight/51374354758,https://www.airlines-manager.com/aircraft/show/105367367,23:15,3:29,270,"$238,792.00","$210,249.00"
SFO - PEK,51335558205,SFO 84A-5 E1,777-300,https://www.airlines-manager.com/network/showline/40333487,https://www.airlines-manager.com/network/showflight/51335558205,https://www.airlines-manager.com/aircraft/show/85537213,0:45,0:14,932,"$3,788,313.00","$3,386,806.00"
SFO - PEK,51363387483,SFO-PEK E,787-10,https://www.airlines-manager.com/network/showline/40333487,https://www.airlines-manager.com/network/showflight/51363387483,https://www.airlines-manager.com/aircraft/show/106813006,17:00,15:59,648,"$2,826,020.00","$2,591,444.00"
SFO - PEK,51370307033,SFO 84A-1 E1,777-300,https://www.airlines-manager.com/network/showline/40333487,https://www.airlines-manager.com/network/showflight/51370307033,https://www.airlines-manager.com/aircraft/show/86776212,20:30,19:59,932,"$3,796,237.00","$3,394,730.00"
SFO - PHL,51335558050,SFO-PHL-SEA 2,737-900ER,https://www.airlines-manager.com/network/showline/40229890,https://www.airlines-manager.com/network/showflight/51335558050,https://www.airlines-manager.com/aircraft/show/92390871,0:00,11:44,320,"$726,312.00","$653,760.00"
SFO - PHL,51347851258,SFO-PHL-SEA 1,737-900ER,https://www.airlines-manager.com/network/showline/40229890,https://www.airlines-manager.com/network/showflight/51347851258,https://www.airlines-manager.com/aircraft/show/92390872,12:00,23:44,320,"$726,312.00","$653,760.00"
SFO - PHL,51355083365,SFO-PHL-SEA 6 B,A319-100,https://www.airlines-manager.com/network/showline/40229890,https://www.airlines-manager.com/network/showflight/51355083365,https://www.airlines-manager.com/aircraft/show/97900730,14:00,1:59,198,"$545,716.00","$493,324.00"
SFO - PHL,51355083366,SFO-PHL-SEA 5,737-900ER,https://www.airlines-manager.com/network/showline/40229890,https://www.airlines-manager.com/network/showflight/51355083366,https://www.airlines-manager.com/aircraft/show/92390869,15:00,2:44,320,"$726,312.00","$653,760.00"
SFO - PHL,51363387242,SFO-PHL-SEA 4,737-900ER,https://www.airlines-manager.com/network/showline/40229890,https://www.airlines-manager.com/network/showflight/51363387242,https://www.airlines-manager.com/aircraft/show/92390870,15:45,3:29,320,"$726,312.00","$653,760.00"
SFO - PHL,51363387243,SFO-PHL-SEA 3,737-900ER,https://www.airlines-manager.com/network/showline/40229890,https://www.airlines-manager.com/network/showflight/51363387243,https://www.airlines-manager.com/aircraft/show/92390873,19:15,6:59,320,"$726,312.00","$653,760.00"
SFO - PHX,51335558346,SFO-BOS-PHX 1,A321neo,https://www.airlines-manager.com/network/showline/42635167,https://www.airlines-manager.com/network/showflight/51335558346,https://www.airlines-manager.com/aircraft/show/104901564,1:30,5:59,338,"$320,201.00","$282,143.00"
SFO - PHX,51335558347,SFO-BOS-PHX 4,A321neo,https://www.airlines-manager.com/network/showline/42635167,https://www.airlines-manager.com/network/showflight/51335558347,https://www.airlines-manager.com/aircraft/show/104870960,2:30,6:59,338,"$320,201.00","$282,143.00"
SFO - PHX,51335558348,SFO-BOS-PHX 3,A321neo,https://www.airlines-manager.com/network/showline/42635167,https://www.airlines-manager.com/network/showflight/51335558348,https://www.airlines-manager.com/aircraft/show/104874465,4:15,8:44,338,"$320,201.00","$282,143.00"
SFO - PHX,51347851251,SFO-BOS-PHX 2,A321neo,https://www.airlines-manager.com/network/showline/42635167,https://www.airlines-manager.com/network/showflight/51347851251,https://www.airlines-manager.com/aircraft/show/104901544,12:00,16:29,338,"$320,201.00","$282,143.00"
SFO - PHX,51363387244,SFO CARGO 1,737-700,https://www.airlines-manager.com/network/showline/42635167,https://www.airlines-manager.com/network/showflight/51363387244,https://www.airlines-manager.com/aircraft/show/107343113,15:45,20:29,0,"$78,123.00","$52,183.00"
SFO - PHX,51363387245,SFO-BOS-PHX 5,A321neo,https://www.airlines-manager.com/network/showline/42635167,https://www.airlines-manager.com/network/showflight/51363387245,https://www.airlines-manager.com/aircraft/show/104864961,16:00,20:29,338,"$320,201.00","$282,143.00"
SFO - PIT,51335558301,SFO-MEM-PIT 3,A321-200,https://www.airlines-manager.com/network/showline/44710524,https://www.airlines-manager.com/network/showflight/51335558301,https://www.airlines-manager.com/aircraft/show/98788935,1:15,11:59,310,"$672,443.00","$617,287.00"
SFO - PIT,51335558302,SFO-MEM-PIT 5,A321-200,https://www.airlines-manager.com/network/showline/44710524,https://www.airlines-manager.com/network/showflight/51335558302,https://www.airlines-manager.com/aircraft/show/98788933,4:15,14:59,310,"$672,443.00","$617,287.00"
SFO - PIT,51355083277,SFO-MEM-PIT 2,A321-200,https://www.airlines-manager.com/network/showline/44710524,https://www.airlines-manager.com/network/showflight/51355083277,https://www.airlines-manager.com/aircraft/show/98788936,13:00,23:44,310,"$672,443.00","$617,287.00"
SFO - PIT,51363387267,SFO-MEM-PIT 4,A321-200,https://www.airlines-manager.com/network/showline/44710524,https://www.airlines-manager.com/network/showflight/51363387267,https://www.airlines-manager.com/aircraft/show/98788934,16:00,2:44,310,"$672,443.00","$617,287.00"
SFO - PIT,51363387268,SFO-MEM-PIT 6,ERJ-175,https://www.airlines-manager.com/network/showline/44710524,https://www.airlines-manager.com/network/showflight/51363387268,https://www.airlines-manager.com/aircraft/show/98675305,19:00,5:44,112,"$315,336.00","$278,317.00"
SFO - PIT,51370307150,SFO-MEM-PIT 1,A321-200,https://www.airlines-manager.com/network/showline/44710524,https://www.airlines-manager.com/network/showflight/51370307150,https://www.airlines-manager.com/aircraft/show/98788937,22:15,8:59,310,"$672,443.00","$617,287.00"
SFO - PSP,51335558621,SFO-ICT-BFF 2,A321-200,https://www.airlines-manager.com/network/showline/49034232,https://www.airlines-manager.com/network/showflight/51335558621,https://www.airlines-manager.com/aircraft/show/114912264,4:15,7:59,310,"$199,545.00","$174,747.00"
SFO - PSP,51347851225,SFO-ICT-BFF 1,A321-200,https://www.airlines-manager.com/network/showline/49034232,https://www.airlines-manager.com/network/showflight/51347851225,https://www.airlines-manager.com/aircraft/show/114912267,11:45,15:29,310,"$199,545.00","$174,747.00"
SFO - PSP,51355083315,SFO-ICT-BFF 5,ERJ-175,https://www.airlines-manager.com/network/showline/49034232,https://www.airlines-manager.com/network/showflight/51355083315,https://www.airlines-manager.com/aircraft/show/114912306,13:15,16:59,112,"$92,126.00","$76,515.00"
SFO - PSP,51355083316,SFO-ICT-BFF 4,A321-200,https://www.airlines-manager.com/network/showline/49034232,https://www.airlines-manager.com/network/showflight/51355083316,https://www.airlines-manager.com/aircraft/show/114912268,15:00,18:44,310,"$199,545.00","$174,747.00"
SFO - PSP,51370307067,SFO-ICT-BFF 3,A321-200,https://www.airlines-manager.com/network/showline/49034232,https://www.airlines-manager.com/network/showflight/51370307067,https://www.airlines-manager.com/aircraft/show/114912263,21:00,0:44,276,"$186,663.00","$162,256.00"
SFO - PVD,51335558076,SFO-PVD-BUF 4,A321-200,https://www.airlines-manager.com/network/showline/48344018,https://www.airlines-manager.com/network/showflight/51335558076,https://www.airlines-manager.com/aircraft/show/112650105,0:00,12:29,310,"$759,892.00","$702,225.00"
SFO - PVD,51335558077,SFO-PVD-BUF 5,A321-200,https://www.airlines-manager.com/network/showline/48344018,https://www.airlines-manager.com/network/showflight/51335558077,https://www.airlines-manager.com/aircraft/show/112650104,5:00,17:29,310,"$759,892.00","$702,225.00"
SFO - PVD,51355083215,SFO-PVD-BUF 1,A321-200,https://www.airlines-manager.com/network/showline/48344018,https://www.airlines-manager.com/network/showflight/51355083215,https://www.airlines-manager.com/aircraft/show/112650108,13:00,1:29,310,"$759,892.00","$702,225.00"
SFO - PVD,51363387454,SFO-PVD-BUF 2,A321-200,https://www.airlines-manager.com/network/showline/48344018,https://www.airlines-manager.com/network/showflight/51363387454,https://www.airlines-manager.com/aircraft/show/112650107,17:00,5:29,310,"$759,892.00","$702,225.00"
SFO - PVD,51363387455,SFO-PVD-BUF 3,A321-200,https://www.airlines-manager.com/network/showline/48344018,https://www.airlines-manager.com/network/showflight/51363387455,https://www.airlines-manager.com/aircraft/show/112650106,19:00,7:29,310,"$759,892.00","$702,225.00"
SFO - PWM,51335558111,SFO-KOA-PWM 5 B,A319-100,https://www.airlines-manager.com/network/showline/48344081,https://www.airlines-manager.com/network/showflight/51335558111,https://www.airlines-manager.com/aircraft/show/112650091,0:15,12:59,198,"$574,346.00","$528,149.00"
SFO - PWM,51335558112,SFO-KOA-PWM 1,A321-200,https://www.airlines-manager.com/network/showline/48344081,https://www.airlines-manager.com/network/showflight/51335558112,https://www.airlines-manager.com/aircraft/show/112650103,4:15,16:59,310,"$767,438.00","$709,838.00"
SFO - PWM,51335558113,SFO-KOA-PWM 2,A321-200,https://www.airlines-manager.com/network/showline/48344081,https://www.airlines-manager.com/network/showflight/51335558113,https://www.airlines-manager.com/aircraft/show/112650102,7:15,19:59,310,"$767,438.00","$709,838.00"
SFO - PWM,51355083331,SFO-KOA-PWM 3,A321-200,https://www.airlines-manager.com/network/showline/48344081,https://www.airlines-manager.com/network/showflight/51355083331,https://www.airlines-manager.com/aircraft/show/112650101,14:00,2:44,310,"$767,438.00","$709,838.00"
SFO - PWM,51363387323,SFO-KOA-PWM 4,A321-200,https://www.airlines-manager.com/network/showline/48344081,https://www.airlines-manager.com/network/showflight/51363387323,https://www.airlines-manager.com/aircraft/show/112650100,16:00,4:44,310,"$767,438.00","$709,838.00"
SFO - RDU,51335558654,SFO-PBI-RDU 1,737-900ER,https://www.airlines-manager.com/network/showline/45099094,https://www.airlines-manager.com/network/showflight/51335558654,https://www.airlines-manager.com/aircraft/show/100301188,5:00,16:14,320,"$708,356.00","$645,633.00"
SFO - RDU,51335558655,SFO-PBI-RDU 2,737-900ER,https://www.airlines-manager.com/network/showline/45099094,https://www.airlines-manager.com/network/showflight/51335558655,https://www.airlines-manager.com/aircraft/show/100301187,7:00,18:14,320,"$708,356.00","$645,633.00"
SFO - RDU,51347850820,SFO-PBI-RDU 5,737-900ER,https://www.airlines-manager.com/network/showline/45099094,https://www.airlines-manager.com/network/showflight/51347850820,https://www.airlines-manager.com/aircraft/show/100301184,9:00,20:14,320,"$708,356.00","$645,633.00"
SFO - RDU,51363387491,SFO-PBI-RDU 3,737-900ER,https://www.airlines-manager.com/network/showline/45099094,https://www.airlines-manager.com/network/showflight/51363387491,https://www.airlines-manager.com/aircraft/show/100301186,17:00,4:14,320,"$708,356.00","$645,633.00"
SFO - RDU,51363387492,SFO-PBI-RDU 4,737-900ER,https://www.airlines-manager.com/network/showline/45099094,https://www.airlines-manager.com/network/showflight/51363387492,https://www.airlines-manager.com/aircraft/show/100301185,19:00,6:14,320,"$708,356.00","$645,633.00"
SFO - RIC,51335558692,SFO-ORF-RIC 1,A321-200,https://www.airlines-manager.com/network/showline/47065521,https://www.airlines-manager.com/network/showflight/51335558692,https://www.airlines-manager.com/aircraft/show/108328834,6:00,17:29,310,"$722,308.00","$667,274.00"
SFO - RIC,51335558693,SFO-ORF-RIC 2,A321-200,https://www.airlines-manager.com/network/showline/47065521,https://www.airlines-manager.com/network/showflight/51335558693,https://www.airlines-manager.com/aircraft/show/108328835,8:00,19:29,310,"$722,308.00","$667,274.00"
SFO - RIC,51347851073,SFO-ORF-RIC 5 B,A319-100,https://www.airlines-manager.com/network/showline/47065521,https://www.airlines-manager.com/network/showflight/51347851073,https://www.airlines-manager.com/aircraft/show/108328833,10:00,21:29,198,"$541,863.00","$497,731.00"
SFO - RIC,51363387540,SFO-ORF-RIC 3,A321-200,https://www.airlines-manager.com/network/showline/47065521,https://www.airlines-manager.com/network/showflight/51363387540,https://www.airlines-manager.com/aircraft/show/108328836,18:00,5:29,310,"$722,308.00","$667,274.00"
SFO - RIC,51370306955,SFO-ORF-RIC 4,A321-200,https://www.airlines-manager.com/network/showline/47065521,https://www.airlines-manager.com/network/showflight/51370306955,https://www.airlines-manager.com/aircraft/show/108328837,20:00,7:29,310,"$722,308.00","$667,274.00"
SFO - RNO,51335558613,SFO-MCI-OMA 2,737-900ER,https://www.airlines-manager.com/network/showline/46129438,https://www.airlines-manager.com/network/showflight/51335558613,https://www.airlines-manager.com/aircraft/show/88239554,4:15,6:59,320,"$118,923.00","$92,603.00"
SFO - RNO,51355083400,SFO-MCI-OMA 1,737-900ER,https://www.airlines-manager.com/network/showline/46129438,https://www.airlines-manager.com/network/showflight/51355083400,https://www.airlines-manager.com/aircraft/show/88239553,14:15,16:59,320,"$118,923.00","$92,603.00"
SFO - RNO,51355083401,SFO-MCI-OMA 5 B,A319-100,https://www.airlines-manager.com/network/showline/46129438,https://www.airlines-manager.com/network/showflight/51355083401,https://www.airlines-manager.com/aircraft/show/105223003,14:15,16:59,198,"$90,023.00","$72,171.00"
SFO - RNO,51363387280,SFO-MCI-OMA 4,737-900ER,https://www.airlines-manager.com/network/showline/46129438,https://www.airlines-manager.com/network/showflight/51363387280,https://www.airlines-manager.com/aircraft/show/88239557,16:00,18:44,320,"$118,923.00","$92,603.00"
SFO - RNO,51370307022,SFO-MCI-OMA 3,737-900ER,https://www.airlines-manager.com/network/showline/46129438,https://www.airlines-manager.com/network/showflight/51370307022,https://www.airlines-manager.com/aircraft/show/88239555,20:30,23:14,320,"$118,923.00","$92,603.00"
SFO - RSW,51335558656,SFO-RSW-BDL 3,737-900ER,https://www.airlines-manager.com/network/showline/47540536,https://www.airlines-manager.com/network/showflight/51335558656,https://www.airlines-manager.com/aircraft/show/84915100,5:15,16:59,320,"$725,729.00","$660,915.00"
SFO - RSW,51335558657,SFO-RSW-BDL 4,737-900ER,https://www.airlines-manager.com/network/showline/47540536,https://www.airlines-manager.com/network/showflight/51335558657,https://www.airlines-manager.com/aircraft/show/84915101,7:15,18:59,320,"$725,729.00","$660,915.00"
SFO - RSW,51363387475,SFO-RSW-BDL 1,737-900ER,https://www.airlines-manager.com/network/showline/47540536,https://www.airlines-manager.com/network/showflight/51363387475,https://www.airlines-manager.com/aircraft/show/84915098,17:00,4:44,320,"$725,729.00","$660,915.00"
SFO - RSW,51363387476,SFO-RSW-BDL 2,737-900ER,https://www.airlines-manager.com/network/showline/47540536,https://www.airlines-manager.com/network/showflight/51363387476,https://www.airlines-manager.com/aircraft/show/84915099,19:00,6:44,320,"$725,729.00","$660,915.00"
SFO - RSW,51370307050,SFO-RSW-BDL 5,737-900ER,https://www.airlines-manager.com/network/showline/47540536,https://www.airlines-manager.com/network/showflight/51370307050,https://www.airlines-manager.com/aircraft/show/84915102,21:00,8:44,320,"$725,729.00","$660,915.00"
SFO - SAN,51335558717,SFO-PHL-SEA 1,737-900ER,https://www.airlines-manager.com/network/showline/42627058,https://www.airlines-manager.com/network/showflight/51335558717,https://www.airlines-manager.com/aircraft/show/92390872,8:00,11:44,320,"$216,273.00","$183,434.00"
SFO - SAN,51347851161,SFO-PHL-SEA 5,737-900ER,https://www.airlines-manager.com/network/showline/42627058,https://www.airlines-manager.com/network/showflight/51347851161,https://www.airlines-manager.com/aircraft/show/92390869,11:00,14:44,320,"$216,273.00","$183,434.00"
SFO - SAN,51347851162,SFO-PHL-SEA 4,737-900ER,https://www.airlines-manager.com/network/showline/42627058,https://www.airlines-manager.com/network/showflight/51347851162,https://www.airlines-manager.com/aircraft/show/92390870,12:00,15:44,320,"$216,273.00","$183,434.00"
SFO - SAN,51363387232,SFO-PHL-SEA 3,737-900ER,https://www.airlines-manager.com/network/showline/42627058,https://www.airlines-manager.com/network/showflight/51363387232,https://www.airlines-manager.com/aircraft/show/92390873,15:30,19:14,320,"$216,273.00","$183,434.00"
SFO - SAN,51370306995,SFO-PHL-SEA 2,737-900ER,https://www.airlines-manager.com/network/showline/42627058,https://www.airlines-manager.com/network/showflight/51370306995,https://www.airlines-manager.com/aircraft/show/92390871,20:15,23:59,314,"$213,821.00","$181,054.00"
SFO - SAT,51335558119,SFO-JAX-SAT 1,A321-200,https://www.airlines-manager.com/network/showline/45303038,https://www.airlines-manager.com/network/showflight/51335558119,https://www.airlines-manager.com/aircraft/show/86375568,0:15,8:14,310,"$495,508.00","$454,238.00"
SFO - SAT,51335558120,SFO-JAX-SAT 2,A321-200,https://www.airlines-manager.com/network/showline/45303038,https://www.airlines-manager.com/network/showflight/51335558120,https://www.airlines-manager.com/aircraft/show/86371267,2:15,10:14,310,"$495,508.00","$454,238.00"
SFO - SAT,51355083302,SFO-JAX-SAT 3,A321-200,https://www.airlines-manager.com/network/showline/45303038,https://www.airlines-manager.com/network/showflight/51355083302,https://www.airlines-manager.com/aircraft/show/86385102,13:00,20:59,310,"$495,508.00","$454,238.00"
SFO - SAT,51355083303,SFO-JAX-SAT 4,A321-200,https://www.airlines-manager.com/network/showline/45303038,https://www.airlines-manager.com/network/showflight/51355083303,https://www.airlines-manager.com/aircraft/show/86378760,15:00,22:59,310,"$495,508.00","$454,238.00"
SFO - SAT,51363387501,SFO-JAX-SAT 5,A321-200,https://www.airlines-manager.com/network/showline/45303038,https://www.airlines-manager.com/network/showflight/51363387501,https://www.airlines-manager.com/aircraft/show/86377315,17:15,1:14,310,"$495,508.00","$454,238.00"
SFO - SAV,51335558676,SFO-SAV-JAN 1,A321-200,https://www.airlines-manager.com/network/showline/49034205,https://www.airlines-manager.com/network/showflight/51335558676,https://www.airlines-manager.com/aircraft/show/114912265,5:45,16:59,310,"$693,620.00","$640,315.00"
SFO - SAV,51335558677,SFO-SAV-JAN 4,A321-200,https://www.airlines-manager.com/network/showline/49034205,https://www.airlines-manager.com/network/showflight/51335558677,https://www.airlines-manager.com/aircraft/show/114912270,7:45,18:59,310,"$693,620.00","$640,315.00"
SFO - SAV,51355083443,SFO-SAV-JAN 5 B,A319-100,https://www.airlines-manager.com/network/showline/49034205,https://www.airlines-manager.com/network/showflight/51355083443,https://www.airlines-manager.com/aircraft/show/114917486,15:00,2:14,198,"$521,104.00","$478,359.00"
SFO - SAV,51363387610,SFO-SAV-JAN 3,A321-200,https://www.airlines-manager.com/network/showline/49034205,https://www.airlines-manager.com/network/showflight/51363387610,https://www.airlines-manager.com/aircraft/show/114912269,19:00,6:14,310,"$693,620.00","$640,315.00"
SFO - SAV,51370307025,SFO-SAV-JAN 2,A321-200,https://www.airlines-manager.com/network/showline/49034205,https://www.airlines-manager.com/network/showflight/51370307025,https://www.airlines-manager.com/aircraft/show/114912266,20:30,7:44,309,"$692,261.00","$639,021.00"
SFO - SDF,51335558287,SFO-SDF-LIT 2,A321-200,https://www.airlines-manager.com/network/showline/46473760,https://www.airlines-manager.com/network/showflight/51335558287,https://www.airlines-manager.com/aircraft/show/94886628,1:15,10:59,310,"$610,940.00","$560,697.00"
SFO - SDF,51335558288,SFO-SDF-LIT 4,A321-200,https://www.airlines-manager.com/network/showline/46473760,https://www.airlines-manager.com/network/showflight/51335558288,https://www.airlines-manager.com/aircraft/show/106453500,2:15,11:59,310,"$610,940.00","$560,697.00"
SFO - SDF,51355083359,SFO-SDF-LIT 1,A321-200,https://www.airlines-manager.com/network/showline/46473760,https://www.airlines-manager.com/network/showflight/51355083359,https://www.airlines-manager.com/aircraft/show/106453499,14:00,23:44,310,"$610,940.00","$560,697.00"
SFO - SDF,51363387382,SFO-SDF-LIT 3,A321-200,https://www.airlines-manager.com/network/showline/46473760,https://www.airlines-manager.com/network/showflight/51363387382,https://www.airlines-manager.com/aircraft/show/94886627,16:30,2:14,310,"$610,940.00","$560,697.00"
SFO - SDF,51363387383,SFO-SDF-LIT 5,A321-200,https://www.airlines-manager.com/network/showline/46473760,https://www.airlines-manager.com/network/showflight/51363387383,https://www.airlines-manager.com/aircraft/show/106453498,17:30,3:14,310,"$610,940.00","$560,697.00"
SFO - SEA,51335558479,SFO-PHL-SEA 5,737-900ER,https://www.airlines-manager.com/network/showline/41349632,https://www.airlines-manager.com/network/showflight/51335558479,https://www.airlines-manager.com/aircraft/show/92390869,2:45,7:29,320,"$299,921.00","$256,313.00"
SFO - SEA,51335558480,SFO-PHL-SEA 4,737-900ER,https://www.airlines-manager.com/network/showline/41349632,https://www.airlines-manager.com/network/showflight/51335558480,https://www.airlines-manager.com/aircraft/show/92390870,3:30,8:14,320,"$299,921.00","$256,313.00"
SFO - SEA,51335558481,SFO-PHL-SEA 6 B,A319-100,https://www.airlines-manager.com/network/showline/41349632,https://www.airlines-manager.com/network/showflight/51335558481,https://www.airlines-manager.com/aircraft/show/97900730,5:30,10:14,198,"$228,666.00","$198,508.00"
SFO - SEA,51335558482,SFO-PHL-SEA 3,737-900ER,https://www.airlines-manager.com/network/showline/41349632,https://www.airlines-manager.com/network/showflight/51335558482,https://www.airlines-manager.com/aircraft/show/92390873,7:00,11:44,320,"$299,921.00","$256,313.00"
SFO - SEA,51347851241,SFO-PHL-SEA 2,737-900ER,https://www.airlines-manager.com/network/showline/41349632,https://www.airlines-manager.com/network/showflight/51347851241,https://www.airlines-manager.com/aircraft/show/92390871,12:00,16:44,320,"$299,921.00","$256,313.00"
SFO - SEA,51374354786,SFO-PHL-SEA 1,737-900ER,https://www.airlines-manager.com/network/showline/41349632,https://www.airlines-manager.com/network/showflight/51374354786,https://www.airlines-manager.com/aircraft/show/92390872,23:45,4:29,298,"$287,469.00","$244,264.00"
SFO - SHA,51370306980,SFO 168B-5 B,747-400,https://www.airlines-manager.com/network/showline/44204901,https://www.airlines-manager.com/network/showflight/51370306980,https://www.airlines-manager.com/aircraft/show/87933799,20:00,19:59,1046,"$4,621,430.00","$4,285,897.00"
SFO - SHA,51370306981,SFO 168A-5 B,747-400,https://www.airlines-manager.com/network/showline/44204901,https://www.airlines-manager.com/network/showflight/51370306981,https://www.airlines-manager.com/aircraft/show/86808589,22:00,21:59,1046,"$4,621,430.00","$4,285,897.00"
SFO - SLC,51335558034,SFO-ORD-DTW 4,757-300,https://www.airlines-manager.com/network/showline/42739134,https://www.airlines-manager.com/network/showflight/51335558034,https://www.airlines-manager.com/aircraft/show/101045331,0:00,4:29,400,"$352,295.00","$311,394.00"
SFO - SLC,51335558035,SFO-ORD-DTW 2,757-300,https://www.airlines-manager.com/network/showline/42739134,https://www.airlines-manager.com/network/showflight/51335558035,https://www.airlines-manager.com/aircraft/show/101045333,1:00,5:29,400,"$352,295.00","$311,394.00"
SFO - SLC,51335558036,SFO-ORD-DTW 5,757-300,https://www.airlines-manager.com/network/showline/42739134,https://www.airlines-manager.com/network/showflight/51335558036,https://www.airlines-manager.com/aircraft/show/101045330,3:00,7:29,400,"$352,295.00","$311,394.00"
SFO - SLC,51335558037,SFO-ORD-DTW 1,757-300,https://www.airlines-manager.com/network/showline/42739134,https://www.airlines-manager.com/network/showflight/51335558037,https://www.airlines-manager.com/aircraft/show/101045334,8:00,12:29,400,"$352,295.00","$311,394.00"
SFO - SLC,51355083446,SFO-ORD-DTW 3,757-300,https://www.airlines-manager.com/network/showline/42739134,https://www.airlines-manager.com/network/showflight/51355083446,https://www.airlines-manager.com/aircraft/show/101045332,15:00,19:29,216,"$252,532.00","$214,555.00"
SFO - SMF,51335558726,SFO-SDF-LIT 1,A321-200,https://www.airlines-manager.com/network/showline/46503390,https://www.airlines-manager.com/network/showflight/51335558726,https://www.airlines-manager.com/aircraft/show/106453499,8:30,10:59,310,"$82,525.00","$61,943.00"
SFO - SMF,51355083387,SFO-SDF-LIT 3,A321-200,https://www.airlines-manager.com/network/showline/46503390,https://www.airlines-manager.com/network/showflight/51355083387,https://www.airlines-manager.com/aircraft/show/94886627,14:00,16:29,310,"$82,525.00","$61,943.00"
SFO - SMF,51355083388,SFO-SDF-LIT 5,A321-200,https://www.airlines-manager.com/network/showline/46503390,https://www.airlines-manager.com/network/showflight/51355083388,https://www.airlines-manager.com/aircraft/show/106453498,15:00,17:29,310,"$82,525.00","$61,943.00"
SFO - SMF,51374354699,SFO-SDF-LIT 2,A321-200,https://www.airlines-manager.com/network/showline/46503390,https://www.airlines-manager.com/network/showflight/51374354699,https://www.airlines-manager.com/aircraft/show/94886628,22:45,1:14,310,"$82,525.00","$61,943.00"
SFO - SMF,51374354700,SFO-SDF-LIT 4,A321-200,https://www.airlines-manager.com/network/showline/46503390,https://www.airlines-manager.com/network/showflight/51374354700,https://www.airlines-manager.com/aircraft/show/106453500,23:45,2:14,310,"$82,525.00","$61,943.00"
SFO - STL,51335558702,SFO-MSY-STL 3,737-900ER,https://www.airlines-manager.com/network/showline/44531548,https://www.airlines-manager.com/network/showflight/51335558702,https://www.airlines-manager.com/aircraft/show/98075265,6:45,15:29,320,"$553,929.00","$500,175.00"
SFO - STL,51347850793,SFO-MSY-STL 5,737-900ER,https://www.airlines-manager.com/network/showline/44531548,https://www.airlines-manager.com/network/showflight/51347850793,https://www.airlines-manager.com/aircraft/show/98075263,8:45,17:29,320,"$553,929.00","$500,175.00"
SFO - STL,51355083216,SFO-MSY-STL 6,ERJ-175,https://www.airlines-manager.com/network/showline/44531548,https://www.airlines-manager.com/network/showflight/51355083216,https://www.airlines-manager.com/aircraft/show/103534666,13:00,21:44,112,"$260,880.00","$228,958.00"
SFO - STL,51363387340,SFO-MSY-STL 2,737-900ER,https://www.airlines-manager.com/network/showline/44531548,https://www.airlines-manager.com/network/showflight/51363387340,https://www.airlines-manager.com/aircraft/show/98075266,16:00,0:44,320,"$553,929.00","$500,175.00"
SFO - STL,51363387341,SFO-MSY-STL 4,737-900ER,https://www.airlines-manager.com/network/showline/44531548,https://www.airlines-manager.com/network/showflight/51363387341,https://www.airlines-manager.com/aircraft/show/98075264,18:00,2:44,320,"$553,929.00","$500,175.00"
SFO - STL,51374354676,SFO-MSY-STL 1,737-900ER,https://www.airlines-manager.com/network/showline/44531548,https://www.airlines-manager.com/network/showflight/51374354676,https://www.airlines-manager.com/aircraft/show/98075267,22:30,7:14,320,"$553,929.00","$500,175.00"
SFO - TFU,51355083183,SFO 168B-4 B,747-400,https://www.airlines-manager.com/network/showline/45364033,https://www.airlines-manager.com/network/showflight/51355083183,https://www.airlines-manager.com/aircraft/show/87933798,12:30,14:59,1046,"$5,201,506.00","$4,793,847.00"
SFO - TFU,51355083184,SFO 168A-4 B,747-400,https://www.airlines-manager.com/network/showline/45364033,https://www.airlines-manager.com/network/showflight/51355083184,https://www.airlines-manager.com/aircraft/show/86817628,14:30,16:59,1046,"$5,201,506.00","$4,793,847.00"
SFO - TPA,51335558281,SFO-FLL-TPA 1,737-900ER,https://www.airlines-manager.com/network/showline/44446761,https://www.airlines-manager.com/network/showflight/51335558281,https://www.airlines-manager.com/aircraft/show/97955544,1:00,12:14,320,"$700,033.00","$633,982.00"
SFO - TPA,51335558282,SFO-FLL-TPA 3,737-900ER,https://www.airlines-manager.com/network/showline/44446761,https://www.airlines-manager.com/network/showflight/51335558282,https://www.airlines-manager.com/aircraft/show/97955542,5:00,16:14,320,"$700,033.00","$633,982.00"
SFO - TPA,51335558283,SFO-FLL-TPA 5,737-900ER,https://www.airlines-manager.com/network/showline/44446761,https://www.airlines-manager.com/network/showflight/51335558283,https://www.airlines-manager.com/aircraft/show/97955540,8:00,19:14,320,"$700,033.00","$633,982.00"
SFO - TPA,51355083258,SFO-FLL-TPA 2,737-900ER,https://www.airlines-manager.com/network/showline/44446761,https://www.airlines-manager.com/network/showflight/51355083258,https://www.airlines-manager.com/aircraft/show/97955543,13:00,0:14,320,"$700,033.00","$633,982.00"
SFO - TPA,51363387471,SFO-FLL-TPA 4,737-900ER,https://www.airlines-manager.com/network/showline/44446761,https://www.airlines-manager.com/network/showflight/51363387471,https://www.airlines-manager.com/aircraft/show/97955541,17:00,4:14,320,"$700,033.00","$633,982.00"
SFO - TPA,51370306950,SFO-FLL-TPA 6 B,A319-100,https://www.airlines-manager.com/network/showline/44446761,https://www.airlines-manager.com/network/showflight/51370306950,https://www.airlines-manager.com/aircraft/show/97900729,20:00,7:29,198,"$528,505.00","$480,649.00"
SFO - TPE,51370306983,SFO 168B-6 B,747-400,https://www.airlines-manager.com/network/showline/40932049,https://www.airlines-manager.com/network/showflight/51370306983,https://www.airlines-manager.com/aircraft/show/87083947,20:00,21:14,1046,"$4,752,603.00","$4,402,577.00"
SFO - TPE,51370306984,SFO 168A-6 B,747-400,https://www.airlines-manager.com/network/showline/40932049,https://www.airlines-manager.com/network/showflight/51370306984,https://www.airlines-manager.com/aircraft/show/88032836,22:00,23:14,1027,"$4,692,193.00","$4,345,973.00"
SFO - TUL,51335558637,SFO-TUL-DSM 2,737-900ER,https://www.airlines-manager.com/network/showline/47065674,https://www.airlines-manager.com/network/showflight/51335558637,https://www.airlines-manager.com/aircraft/show/108410857,4:45,12:29,320,"$490,970.00","$445,472.00"
SFO - TUL,51335558638,SFO-TUL-DSM,ERJ-175,https://www.airlines-manager.com/network/showline/47065674,https://www.airlines-manager.com/network/showflight/51335558638,https://www.airlines-manager.com/aircraft/show/108466264,7:00,14:44,112,"$231,827.00","$204,819.00"
SFO - TUL,51355083433,SFO-TUL-DSM 1,737-900ER,https://www.airlines-manager.com/network/showline/47065674,https://www.airlines-manager.com/network/showflight/51355083433,https://www.airlines-manager.com/aircraft/show/108410856,15:00,22:44,320,"$490,970.00","$445,472.00"
SFO - TUL,51363387262,SFO-TUL-DSM 4,737-900ER,https://www.airlines-manager.com/network/showline/47065674,https://www.airlines-manager.com/network/showflight/51363387262,https://www.airlines-manager.com/aircraft/show/108410859,15:45,23:29,320,"$490,970.00","$445,472.00"
SFO - TUL,51370307041,SFO-TUL-DSM 3,737-900ER,https://www.airlines-manager.com/network/showline/47065674,https://www.airlines-manager.com/network/showflight/51370307041,https://www.airlines-manager.com/aircraft/show/108410858,20:45,4:29,320,"$490,970.00","$445,472.00"
SFO - TUS,51335558718,SFO-OKC-FSD 1,737-900ER,https://www.airlines-manager.com/network/showline/46719652,https://www.airlines-manager.com/network/showflight/51335558718,https://www.airlines-manager.com/aircraft/show/107160378,8:00,12:59,320,"$317,409.00","$282,248.00"
SFO - TUS,51347850851,SFO-OKC-FSD 5,ERJ-175,https://www.airlines-manager.com/network/showline/46719652,https://www.airlines-manager.com/network/showflight/51347850851,https://www.airlines-manager.com/aircraft/show/107132310,9:30,14:29,112,"$151,295.00","$131,528.00"
SFO - TUS,51347850852,SFO-OKC-FSD 4,737-900ER,https://www.airlines-manager.com/network/showline/46719652,https://www.airlines-manager.com/network/showflight/51347850852,https://www.airlines-manager.com/aircraft/show/107160381,10:30,15:29,320,"$317,409.00","$282,248.00"
SFO - TUS,51363387333,SFO-OKC-FSD 3,737-900ER,https://www.airlines-manager.com/network/showline/46719652,https://www.airlines-manager.com/network/showflight/51363387333,https://www.airlines-manager.com/aircraft/show/107160380,16:00,20:59,320,"$317,941.00","$282,780.00"
SFO - TUS,51374354767,SFO-OKC-FSD 2,737-900ER,https://www.airlines-manager.com/network/showline/46719652,https://www.airlines-manager.com/network/showflight/51374354767,https://www.airlines-manager.com/aircraft/show/107160379,23:30,4:29,320,"$317,941.00","$282,780.00"
SFO - YVR,51335558206,SFO-MSY-STL 2,737-900ER,https://www.airlines-manager.com/network/showline/44531535,https://www.airlines-manager.com/network/showflight/51335558206,https://www.airlines-manager.com/aircraft/show/98075266,0:45,5:59,320,"$329,614.00","$288,651.00"
SFO - YVR,51335558207,SFO-MSY-STL 4,737-900ER,https://www.airlines-manager.com/network/showline/44531535,https://www.airlines-manager.com/network/showflight/51335558207,https://www.airlines-manager.com/aircraft/show/98075264,2:45,7:59,320,"$329,614.00","$288,651.00"
SFO - YVR,51335558208,SFO-MSY-STL 1,737-900ER,https://www.airlines-manager.com/network/showline/44531535,https://www.airlines-manager.com/network/showflight/51335558208,https://www.airlines-manager.com/aircraft/show/98075267,7:15,12:29,320,"$329,614.00","$288,651.00"
SFO - YVR,51363387346,SFO-MSY-STL 3,737-900ER,https://www.airlines-manager.com/network/showline/44531535,https://www.airlines-manager.com/network/showflight/51363387346,https://www.airlines-manager.com/aircraft/show/98075265,16:00,21:14,320,"$329,614.00","$288,651.00"
SFO - YVR,51363387347,SFO-MSY-STL 5,737-900ER,https://www.airlines-manager.com/network/showline/44531535,https://www.airlines-manager.com/network/showflight/51363387347,https://www.airlines-manager.com/aircraft/show/98075263,18:00,23:14,320,"$329,614.00","$288,651.00"
SFO - YVR,51370307118,SFO-MSY-STL 6,ERJ-175,https://www.airlines-manager.com/network/showline/44531535,https://www.airlines-manager.com/network/showflight/51370307118,https://www.airlines-manager.com/aircraft/show/103534666,21:45,2:59,112,"$156,262.00","$133,448.00"`;