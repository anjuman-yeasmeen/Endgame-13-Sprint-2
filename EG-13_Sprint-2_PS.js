/**
 * @param {string} str
 * @return {string}
 */
function reverseString(str){
    return str.split("").reverse().join("");
}

/**
 * @param {number[]} nums
 * @return {number}
 */
function findMax(nums){
    let max = nums[0];

    for(let i = 1; i < nums.length; i++){
        if(nums[i] > max){
            max = nums[i];
        }
    }

    return max;
}
/**
 * @param {string} str
 * @return {boolean}
 */
function isPalindrome(str){
    return str === str.split("").reverse().join("");
}
/**
 * @param {number[]} nums
 * @return {number}
 */
function sumArray(nums){
    let sum = 0;

    for(let i = 0; i < nums.length; i++){
        sum = sum + nums[i];
    }

    return sum;
}

/**
 * @param {string} str
 * @return {number}
 */
function countVowels(str){
    let count = 0;

    for(let i = 0; i < str.length; i++){
        if("aeiou".includes(str[i].toLowerCase())){
            count++;
        }
    }

    return count;
}
function twoSum(nums, target){
    let map = new Map();

    for(let i = 0; i < nums.length; i++){
        let complement = target - nums[i];

        if(map.has(complement)){
            return [map.get(complement), i];
        }

        map.set(nums[i], i);
    }

    return [];
}

/**
 * @param {Array} arr
 * @return {Array}
 */
function flattenArray(arr){
    let result = [];

    for(let i = 0; i < arr.length; i++){
        if(Array.isArray(arr[i])){
            result = result.concat(flattenArray(arr[i]));
        } else {
            result.push(arr[i]);
        }
    }

    return result;
}
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
function groupAnagrams(strs){
    let groups = {};

    for(let str of strs){
        let key = str.split("").sort().join("");

        if(!groups[key]){
            groups[key] = [];
        }

        groups[key].push(str);
    }

    return Object.values(groups);
}

/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s){
    let left = 0;
    let maxLength = 0;
    let seen = new Set();

    for(let right = 0; right < s.length; right++){
        while(seen.has(s[right])){
            seen.delete(s[left]);
            left++;
        }

        seen.add(s[right]);

        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}

/**
 * @param {Object} obj
 * @return {Object}
 */
function deepClone(obj){
    if(obj === null || typeof obj !== "object"){
        return obj;
    }

    let clone = {};

    for(let key in obj){
        clone[key] = deepClone(obj[key]);
    }

    return clone;
}
