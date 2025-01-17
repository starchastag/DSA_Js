<=============> Sorting Algorithms  <===============>


--------------Selection Sort Algorithm --------------->


     Selection Sort ---


                    Selection sort is another straightforward sorting algorithm that repeatedly finds the minimum (or maximum) element from the unsorted part of the array and places it at the beginning (or end) of the sorted part. Unlike bubble sort, selection sort doesn’t require multiple swaps for each element but instead finds the minimum value in each pass and only swaps once


    Steps for Selection Sort:


                        1. Start with the first element as the "current minimum."
                        2. Traverse the rest of the array to find the smallest element in the unsorted portion.
                        3. Once found, swap it with the first unsorted element.
                        4. Move to the next unsorted element and repeat steps 1-3 until the entire array is sorted.


      चयन क्रम एक और सीधा-सादा क्रमबद्ध करने वाला एल्गोरिदम है जो बार-बार अनसॉर्टेड भाग से न्यूनतम (या अधिकतम) तत्व को खोजता है और उसे क्रमबद्ध भाग के आरंभ (या अंत) में रखता है। बुलबुला क्रम के विपरीत, चयन क्रम प्रत्येक तत्व के लिए कई स्वैप की आवश्यकता नहीं होती है, बल्कि प्रत्येक पास में न्यूनतम मान को खोजता है और केवल एक बार स्वैप करता है।



    चयन सॉर्ट के लिए कदम:


                    1.पहले तत्व को "वर्तमान न्यूनतम" के रूप में शुरू करें।
                    2.अनसॉर्टेड भाग में सबसे छोटे तत्व को खोजने के लिए शेष एरे को पार करें।
                    3.एक बार जब इसे खोज लिया जाए, तो इसे पहले अनसॉर्टेड तत्व के साथ स्वैप करें।
                    4.अगले अनसॉर्टेड तत्व पर जाएं और पूरे एरे को सॉर्टेड होने तक चरण 1-3 को दोहराएं।



=====================================
                              Bubble Sort Algorithm


Bubble Sort --- 


                In bubble sort, we compare adjacent elements in an array and swap them if they're out of order. This process continues in passes, pushing the largest unsorted element to its correct position in each pass. If some numbers are the same, bubble sort handles them naturally without needing special handling, since the algorithm compares adjacent pairs and swaps only when necessary.


               Here’s how bubble sort works step-by-step:


                1. Start at the beginning of the array.
                2. Compare the first and second elements. If the first element is larger, swap them.
                3. Move to the next pair of elements and repeat the comparison and swap process.
                4. Continue this for each adjacent pair until the end of the array  is reached.
                5. After each pass, the largest unsorted element will be at the end, so the next pass can ignore the last sorted element.
                6. Repeat until no more swaps are needed.



Since bubble sort doesn’t alter the order of equal elements, any repeated numbers will keep their relative order (a behavior known as stability). 
             

             
                 बबल सॉर्ट में, हम एक एरे में निकटवर्ती तत्वों की तुलना करते हैं और यदि वे अनुक्रम में नहीं हैं तो उन्हें स्वैप करते हैं। यह प्रक्रिया पास में जारी रहती है, प्रत्येक पास में सबसे बड़े असॉर्टेड तत्व को उसकी सही स्थिति में धकेलते हुए। यदि कुछ संख्याएँ समान हैं, तो बबल सॉर्ट उन्हें स्वाभाविक रूप से संभालता है बिना किसी विशेष प्रबंधन की आवश्यकता के, क्योंकि एल्गोरिदम निकटवर्ती जोड़ों की तुलना करता है और केवल आवश्यक होने पर स्वैप करता है।   


                 
