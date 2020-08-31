
$(document).ready(function() {
  let projectsCategory = document.getElementById('projectsCategory'),
  projectsData = document.getElementById('filterable'),
  projectType = []

  $.get(`/api/v1/getData`, function(AllData) {
    AllData.map(item => {
      // -- Projects Category
      for (let projectCategory of item.category) {
        projectsCategory.innerHTML += `<a class="button ui toggle filter" href="#${projectCategory.link}" id="filter-${projectCategory.link}">${projectCategory.name}</a>`
      }
      // -- Projects Data
      for (let projectData of item.data) {
        projectData.type[0].repo ? projectType.push(`<a class="ui bottom attached button black" href="${projectData.type[0].repo}" target="_blank"><i class="github icon"></i>Repository</a>`) : ''
        projectData.type[0].npm ? projectType.push(`<a class="ui bottom attached button red" href="${projectData.type[0].npm}" target="_blank"><i class="npm icon"></i>Modules</a>`) : ''
        projectData.type[0].apk ? projectType.push(`<a class="ui bottom attached button teal" href="${projectData.type[0].apk}" target="_blank"><i class="google play icon"></i>Play Store</a>`) : ''
        projectData.type[0].site ? projectType.push(`<a class="ui bottom attached button grey" href="${projectData.type[0].site}" target="_blank"><i class="globe icon"></i>Website</a>`) : ''
        projectData.type[0].contact ? projectType.push(`<a class="ui bottom attached button orange" href="${projectData.type[0].contact}" target="_blank"><i class="mail icon"></i>Contact</a>`) : ''
        projectsData.innerHTML += `
          <div class="ui card ${projectData.category}">
            <div class="image">
              <img style="max-height: 166px" src="${projectData.thumbnail}" alt="${projectData.name}">
            </div>
            <div class="content">
              <span class="header">${projectData.name}</span>
              <div class="meta">
                <span class="date">${projectData.categoryName}</span>
              </div>
              <div class="description">${projectData.description}</div>
            </div>
            <div class="extra content">
              <div class="ui small labels">
                ${projectData.tags.map((dataTags) => `<div class="ui grey label">${dataTags}</div>`).join('')}
              </div>
            </div>
            <div class="nonprintable ${projectType.length > 1 ? 'ui bottom attached buttons' : ''}" style="z-index: 1;">
              ${projectType.map((data, index) => {
                if (projectType.length > 1) {
                  if (index == 1) {
                    tempData = `<div class="or" data-text="or"></div>${data}`
                  } else {
                    tempData = data
                  }
                  return tempData
                } else {
                  return data
                }
              }).join('')}
            </div>
          </div>
        `
        projectType = []
      }
    })
    let selector_query = window.location.hash.substr(1)
    let filterButtons = $('.button.filter')
    if (selector_query) {
      let element = $('#filter-' + selector_query)
      if (element.length) {
        filter(selector_query);
        filterButtons.removeClass('active')
        element.addClass('active')
        element.blur()
      }
    }
    filterButtons.click(function() {
      filter(this.id.replace("filter-", ""))
      filterButtons.removeClass('active')
      $(this).addClass('active')
      $(this).blur()
    })
    function filter(category) {
      let selector = $('#filterable > div, #filterable > a')
      if (category.toLowerCase() == 'all' || category.toLowerCase() == 'todos') {
        selector.fadeIn(450)
      } else {
        var $el = $('.' + category).fadeIn(450);
        selector.not($el).hide(0, function() {
          selector.not($el).attr("style", "display: none !important")
        })
      }
    }
  })
})