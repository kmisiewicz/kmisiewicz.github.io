(function () {
  // Tag filter on the home page.
  var filters = document.querySelector('[data-filters]');
  if (filters) {
    var chips = Array.prototype.slice.call(filters.querySelectorAll('[data-tag]'));
    var cards = Array.prototype.slice.call(document.querySelectorAll('[data-tags]'));
    var empty = document.querySelector('[data-empty]');

    var applyTag = function (tag) {
      if (!chips.some(function (chip) { return chip.dataset.tag === tag; })) tag = '';
      chips.forEach(function (chip) {
        chip.setAttribute('aria-pressed', String(chip.dataset.tag === tag));
      });
      var shown = 0;
      cards.forEach(function (card) {
        var match = !tag || card.dataset.tags.indexOf('|' + tag + '|') !== -1;
        card.hidden = !match;
        if (match) shown++;
      });
      if (empty) empty.hidden = shown > 0;
    };

    var tagFromHash = function () {
      var match = location.hash.match(/^#tag=(.+)$/);
      return match ? decodeURIComponent(match[1]) : '';
    };

    filters.addEventListener('click', function (event) {
      var chip = event.target.closest('[data-tag]');
      if (!chip) return;
      var tag = chip.dataset.tag;
      history.replaceState(null, '', tag ? '#tag=' + encodeURIComponent(tag) : location.pathname + location.search);
      applyTag(tag);
    });
    window.addEventListener('hashchange', function () { applyTag(tagFromHash()); });

    applyTag(tagFromHash());
    filters.hidden = false;
  }

  // Click an image in a post to view it full size.
  var prose = document.querySelector('.prose');
  if (prose && typeof HTMLDialogElement === 'function') {
    var dialog = document.createElement('dialog');
    var preview = document.createElement('img');
    dialog.className = 'lightbox';
    dialog.setAttribute('aria-label', 'Image preview');
    dialog.appendChild(preview);
    document.body.appendChild(dialog);

    prose.addEventListener('click', function (event) {
      var image = event.target;
      if (image.tagName !== 'IMG' || image.closest('a')) return;
      preview.src = image.currentSrc || image.src;
      preview.alt = image.alt;
      dialog.showModal();
    });
    dialog.addEventListener('click', function () { dialog.close(); });
  }
})();