यहाँ बबल सॉर्ट कैसे काम करता है, Step By Step :: 



    1.सरणी के शुरुआत से शुरू करें। 
    2.पहले और दूसरे तत्व की तुलना करें। यदि पहला तत्व बड़ा है, तो उन्हें स्वैप करें। 
    3.अगले तत्वों के जोड़े पर जाएं और तुलना और स्वैप प्रक्रिया को दोहराएं। 
    4.सरणी के अंत तक प्रत्येक निकटवर्ती जोड़े के लिए ऐसा करते रहें। 
    5. प्रत्येक पास के बाद, सबसे बड़ा असॉर्टेड तत्व अंत में होगा, इसलिए अगला पास अंतिम सॉर्टेड तत्व को अनदेखा कर सकता है। 
    6. कोई और स्वैप की आवश्यकता न होने तक दोहराएं।.
    चूंकि बबल सॉर्ट समान तत्वों के क्रम को नहीं बदलता है, इसलिए कोई भी दोहराए गए नंबर अपनी relative order बनाए रखेंगे (जिसे stability के रूप में जाना जाता है)।


===========================              
                 Insertion Sort Algorithm          


    Insertion Sort ----- 
                   Insertion sort is a simple, comparison-based sorting algorithm that builds the final sorted array one element at a time. It’s efficient for small data sets and generally works well for data that’s already partially sorted. Here’s how it works:

    Explanation:
            Start from the second element (index 1) and assume that the first element (index 0) is already sorted.
            Take the next element (the "key" element) and compare it with the elements before it in the sorted portion of the array.
            Move elements that are greater than the key element one position to the right.
            Insert the key element into its correct position in the sorted portion.
            Repeat steps 2-4 until the entire array is sorted.

            इंसर्शन सॉर्ट एक सरल, तुलना-आधारित सॉर्टिंग एल्गोरिदम है जो अंतिम सॉर्ट की गई सूची को एक समय में एक तत्व बनाता है। यह छोटे डेटा सेट के लिए प्रभावी है और आमतौर पर उन डेटा के लिए अच्छी तरह से काम करता है जो पहले से आंशिक रूप से सॉर्ट किए गए हैं। यह इस प्रकार काम करता है: 

            व्याख्या:
                  दूसरे तत्व (सूचकांक 1) से शुरू करें और मान लें कि पहला तत्व (सूचकांक 0) पहले से सॉर्ट किया गया है। 
                  अगले तत्व ("की" तत्व) को लें और इसे सूची के सॉर्ट किए गए भाग में इसके पहले के तत्वों के साथ तुलना करें। 
                  उन तत्वों को एक स्थान दाईं ओर ले जाएं जो की तत्व से बड़े हैं। की तत्व को सॉर्ट किए गए भाग में इसके सही स्थान पर डालें। पूरी सूची को सॉर्ट होने तक चरण 2-4 को दोहराएं।
                  जटिलता: समय जटिलता: O(n²) सबसे खराब स्थिति में, जहाँ n तत्वों की संख्या है। स्थान जटिलता: O(1) क्योंकि यह सूची को स्थान में सॉर्ट करता है।

                  
===================================


                        Merge Sort Algorithm



Merge Sort : 

             Merge Sort is a divide-and-conquer sorting algorithm that divides an array into smaller subarrays, sorts them, and then merges them back together. 
            It’s efficient with a time complexity of 𝑂(𝑛log𝑛) O(nlogn) and is often used in cases where stability and predictable performance are necessary.

Here's a breakdown of how it works and implementations in JavaScript and C++.

        Merge Sort Steps

    Divide: Split the array into two halves until each subarray contains a single element.
    Conquer: Sort and merge the subarrays by comparing elements in each subarray, combining them into a single sorted array.
    Combine: Recursively merge all sorted subarrays back together to produce the fully sorted array.

    Example

        Suppose we have an array [38, 27, 43, 3, 9, 82, 10]:

       Split: [38, 27, 43, 3] and [9, 82, 10].
       Split further until single elements: [38], [27], [43], [3], [9], [82], [10].
       Merge pairs back in sorted order: [27, 38], [3, 43], [9, 10, 82].
        Continue merging sorted subarrays until the array is fully sorted: [3, 9, 10, 27, 38, 43, 82].


      मर्ज सॉर्ट एक विभाजित-और-जीत सॉर्टिंग एल्गोरिथ्म है जो एक सरणी को छोटे उप-सरणी में विभाजित करता है, उन्हें सॉर्ट करता है, और फिर उन्हें वापस एक साथ मर्ज करता है। यह समय जटिलता के साथ कुशल है

      Time Complextiy : (nlogn)
           और इसका प्रयोग अक्सर उन मामलों में किया जाता है जहां स्थिरता और पूर्वानुमानित प्रदर्शन आवश्यक होता है।



    मर्ज सॉर्ट Steps :

        विभाजित करें :
                 सरणी को दो हिस्सों में विभाजित करें जब तक कि प्रत्येक उपसरणी में एक एकल तत्व न हो।
        विजय (Conquer) : 
                 प्रत्येक उपसरणी में तत्वों की तुलना करके उपसरणी को क्रमबद्ध और मर्ज करें, तथा उन्हें एकल क्रमबद्ध सारणी में संयोजित करें।
        संयोजित करें :
        पूर्णतः क्रमबद्ध सारणी बनाने के लिए सभी क्रमबद्ध उप-सरणी को पुनः एक साथ संयोजित करें।

        उदाहरण:

        मान लीजिए हमारे पास एक सारणी है [38, 27, 43, 3, 9, 82, 10]:
        विभाजन: [38, 27, 43, 3]और [9, 82, 10].
        एकल तत्वों तक आगे विभाजित करें: [38], [27], [43], [3], [9], [82], [10]।
        जोड़ों को क्रमबद्ध क्रम में वापस मर्ज करें: [27, 38], [3, 43], [9, 10, 82].
        क्रमबद्ध उपसरणी को तब तक विलय करना जारी रखें जब तक कि सारणी पूरी तरह से क्रमबद्ध न हो जाए: 
                    [3, 9, 10,27, 38, 43, 82].

=================================

                               Quick Sort Algorithm


Quick Sort Algorithm : 

                  Quick Sort is a popular and efficient sorting algorithm that uses a "divide-and-conquer" approach to sort elements. It selects a pivot element and partitions the array around that pivot, ensuring elements less than the pivot are on its left and elements greater than the pivot are on its right. This process is then recursively applied to the subarrays on each side of the pivot until the entire array is sorted.

     Steps of the Quick Sort Algorithm:

     Choose a Pivot: 

                Select an element from the array as the pivot. Common choices are the first element, the last element, or the middle element.

     Partition:
            Rearrange the elements in the array so that all elements less than the pivot are on its left, and all elements greater than the pivot are on its right.

    Recursion: 
            Recursively apply the above steps to the subarrays on the left and right of the pivot.

    Combine: 
            Once the base condition (i.e., array length of 1 or 0) is met for each subarray, the sorted array is obtained.



            क्विक सॉर्ट एक लोकप्रिय और कुशल सॉर्टिंग एल्गोरिदम है जो तत्वों को सॉर्ट करने के लिए "विभाजित और विजय" दृष्टिकोण का उपयोग करता है। यह एक पिवट तत्व का चयन करता है और उस पिवट के चारों ओर सरणी को विभाजित करता है, यह सुनिश्चित करते हुए कि पिवट से छोटे तत्व उसके बाईं ओर और पिवट से बड़े तत्व उसके दाईं ओर हैं। यह प्रक्रिया फिर पिवट के प्रत्येक तरफ के उपसरणियों पर पुनरावृत्त रूप से लागू की जाती है जब तक कि पूरी सरणी सॉर्ट नहीं हो जाती। 


     क्विक सॉर्ट एल्गोरिदम के चरण:

    पिवट चुनें: 
               सरणी से एक तत्व को पिवट के रूप में चुनें। सामान्य विकल्प पहले तत्व, अंतिम तत्व, या मध्य तत्व होते हैं।
    विभाजन: 
              सरणी में तत्वों को इस तरह से पुनर्व्यवस्थित करें कि सभी तत्व जो पिवट से छोटे हैं, उसके बाईं ओर हों, और सभी तत्व जो पिवट से बड़े हैं, उसके दाईं ओर हों।
    पुनरावृत्ति: 
              पिवट के बाईं और दाईं ओर के उपसरणियों पर उपरोक्त चरणों को पुनरावृत्त रूप से लागू करें।
    संयोजन: 
              एक बार जब आधार स्थिति (यानी, प्रत्येक उपसरणी के लिए 1 या 0 की सरणी लंबाई) पूरी हो जाती है, तो सॉर्ट की गई सरणी प्राप्त होती है।

